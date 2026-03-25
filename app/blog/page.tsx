import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { getBlogPosts } from "@/lib/webflow";

export const metadata: Metadata = {
  title: "Blog | Filming in Japan",
  description: "Production insights, case studies and behind-the-scenes from our corporate video and photo projects across Japan.",
  alternates: { canonical: "https://www.filminginjapan.com/blog" },
};

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div style={{ backgroundColor: "#fdf8f3" }}>

      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{ backgroundColor: "#0d0a07" }}>
        <div className="absolute top-8 left-8 pointer-events-none">
          <div className="w-8 h-8 border-t border-l" style={{ borderColor: "rgba(233,82,40,0.4)" }} />
        </div>
        <div className="absolute top-8 right-8 pointer-events-none">
          <div className="w-8 h-8 border-t border-r" style={{ borderColor: "rgba(233,82,40,0.4)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>
              Production Notes · Japan
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black leading-[0.9] mb-6" style={{ color: "#fdf8f3" }}>
            Blog<span style={{ color: "#e95228" }}>.</span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: "rgba(253,248,243,0.6)" }}>
            Case studies, production insights and behind-the-scenes from our work across Japan.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          {posts.length === 0 ? (
            <p style={{ color: "rgba(28,18,8,0.5)" }}>No posts yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                  {post.thumbnail && (
                    <div className="relative aspect-[16/9] overflow-hidden mb-5" style={{ backgroundColor: "#e8d9c8" }}>
                      <Image
                        src={post.thumbnail.url}
                        alt={post.thumbnail.alt ?? post.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  {post.datePosted && (
                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: "rgba(28,18,8,0.4)" }}>
                      {formatDate(post.datePosted)}
                    </p>
                  )}
                  <h2 className="font-black text-base leading-snug mb-2 group-hover:underline" style={{ color: "#1c1208", textDecorationColor: "#e95228" }}>
                    {post.name}
                  </h2>
                  {post.summary && (
                    <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "rgba(28,18,8,0.55)" }}>
                      {post.summary}
                    </p>
                  )}
                  <span className="inline-block mt-3 font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: "#e95228" }}>
                    Read →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer lang="en" />
    </div>
  );
}
