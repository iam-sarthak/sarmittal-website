"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, MapPin, Server, Sparkles, Database, Cpu } from "lucide-react";
import { profile } from "@/lib/resume";

const floaters = [
  { Icon: Server, cls: "bg-yellow -left-5 top-8", delay: 0 },
  { Icon: Sparkles, cls: "bg-teal -right-4 top-24", delay: 0.6 },
  { Icon: Database, cls: "bg-coral -left-7 bottom-24", delay: 1.2 },
  { Icon: Cpu, cls: "bg-purple text-white -right-6 bottom-10", delay: 1.8 },
];

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black_25%,transparent_80%)]" />

      <div className="pointer-events-none absolute -top-20 -right-24 size-72 rounded-full bg-purple-soft border-2 border-ink/10" aria-hidden />
      <div className="pointer-events-none absolute top-64 -left-32 size-80 rounded-full bg-yellow-soft border-2 border-ink/10" aria-hidden />

      <div className="container-site relative grid gap-12 lg:grid-cols-[1.15fr_1fr] items-center pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.span {...fadeUp(0)} className="sticker">
            <span className="size-2 rounded-full bg-coral" />
            Hi, I&apos;m Sarthak — Backend Engineer at CarePay
          </motion.span>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-7 text-4xl sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight leading-[1.06] text-balance"
          >
            I build APIs, AI workflows and{" "}
            <span className="squiggle">reliable</span> backend systems.
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 max-w-xl text-base sm:text-lg text-ink-soft leading-relaxed"
          >
            Java, Spring Boot, Node and a growing set of LLM tools. Currently
            shipping fintech infrastructure in Gurugram — 500+ production
            endpoints, RAG-powered loan journeys, and the occasional 40%
            faster query.
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-9 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href={profile.resumeHref}
              download
              className="btn-funky"
            >
              <Download className="size-4" />
              Download Resume
            </a>
            <Link href="/projects" className="btn-funky btn-white">
              See Projects
              <ArrowRight className="size-4" />
            </Link>
          </motion.div>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-10 flex items-center gap-2 text-sm font-semibold text-ink-soft"
          >
            <MapPin className="size-4 text-purple" aria-hidden />
            {profile.location} · Open to backend and AI roles
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="card-funky overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/illustrations/hero-sarthak.png"
              alt="Cartoon illustration of Sarthak coding on a laptop"
              width={640}
              height={640}
              priority
              className="w-full h-auto"
            />
          </div>

          {floaters.map(({ Icon, cls, delay }) => (
            <motion.span
              key={cls}
              className={`absolute flex size-12 items-center justify-center rounded-2xl border-2 border-ink shadow-[3px_3px_0_var(--ink)] ${cls}`}
              animate={reduce ? undefined : { y: [0, -10, 0], rotate: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay, ease: "easeInOut" }}
              aria-hidden
            >
              <Icon className="size-5" />
            </motion.span>
          ))}

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 sticker sticker-teal !rotate-2 whitespace-nowrap"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-40" />
              <span className="relative inline-flex size-2 rounded-full bg-ink" />
            </span>
            CarePay · Backend Engineer
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
