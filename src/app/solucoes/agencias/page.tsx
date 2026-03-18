import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ServicesGrid } from '@/components/solutions/services-grid';
import { FinalCTA } from '@/components/home/final-cta';

export default function AgenciasPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-unti-pastel rounded-full text-sm font-medium text-unti-blue mb-6">
              Para Agências
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Parceiro técnico estratégico para agências que buscam excelência
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              Oferecemos desenvolvimento white label, entregas pontuais e qualidade técnica para agências que precisam de um parceiro confiável.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Por que agências confiam na UNTI
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="w-12 h-12 rounded-lg bg-unti-blue/10 flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-unti-blue rounded" />
              </div>
              <h3 className="text-xl font-medium mb-3">
                White label técnico
              </h3>
              <p className="text-gray-600">
                Desenvolvemos sob sua marca com total confidencialidade. Seu cliente, nossa execução técnica impecável.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-unti-blue/10 flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-unti-blue rounded" />
              </div>
              <h3 className="text-xl font-medium mb-3">
                Entregas pontuais
              </h3>
              <p className="text-gray-600">
                Cumprimos prazos com rigor, permitindo que você mantenha compromissos com seus clientes sem preocupações.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-unti-blue/10 flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-unti-blue rounded" />
              </div>
              <h3 className="text-xl font-medium mb-3">
                Parceria de longo prazo
              </h3>
              <p className="text-gray-600">
                Atuamos como extensão do seu time técnico, crescendo junto com sua agência e seus projetos.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services */}
      <ServicesGrid />

      {/* Differential */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Flexibilidade para sua agência crescer
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Trabalhamos sob demanda, sem contratos rígidos. Você escala projetos conforme necessidade, mantendo qualidade e previsibilidade em todas as entregas.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="p-6 bg-white rounded-xl">
                <h4 className="font-medium mb-2">Comunicação direta</h4>
                <p className="text-gray-600">Acesso direto ao time técnico sem intermediários ou burocracias desnecessárias.</p>
              </div>
              <div className="p-6 bg-white rounded-xl">
                <h4 className="font-medium mb-2">Código documentado</h4>
                <p className="text-gray-600">Entregamos código limpo, documentado e pronto para manutenção futura.</p>
              </div>
              <div className="p-6 bg-white rounded-xl">
                <h4 className="font-medium mb-2">Suporte contínuo</h4>
                <p className="text-gray-600">Acompanhamento pós-entrega para garantir estabilidade e performance.</p>
              </div>
              <div className="p-6 bg-white rounded-xl">
                <h4 className="font-medium mb-2">Revisões ilimitadas</h4>
                <p className="text-gray-600">Ajustes e refinamentos até atingir o padrão de qualidade esperado.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
