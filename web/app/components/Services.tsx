const services = [
  {
    number: "01",
    title: "Web & mobile sur-mesure",
    tagline:
      "Conception et livraison d'applications métiers, portails et plateformes.",
    body: "Sites institutionnels, portails clients, applications mobiles et refonte de systèmes d'information — chaque livrable est conçu pour le contexte, hébergé et maintenu pour durer.",
    deliverables: [
      "Sites institutionnels Next.js",
      "Portails métiers (écoles, ONG, cabinets)",
      "Applications mobiles iOS et Android",
      "Refonte de systèmes d'information",
    ],
  },
  {
    number: "02",
    title: "Solutions IA appliquées",
    tagline:
      "De l'audit à la mise en production d'assistants IA opérationnels.",
    body: "Atelier de cadrage, preuve de concept, déploiement et amélioration continue : nous calibrons l'intelligence artificielle aux usages réels de l'organisation.",
    deliverables: [
      "Audit data et roadmap IA",
      "Proof of concept (4-6 semaines)",
      "Assistants IA en production",
      "Amélioration continue",
    ],
  },
  {
    number: "03",
    title: "Conseil, Cloud & Formation",
    tagline:
      "Diagnostic, architecture, migration et montée en compétences des équipes.",
    body: "Audits flash, accompagnements d'architecture, migrations cloud AWS / GCP et cycles de formation intra-entreprise pour ancrer le numérique dans la durée.",
    deliverables: [
      "Audits et diagnostics",
      "Architecture et migrations cloud",
      "Monitoring et supervision",
      "Formations intra-entreprise",
    ],
  },
];

export function Services() {
  return (
    <section id="expertises" className="bg-ivoire py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-tracked text-xs tracking-tracked-wide uppercase text-or-700 mb-6">
          Nos expertises
        </p>
        <h2 className="font-title text-4xl md:text-5xl font-semibold tracking-title leading-tight max-w-3xl">
          Trois expertises. Une exigence d'institution.
        </h2>

        <div className="mt-16 grid gap-12 md:gap-16 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.number} className="border-t border-navy-950/15 pt-8">
              <p className="font-mono text-sm text-or-700">{s.number}</p>
              <h3 className="font-title text-2xl md:text-3xl font-semibold tracking-title mt-4">
                {s.title}
              </h3>
              <p className="font-body text-lg text-navy-950 mt-3 leading-snug">
                {s.tagline}
              </p>
              <p className="font-body text-base text-ardoise-500 mt-4 leading-relaxed">
                {s.body}
              </p>
              <ul className="mt-6 space-y-2">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="font-body text-sm text-ardoise-950 flex gap-2"
                  >
                    <span className="text-or-700 mt-1">·</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
