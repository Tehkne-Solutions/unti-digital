import Link from "next/link";

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
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold text-brand-700">
          UNTI
        </Link>
        <nav className="hidden gap-4 text-sm md:flex">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="text-slate-600 hover:text-slate-900">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
