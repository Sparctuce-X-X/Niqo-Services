import Image from "next/image";

type Locale = "fr" | "en";

type Founder = {
  photo: string | null;
  initials: string;
  name: string;
  role: string;
  bio: string;
};

const t = {
  fr: {
    eyebrow: "Les fondateurs",
    title: "Deux profils complémentaires.",
    subtitle:
      "Ingénierie senior et opérations terrain. Une seule exigence — la rigueur d'institution.",
    founders: [
      {
        photo: "/founders/dominique-huang.jpeg",
        initials: "DH",
        name: "Dominique Huang",
        role: "Co-fondateur · Ingénierie & IA",
        bio: "Titulaire d'un bachelor Concepteur Développeur d'Applications et certifié AWS Solutions Architect Associate. Concepteur et développeur de Niqo Education, Niqo Marketplace et CloudCostPilot. Poursuit un MSc en Intelligence Artificielle.",
      },
      {
        photo: "/founders/alain-makosso.jpeg",
        initials: "AM",
        name: "Alain Steven Makosso-Della",
        role: "Co-fondateur · Opérations & relation client",
        bio: "Diplômé de l'ESGAE Brazzaville en administration des entreprises. Huit ans d'expérience opérationnelle, entre direction d'académie de formation (Noki-Noki Services) et gestion financière (SARL LEHKI Design). Pilote la relation avec les décideurs clients et coordonne le déploiement terrain.",
      },
    ] as Founder[],
  },
  en: {
    eyebrow: "The founders",
    title: "Two complementary profiles.",
    subtitle:
      "Senior engineering and field operations. One shared standard — institutional discipline.",
    founders: [
      {
        photo: "/founders/dominique-huang.jpeg",
        initials: "DH",
        name: "Dominique Huang",
        role: "Co-founder · Engineering & AI",
        bio: "Holds a bachelor's degree in Application Design and Development and is an AWS Solutions Architect Associate. Designer and developer of Niqo Education, Niqo Marketplace and CloudCostPilot. Currently pursuing an MSc in Artificial Intelligence.",
      },
      {
        photo: "/founders/alain-makosso.jpeg",
        initials: "AM",
        name: "Alain Steven Makosso-Della",
        role: "Co-founder · Operations & client relations",
        bio: "Graduate of ESGAE Brazzaville in business administration. Eight years of operational experience, between leading a training academy (Noki-Noki Services) and financial management (SARL LEHKI Design). Leads relationships with client decision-makers and coordinates field deployment.",
      },
    ] as Founder[],
  },
};

export function Founders({ locale = "fr" }: { locale?: Locale }) {
  const c = t[locale];

  return (
    <section
      id="fondateurs"
      className="bg-navy-950 text-ivoire border-t border-ivoire/10 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-tracked text-xs tracking-tracked-wide uppercase text-or-400 mb-6">
          {c.eyebrow}
        </p>
        <h2 className="font-title text-4xl md:text-5xl font-semibold tracking-title leading-tight max-w-3xl">
          {c.title}
        </h2>
        <p className="font-body text-lg text-ivoire/75 mt-6 max-w-2xl leading-relaxed">
          {c.subtitle}
        </p>

        <div className="mt-16 grid gap-12 md:gap-16 md:grid-cols-2">
          {c.founders.map((f) => (
            <article key={f.name}>
              <figure className="relative aspect-[4/5] max-w-sm mx-auto overflow-hidden bg-navy-900 ring-1 ring-or-400/40 ring-offset-4 ring-offset-navy-950">
                {f.photo ? (
                  <Image
                    src={f.photo}
                    alt={f.name}
                    fill
                    sizes="(min-width: 768px) 384px, 100vw"
                    className="object-cover object-top niqo-founder-treatment"
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
