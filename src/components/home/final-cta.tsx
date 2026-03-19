import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <Section className="bg-[#2563EB] py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Pronto para escalar sua presença digital com segurança?
          </h2>
          <p className="mb-10 max-w-2xl text-lg text-white/80">
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
