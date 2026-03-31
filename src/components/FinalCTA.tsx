"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang, t } from "@/lib/i18n";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLang();
  const c = t.cta[lang];

  return (
    <section className="relative py-32 md:py-48 dot-pattern" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(31,95,175,0.05)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            {c.h1}
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            {c.h2}{" "}
            <span className="text-gradient">{c.h2bold}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="mailto:jonb.steinsson@gmail.com?subject=atNorth%20ICE02%20—%20Let%27s%20talk"
            className="px-10 py-5 bg-accent text-white font-semibold text-sm rounded-lg
                       hover:bg-accent-light transition-all duration-300
                       shadow-[0_2px_16px_rgba(31,95,175,0.3)] hover:shadow-[0_4px_24px_rgba(31,95,175,0.4)]"
          >
            {c.btn1}
          </a>
          <a
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 border border-border text-text-secondary font-medium text-sm rounded-lg
                       hover:border-accent/30 hover:text-foreground transition-all duration-300"
          >
            {c.btn2}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-1 text-sm text-text-muted"
        >
          <div className="font-medium text-foreground">Jón Bjarni Steinsson</div>
          <div>
            <a href="mailto:jonb.steinsson@gmail.com" className="hover:text-accent transition-colors">
              jonb.steinsson@gmail.com
            </a>
          </div>
          <div>821 1111</div>
        </motion.div>
      </div>
    </section>
  );
}
