import { skillGroups } from "@/lib/resume";
import { accents } from "@/lib/accents";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="container-site py-20 sm:py-28"
      aria-labelledby="skills-heading"
    >
      <SectionHeading
        kicker="Skills"
        title="The stack I work in every week."
        subtitle="Java and Spring Boot in production, plus Node, React, Postgres and a growing set of LLM tools."
        stickerClass="sticker-teal"
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const accent = accents[group.accent];
          return (
            <Reveal key={group.label} delay={i * 0.05}>
              <div
                className={`card-funky card-funky-hover h-full p-6 ${accent.soft} ${
                  i % 2 ? "rotate-1" : "-rotate-1"
                } hover:rotate-0`}
              >
                <h3 className="font-display text-lg font-bold tracking-tight">{group.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border-2 border-ink bg-paper px-3 py-1 text-xs font-bold shadow-[2px_2px_0_var(--ink)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
