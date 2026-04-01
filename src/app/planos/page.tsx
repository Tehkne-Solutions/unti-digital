"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Minus, ShieldCheck, Zap, Globe, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { LogoCarousel } from "@/components/ui/LogoCarousel";
import { Testimonials } from "@/components/ui/Testimonials";
import { PricingForm } from "@/components/ui/PricingForm";

const plans = [
  {
    name: "Business Express",
    description: "Ideal para profissionais liberais e empresas que precisam de autoridade digital imediata.",
    price: "Sob Consulta",
    features: [
      "Site Institucional One-Page",
      "Design Responsivo Premium",
      "Otimização de Velocidade (Core Web Vitals)",
      "Integração com WhatsApp e Redes Sociais",
      "Hospedagem e E-mails Profissionais",
      "Certificado SSL de Segurança",
    ],
    highlight: false,
    cta: "Iniciar Projeto",
  },
  {
    name: "Enterprise Scale",
    description: "Para empresas que buscam liderar o mercado com plataformas robustas e conversão agressiva.",
    price: "Mais Popular",
    features: [
      "Site Institucional Multi-Páginas",
      "Blog de Autoridade Integrado",
      "Painel Administrativo Customizado",
      "SEO Técnico Avançado",
      "Integração com CRM (RD Station/Hubspot)",
      "Treinamento de Gestão de Conteúdo",
      "Suporte Técnico Prioritário",
    ],
    highlight: true,
    cta: "Escalar meu Negócio",
  },
  {
    name: "Custom Solutions",
    description: "Projetos de alta complexidade: E-commerces, Portais, SaaS e Integrações de API customizadas.",
    price: "Tailor-made",
    features: [
      "Arquitetura de Software Sob Medida",
      "E-commerce de Alta Performance",
      "Integração com ERP e Sistemas Internos",
      "Segurança de Dados Nível Bancário",
      "Infraestrutura Escalável em Nuvem",
      "Consultoria de UX/UI Dedicada",
    ],
    highlight: false,
    cta: "Falar com Arquiteto",
  },
];

const comparisonFeatures = [
  { feature: "Design Responsivo & Mobile First", express: true, enterprise: true, custom: true },
  { feature: "Otimização de Velocidade (SEO)", express: true, enterprise: true, custom: true },
  { feature: "Certificado SSL de Segurança", express: true, enterprise: true, custom: true },
  { feature: "Painel Administrativo (CMS)", express: false, enterprise: true, custom: true },
  { feature: "Blog Profissional Integrado", express: false, enterprise: true, custom: true },
  { feature: "Integração com CRM/Marketing", express: "Básico", enterprise: "Avançado", custom: "Full API" },
  { feature: "Suporte Técnico", express: "E-mail", enterprise: "Prioritário", custom: "SLA Dedicado" },
  { feature: "Treinamento de Gestão", express: false, enterprise: true, custom: true },
  { feature: "Infraestrutura Escalável (Cloud)", express: false, enterprise: false, custom: true },
];

export default function PricingPage() {
  return (
    <main className="bg-white pt-32 pb-24">
      {/* 1. HERO & CARDS */}
      <Section>
        <Container>
          {/* Hero da Página */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold text-zinc-900 tracking-tight mb-6"
            >
              Investimento inteligente para <span className="text-blue-600">resultados reais</span>
            </motion.h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Escolha o plano que melhor se adapta ao momento atual da sua empresa.
              Transformamos tecnologia em vantagem competitiva.
            </p>
          </div>

          {/* Grid de Planos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-[32px] border transition-all duration-500 ${
                  plan.highlight
                    ? "bg-zinc-900 border-zinc-800 shadow-2xl scale-105 z-10"
                    : "bg-white border-zinc-100 hover:border-blue-200 shadow-xl shadow-zinc-200/50"
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

                <div className="mb-8">
                  <span className={`text-3xl font-extrabold ${plan.highlight ? "text-white" : "text-zinc-900"}`}>
                    {plan.price}
                  </span>
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

                <a href="#contato-planos" className={`w-full h-14 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                }`}>
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 2. PROVA DE VOLUME (LOGOS) */}
      <div className="mt-20 border-y border-zinc-100">
        <LogoCarousel />
      </div>

      {/* 3. TABELA DE COMPARAÇÃO TÉCNICA */}
      <Section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900">Comparativo Detalhado</h2>
            <p className="text-zinc-500 mt-4">Transparência total em cada linha de código.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-100">
                  <th className="py-6 px-4 text-zinc-900 font-bold">Recursos Técnicos</th>
                  <th className="py-6 px-4 text-zinc-400 font-medium">Business Express</th>
                  <th className="py-6 px-4 text-blue-600 font-bold">Enterprise Scale</th>
                  <th className="py-6 px-4 text-zinc-400 font-medium">Custom Solutions</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, idx) => (
                  <tr key={idx} className="border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors">
                    <td className="py-5 px-4 text-zinc-700 text-sm">{item.feature}</td>
                    <td className="py-5 px-4">
                      {typeof item.express === "boolean" ? (item.express ? <Check className="text-blue-600 w-5 h-5" /> : <Minus className="text-zinc-300 w-5 h-5" />) : <span className="text-xs font-bold text-zinc-500">{item.express}</span>}
                    </td>
                    <td className="py-5 px-4">
                      {typeof item.enterprise === "boolean" ? (item.enterprise ? <Check className="text-blue-600 w-5 h-5" /> : <Minus className="text-zinc-300 w-5 h-5" />) : <span className="text-xs font-bold text-blue-600">{item.enterprise}</span>}
                    </td>
                    <td className="py-5 px-4">
                      {typeof item.custom === "boolean" ? (item.custom ? <Check className="text-blue-600 w-5 h-5" /> : <Minus className="text-zinc-300 w-5 h-5" />) : <span className="text-xs font-bold text-zinc-500">{item.custom}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* 4. DEPOIMENTOS (VÍDEO) */}
      <div className="bg-zinc-50">
        <Testimonials />
      </div>

      {/* 5. GARANTIAS TÉCNICAS UNTI */}
      <Section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-zinc-900 mb-2">Propriedade Total</h4>
              <p className="text-zinc-500 text-sm">O código é seu. Sem fidelidade forçada ou taxas ocultas de licenciamento.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-zinc-900 mb-2">Performance Extrema</h4>
              <p className="text-zinc-500 text-sm">Sistemas otimizados para atingir nota máxima no Google PageSpeed Insights.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-zinc-900 mb-2">SEO de Engenharia</h4>
              <p className="text-zinc-500 text-sm">Estrutura técnica desenhada para indexação orgânica e baixo custo de tráfego pago.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SEÇÃO FINAL DE CONVERSÃO */}
      <Section id="contato-planos" className="py-24 bg-zinc-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
                Pronto para elevar a sua <span className="text-blue-500">presença digital?</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Não entregamos apenas código. Entregamos ativos de negócio que geram lucro, autoridade e segurança para a sua marca.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-zinc-200 font-medium">Análise técnica gratuita do seu domínio atual.</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-zinc-200 font-medium">Proposta personalizada com cronograma de execução.</span>
                </div>
              </div>
            </div>

            <PricingForm />
          </div>
        </Container>
      </Section>
      <PricingSchema />
    </main>
  );
}

// Schema JSON-LD para SEO
const PricingSchema = () => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Serviços de Desenvolvimento Web UNTI",
    "image": "https://untidigital.com.br/images/logo-unti.png",
    "description": "Desenvolvimento de sites de alta performance e plataformas customizadas.",
    "brand": {
      "@type": "Brand",
      "name": "UNTI Digital"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "3",
      "lowPrice": "0", // Sob consulta
      "priceCurrency": "BRL",
      "offers": [
        { "@type": "Offer", "name": "Business Express" },
        { "@type": "Offer", "name": "Enterprise Scale" },
        { "@type": "Offer", "name": "Custom Solutions" }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};