import Image from "next/image";

const WHATSAPP_NUMBER = "242068755353";

type Locale = "fr" | "en";

const t = {
  fr: {
    eyebrow: "Cabinet de services numériques · Afrique francophone",
    h1: "Des plateformes sur-mesure pour les institutions qui exigent rigueur et continuité.",
    subtitle:
      "Conception, ingénierie et accompagnement de projets numériques pour les écoles privées, PME, cabinets, ONG et institutions. Présence sur l'Afrique francophone, siège en République du Congo (Brazzaville · Pointe-Noire).",
    ctaPrimary: "Cadrer un projet",
    ctaSecondary: "Voir nos références",
    whatsappMessage:
      "Bonjour, j'aimerais cadrer un projet avec Niqo Services.",
  },
  en: {
    eyebrow: "Digital engineering firm · French-speaking Africa",
    h1: "Bespoke platforms for institutions that demand rigor and continuity.",
    subtitle:
      "Design, engineering and end-to-end delivery of digital projects for private schools, SMEs, firms, NGOs and institutions. Present across French-speaking Africa, headquartered in the Republic of Congo (Brazzaville · Pointe-Noire).",
    ctaPrimary: "Start a conversation",
    ctaSecondary: "See our case studies",
    whatsappMessage:
      "Hello, I'd like to start a conversation with Niqo Services.",
  },
};

export function Hero({ locale = "fr" }: { locale?: "fr" | "en" }) {
  const c = t[locale];
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    c.whatsappMessage
  )}`;

  return (
    <section className="relative bg-navy-950 text-ivoire overflow-hidden">
      <div
        className="hidden md:block absolute -right-40 -bottom-40 opacity-[0.05] pointer-events-none select-none"
        aria-hidden
      >
        <Image
          src="/brand/logos/png/niqo-services-emblem.png"
          alt=""
          width={720}
          height={720}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-36 md:pb-36">
        <p className="font-tracked text-[10px] sm:text-xs tracking-tracked-wide uppercase text-or-400 mb-6 md:mb-10">
          {c.eyebrow}
        </p>

        <h1 className="font-title text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-title leading-[1.05] max-w-5xl">
          {c.h1}
        </h1>

        <p className="font-body text-base sm:text-lg md:text-xl text-ivoire/75 mt-6 md:mt-10 max-w-2xl leading-relaxed">
          {c.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 md:mt-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-ivoire text-navy-950 font-tracked text-sm font-medium tracking-tracked uppercase hover:bg-or-400 transition-colors"
          >
            {c.ctaPrimary}
          </a>
          <a
            href="#references"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border border-ivoire/30 text-ivoire font-tracked text-sm font-medium tracking-tracked uppercase hover:border-or-400 hover:text-or-400 transition-colors"
          >
            {c.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
