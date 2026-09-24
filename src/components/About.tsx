import Image from "next/image";
import Link from "next/link";
import { Download, Server, Globe, Sparkles, Database, Cloud, Workflow } from "lucide-react";
import { profile } from "@/lib/resume";
import Reveal from "./Reveal";

const expertise = [
  { icon: Server, label: "Java & Spring Boot", bg: "bg-purple-soft" },
  { icon: Globe, label: "Node.js & React", bg: "bg-yellow-soft" },
  { icon: Sparkles, label: "RAG & LLM APIs", bg: "bg-teal-soft" },
  { icon: Database, label: "PostgreSQL & MongoDB", bg: "bg-coral-soft" },
  { icon: Cloud, label: "AWS & Docker", bg: "bg-blue-soft" },
  { icon: Workflow, label: "REST APIs", bg: "bg-purple-soft" },
];

export default function About() {
  return (
    <section
      id="about"
      className="container-site py-20 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
        <Reveal>
          <div className="relative mx-auto w-fit">
            <div className="card-funky overflow-hidden -rotate-2 hover:rotate-0 transition-transform duration-500 max-w-xs sm:max-w-sm">
              <Image
                src="/illustrations/sarthak-photo.jpg"
                alt="Sarthak Mittal smiling in the mountains"
                width={480}
                height={640}
                className="w-full h-auto object-cover"
              />
              <div className="border-t-2 border-ink bg-paper px-4 py-3 text-center">
                <span className="font-display text-sm font-bold">
                  That&apos;s me — usually behind a laptop, occasionally on a mountain.
                </span>
              </div>
            </div>

            <div className="absolute -right-10 -bottom-8 w-28 sm:w-36 rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="card-funky overflow-hidden rounded-full">
                <Image
                  src="/illustrations/about-sarthak.png"
                  alt="Cartoon version of Sarthak giving a thumbs up"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <span className="sticker sticker-purple">About me</span>
            <h2
              id="about-heading"
              className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1] text-balance"
            >
              Backend first. AI when it{" "}
              <span className="marker-yellow">actually helps</span>.
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              I&apos;m Sarthak Mittal, a software developer in Gurugram. I spend
              most days on production APIs — Java, Spring Boot, Postgres — and
              the rest wiring LLMs into workflows that used to be a pile of
              tickets.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              At CarePay I work on loan onboarding, NBFC integrations and
              RAG-powered application journeys. Before that I was at Leverage
              Edu, keeping internal tools stable and shipping REST features
              with product and QA. MCA from Thapar (8.6), BCA from MMU (9.45).
            </p>

            <ul className="mt-8 flex flex-wrap gap-3" aria-label="Areas of expertise">
              {expertise.map((e, i) => (
                <li
                  key={e.label}
                  className={`flex items-center gap-2 rounded-full border-2 border-ink px-4 py-2 text-sm font-bold shadow-[2px_2px_0_var(--ink)] hover:-translate-y-0.5 transition-transform ${e.bg} ${
                    i % 2 ? "rotate-1" : "-rotate-1"
                  }`}
                >
                  <e.icon className="size-4" aria-hidden />
                  {e.label}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={profile.resumeHref} download className="btn-funky btn-yellow !py-2.5 !px-5 text-sm">
                <Download className="size-4" />
                Resume
              </a>
              <Link href="/contact" className="btn-funky btn-white !py-2.5 !px-5 text-sm">
                Get in touch
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
