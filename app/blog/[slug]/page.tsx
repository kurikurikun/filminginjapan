import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { getBlogPosts, getBlogPost } from "@/lib/webflow";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.name} | Filming in Japan`,
    description: post.summary,
    alternates: { canonical: `https://www.filminginjapan.com/blog/${post.slug}` },
    openGraph: post.mainImage ? { images: [{ url: post.mainImage.url }] } : undefined,
  };
}

function formatDate(iso: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <div style={{ backgroundColor: "#fdf8f3" }}>

      {/* Hero */}
      <section className="relative pt-32 pb-0 overflow-hidden" style={{ backgroundColor: "#0d0a07" }}>
        <div className="absolute top-8 left-8 pointer-events-none">
          <div className="w-8 h-8 border-t border-l" style={{ borderColor: "rgba(233,82,40,0.4)" }} />
        </div>
        <div className="absolute top-8 right-8 pointer-events-none">
          <div className="w-8 h-8 border-t border-r" style={{ borderColor: "rgba(233,82,40,0.4)" }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16 pb-12">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/blog" className="font-mono text-[10px] tracking-[0.35em] uppercase flex items-center gap-2" style={{ color: "#e95228" }}>
              ← Blog
            </Link>
          </div>
          {post.datePosted && (
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase mb-4" style={{ color: "rgba(253,248,243,0.4)" }}>
              {formatDate(post.datePosted)}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6" style={{ color: "#fdf8f3" }}>
            {post.name}
          </h1>
          {post.summary && (
            <p className="text-lg leading-relaxed" style={{ color: "rgba(253,248,243,0.6)" }}>
              {post.summary}
            </p>
          )}
        </div>

        {/* Hero image */}
        {post.mainImage && (
          <div className="relative w-full" style={{ aspectRatio: "16/7" }}>
            <Image
              src={post.mainImage.url}
              alt={post.mainImage.alt ?? post.name}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}
      </section>

      {/* Body */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-12 lg:px-16">
          <div
            className="prose-fij"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* Gallery */}
          {post.gallery.length > 1 && (
            <div className="mt-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10" style={{ backgroundColor: "#e95228" }} />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: "#e95228" }}>Gallery</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {post.gallery.map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: "#e8d9c8" }}>
                    <Image
                      src={img.url}
                      alt={img.alt ?? `${post.name} — image ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t" style={{ borderColor: "#e8d9c8", backgroundColor: "#f5ede2" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2" style={{ color: "#e95228" }}>Work with us</p>
            <p className="font-black text-lg" style={{ color: "#1c1208" }}>Planning a shoot in Japan? Get in touch.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://wa.me/819038800895" className="btn-warm font-black text-sm tracking-[0.15em] uppercase px-6 py-3">
              WhatsApp Us
            </a>
            <a href="mailto:filminginjapan@move-ment.co" className="font-black text-sm tracking-[0.15em] uppercase px-6 py-3 border" style={{ borderColor: "#1c1208", color: "#1c1208" }}>
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer lang="en" />
    </div>
  );
}
