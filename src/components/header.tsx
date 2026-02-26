import Image from "next/image";
import Link from "next/link";
import logoHorizontal from "@/assets/logo horizontal.svg";

const links = [
  ["/", "home"],
  ["/sobre", "sobre"],
  ["/servicos", "serviços"],
  ["/produtos", "produtos"],
  ["/projetos", "projetos"],
  ["/blog", "blog"],
  ["/parceiros", "parceiros"],
  ["/integracoes", "integrações"],
  ["/contato", "contato"]
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-unti-border bg-unti-surface">
      <div className="border-b border-unti-border bg-unti-pastel/60">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-2 text-xs text-unti-dark">
          <div className="flex items-center gap-4">
            <span>(11) 99999-9999</span>
            <span>contato@untidigital.com</span>
          </div>
          <Link
            href="/contato"
            className="rounded-md bg-unti-cta px-3 py-1 font-semibold text-white transition-colors hover:brightness-95"
          >
            Fale com um especialista
          </Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center" aria-label="UNTI Digital - Início">
          <Image src={logoHorizontal} alt="UNTI Digital" width={180} height={48} className="h-10 w-auto" priority />
        </Link>
        <nav className="hidden items-center gap-6 text-sm uppercase tracking-tight text-unti-dark md:flex">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="hover:text-unti-primary transition-colors">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
