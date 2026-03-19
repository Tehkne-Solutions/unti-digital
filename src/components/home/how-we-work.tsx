"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

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

const steps = [
  {
    title: "Diagnóstico",
    description: "Entendemos o contexto do negócio e os desafios técnicos do projeto."
  },
  {
    title: "Arquitetura",
    description: "Definimos arquitetura, integrações e estrutura da solução digital."
  },
  {
    title: "Desenvolvimento",
    description: "Implementação com boas práticas de engenharia e foco em performance."
  },
  {
    title: "Evolução contínua",
    description: "Acompanhamento e evolução da plataforma conforme o crescimento do negócio."
  }
];

export function HowWeWork() {
  return (
    <Section className="bg-unti-blue py-24 text-white">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Como trabalhamos
          </h2>
          <p className="mt-4 text-white">
            Um processo claro para tirar projetos do papel com segurança, previsibilidade e evolução contínua.
          </p>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="space-y-4 rounded-[28px] border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-lg font-bold text-white">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
