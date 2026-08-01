"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const TINTS: Record<string, { fill: string; halo: string }> = {
  lavender: {
    fill: "bg-lavender",
    halo: "shadow-[0_0_0_10px_rgba(232,223,255,0.55)]",
  },
  blush: {
    fill: "bg-blush",
    halo: "shadow-[0_0_0_10px_rgba(243,226,236,0.6)]",
  },
  sage: {
    fill: "bg-sage",
    halo: "shadow-[0_0_0_10px_rgba(227,238,231,0.65)]",
  },
};

/** A soft pastel node marking each chapter of the story. */
function Bloom({ numeral, tint }: { numeral: string; tint: string }) {
  const t = TINTS[tint] ?? TINTS.lavender;
  return (
    <div
      className={`relative grid size-14 place-items-center rounded-full bg-white ring-1 ring-ink/[0.07] ${t.halo}`}
    >
      <div className={`grid size-9 place-items-center rounded-full ${t.fill}`}>
        <span className="font-display text-sm italic leading-none text-ink/75">
          {numeral}
        </span>
      </div>
    </div>
  );
}

/** The thread between chapters — a gentle curve that draws itself
 *  as it scrolls into view, bulging left and right alternately. */
function Connector({ flip, fadeOut }: { flip?: boolean; fadeOut?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <svg
      aria-hidden
      viewBox="0 0 64 176"
      preserveAspectRatio="none"
      className={`h-32 w-16 text-wisteria md:h-44 ${
        fadeOut
          ? "[mask-image:linear-gradient(to_bottom,black_20%,transparent)]"
          : ""
      }`}
    >
      <motion.path
        d={flip ? "M32 0 C 6 46, 58 130, 32 176" : "M32 0 C 58 46, 6 130, 32 176"}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={reduce ? undefined : { pathLength: 0 }}
        whileInView={reduce ? undefined : { pathLength: 1 }}
        viewport={{ once: true, margin: "-12% 0px" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function Journey() {
  const reduce = useReducedMotion();
  const { chapters } = site.journey;

  return (
    <section
      id="story"
      className="relative scroll-mt-24 overflow-hidden py-28 md:py-36"
    >
      <div
        aria-hidden
        className="absolute -left-52 top-1/3 -z-10 h-[26rem] w-[26rem] rounded-full bg-mist blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-56 bottom-10 -z-10 h-[24rem] w-[24rem] rounded-full bg-blush/60 blur-3xl"
      />

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow center>{site.journey.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.1rem,4.6vw,3.3rem)] font-medium leading-[1.08] tracking-[-0.015em] text-ink text-balance">
            {site.journey.heading}
          </h2>
          <p className="mt-5 text-lg text-fog">{site.journey.sub}</p>
        </Reveal>

        <div className="mt-14 flex flex-col items-center md:mt-16">
          <div
            aria-hidden
            className="mb-1 h-14 w-px bg-gradient-to-b from-transparent to-wisteria"
          />
          {chapters.map((chapter, index) => (
            <Fragment key={chapter.numeral}>
              <motion.article
                className="flex max-w-xl flex-col items-center text-center"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -90px 0px" }}
                transition={{ duration: 0.9, ease: EASE }}
              >
                <Bloom numeral={chapter.numeral} tint={chapter.tint} />
                <h3 className="mt-7 font-display text-2xl font-medium tracking-[-0.01em] text-ink text-balance md:text-[1.8rem] md:leading-snug">
                  {chapter.title}
                </h3>
                <p className="mt-4 leading-relaxed text-fog">{chapter.body}</p>
              </motion.article>
              <Connector
                flip={index % 2 === 1}
                fadeOut={index === chapters.length - 1}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
