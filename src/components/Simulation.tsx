"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang, t } from "@/lib/i18n";

export default function WhyMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const c = t.whyMe[lang];

  return (
    <section id="af-hverju" className="relative py-28 md:py-36" ref={ref}>
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
          <span className="text-text-secondary">{c.h2}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl space-y-5 text-text-secondary text-lg leading-relaxed mb-16"
        >
          <p>{c.p1}</p>
          <p className="text-foreground font-medium">{c.p2}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {c.cards.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="p-6 rounded-xl bg-surface card-glow border border-border"
            >
              <h3 className="font-bold text-base mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {item.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
