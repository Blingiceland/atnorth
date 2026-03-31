"use client";

import { useLang, t } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLang();
  const c = t.footer[lang];

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs text-text-muted">
          {c.built}
        </div>
        <div className="flex items-center gap-6 text-xs text-text-muted">
          <a
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            {c.cv}
          </a>
          <a
            href="mailto:jonb.steinsson@gmail.com"
            className="hover:text-accent transition-colors duration-300"
          >
            {c.email}
          </a>
          <span>© 2025 JBS</span>
        </div>
      </div>
    </footer>
  );
}
