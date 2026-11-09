import { siteConfig, waLink } from "../config/siteConfig";
import { Img, RuleEyebrow } from "./ui";

export default function Hero() {
  const { hero } = siteConfig;
  return (
    <section id="top" className="relative flex min-h-[640px] items-end bg-coal text-cream md:min-h-[760px]">
      <Img src={hero.image.src} label={hero.image.label} fill dark alt="" />
      {/* Legibility overlay for real photos */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-page flex-col gap-7 px-5 pb-16 sm:px-10 md:pb-24">
        <RuleEyebrow light>{hero.eyebrow}</RuleEyebrow>
        <h1
          className="max-w-[900px] font-serif font-normal leading-[0.98] tracking-[-0.01em]"
          style={{ fontSize: "clamp(52px, 8vw, 112px)" }}
        >
          {hero.headlineStart} <em className="italic">{hero.headlineEmphasis}</em>
        </h1>
        <p className="max-w-[520px] text-lg text-[#D8D2C7]">{hero.text}</p>
        <div className="mt-3 flex flex-wrap gap-4">
          <a href={hero.primaryCta.href} className="btn bg-cream text-ink hover:bg-white">
            {hero.primaryCta.label}
          </a>
          <a
            href={waLink("Hi, I'd like to book a fitting.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-cream text-cream hover:bg-cream hover:text-ink"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
