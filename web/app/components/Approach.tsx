type Locale = "fr" | "en";

const t = {
  fr: {
    eyebrow: "Comment on travaille",
    title: "Trois phases. Un engagement contractuel à chaque étape.",
    phases: [
      {
        number: "01",
        title: "Cadrer",
        body: "Atelier de cadrage avec la direction et les équipes opérationnelles. Diagnostic, périmètre, roadmap et devis chiffré.",
      },
      {
        number: "02",
        title: "Construire",
        body: "Conception, développement et intégration sur jalons. Acompte 40 % à la commande, 30 % au jalon, 30 % à la livraison.",
      },
      {
        number: "03",
        title: "Faire vivre",
        body: "Hébergement managé, monitoring, support et évolutions selon engagement TMA. SLA contractuels.",
      },
    ],
  },
  en: {
    eyebrow: "How we work",
    title: "Three phases. A contractual commitment at every step.",
    phases: [
      {
        number: "01",
        title: "Frame",
        body: "Framing workshop with leadership and operational teams. Diagnostic, scope, roadmap and priced proposal.",
      },
      {
        number: "02",
        title: "Build",
        body: "Design, development and integration along milestones. 40% deposit on order, 30% at milestone, 30% on delivery.",
      },
      {
        number: "03",
        title: "Run",
        body: "Managed hosting, monitoring, support and ongoing evolutions under maintenance agreement. Contractual SLAs.",
      },
    ],
  },
};

export function Approach({ locale = "fr" }: { locale?: Locale }) {
  const c = t[locale];

  return (
    <section id="methode" className="bg-ivoire py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-tracked text-xs tracking-tracked-wide uppercase text-or-700 mb-6">
          {c.eyebrow}
        </p>
        <h2 className="font-title text-4xl md:text-5xl font-semibold tracking-title leading-tight max-w-3xl">
          {c.title}
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {c.phases.map((p) => (
            <article key={p.number}>
              <p className="font-mono text-sm text-or-700">{p.number}</p>
              <h3 className="font-title text-3xl font-semibold tracking-title mt-4">
                {p.title}
              </h3>
              <div className="niqo-hairline mt-4 w-12" />
              <p className="font-body text-base text-ardoise-950 mt-6 leading-relaxed">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
