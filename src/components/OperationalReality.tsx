"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang, t } from "@/lib/i18n";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const c = t.education[lang];

  return (
    <section className="relative py-28 md:py-36 bg-surface-elevated/50" ref={ref}>
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
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight"
        >
          {c.h1}
          <br />
          <span className="text-text-secondary">{c.h2}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-text-secondary text-lg leading-relaxed mb-14"
        >
          {c.sub}
        </motion.p>

        <div className="space-y-4 mb-12">
          {c.degrees.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="p-6 rounded-xl bg-surface card-glow border border-border"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <h3 className="font-bold text-base text-foreground">
                  {edu.degree}
                </h3>
                <span className="text-xs font-mono text-text-muted whitespace-nowrap">
                  {edu.year}
                </span>
              </div>
              <p className="text-sm text-text-muted mb-1">{edu.school}</p>
              {edu.note && (
                <p className="text-xs text-accent mt-1">{edu.note}</p>
              )}
              {edu.thesis && (
                <div className="mt-3 p-3 rounded-lg bg-accent-soft border border-border-accent">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {lang === "en" ? "Thesis: " : "Lokaverkefni: "}
                  </span>
                  <span className="text-sm text-text-secondary italic">
                    &ldquo;{edu.thesis}&rdquo;
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="p-6 rounded-xl bg-surface border border-border"
        >
          <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
            {c.extraLabel}
          </h4>
          <ul className="space-y-2">
            {c.extra.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-text-muted">
                <span className="text-accent mt-1 text-xs">●</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
