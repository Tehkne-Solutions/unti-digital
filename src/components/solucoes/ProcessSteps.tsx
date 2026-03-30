"use client";

import { motion } from "framer-motion";

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="grid grid-cols-1 md:grid-cols-4 gap-6"
    >
      {steps.map((step, index) => (
        <motion.article
          key={step.title}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0 },
          }}
          className="rounded-xl bg-blue-500/20 border border-white/20 p-6"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-unti-blue font-bold mb-4">
            {index + 1}
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
          <p className="text-white/90 leading-relaxed">{step.description}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
