"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang, t } from "@/lib/i18n";

export default function CurrentScale() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const c = t.eclipse[lang];

  return (
    <section className="relative py-28 md:py-36" ref={ref}>
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold text-accent uppercase tracking-[0.15em] mb-4"
        >
          {c.label}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight"
        >
          {c.h1}
          <br />
          <span className="text-gradient">{c.h2}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 md:p-10 rounded-2xl bg-surface card-glow border border-border mb-10"
        >
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl">🌑</span>
            <div>
              <a
                href="https://www.eclipse.is"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl font-bold text-foreground hover:text-accent transition-colors"
              >
                {c.linkText}
              </a>
              <p className="text-sm text-text-muted mt-0.5">
                {c.linkSub}
              </p>
            </div>
          </div>

          <div className="space-y-4 text-text-secondary text-base leading-relaxed">
            <p>{c.p1}</p>
            <p>{c.p2}</p>
            <p className="text-foreground font-medium">{c.p3}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {c.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              className="p-5 rounded-xl bg-surface card-glow border border-border text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-accent font-mono mb-1">
                {m.value}
              </div>
              <div className="text-xs text-text-muted">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
