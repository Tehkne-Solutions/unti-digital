import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ServicesGrid } from '@/components/solutions/services-grid';
import CasesSection from '@/components/CasesSection';
import { FinalCTA } from '@/components/home/final-cta';

export default function EmpresasPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-unti-pastel rounded-full text-sm font-medium text-unti-blue mb-6">
              Para Empresas
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-unti-dark mb-6">
              Soluções digitais para empresas que buscam crescimento sustentável
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              Desenvolvemos sites, plataformas e integrações com foco em performance, governança técnica e previsibilidade de resultados.
            </p>
            <Button variant="primary">
              Falar com especialista
            </Button>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section>
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-unti-dark mb-12">
            Por que empresas escolhem a UNTI
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="w-12 h-12 rounded-lg bg-unti-blue/10 flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-unti-blue rounded" />
              </div>
              <h3 className="text-xl font-medium text-unti-dark mb-3">
                Previsibilidade técnica
              </h3>
              <p className="text-gray-600">
                Metodologia estruturada com entregas pontuais e comunicação transparente em todas as etapas do projeto.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-unti-blue/10 flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-unti-blue rounded" />
              </div>
              <h3 className="text-xl font-medium text-unti-dark mb-3">
                Integração com sistemas
              </h3>
              <p className="text-gray-600">
                Conectamos sua presença digital com CRM, ERP e ferramentas internas, automatizando processos críticos.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-unti-blue/10 flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-unti-blue rounded" />
              </div>
              <h3 className="text-xl font-medium text-unti-dark mb-3">
                Governança e segurança
              </h3>
              <p className="text-gray-600">
                Código limpo, documentação completa e boas práticas de segurança em todos os projetos desenvolvidos.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <ServicesGrid />

      {/* Case Studies */}
      <CasesSection />

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
