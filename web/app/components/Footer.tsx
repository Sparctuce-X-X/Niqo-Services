import Image from "next/image";

const WHATSAPP_NUMBER = "242068755353";

type Locale = "fr" | "en";

const t = {
  fr: {
    description:
      "Cabinet de services numériques. Conception et livraison de plateformes sur-mesure pour les institutions premium.",
    contactLabel: "Contact",
    whatsappLabel: "WhatsApp Business",
    phoneCity: "Brazzaville",
    presenceLabel: "Présence",
    presence: [
      "Brazzaville — siège",
      "Pointe-Noire",
      "Couverture nationale",
    ],
    copyright: "MMXXVI Niqo Services. Tous droits réservés.",
    territory: "République du Congo",
    whatsappMessage:
      "Bonjour, j'aimerais cadrer un projet avec Niqo Services.",
  },
  en: {
    description:
      "Digital engineering firm. Bespoke design and delivery of platforms for premium institutions.",
    contactLabel: "Contact",
    whatsappLabel: "WhatsApp Business",
    phoneCity: "Brazzaville",
    presenceLabel: "Presence",
    presence: [
      "Brazzaville — headquarters",
      "Pointe-Noire",
      "Nationwide coverage",
    ],
    copyright: "MMXXVI Niqo Services. All rights reserved.",
    territory: "Republic of Congo",
    whatsappMessage:
      "Hello, I'd like to start a conversation with Niqo Services.",
  },
};

export function Footer({ locale = "fr" }: { locale?: Locale }) {
  const c = t[locale];
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    c.whatsappMessage
  )}`;

  return (
    <footer className="bg-navy-950 text-ivoire">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-3">
          <div>
            <div className="mb-6">
              <Image
                src="/brand/logos/png/niqo-services-horizontal-dark@1x.png"
                alt="Niqo Services"
                width={180}
                height={63}
              />
            </div>
            <p className="font-body text-sm text-ivoire/70 max-w-xs leading-relaxed">
              {c.description}
            </p>
          </div>

          <div>
            <p className="font-tracked text-xs tracking-tracked uppercase text-ivoire/60 mb-6">
              {c.contactLabel}
            </p>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivoire hover:text-or-400 transition-colors"
                >
                  {c.whatsappLabel}
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@niqo-services.com"
                  className="text-ivoire hover:text-or-400 transition-colors"
                >
                  contact@niqo-services.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+242068755353"
                  className="text-ivoire hover:text-or-400 transition-colors"
                >
                  +242 06 875 53 53
                </a>
                <span className="text-ivoire/50 ml-2 text-xs">
                  {c.phoneCity}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-tracked text-xs tracking-tracked uppercase text-ivoire/60 mb-6">
              {c.presenceLabel}
            </p>
            <ul className="space-y-3 font-body text-sm text-ivoire">
              {c.presence.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="niqo-hairline-light mt-16 mb-6 w-full" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-xs text-ivoire/50">
          <p>{c.copyright}</p>
          <p>{c.territory}</p>
        </div>
      </div>
    </footer>
  );
}
