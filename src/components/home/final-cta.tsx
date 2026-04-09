import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export function FinalCTA() {
  const t = useTranslations("FinalCTA");

  return (
    <Section className="bg-[#2563EB] py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            {t("title")}
          </h2>
          <p className="mb-10 max-w-2xl text-lg text-white/80">
            {t("subtitle")}
          </p>
          <Button variant="primary" className="h-14 px-8 text-lg">
            {t("cta")}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
