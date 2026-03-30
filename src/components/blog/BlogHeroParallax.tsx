"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface BlogHeroParallaxProps {
  image: string;
  title: string;
}

export function BlogHeroParallax({ image, title }: BlogHeroParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 56]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14]);

  return (
    <div ref={ref} className="relative aspect-[16/9] overflow-hidden rounded-[32px] border border-zinc-100 bg-zinc-100">
      <motion.div
        style={shouldReduceMotion ? undefined : { y, scale }}
        className="absolute inset-0"
      >
        <Image src={image} alt={title} fill priority className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/25 via-zinc-950/5 to-white/10" />
    </div>
  );
}
