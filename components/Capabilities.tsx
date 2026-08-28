import { site } from "@/content/site";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

const ROW_STYLES = [
  { dot: "bg-wisteria", hover: "hover:bg-lilac-50" },
  { dot: "bg-[#efcdb4]", hover: "hover:bg-lilac-100" },
  { dot: "bg-[#e4bed2]", hover: "hover:bg-lilac-200" },
  { dot: "bg-[#cbbce9]", hover: "hover:bg-lilac-rose" },
  { dot: "bg-lavender", hover: "hover:bg-lilac-300" },
];

export function Capabilities() {
  const capabilities = site.capabilities;
  return (
    <section id="capabilities" className="scroll-mt-24 py-28 md:py-36">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="grid gap-6 md:grid-cols-[1.25fr_1fr] md:items-end md:gap-12">
          <Reveal>
            <Eyebrow>{capabilities.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.1rem,4.6vw,3.3rem)] font-medium leading-[1.08] tracking-[-0.015em] text-ink text-balance">
              {capabilities.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="leading-relaxed text-fog md:pb-2.5">
              {capabilities.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 border-y border-ink/[0.07] md:mt-16">
          {capabilities.groups.map((group, index) => {
            const style = ROW_STYLES[index % ROW_STYLES.length];
            return (
              <Reveal
                key={group.title}
                delay={index * 0.05}
                className={
                  index < capabilities.groups.length - 1
                    ? "border-b border-ink/[0.07]"
                    : ""
                }
              >
                <div
                  className={`grid gap-3 rounded-2xl px-4 py-8 transition-colors duration-300 md:grid-cols-[minmax(0,17rem)_1fr] md:gap-12 md:px-6 md:py-9 ${style.hover}`}
                >
                  <div className="flex items-start gap-3.5 md:items-center">
                    <span
                      aria-hidden
                      className={`mt-2 size-2 shrink-0 rounded-full md:mt-0 ${style.dot}`}
                    />
                    <h3 className="font-display text-xl font-medium text-ink md:text-2xl">
                      {group.title}
                    </h3>
                  </div>
                  <div>
                    <p className="max-w-2xl leading-relaxed text-fog">
                      {group.description}
                    </p>
                    {group.tools.length > 0 && (
                      <p className="mt-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink/45">
                        {group.tools.join(" · ")}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
