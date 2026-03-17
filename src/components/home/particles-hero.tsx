"use client";

import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export const ParticlesHero: React.FC = () => {
    useEffect(() => {
        initParticlesEngine(loadFull);
    }, []);

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
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                speed: 1.5,
            },
            number: { density: { enable: true, area: 1200 }, value: 40 },
            opacity: { value: 0.7 },
            shape: {
                type: "circle",
            },
            size: { value: { min: 3, max: 8 } },
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
        <div className="absolute inset-0 -z-10 w-full h-full">
            <Particles
                options={particlesOptions}
                className="w-full h-full"
            />
        </div>
    );
};
