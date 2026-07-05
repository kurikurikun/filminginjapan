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

## Design System

- **Background**: `#fdf8f3` (warm cream)
- **Accent / primary**: `#e95228` (orange)
- **Accent hover**: `#c43d10` (dark orange)
- **Dark sections**: `#0d0a07` (near-black)
- **Body text**: `#1c1208`
- **Borders**: `#e8d9c8`
- **Light section bg**: `#f5ede2`
- **Font**: System sans, `font-black` for headings, `font-mono` for labels/eyebrows
- Eyebrow labels: `font-mono text-[10px] tracking-[0.35em] uppercase`
- Frame corners: `w-8 h-8 border-t border-l/r` at `rgba(233,82,40,0.4)` on dark sections
- CSS utility classes in `app/globals.css`: `.btn-warm`, `.service-card`

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
- Landing pages use a two-column layout: `lg:grid-cols-[1fr_480px]` — service content left, sticky form right
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
