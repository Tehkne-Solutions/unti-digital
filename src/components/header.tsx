"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FullscreenMenu } from "@/components/ui/FullscreenMenu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-[100] bg-white border-b border-zinc-100 h-20 flex items-center">
        <Container className="flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="text-2xl font-black tracking-tighter text-zinc-900">
            UNTI<span className="text-blue-600">.</span>
          </Link>

          {/* MENU DESKTOP HORIZONTAL */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-bold text-zinc-700 hover:text-blue-600">HOME</Link>

            {/* SOLUÇÕES COM MEGA MENU (HOVER) */}
            <div className="relative group py-4">
              <Link href="/solucoes" className="flex items-center gap-1 text-sm font-bold text-zinc-900 group-hover:text-blue-600">
                SOLUÇÕES <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>

              {/* O MEGA MENU DESKTOP */}
              <div className="absolute top-full left-0 w-[400px] bg-white border border-zinc-100 shadow-2xl rounded-3xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0">
                <div className="grid grid-cols-1 gap-6">
                  <Link href="/solucoes" className="group/item">
                    <p className="font-bold text-zinc-900 group-hover/item:text-blue-600">Sites Institucionais</p>
                    <p className="text-xs text-zinc-500 italic">Autoridade e Engenharia</p>
                  </Link>
                  <Link href="/solucoes" className="group/item">
                    <p className="font-bold text-zinc-900 group-hover/item:text-blue-600">Lojas Virtuais</p>
                    <p className="text-xs text-zinc-500 italic">E-commerce de Alta Performance</p>
                  </Link>
                  <Link href="/solucoes" className="group/item">
                    <p className="font-bold text-zinc-900 group-hover/item:text-blue-600">Para Agências</p>
                    <p className="text-xs text-zinc-500 italic">White Label & Squads Dedicadas</p>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/cases" className="text-sm font-bold text-zinc-700 hover:text-blue-600">CASES</Link>
            <Link href="/blog" className="text-sm font-bold text-zinc-700 hover:text-blue-600">CONTEÚDO</Link>
          </nav>

          {/* AÇÕES: BOTÃO + HAMBÚRGUER */}
          <div className="flex items-center gap-4">
            <Button className="hidden sm:flex bg-blue-600 text-white px-6 h-11 rounded-full text-sm font-bold hover:bg-blue-700 transition-all">
              Orçamento Rápido
            </Button>

            {/* GATILHO DO MENU (CORRIGIDO) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-3 bg-zinc-100 hover:bg-zinc-200 rounded-2xl transition-all flex items-center gap-2 group"
            >
              <span className="text-[10px] font-black text-zinc-900 hidden md:block">MENU</span>
              <Menu className="w-6 h-6 text-zinc-900" />
            </button>
          </div>
        </Container>
      </header>

      {/* COMPONENTE DE MENU FULLSCREEN (IMPORTADO) */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
