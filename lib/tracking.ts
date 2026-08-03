// Ad-click attribution: persist gclid / UTM params in first-party cookies so a
// visitor who clicks an ad and returns in a later session (new tab, next day)
// still has the click attached to their enquiry. sessionStorage lost this the
// moment the tab closed, while Google Ads keeps crediting the click for 90 days.

export const TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
] as const;

export type TrackingKey = (typeof TRACKING_KEYS)[number];
export type TrackingParams = Partial<Record<TrackingKey, string>>;

const COOKIE_PREFIX = "fij_";
const MAX_AGE_DAYS = 90;

function readCookie(name: string): string {
  const prefixed = `${COOKIE_PREFIX}${name}=`;
  const match = document.cookie.split("; ").find((c) => c.startsWith(prefixed));
  if (!match) return "";
  try {
    return decodeURIComponent(match.slice(prefixed.length));
  } catch {
    return "";
  }
}

function writeCookie(name: string, value: string) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie =
    `${COOKIE_PREFIX}${name}=${encodeURIComponent(value)}` +
    `; path=/; max-age=${MAX_AGE_DAYS * 24 * 60 * 60}; SameSite=Lax${secure}`;
}

/**
 * Reads tracking params from the current URL, falling back to cookies set by an
 * earlier visit. A fresh param in the URL wins and is re-persisted, matching how
 * Google Ads credits the most recent click.
 */
export function getTrackingParams(): TrackingParams {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const result: TrackingParams = {};

  TRACKING_KEYS.forEach((key) => {
    const fromUrl = params.get(key) || "";
    if (fromUrl) writeCookie(key, fromUrl);
    const val = fromUrl || readCookie(key);
    if (val) result[key] = val;
  });

  return result;
}

/** Human-readable channel for the lead record: "Google Ads" beats a bare utm_source. */
export function getTrackingSource(tracking: TrackingParams): string | undefined {
  if (tracking.gclid) return "Google Ads";
  return tracking.utm_source || undefined;
}
