"use client";

import {
  MessageSquareWarning,
  Copy,
  Clock,
  FileSpreadsheet,
  Repeat,
  CalendarX,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Problem = {
  icon: LucideIcon;
  title: string;
  description: string;
  bg: string;
  rotate: string;
};

const problems: Problem[] = [
  {
    icon: MessageSquareWarning,
    title: "Leads are sitting in WhatsApp.",
    description:
      "Enquiries pile up in chats, unassigned and untracked, until they quietly go cold.",
    bg: "bg-teal-soft",
    rotate: "-rotate-1",
  },
  {
    icon: Copy,
    title: "Your team is copying data between Excel and CRM.",
    description:
      "Skilled people spend hours moving the same information between tools by hand.",
    bg: "bg-purple-soft",
    rotate: "rotate-1",
  },
  {
    icon: Clock,
    title: "Customers are waiting for manual replies.",
    description:
      "Every response depends on someone being free — and customers notice the delay.",
    bg: "bg-yellow-soft",
    rotate: "-rotate-1",
  },
  {
    icon: FileSpreadsheet,
    title: "Reports are created manually every week.",
    description:
      "Hours of copy-paste and formatting to produce numbers that are outdated on arrival.",
    bg: "bg-coral-soft",
    rotate: "rotate-1",
  },
  {
    icon: Repeat,
    title: "Employees repeatedly enter the same information.",
    description:
      "The same customer details get typed into three different systems, three different times.",
    bg: "bg-blue-soft",
    rotate: "rotate-1",
  },
  {
    icon: CalendarX,
    title: "Important follow-ups are getting missed.",
    description:
      "Quotes, renewals and pending payments slip through because reminders live in people's heads.",
    bg: "bg-yellow-soft",
    rotate: "-rotate-1",
  },
];

export default function ProblemSection() {
  return (
    <section className="container-site py-20 sm:py-28" aria-labelledby="problems-heading">
      <SectionHeading
        kicker="Sound familiar?"
        title="Your business probably has an automation problem."
        subtitle="These aren't software problems. They're workflow problems — and every one of them can be automated."
        stickerClass="sticker-coral"
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <div
              className={`group card-funky card-funky-hover h-full p-6 flex flex-col gap-4 cursor-default ${p.bg} ${p.rotate} hover:rotate-0`}
            >
              <span className="flex size-12 items-center justify-center rounded-xl border-2 border-ink bg-paper shadow-[2px_2px_0_var(--ink)] group-hover:-rotate-6 transition-transform duration-300">
                <p.icon className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="font-display font-bold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {p.description}
                </p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-purple opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                There&apos;s a better way
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
