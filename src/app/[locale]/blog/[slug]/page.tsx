import { notFound } from "next/navigation";
import { getAllBlogSlugs, getBlogPostBySlug, getBlogPosts } from "@/data/posts";
import { BlogContentRenderer } from "@/components/blog/BlogContentRenderer";
import { BlogHeroParallax } from "@/components/blog/BlogHeroParallax";
import { BlogReadingProgress } from "@/components/blog/BlogReadingProgress";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { buildMetadata } from "@/lib/metadata";
import { isLocale, type AppLocale } from "@/lib/i18n";
import { Container } from "@/components/ui/Container";

function getCopy(locale: AppLocale) {
  if (locale === "en") {
    return { back: "More insights", related: "Related articles", keyInsight: "Key insight", by: "By" };
  }

  if (locale === "es") {
    return { back: "Más insights", related: "Artículos relacionados", keyInsight: "Insight clave", by: "Por" };
  }

  return { back: "Mais insights", related: "Artigos relacionados", keyInsight: "Insight central", by: "Por" };
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
  const resolvedLocale: AppLocale = isLocale(locale) ? locale : "pt";
  const post = getBlogPostBySlug(resolvedLocale, slug);
  if (!post) return {};

  return buildMetadata({
    locale: resolvedLocale,
    title: post.seoTitle,
    description: post.metaDescription,
    pathname: `/blog/${slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.publishedAt
  });
}

export default function BlogPostPage({ params: { locale, slug } }: { params: { locale: AppLocale; slug: string } }) {
  const post = getBlogPostBySlug(locale, slug);
  if (!post) notFound();

  const copy = getCopy(locale);
  const relatedPosts = getBlogPosts(locale).filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <BlogReadingProgress />
      <Container className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">{post.category}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-zinc-900 md:text-6xl">{post.title}</h1>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-zinc-500">
            <span>{copy.by} {post.author}</span>
            <span>{post.readingTime}</span>
            <span>{post.publishedAt}</span>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-zinc-600">{post.description}</p>

          <div className="mt-10">
            <BlogHeroParallax image={post.image} title={post.title} />
          </div>

          <div className="mt-10 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">{copy.keyInsight}</p>
            <p className="mt-3 text-lg leading-relaxed text-zinc-700">{post.keyInsight}</p>
          </div>

          <article className="prose prose-zinc mt-10 max-w-none">
            <BlogContentRenderer blocks={post.body} />
          </article>
        </div>
      </Container>

      {relatedPosts.length ? (
        <section className="bg-[#f7faff] py-16">
          <Container>
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-semibold text-zinc-900">{copy.related}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedPosts.map((item) => (
                <BlogPostCard key={item.slug} post={item} variant="related" />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
