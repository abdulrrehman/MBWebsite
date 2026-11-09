import { siteConfig } from "../config/siteConfig";
import { Reveal } from "./ui";

export default function Process() {
  const { process } = siteConfig;
  return (
    <section className="mx-auto max-w-page px-5 py-24 sm:px-10 md:py-32">
      <div className="mb-14 flex flex-col items-center gap-2.5 text-center">
        <span className="eyebrow">{process.eyebrow}</span>
        <h2 className="h2">{process.title}</h2>
      </div>

      <Reveal>
        <ol className="grid border-t border-line [grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr))]">
          {process.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3 border-b border-line py-9 pr-7">
              <span className="block h-0.5 w-6 bg-accent" aria-hidden="true" />
              <span className="text-xs tracking-[0.2em] text-muted">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-serif text-[28px] font-medium">{step.title}</h3>
              <p className="text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
