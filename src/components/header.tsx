"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { FullscreenMenu } from "@/components/ui/FullscreenMenu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-zinc-100 h-24 flex items-center">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="text-3xl font-black tracking-tighter text-zinc-900">
            UNTI<span className="text-blue-600">.</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/contato"
              className="bg-zinc-900 text-white px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-zinc-200"
            >
              Orçamento
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="group flex items-center gap-3 p-3 bg-zinc-100 hover:bg-blue-600 rounded-2xl transition-all"
              aria-label="Abrir menu"
            >
              <span className="text-[10px] font-black text-zinc-900 group-hover:text-white hidden md:block">MENU</span>
              <Menu className="w-6 h-6 text-zinc-900 group-hover:text-white" />
            </button>
          </div>
        </div>
      </header>

      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
