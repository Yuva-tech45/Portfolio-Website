import type { ReactNode } from "react";

export function Eyebrow({
  children,
  center = false,
}: {
  children: ReactNode;
  center?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-fog ${
        center ? "justify-center" : ""
      }`}
    >
      <span aria-hidden className="h-px w-7 bg-wisteria" />
      {children}
      {center ? <span aria-hidden className="h-px w-7 bg-wisteria" /> : null}
    </span>
  );
}
