type Locale = "fr" | "en";

const t = {
  fr: {
    since: "En production depuis novembre 2025",
    students: "1 500+ élèves",
    seeCase: "Voir le cas client →",
  },
  en: {
    since: "In production since November 2025",
    students: "1,500+ students",
    seeCase: "View case study →",
  },
};

export function ClientStrip({ locale = "fr" }: { locale?: Locale }) {
  const c = t[locale];

  return (
    <section className="bg-navy-950 border-t border-ivoire/10 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-tracked text-xs tracking-tracked uppercase text-ivoire/50">
            {c.since}
          </p>
          <p className="font-body text-base text-ivoire/90">
            <span className="text-ivoire/60">Groupe scolaire </span>
            <span className="font-medium text-ivoire">Dom Helder Camara</span>
            <span className="text-ivoire/60"> — Brazzaville </span>
            <span className="text-ivoire/50">· {c.students}</span>
          </p>
          <a
            href="#references"
            className="font-tracked text-xs tracking-tracked uppercase text-or-400 hover:text-ivoire transition-colors"
          >
            {c.seeCase}
          </a>
        </div>
      </div>
    </section>
  );
}
