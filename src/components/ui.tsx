import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------- Icons (inline, stroke) ---------- */
type IconProps = { size?: number };

export function WhatsAppIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export function FacebookIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function InstagramIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

/* ---------- Image with labelled placeholder fallback ---------- */
type ImgProps = {
  src: string;
  label: string;
  alt?: string;
  /** Tailwind aspect class e.g. "aspect-[3/4]". Ignored when `fill` is set. */
  ratio?: string;
  /** Fill the (relatively positioned) parent. */
  fill?: boolean;
  dark?: boolean;
  tone?: "a" | "b";
  className?: string;
};

export function Img({ src, label, alt = "", ratio = "aspect-[3/4]", fill, dark, tone = "a", className = "" }: ImgProps) {
  const [failed, setFailed] = useState(false);
  const sizing = fill ? "absolute inset-0 h-full w-full" : `w-full ${ratio}`;

  if (failed) {
    const bg = dark ? "bg-coal ph-dark" : tone === "a" ? "bg-stone ph" : "bg-[#DCD6CB] ph";
    return (
      <div
        role="img"
        aria-label={label}
        className={`${sizing} ${bg} flex items-center justify-center p-6 ${className}`}
      >
        {!dark && (
          <span className="text-center text-[11px] uppercase tracking-[0.16em] text-muted">{label}</span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={fill ? "eager" : "lazy"}
      onError={() => setFailed(true)}
      className={`${sizing} object-cover ${className}`}
    />
  );
}

/* ---------- Scroll reveal ---------- */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

/* ---------- Eyebrow with accent rule ---------- */
export function RuleEyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-4 text-xs uppercase tracking-[0.24em] ${light ? "text-[#D8D2C7]" : "text-muted"}`}>
      <span className="block h-px w-12 bg-accent" />
      {children}
    </div>
  );
}
