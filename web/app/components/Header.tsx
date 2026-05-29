import Image from "next/image";
import { MobileMenu } from "./MobileMenu";

const WHATSAPP_NUMBER = "242068755353";
const WHATSAPP_MESSAGE_FR =
  "Bonjour, j'aimerais cadrer un projet avec Niqo Services.";
const WHATSAPP_MESSAGE_EN =
  "Hello, I'd like to start a conversation with Niqo Services.";

type Locale = "fr" | "en";

const t = {
  fr: {
    nav: {
      expertises: "Expertises",
      references: "Références",
      methode: "Méthode",
      fondateurs: "Fondateurs",
    },
    cta: "Cadrer un projet",
    whatsappMessage: WHATSAPP_MESSAGE_FR,
  },
  en: {
    nav: {
      expertises: "Expertise",
      references: "Case studies",
      methode: "Method",
      fondateurs: "Founders",
    },
    cta: "Start a conversation",
    whatsappMessage: WHATSAPP_MESSAGE_EN,
  },
};

export function Header({ locale = "fr" }: { locale?: Locale }) {
  const c = t[locale];
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    c.whatsappMessage
  )}`;
  const homeHref = locale === "en" ? "/en" : "/";

  return (
    <header className="sticky top-0 z-50 bg-navy-950 border-b border-ivoire/10">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href={homeHref}
          className="flex items-center group"
          aria-label="Niqo Services"
        >
          <Image
            src="/brand/logos/png/niqo-services-horizontal-dark@1x.png"
            alt="Niqo Services"
            width={140}
            height={49}
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10 font-tracked text-xs tracking-tracked uppercase text-ivoire/75">
          <a href="#expertises" className="hover:text-or-400 transition-colors">
            {c.nav.expertises}
          </a>
          <a href="#references" className="hover:text-or-400 transition-colors">
            {c.nav.references}
          </a>
          <a href="#methode" className="hover:text-or-400 transition-colors">
            {c.nav.methode}
          </a>
          <a
            href="#fondateurs"
            className="hover:text-or-400 transition-colors"
          >
            {c.nav.fondateurs}
          </a>
        </nav>

        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-2 font-tracked text-[11px] tracking-tracked uppercase">
            <a
              href="/"
              className={
                locale === "fr"
                  ? "text-or-400"
                  : "text-ivoire/50 hover:text-ivoire transition-colors"
              }
              aria-current={locale === "fr" ? "page" : undefined}
            >
              FR
            </a>
            <span className="text-ivoire/30">/</span>
            <a
              href="/en"
              className={
                locale === "en"
                  ? "text-or-400"
                  : "text-ivoire/50 hover:text-ivoire transition-colors"
              }
              aria-current={locale === "en" ? "page" : undefined}
            >
              EN
            </a>
          </div>

          <span
            aria-hidden="true"
            className="mx-6 h-5 w-px bg-ivoire/15"
          />

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-ivoire text-navy-950 font-tracked text-xs font-medium tracking-tracked uppercase hover:bg-or-400 transition-colors"
          >
            {c.cta}
          </a>
        </div>

        <MobileMenu locale={locale} />
      </div>
    </header>
  );
}
