const TOKEN = process.env.WEBFLOW_API_TOKEN!;
const COLLECTION_ID = process.env.WEBFLOW_COLLECTION_ID!;

export interface BlogPost {
  id: string;
  slug: string;
  name: string;
  summary: string;
  body: string;
  mainImage: { url: string; alt: string | null } | null;
  thumbnail: { url: string; alt: string | null } | null;
  gallery: { url: string; alt: string | null }[];
  datePosted: string;
  featured: boolean;
  isDraft: boolean;
}

function mapItem(item: Record<string, unknown>): BlogPost {
  const fd = (item.fieldData ?? {}) as Record<string, unknown>;
  const toImg = (v: unknown) => {
    if (!v || typeof v !== "object") return null;
    const obj = v as Record<string, unknown>;
    return { url: String(obj.url ?? ""), alt: (obj.alt as string | null) ?? null };
  };
  const gallery = Array.isArray(fd.gallery)
    ? (fd.gallery as unknown[]).map(toImg).filter(Boolean) as BlogPost["gallery"]
    : [];

  return {
    id: String(item.id ?? ""),
    slug: String(fd.slug ?? ""),
    name: String(fd.name ?? ""),
    summary: String(fd["post-summary"] ?? ""),
    body: String(fd["post-body"] ?? ""),
    mainImage: toImg(fd["main-image"]),
    thumbnail: toImg(fd["thumbnail-image"]),
    gallery,
    datePosted: String(fd["date-posted"] ?? ""),
    featured: Boolean(fd.featured),
    isDraft: Boolean(item.isDraft),
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const res = await fetch(
    `https://api.webflow.com/v2/collections/${COLLECTION_ID}/items?limit=100`,
    {
      headers: { Authorization: `Bearer ${TOKEN}` },
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) throw new Error(`Webflow API error: ${res.status}`);
  const data = await res.json();
  return (data.items as Record<string, unknown>[])
    .map(mapItem)
    .filter((p) => !p.isDraft && p.slug);
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}
