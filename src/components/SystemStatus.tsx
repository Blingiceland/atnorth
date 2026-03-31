"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLang, t } from "@/lib/i18n";

export default function SystemStatus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [animate, setAnimate] = useState(false);
  const { lang } = useLang();
  const c = t.status[lang];

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimate(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section className="relative py-24 md:py-32 bg-surface-elevated/50" ref={ref}>
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-surface card-glow border border-border"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {c.title}
            </h3>
            <span className="text-xs text-text-muted font-mono">
              {c.subtitle}
            </span>
          </div>

          <div className="space-y-4">
            {c.items.map((item, i) => (
              <div key={item.label} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">
                    {item.label}
                  </span>
                  <span
                    className={`text-sm font-semibold font-mono ${
                      item.lowlight ? "text-warm" : "text-accent"
                    }`}
                  >
                    {animate ? item.value : 0}%
                  </span>
                </div>
                <div className="h-2 bg-surface-elevated rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${
                      item.lowlight ? "bg-warm" : "bg-accent"
                    }`}
                    initial={{ width: 0 }}
                    animate={animate ? { width: `${item.value}%` } : {}}
                    transition={{
                      duration: 1,
                      delay: i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
            className="mt-6 pt-5 border-t border-border text-sm text-text-muted leading-relaxed"
          >
            {c.note}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
