import { site } from "@/content/site";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  const experience = site.experience;
  return (
    <section id="experience" className="scroll-mt-24 px-4 md:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-ink/[0.05] bg-mist px-6 py-20 md:rounded-[3rem] md:px-14 md:py-28">
        <div
          aria-hidden
          className="absolute -right-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-lavender/70 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-36 -left-28 h-[24rem] w-[24rem] rounded-full bg-blush/60 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl">
          <Reveal>
            <Eyebrow>{experience.eyebrow}</Eyebrow>
            <h2 className="mt-6 max-w-xl font-display text-[clamp(2.1rem,4.6vw,3.3rem)] font-medium leading-[1.08] tracking-[-0.015em] text-ink text-balance">
              {experience.heading}
            </h2>
          </Reveal>

          <div className="mt-12 space-y-8 md:space-y-10">
            {experience.roles.map((role) => (
              <Reveal key={role.company} delay={0.12}>
                <div className="rounded-[2rem] border border-white/90 bg-white/80 p-8 shadow-[0_36px_90px_-48px_rgba(94,74,140,0.45)] md:p-12">
                  <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-4">
                    <div>
                      <h3 className="font-display text-2xl font-medium text-ink md:text-3xl">
                        {role.role}
                      </h3>
                      <p className="mt-2.5 font-medium text-ink">
                        {role.company}
                      </p>
                    </div>
                    <p className="inline-flex items-center gap-2.5 rounded-full border border-ink/[0.07] bg-mist px-4 py-2 text-sm text-ink">
                      <span
                        aria-hidden
                        className="size-2 rounded-full bg-wisteria motion-safe:animate-pulse"
                      />
                      {role.period}
                    </p>
                  </div>

                  <p className="mt-7 leading-relaxed text-fog">
                    {role.summary}
                  </p>

                  <div aria-hidden className="my-9 h-px bg-ink/[0.06]" />

                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-fog">
                    {role.contributionsLabel}
                  </p>
                  <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                    {role.contributions.map((contribution) => (
                      <li
                        key={contribution}
                        className="flex gap-3.5 leading-relaxed text-ink/85"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.6rem] size-1.5 shrink-0 rotate-45 bg-wisteria"
                        />
                        {contribution}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-10 border-t border-ink/[0.06] pt-7 text-sm leading-relaxed text-fog">
                    {role.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-fog">
              {experience.campus.label}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog">
              {experience.campus.line}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
