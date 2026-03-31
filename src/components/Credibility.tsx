"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Credibility() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 md:py-36" ref={ref}>
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">
        {/* Credibility card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-2xl bg-surface card-glow border border-border relative overflow-hidden"
        >
          {/* Left accent stripe */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-highlight to-accent rounded-l-2xl" />

          <div className="pl-6">
            <div className="text-xs font-semibold text-accent uppercase tracking-[0.15em] mb-6">
              Tilvísun
            </div>

            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6 font-medium">
              Forstjórinn þekkir mig.
            </p>

            <p className="text-text-secondary text-base leading-relaxed max-w-2xl">
              Hann veit hvernig ég vinn undir þrýstingi. Hann veit hvernig ég bregst við 
              þegar hlutir fara úrskeiðis. Og hann veit að þegar ég tek verkefni á mig 
              — þá klárast það.
            </p>

            <p className="text-text-muted text-sm mt-6 italic">
              Ég læt þetta tala fyrir sig.
            </p>
          </div>
        </motion.div>

        {/* Humor moment */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-text-muted text-sm italic max-w-lg mx-auto leading-relaxed">
            &ldquo;Ég hef líka stýrt fullum gestum klukkan 3 að nóttu.
            <br />
            Serverarnir ættu að vera auðveldari.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
