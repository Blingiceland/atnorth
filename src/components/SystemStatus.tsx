"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang, t } from "@/lib/i18n";

export default function SystemStatus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const c = t.capabilities[lang];

  return (
    <section className="relative py-24 md:py-32 bg-surface-elevated/50" ref={ref}>
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold text-accent uppercase tracking-[0.15em] mb-4"
        >
          {c.title}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-text-secondary text-lg leading-relaxed mb-10 max-w-2xl"
        >
          {c.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="p-6 rounded-xl bg-surface card-glow border border-border"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-sm text-foreground mb-2">
                {item.label}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 text-sm text-text-muted leading-relaxed max-w-3xl border-l-2 border-accent/30 pl-4"
        >
          {c.note}
        </motion.p>
      </div>
    </section>
  );
}
