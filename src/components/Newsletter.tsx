"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!email) return;
        setSubmitted(true);
        setEmail("");
    };

    return (
        <section className="bg-slate-900 text-white">
            <div className="mx-auto max-w-6xl px-6 py-10 sm:py-16">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">Receba novidades</h2>
                    <p className="mt-3 text-gray-200">
                        Cadastre seu e-mail para receber conteúdos exclusivos, dicas e novidades sobre tecnologia.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <label className="sr-only" htmlFor="newsletter-email">
                            E-mail
                        </label>
                        <input
                            id="newsletter-email"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="seu@exemplo.com"
                            className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
                        />
                        <Button type="submit" variant="primary" className="interactive-btn w-full sm:w-auto">
                            Inscrever
                        </Button>
                    </form>

                    {submitted && (
                        <p className="mt-4 text-white/70">Obrigado! Você está inscrito.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
