"use client";

import { useLang } from "@/lib/i18n";

export default function Header() {
  const { lang, toggle } = useLang();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border print:hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground tracking-tight">
            Jón Bjarni Steinsson
          </span>
          <span className="hidden sm:inline text-xs text-text-muted">
            {lang === "en" ? "application for operations director" : "skilar inn umsókn um stöðu rekstrarstjóra"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-muted 
                       border border-border rounded-lg hover:border-accent/30 hover:text-foreground 
                       transition-all duration-300 cursor-pointer"
          >
            🌐 {lang === "en" ? "Íslenska" : "English"}
          </button>
          <button
            onClick={() => window.print()}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-muted 
                       border border-border rounded-lg hover:border-accent/30 hover:text-foreground 
                       transition-all duration-300 cursor-pointer"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            {lang === "en" ? "Save PDF" : "Vista PDF"}
          </button>
          <a
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-xs font-semibold uppercase tracking-wider
                       rounded-lg hover:bg-accent-light transition-all duration-300
                       shadow-[0_2px_10px_rgba(31,95,175,0.25)] hover:shadow-[0_4px_16px_rgba(31,95,175,0.35)]"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {lang === "en" ? "CV / RÉSUMÉ" : "FERILSKRÁ (CV)"}
          </a>
        </div>
      </div>
    </header>
  );
}
