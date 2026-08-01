import { site, type ContactItem } from "@/content/site";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M4 12 12 4m0 0H5.5M12 4v6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Row({ item }: { item: ContactItem }) {
  const inner = (
    <>
      <span className="w-24 shrink-0 pt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-fog">
        {item.label}
      </span>
      <span className="min-w-0 flex-1 break-words text-base font-medium text-ink md:text-lg">
        {item.value}
      </span>
    </>
  );

  if (item.href) {
    const external =
      item.href.startsWith("http") || item.href.endsWith(".pdf");
    return (
      <a
        href={item.href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group flex items-center gap-5 rounded-2xl px-3 py-6 transition-colors hover:bg-mist md:px-5"
      >
        {inner}
        <span className="grid size-11 shrink-0 place-items-center rounded-full border border-ink/10 bg-white/70 text-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-plum group-hover:text-cream">
          <ArrowIcon />
        </span>
      </a>
    );
  }

  return (
    <div className="flex items-center gap-5 px-3 py-6 md:px-5">
      {inner}
      <span className="shrink-0 rounded-full border border-ink/[0.08] bg-white/70 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-fog">
        Coming soon
      </span>
    </div>
  );
}

export function Contact() {
  const contact = site.contact;
  return (
    <section id="contact" className="scroll-mt-24 py-28 md:py-36">
      <div className="mx-auto w-full max-w-3xl px-6">
        <Reveal className="text-center">
          <Eyebrow center>{contact.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.3rem,5.4vw,3.7rem)] font-medium leading-[1.12] tracking-[-0.01em] text-ink text-balance">
            {contact.headingLead}{" "}
            <em className="bg-gradient-to-r from-[#5b4b79] via-[#7c5e8e] to-[#5b4b79] bg-clip-text italic text-transparent">
              {contact.headingEmphasis}
            </em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-fog">
            {contact.copy}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <ul className="mt-14 border-y border-ink/[0.07]">
            {contact.items.map((item, index) => (
              <li
                key={item.label}
                className={
                  index < contact.items.length - 1
                    ? "border-b border-ink/[0.07]"
                    : ""
                }
              >
                <Row item={item} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
