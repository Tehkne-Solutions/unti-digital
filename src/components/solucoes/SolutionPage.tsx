"use client";

import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProcessSteps } from "@/components/solucoes/ProcessSteps";

export interface SolutionBenefit {
    title: string;
    description: string;
}

export interface SolutionStep {
    title: string;
    description: string;
}

export interface SolutionPageProps {
    schemaMarkup?: Record<string, unknown>;
    breadcrumb: { label: string; href?: string }[];
    preTitle?: string;
    title: string;
    subtitle: string;
    benefits: SolutionBenefit[];
    processSteps: SolutionStep[];
    keyMessage?: string;
    keyText?: string;
    ctaTitle?: string;
    ctaText?: string;
    ctaButtonText?: string;
    ctaButtonHref?: string;
    extraSection?: React.ReactNode;
}

export function SolutionPage({
    schemaMarkup,
    breadcrumb,
    preTitle = "Solução",
    title,
    subtitle,
    benefits,
    processSteps,
    keyMessage,
    keyText,
    ctaTitle = "Pronto para escalar sua presença digital com segurança?",
    ctaText = "Fale com um especialista e descubra como podemos estruturar sua operação digital com previsibilidade e performance.",
    ctaButtonText = "Falar com especialista",
    ctaButtonHref = "/contato",
    extraSection,
}: SolutionPageProps) {
    return (
        <div className="w-full">
            {schemaMarkup && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
                />
            )}

            <Breadcrumb items={breadcrumb} />

            <section className="min-h-[60vh] bg-gradient-to-br from-slate-50 via-blue-50/50 to-white flex items-center">
                <Container>
                    <div className="max-w-3xl py-20">
                        <p className="text-unti-blue font-semibold uppercase tracking-widest text-sm mb-4">
                            {preTitle}
                        </p>
                        <h1 className="text-zinc-900 text-4xl md:text-6xl font-bold leading-tight mb-6">
                            {title}
                        </h1>
                        <p className="text-zinc-600 text-lg md:text-xl mb-8">{subtitle}</p>

                        <Link href={ctaButtonHref}>
                            <Button className="interactive-btn" variant="primary">
                                {ctaButtonText}
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
                            Por que investir nesta solução?
                        </h2>
                        <p className="text-zinc-600 mt-4 max-w-3xl mx-auto">
                            Estas vantagens estruturam sua jornada digital com resultados reais e previsíveis.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((item) => (
                            <article
                                key={item.title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-xl font-semibold text-zinc-900 mb-3">{item.title}</h3>
                                <p className="text-zinc-600 leading-relaxed">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="w-full bg-unti-blue text-white py-20">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Como trabalhamos</h2>
                        <ProcessSteps steps={processSteps} />
                    </div>
                </Container>
            </section>

            {(keyMessage || keyText) && (
                <section className="py-20 bg-white">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            {keyMessage && (
                                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                                    {keyMessage}
                                </h2>
                            )}
                            {keyText && <p className="text-zinc-600 leading-relaxed">{keyText}</p>}
                        </div>
                    </Container>
                </section>
            )}

            {extraSection}

            <section className="bg-unti-blue py-32">
                <Container>
                    <div className="flex flex-col items-center text-center">
                        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">{ctaTitle}</h2>
                        <p className="mb-10 max-w-2xl text-lg text-white/80">{ctaText}</p>
                        <Link href={ctaButtonHref}>
                            <Button variant="primary" className="h-14 px-8 text-lg">
                                {ctaButtonText}
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    );
}
