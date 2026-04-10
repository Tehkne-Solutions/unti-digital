import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const t = useTranslations("Blog");

  return (
    <Container className="py-20">
      <h1 className="text-4xl font-bold">Post: {params.slug}</h1>
      <p className="mt-4 text-lg">{t("read_more")}</p>
    </Container>
  );
}
}
