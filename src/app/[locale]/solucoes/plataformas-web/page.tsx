import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";

export default function PlataformasWebPage() {
  const t = useTranslations("Solutions");

  return (
    <Container className="py-20">
      <h1 className="text-4xl font-bold">{t("platforms.title")}</h1>
      <p className="mt-4 text-lg">{t("platforms.desc")}</p>
    </Container>
  );
}
