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
            number: { density: { enable: true, area: 1200 }, value: 40 },
            opacity: { value: 0.8 },
            shape: {
                type: ["circle", "char"],
                options: {
                    character: {
                        value: ["+"],
                        font: "Verdana",
                        style: "",
                        weight: "700"
                    }
                }
            },
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
        <Particles
            id="tsparticles"
            options={particlesOptions}
            className="absolute inset-0 w-full h-full"
        />
    );
};
