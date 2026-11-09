import { siteConfig } from "../config/siteConfig";
import { Img, Reveal } from "./ui";

export default function Lookbook() {
  const { lookbook, social } = siteConfig;
  return (
    <section id="lookbook" className="mx-auto max-w-page px-5 pb-24 sm:px-10 md:pb-32">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-2.5">
          <span className="eyebrow">{lookbook.eyebrow}</span>
          <h2 className="h2">{lookbook.title}</h2>
        </div>
        <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="link-arrow">
          {lookbook.linkLabel}
        </a>
      </div>

      <Reveal>
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr))]">
          {lookbook.images.map((img, i) => (
            <Img key={img.src} src={img.src} label={img.label} alt={img.label} ratio="aspect-[3/4]" tone={i % 2 === 0 ? "a" : "b"} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
