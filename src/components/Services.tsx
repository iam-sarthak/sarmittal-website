import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceGroups } from "@/lib/services";
import { accents } from "@/lib/accents";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section
      id="services"
      className="container-site py-20 sm:py-28"
      aria-labelledby="services-heading"
    >
      <SectionHeading
        kicker="Services"
        title="What I can build for you."
        subtitle="Freelance work for businesses that need a backend, an automation, or an AI workflow — without hiring an agency."
        stickerClass="sticker-teal"
      />

      <div className="mt-16 flex flex-col gap-16">
        {serviceGroups.map((group, gi) => {
          const accent = accents[group.accent];
          return (
            <div key={group.title}>
              <Reveal>
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <span className={`sticker ${accent.sticker || ""}`}>{group.title}</span>
                    <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">{group.blurb}</p>
                  </div>
                </div>
              </Reveal>

              <ol className="flex flex-col gap-4">
                {group.items.map((service, i) => (
                  <Reveal key={service.name} delay={i * 0.04}>
                    <li
                      className={`card-funky card-funky-hover p-5 sm:p-6 ${accent.soft} ${
                        i % 2 ? "rotate-[0.4deg]" : "-rotate-[0.4deg]"
                      } hover:rotate-0`}
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                        <span
                          className={`flex size-11 shrink-0 items-center justify-center rounded-xl border-2 border-ink font-display text-sm font-bold shadow-[2px_2px_0_var(--ink)] ${accent.bg} ${
                            ["bg-purple", "bg-coral"].includes(accent.bg)
                              ? "text-white"
                              : "text-ink"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-lg font-bold tracking-tight">
                            {service.name}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                            {service.description}
                          </p>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {service.includes.map((item) => (
                              <li
                                key={item}
                                className="rounded-full border-2 border-ink bg-paper px-2.5 py-0.5 font-display text-[0.65rem] font-bold"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {service.href && (
                          <Link
                            href={service.href}
                            className="inline-flex shrink-0 items-center gap-1.5 self-start text-sm font-bold hover:text-purple"
                          >
                            Details
                            <ArrowRight className="size-3.5" />
                          </Link>
                        )}
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
    </section>
  );
}
