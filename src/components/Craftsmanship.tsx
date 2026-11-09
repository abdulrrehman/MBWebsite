import { siteConfig } from "../config/siteConfig";
import { Img, Reveal, RuleEyebrow } from "./ui";

export default function Craftsmanship() {
  const { craft } = siteConfig;
  return (
    <section id="craft" className="bg-sand">
      <div className="mx-auto grid max-w-page items-center gap-x-24 gap-y-16 px-5 py-24 sm:px-10 md:py-32 [grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))]">
        <Reveal>
          <Img src={craft.image.src} label={craft.image.label} alt="Fabric and stitching close-up" ratio="aspect-[4/5]" tone="b" />
        </Reveal>

        <Reveal className="flex flex-col gap-7">
          <RuleEyebrow>{craft.eyebrow}</RuleEyebrow>
          <h2 className="h2">
            {craft.titleStart} <em>{craft.titleEmphasis}</em>
          </h2>
          <p className="max-w-[480px] text-[17px] text-[#4F4B45]">{craft.text}</p>
          <dl className="flex flex-col border-t border-[#CFC8BC]">
            {craft.details.map((d) => (
              <div key={d.label} className="flex justify-between gap-6 border-b border-[#CFC8BC] py-[18px]">
                <dt className="font-serif text-[22px]">{d.label}</dt>
                <dd className="text-right text-[#4F4B45]">{d.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
