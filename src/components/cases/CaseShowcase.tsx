"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface CaseShowcaseProps {
  alt: string;
  imagemPrint: string;
}

export function CaseShowcase({ alt, imagemPrint }: CaseShowcaseProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 20%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.45, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 1.02]);
  const y = useTransform(scrollYProgress, [0, 1], [72, -36]);

  return (
    <section ref={ref} className="mx-auto max-w-5xl">
      <motion.div
        style={shouldReduceMotion ? undefined : { opacity, scale }}
        className="overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.16)]"
      >
        <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50 px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>

        <motion.div style={shouldReduceMotion ? undefined : { y }}>
          <Image
            src={imagemPrint}
            alt={alt}
            width={1600}
            height={2200}
            className="h-auto w-full"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
