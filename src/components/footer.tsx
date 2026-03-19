"use client";

import Image from "next/image";
import Link from "next/link";

const institucional = [
  ["/sobre", "Sobre a UNTI"],
  ["/cases", "Cases"],
  ["/clientes", "Clientes"]
] as const;

const servicos = [
  ["/servicos", "Serviços"],
  ["/integracoes", "Integrações"],
  ["/parceiros", "Parceiros"]
] as const;

const contato = [
  ["/contato", "Contato"],
  ["mailto:contato@untidigital.com.br", "contato@untidigital.com.br"],
  ["tel:+5519982809717", "+55 19 98280-9717"]
] as const;

export function Footer() {
  return (
    <footer className="bg-[#173c8b] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Link href="/" aria-label="UNTI Digital - Início" className="inline-block no-underline hover:no-underline">
              <Image
                src="/images/logo-branco.png"
                alt="UNTI Digital"
                width={400}
                height={214}
                className="h-auto w-full max-w-[240px] object-contain"
              />
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-white">
              Soluções em tecnologia para negócios inteligentes: sites, plataformas web e integrações críticas com foco em performance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <FooterColumn title="Institucional" items={institucional} />
            <FooterColumn title="Serviços" items={servicos} />
            <FooterColumn title="Contato" items={contato} />
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 bg-[#123172] px-4 py-4 text-center text-sm text-white">
        © {new Date().getFullYear()} UNTI Digital - Todos os direitos reservados.
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: readonly (readonly [string, string])[] }) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="space-y-2 text-sm">
        {items.map(([href, label]) => (
          <li key={href}>
            <Link
              href={href}
              className="text-white no-underline transition-opacity hover:opacity-80 hover:no-underline"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
