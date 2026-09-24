"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

const links = [
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b-2 border-ink"
          : "bg-transparent border-b-2 border-transparent"
      }`}
    >
      <nav
        className={`container-site flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight hover-wiggle"
          onClick={() => setOpen(false)}
        >
          Sarthak&nbsp;Mittal
          <span className="text-purple">.</span>
        </Link>

        {/* desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`group relative px-3.5 py-2 text-sm font-semibold transition-colors ${
                    active ? "text-purple" : "text-ink hover:text-purple"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-3.5 right-3.5 -bottom-0.5 h-[3px] rounded-full bg-yellow transition-transform duration-300 origin-left ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    aria-hidden
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <a
            href="/sarthak-mittal-resume.pdf"
            download
            className="btn-funky btn-yellow !py-2.5 !px-5 text-sm"
          >
            <Download className="size-4" />
            Resume
          </a>
        </div>

        {/* mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 rounded-lg border-2 border-ink bg-paper shadow-[2px_2px_0_var(--ink)]"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-background border-b-2 border-ink overflow-hidden"
          >
            <ul className="container-site py-4 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block px-2 py-3 font-display text-lg font-bold hover:text-purple transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href="/sarthak-mittal-resume.pdf"
                  download
                  className="btn-funky btn-yellow w-full"
                  onClick={() => setOpen(false)}
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
