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

export function HowWeWork() {
    return (
        <Section className="bg-blue-600 py-24">
            <Container>
                <h2 className="text-3xl font-bold text-white text-center mb-16">
                    Como trabalhamos
                </h2>

                <motion.div
                    className="grid md:grid-cols-4 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {[
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
                    ].map((step, index) => (
                        <motion.div key={step.title} variants={itemVariants} className="text-center space-y-4">
                            <div className="w-14 h-14 rounded-xl bg-blue-700 flex items-center justify-center mx-auto text-blue-100 font-bold text-lg">
                                {index + 1}
                            </div>
                            <h3 className="font-semibold text-white">{step.title}</h3>
                            <p className="text-blue-100 text-sm">{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}
