import { MapPin } from "lucide-react";
import { experience } from "@/lib/resume";
import { accents } from "@/lib/accents";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="container-site py-20 sm:py-28"
      aria-labelledby="experience-heading"
    >
      <SectionHeading
        kicker="Experience"
        title="Where I've been building."
        subtitle="Backend work in fintech and ed-tech — production APIs, AI workflows and the unglamorous bugs that keep systems honest."
        stickerClass="sticker-purple"
      />

      <ol className="relative mx-auto mt-14 max-w-3xl flex flex-col gap-8">
        <span
          className="connector-v absolute left-[27px] top-6 bottom-6 hidden sm:block"
          aria-hidden
        />

        {experience.map((job, i) => {
          const accent = accents[job.accent];
          return (
            <Reveal key={job.company} delay={i * 0.08}>
              <li
                className={`card-funky card-funky-hover relative p-6 sm:p-8 ${accent.soft} ${
                  i % 2 ? "rotate-1" : "-rotate-1"
                } hover:rotate-0`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-xl font-bold tracking-tight">
                        {job.title}
                      </h3>
                      {job.current && (
                        <span className="sticker sticker-teal !text-[0.55rem]">Now</span>
                      )}
                    </div>
                    <p className="mt-1 font-semibold">
                      {job.company}
                      <span className="text-ink-soft font-medium"> · {job.type}</span>
                    </p>
                  </div>
                  <p className="font-display text-sm font-bold">{job.dates}</p>
                </div>

                <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-ink-soft">
                  <MapPin className="size-3.5" aria-hidden />
                  {job.location}
                </p>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                      <span
                        className={`mt-1.5 size-2 shrink-0 rounded-full border-2 border-ink ${accent.bg}`}
                        aria-hidden
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
                  {job.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border-2 border-ink bg-paper px-3 py-1 font-display text-xs font-bold shadow-[2px_2px_0_var(--ink)]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
