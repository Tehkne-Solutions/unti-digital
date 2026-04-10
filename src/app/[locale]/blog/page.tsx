import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";

export default function BlogPage() {
  const t = useTranslations("Blog");

  return (
    <Container className="py-20">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <p className="mt-4 text-lg">{t("read_more")}</p>
    </Container>
  );
}
