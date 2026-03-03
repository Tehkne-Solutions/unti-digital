"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface SolutionCTAProps {
    title: string;
    buttonText: string;
    buttonLink?: string;
}

export function SolutionCTA({
    title,
    buttonText,
    buttonLink = "/contato",
}: SolutionCTAProps) {
    return (
        <section className="py-24 md:py-32">
            <Container>
                <div className="max-w-6xl mx-auto">
                    <div className="bg-unti-blue rounded-2xl px-8 md:px-16 py-20 text-center space-y-8">
                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            {title}
                        </h2>

                        {/* CTA Button */}
                        <div>
                            <Link href={buttonLink}>
                                <Button
                                    variant="secondary"
                                    className="bg-white text-unti-blue hover:bg-gray-50"
                                >
                                    {buttonText}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
