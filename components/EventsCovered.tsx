"use client";

import { useMemo, useState } from "react";
import { coveredEvents, SHOW_FIRST, type CoveredEvent } from "@/lib/eventsCovered";

type Lang = "en" | "jp";

const copy = {
  en: {
    eyebrow: "Events we've covered",
    h1: "We've probably been",
    h2: "to your venue.",
    lede: "Corporate event photography and video at hotels, conference centres and venues across Japan — including Palace Hotel Tokyo, ANA InterContinental Tokyo, Kimpton Shinjuku Tokyo, Happo-en, Makuhari Messe and Grand Hyatt Tokyo. Search for yours below.",
    search: "Search a venue or event…",
    searchLabel: "Search events or venues",
    listed: (n: number) => `${n} events listed`,
    matches: (n: number) => `${n} match${n === 1 ? "" : "es"}`,
    showAll: (n: number) => `Show all ${n} events +`,
    showFewer: "Show fewer −",
    none: "No match yet — we may still know the venue.",
    ask: "Ask us",
    notListed: "Don't see your venue?",
    notListed2: "we've probably shot nearby.",
    cols: { event: "Event", venue: "Venue", photo: "Photography", highlight: "Highlight video", recording: "Event recording", raw: "Raw footage" },
    groupPhoto: "Photo", groupVideo: "Video",
  },
  jp: {
    eyebrow: "これまでの撮影実績",
    h1: "その会場、",
    h2: "撮影経験があるかもしれません。",
    lede: "パレスホテル東京、ANAインターコンチネンタルホテル東京、キンプトン新宿東京、八芳園、幕張メッセ、グランド ハイアット 東京など、全国のホテル・会議施設・イベント会場で企業イベントの写真・映像を撮影してきました。会場名で検索できます。",
    search: "会場名・イベント名で検索…",
    searchLabel: "イベント・会場を検索",
    listed: (n: number) => `${n}件のイベント`,
    matches: (n: number) => `${n}件該当`,
    showAll: (n: number) => `すべて表示（${n}件）＋`,
    showFewer: "閉じる −",
    none: "該当なし。掲載していない会場でも撮影経験がある場合があります。",
    ask: "お問い合わせ",
    notListed: "ご希望の会場が見つかりませんか？",
    notListed2: "お気軽にご相談ください。",
    cols: { event: "イベント", venue: "会場", photo: "写真撮影", highlight: "ハイライト動画", recording: "記録撮影", raw: "素材データ納品" },
    groupPhoto: "写真", groupVideo: "映像",
  },
} as const;

const SERVICES = ["photo", "highlight", "recording", "raw"] as const;

export default function EventsCovered({ lang = "en" }: { lang?: Lang }) {
  const t = copy[lang];
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  const text = (e: CoveredEvent) => ({
    name: lang === "jp" ? e.nameJa ?? e.name : e.name,
    kind: lang === "jp" ? e.kindJa : e.kind,
    venue: lang === "jp" ? e.venueJa : e.venue,
    city: lang === "jp" ? e.cityJa : e.city,
    extras: (lang === "jp" ? e.extrasJa : e.extras) ?? [],
  });

  const q = query.trim().toLowerCase();
  const matches = useMemo(
    () =>
      coveredEvents.map((e) => {
        if (!q) return true;
        const hay = [e.name, e.nameJa, e.client, e.kind, e.kindJa, e.venue, e.venueJa, e.city, e.cityJa].join(" ").toLowerCase();
        return hay.includes(q);
      }),
    [q]
  );
  const matchCount = matches.filter(Boolean).length;

  return (
    <section className="py-20 border-t" style={{ borderColor: "#e8d9c8", backgroundColor: "#fdf8f3" }} aria-labelledby="events-covered-heading">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>{t.eyebrow}</span>
        </div>
        <h2 id="events-covered-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[0.95] mb-4" style={{ color: "#1c1208" }}>
          {t.h1}<br /><span style={{ color: "rgba(28,18,8,0.4)" }}>{t.h2}</span>
        </h2>
        <p className="text-sm leading-relaxed max-w-2xl mb-8" style={{ color: "rgba(28,18,8,0.55)" }}>{t.lede}</p>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
          <label className="relative w-full sm:max-w-sm">
            <span className="sr-only">{t.searchLabel}</span>
            <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(28,18,8,0.4)" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
            </svg>
            <input
              id="events-covered-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.search}
              autoComplete="off"
              className="w-full text-sm py-3 pl-10 pr-3 border outline-none focus:border-[#e95228]"
              style={{ borderColor: "#e8d9c8", backgroundColor: "#fff", color: "#1c1208" }}
            />
          </label>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(28,18,8,0.55)" }} aria-live="polite">
            {q ? t.matches(matchCount) : t.listed(coveredEvents.length)}
          </span>
        </div>

        <table className="ec-table w-full text-[13px]" style={{ color: "#1c1208" }}>
          <thead>
            <tr className="ec-group">
              <th /><th />
              <th colSpan={1} className="ec-g">{t.groupPhoto}</th>
              <th colSpan={3} className="ec-g">{t.groupVideo}</th>
            </tr>
            <tr>
              <th className="ec-l">{t.cols.event}</th>
              <th className="ec-l">{t.cols.venue}</th>
              {SERVICES.map((s) => <th key={s}>{t.cols[s]}</th>)}
            </tr>
          </thead>
          <tbody>
            {coveredEvents.map((e, i) => {
              const x = text(e);
              const hidden = !matches[i] || (!q && !expanded && i >= SHOW_FIRST);
              return (
                <tr key={e.name} className={hidden ? "ec-hidden" : undefined}>
                  <td className="ec-ev">
                    <b>{x.name}</b>
                    <small>{[e.client, x.kind].filter(Boolean).join(" · ")}</small>
                    {x.extras.length > 0 && (
                      <span className="ec-extras">{x.extras.map((ex) => <span key={ex}>+ {ex}</span>)}</span>
                    )}
                  </td>
                  <td className="ec-venue">
                    {x.venue}
                    <small>{x.city}</small>
                  </td>
                  {SERVICES.map((s) =>
                    e[s] ? (
                      <td key={s} className="ec-d">
                        <span className="ec-dot" aria-hidden="true" />
                        <span className="ec-lbl">{t.cols[s]}</span>
                        <span className="sr-only">{t.cols[s]}: ✓</span>
                      </td>
                    ) : (
                      <td key={s} className="ec-d ec-no"><span aria-hidden="true">—</span></td>
                    )
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
        {q && matchCount === 0 && (
          <p className="py-6 text-sm border-t" style={{ borderColor: "#e8d9c8", color: "rgba(28,18,8,0.55)" }}>
            {t.none} <a href="#enquire" style={{ color: "#e95228", fontWeight: 600 }}>{t.ask}</a>
          </p>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t" style={{ borderColor: "#1c1208" }}>
          {!q && coveredEvents.length > SHOW_FIRST ? (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="font-mono text-[11px] tracking-[0.2em] uppercase pb-1 border-b"
              style={{ borderColor: "#e95228", color: "#1c1208" }}
            >
              {expanded ? t.showFewer : t.showAll(coveredEvents.length)}
            </button>
          ) : <span />}
          <p className="text-sm" style={{ color: "rgba(28,18,8,0.55)" }}>
            {t.notListed} <a href="#enquire" style={{ color: "#e95228", fontWeight: 600 }}>{t.ask}</a>{lang === "en" ? " — " : " "}{t.notListed2}
          </p>
        </div>
      </div>

      <style jsx>{`
        .ec-table { border-collapse: collapse; }
        .ec-table :global(th) { font-family: ui-monospace, Menlo, monospace; font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(28,18,8,0.55); font-weight: 400; text-align: center; padding: 0 6px 12px; vertical-align: bottom; line-height: 1.4; }
        .ec-table :global(th.ec-l) { text-align: left; padding-left: 0; }
        .ec-table :global(tr.ec-group th) { color: #e95228; font-size: 10px; letter-spacing: 0.3em; padding-bottom: 6px; }
        .ec-table :global(th.ec-g) { border-bottom: 1px solid #e95228; }
        .ec-table :global(td) { border-top: 1px solid #e8d9c8; padding: 14px 6px; text-align: center; vertical-align: middle; }
        .ec-table :global(td.ec-ev) { text-align: left; padding-left: 0; width: 38%; }
        .ec-table :global(td.ec-ev b) { display: block; font-weight: 900; font-size: 15px; line-height: 1.25; }
        .ec-table :global(td small) { display: block; font-size: 11px; color: rgba(28,18,8,0.45); margin-top: 2px; }
        .ec-table :global(td.ec-venue) { text-align: left; width: 26%; }
        .ec-table :global(.ec-extras) { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 6px; }
        .ec-table :global(.ec-extras span) { font-family: ui-monospace, Menlo, monospace; font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(28,18,8,0.6); background: #f5ede2; padding: 3px 6px; }
        .ec-table :global(.ec-dot) { display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: #e95228; }
        .ec-table :global(.ec-no) { color: #e8d9c8; }
        .ec-table :global(.ec-lbl) { display: none; }
        .ec-table :global(tbody tr:hover td) { background: #f5ede2; }
        .ec-table :global(tr.ec-hidden) { display: none; }
        @media (max-width: 767px) {
          .ec-table :global(thead) { display: none; }
          .ec-table, .ec-table :global(tbody), .ec-table :global(tr), .ec-table :global(td) { display: block; width: 100%; }
          .ec-table :global(tr) { border-top: 1px solid #e8d9c8; padding: 14px 0; }
          .ec-table :global(tr.ec-hidden) { display: none; }
          .ec-table :global(td) { border: 0; padding: 0; text-align: left; }
          .ec-table :global(td.ec-ev), .ec-table :global(td.ec-venue) { width: 100%; }
          .ec-table :global(td.ec-venue) { margin: 6px 0 10px; color: rgba(28,18,8,0.65); }
          .ec-table :global(td.ec-venue small) { display: inline; margin-left: 6px; }
          .ec-table :global(td.ec-d) { display: inline-block; width: auto; margin: 0 6px 6px 0; }
          .ec-table :global(td.ec-no) { display: none; }
          .ec-table :global(.ec-dot) { display: none; }
          .ec-table :global(.ec-lbl) { display: inline-block; font-family: ui-monospace, Menlo, monospace; font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; padding: 4px 7px; border: 1px solid #e95228; color: #e95228; }
          .ec-table :global(tbody tr:hover td) { background: none; }
        }
      `}</style>
    </section>
  );
}
