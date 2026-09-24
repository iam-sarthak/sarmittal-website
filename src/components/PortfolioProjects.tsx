import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { portfolioProjects } from "@/lib/resume";
import { accents } from "@/lib/accents";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type PortfolioProjectsProps = {
  featuredOnly?: boolean;
  showViewAll?: boolean;
};

export default function PortfolioProjects({
  featuredOnly = false,
  showViewAll = false,
}: PortfolioProjectsProps) {
  const items = featuredOnly
    ? portfolioProjects.filter((p) => p.featured)
    : portfolioProjects;

  return (
    <section
      id="projects"
      className="container-site py-20 sm:py-28"
      aria-labelledby="projects-heading"
    >
      <SectionHeading
        kicker={featuredOnly ? "Featured work" : "Projects"}
        title={
          featuredOnly
            ? "Things I've shipped that I'm proud of."
            : "A fuller list from resume, LinkedIn and GitHub."
        }
        subtitle={
          featuredOnly
            ? "AI systems, a CRM, and a few frontend experiments that taught me how products actually feel."
            : "Twenty projects — contract intelligence and interview AI at the top, then games, tools and apps I built to learn in public."
        }
        stickerClass="sticker-purple"
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {items.map((project, i) => {
          const accent = accents[project.accent];
          return (
            <Reveal key={project.slug} delay={i * 0.05}>
              <article
                className={`card-funky card-funky-hover flex h-full flex-col overflow-hidden ${
                  i % 2 ? "rotate-1" : "-rotate-1"
                } hover:rotate-0`}
              >
                <div
                  className={`relative border-b-2 border-ink ${accent.soft} px-6 pt-5 pb-0 flex justify-center`}
                >
                  <span className="absolute left-4 top-4 rounded-full border-2 border-ink bg-paper px-2.5 py-0.5 font-display text-[0.62rem] font-bold uppercase tracking-[0.12em]">
                    {project.dates}
                  </span>
                  <Image
                    src={project.illustration}
                    alt=""
                    width={280}
                    height={280}
                    className="h-36 w-36 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{project.oneLiner}</p>

                  <ul className="mt-1 flex flex-col gap-1.5">
                    {project.highlights.slice(0, featuredOnly ? 2 : 3).map((h) => (
                      <li key={h} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                        <span
                          className={`mt-1.5 size-1.5 shrink-0 rounded-full ${accent.bg}`}
                          aria-hidden
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Tech">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border-2 border-ink bg-paper px-2.5 py-0.5 font-display text-[0.65rem] font-bold"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-3 pt-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold hover:text-purple"
                      >
                        <GithubIcon className="size-4" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold hover:text-purple"
                      >
                        Live
                        <ArrowUpRight className="size-3.5" aria-hidden />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {showViewAll && (
        <div className="mt-10 flex justify-center">
          <Link href="/projects" className="btn-funky btn-white">
            View all {portfolioProjects.length} projects
          </Link>
        </div>
      )}
    </section>
  );
}
