"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/content/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const resumeHref = site.nav.resumeHref ?? "#contact";
  const resumeIsFile = site.nav.resumeHref !== null;
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
        solid
          ? "border-b border-ink/[0.06] bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:h-[4.5rem] md:px-10"
      >
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-display text-[1.45rem] font-semibold tracking-[0.02em] text-ink"
        >
          {site.wordmark}
          <span className="text-wisteria">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {site.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-fog transition-colors hover:text-lilac-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href={resumeHref}
            target={resumeIsFile ? "_blank" : undefined}
            rel={resumeIsFile ? "noopener noreferrer" : undefined}
            className="rounded-full bg-plum px-5 py-2 text-sm font-medium text-cream shadow-[0_10px_24px_-12px_rgba(52,21,57,0.55)] transition-all hover:-translate-y-0.5 hover:bg-lilac-300 hover:text-plum"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="relative grid size-10 place-items-center rounded-full border border-ink/10 bg-white/60 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            aria-hidden
            className={`absolute h-px w-[18px] bg-ink transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-[3.5px]"
            }`}
          />
          <span
            aria-hidden
            className={`absolute h-px w-[18px] bg-ink transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-[3.5px]"
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-ink/[0.05] md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 pt-3">
              {site.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-lg text-ink transition-colors hover:bg-lilac-100"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={resumeHref}
                target={resumeIsFile ? "_blank" : undefined}
                rel={resumeIsFile ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full bg-plum px-5 py-3 text-center text-sm font-medium text-cream"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
