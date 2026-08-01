import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/[0.06]">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-8 px-6 py-12 md:flex-row md:items-center md:px-10">
        <div className="space-y-2 text-sm text-fog">
          <p className="font-medium text-ink">
            © {year} {site.name} · {site.location}
          </p>
          <p className="max-w-md leading-relaxed">{site.footer.line}</p>
        </div>
        <a
          href="#top"
          className="group inline-flex items-center gap-3 self-start text-sm font-medium text-ink md:self-auto"
        >
          Back to top
          <span className="grid size-9 place-items-center rounded-full border border-ink/10 bg-white/70 transition-transform duration-300 group-hover:-translate-y-1">
            <svg
              width="13"
              height="13"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
              <path
                d="M8 13V3m0 0L3.5 7.5M8 3l4.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </footer>
  );
}
