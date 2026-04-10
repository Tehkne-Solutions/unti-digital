import { Container } from "@/components/ui/Container";
import Link from "next-intl/link";
import { Mail, Phone } from "lucide-react";

export const PricingFooter = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1: Marca */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">UNTI<span className="text-blue-500">.</span></h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Engenharia de software e performance digital para empresas e agências que não aceitam o comum.
            </p>
          </div>

          {/* Coluna 2: Para Empresas */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-6">Empresas</h4>
            <ul className="space-y-4 text-zinc-400 text-sm font-medium">
              <li><Link href="#planos" className="hover:text-white transition-colors">Sites Institucionais</Link></li>
              <li><Link href="#planos" className="hover:text-white transition-colors">Lojas Virtuais (E-commerce)</Link></li>
              <li><Link href="#planos" className="hover:text-white transition-colors">Portais de Conteúdo</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Para Agências */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-6">Agências</h4>
            <ul className="space-y-4 text-zinc-400 text-sm font-medium">
              <li><Link href="#planos" className="hover:text-white transition-colors">Parceria White Label</Link></li>
              <li><Link href="#planos" className="hover:text-white transition-colors">Terceirização de TI</Link></li>
              <li><Link href="#planos" className="hover:text-white transition-colors">Squads Sob Demanda</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Contacto */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-6">Fale Connosco</h4>
            <ul className="space-y-4 text-zinc-400 text-sm font-medium">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500" /> contato@untidigital.com.br
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500" /> +55 (11) 99999-9999
              </li>
              <li className="flex gap-4 pt-2">
                <span className="text-zinc-400 hover:text-white cursor-pointer">Instagram</span>
                <span className="text-zinc-400 hover:text-white cursor-pointer">LinkedIn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500 text-xs">
          <p>© {new Date().getFullYear()} UNTI Digital Engenharia de Performance. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};