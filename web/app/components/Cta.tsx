const WHATSAPP_NUMBER = "242068755353";

type Locale = "fr" | "en";

const t = {
  fr: {
    eyebrow: "Cadrer un projet",
    title: "Une plateforme à concevoir, un audit à mener, une équipe à former ?",
    subtitle:
      "Échange initial sous 48 h, sans engagement. Nous proposons un cadrage et un devis chiffré dans la foulée.",
    whatsapp: "Écrire sur WhatsApp",
    whatsappMessage:
      "Bonjour, j'aimerais cadrer un projet avec Niqo Services.",
  },
  en: {
    eyebrow: "Start a conversation",
    title: "A platform to design, an audit to run, a team to train?",
    subtitle:
      "Initial conversation within 48 hours, no commitment. We come back with a framing and a priced proposal.",
    whatsapp: "Message us on WhatsApp",
    whatsappMessage:
      "Hello, I'd like to start a conversation with Niqo Services.",
  },
};

export function Cta({ locale = "fr" }: { locale?: Locale }) {
  const c = t[locale];
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    c.whatsappMessage
  )}`;

  return (
    <section
      id="contact"
      className="bg-ivoire border-t border-navy-950/10 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-tracked text-xs tracking-tracked-wide uppercase text-or-700 mb-6">
          {c.eyebrow}
        </p>
        <h2 className="font-title text-4xl md:text-5xl font-semibold tracking-title leading-tight">
          {c.title}
        </h2>
        <p className="font-body text-lg text-ardoise-500 mt-6 max-w-2xl mx-auto leading-relaxed">
          {c.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-navy-950 text-ivoire font-tracked text-sm font-medium tracking-tracked uppercase hover:bg-or-700 transition-colors"
          >
            {c.whatsapp}
          </a>
          <a
            href="mailto:contact@niqo-services.com"
            className="inline-flex items-center justify-center px-8 py-4 border border-navy-950/30 text-navy-950 font-tracked text-sm font-medium tracking-tracked uppercase hover:border-or-700 hover:text-or-700 transition-colors"
          >
            contact@niqo-services.com
          </a>
        </div>
      </div>
    </section>
  );
}
