/**
 * One-off: remove the cream background from the generated illustrations.
 *
 * Flood-fills from the image borders: any pixel connected to the edge whose
 * color is close to the background color becomes transparent. Interior whites
 * and creams (documents, eyes, etc.) are untouched because they aren't
 * connected to the border region.
 *
 * Usage: node scripts/make-transparent.mjs
 */
import sharp from "sharp";
import { readdir } from "node:fs/promises";
import path from "node:path";

const DIR = path.resolve("public/illustrations");
const TOLERANCE = 16; // per-channel closeness to the background color
const HALO_TOLERANCE = 40; // looser pass to trim anti-aliased halo pixels

function close(r, g, b, bg, tol) {
  return (
    Math.abs(r - bg[0]) <= tol &&
    Math.abs(g - bg[1]) <= tol &&
    Math.abs(b - bg[2]) <= tol
  );
}

async function process(file) {
  const input = path.join(DIR, file);
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;

  // background color = average of the four corners
  const corners = [0, (w - 1) * 4, (h - 1) * w * 4, ((h - 1) * w + w - 1) * 4];
  const bg = [0, 1, 2].map((c) =>
    Math.round(corners.reduce((s, o) => s + data[o + c], 0) / 4)
  );

  // BFS flood fill from all border pixels
  const visited = new Uint8Array(w * h);
  const queue = [];
  for (let x = 0; x < w; x++) queue.push(x, x + (h - 1) * w);
  for (let y = 0; y < h; y++) queue.push(y * w, y * w + w - 1);

  let removed = 0;
  while (queue.length) {
    const i = queue.pop();
    if (visited[i]) continue;
    visited[i] = 1;
    const o = i * 4;
    if (!close(data[o], data[o + 1], data[o + 2], bg, TOLERANCE)) continue;
    data[o + 3] = 0;
    removed++;
    const x = i % w;
    const y = (i / w) | 0;
    if (x > 0) queue.push(i - 1);
    if (x < w - 1) queue.push(i + 1);
    if (y > 0) queue.push(i - w);
    if (y < h - 1) queue.push(i + w);
  }

  // halo pass: opaque pixels touching transparency that are still bg-ish
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      const o = i * 4;
      if (data[o + 3] === 0) continue;
      const nearTransparent =
        (x > 0 && data[(i - 1) * 4 + 3] === 0) ||
        (x < w - 1 && data[(i + 1) * 4 + 3] === 0) ||
        (y > 0 && data[(i - w) * 4 + 3] === 0) ||
        (y < h - 1 && data[(i + w) * 4 + 3] === 0);
      if (nearTransparent && close(data[o], data[o + 1], data[o + 2], bg, HALO_TOLERANCE)) {
        data[o + 3] = Math.round(data[o + 3] * 0.3);
        removed++;
      }
    }
  }

  await sharp(data, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile(input + ".tmp");
  const { rename } = await import("node:fs/promises");
  await rename(input + ".tmp", input);

  const pct = ((removed / (w * h)) * 100).toFixed(1);
  console.log(`${file}: bg rgb(${bg.join(",")}), ${pct}% of pixels made transparent`);
}

const files = (await readdir(DIR)).filter((f) => f.endsWith(".png"));
for (const f of files) await process(f);
console.log("done");
