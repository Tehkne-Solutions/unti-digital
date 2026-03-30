import { SolutionPage, SolutionBenefit, SolutionStep } from "@/components/solucoes/SolutionPage";

export const metadata = {
    title: "O Braco Tecnologico de Elite da sua Agencia | Unti Digital",
    description: "White Label tecnico para agencias com confidencialidade, engenharia senior sob demanda e entrega invisivel para projetos complexos.",
    keywords: [
        "white label tecnico para agencias",
        "parceria tecnica para agencia",
        "desenvolvimento sob demanda para agencia",
        "nda para agencia digital",
        "equipe de desenvolvimento white label"
    ],
    alternates: {
        canonical: "/solucoes/white-label-agencias",
    },
    openGraph: {
        title: "O Braco Tecnologico de Elite da sua Agencia | Unti Digital",
        description: "White Label tecnico para agencias com confidencialidade, engenharia senior sob demanda e entrega invisivel para projetos complexos.",
        type: "website",
        url: "https://unti-digital.vercel.app/solucoes/white-label-agencias",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "White Label Tecnico para Agencias",
    description: "Fornecemos engenharia senior sob sua marca com confidencialidade, arquitetura robusta e capacidade sob demanda para agencias.",
    provider: {
        "@type": "Organization",
        name: "Unti Digital",
        url: "https://unti-digital.vercel.app",
    },
    areaServed: "BR",
};

const benefits: SolutionBenefit[] = [
    { title: "Confidencialidade total", description: "Operamos com NDA e entrega invisivel, preservando a relacao da sua agencia com o cliente final." },
    { title: "Capacidade sob demanda", description: "Voce amplia a entrega tecnica sem carregar o custo fixo de estruturar uma equipe interna completa." },
    { title: "Engenharia senior plugada ao seu fluxo", description: "Nos integramos aos seus processos, padroes e rituais para manter consistencia na operacao." },
    { title: "Qualidade enterprise para projetos premium", description: "Assumimos projetos mais complexos com arquitetura robusta, previsibilidade e padrao alto de execucao." },
];

const processSteps: SolutionStep[] = [
    { title: "Diagnostico da operacao", description: "Entendemos seu modelo comercial, stack, gargalos e expectativas de entrega." },
    { title: "Acordos e governanca", description: "Definimos confidencialidade, fluxo de comunicacao, SLA e modelo de colaboracao com sua agencia." },
    { title: "Integracao ao processo", description: "Entramos nos seus rituais, ferramentas e padrao de execucao para operar como extensao do seu time." },
    { title: "Entrega tecnica invisivel", description: "Executamos projetos com engenharia robusta, checkpoints claros e prazos rigorosos." },
    { title: "Continuidade e escala", description: "Mantemos sustentacao tecnica e abrimos capacidade para novos projetos sem perda de qualidade." },
];

export default function WhiteLabelAgenciasPage() {
  return (
    <SolutionPage
      schemaMarkup={schemaMarkup}
      breadcrumb={[{ label: "Solucoes", href: "/solucoes" }, { label: "White Label para Agencias" }]}
      preTitle="Solucao White Label"
      title="O Braco Tecnologico de Elite da sua Agencia"
      subtitle="Expanda a capacidade de entrega da sua agencia com engenharia de ponta sob sua propria marca. Atuamos com confidencialidade, arquitetura robusta e disciplina operacional para projetos de alta exigencia."
      benefits={benefits}
      processSteps={processSteps}
      keyMessage="Resultados esperados"
      keyText="Aumento imediato da capacidade de entrega tecnologica da agencia com engenharia de ponta, garantia de confidencialidade e qualidade tecnica de nivel enterprise para seus clientes finais."
    />
  );
}
