import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import Image, { StaticImageData } from "next/image";
import comprometimentoImg from "@/assets/unti-digital-homepage-image-comprometimento-com-resultados-e-previsibilidade.png";
import agilidadeImg from "@/assets/unti-digital-homepage-image-agilidade-tecnica-com-governanca.png";
import parceriaImg from "@/assets/unti-digital-homepage-image-parceria-estrategica-para-crescimento-digital.png";

interface Feature {
  title: string;
  description: string;
  imagePosition: "left" | "right";
  image: StaticImageData;
}

const features: Feature[] = [
  {
    title: "Comprometimento com resultados e previsibilidade",
    description: "Projetos planejados com clareza de escopo, prazos e entregáveis definidos. Atuamos com metodologia e acompanhamento contínuo para garantir performance e estabilidade.",
    imagePosition: "right",
    image: comprometimentoImg
  },
  {
    title: "Agilidade técnica com governança",
    description: "Times enxutos, comunicação direta e execução ágil sem abrir mão de boas práticas, segurança e arquitetura escalável.",
    imagePosition: "left",
    image: agilidadeImg
  },
  {
    title: "Parceria estratégica para crescimento digital",
    description: "Atuamos como extensão do seu time, oferecendo suporte técnico, evolução contínua e visão estratégica de longo prazo.",
    imagePosition: "right",
    image: parceriaImg
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
              className={`grid md:grid-cols-2 gap-16 md:gap-20 items-center ${feature.imagePosition === "left" ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Text Content */}
              <div className={`space-y-6 ${feature.imagePosition === "left" ? "md:order-2" : "md:order-1"
                }`}>
                <h2 className="text-3xl md:text-4xl font-medium text-unti-dark max-w-xl">
                  {feature.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  {feature.description}
                </p>
              </div>

              {/* Image */}
              <div className={`${feature.imagePosition === "left" ? "md:order-1" : "md:order-2"
                }`}>
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
