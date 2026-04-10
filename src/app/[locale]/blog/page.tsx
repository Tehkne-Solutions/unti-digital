import { getBlogPosts } from "@/data/posts";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { PageShell } from "@/components/page-shell";
import { buildMetadata } from "@/lib/metadata";
import { isLocale, type AppLocale } from "@/lib/i18n";

function getCopy(locale: AppLocale) {
  if (locale === "en") {
    return {
      eyebrow: "Blog",
      title: "Engineering insights for companies and agencies that need predictability",
      description: "Content created to support positioning, clarify technical decisions, and strengthen qualified commercial conversations.",
      seoTitle: "Blog | UNTI Digital",
      seoDescription: "Read UNTI Digital content about websites, platforms, integrations, and digital governance."
    };
  }

  if (locale === "es") {
    return {
      eyebrow: "Blog",
      title: "Ideas de ingeniería para empresas y agencias que necesitan previsibilidad",
      description: "Contenido creado para apoyar posicionamiento, aclarar decisiones técnicas y fortalecer conversaciones comerciales calificadas.",
      seoTitle: "Blog | UNTI Digital",
      seoDescription: "Lea contenidos de UNTI Digital sobre sitios, plataformas, integraciones y gobernanza digital."
    };
  }

  return {
    eyebrow: "Blog",
    title: "Insights de engenharia para empresas e agências que precisam de previsibilidade",
    description: "Conteúdo pensado para apoiar posicionamento, esclarecer decisões técnicas e fortalecer conversas comerciais qualificadas.",
    seoTitle: "Blog | UNTI Digital",
    seoDescription: "Leia conteúdos da UNTI Digital sobre sites, plataformas, integrações e governança digital."
  };
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const resolvedLocale: AppLocale = isLocale(locale) ? locale : "pt";
  const copy = getCopy(resolvedLocale);
  return buildMetadata({ locale: resolvedLocale, title: copy.seoTitle, description: copy.seoDescription, pathname: "/blog" });
}

export default function BlogPage({ params: { locale } }: { params: { locale: AppLocale } }) {
  const copy = getCopy(locale);
  const posts = getBlogPosts(locale);

  return (
    <PageShell eyebrow={copy.eyebrow} title={copy.title} description={copy.description}>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post, index) => (
          <BlogPostCard key={post.slug} post={post} variant={index === 0 ? "list" : "related"} />
        ))}
      </div>
    </PageShell>
  );
}
