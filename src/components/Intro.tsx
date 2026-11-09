import { siteConfig } from "../config/siteConfig";
import { Reveal } from "./ui";

export default function Intro() {
  const { intro } = siteConfig;
  return (
    <section className="mx-auto max-w-[880px] px-5 py-24 text-center sm:px-10 md:py-32">
      <Reveal className="flex flex-col items-center gap-7">
        <span className="block h-14 w-px bg-accent" aria-hidden="true" />
        <p className="font-serif leading-[1.2]" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
          {intro.headlineStart} <em>{intro.headlineEmphasis}</em>
        </p>
        <p className="max-w-[600px] text-[17px] text-muted">{intro.text}</p>
      </Reveal>
    </section>
  );
}
