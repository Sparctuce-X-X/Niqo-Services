import Image from "next/image";

const WHATSAPP_NUMBER = "242000000000";
const WHATSAPP_MESSAGE =
  "Bonjour, j'aimerais cadrer un projet avec Niqo Services.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export function Hero() {
  return (
    <section className="relative bg-navy-950 text-ivoire overflow-hidden">
      {/* Emblème en watermark — ancre visuelle discrète */}
      <div
        className="absolute -right-40 -bottom-40 opacity-[0.05] pointer-events-none select-none"
        aria-hidden
      >
        <Image
          src="/brand/logos/png/niqo-services-emblem.png"
          alt=""
          width={720}
          height={720}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-36 md:pb-36">
        <p className="font-tracked text-xs tracking-tracked-wide uppercase text-or-400 mb-10">
          Cabinet de services numériques · République du Congo
        </p>

        <h1 className="font-title text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-title leading-[1.02] max-w-5xl">
          Des plateformes sur-mesure pour les institutions qui exigent rigueur
          et continuité.
        </h1>

        <p className="font-body text-lg md:text-xl text-ivoire/75 mt-10 max-w-2xl leading-relaxed">
          Conception, ingénierie et accompagnement de projets numériques pour
          les écoles privées, ONG, banques et administrations. Présence
          opérationnelle sur tout le territoire de la République du Congo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-ivoire text-navy-950 font-tracked text-sm font-medium tracking-tracked uppercase hover:bg-or-400 transition-colors"
          >
            Cadrer un projet
          </a>
          <a
            href="#references"
            className="inline-flex items-center justify-center px-8 py-4 border border-ivoire/30 text-ivoire font-tracked text-sm font-medium tracking-tracked uppercase hover:border-or-400 hover:text-or-400 transition-colors"
          >
            Voir nos références
          </a>
        </div>
      </div>
    </section>
  );
}
