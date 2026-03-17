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
            shape: { type: "circle" },
            size: { value: { min: 8, max: 10 } },
            twinkle: {
                particles: { enable: true, frequency: 0.05, opacity: 0.5 },
            },
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
