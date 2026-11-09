/**
 * SINGLE SOURCE OF TRUTH for all website content.
 * Client changes (text, WhatsApp number, social links, images) happen here only.
 *
 * Images: drop real photos into /public/images using the same file names.
 * Until a file exists, a labelled placeholder is shown automatically.
 */
export const siteConfig = {
  brandName: "Brand Name", // TODO: replace [BRAND NAME]
  tagline: "Tailored to Precision.",
  year: new Date().getFullYear(),

  whatsapp: {
    // Country code included, no "+" and no spaces. TODO: replace dummy number.
    number: "920000000000",
    displayNumber: "+92 XXX XXXXXXX",
    message: "Hi, I'd like to know more about your suits.",
  },

  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },

  address: "[STORE ADDRESS, CITY]",
  timings: "[DAYS · OPENING HOURS]",

  nav: [
    { label: "Collection", href: "#collection" },
    { label: "The Craft", href: "#craft" },
    { label: "Lookbook", href: "#lookbook" },
    { label: "Visit", href: "#visit" },
  ],

  hero: {
    eyebrow: "Bespoke & Ready-to-Wear Tailoring",
    headlineStart: "Tailored to",
    headlineEmphasis: "Precision.",
    text: "Suits and waistcoats cut for the modern gentleman — refined fabrics, a clean silhouette, and a fit that is entirely yours.",
    primaryCta: { label: "Explore the Collection", href: "#collection" },
    secondaryCta: { label: "Book a Fitting" }, // opens WhatsApp
    image: { src: "/images/hero.jpg", label: "Hero image · model in charcoal three-piece · 16:9" },
  },

  intro: {
    headlineStart: "Quiet confidence,",
    headlineEmphasis: "cut to measure.",
    text: "[BRAND NAME] is a menswear house dedicated to formal tailoring. Every suit and waistcoat is designed to be worn for years — understated, precise, and made around the man who wears it.",
  },

  collection: {
    eyebrow: "The Collection",
    title: "Three pieces of a wardrobe.",
    text: "Each line is available in a curated range of fabrics and can be tailored to your measurements.",
    items: [
      {
        title: "Two-Piece Suits",
        text: "Jacket and trouser in matching cloth — the foundation of a formal wardrobe.",
        image: { src: "/images/suit-2pc.jpg", label: "Image · two-piece suit · 3:4" },
        enquiry: "Hi, I'd like to enquire about your Two-Piece Suits.",
      },
      {
        title: "Three-Piece Suits",
        text: "Jacket, trouser and waistcoat — for weddings, ceremonies and occasions that matter.",
        image: { src: "/images/suit-3pc.jpg", label: "Image · three-piece suit · 3:4" },
        enquiry: "Hi, I'd like to enquire about your Three-Piece Suits.",
      },
      {
        title: "Waistcoats",
        text: "Single and double-breasted waistcoats, worn with a suit or on their own.",
        image: { src: "/images/waistcoat.jpg", label: "Image · waistcoat · 3:4" },
        enquiry: "Hi, I'd like to enquire about your Waistcoats.",
      },
    ],
  },

  craft: {
    eyebrow: "The Craft",
    titleStart: "Made with patience,",
    titleEmphasis: "finished by hand.",
    text: "From the first measurement to the final press, every garment passes through experienced hands. The result is tailoring that sits naturally, moves with you, and holds its shape.",
    image: { src: "/images/craft.jpg", label: "Image · fabric & stitching close-up · 4:5" },
    details: [
      { label: "Fabric", value: "[Fabric types — e.g. wool, blends]" },
      { label: "Fit", value: "Measured and cut to you" },
      { label: "Finish", value: "Hand-finished details" },
    ],
  },

  // Remove this whole block (and <Process /> in App.tsx) if the client sells ready-made only.
  process: {
    eyebrow: "How It Works",
    title: "Your suit, in four steps.",
    steps: [
      { title: "Consult", text: "Tell us the occasion, the style and the fabric you have in mind." },
      { title: "Measure", text: "A detailed fitting session captures every measurement that matters." },
      { title: "Tailor", text: "Your garment is cut and constructed, with a trial fitting along the way." },
      { title: "Deliver", text: "Collect your finished piece, pressed and ready to wear." },
    ],
  },

  lookbook: {
    eyebrow: "Lookbook",
    title: "Worn well.",
    linkLabel: "More on Instagram →",
    images: [
      { src: "/images/look-1.jpg", label: "Look 01" },
      { src: "/images/look-2.jpg", label: "Look 02" },
      { src: "/images/look-3.jpg", label: "Look 03" },
      { src: "/images/look-4.jpg", label: "Look 04" },
    ],
  },

  visit: {
    eyebrow: "Visit Us",
    titleStart: "Step into",
    titleEmphasis: "the atelier.",
    text: "Visit the store for a fitting, or message us on WhatsApp to ask about fabrics, timelines and appointments.",
    cta: "Chat on WhatsApp",
  },
};

/** Builds a wa.me link with a pre-filled, URL-encoded message. */
export function waLink(message: string = siteConfig.whatsapp.message): string {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export type SiteImage = { src: string; label: string };
