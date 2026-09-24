"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Mail,
  Quote,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";
import Reveal from "./Reveal";

type Intake = {
  input: string;
  slug: string | null;
  name: string | null;
};

const promises = [
  { icon: Timer, text: "30 minutes, free, no obligation" },
  { icon: ShieldCheck, text: "Honest advice — including \"don't automate this\"" },
  { icon: CalendarClock, text: "You'll leave with a clear next step" },
];

export default function BookCall() {
  const [intake, setIntake] = useState<Intake | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("fs-intake");
      if (raw) setIntake(JSON.parse(raw));
    } catch {
      // ignore malformed storage
    }
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Hook this up to your email service / scheduling API when ready.
    setSubmitted(true);
  }

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black_30%,transparent_75%)]" />

      <div className="container-site relative pt-32 sm:pt-40 pb-24">
        <div className="mx-auto max-w-2xl text-center flex flex-col items-center">
          <Reveal y={16}>
            <span className="sticker sticker-teal">
              <span className="size-2 rounded-full bg-ink" />
              Free Discovery Call
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-7 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] text-balance">
              Let&apos;s talk about your <span className="squiggle">workflow</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-base sm:text-lg text-ink-soft leading-relaxed">
              You describe how things work today. I&apos;ll tell you what can be
              automated, what it would take, and whether it&apos;s worth it.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <ul className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
              {promises.map((p) => (
                <li key={p.text} className="flex items-center justify-center gap-2 text-sm font-bold text-ink-soft">
                  <p.icon className="size-4 shrink-0 text-purple" aria-hidden />
                  {p.text}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* left: illustration + their problem + direct channels */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.2}>
              <div className="card-funky overflow-hidden -rotate-2 hover:rotate-0 transition-transform duration-500 max-w-[260px] mx-auto lg:mx-0">
                <Image
                  src="/illustrations/illo-call.png"
                  alt="Cartoon of Sarthak waving from a video call window"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </Reveal>

            {intake?.input && (
              <motion.div
                initial={{ opacity: 0, y: 16, rotate: 1 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="card-funky bg-purple-soft p-6"
              >
                <div className="sticker sticker-purple !text-[0.65rem]">
                  <Sparkles className="size-3.5" aria-hidden />
                  {intake.name ? `We'll discuss: ${intake.name}` : "We'll discuss your workflow"}
                </div>
                <blockquote className="mt-4 flex gap-3 text-sm text-ink-soft leading-relaxed">
                  <Quote className="size-4 shrink-0 rotate-180 text-purple" aria-hidden />
                  {intake.input}
                </blockquote>
                {intake.slug && (
                  <Link
                    href={`/solutions/${intake.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-purple hover:underline"
                  >
                    Read how I automate this
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                )}
              </motion.div>
            )}

            <Reveal delay={0.3}>
              <div className="card-funky p-6">
                <h2 className="font-display text-sm font-bold">Prefer to reach out directly?</h2>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href="mailto:sarthakmittalcs@gmail.com?subject=Hello%20Sarthak"
                    className="btn-funky btn-white w-full text-sm"
                  >
                    <Mail className="size-4" aria-hidden />
                    sarthakmittalcs@gmail.com
                  </a>
                </div>
                <p className="mt-4 text-xs text-ink-soft leading-relaxed">
                  I work with clients worldwide and usually reply within a few
                  hours.
                </p>
              </div>
            </Reveal>
          </div>

          {/* right: booking form */}
          <Reveal delay={0.35}>
            <div className="card-funky p-6 sm:p-8 rotate-1 hover:rotate-0 transition-transform duration-500">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 py-16 text-center">
                  <CheckCircle2 className="size-12 text-teal" aria-hidden />
                  <h2 className="font-display text-xl font-bold">Call requested.</h2>
                  <p className="max-w-sm text-sm text-ink-soft leading-relaxed">
                    I&apos;ll confirm a time with you by email
                    within one business day.
                  </p>
                  <Link href="/" className="btn-funky btn-white mt-2">
                    Back to home
                  </Link>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-lg font-bold">Request your call</h2>
                  <p className="mt-1.5 text-sm text-ink-soft">
                    Pick a time that suits you — I&apos;ll confirm it directly.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="b-name" className="text-xs font-bold text-ink-soft">
                        Name
                      </label>
                      <input id="b-name" name="name" required className="field" placeholder="Your name" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="b-business" className="text-xs font-bold text-ink-soft">
                        Business
                      </label>
                      <input id="b-business" name="business" className="field" placeholder="Company / business name" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="b-email" className="text-xs font-bold text-ink-soft">
                        Email
                      </label>
                      <input id="b-email" name="email" type="email" required className="field" placeholder="you@company.com" />
                    </div>
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label htmlFor="b-time" className="text-xs font-bold text-ink-soft">
                        Preferred day &amp; time
                      </label>
                      <input
                        id="b-time"
                        name="time"
                        className="field"
                        placeholder="e.g. Weekdays after 6pm IST, or this Saturday morning"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label htmlFor="b-notes" className="text-xs font-bold text-ink-soft">
                        Anything else I should know?
                      </label>
                      <textarea
                        id="b-notes"
                        name="notes"
                        rows={3}
                        defaultValue={intake?.input ?? ""}
                        className="field resize-none"
                        placeholder="Optional — a line or two about your current process."
                      />
                    </div>
                    <div className="sm:col-span-2 pt-1">
                      <button type="submit" className="btn-funky w-full">
                        Book My Free Call
                        <ArrowRight className="size-4" aria-hidden />
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
