// Events we've photographed and filmed — shown on the events pages as a searchable list.
// Source of truth: the "Events We've Covered" Claude Doc (checked by Chris, Oct 2026).
// Order = roughly most recognisable first; the first SHOW_FIRST rows are visible before "Show all".

export type CoveredEvent = {
  name: string;
  nameJa?: string;
  client?: string;
  kind: string;
  kindJa: string;
  venue: string;
  venueJa: string;
  city: string;
  cityJa: string;
  photo?: boolean;
  highlight?: boolean;
  recording?: boolean;
  raw?: boolean;
  extras?: string[];
  extrasJa?: string[];
};

export const SHOW_FIRST = 10;

export const coveredEvents: CoveredEvent[] = [
  {
    name: "Tokyo Game Show 2026 (TGS)", nameJa: "東京ゲームショウ2026（TGS）", client: "Fertilerains",
    kind: "Trade show", kindJa: "展示会",
    venue: "Makuhari Messe", venueJa: "幕張メッセ", city: "Chiba", cityJa: "千葉",
    photo: true,
  },
  {
    name: "EVO Japan 2024 – 2XKO reveal", client: "Riot Games",
    kind: "Esports tournament", kindJa: "eスポーツ大会",
    venue: "Ariake GYM-EX", venueJa: "有明GYM-EX", city: "Tokyo", cityJa: "東京",
    photo: true, highlight: true, raw: true,
  },
  {
    name: "PwC Edge APAC 2025", client: "PwC",
    kind: "Leadership programme", kindJa: "リーダーシップ研修",
    venue: "Hilton Fukuoka Sea Hawk", venueJa: "ヒルトン福岡シーホーク", city: "Fukuoka", cityJa: "福岡",
    photo: true, highlight: true, extras: ["Interviews"], extrasJa: ["インタビュー"],
  },
  {
    name: "HEC Paris executive leadership programme", nameJa: "HEC Paris エグゼクティブ・リーダーシップ・プログラム", client: "HEC Paris",
    kind: "Multi-venue study tour", kindJa: "複数会場の研修ツアー",
    venue: "Palace Hotel Tokyo · Meiji Kinenkan · Happo-en", venueJa: "パレスホテル東京・明治記念館・八芳園", city: "Tokyo", cityJa: "東京",
    photo: true, highlight: true, raw: true,
  },
  {
    name: "Celonis Process Intelligence Day Tokyo", client: "Celonis",
    kind: "Tech conference", kindJa: "テクノロジーカンファレンス",
    venue: "ANA InterContinental Tokyo", venueJa: "ANAインターコンチネンタルホテル東京", city: "Tokyo", cityJa: "東京",
    raw: true,
  },
  {
    name: "COMSOL Conference 2026", client: "COMSOL",
    kind: "Technical conference", kindJa: "技術カンファレンス",
    venue: "Akasaka Intercity Conference", venueJa: "赤坂インターシティコンファレンス", city: "Tokyo", cityJa: "東京",
    photo: true,
  },
  {
    name: "Princeton Digital Group – Data Centre Opening, Saitama", nameJa: "Princeton Digital Group データセンター開所式（埼玉）", client: "Princeton Digital Group",
    kind: "Opening ceremony", kindJa: "開所式",
    venue: "PDG data centre", venueJa: "PDG データセンター", city: "Saitama", cityJa: "埼玉",
    photo: true, highlight: true, extras: ["Same-day social photo selects"], extrasJa: ["当日SNS用写真セレクト"],
  },
  {
    name: "IHIF Asia Advisory Board Meeting", client: "Questex",
    kind: "Investment conference", kindJa: "投資カンファレンス",
    venue: "Kimpton Shinjuku Tokyo", venueJa: "キンプトン新宿東京", city: "Tokyo", cityJa: "東京",
    photo: true, highlight: true, extras: ["Interviews"], extrasJa: ["インタビュー"],
  },
  {
    name: "WPI Global Summit 2025", client: "Worldwide Partners",
    kind: "Agency network summit", kindJa: "グローバルサミット",
    venue: "Kimpton Shinjuku Tokyo", venueJa: "キンプトン新宿東京", city: "Tokyo", cityJa: "東京",
    photo: true, recording: true, extras: ["AV support"], extrasJa: ["AV手配"],
  },
  {
    name: "A Shared Table 2026 – Gala Dinner", nameJa: "A Shared Table 2026 ガラディナー", client: "Hort Innovation Australia",
    kind: "Gala dinner", kindJa: "ガラディナー",
    venue: "InterContinental Tokyo Bay", venueJa: "インターコンチネンタル東京ベイ", city: "Tokyo", cityJa: "東京",
    photo: true, highlight: true, extras: ["Interviews"], extrasJa: ["インタビュー"],
  },
  {
    name: "Asia-Pacific Bronchiectasis & NTM Conference 2026 (APBC2026)", client: "Lena Group",
    kind: "Medical congress", kindJa: "医学会議",
    venue: "Kioi Conference Center", venueJa: "紀尾井カンファレンス", city: "Tokyo", cityJa: "東京",
    photo: true, raw: true, extras: ["Speaker interviews"], extrasJa: ["講演者インタビュー"],
  },
  {
    name: "TCVB MICE Workshop 2025", nameJa: "東京観光財団 MICEワークショップ2025", client: "Tokyo Convention & Visitors Bureau",
    kind: "MICE workshop", kindJa: "MICEワークショップ",
    venue: "Various venues", venueJa: "都内各所", city: "Tokyo", cityJa: "東京",
    photo: true, highlight: true,
    extras: ["Zen meditation & fermented foods", "Ukiyo-e workshop", "Geisha & floral art performance"],
    extrasJa: ["座禅・発酵食体験", "浮世絵摺り体験", "芸者・フラワーアートパフォーマンス"],
  },
  {
    name: "Granite Belt Wine Seminar", nameJa: "グラニットベルト ワインセミナー", client: "Tourism and Events Queensland",
    kind: "Wine tasting", kindJa: "ワインテイスティング",
    venue: "Kimpton Shinjuku Tokyo", venueJa: "キンプトン新宿東京", city: "Tokyo", cityJa: "東京",
    photo: true, highlight: true, extras: ["Winemaker interviews"], extrasJa: ["ワイン生産者インタビュー"],
  },
  {
    name: "Commission on Asian Philanthropy", nameJa: "アジア・フィランソロピー委員会", client: "AVPN",
    kind: "Philanthropy meeting", kindJa: "フィランソロピー会議",
    venue: "Happo-en", venueJa: "八芳園", city: "Tokyo", cityJa: "東京",
    photo: true,
  },
  {
    name: "CITC CLSA Tokyo Forum", client: "CLSA",
    kind: "3-day investor forum", kindJa: "3日間の投資家フォーラム",
    venue: "Grand Hyatt Tokyo", venueJa: "グランド ハイアット 東京", city: "Tokyo", cityJa: "東京",
    highlight: true, extras: ["Interviews", "JP/EN subtitles"], extrasJa: ["インタビュー", "日英字幕"],
  },
  {
    name: "London Mayor visit with the British Chamber of Commerce Japan", nameJa: "ロンドン市長来日（在日英国商業会議所）", client: "BCCJ",
    kind: "Business delegation", kindJa: "ビジネス代表団",
    venue: "Tokyo Innovation Base · British Embassy · teamLab Borderless", venueJa: "東京イノベーションベース・英国大使館・チームラボボーダレス", city: "Tokyo", cityJa: "東京",
    photo: true,
  },
  {
    name: "Red Bull esports gaming event", nameJa: "Red Bull eスポーツイベント", client: "Red Bull",
    kind: "Esports event", kindJa: "eスポーツイベント",
    venue: "Red Bull Gaming Sphere Tokyo", venueJa: "Red Bull Gaming Sphere Tokyo", city: "Tokyo", cityJa: "東京",
    photo: true,
  },
  {
    name: "Sports event, Kumamoto", nameJa: "スポーツイベント（熊本）", client: "Infront Sports",
    kind: "Sports event", kindJa: "スポーツイベント",
    venue: "Kumamoto Stadium", venueJa: "熊本のスタジアム", city: "Kumamoto", cityJa: "熊本",
    photo: true, raw: true,
  },
  {
    name: "University of Michigan Alumni Association event", nameJa: "ミシガン大学 同窓会イベント", client: "University of Michigan Alumni Association",
    kind: "Alumni reception", kindJa: "同窓会レセプション",
    venue: "ANA InterContinental Tokyo", venueJa: "ANAインターコンチネンタルホテル東京", city: "Tokyo", cityJa: "東京",
    photo: true,
  },
  {
    name: "Trade delegation from Oman", nameJa: "オマーン政府貿易代表団", client: "JICE",
    kind: "Government delegation", kindJa: "政府代表団",
    venue: "JICE offices · Edo-Tokyo Museum · ministry offices", venueJa: "JICE・江戸東京博物館・各省庁", city: "Tokyo", cityJa: "東京",
    photo: true,
  },
  {
    name: "Trade delegation from Ireland", nameJa: "アイルランド政府貿易代表団", client: "Bord Bia",
    kind: "Government delegation", kindJa: "政府代表団",
    venue: "Hotel New Otani Tokyo and other locations", venueJa: "ホテルニューオータニ東京 ほか", city: "Tokyo", cityJa: "東京",
    photo: true,
  },
  {
    name: "Startup event", nameJa: "スタートアップイベント", client: "TSI Japan",
    kind: "Startup event", kindJa: "スタートアップイベント",
    venue: "Tokyo Innovation Base (TIB)", venueJa: "東京イノベーションベース（TIB）", city: "Tokyo", cityJa: "東京",
    photo: true, raw: true,
  },
  {
    name: "SambaNova Tokyo Mingle 5", client: "SambaNova",
    kind: "Networking event", kindJa: "ネットワーキングイベント",
    venue: "Kaiteki Cafe", venueJa: "Kaiteki Cafe", city: "Tokyo", cityJa: "東京",
    raw: true,
  },
];
