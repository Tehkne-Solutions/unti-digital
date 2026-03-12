import { SolutionHeroWithImage } from "@/components/solucoes/SolutionHeroWithImage";
import { SolutionProblems } from "@/components/solucoes/SolutionProblems";
import { SolutionTechStack } from "@/components/solucoes/SolutionTechStack";
import { SolutionResults } from "@/components/solucoes/SolutionResults";
import { SolutionBenefits } from "@/components/solucoes/SolutionBenefits";
import { SolutionProcess } from "@/components/solucoes/SolutionProcess";
import { SolutionCases } from "@/components/solucoes/SolutionCases";
import { SolutionCTA } from "@/components/solucoes/SolutionCTA";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata = {
    title: "White Label para Agências | Unti Digital",
    description: "Desenvolvimento sob demanda com sua marca, entrega confidencial e arquitetura robusta.",
    openGraph: {
        title: "White Label para Agências | Unti Digital",
        description: "Desenvolvimento sob demanda com sua marca, entrega confidencial e arquitetura robusta.",
        type: "website",
    },
};

const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "White Label para Agências",
    description: "Desenvolvimento sob demanda com sua marca, entrega confidencial e arquitetura robusta.",
    provider: {
        "@type": "Organization",
        name: "Unti Digital",
        url: "https://unti-digital.vercel.app",
    },
    areaServed: "BR",
};

export default function WhiteLabelAgenciasPage() {
    const problems = [
        {
            title: "Demanda maior que a capacidade de desenvolvimento",
            description: "Agências recebem mais projetos que conseguem executar com qualidade.",
        },
        {
            title: "Dificuldade em contratar e reter talentos técnicos",
            description: "Mercado competitivo torna caro e difícil montar um time técnico robusto.",
        },
        {
            title: "Responsabilidade sem know-how técnico",
            description: "Agências precisam entregar projetos complexos pero têm pouca expertise interna.",
        },
    ];

    const technologies = [
        "Next.js",
        "Node.js",
        "React",
        "APIs escaláveis",
        "Arquitetura moderna",
        "Padrões de código enterprise",
    ];

    const results = [
        {
            metric: "4x",
            description: "Aumento de capacidade de entrega",
        },
        {
            metric: "-60%",
            description: "Redução de custos operacionais",
        },
        {
            metric: "100%",
            description: "Confidencialidade e white label",
        },
    ];

    const benefits = [
        {
            title: "White label completo",
            description: "Desenvolvimento sob sua marca sem qualquer menção à Unti Digital.",
        },
        {
            title: "Escala sem riscos",
            description: "Aumente sua capacidade de entrega sem comprometer outros projetos.",
        },
        {
            title: "Equipe dedicada",
            description: "Times especializados focados exclusivamente nos seus projetos.",
        },
    ];

    const steps = [
        {
            title: "Consultoria inicial",
            description: "Entendemos seus projetos, stack tecnológica e padrões internos.",
        },
        {
            title: "Seleção de equipe",
            description: "Alocamos profissionais especializados com expertise no seu segmento.",
        },
        {
            title: "Alinhamento de processos",
            description: "Garantimos que nossa operação se integre perfeitamente à sua.",
        },
        {
            title: "Desenvolvimento",
            description: "Executamos com a mesma qualidade e padrões que você demanda.",
        },
        {
            title: "Suporte contínuo",
            description: "Acompanhamento, melhorias e evolução permanente dos projetos.",
        },
    ];

    const cases = [
        {
            title: "Agência de marketing digital",
            result: "Expansão de 4x na capacidade de delivery de plataformas customizadas.",
        },
        {
            title: "Agência de design",
            result: "Execução técnica de 12 projetos simultâneos com qualidade Enterprise.",
        },
        {
            title: "Consultoria de negócios",
            result: "Plataformas internas de análise desenvolvidas com confidencialidade total.",
        },
    ];

    return (
        <div className="w-full">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />
            <Breadcrumb
                items={[
                    { label: "Soluções", href: "/solucoes" },
                    { label: "White Label para Agências" },
                ]}
            />
            <SolutionHeroWithImage
                imageSrc="/images/solutions/unti-digital-solution-white-label-development.png"
                title="White Label Técnico para Agências"
                subtitle="Desenvolvimento sob demanda com sua marca, entrega confidencial e arquitetura robusta."
            />
            <SolutionProblems problems={problems} />
            <SolutionTechStack technologies={technologies} />
            <SolutionResults results={results} />
            <SolutionBenefits items={benefits} />
            <SolutionProcess steps={steps} />
            <SolutionCases cases={cases} />
            <SolutionCTA
                title="Vamos escalar a capacidade de sua agência?"
                buttonText="Falar com especialista"
            />
        </div>
    );
}
