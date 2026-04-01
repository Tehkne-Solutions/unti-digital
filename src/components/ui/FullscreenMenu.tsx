"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { X, Linkedin, Instagram } from "lucide-react";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const solutions = [
  {
    title: "Sites Institucionais",
    desc: "Autoridade e Engenharia",
    img: "/images/services/site-inst.jpg",
    href: "/solucoes"
  },
  {
    title: "Lojas Virtuais",
    desc: "E-commerce de Alta Performance",
    img: "/images/services/ecommerce.jpg",
    href: "/solucoes"
  },
  {
    title: "Portais de Conteudo",
    desc: "Gestão de Dados & Conteúdo",
    img: "/images/services/portals.jpg",
    href: "/solucoes"
  },
  {
    title: "Para Agencias",
    desc: "White Label & Squads",
    img: "/images/services/agencies.jpg",
    href: "/solucoes"
  }
];

export const FullscreenMenu = ({ isOpen, onClose }: FullscreenMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white z-[999] overflow-y-auto"
        >
          <div className="max-w-[1400px] mx-auto p-6 md:p-12 min-h-screen">
            <div className="flex justify-between items-center mb-12">
              <Link href="/" onClick={onClose} className="text-3xl font-black text-zinc-900">
                UNTI<span className="text-blue-600">.</span>
              </Link>
              <button
                onClick={onClose}
                className="p-3 bg-zinc-100 hover:bg-zinc-200 rounded-full transition-all"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-8">
                <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-8">Nossas Solucoes</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.title}
                      href={solution.href}
                      onClick={onClose}
                      className="relative block h-60 rounded-[32px] overflow-hidden border border-zinc-100"
                    >
                      <Image
                        src={solution.img}
                        alt={solution.title}
                        fill
                        priority
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent p-6 flex flex-col justify-end">
                        <h4 className="text-white text-xl font-bold">{solution.title}</h4>
                        <p className="text-blue-300 text-sm">{solution.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 lg:border-l lg:border-zinc-100 lg:pl-16">
                <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-10">Menu</p>
                <nav className="space-y-5">
                  {[
                    { label: "Home", href: "/" },
                    { label: "Solucoes", href: "/solucoes" },
                    { label: "Cases", href: "/cases" },
                    { label: "Conteudo", href: "/blog" },
                    { label: "Para Agencias", href: "/solucoes" },
                    { label: "Para Ag�ncias", href: "/solucoes" },
                    { label: "Contato", href: "/contato" }
                  ].map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={onClose}
                      className="block text-4xl font-extrabold text-zinc-900 hover:text-blue-600 transition-all"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-10 pt-8 border-t border-zinc-100 flex gap-4">
                  <a href="https://www.linkedin.com/company/untidigital/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-6 h-6 text-zinc-400 hover:text-blue-600" />
                  </a>
                  <a href="https://www.instagram.com/untidigital/" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <Instagram className="w-6 h-6 text-zinc-400 hover:text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
