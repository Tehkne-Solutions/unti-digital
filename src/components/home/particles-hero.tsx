"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export const ParticlesHero: React.FC = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        initParticlesEngine(loadFull).then(() => setIsReady(true));
    }, []);

    if (!isReady) return null;

    // SVG plus symbol as data URI
    const plusSvgDataUri = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIxMCIgeT0iMiIgd2lkdGg9IjQiIGhlaWdodD0iMjAiIGZpbGw9IiMxRTNBOEEiLz48cmVjdCB4PSIyIiB5PSIxMCIgd2lkdGg9IjIwIiBmaWxsPSIyMCIgZmlsbD0iIzFFM0E4QSIvPjwvc3ZnPg==";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const particlesOptions: any = {
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
            color: { value: "#1E3A8A" },
            links: {
                color: "#BFDBFE",
                distance: 80,
                enable: true,
                opacity: 0.4,
                width: 1.5,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                speed: 1.5,
            },
            number: { density: { enable: true, area: 1000 }, value: 35 },
            opacity: { value: 0.8 },
            shape: {
                type: "image",
                image: {
                    src: plusSvgDataUri,
                    width: 20,
                    height: 20,
                },
            } as any,
            size: { value: { min: 8, max: 10 } },
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "grab" },
                onClick: { enable: false },
            },
            modes: {
                grab: { distance: 140, links: { opacity: 0.8 } },
            },
        },
        detectRetina: true,
    };

    return (
        <>
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: "url(#plusFilter)" }}>
                <defs>
                    <filter id="plusFilter">
                        <feMorphology operator="dilate" radius="2" />
                        <feGaussianBlur stdDeviation="1" />
                    </filter>
                </defs>
            </svg>
            <Particles
                options={particlesOptions}
                className="absolute inset-0 w-full h-full"
            />
        </>
    );
};
