import { SolutionPage } from "@/components/solucoes/SolutionPage";

export default function AgenciasPage() {
  return (
    <SolutionPage
      breadcrumb={[{ label: "Soluções", href: "/solucoes" }, { label: "Para Agências" }]}
      preTitle="Solução para Agências"
      title="Parceiro técnico estratégico para agências que buscam excelência"
      subtitle="Desenvolvemos white label técnico, entregas pontuais e qualidade para equipes que precisam de um parceiro confiável."
      benefits={[
        { title: "White label técnico", description: "Desenvolvemos sob sua marca com total confidencialidade." },
        { title: "Entregas pontuais", description: "Cumprimos prazos para você manter a confiança dos seus clientes." },
        { title: "Parceria de longo prazo", description: "Time de apoio que cresce com seus projetos e metas." },
      ]}
      processSteps={[
        { title: "Alinhamento inicial", description: "Entendemos seus padrões, pipeline e objetivos." },
        { title: "Onboarding técnico", description: "Integramos processo com metodologia e governança." },
        { title: "Execução", description: "Desenvolvimento ágil e com padrões de entrega enterprise." },
        { title: "Handover e suporte", description: "Documentação, QA e suporte contínuo por projeto." },
      ]}
      keyMessage="Agilidade para o seu time"
      keyText="Com nosso white label técnico, sua agência amplia capacidade de entrega sem necessidade de contratar recursos fixos e reduz riscos de falhas em projetos críticos."
    />
  );
}
