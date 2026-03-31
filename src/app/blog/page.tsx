import type { Metadata } from "next";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { blogPosts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog | UNTI Digital",
  description:
    "Conteúdo técnico da UNTI Digital sobre estratégia, integrações, segurança e design para operações de alto valor."
};

const editorialPillars = [
  "Estrategia digital para operacoes B2B e crescimento previsivel",
  "Integracoes, automacao e arquitetura aplicada a operacao",
  "Governanca, seguranca e compliance como base de confianca",
  "UX e experiencia de produto para ambientes corporativos"
];

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <main className="bg-white">
      <section className="border-b border-zinc-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Blog UNTI Digital
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              Conhecimento para lideranças que tratam tecnologia como alavanca de negócio
            </h1>
            <p className="mt-6 max-w-3xl text-base text-zinc-600 md:text-lg">
              A camada editorial da UNTI foi desenhada para educar o mercado, ampliar autoridade e
              qualificar a conversa comercial com conteúdo de leitura executiva.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {editorialPillars.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-200 bg-slate-50/60 px-4 py-3 text-sm text-zinc-600"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50/50 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Materia em destaque
            </p>
            <div className="mt-6">
              <BlogPostCard post={featuredPost} />
            </div>
          </div>

          <div className="rounded-[32px] border border-zinc-100 bg-white px-8 py-8 shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Linha editorial
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-900">
              White papers para decisao, nao conteudo para preencher calendario
            </h2>
            <p className="mt-4 text-zinc-600">
              Cada materia nasce para reduzir objecoes, elevar repertorio e posicionar a UNTI como
              parceira capaz de traduzir negocio, arquitetura e execucao no mesmo contexto.
            </p>
            <div className="mt-8 space-y-4">
              {blogPosts.map((post) => (
                <div key={post.slug} className="rounded-2xl border border-zinc-100 bg-slate-50/70 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-unti-blue">
                    {post.category}
                  </p>
                  <p className="mt-2 text-sm text-zinc-700">{post.keyInsight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Biblioteca inicial</h2>
            <p className="mt-4 text-zinc-600">
              Os quatro artigos inaugurais estruturam os pilares de estrategia, tecnologia,
              seguranca e design sob a otica de operacoes premium.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
