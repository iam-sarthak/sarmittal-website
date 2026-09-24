"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  User,
  Smartphone,
  Copy,
  FileSpreadsheet,
  Mail,
  AlarmClock,
  Zap,
  UserPlus,
  BellRing,
  CalendarCheck,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

type DemoStep = { label: string; icon: LucideIcon; auto?: boolean };

const beforeSteps: DemoStep[] = [
  { label: "Customer sends enquiry", icon: User },
  { label: "Employee checks WhatsApp", icon: Smartphone },
  { label: "Copies information", icon: Copy },
  { label: "Updates Excel", icon: FileSpreadsheet },
  { label: "Sends email", icon: Mail },
  { label: "Creates reminder", icon: AlarmClock },
];

const afterSteps: DemoStep[] = [
  { label: "Customer sends enquiry", icon: User },
  { label: "System captures information", icon: Zap, auto: true },
  { label: "Lead created automatically", icon: UserPlus, auto: true },
  { label: "Team notified", icon: BellRing, auto: true },
  { label: "Follow-up scheduled", icon: CalendarCheck, auto: true },
  { label: "Dashboard updated", icon: LayoutDashboard, auto: true },
];

export default function AutomationDemo() {
  const [mode, setMode] = useState<"before" | "after">("before");
  const reduce = useReducedMotion();
  const steps = mode === "before" ? beforeSteps : afterSteps;

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-dots opacity-60 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black_20%,transparent_75%)]"
        aria-hidden
      />

      <div className="container-site relative">
        <SectionHeading
          kicker="Interactive demo"
          title="See how automation changes the workflow."
          subtitle="Same enquiry. Two very different mornings for your team."
          stickerClass="sticker-purple"
        />

        {/* toggle */}
        <div className="mt-10 flex justify-center">
          <div
            className="relative inline-flex rounded-full border-2 border-ink bg-paper p-1.5 shadow-[4px_4px_0_var(--ink)]"
            role="tablist"
            aria-label="Workflow mode"
          >
            {(["before", "after"] as const).map((m) => (
              <button
                key={m}
                role="tab"
                aria-selected={mode === m}
                onClick={() => setMode(m)}
                className={`relative z-10 rounded-full px-8 py-2.5 font-display text-sm font-bold capitalize transition-colors duration-300 ${
                  mode === m
                    ? m === "after"
                      ? "text-white"
                      : "text-ink"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {mode === m && (
                  <motion.span
                    layoutId="demo-toggle"
                    className={`absolute inset-0 -z-10 rounded-full border-2 border-ink ${
                      m === "after" ? "bg-purple" : "bg-yellow"
                    }`}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* workflow */}
        <div className="mt-12 mx-auto max-w-md">
          <div
            className={`card-funky p-6 sm:p-8 transition-colors duration-500 ${
              mode === "after" ? "bg-purple-soft" : "bg-paper"
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.ol
                key={mode}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col"
                aria-label={mode === "before" ? "Manual workflow" : "Automated workflow"}
              >
                {steps.map((step, i) => (
                  <li key={step.label} className="flex flex-col items-stretch">
                    <motion.div
                      initial={reduce ? false : { opacity: 0, x: mode === "after" ? 20 : -20, rotate: mode === "after" ? 1 : -1 }}
                      animate={{ opacity: 1, x: 0, rotate: 0 }}
                      transition={{ delay: i * 0.09, duration: 0.4, ease: "easeOut" }}
                      className={`flex items-center gap-4 rounded-xl border-2 border-ink px-4 py-3 ${
                        step.auto
                          ? "bg-paper shadow-[3px_3px_0_var(--purple)]"
                          : "bg-paper shadow-[3px_3px_0_rgba(29,24,50,0.15)]"
                      }`}
                    >
                      <span
                        className={`flex size-9 shrink-0 items-center justify-center rounded-lg border-2 border-ink ${
                          step.auto ? "bg-purple text-white" : "bg-yellow-soft"
                        }`}
                      >
                        <step.icon className="size-4" aria-hidden />
                      </span>
                      <span className="text-sm font-bold">{step.label}</span>
                      {step.auto && (
                        <span className="ml-auto rounded-full border-2 border-ink bg-teal px-2 py-0.5 font-display text-[0.6rem] font-bold uppercase tracking-wider">
                          Auto
                        </span>
                      )}
                      {!step.auto && i > 0 && mode === "before" && (
                        <span className="ml-auto rounded-full border-2 border-ink bg-coral-soft px-2 py-0.5 font-display text-[0.6rem] font-bold uppercase tracking-wider">
                          Manual
                        </span>
                      )}
                    </motion.div>

                    {i < steps.length - 1 && (
                      <motion.div
                        initial={reduce ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.09 + 0.05 }}
                        className="connector-v mx-auto h-6"
                        aria-hidden
                      />
                    )}
                  </li>
                ))}
              </motion.ol>
            </AnimatePresence>
          </div>

          <p className="mt-6 text-center text-sm font-bold text-ink-soft">
            {mode === "before"
              ? "Six steps. Five of them depend on a person being available."
              : "Six steps. Five of them happen in seconds, on their own."}
          </p>
        </div>
      </div>
    </section>
  );
}
