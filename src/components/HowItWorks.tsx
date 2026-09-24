"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    n: "01",
    title: "Tell me the problem",
    description:
      "A short call about what your team does manually today. No technical language needed.",
    bg: "bg-yellow",
  },
  {
    n: "02",
    title: "I map your workflow",
    description:
      "I document every step, tool and handoff — and mark exactly what can be automated.",
    bg: "bg-teal",
  },
  {
    n: "03",
    title: "I build the automation",
    description:
      "Custom software connected to the tools you already use. Tested with your real data.",
    bg: "bg-coral",
  },
  {
    n: "04",
    title: "You stop doing the repetitive work",
    description:
      "The system runs on its own. I monitor it, refine it, and extend it as you grow.",
    bg: "bg-purple",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="how-it-works"
      className="container-site py-20 sm:py-28"
      aria-labelledby="how-heading"
    >
      <SectionHeading
        kicker="Process"
        title="From manual chaos to automated calm, in four steps."
        stickerClass="sticker-teal"
      />

      <div ref={ref} className="relative mt-16 max-w-2xl mx-auto">
        {/* animated progress line */}
        <div
          className="absolute left-[1.65rem] top-2 bottom-2 w-1 rounded bg-ink/10"
          aria-hidden
        />
        <motion.div
          className="absolute left-[1.65rem] top-2 bottom-2 w-1 rounded origin-top bg-purple"
          style={{ scaleY: lineScale }}
          aria-hidden
        />

        <ol className="flex flex-col gap-10">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <li className="relative flex gap-6">
                <span
                  className={`relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl border-2 border-ink font-display text-lg font-bold shadow-[3px_3px_0_var(--ink)] ${step.bg} ${
                    step.bg === "bg-purple" || step.bg === "bg-coral"
                      ? "text-white"
                      : "text-ink"
                  } ${i % 2 ? "rotate-3" : "-rotate-3"}`}
                >
                  {step.n}
                </span>
                <div className="pt-1.5">
                  <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-ink-soft leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
