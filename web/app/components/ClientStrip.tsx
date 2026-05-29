export function ClientStrip() {
  return (
    <section className="bg-navy-950 border-t border-ivoire/10 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-tracked text-xs tracking-tracked uppercase text-ivoire/50">
            En production depuis novembre 2025
          </p>
          <p className="font-body text-base text-ivoire/90">
            Groupe scolaire{" "}
            <span className="font-medium text-ivoire">Dom Helder Camara</span>{" "}
            — Brazzaville{" "}
            <span className="text-ivoire/50">· 1 500+ élèves</span>
          </p>
          <a
            href="#references"
            className="font-tracked text-xs tracking-tracked uppercase text-or-400 hover:text-ivoire transition-colors"
          >
            Voir le cas client →
          </a>
        </div>
      </div>
    </section>
  );
}
