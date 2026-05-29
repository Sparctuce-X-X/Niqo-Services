import Image from "next/image";

type Founder = {
  photo: string | null;
  initials: string;
  name: string;
  role: string;
  bio: string;
};

const founders: Founder[] = [
  {
    photo: "/founders/dominique-huang.jpeg",
    initials: "DH",
    name: "Dominique Huang",
    role: "Co-fondateur · Ingénierie & IA",
    bio: "Titulaire d'un bachelor Concepteur Développeur d'Applications à Paris et certifié AWS Solutions Architect Associate. Concepteur et développeur de Niqo Education et  Niqo Marketplace . Poursuit un MSc en Intelligence Artificielle.",
  },
  {
    photo: "/founders/alain-makosso.jpeg",
    initials: "AM",
    name: "Alain Steven Makosso-Della",
    role: "Co-fondateur · Opérations & relation client",
    bio: "Diplômé de l'ESGAE Brazzaville en administration des entreprises. Huit ans d'expérience opérationnelle, entre direction d'académie de formation (Noki-Noki Services) et gestion financière (SARL LEHKI Design). Pilote la relation avec les décideurs clients et coordonne le déploiement terrain.",
  },
];

export function Founders() {
  return (
    <section
      id="fondateurs"
      className="bg-navy-950 text-ivoire border-t border-ivoire/10 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-tracked text-xs tracking-tracked-wide uppercase text-or-400 mb-6">
          Les fondateurs
        </p>
        <h2 className="font-title text-4xl md:text-5xl font-semibold tracking-title leading-tight max-w-3xl">
          Deux profils complémentaires.
        </h2>
        <p className="font-body text-lg text-ivoire/75 mt-6 max-w-2xl leading-relaxed">
          Ingénierie senior et opérations terrain. Une seule exigence — la
          rigueur d'institution.
        </p>

        <div className="mt-16 grid gap-12 md:gap-16 md:grid-cols-2">
          {founders.map((f) => (
            <article key={f.name}>
              <figure className="relative aspect-[4/5] max-w-sm mx-auto overflow-hidden bg-gradient-to-br from-navy-800/40 to-navy-950">
                {f.photo ? (
                  <Image
                    src={f.photo}
                    alt={f.name}
                    fill
                    sizes="(min-width: 768px) 384px, 100vw"
                    className="object-cover object-top niqo-photo-treatment"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-title text-8xl md:text-9xl font-semibold text-ivoire/10 tracking-title">
                      {f.initials}
                    </span>
                  </div>
                )}
              </figure>
              <h3 className="font-title text-2xl md:text-3xl font-semibold tracking-title mt-8">
                {f.name}
              </h3>
              <p className="font-tracked text-xs tracking-tracked uppercase text-or-400 mt-2">
                {f.role}
              </p>
              <div className="niqo-hairline-light mt-6 w-12" />
              <p className="font-body text-base text-ivoire/80 mt-6 leading-relaxed">
                {f.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
