import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";

export default function AgenciasPage() {
  const t = useTranslations("Solutions");

  return (
    <Container className="py-20">
      <h1 className="text-4xl font-bold">{t("whiteLabel.title")}</h1>
      <p className="mt-4 text-lg">{t("whiteLabel.desc")}</p>
    </Container>
  );
}
