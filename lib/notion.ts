import { Client } from "@notionhq/client";
import type {
  BlockObjectResponse,
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({ auth: process.env.NOTION_API_KEY });

const DB_ID = process.env.NOTION_BLOG_DB_ID!;

// ─── Types ───────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  coverUrl: string | null;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function richTextToString(rich: RichTextItemResponse[]): string {
  return rich.map((r) => r.plain_text).join("");
}

function getProp(page: PageObjectResponse, name: string) {
  return page.properties[name];
}

export function pageToPost(page: PageObjectResponse): BlogPost {
  const titleProp = getProp(page, "Title") ?? getProp(page, "名前");
  const slugProp = getProp(page, "Slug");
  const excerptProp = getProp(page, "Excerpt");
  const dateProp = getProp(page, "Date");
  const categoryProp = getProp(page, "Category");
  const coverProp = getProp(page, "Cover");

  const title =
    titleProp?.type === "title" ? richTextToString(titleProp.title) : "Untitled";

  const slug =
    slugProp?.type === "rich_text"
      ? richTextToString(slugProp.rich_text)
      : page.id;

  const excerpt =
    excerptProp?.type === "rich_text"
      ? richTextToString(excerptProp.rich_text)
      : "";

  const date =
    dateProp?.type === "date" && dateProp.date?.start
      ? dateProp.date.start
      : new Date().toISOString().split("T")[0];

  const category =
    categoryProp?.type === "select" && categoryProp.select
      ? categoryProp.select.name
      : "";

  let coverUrl: string | null = null;
  if (coverProp?.type === "files" && coverProp.files.length > 0) {
    const f = coverProp.files[0];
    coverUrl = f.type === "external" ? f.external.url : f.type === "file" ? f.file.url : null;
  }
  // Also check page cover
  if (!coverUrl && page.cover) {
    coverUrl =
      page.cover.type === "external"
        ? page.cover.external.url
        : page.cover.type === "file"
        ? page.cover.file.url
        : null;
  }

  return { id: page.id, title, slug, excerpt, date, category, coverUrl };
}

// ─── API calls ───────────────────────────────────────────────────────────────

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const response = await notion.databases.query({
    database_id: DB_ID,
    filter: { property: "Published", checkbox: { equals: true } },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return (response.results as PageObjectResponse[]).map(pageToPost);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await notion.databases.query({
    database_id: DB_ID,
    filter: {
      and: [
        { property: "Published", checkbox: { equals: true } },
        { property: "Slug", rich_text: { equals: slug } },
      ],
    },
  });

  if (!response.results.length) return null;
  return pageToPost(response.results[0] as PageObjectResponse);
}

export async function getPostBlocks(pageId: string): Promise<BlockObjectResponse[]> {
  const blocks: BlockObjectResponse[] = [];
  let cursor: string | undefined;

  do {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
      page_size: 100,
    });
    blocks.push(...(response.results as BlockObjectResponse[]));
    cursor = response.has_more ? (response.next_cursor ?? undefined) : undefined;
  } while (cursor);

  return blocks;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getPublishedPosts();
  return posts.map((p) => p.slug);
}
