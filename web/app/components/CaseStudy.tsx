import Image from "next/image";

export function CaseStudy() {
  return (
    <section
      id="references"
      className="bg-navy-950 text-ivoire py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-tracked text-xs tracking-tracked-wide uppercase text-or-400 mb-6">
          Cas client
        </p>
        <h2 className="font-title text-4xl md:text-5xl font-semibold tracking-title leading-tight max-w-3xl">
          Bulletins trimestriels : 3 semaines de production réduites à 3 jours.
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2 items-start">
          <div>
            <p className="font-mono text-sm text-or-400">
              Groupe scolaire Dom Helder Camara · Brazzaville
            </p>
            <p className="font-tracked text-xs tracking-tracked uppercase text-ivoire/70 mt-2">
              1 500+ élèves
            </p>

            <p className="font-body text-lg text-ivoire mt-8 leading-relaxed">
              Plateforme sur-mesure conçue et livrée qui digitalise
              l'intégralité du processus de bulletins — saisie des notes par les
              enseignants, calculs automatiques selon les coefficients de
              l'établissement, génération PDF aux couleurs de l'école,
              distribution aux familles, archive permanente.
            </p>

            <div className="niqo-hairline-light mt-10 mb-8 w-24" />

            <dl className="grid grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <dt className="font-tracked text-xs tracking-tracked uppercase text-ivoire/60">
                  Avant
                </dt>
                <dd className="font-title text-3xl font-semibold tracking-title mt-2">
                  3 semaines
                </dd>
              </div>
              <div>
                <dt className="font-tracked text-xs tracking-tracked uppercase text-ivoire/60">
                  Après
                </dt>
                <dd className="font-title text-3xl font-semibold tracking-title text-or-400 mt-2">
                  3 jours
                </dd>
              </div>
              <div>
                <dt className="font-tracked text-xs tracking-tracked uppercase text-ivoire/60">
                  Gain
                </dt>
                <dd className="font-title text-3xl font-semibold tracking-title mt-2">
                  ×7
                </dd>
              </div>
              <div>
                <dt className="font-tracked text-xs tracking-tracked uppercase text-ivoire/60">
                  En production
                </dt>
                <dd className="font-title text-3xl font-semibold tracking-title mt-2">
                  Nov. 2025
                </dd>
              </div>
            </dl>
          </div>

          <figure className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/case-studies/dhc/alain-direction-dhc.jpeg"
              alt="Alain Steven Makosso-Della avec la direction du Groupe scolaire Dom Helder Camara"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover niqo-photo-treatment"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/90 to-transparent p-6">
              <p className="font-body text-sm text-ivoire/90">
                Alain Steven Makosso-Della, co-fondateur, avec la direction de
                l'établissement.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
