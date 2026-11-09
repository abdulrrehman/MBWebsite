import { siteConfig, waLink } from "../config/siteConfig";
import { FacebookIcon, InstagramIcon, Reveal, RuleEyebrow, WhatsAppIcon } from "./ui";

export default function Visit() {
  const { visit, address, timings, whatsapp, social } = siteConfig;
  const rows = [
    { label: "Address", value: address },
    { label: "Opening Hours", value: timings },
    { label: "WhatsApp", value: whatsapp.displayNumber },
  ];

  return (
    <section id="visit" className="bg-ink text-cream">
      <div className="mx-auto grid max-w-page items-start gap-x-24 gap-y-14 px-5 py-24 sm:px-10 md:py-28 [grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))]">
        <Reveal className="flex flex-col gap-6">
          <RuleEyebrow light>{visit.eyebrow}</RuleEyebrow>
          <h2 className="font-serif font-normal leading-[1.02]" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>
            {visit.titleStart} <em>{visit.titleEmphasis}</em>
          </h2>
          <p className="max-w-[440px] text-[#C9C3B8]">{visit.text}</p>
          <div className="mt-2">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-cream text-ink hover:bg-white"
            >
              <WhatsAppIcon />
              {visit.cta}
            </a>
          </div>
        </Reveal>

        <Reveal>
          <dl className="flex flex-col border-t border-[#3A3835]">
            {rows.map((r) => (
              <div key={r.label} className="flex flex-col gap-1.5 border-b border-[#3A3835] py-6">
                <dt className="text-xs uppercase tracking-[0.2em] text-[#A8A29A]">{r.label}</dt>
                <dd className="font-serif text-2xl">{r.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex items-center gap-3 pt-6">
            <a
              href={social.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center border border-muted transition-colors hover:bg-cream hover:text-ink"
            >
              <FacebookIcon />
            </a>
            <a
              href={social.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center border border-muted transition-colors hover:bg-cream hover:text-ink"
            >
              <InstagramIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
