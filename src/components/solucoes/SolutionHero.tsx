"use client";

import Link from "next-intl/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface SolutionHeroProps {
    title: string;
    subtitle: string;
    primaryCTA: string;
    secondaryCTA?: string;
    primaryLink?: string;
    secondaryLink?: string;
}

export function SolutionHero({
    title,
    subtitle,
    primaryCTA,
    secondaryCTA,
    primaryLink = "/contato",
    secondaryLink = "/cases",
}: SolutionHeroProps) {
    return (
        <section className="py-24 md:py-32">
            <Container>
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                        {title}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link href={primaryLink}>
                            <Button variant="primary">
                                {primaryCTA}
                            </Button>
                        </Link>
                        {secondaryCTA && (
                            <Link href={secondaryLink}>
                                <Button variant="secondary">
                                    {secondaryCTA}
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
