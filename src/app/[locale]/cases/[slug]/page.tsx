import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";

export default function CasePage({ params }: { params: { slug: string } }) {
  const t = useTranslations("Cases");

  return (
    <Container className="py-20">
      <h1 className="text-4xl font-bold">Case: {params.slug}</h1>
      <p className="mt-4 text-lg">{t("view_case")}</p>
    </Container>
  );
}
}
