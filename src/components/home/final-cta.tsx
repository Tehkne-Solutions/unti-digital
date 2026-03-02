import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function FinalCTA() {
  return (
    <Section className="bg-unti-dark py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para escalar sua presença digital com segurança?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mb-10">
            Fale com um especialista e descubra como podemos estruturar sua operação digital com previsibilidade e performance.
          </p>
          <Button variant="primary" className="h-14 px-8 text-lg">
            Falar com especialista
          </Button>
        </div>
      </Container>
    </Section>
  );
}
