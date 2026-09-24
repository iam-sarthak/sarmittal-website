import { GraduationCap } from "lucide-react";
import { education } from "@/lib/resume";
import { accents } from "@/lib/accents";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section
      id="education"
      className="container-site py-20 sm:py-28"
      aria-labelledby="education-heading"
    >
      <SectionHeading
        kicker="Education"
        title="School, then more school."
        subtitle="MCA from Thapar. BCA from Maharishi Markandeshwar. Both finished with a number I still like."
        stickerClass="sticker-coral"
      />

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
        {education.map((ed, i) => {
          const accent = accents[ed.accent];
          return (
            <Reveal key={ed.school} delay={i * 0.08}>
              <article
                className={`card-funky card-funky-hover h-full p-7 ${accent.soft} ${
                  i % 2 ? "rotate-1" : "-rotate-1"
                } hover:rotate-0`}
              >
                <span className="flex size-12 items-center justify-center rounded-xl border-2 border-ink bg-paper shadow-[2px_2px_0_var(--ink)]">
                  <GraduationCap className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight leading-snug">
                  {ed.degree}
                </h3>
                <p className="mt-2 text-sm font-semibold">{ed.school}</p>
                <p className="mt-1 text-sm text-ink-soft">
                  {ed.location} · {ed.dates}
                </p>
                <p className="mt-4 inline-block rounded-full border-2 border-ink bg-paper px-3 py-1 font-display text-sm font-bold shadow-[2px_2px_0_var(--ink)]">
                  {ed.score}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
