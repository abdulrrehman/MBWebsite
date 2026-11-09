import { siteConfig, waLink } from "../config/siteConfig";
import { Img, Reveal } from "./ui";

export default function Collections() {
  const { collection } = siteConfig;
  return (
    <section id="collection" className="mx-auto max-w-page px-5 pb-24 sm:px-10 md:pb-32">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-x-10 gap-y-4 border-b border-line pb-6">
        <div className="flex flex-col gap-2.5">
          <span className="eyebrow">{collection.eyebrow}</span>
          <h2 className="h2">{collection.title}</h2>
        </div>
        <p className="max-w-[380px] text-muted">{collection.text}</p>
      </div>

      <div className="grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(min(280px,100%),1fr))]">
        {collection.items.map((item) => (
          <Reveal key={item.title}>
            <article className="flex flex-col gap-5">
              <Img src={item.image.src} label={item.image.label} alt={item.title} ratio="aspect-[3/4]" />
              <div className="flex flex-col gap-1.5">
                <h3 className="font-serif text-[30px] font-medium">{item.title}</h3>
                <p className="text-muted">{item.text}</p>
                <a
                  href={waLink(item.enquiry)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow mt-2 self-start"
                >
                  Enquire →
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
