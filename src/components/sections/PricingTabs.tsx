"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

// Dados fiéis ao código fonte enviado (#precos)
const pricingContent = {
  empresas: [
    {
      name: "Site Institucional",
      description: "Ideal para empresas que buscam autoridade.",
      features: ["Até 6 Páginas", "Design Responsivo", "Otimização SEO", "Blog", "Certificado SSL", "Treinamento CMS"],
    },
    {
      name: "Loja Virtual",
      description: "Para quem deseja vender produtos online.",
      features: ["Gestão de Estoque", "Pagamentos Online", "Cálculo de Frete", "Relatórios de Vendas", "Banner Rotativo", "Checkout Otimizado"],
    },
    {
      name: "Portais / Custom",
      description: "Soluções robustas sob medida.",
      features: ["Arquitetura Avançada", "Sistemas de Login", "Integração via API", "Nível Enterprise", "Multiusuários", "Foco em Performance"],
    },
  ],
  agencias: [
    {
      name: "Parceiro White Label",
      description: "Desenvolvemos para sua agência assinar.",
      features: ["Garantia de Prazo", "Código Limpo", "Sem Backlinks UNTI", "Suporte Nível 2", "Descontos por Volume", "Documentação Técnica"],
    },
    {
      name: "Terceirização de TI",
      description: "Sua demanda de desenvolvimento conosco.",
      features: ["Squad Dedicada", "Gestão via Slack/Jira", "Foco em Core Business", "Manutenção Mensal", "Update de Plugins", "Segurança Ativa"],
    },
    {
      name: "Projetos Sob Demanda",
      description: "Soluções pontuais de alta escala.",
      features: ["Refatoração de Código", "Migração de Servidor", "Otimização de LCP/FCP", "Consultoria de UX", "API Customizada", "Relatórios Mensais"],
    },
  ],
};

interface PricingTabsProps {
  activeTab: "empresas" | "agencias";
  setActiveTab: (tab: "empresas" | "agencias") => void;
}

export const PricingTabs = ({ activeTab, setActiveTab }: PricingTabsProps) => {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Seletor de Abas Estilo UNTI Premium */}
        <div className="flex justify-center mb-16">
          <div className="bg-zinc-100 p-1 rounded-2xl flex gap-1">
            <button
              onClick={() => setActiveTab("empresas")}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === "empresas" ? "bg-white text-blue-600 shadow-md" : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              PARA EMPRESAS
            </button>
            <button
              onClick={() => setActiveTab("agencias")}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === "agencias" ? "bg-white text-blue-600 shadow-md" : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              PARA AGÊNCIAS
            </button>
          </div>
        </div>

        {/* Grid de Cards Animado */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricingContent[activeTab].map((plan, idx) => (
              <div 
                key={plan.name}
                className={`p-8 rounded-[32px] border flex flex-col transition-all duration-500 ${
                  idx === 1 ? "bg-zinc-900 border-zinc-800 shadow-2xl scale-105 z-10" : "bg-white border-zinc-100 shadow-xl shadow-zinc-200/50"
                }`}
              >
                <h3 className={`text-2xl font-bold mb-4 ${idx === 1 ? "text-white" : "text-zinc-900"}`}>{plan.name}</h3>
                <p className={`text-sm mb-8 leading-relaxed ${idx === 1 ? "text-zinc-400" : "text-zinc-500"}`}>{plan.description}</p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${idx === 1 ? "text-blue-400" : "text-blue-600"}`} />
                      <span className={`text-sm ${idx === 1 ? "text-zinc-300" : "text-zinc-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full h-14 rounded-2xl font-bold flex items-center justify-center gap-2 ${
                  idx === 1 ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                }`}>
                  Solicitar Proposta <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};