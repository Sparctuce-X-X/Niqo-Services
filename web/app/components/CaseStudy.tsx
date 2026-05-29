import Image from "next/image";

type Locale = "fr" | "en";

const t = {
  fr: {
    eyebrow: "Cas client",
    title: "Bulletins trimestriels : 3 semaines de production réduites à 3 jours.",
    client: "Groupe scolaire Dom Helder Camara · Brazzaville",
    students: "1 500+ élèves",
    body: "Plateforme sur-mesure conçue et livrée qui digitalise l'intégralité du processus de bulletins saisie des notes par les enseignants, calculs automatiques selon les coefficients de l'établissement, génération PDF aux couleurs de l'école, distribution aux familles, archive permanente.",
    stats: {
      beforeLabel: "Avant",
      beforeValue: "3 semaines",
      afterLabel: "Après",
      afterValue: "3 jours",
      gainLabel: "Gain",
      gainValue: "×7",
      sinceLabel: "En production",
      sinceValue: "Nov. 2025",
    },
    caption:
      "Alain Steven Makosso-Della, co-fondateur, avec la direction de l'établissement.",
  },
  en: {
    eyebrow: "Case study",
    title: "Term report cards: production time cut from 3 weeks to 3 days.",
    client: "Dom Helder Camara school group · Brazzaville",
    students: "1,500+ students",
    body: "Bespoke platform designed and delivered to digitize the entire report card process — teacher grade entry, automatic calculations using the school's coefficients, PDF generation in the school's branding, secure family distribution, permanent archive.",
    stats: {
      beforeLabel: "Before",
      beforeValue: "3 weeks",
      afterLabel: "After",
      afterValue: "3 days",
      gainLabel: "Gain",
      gainValue: "×7",
      sinceLabel: "In production",
      sinceValue: "Nov. 2025",
    },
    caption:
      "Alain Steven Makosso-Della, co-founder, with the school's leadership team.",
  },
};

export function CaseStudy({ locale = "fr" }: { locale?: Locale }) {
  const c = t[locale];

  return (
    <section
      id="references"
      className="bg-navy-950 text-ivoire py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-tracked text-xs tracking-tracked-wide uppercase text-or-400 mb-6">
          {c.eyebrow}
        </p>
        <h2 className="font-title text-4xl md:text-5xl font-semibold tracking-title leading-tight max-w-3xl">
          {c.title}
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2 items-start">
          <div>
            <p className="font-mono text-sm text-or-400">{c.client}</p>
            <p className="font-tracked text-xs tracking-tracked uppercase text-ivoire/70 mt-2">
              {c.students}
            </p>

            <p className="font-body text-lg text-ivoire mt-8 leading-relaxed">
              {c.body}
            </p>

            <div className="niqo-hairline-light mt-10 mb-8 w-24" />

            <dl className="grid grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <dt className="font-tracked text-xs tracking-tracked uppercase text-ivoire/60">
                  {c.stats.beforeLabel}
                </dt>
                <dd className="font-title text-3xl font-semibold tracking-title mt-2">
                  {c.stats.beforeValue}
                </dd>
              </div>
              <div>
                <dt className="font-tracked text-xs tracking-tracked uppercase text-ivoire/60">
                  {c.stats.afterLabel}
                </dt>
                <dd className="font-title text-3xl font-semibold tracking-title text-or-400 mt-2">
                  {c.stats.afterValue}
                </dd>
              </div>
              <div>
                <dt className="font-tracked text-xs tracking-tracked uppercase text-ivoire/60">
                  {c.stats.gainLabel}
                </dt>
                <dd className="font-title text-3xl font-semibold tracking-title mt-2">
                  {c.stats.gainValue}
                </dd>
              </div>
              <div>
                <dt className="font-tracked text-xs tracking-tracked uppercase text-ivoire/60">
                  {c.stats.sinceLabel}
                </dt>
                <dd className="font-title text-3xl font-semibold tracking-title mt-2">
                  {c.stats.sinceValue}
                </dd>
              </div>
            </dl>
          </div>

          <figure className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/case-studies/dhc/alain-direction-dhc.jpeg"
              alt={c.caption}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover niqo-photo-treatment"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/90 to-transparent p-6">
              <p className="font-body text-sm text-ivoire/90">{c.caption}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
