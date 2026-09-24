# Sarthak Mittal — personal site

Portfolio, resume, and freelance services site. Next.js App Router on Vercel.

## Local

```bash
cp .env.example .env
# optional: add GEMINI_API_KEY from https://aistudio.google.com/apikey
npm install
npm run dev
```

## Deploy on Vercel

1. Push this repo (`iam-sarthak/sarmittal-website`) to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new). Framework is Next.js; leave build settings on defaults (`npm run build` / `.next`).
3. In Project Settings → Environment Variables, add:

| Name | Required | Notes |
| --- | --- | --- |
| `GEMINI_API_KEY` | No | Enables the AI intake. Without it, the site still deploys and intake falls back to the local matcher. |
| `GEMINI_MODEL` | No | Defaults to `gemini-2.5-flash`. |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical URL for metadata. Vercel production/preview URLs are used if unset. |

4. Redeploy after adding env vars.

Node 20.9+ is required (`.node-version` pins 22).
