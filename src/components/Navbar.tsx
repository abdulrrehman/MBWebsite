import { siteConfig, waLink } from "../config/siteConfig";
import { WhatsAppIcon } from "./ui";

export default function Navbar() {
  return (
    <header className="border-b border-line bg-cream">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-x-10 gap-y-4 px-5 py-5 sm:px-10"
      >
        <a href="#top" aria-label={`${siteConfig.brandName} home`} className="flex h-11 items-center">
          <img src="/logo.svg" alt={siteConfig.brandName} height={44} className="h-11 w-auto" />
        </a>

        <ul className="order-3 flex w-full flex-wrap gap-x-8 gap-y-1 text-[13px] uppercase tracking-[0.14em] md:order-none md:w-auto">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="block py-3 transition-colors hover:text-muted">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center gap-2.5 border border-ink px-5 text-[13px] uppercase tracking-[0.12em] transition-colors hover:bg-ink hover:text-cream"
        >
          <WhatsAppIcon />
          WhatsApp Us
        </a>
      </nav>
    </header>
  );
}
