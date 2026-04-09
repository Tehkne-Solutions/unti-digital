"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function HowWeWork() {
  const t = useTranslations("HowWeWork");

  return (
    <Section className="bg-unti-blue py-24 text-white">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-white">
            {t("subtitle")}
          </p>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {Array.from({ length: 4 }, (_, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="space-y-4 rounded-[28px] border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-lg font-bold text-white">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-white">{t(`steps.${index}.title`)}</h3>
              <p className="text-sm leading-relaxed text-white">{t(`steps.${index}.description`)}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
