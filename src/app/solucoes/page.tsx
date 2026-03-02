import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Segmentation } from '@/components/home/segmentation';
import { ServicesGrid } from '@/components/solutions/services-grid';
import { FinalCTA } from '@/components/home/final-cta';
import Image from 'next/image';

export default function SolucoesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-white">
        <Container>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-unti-dark mb-6">
              Soluções digitais estruturadas para crescimento sustentável
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              Desenvolvemos projetos com foco em performance, integração e governança técnica para empresas e agências.
            </p>
            <Button variant="primary">
              Falar com especialista
            </Button>
          </div>
        </Container>
      </Section>

      {/* Segmentation Section */}
      <Segmentation />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Differential Block */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-unti-dark mb-6">
                Por que nossas soluções são diferentes?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Trabalhamos com comprometimento total aos resultados, garantindo previsibilidade em cada etapa do projeto através de metodologia estruturada e comunicação transparente.
                </p>
                <p>
                  Nossa agilidade técnica é combinada com governança sólida, permitindo entregas rápidas sem comprometer qualidade ou segurança.
                </p>
                <p>
                  Atuamos como parceria estratégica de longo prazo, não apenas como fornecedor, entendendo profundamente seu negócio e objetivos.
                </p>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/assets/features/feature-1.jpg"
                alt="Diferencial estratégico"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
