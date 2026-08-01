import { site } from "@/content/site";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export function Future() {
  const future = site.future;
  return (
    <section id="future" className="px-4 md:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/80 bg-gradient-to-br from-lavender via-blush to-peach px-6 py-24 text-center md:rounded-[3rem] md:py-32">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_42%,rgba(255,255,255,0.6),transparent_72%)]"
        />
        {/* horizon arcs rising from the base of the section */}
        <div
          aria-hidden
          className="absolute inset-x-0 -bottom-[26rem] mx-auto h-[34rem] w-[34rem] md:-bottom-[30rem] md:h-[44rem] md:w-[44rem]"
        >
          <div className="absolute inset-0 rounded-full border border-ink/[0.07]" />
          <div className="absolute -inset-16 rounded-full border border-ink/[0.05]" />
          <div className="absolute -inset-36 rounded-full border border-ink/[0.04]" />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow center>{future.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-7 font-display text-[clamp(1.9rem,4.3vw,3.1rem)] font-medium leading-[1.16] tracking-[-0.015em] text-ink text-balance">
              {future.statementLead}{" "}
              <em className="italic">{future.statementEmphasis}</em>{" "}
              {future.statementRest}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-2xl leading-relaxed text-ink/70">
              {future.body}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
