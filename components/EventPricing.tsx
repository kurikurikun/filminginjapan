// Typical costs for event coverage. Prices come from the Crew Book rate card (crew_rates, Oct 2026).
// All prices exclude 10% consumption tax.

type Lang = "en" | "jp";

const yen = (n: number) => `¥${n.toLocaleString("en-US")}`;

const copy = {
  en: {
    eyebrow: "Typical costs",
    h1: "Clear prices,",
    h2: "tailored quotes.",
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
    h1: "明確な料金、",
    h2: "イベントごとのお見積もり。",
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

export default function EventPricing({ lang = "en" }: { lang?: Lang }) {
  const t = copy[lang];
  const total = t.exampleItems.reduce((s, [, p]) => s + p, 0);
  const muted = "rgba(28,18,8,0.55)";

  return (
    <section className="py-20 border-t" style={{ borderColor: "#e8d9c8", backgroundColor: "#f5ede2" }} aria-labelledby="event-pricing-heading">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>{t.eyebrow}</span>
        </div>
        <h2 id="event-pricing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[0.95] mb-4" style={{ color: "#1c1208" }}>
          {t.h1}<br /><span style={{ color: "rgba(28,18,8,0.4)" }}>{t.h2}</span>
        </h2>
        <p className="text-sm leading-relaxed max-w-2xl mb-10" style={{ color: muted }}>{t.lede}</p>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-start">
          {/* Worked example */}
          <div className="p-8" style={{ backgroundColor: "#0d0a07", color: "#fdf8f3" }}>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: "#e95228" }}>{t.exampleTag}</span>
            <h3 className="text-xl font-black mt-2 mb-6">{t.exampleTitle}</h3>
            <ul>
              {t.exampleItems.map(([label, price]) => (
                <li key={label} className="flex justify-between gap-6 py-3 border-t text-sm" style={{ borderColor: "rgba(253,248,243,0.12)" }}>
                  <span style={{ color: "rgba(253,248,243,0.75)" }}>{label}</span>
                  <span className="font-mono shrink-0 tabular-nums">{yen(price)}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-baseline gap-6 pt-4 mt-1 border-t" style={{ borderColor: "#e95228" }}>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase whitespace-nowrap" style={{ color: "rgba(253,248,243,0.6)" }}>{t.total}</span>
              <span className="text-3xl font-black tabular-nums text-right whitespace-nowrap">
                {yen(total)} <span className="text-sm font-normal whitespace-nowrap" style={{ color: "rgba(253,248,243,0.55)" }}>{t.plusTax}</span>
              </span>
            </div>
            <a href="#enquire" className="btn-warm inline-block mt-8 font-black text-xs tracking-[0.15em] uppercase px-6 py-3">{t.cta} →</a>
          </div>

          {/* Smaller events + small print */}
          <div className="space-y-6 lg:pt-8">
            <div>
              <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: "#e95228" }}>{t.smallerTitle}</h3>
              <p className="text-lg leading-relaxed font-medium" style={{ color: "#1c1208" }}>{t.smaller}</p>
            </div>
            <p className="text-xs leading-relaxed pt-6 border-t" style={{ color: muted, borderColor: "#e8d9c8" }}>{t.small}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
