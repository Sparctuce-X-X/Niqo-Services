const WHATSAPP_NUMBER = "242000000000";
const WHATSAPP_MESSAGE =
  "Bonjour, j'aimerais cadrer un projet avec Niqo Services.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export function Cta() {
  return (
    <section
      id="contact"
      className="bg-ivoire border-t border-navy-950/10 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-tracked text-xs tracking-tracked-wide uppercase text-or-700 mb-6">
          Cadrer un projet
        </p>
        <h2 className="font-title text-4xl md:text-5xl font-semibold tracking-title leading-tight">
          Une plateforme à concevoir, un audit à mener, une équipe à former ?
        </h2>
        <p className="font-body text-lg text-ardoise-500 mt-6 max-w-2xl mx-auto leading-relaxed">
          Échange initial sous 48 h, sans engagement. Nous proposons un cadrage
          et un devis chiffré dans la foulée.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-navy-950 text-ivoire font-tracked text-sm font-medium tracking-tracked uppercase hover:bg-or-700 transition-colors"
          >
            Écrire sur WhatsApp
          </a>
          <a
            href="mailto:contact@niqoservices.com"
            className="inline-flex items-center justify-center px-8 py-4 border border-navy-950/30 text-navy-950 font-tracked text-sm font-medium tracking-tracked uppercase hover:border-or-700 hover:text-or-700 transition-colors"
          >
            contact@niqoservices.com
          </a>
        </div>
      </div>
    </section>
  );
}
