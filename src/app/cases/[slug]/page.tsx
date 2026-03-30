import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseShowcase } from "@/components/cases/CaseShowcase";
import { caseCategoryThemes, cases, getCaseBySlug } from "@/data/cases";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return cases.map((caseItem) => ({
    slug: caseItem.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const caseItem = getCaseBySlug(params.slug);

  if (!caseItem) {
    return {
      title: "Case nao encontrado | Unti Digital",
      description: "O case solicitado nao foi encontrado."
    };
  }

  return {
    title: caseItem.seoTitle,
    description: caseItem.metaDescription,
    openGraph: {
      title: caseItem.seoTitle,
      description: caseItem.metaDescription,
      images: [caseItem.imagemBanner],
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: caseItem.seoTitle,
      description: caseItem.metaDescription,
      images: [caseItem.imagemBanner]
    }
  };
}

export default function CasePage({ params }: PageProps) {
  const caseItem = getCaseBySlug(params.slug);

  if (!caseItem) {
    return notFound();
  }

  const theme = caseCategoryThemes[caseItem.categoria];

  return (
    <main className="bg-white">
      <section className="relative isolate flex min-h-[60vh] items-end overflow-hidden bg-zinc-950">
        <Image
          src={caseItem.imagemBanner}
          alt={caseItem.cliente}
          fill
          priority
          className="object-cover blur-[1px] scale-105"
        />
        <div className="absolute inset-0 bg-zinc-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/55 to-zinc-950/20" />

        <div className="relative mx-auto w-full max-w-6xl px-4 py-20 text-center text-white">
          <div className="mb-6 flex justify-center">
            <span
              className={`inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] ${theme.badgeClassName}`}
            >
              {caseItem.segmento}
            </span>
          </div>
          <h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {caseItem.cliente}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-white/82 md:text-xl">
            {caseItem.heroSubtitle ?? caseItem.tagline}
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Link
            href="/cases"
            className="inline-flex items-center text-sm font-medium text-zinc-500 no-underline transition-colors hover:text-zinc-900 hover:no-underline"
          >
            Voltar para todos os cases
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="max-w-3xl text-lg text-zinc-600">{caseItem.resumo}</p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <article className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Desafio
                  </p>
                  <p className="mt-3 text-sm text-zinc-600">{caseItem.desafio}</p>
                </article>
                <article className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Entrega
                  </p>
                  <p className="mt-3 text-sm text-zinc-600">{caseItem.entrega}</p>
                </article>
                <article className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Impacto
                  </p>
                  <p className="mt-3 text-sm text-zinc-600">{caseItem.impacto}</p>
                </article>
              </div>
            </div>

            <aside className="rounded-[32px] border border-zinc-100 bg-slate-50/60 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Stack aplicado
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {caseItem.tecnologias.map((tecnologia) => (
                  <span
                    key={tecnologia}
                    className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700"
                  >
                    {tecnologia}
                  </span>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  Ganhos percebidos
                </p>
                <div className="mt-5 space-y-3">
                  {caseItem.resultados.map((resultado) => (
                    <div
                      key={resultado}
                      className="flex items-start gap-3 rounded-2xl border border-zinc-100 bg-white px-4 py-4"
                    >
                      <span className={`mt-2 h-2.5 w-2.5 rounded-full ${theme.accentClassName}`} />
                      <p className="text-sm text-zinc-600">{resultado}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-slate-50/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Showcase vertical
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-900 md:text-4xl">
              Prova visual de engenharia e acabamento
            </h2>
            <p className="mt-4 text-zinc-600">
              A moldura de navegador valoriza o print completo e reforca a percepcao premium do
              projeto entregue.
            </p>
          </div>

          <CaseShowcase alt={`${caseItem.cliente} - print completo do projeto`} imagemPrint={caseItem.imagemPrint} />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-[32px] border border-zinc-100 bg-white px-8 py-10 text-center shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Continuar a conversa
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-900">
              Quer um projeto com a mesma combinacao de estrategia e acabamento?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
              Estruturamos plataformas premium para marcas que precisam converter com mais clareza,
              autoridade e previsibilidade.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contato"
                className="interactive-btn inline-flex h-12 items-center justify-center rounded-xl border border-unti-blue px-6 text-sm font-semibold text-unti-blue no-underline transition-all duration-300 hover:bg-unti-blue hover:text-white hover:no-underline"
              >
                Solicitar Projeto Semelhante
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
