import Link from "next/link";
import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon, XIcon } from "./SocialIcons";
import { profile } from "@/lib/resume";

const footerLinks = [
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", href: profile.resumeHref },
];

const socials = [
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedinIcon },
  { label: "X", href: profile.x, Icon: XIcon },
  { label: "GitHub", href: profile.github, Icon: GithubIcon },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t-2 border-ink bg-ink text-background">
      <div className="container-site py-14 flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-10">
          <div className="max-w-sm">
            <Link href="/" className="font-display text-2xl font-bold tracking-tight">
              Sarthak Mittal<span className="text-yellow">.</span>
            </Link>
            <p className="mt-3 text-sm text-background/70 leading-relaxed">
              Software developer in Gurugram. Backend, APIs and AI systems —
              currently at CarePay.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm font-semibold text-background/70 hover:text-yellow transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex size-10 items-center justify-center rounded-xl border-2 border-background/30 text-background/80 hover:bg-yellow hover:text-ink hover:border-yellow hover:-translate-y-1 transition-all duration-200"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-background/15" />

        <p className="text-xs text-background/50">
          © {new Date().getFullYear()} Sarthak Mittal. Built in public, one
          commit at a time.
        </p>
      </div>
    </footer>
  );
}
