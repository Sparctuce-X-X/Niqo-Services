type Product = {
  category: string;
  name: string;
  tagline: string;
  description: string;
  stats: { label: string; value: string }[];
  url: string;
  urlLabel: string;
};

const products: Product[] = [
  {
    category: "Application mobile",
    name: "Niqo Marketplace",
    tagline: "Achète. Vends. En confiance.",
    description:
      "Marketplace mobile de confiance à Brazzaville  vérification CNI ,  notation post-rendez-vous, chat tracé, paiement direct entre utilisateurs. Zéro commission, modération sous 24 h. Une alternative sécurisée à WhatsApp et Facebook Marketplace.",
    stats: [
      { label: "Plateforme", value: "iOS et Android" },
      { label: "Utilisateurs", value: "500+" },
      { label: "Couverture", value: "Congo brazzaville" },
    ],
    url: "https://niqo.africa",
    urlLabel: "niqo.africa",
  },
  {
    category: "SaaS scolaire",
    name: "Niqo Education",
    tagline: "Gérez votre école simplement.",
    description:
      "Plateforme de gestion scolaire pour établissements privés africains — paiements Mobile Money (MTN, Airtel), appel de présence hors ligne, suivi des notes, génération de bulletins PDF, portail parents via WhatsApp. Lancement officiel prévu en 2026.",
    stats: [
      { label: "Plateforme", value: "Web et mobile" },
      { label: "Pilotes", value: "1 école" },
      { label: "Couverture", value: "Congo brazzaville" },
    ],
    url: "https://www.niqo.education",
    urlLabel: "niqo.education",
  },
];

export function Products() {
  return (
    <section
      id="produits"
      className="bg-ivoire border-t border-navy-950/10 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-tracked text-xs tracking-tracked-wide uppercase text-or-700 mb-6">
          Nos produits
        </p>
        <h2 className="font-title text-3xl sm:text-4xl md:text-5xl font-semibold tracking-title leading-tight max-w-3xl">
          Nous bâtissons aussi nos propres produits.
        </h2>
        <p className="font-body text-base sm:text-lg text-ardoise-500 mt-6 max-w-2xl leading-relaxed">
          Les plateformes que nous concevons pour nos clients reposent sur la
          même rigueur d&apos;ingénierie que les produits que nous lançons sous
          notre propre marque.
        </p>

        <div className="mt-16 space-y-8">
          {products.map((p) => (
            <article
              key={p.name}
              className="max-w-4xl bg-blanc border border-navy-950/10 p-8 md:p-12"
            >
              <p className="font-mono text-sm text-or-700">{p.category}</p>
              <h3 className="font-title text-3xl md:text-4xl font-semibold tracking-title mt-3">
                {p.name}
              </h3>
              <p className="font-tracked text-xs tracking-tracked-wide uppercase text-ardoise-500 mt-3">
                {p.tagline}
              </p>

              <div className="niqo-hairline mt-6 w-12" />

              <p className="font-body text-base sm:text-lg text-navy-950 mt-6 leading-relaxed">
                {p.description}
              </p>

              <dl className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6 max-w-md">
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-tracked text-xs tracking-tracked uppercase text-ardoise-500">
                      {s.label}
                    </dt>
                    <dd className="font-title text-lg font-semibold tracking-title mt-2 text-navy-950">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-10 px-6 py-3 border border-navy-950/30 text-navy-950 font-tracked text-sm font-medium tracking-tracked uppercase hover:border-or-700 hover:text-or-700 transition-colors"
              >
                {p.urlLabel}
                <span aria-hidden>↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
