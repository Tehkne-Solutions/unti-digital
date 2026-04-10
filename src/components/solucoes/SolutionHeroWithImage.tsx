"use client";

import Image from "next/image";
import Link from "next-intl/link";

interface SolutionHeroWithImageProps {
    imageSrc: string;
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaHref?: string;
}

export function SolutionHeroWithImage({
    imageSrc,
    title,
    subtitle,
    ctaText = "Falar com especialista",
    ctaHref = "/contato",
}: SolutionHeroWithImageProps) {
    return (
        <section className="relative h-[420px] flex items-center justify-center text-center overflow-hidden">
            <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
                priority
            />

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 text-white max-w-3xl px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {title}
                </h1>

                <p className="text-lg opacity-90 mb-8">
                    {subtitle}
                </p>

                <Link
                    href={ctaHref}
                    className="inline-block bg-unti-blue hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                    {ctaText}
                </Link>
            </div>
        </section>
    );
}
