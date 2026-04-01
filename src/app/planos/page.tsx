"use client";

import { Check, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { LogoCarousel } from "@/components/ui/LogoCarousel";
import { Testimonials } from "@/components/ui/Testimonials";

const plans = [
  {
    name: "Sites Institucionais",
    description: "Sua empresa com um posicionamento profissional e de alta performance.",
    features: [
      "Layout Exclusivo e Personalizado",
      "Otimização para SEO Integrada",
      "Certificado de Segurança SSL",
      "Site 100% Responsivo (Mobile)",
      "Blog de Notícias Integrado",
      "Suporte e Treinamento CMS",
    ],
    highlight: false,
    cta: "Solicitar Orçamento",
  },
  {
    name: "Lojas Virtuais (E-commerce)",
    description: "Estrutura completa para vender online com segurança e velocidade.",
    features: [
      "Plataforma de Vendas Robusta",
      "Gestão de Estoque e Pedidos",
      "Cálculo de Frete (Correios/Transportadora)",
      "Integração com Gateways de Pagamento",
      "Relatórios de Vendas e Performance",
      "Otimização para Conversão (CRO)",
    ],
    highlight: true,
    cta: "Montar minha Loja",
  },
  {
    name: "Portais de Conteúdo",
    description: "Projetos de alta complexidade para grandes volumes de dados e acessos.",
    features: [
      "Arquitetura de Dados Avançada",
      "Sistema de Membros/Assinaturas",
      "Integrações via API Customizadas",
      "Segurança Nível Enterprise",
      "Painel de Controle Multi-usuário",
      "Infraestrutura de Nuvem Escalável",
    ],
    highlight: false,
    cta: "Falar com Especialista",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-white pt-20 pb-24"> {/* Reduzido de pt-32 para pt-20 */}
      {/* 1. HERO & CARDS */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 tracking-tight mb-6">
              Investimento para quem busca <span className="text-blue-600">liderança digital</span>
            </h1>
          </div>

          {/* Grid de Planos com Conteúdo Fiel ao Original */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-20">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-8 rounded-[32px] border transition-all duration-500 ${
                  plan.highlight
                    ? "bg-zinc-900 border-zinc-800 shadow-2xl scale-105 z-10"
                    : "bg-white border-zinc-100 shadow-xl shadow-zinc-200/50"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                    Mais Recomendado
                  </span>
                )}

                <div className="mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-zinc-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm leading-relaxed ${plan.highlight ? "text-zinc-400" : "text-zinc-500"}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-blue-400" : "text-blue-600"}`} />
                      <span className={`text-sm ${plan.highlight ? "text-zinc-300" : "text-zinc-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full h-14 rounded-2xl font-bold ${plan.highlight ? 'bg-blue-600 text-white' : 'bg-zinc-100 text-zinc-900'}`}>
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 2. PROVA DE VOLUME (LOGOS) */}
      <div className="mt-20 border-y border-zinc-100">
        <LogoCarousel />
      </div>

      {/* 4. DEPOIMENTOS (VÍDEO) */}
      <div className="bg-zinc-50">
        <Testimonials />
      </div>

      {/* SEÇÃO CTA AZUL ATUALIZADA */}
      <Section className="py-24 bg-blue-600 text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
                Pronto para elevar a sua presença digital?
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="text-blue-200 w-6 h-6" />
                  <span className="font-medium">Análise técnica gratuita do seu projeto.</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="text-blue-200 w-6 h-6" />
                  <span className="font-medium">Proposta personalizada com foco em ROI.</span>
                </div>
              </div>
            </div>

            {/* Formulário adaptado para fundo azul */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl">
              <form className="space-y-4">
                <input type="text" placeholder="Nome" className="w-full h-14 px-6 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 outline-none" />
                <input type="email" placeholder="E-mail" className="w-full h-14 px-6 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 outline-none" />
                <select className="w-full h-14 px-6 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 outline-none">
                  <option>Selecione o plano</option>
                  <option>Sites Institucionais</option>
                  <option>Lojas Virtuais</option>
                  <option>Portais de Conteúdo</option>
                </select>
                <textarea placeholder="Sua mensagem" className="w-full p-6 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 outline-none h-32" />
                <Button className="w-full h-14 bg-blue-600 text-white hover:bg-blue-700">Enviar Solicitação</Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}