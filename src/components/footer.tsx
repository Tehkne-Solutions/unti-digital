import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-unti-digital.png";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="UNTI Digital - Início">
          <Image src={logo} alt="UNTI Digital" width={150} height={150} className="h-9 w-auto" />
          <span className="text-base font-semibold tracking-tight text-slate-900">UNTI Digital</span>
        </Link>
        <div>© {new Date().getFullYear()} UNTI Digital — Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
