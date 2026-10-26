// Shared building blocks for the bilingual editorial design.
//
// The signature of the design: every major section carries a numbered label
// set vertically (縦書き) in the *other* language — Japanese on English pages,
// English on Japanese pages — and every headline ends in a coloured full stop.

import type { ReactNode } from "react";

export type Tone = "cream" | "sand" | "night" | "ink" | "orange";

const toneStyles: Record<Tone, { bg: string; fg: string; num: string; rule: string }> = {
  cream: { bg: "#fdf8f3", fg: "#1c1208", num: "#b5370d", rule: "#1c1208" },
  sand: { bg: "#f5ede2", fg: "#1c1208", num: "#b5370d", rule: "#1c1208" },
  night: { bg: "#0d0a07", fg: "#fdf8f3", num: "#e95228", rule: "rgba(253,248,243,0.25)" },
  ink: { bg: "#1c1208", fg: "#fdf8f3", num: "#e95228", rule: "rgba(253,248,243,0.25)" },
  orange: { bg: "#e95228", fg: "#0d0a07", num: "#0d0a07", rule: "#0d0a07" },
};

/** The coloured full stop that ends every headline. Cream on orange sections so it stays visible. */
export function Dot({ tone = "cream", stop = "." }: { tone?: Tone; stop?: "." | "。" }) {
  return <span style={{ color: tone === "orange" ? "#fdf8f3" : "#e95228" }}>{stop}</span>;
}

/** Wraps headline text and appends the coloured full stop. */
export function Title({
  as: Tag = "h2",
  tone = "cream",
  className = "fij-h2",
  id,
  stop = ".",
  children,
}: {
  as?: "h1" | "h2" | "h3";
  tone?: Tone;
  className?: string;
  id?: string;
  /** Japanese headlines end in 。 */
  stop?: "." | "。";
  children: ReactNode;
}) {
  return (
    <Tag id={id} className={className}>
      {children}
      <Dot tone={tone} stop={stop} />
    </Tag>
  );
}

/**
 * A full-width section with the numbered vertical label in its left gutter.
 * `label` is the section name in the other language; `labelLang` is its language.
 * On phones the label sits above the content, horizontal.
 */
export function Section({
  num,
  label,
  labelLang = "ja",
  tone = "cream",
  id,
  bordered = false,
  className = "",
  children,
  "aria-labelledby": labelledBy,
}: {
  num?: string;
  label?: string;
  labelLang?: "ja" | "en";
  tone?: Tone;
  id?: string;
  bordered?: boolean;
  className?: string;
  children: ReactNode;
  "aria-labelledby"?: string;
}) {
  const t = toneStyles[tone];
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`scroll-mt-20 ${bordered ? "border-y" : ""} ${className}`}
      style={{ backgroundColor: t.bg, color: t.fg, borderColor: "#1c1208", ["--fij-num" as string]: t.num }}
    >
      <div className="fij-wrap py-20 md:py-28 flex flex-col md:flex-row gap-6 md:gap-14">
        {(num || label) && <SectionLabel num={num} label={label} labelLang={labelLang} tone={tone} />}
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </section>
  );
}

export function SectionLabel({
  num,
  label,
  labelLang = "ja",
  tone = "cream",
}: {
  num?: string;
  label?: string;
  labelLang?: "ja" | "en";
  tone?: Tone;
}) {
  const t = toneStyles[tone];
  return (
    <div className="flex md:flex-col items-center md:w-14 shrink-0 gap-3 md:gap-4" aria-hidden="true">
      {num && (
        <span className="text-[13px] font-semibold tabular-nums" style={{ color: t.num }}>
          {num}
        </span>
      )}
      {label && (
        <span
          lang={labelLang}
          className={`fij-vlabel ${labelLang === "ja" ? "font-jp font-bold" : "font-semibold uppercase"}`}
        >
          {label}
        </span>
      )}
    </div>
  );
}

/** Small plain kicker above a headline (replaces the old mono eyebrows). */
export function Kicker({ children, tone = "cream" }: { children: ReactNode; tone?: Tone }) {
  const dark = tone === "night" || tone === "ink";
  return (
    <p className="text-sm font-medium mb-5" style={{ color: dark ? "rgba(253,248,243,0.65)" : tone === "orange" ? "#0d0a07" : "#6b5a48" }}>
      {children}
    </p>
  );
}

/** Round play button used over video stills. */
export function PlayIcon({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className="flex items-center justify-center w-[52px] h-[52px] rounded-full"
      style={{ backgroundColor: dark ? "#0d0a07" : "#e95228" }}
      aria-hidden="true"
    >
      <svg width="14" height="14" viewBox="0 0 10 10">
        <polygon points="2,1 9,5 2,9" fill={dark ? "#fdf8f3" : "#0d0a07"} />
      </svg>
    </span>
  );
}

/** "Trusted by" — a single typographic line under the hero. */
export function TrustedBy({ clients, label = "Trusted by" }: { clients: string[]; label?: string }) {
  return (
    <section className="border-b" style={{ borderColor: "#1c1208", backgroundColor: "#fdf8f3" }}>
      <div className="fij-wrap py-5 flex flex-wrap items-baseline gap-x-10 gap-y-2">
        <p className="text-[13px] font-medium" style={{ color: "#6b5a48" }}>{label}</p>
        <p className="flex-1 min-w-[280px] flex flex-wrap justify-between gap-x-7 gap-y-1 text-lg sm:text-[22px] font-semibold tracking-[-0.02em]" style={{ color: "#1c1208" }}>
          {clients.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </p>
      </div>
    </section>
  );
}
