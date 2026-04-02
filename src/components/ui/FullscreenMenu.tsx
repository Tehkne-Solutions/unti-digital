"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const menuLinks = [
  { n: "Home", h: "/" },
  { n: "Soluções", h: "/solucoes", active: true },
  { n: "Para Empresas", h: "/solucoes/empresas" },
  { n: "Para Agências", h: "/solucoes/agencias" },
  { n: "Cases de Sucesso", h: "/cases" },
  { n: "Blog & Tech", h: "/blog" },
  { n: "Falar com Especialista", h: "/contato" },
];

const dashboardCards = [
  { t: "Institucional", d: "Autoridade Digital", img: "/images/services/site-inst.jpg" },
  { t: "E-commerce", d: "Conversão Extrema", img: "/images/services/ecommerce.jpg" },
  { t: "Portais", d: "Gestão de Dados", img: "/images/services/portals.jpg" },
  { t: "Agências", d: "White Label Hub", img: "/images/services/agencies.jpg" },
];

export const FullscreenMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 bg-zinc-950 z-[999] flex flex-col lg:flex-row overflow-hidden"
        >
          {/* LADO ESQUERDO — dashboard visual (desktop only) */}
          <div className="hidden lg:flex lg:w-[60%] bg-zinc-900/50 p-16 flex-col justify-between border-r border-zinc-800/50">
            <div>
              <p className="text-blue-500 font-black tracking-[0.3em] uppercase text-[10px] mb-12">
                Engenharia de Performance
              </p>
              <div className="grid grid-cols-2 gap-6">
                {dashboardCards.map((item) => (
                  <Link
                    key={item.t}
                    href="/solucoes"
                    onClick={onClose}
                    className="group relative h-64 rounded-[32px] overflow-hidden border border-zinc-800 bg-zinc-950"
                  >
                    <Image
                      src={item.img}
                      alt={item.t}
                      fill
                      className="object-cover opacity-30 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-zinc-950 to-transparent">
                      <h4 className="text-xl font-black text-white">{item.t}</h4>
                      <p className="text-zinc-500 text-sm group-hover:text-blue-400 transition-colors">
                        {item.d}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <span className="text-zinc-700 text-[10px] font-bold uppercase tracking-widest">
              UNTI.DIGITAL // 2026
            </span>
          </div>

          {/* LADO DIREITO — navegação completa */}
          <div className="w-full lg:w-[40%] p-8 md:p-16 flex flex-col bg-zinc-950 overflow-y-auto">
            <div className="flex justify-between items-center mb-12 lg:mb-16">
              <span className="text-white text-3xl font-black tracking-tighter">
                UNTI<span className="text-blue-600">.</span>
              </span>
              <button
                onClick={onClose}
                className="p-4 bg-white text-zinc-950 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-xl"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest mb-2">
                Navegação
              </p>
              {menuLinks.map((link) => (
                <Link
                  key={link.n}
                  href={link.h}
                  onClick={onClose}
                  className={`text-4xl md:text-5xl font-black transition-all flex items-center gap-3 ${
                    link.active
                      ? "text-blue-600"
                      : "text-zinc-700 hover:text-white hover:translate-x-3"
                  }`}
                >
                  {link.n}
                  {link.active && <ArrowUpRight className="w-8 h-8" />}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
