// Typical costs for event coverage. Prices come from the Crew Book rate card (crew_rates, Oct 2026).
// All prices exclude 10% consumption tax.

import { Section, Title } from "@/components/editorial";

type Lang = "en" | "jp";

const yen = (n: number) => `¥${n.toLocaleString("en-US")}`;

const copy = {
  en: {
    eyebrow: "Typical costs",
    title: "Clear prices, tailored quotes",
    label: "料金の目安",
    lede: "Every event is different, so we quote each one. Here's a typical day to help you plan.",
    exampleTag: "Typical one-day event",
    exampleTitle: "Photo + video team, with a highlight film",
    exampleItems: [
      ["Photographer, full day — about 250 edited photos within 48 hours", 150000],
      ["Videographer with audio, full day — including short comments from attendees", 180000],
      ["Highlight video, 1–1.5 minutes", 150000],
    ] as [string, number][],
    total: "Total",
    plusTax: "+ tax",
    smallerTitle: "Smaller events",
    smaller: "Smaller events start from ¥100,000 for a half-day photographer. Every quote is tailored to your event.",
    small: "All prices exclude 10% consumption tax. Travel within Tokyo is included. Diplomatic missions with a MOFA tax exemption card pay no consumption tax.",
    cta: "Get a quote for your event",
  },
  jp: {
    eyebrow: "料金の目安",
    title: "明確な料金、イベントごとのお見積もり",
    label: "Pricing",
    lede: "イベントの内容に合わせて個別にお見積もりします。ご検討の目安として、1日イベントの一例をご紹介します。",
    exampleTag: "1日イベントの一例",
    exampleTitle: "写真・映像チームとハイライト映像",
    exampleItems: [
      ["フォトグラファー 1日（レタッチ済み写真 約250枚・48時間以内納品）", 150000],
      ["ビデオグラファー 1日（音声込み・参加者コメント撮影を含む）", 180000],
      ["ハイライト動画（1〜1.5分）", 150000],
    ] as [string, number][],
    total: "合計",
    plusTax: "（税別）",
    smallerTitle: "小規模なイベント",
    smaller: "小規模なイベントは、フォトグラファー半日 ¥100,000〜承ります。お見積もりはイベントごとに個別にご案内します。",
    small: "表示価格はすべて税別です。東京都内の移動費は含まれます。外務省の免税カードをお持ちの外国公館は消費税が免除されます。",
    cta: "お見積もりを依頼する",
  },
} as const;

export default function EventPricing({ lang = "en", num }: { lang?: Lang; num?: string }) {
  const t = copy[lang];
  const total = t.exampleItems.reduce((s, [, p]) => s + p, 0);

  return (
    <Section num={num} label={t.label} labelLang={lang === "jp" ? "en" : "ja"} tone="orange" aria-labelledby="event-pricing-heading">
      <p className="text-sm font-medium mb-5">{t.eyebrow}</p>
      <div className="flex flex-wrap items-end gap-x-16 gap-y-6 mb-14">
        <Title id="event-pricing-heading" tone="orange" className="fij-h2 flex-[1_1_480px]">{t.title}</Title>
        <p className="fij-lede flex-[1_1_300px]">{t.lede}</p>
      </div>

      <div className="border-t-2 pt-8 flex flex-wrap gap-x-16 gap-y-10" style={{ borderColor: "#0d0a07" }}>
        {/* Worked example: the total is the hero */}
        <div className="flex-[1.4_1_480px] min-w-0">
          <p className="text-sm font-medium mb-1">{t.exampleTag}</p>
          <h3 className="text-[22px] font-semibold tracking-[-0.02em] mb-2">{t.exampleTitle}</h3>
          <p className="text-[64px] sm:text-[104px] lg:text-[148px] leading-[0.9] font-semibold tracking-[-0.06em] tabular-nums mb-8">
            <span className="sr-only">{t.total}: </span>
            {yen(total)}
            <span className="text-lg sm:text-xl font-medium tracking-normal ml-3 whitespace-nowrap">{t.plusTax}</span>
          </p>
          <ul className="mb-9">
            {t.exampleItems.map(([label, price], i) => (
              <li
                key={label}
                className={`flex justify-between gap-6 py-4 border-t ${i === t.exampleItems.length - 1 ? "border-b" : ""}`}
                style={{ borderColor: "rgba(13,10,7,0.4)" }}
              >
                <span>{label}</span>
                <span className="font-semibold tabular-nums whitespace-nowrap">{yen(price)}</span>
              </li>
            ))}
          </ul>
          <a href="#enquire" className="fij-btn" style={{ backgroundColor: "#0d0a07" }}>{t.cta}</a>
        </div>

        {/* Smaller events + small print */}
        <div className="flex-[1_1_280px] self-end">
          <h3 className="text-lg font-semibold mb-2.5">{t.smallerTitle}</h3>
          <p className="text-[15px] leading-relaxed mb-4">{t.smaller}</p>
          <p className="text-[15px] leading-relaxed">{t.small}</p>
        </div>
      </div>
    </Section>
  );
}
