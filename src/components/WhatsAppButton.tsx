import { waLink } from "../config/siteConfig";
import { WhatsAppIcon } from "./ui";

export default function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-20 inline-flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-[#0B2E1F] shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
