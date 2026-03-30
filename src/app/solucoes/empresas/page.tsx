import { SolutionPage } from "@/components/solucoes/SolutionPage";

export default function EmpresasPage() {
  return (
    <SolutionPage
      breadcrumb={[{ label: "Soluções", href: "/solucoes" }, { label: "Para Empresas" }]}
      preTitle="Solução para Empresas"
      title="Soluções digitais para empresas que buscam crescimento sustentável"
      subtitle="Sites, plataformas e integrações com foco em performance, governança técnica e previsibilidade de resultados."
      benefits={[
        { title: "Previsibilidade técnica", description: "Metodologia estruturada com entregas pontuais e comunicação transparente." },
        { title: "Integração com sistemas", description: "Conectamos sua presença digital com CRM, ERP e ferramentas internas." },
        { title: "Governança e segurança", description: "Código limpo, documentação e boas práticas em todos os projetos." },
      ]}
      processSteps={[
        { title: "Diagnóstico", description: "Analisamos o cenário atual para mapear gaps e oportunidades." },
        { title: "Planejamento", description: "Definimos arquitetura, manutenção e escala com foco em ROI." },
        { title: "Entrega incremental", description: "Entregas contínuas e valor real a cada sprint." },
        { title: "Otimização", description: "Monitoramento e ajustes constantes para performance contínua." },
      ]}
      keyMessage="Resultado e governança"
      keyText="Empresas de alto crescimento contam com velocidade e controle; nossa base de processos garante que você escale com segurança e previsibilidade."
    />
  );
}
