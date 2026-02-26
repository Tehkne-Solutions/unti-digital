import Image from "next/image";
import Link from "next/link";
import logoHorizontal from "@/assets/logo horizontal.svg";

const links = [
  ["/servicos", "Serviços"],
  ["/cases", "Cases"],
  ["/clientes", "Clientes"],
  ["/blog", "Blog"],
  ["/parceiros", "Parceiros"],
  ["/integracoes", "Integrações"],
  ["/contato", "Contato"]
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-unti-border bg-unti-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center" aria-label="UNTI Digital - Início">
          <Image src={logoHorizontal} alt="UNTI Digital" width={180} height={48} className="h-10 w-auto" priority />
        </Link>
        <nav className="hidden items-center gap-4 text-sm md:flex">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="text-unti-muted hover:text-unti-dark transition-colors">
              {label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="rounded-md bg-unti-primary px-4 py-2 font-semibold text-white shadow-sm transition-colors hover:bg-unti-accent"
          >
            Falar com especialista
          </Link>
        </nav>
      </div>
    </header>
  );
}
