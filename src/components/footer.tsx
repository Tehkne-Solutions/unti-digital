import Image from "next/image";
import Link from "next/link";
import logoVertical from "@/assets/logo vertrical.svg";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center" aria-label="UNTI Digital - Início">
          <Image src={logoVertical} alt="UNTI Digital" width={150} height={150} className="h-10 w-auto" />
        </Link>
        <div>© {new Date().getFullYear()} UNTI Digital — Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
