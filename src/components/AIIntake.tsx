"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles, RotateCcw, Check } from "lucide-react";
import { analyzeProblem, type Analysis } from "@/lib/analyze";
import { getSolution } from "@/lib/solutions";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const chips = [
  { label: "Leads & sales", text: "My leads come in on WhatsApp and my website, and my team tracks them in Excel. Follow-ups keep getting missed." },
  { label: "Invoices & payments", text: "I create invoices manually every month and chase payments over WhatsApp. It takes hours and things slip through." },
  { label: "Reports & spreadsheets", text: "Every week someone builds reports by copying data between spreadsheets. The numbers are always outdated." },
  { label: "Appointments", text: "Customers book appointments by calling us. Confirmations and reminders are manual, and no-shows are common." },
];

const examples = [
  "We get 50+ enquiries a day on WhatsApp and my staff copies each one into a spreadsheet by hand.",
  "Our invoices are made in Word, sent by email, and we track payments in a notebook.",
  "Suppliers send us PDF invoices and someone types every line item into our system.",
];

const MAX_LEN = 1000;

export default function AIIntake() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"idle" | "thinking" | "result">("idle");
  const [analysis, setAnalysis] = useState<Analysis | null>(null);

  async function handleAnalyze() {
    const input = text.trim();
    if (!input) return;
    setPhase("thinking");

    // minimum thinking time so the result doesn't flash in jarringly
    const minDelay = new Promise((r) => setTimeout(r, 900));

    let result: Analysis;
    try {
      const [res] = await Promise.all([
        fetch("/api/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: input }),
        }),
        minDelay,
      ]);
      if (!res.ok) throw new Error(`analyze failed: ${res.status}`);
      const data: {
        slug: string | null;
        diagnosis: string;
        plan: string[];
        closing: string;
      } = await res.json();
      result = {
        input,
        solution: data.slug ? (getSolution(data.slug) ?? null) : null,
        diagnosis: data.diagnosis,
        plan: data.plan,
        closing: data.closing,
      };
    } catch {
      // Gemini unavailable (no key, offline, rate limited) — use the
      // local keyword matcher so the section always works
      result = analyzeProblem(input);
    }

    setAnalysis(result);
    setPhase("result");
  }

  function handleBookCall() {
    if (analysis) {
      sessionStorage.setItem(
        "fs-intake",
        JSON.stringify({
          input: analysis.input,
          slug: analysis.solution?.slug ?? null,
          name: analysis.solution?.name ?? null,
        })
      );
    }
    router.push("/book");
  }

  function reset() {
    setPhase("idle");
    setAnalysis(null);
  }

  return (
    <section
      id="intake"
      className="relative py-20 sm:py-28 overflow-hidden"
      aria-labelledby="intake-heading"
    >
      <div className="container-site relative">
        <SectionHeading
          kicker="Start here"
          title="Tell me what's eating your time."
          subtitle="Describe the repetitive work in your business, in your own words. I'll show you what an automated version could look like — before we even talk."
          stickerClass="sticker-purple"
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl">
            {/* quick-pick chips */}
            <div className="flex flex-wrap justify-center gap-2.5" role="group" aria-label="Common problems">
              {chips.map((chip, i) => (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => {
                    setText(chip.text);
                    reset();
                  }}
                  className={`rounded-full border-2 border-ink px-4 py-2 text-sm font-bold transition-all duration-200 ${
                    text === chip.text
                      ? "bg-purple text-white shadow-[3px_3px_0_var(--ink)] -translate-y-0.5"
                      : `${["bg-yellow-soft", "bg-teal-soft", "bg-coral-soft", "bg-blue-soft"][i % 4]} hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--ink)]`
                  }`}
                >
                  {text === chip.text && <Check className="mr-1.5 inline size-3.5" aria-hidden />}
                  {chip.label}
                </button>
              ))}
            </div>

            {/* input panel */}
            <div className="card-funky mt-7 p-5 sm:p-6">
              <label htmlFor="intake-text" className="sr-only">
                Describe what you want to automate
              </label>
              <textarea
                id="intake-text"
                value={text}
                maxLength={MAX_LEN}
                onChange={(e) => {
                  setText(e.target.value);
                  if (phase !== "idle") reset();
                }}
                rows={4}
                placeholder="e.g. Every enquiry from WhatsApp is copied into Excel by hand, and my team forgets to follow up with half of them…"
                className="w-full resize-none bg-transparent text-base leading-relaxed placeholder:text-ink-soft/50 focus:outline-none"
              />
              <div className="mt-4 flex items-center justify-between gap-4 border-t-2 border-dashed border-ink/15 pt-4">
                <span className="text-xs font-bold text-ink-soft tabular-nums">
                  {text.length}/{MAX_LEN}
                </span>
                <button
                  type="button"
                  onClick={handleAnalyze}
                  disabled={!text.trim() || phase === "thinking"}
                  className="btn-funky disabled:opacity-40 disabled:pointer-events-none"
                >
                  {phase === "thinking" ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="inline-flex"
                      >
                        <Sparkles className="size-4" aria-hidden />
                      </motion.span>
                      Analyzing your workflow…
                    </>
                  ) : (
                    <>
                      <Sparkles className="size-4" aria-hidden />
                      Show Me the Automation
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* result */}
            <AnimatePresence>
              {phase === "result" && analysis && (
                <motion.div
                  initial={{ opacity: 0, y: 24, rotate: -1 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="card-funky mt-5 bg-purple-soft p-6 sm:p-8"
                >
                  <div className="sticker sticker-purple !rotate-1">
                    <Sparkles className="size-3.5" aria-hidden />
                    {analysis.solution
                      ? `Matched: ${analysis.solution.name}`
                      : "Custom workflow"}
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="mt-5 text-sm sm:text-base leading-relaxed"
                  >
                    {analysis.diagnosis}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6"
                  >
                    <h3 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">
                      What I&apos;d build for you
                    </h3>
                    <ol className="mt-3 flex flex-col gap-2">
                      {analysis.plan.map((step, i) => (
                        <motion.li
                          key={step}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.12 }}
                          className="flex items-start gap-3 rounded-xl border-2 border-ink bg-paper px-4 py-2.5 text-sm"
                        >
                          <span className="font-mono text-xs font-bold text-purple pt-0.5">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {step}
                        </motion.li>
                      ))}
                    </ol>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + analysis.plan.length * 0.12 }}
                    className="mt-6 text-sm text-ink-soft leading-relaxed"
                  >
                    {analysis.closing}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + analysis.plan.length * 0.12 }}
                    className="mt-7 flex flex-col sm:flex-row items-center gap-3"
                  >
                    <button type="button" onClick={handleBookCall} className="btn-funky">
                      Book a Free Call
                      <ArrowRight className="size-4" aria-hidden />
                    </button>
                    {analysis.solution && (
                      <Link
                        href={`/solutions/${analysis.solution.slug}`}
                        className="btn-funky btn-white"
                      >
                        See the full solution
                      </Link>
                    )}
                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-bold text-ink-soft hover:text-ink transition-colors"
                    >
                      <RotateCcw className="size-3.5" aria-hidden />
                      Try another
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* examples */}
            {phase === "idle" && (
              <div className="mt-10">
                <p className="flex items-center gap-4 text-center font-display text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ink-soft before:h-0.5 before:flex-1 before:bg-ink/15 after:h-0.5 after:flex-1 after:bg-ink/15">
                  Or try an example
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {examples.map((ex, i) => (
                    <button
                      key={ex}
                      type="button"
                      onClick={() => {
                        setText(ex);
                        reset();
                      }}
                      className={`card-funky card-funky-hover p-4 text-left text-sm leading-relaxed ${
                        ["rotate-1", "-rotate-1", "rotate-1"][i]
                      }`}
                    >
                      {ex}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
