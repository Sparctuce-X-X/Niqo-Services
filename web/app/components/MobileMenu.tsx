"use client";

import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "242068755353";

type Locale = "fr" | "en";

const t = {
  fr: {
    links: [
      { href: "#expertises", label: "Expertises" },
      { href: "#references", label: "Références" },
      { href: "#methode", label: "Méthode" },
      { href: "#fondateurs", label: "Fondateurs" },
    ],
    cta: "Cadrer un projet",
    whatsappMessage:
      "Bonjour, j'aimerais cadrer un projet avec Niqo Services.",
    open: "Ouvrir le menu",
    close: "Fermer le menu",
  },
  en: {
    links: [
      { href: "#expertises", label: "Expertise" },
      { href: "#references", label: "Case studies" },
      { href: "#methode", label: "Method" },
      { href: "#fondateurs", label: "Founders" },
    ],
    cta: "Start a conversation",
    whatsappMessage:
      "Hello, I'd like to start a conversation with Niqo Services.",
    open: "Open menu",
    close: "Close menu",
  },
};

export function MobileMenu({ locale = "fr" }: { locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const c = t[locale];
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    c.whatsappMessage
  )}`;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text-ivoire p-2 -mr-2"
        aria-label={open ? c.close : c.open}
        aria-expanded={open}
      >
        {open ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 bg-navy-950 overflow-y-auto">
          <nav className="flex flex-col px-6 pt-6 pb-10">
            {c.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-title text-2xl font-semibold tracking-title text-ivoire py-5 border-b border-ivoire/10 hover:text-or-400 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center gap-3 pt-6 pb-2 font-tracked text-xs tracking-tracked uppercase text-ivoire/60">
              <a
                href="/"
                className={
                  locale === "fr" ? "text-or-400" : "hover:text-ivoire"
                }
              >
                Français
              </a>
              <span className="text-ivoire/30">·</span>
              <a
                href="/en"
                className={
                  locale === "en" ? "text-or-400" : "hover:text-ivoire"
                }
              >
                English
              </a>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center px-8 py-4 bg-ivoire text-navy-950 font-tracked text-sm font-medium tracking-tracked uppercase hover:bg-or-400 transition-colors"
            >
              {c.cta}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
