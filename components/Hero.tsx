"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { site } from "@/content/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Delicate concentric arcs with two slowly orbiting dots — a quiet
 *  nod to a journey in motion. Sits behind the headline on desktop. */
function Orbits({ still }: { still: boolean }) {
  return (
    <div
      aria-hidden
      className="absolute -right-[18rem] top-1/2 hidden h-[46rem] w-[46rem] -translate-y-1/2 lg:block xl:-right-[11rem]"
    >
      <div className="absolute inset-0 rounded-full border border-ink/[0.05]" />
      <div className="absolute inset-[13%] rounded-full border border-ink/[0.06]" />
      <div className="absolute inset-[28%] rounded-full border border-ink/[0.05]" />
      <motion.div
        className="absolute inset-0"
        animate={still ? undefined : { rotate: 360 }}
        transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 block size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-wisteria shadow-[0_0_0_7px_rgba(214,200,242,0.35)]" />
      </motion.div>
      <motion.div
        className="absolute inset-[28%]"
        animate={still ? undefined : { rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 block size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e4bed2] shadow-[0_0_0_6px_rgba(243,226,236,0.5)]" />
      </motion.div>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const still = !!reduce;

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
  };
  const item: Variants = {
    hidden: still ? { opacity: 0 } : { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[94svh] items-center overflow-hidden pb-28 pt-36 md:pt-40"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <motion.div
          className="absolute -left-36 -top-44 h-[36rem] w-[36rem] rounded-full bg-lavender opacity-80 blur-3xl"
          animate={still ? undefined : { x: [0, 26, 0], y: [0, 18, 0] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-44 -top-24 h-[32rem] w-[32rem] rounded-full bg-peach opacity-70 blur-3xl"
          animate={still ? undefined : { x: [0, -22, 0], y: [0, 24, 0] }}
          transition={{ duration: 23, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-48 left-[6%] h-[30rem] w-[30rem] rounded-full bg-blush opacity-70 blur-3xl"
          animate={still ? undefined : { x: [0, 18, 0], y: [0, -20, 0] }}
          transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-36 right-[10%] h-[24rem] w-[24rem] rounded-full bg-sage opacity-60 blur-3xl"
          animate={still ? undefined : { x: [0, -16, 0], y: [0, -14, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_42%_45%,rgba(255,249,242,0.72),transparent_70%)]" />
        <Orbits still={still} />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-ink/[0.08] bg-white/70 px-4 py-2 text-[13px] text-fog"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-wisteria opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-wisteria" />
            </span>
            {site.hero.status}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-9 font-display text-[clamp(2.7rem,6.4vw,4.75rem)] font-medium leading-[1.12] tracking-[-0.01em] text-ink text-balance"
          >
            {site.hero.headingLead}{" "}
            <span className="bg-gradient-to-r from-[#5b4b79] via-[#7c5e8e] to-[#5b4b79] bg-clip-text italic text-transparent">
              {site.hero.headingEmphasis}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-lg leading-relaxed text-fog"
          >
            {site.hero.copy}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-11 flex flex-wrap items-center gap-4"
          >
            <a
              href={site.hero.primaryCta.href}
              className="group inline-flex items-center gap-2.5 rounded-full bg-plum px-7 py-3.5 text-sm font-medium text-cream shadow-[0_18px_40px_-18px_rgba(52,21,57,0.6)] transition-all hover:-translate-y-0.5 hover:bg-[#4a2151]"
            >
              {site.hero.primaryCta.label}
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              >
                <path
                  d="M8 2v11m0 0 4.5-4.5M8 13 3.5 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href={site.hero.secondaryCta.href}
              className="rounded-full border border-ink/[0.12] bg-white/60 px-7 py-3.5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-ink/25 hover:bg-white"
            >
              {site.hero.secondaryCta.label}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="absolute bottom-9 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-fog">
          Scroll
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-ink/10">
          <motion.span
            className="absolute left-0 top-0 h-5 w-px bg-ink/45"
            animate={still ? undefined : { y: [-20, 48] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.4,
            }}
          />
        </span>
      </motion.div>
    </section>
  );
}
