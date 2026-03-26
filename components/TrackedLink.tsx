"use client";

interface TrackedLinkProps {
  href: string;
  eventName: string;
  eventLabel?: string;
  className?: string;
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

declare function gtag(...args: unknown[]): void;

export default function TrackedLink({
  href,
  eventName,
  eventLabel,
  className,
  style,
  target,
  rel,
  children,
}: TrackedLinkProps) {
  function handleClick() {
    if (typeof gtag !== "undefined") {
      gtag("event", eventName, {
        event_category: "contact",
        event_label: eventLabel,
      });
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className} style={style} target={target} rel={rel}>
      {children}
    </a>
  );
}
