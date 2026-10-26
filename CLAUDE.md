# CLAUDE.md

Filming in Japan — bilingual (EN/JP) corporate video production website.

## Tech Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS v3
- Node v20 installed at `~/.local/node/bin` (add to PATH)
- Web3Forms for contact form submissions (no backend required)
- Vercel for deployment

## Commands

```bash
export PATH="$HOME/.local/node/bin:$PATH"
npm run dev      # Dev server on port 3001
npm run build    # Production build
```

Dev server is configured in `.claude/launch.json` as `filminginjapan-dev` on port 3001.

## Deployment

- **`git push` to `origin` (kurikurikun/filminginjapan) is the ONLY deploy path** — Vercel auto-builds production from every push to main.
- Never use `vercel` CLI deploys (uninstalled deliberately) — untracked files reaching production this way caused the events page to silently lose its videos in June 2026.
- All assets referenced by pages (including `public/videos/`) must be committed to git.
- Git auth: repo-local credential helper uses `gh` (logged in as kurikurikun).

## Design System — "bilingual editorial" (Oct 2026)

- **Colours**: cream `#fdf8f3` (bg), sand `#f5ede2`, ink `#1c1208` (text, rules), night `#0d0a07` (dark sections),
  rust `#e95228` (accent), rust-dark `#c43d10` (hover / small accent text), muted `#6b5a48`, body `#4a3a2a`.
  Tailwind tokens: `cream`, `sand`, `ink`, `night`, `rust`, `rust-dark`, `muted`, `body`, `rule`.
- **Fonts**: Inter Tight (`font-sans`) + Noto Sans JP (`font-jp`), loaded via `next/font` in `app/layout.tsx`.
  No mono, no serif, no italics.
- **Headlines**: `.fij-h1` / `.fij-h2` / `.fij-h3` (weight 600, tight tracking). Every headline ends with an orange
  full stop — use `<Title>` from `components/editorial.tsx` (cream dot on orange sections). No dot after "?" or "!".
- **Signature**: each main section is a `<Section num="01" label="撮影内容">` — a number plus a vertical (縦書き) label in
  the *other* language: Japanese on EN pages, English (`labelLang="en"`) on JP pages. Number sections down the page.
- Strong ink rules (1–2px) instead of beige dividers; square corners; no shadows, corner brackets, grain or gradients
  used as decoration. Small labels are plain `text-sm font-medium` in muted (`<Kicker>`), not tracked uppercase.
- Orange (`tone="orange"`) at most once per page; `night` for video/project sections; `ink` for the closing CTA band.
- Buttons: `.fij-btn` (dark), `.fij-btn-orange`, `.fij-btn-outline`; text links `.fij-link`. Sentence case.
- JP pages: `lang="ja"` on the page wrapper, `LandingContactForm lang="jp"`, `Footer lang="jp"`.
- Reference implementation: `app/event-photo-video-japan/page.tsx`.

## Structure

```
app/
  page.tsx                                          — Homepage (hero video, carousel, services, FAQ)
  corporate-branding-videos-japan/page.tsx          — Google Ads landing page
  client-testimonials-video-production-tokyo-japan/ — Google Ads landing page
  event-photo-video-japan/                          — Google Ads landing page
  real-estate-photo-video-tokyo-japan/              — Google Ads landing page
  thank-you/page.tsx                                — Post-form conversion page (no-index)

components/
  Navigation.tsx        — Fixed nav, bilingual EN/JP toggle, logo from public/images/fij.png
  Footer.tsx            — Dark footer, Tokyo + Hiroshima office info
  LandingContactForm.tsx — Web3Forms client component, redirects to /thank-you on success
  WorkCarousel.tsx      — Auto-advancing 6-slide carousel for homepage

public/
  images/fij.png        — Real logo (use in Navigation and Footer)
```

## Key Rules

- **No onMouseEnter/onMouseLeave in Server Components** — use CSS classes in `globals.css` instead
- `next/image` requires external hostnames in `next.config.mjs` remotePatterns (picsum.photos is configured)
- Landing pages keep a two-column region `lg:grid-cols-[minmax(0,1fr)_420px]` — opening content left, sticky form (`#enquire`) right
- All landing pages share `LandingContactForm` — the `service` prop pre-fills the email subject line

## Contact / Forms

- Web3Forms access key hardcoded in `LandingContactForm.tsx`: `4b598df9-6557-4d91-8b4b-8d6d3ebedc9e`
- On success → redirects to `/thank-you` (used as Google Ads conversion action)
- Contact email: `filminginjapan@move-ment.co`
- WhatsApp: `+81 90-3880-0895` → `https://wa.me/819038800895`

## Google Ads

Landing page slugs must exactly match current Google Ads destination URLs:
- `/corporate-branding-videos-japan`
- `/client-testimonials-video-production-tokyo-japan`
- `/event-photo-video-japan`
- `/real-estate-photo-video-tokyo-japan`

Conversion tracking: Google Ads page-visit conversion on `/thank-you`.

## Pending

- [ ] JP versions of all pages (`/jp/` prefix)
- [ ] Remaining landing page content (testimonials, event, real estate pages need real copy from live site)
- [ ] Homepage hero: Vimeo autoplay background (video ID 533378669)
- [ ] WorkCarousel: replace picsum placeholder images with real production stills
- [ ] Blog pages (separate Notion database)
- [ ] `/contact` page
- [ ] Real photography/video assets when ready
