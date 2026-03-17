import Image from "next/image";
import Link from "next/link";
import logoVertical from "@/assets/logo-vertical.svg";

const institucional = [
  ["#", "Sobre a UNTI"],
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
  ["mailto:contato@untidigital.com", "contato@untidigital.com"],
  ["tel:+5519982809717", "+55 19 98280-9717"]
] as const;

export function Footer() {
  return (
    <footer className="bg-unti-dark text-unti-light">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <Link href="/" aria-label="UNTI Digital - Início" className="inline-block">
              <Image src={logoVertical} alt="UNTI Digital" width={400} height={214} className="h-auto w-full object-contain max-w-xs" />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-unti-light/80">
              Soluções em tecnologia para negócios inteligentes: sites, plataformas web e integrações críticas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <FooterColumn title="Institucional" items={institucional} />
            <FooterColumn title="Serviços" items={servicos} />
            <FooterColumn title="Contato" items={contato} />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-black/10 px-4 py-4 text-center text-sm text-unti-light/80">
        © {new Date().getFullYear()} UNTI Digital — Todos os direitos reservados.
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
            <Link href={href} className="text-unti-light/80 transition-colors hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
