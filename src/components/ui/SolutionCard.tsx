"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export function SolutionCard({ title, description, image, href }: SolutionCardProps) {
  return (
    <Link
      href={href}
      className="group relative block h-[440px] w-full overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/50 to-transparent" />

      {/* Conteúdo */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-[2px] w-7 bg-unti-blue" />
          <span className="text-[10px] font-black italic tracking-[0.3em] text-blue-400 uppercase">
            Engenharia UNTI
          </span>
        </div>

        <h3 className="mb-3 text-2xl font-black leading-tight tracking-tight text-white uppercase md:text-3xl">
          {title}
        </h3>

        <p className="mb-6 max-w-[300px] text-sm leading-relaxed text-zinc-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {description}
        </p>

        <div className="flex items-center gap-2 text-[10px] font-black uppercase italic tracking-widest text-white transition-colors duration-300 group-hover:text-blue-400">
          Explorar solução <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
