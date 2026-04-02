"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FullscreenMenu } from "@/components/ui/FullscreenMenu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-[100] bg-white border-b border-zinc-100 h-20 flex items-center">
        <Container className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter text-zinc-900">
            UNTI<span className="text-blue-600">.</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-bold text-zinc-700 hover:text-blue-600 transition-colors">HOME</Link>
            <Link href="/solucoes" className="text-sm font-bold text-zinc-700 hover:text-blue-600 transition-colors">SOLUÇÕES</Link>
            <Link href="/cases" className="text-sm font-bold text-zinc-700 hover:text-blue-600 transition-colors">CASES</Link>
            <Link href="/blog" className="text-sm font-bold text-zinc-700 hover:text-blue-600 transition-colors">CONTEÚDO</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden sm:flex bg-blue-600 text-white px-6 h-11 rounded-full text-sm font-bold hover:bg-blue-700 transition-all">
              Orçamento Rápido
            </Button>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-3 bg-zinc-100 hover:bg-zinc-200 rounded-2xl transition-all flex items-center gap-2"
              aria-label="Abrir menu"
            >
              <span className="text-[10px] font-black text-zinc-900 hidden md:block">MENU</span>
              <Menu className="w-6 h-6 text-zinc-900" />
            </button>
          </div>
        </Container>
      </header>

      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
