import Image from "next/image";

const WHATSAPP_NUMBER = "242000000000";
const WHATSAPP_MESSAGE =
  "Bonjour, j'aimerais cadrer un projet avec Niqo Services.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export function Footer() {
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
              Cabinet de services numériques. Conception et livraison de
              plateformes sur-mesure pour les institutions premium.
            </p>
          </div>

          <div>
            <p className="font-tracked text-xs tracking-tracked uppercase text-ivoire/60 mb-6">
              Contact
            </p>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivoire hover:text-or-400 transition-colors"
                >
                  WhatsApp Business
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@niqoservices.com"
                  className="text-ivoire hover:text-or-400 transition-colors"
                >
                  contact@niqoservices.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+242068755353"
                  className="text-ivoire hover:text-or-400 transition-colors"
                >
                  +242 06 875 5353
                </a>
                <span className="text-ivoire/50 ml-2 text-xs">Brazzaville</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-tracked text-xs tracking-tracked uppercase text-ivoire/60 mb-6">
              Présence
            </p>
            <ul className="space-y-3 font-body text-sm text-ivoire">
              <li>Brazzaville <span className="text-ivoire/50">— siège</span></li>
              <li>Pointe-Noire</li>
              <li className="text-ivoire/70">Couverture nationale</li>
            </ul>
          </div>
        </div>

        <div className="niqo-hairline-light mt-16 mb-6 w-full" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-xs text-ivoire/50">
          <p>MMXXVI Niqo Services. Tous droits réservés.</p>
          <p>République du Congo</p>
        </div>
      </div>
    </footer>
  );
}
