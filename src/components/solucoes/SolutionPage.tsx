"use client";

import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ProcessSteps } from "@/components/solucoes/ProcessSteps";

export interface SolutionBenefit {
    title: string;
    description: string;
}

export interface SolutionStep {
    title: string;
    description: string;
}

export interface SolutionImageSection {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
}

export interface SolutionPageProps {
    schemaMarkup?: Record<string, unknown>;
    breadcrumb: { label: string; href?: string }[];
    preTitle?: string;
    title: string;
    subtitle: string;
    benefits: SolutionBenefit[];
    benefitsTitle?: string;
    benefitsSubtitle?: string;
    afterBenefitsSection?: React.ReactNode;
    processSteps: SolutionStep[];
    processTitle?: string;
    keyMessage?: string;
    keyText?: string;
    imageSections?: SolutionImageSection[];
    heroCtaButtonText?: string;
    heroCtaButtonHref?: string;
    heroSecondaryCtaText?: string;
    heroSecondaryCtaHref?: string;
    ctaTitle?: string;
    ctaText?: string;
    ctaButtonText?: string;
    ctaButtonHref?: string;
    extraSection?: React.ReactNode;
}

export function SolutionPage({
    schemaMarkup,
    breadcrumb,
    preTitle = "Solucao",
    title,
    subtitle,
    benefits,
    benefitsTitle = "Por que investir nesta solucao?",
    benefitsSubtitle = "Estas vantagens estruturam sua jornada digital com resultados reais e previsiveis.",
    afterBenefitsSection,
    processSteps,
    processTitle = "Como trabalhamos",
    keyMessage,
    keyText,
    imageSections,
    heroCtaButtonText,
    heroCtaButtonHref,
    heroSecondaryCtaText,
    heroSecondaryCtaHref,
    ctaTitle = "Pronto para escalar sua presenca digital com seguranca?",
    ctaText = "Fale com um especialista e descubra como podemos estruturar sua operacao digital com previsibilidade e performance.",
    ctaButtonText = "Falar com especialista",
    ctaButtonHref = "/contato",
    extraSection,
}: SolutionPageProps) {
    const benefitsGridClassName =
        benefits.length <= 2
            ? "grid grid-cols-1 gap-6 sm:grid-cols-2"
            : benefits.length === 3
              ? "grid grid-cols-1 gap-6 md:grid-cols-3"
              : "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4";

    return (
        <div className="w-full">
            {schemaMarkup && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
                />
            )}

            <Breadcrumb items={breadcrumb} />

            <section
                className="min-h-[60vh] relative flex items-center overflow-hidden"
                style={{
                    backgroundImage: "url(/images/unti-digital-solucoes-hero-banner-bg.png)",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-white/[0.85]"></div>
                <Container className="relative z-20">
                    <div className="relative z-10 max-w-3xl py-20">
                        <SectionReveal>
                            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-unti-blue">
                                {preTitle}
                            </p>
                        </SectionReveal>
                        <SectionReveal>
                            <h1 className="mb-6 text-4xl font-bold leading-tight text-zinc-900 md:text-6xl">
                                {title}
                            </h1>
                        </SectionReveal>
                        <SectionReveal>
                            <p className="mb-8 text-lg text-zinc-600 md:text-xl">{subtitle}</p>
                        </SectionReveal>
                        <SectionReveal>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Link href={heroCtaButtonHref ?? ctaButtonHref}>
                                    <Button className="interactive-btn" variant="primary">
                                        {heroCtaButtonText ?? ctaButtonText}
                                    </Button>
                                </Link>
                                {heroSecondaryCtaText && heroSecondaryCtaHref && (
                                    <Link href={heroSecondaryCtaHref}>
                                        <Button className="min-w-[220px]" variant="secondary">
                                            {heroSecondaryCtaText}
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </SectionReveal>
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <SectionReveal className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-zinc-900 md:text-4xl">
                            {benefitsTitle}
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-zinc-600">
                            {benefitsSubtitle}
                        </p>
                    </SectionReveal>

                    <div className={benefitsGridClassName}>
                        {benefits.map((item) => (
                            <SectionReveal key={item.title} className="h-full">
                                <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                                    <h3 className="mb-3 text-xl font-semibold text-zinc-900">{item.title}</h3>
                                    <p className="leading-relaxed text-zinc-600">{item.description}</p>
                                </article>
                            </SectionReveal>
                        ))}
                    </div>
                </Container>
            </section>

            {afterBenefitsSection}

            <section className="w-full bg-unti-blue py-20 text-white">
                <Container>
                    <div className="mx-auto max-w-5xl">
                        <SectionReveal>
                            <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
                                {processTitle}
                            </h2>
                        </SectionReveal>
                        <ProcessSteps steps={processSteps} />
                    </div>
                </Container>
            </section>

            {imageSections && imageSections.length > 0 && (
                <section className="bg-slate-50 py-20">
                    <Container>
                        <div className="space-y-20">
                            {imageSections.map((section, index) => (
                                <SectionReveal
                                    key={section.title}
                                    className={`flex flex-col items-center gap-12 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                                >
                                    <div className="flex-1">
                                        <h3 className="mb-4 text-2xl font-bold text-zinc-900 md:text-3xl">
                                            {section.title}
                                        </h3>
                                        <p className="text-lg leading-relaxed text-zinc-600">
                                            {section.description}
                                        </p>
                                    </div>
                                    <div className="flex-1">
                                        <Image
                                            src={section.imageSrc}
                                            alt={section.imageAlt}
                                            width={600}
                                            height={400}
                                            className="h-auto w-full rounded-lg shadow-lg"
                                        />
                                    </div>
                                </SectionReveal>
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            {(keyMessage || keyText) && (
                <section className="bg-white py-20">
                    <Container>
                        <SectionReveal className="mx-auto max-w-4xl">
                            <div className="rounded-[32px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-8 shadow-[0_18px_50px_rgba(37,99,235,0.08)] md:p-10">
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-unti-blue">
                                    Resultado esperado
                                </p>
                                {keyMessage && (
                                    <h2 className="mt-4 text-3xl font-bold text-zinc-900 md:text-4xl">
                                        {keyMessage}
                                    </h2>
                                )}
                                {keyText && <p className="mt-4 text-lg leading-relaxed text-zinc-600">{keyText}</p>}
                            </div>
                        </SectionReveal>
                    </Container>
                </section>
            )}

            {extraSection}

            <section className="bg-unti-blue py-32">
                <Container>
                    <SectionReveal className="flex flex-col items-center text-center">
                        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">{ctaTitle}</h2>
                        <p className="mb-10 max-w-2xl text-lg text-white/80">{ctaText}</p>
                        <Link href={ctaButtonHref}>
                            <Button variant="primary" className="h-14 px-8 text-lg">
                                {ctaButtonText}
                            </Button>
                        </Link>
                    </SectionReveal>
                </Container>
            </section>
        </div>
    );
}
