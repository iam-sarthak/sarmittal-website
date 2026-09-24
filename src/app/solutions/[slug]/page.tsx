import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Clock } from "lucide-react";
import { getSolution, solutions } from "@/lib/solutions";
import { accents } from "@/lib/accents";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import BeforeAfter from "@/components/BeforeAfter";
import Benefits from "@/components/Benefits";
import StepsSection from "@/components/StepsSection";
import Checklist from "@/components/Checklist";
import TechStack from "@/components/TechStack";
import CTASection from "@/components/CTASection";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.name,
    description: solution.metaDescription,
    openGraph: {
      title: `${solution.name} — Sarthak Mittal`,
      description: solution.metaDescription,
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const accent = accents[solution.accent];

  return (
    <article>
      {/* ---------- Hero ---------- */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_30%,transparent_75%)]" />
        <div className="container-site relative grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center pt-32 sm:pt-40 pb-16">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <Reveal y={16}>
              <span className={`sticker ${accent.sticker}`}>
                {solution.category} Automation
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.07] text-balance">
                {solution.name}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl text-base sm:text-lg text-ink-soft leading-relaxed">
                {solution.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-5">
                <Link href="/book" className="btn-funky">
                  Discuss This Automation
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-ink-soft">
                  <Clock className="size-4 text-purple" aria-hidden />
                  Typical build: {solution.timeline}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className={`card-funky overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500 max-w-sm mx-auto ${accent.soft}`}>
              <Image
                src={solution.illustration}
                alt={`Cartoon illustration for ${solution.name}`}
                width={520}
                height={520}
                priority
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </header>

      {/* ---------- The Problem ---------- */}
      <section className="container-site py-16 sm:py-24" aria-label="The problem">
        <SectionHeading
          kicker="The problem"
          title="How this works today — manually."
          subtitle={solution.problem.intro}
          stickerClass="sticker-coral"
        />
        <div className="mt-14">
          <WorkflowDiagram
            variant="manual"
            sources={solution.problem.sources}
            nodes={solution.problem.manualFlow}
            ariaLabel={`Manual workflow for ${solution.name}`}
          />
        </div>
      </section>

      {/* ---------- The Automated Solution ---------- */}
      <section
        className="relative py-16 sm:py-24 overflow-hidden"
        aria-label="The automated solution"
      >
        <div
          className="absolute inset-0 bg-dots opacity-50 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black_20%,transparent_75%)]"
          aria-hidden
        />
        <div className="container-site relative">
          <SectionHeading
            kicker="The automated solution"
            title="The same workflow — running itself."
            subtitle="Every step below happens automatically, in seconds, without anyone touching a spreadsheet."
            stickerClass="sticker-purple"
          />
          <div className="mt-14">
            <WorkflowDiagram
              variant="automated"
              nodes={solution.automatedFlow}
              ariaLabel={`Automated workflow for ${solution.name}`}
            />
          </div>
        </div>
      </section>

      {/* ---------- Benefits ---------- */}
      <section className="container-site py-16 sm:py-24" aria-label="Business benefits">
        <SectionHeading
          kicker="Why it's worth it"
          title="What this means for your business."
          subtitle="Automation isn't about fancy tech. It's about time, energy and money staying where they belong — in your business."
          stickerClass="sticker-teal"
        />
        <div className="mt-14">
          <Benefits benefits={solution.benefits} />
        </div>
      </section>

      {/* ---------- Before vs After ---------- */}
      <section className="container-site py-16 sm:py-24" aria-label="Before and after comparison">
        <SectionHeading kicker="The difference" title="Before vs. after." />
        <div className="mt-14">
          <BeforeAfter before={solution.before} after={solution.after} />
        </div>
      </section>

      {/* ---------- How It Works ---------- */}
      <section className="container-site py-16 sm:py-24" aria-label="How it works">
        <SectionHeading
          kicker="How it works"
          title="Step by step, end to end."
          stickerClass="sticker-purple"
        />
        <div className="mt-14">
          <StepsSection steps={solution.steps} />
        </div>
      </section>

      {/* ---------- What I Can Automate ---------- */}
      <section className="container-site py-16 sm:py-24" aria-label="What I can automate">
        <SectionHeading
          kicker="Scope"
          title="What I can automate."
          subtitle="Every item below can be included — or added later as your needs grow."
          stickerClass="sticker-teal"
        />
        <div className="mt-14">
          <Checklist items={solution.checklist} />
        </div>
      </section>

      {/* ---------- Technology ---------- */}
      <section className="container-site py-16 sm:py-24" aria-label="Technology">
        <SectionHeading
          kicker="Technology"
          title="Built on proven tools."
          subtitle="No experimental tech in production. Just reliable, well-supported platforms."
        />
        <div className="mt-12">
          <TechStack items={solution.tech} />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <CTASection
        headline="Have a similar problem?"
        supporting="Message me on LinkedIn or X and we'll talk through it."
      />
    </article>
  );
}
