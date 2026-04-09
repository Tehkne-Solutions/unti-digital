import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Feature {
  title: string;
  description: string;
  imagePosition: "left" | "right";
  image: string;
}

export function FeatureBlocks() {
  const t = useTranslations("FeatureBlocks");

  const features: Feature[] = [
    {
      title: t("features.0.title"),
      description: t("features.0.description"),
      imagePosition: "right",
      image: "/images/unti-digital-homepage-image-comprometimento-com-resultados-e-previsibilidade.png"
    },
    {
      title: t("features.1.title"),
      description: t("features.1.description"),
      imagePosition: "left",
      image: "/images/unti-digital-homepage-image-agilidade-tecnica-com-governanca.png"
    },
    {
      title: t("features.2.title"),
      description: t("features.2.description"),
      imagePosition: "right",
      image: "/images/unti-digital-homepage-image-parceria-estrategica-para-crescimento-digital.png"
    }
  ];

  return (
    <Section>
      <Container>
        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid items-center gap-16 md:grid-cols-2 md:gap-20 ${
                feature.imagePosition === "left" ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`space-y-6 ${feature.imagePosition === "left" ? "md:order-2" : "md:order-1"}`}>
                <h2 className="max-w-xl text-3xl font-medium md:text-4xl">
                  {feature.title}
                </h2>
                <p className="max-w-xl text-lg leading-relaxed text-brand-muted">
                  {feature.description}
                </p>
              </div>

              <div className={feature.imagePosition === "left" ? "md:order-1" : "md:order-2"}>
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
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
