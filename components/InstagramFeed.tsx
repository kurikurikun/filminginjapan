"use client";
import LazyElfsight from "@/components/LazyElfsight";
import { Section, Title, Kicker } from "@/components/editorial";

export default function InstagramFeed({
  num,
  label,
  lang = "en",
}: { num?: string; label?: string; lang?: "en" | "jp" } = {}) {
  const isJp = lang === "jp";
  return (
    <Section num={num} label={label} labelLang={isJp ? "en" : "ja"} aria-labelledby="instagram-heading">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-5 mb-12">
          <div>
            <Kicker>Instagram</Kicker>
            <Title id="instagram-heading" className="fij-h2">Follow the work</Title>
          </div>
          <a
            href="https://www.instagram.com/move_ment.co.ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="fij-link text-[15px]"
          >
            @move_ment.co.ltd
          </a>
        </div>

        <LazyElfsight appId="6e9766ec-6c97-4556-b049-6be8eb5a7967" minHeight={480} />
    </Section>
  );
}
