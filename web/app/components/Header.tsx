import Image from "next/image";

const WHATSAPP_NUMBER = "242000000000";
const WHATSAPP_MESSAGE =
  "Bonjour, j'aimerais cadrer un projet avec Niqo Services.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy-950 border-b border-ivoire/10">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center group" aria-label="Niqo Services">
          <Image
            src="/brand/logos/png/niqo-services-horizontal-dark@1x.png"
            alt="Niqo Services"
            width={140}
            height={49}
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-10 font-tracked text-xs tracking-tracked uppercase text-ivoire/75">
          <a href="#expertises" className="hover:text-or-400 transition-colors">
            Expertises
          </a>
          <a href="#references" className="hover:text-or-400 transition-colors">
            Références
          </a>
          <a href="#methode" className="hover:text-or-400 transition-colors">
            Méthode
          </a>
          <a
            href="#fondateurs"
            className="hover:text-or-400 transition-colors"
          >
            Fondateurs
          </a>
          <a href="#contact" className="hover:text-or-400 transition-colors">
            Contact
          </a>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-2.5 bg-ivoire text-navy-950 font-tracked text-xs font-medium tracking-tracked uppercase hover:bg-or-400 transition-colors"
        >
          Cadrer un projet
        </a>
      </div>
    </header>
  );
}
