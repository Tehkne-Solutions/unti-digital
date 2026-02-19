export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500">
        © {new Date().getFullYear()} UNTI Digital — Primeira fase do novo site em Next.js.
      </div>
    </footer>
  );
}
