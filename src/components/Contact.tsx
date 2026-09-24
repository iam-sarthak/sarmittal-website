"use client";

import { useState, type FormEvent } from "react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { LinkedinIcon, GithubIcon, XIcon } from "./SocialIcons";
import { profile } from "@/lib/resume";
import Reveal from "./Reveal";

const channels = [
  {
    label: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
    bg: "bg-yellow",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    Icon: LinkedinIcon,
    bg: "bg-purple",
  },
  {
    label: "X",
    href: profile.x,
    Icon: XIcon,
    bg: "bg-ink",
  },
  {
    label: "GitHub",
    href: profile.github,
    Icon: GithubIcon,
    bg: "bg-blue",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="container-site py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal>
          <div>
            <span className="sticker sticker-coral">Contact</span>
            <h2
              id="contact-heading"
              className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]"
            >
              Want to work together?
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
              Roles, collaborations, or a question about a project — email,
              LinkedIn, X or the form. I usually reply within a day.
            </p>

            <ul className="mt-10 flex flex-col gap-4">
              {channels.map(({ label, href, Icon, bg }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-3 text-sm font-bold hover:text-purple transition-colors"
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <span
                      className={`flex size-11 items-center justify-center rounded-xl border-2 border-ink shadow-[2px_2px_0_var(--ink)] group-hover:-translate-y-1 transition-transform ${bg} ${
                        bg === "bg-purple" || bg === "bg-coral" || bg === "bg-ink"
                          ? "text-white"
                          : "text-ink"
                      }`}
                    >
                      <Icon className="size-4" />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card-funky p-6 sm:p-8 rotate-1 hover:rotate-0 transition-transform duration-500">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-16 text-center">
                <CheckCircle2 className="size-12 text-teal" aria-hidden />
                <h3 className="font-display text-xl font-bold">Message received.</h3>
                <p className="text-sm text-ink-soft max-w-sm">
                  I&apos;ll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-ink-soft">
                    Name
                  </label>
                  <input id="name" name="name" required className="field" placeholder="Your name" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="role" className="text-xs font-bold text-ink-soft">
                    Company / role
                  </label>
                  <input id="role" name="role" className="field" placeholder="Company or how you found me" />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="email" className="text-xs font-bold text-ink-soft">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required className="field" placeholder="you@email.com" />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-bold text-ink-soft">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="field resize-none"
                    placeholder="A role, a project, or just hello."
                  />
                </div>
                <div className="sm:col-span-2 pt-2">
                  <button type="submit" className="btn-funky w-full">
                    Send message
                    <ArrowRight className="size-4" aria-hidden />
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
