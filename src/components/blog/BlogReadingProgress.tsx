"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function BlogReadingProgress() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-unti-blue via-sky-400 to-cyan-300"
      style={{ scaleX: shouldReduceMotion ? scrollYProgress : progress }}
    />
  );
}
