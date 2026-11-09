import { siteConfig } from "../config/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-[#A8A29A]">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-x-8 gap-y-4 px-5 py-8 text-[13px] sm:px-10">
        <span className="font-serif text-lg tracking-[0.24em] text-cream">[ LOGO ]</span>
        <span>
          © {siteConfig.year} {siteConfig.brandName}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
