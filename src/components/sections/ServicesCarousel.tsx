"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const services = [
  {
    title: "Arquitetura escalável",
    description: "Plataformas robustas, com Cloud, microserviços e performance em cada release.",
  },
  {
    title: "Integrações inteligentes",
    description: "CRM + ERP + e-commerce + APIs customizadas com automação de dados em tempo real.",
  },
  {
    title: "Segurança empresarial",
    description: "DevSecOps, testes de penetração e compliance contínuo, sem comprometer velocidade.",
  },
  {
    title: "Suporte White Label",
    description: "Backlog técnico dedicado para agências, com SLA e entrega de atualizações semanalmente.",
  },
];

export function ServicesCarousel() {
  return (
    <section className="py-20 bg-zinc-50">
      <Container>
        <div className="max-w-3xl text-center mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">Vitrine de Serviços</p>
          <h2 className="mt-3 text-3xl font-extrabold text-zinc-900">O que sua empresa ganha ao migrar para o plano UNTI</h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.35 }}
            >
              <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
