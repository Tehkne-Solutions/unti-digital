import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

interface Feature {
  title: string;
  description: string;
  imagePosition: "left" | "right";
}

const features: Feature[] = [
  {
    title: "Comprometimento com resultados e previsibilidade",
    description: "Projetos planejados com clareza de escopo, prazos e entregáveis definidos. Atuamos com metodologia e acompanhamento contínuo para garantir performance e estabilidade.",
    imagePosition: "right"
  },
  {
    title: "Agilidade técnica com governança",
    description: "Times enxutos, comunicação direta e execução ágil sem abrir mão de boas práticas, segurança e arquitetura escalável.",
    imagePosition: "left"
  },
  {
    title: "Parceria estratégica para crescimento digital",
    description: "Atuamos como extensão do seu time, oferecendo suporte técnico, evolução contínua e visão estratégica de longo prazo.",
    imagePosition: "right"
  }
];

export function FeatureBlocks() {
  return (
    <Section>
      <Container>
        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${
                feature.imagePosition === "left" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className={`space-y-6 ${
                feature.imagePosition === "left" ? "md:order-2" : "md:order-1"
              }`}>
                <h2 className="text-3xl md:text-4xl font-medium text-unti-dark max-w-xl">
                  {feature.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  {feature.description}
                </p>
              </div>

              {/* Image Placeholder */}
              <div className={`${
                feature.imagePosition === "left" ? "md:order-1" : "md:order-2"
              }`}>
                <div className="aspect-video rounded-xl bg-gradient-to-br from-unti-pastel to-unti-light flex items-center justify-center">
                  <svg className="w-20 h-20 text-unti-blue opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
