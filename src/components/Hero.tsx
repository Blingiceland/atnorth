"use client";

import { motion } from "framer-motion";
import { useLang, t } from "@/lib/i18n";

export default function Hero() {
  const { lang } = useLang();
  const c = t.hero[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(31,95,175,0.06)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-soft border border-border-accent mb-8"
        >
          <span className="text-xs font-medium text-accent">{c.tag}</span>
          <span className="text-xs text-text-muted">{c.tagSub}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6"
        >
          {c.line1}
          <br />
          {c.line2}
          <br />
          <span className="text-gradient">{c.line3}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {c.sub}{" "}
          <span className="text-foreground font-medium">{c.subBold}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#af-hverju"
            className="px-8 py-4 bg-accent text-white font-semibold text-sm rounded-lg
                       hover:bg-accent-light transition-all duration-300
                       shadow-[0_2px_12px_rgba(31,95,175,0.3)] hover:shadow-[0_4px_20px_rgba(31,95,175,0.4)]"
          >
            {c.cta1}
          </a>
          <a
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-border text-text-secondary font-medium text-sm rounded-lg
                       hover:border-accent/30 hover:text-foreground transition-all duration-300"
          >
            {c.cta2}
          </a>
        </motion.div>

        {/* Live URL — visible in print */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="mt-6 text-xs text-text-muted"
        >
          <a
            href="https://atnorth.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            🔗 {c.liveUrl}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-text-muted/20 rounded-full flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-1.5 bg-accent/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
