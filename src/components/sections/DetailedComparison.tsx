"use client";

import { Check, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface ComparisonProps {
  category: "empresas" | "agencias";
}

const detailedData = {
  empresas: [
    { feature: "Número de Páginas", p1: "Até 6", p2: "Até 15", p3: "Ilimitado" },
    { feature: "Design Responsivo", p1: true, p2: true, p3: true },
    { feature: "Blog Integrado", p1: true, p2: true, p3: true },
    { feature: "Gestão de Conteúdo (CMS)", p1: true, p2: true, p3: true },
    { feature: "Otimização de Velocidade", p1: true, p2: true, p3: true },
    { feature: "Certificado SSL", p1: true, p2: true, p3: true },
    { feature: "Integração Meios de Pagamento", p1: false, p2: true, p3: true },
    { feature: "Cálculo de Frete Automatizado", p1: false, p2: true, p3: true },
    { feature: "Sistema de Assinaturas/Membros", p1: false, p2: false, p3: true },
    { feature: "Integração via API Customizada", p1: false, p2: false, p3: true },
  ],
  agencias: [
    { feature: "Selo White Label", p1: true, p2: true, p3: true },
    { feature: "Suporte Nível 2", p1: true, p2: true, p3: true },
    { feature: "Gestão via Slack/Jira", p1: false, p2: true, p3: true },
    { feature: "Squad Dedicada", p1: false, p2: true, p3: true },
    { feature: "Manutenção e Updates", p1: true, p2: true, p3: true },
    { feature: "Consultoria de UX/UI", p1: false, p2: false, p3: true },
    { feature: "Refatoração de Código Antigo", p1: false, p2: false, p3: true },
  ]
};

export const DetailedComparison = ({ category }: ComparisonProps) => {
  const data = detailedData[category];
  
  const headers = category === "empresas" 
    ? ["Funcionalidades", "Institucional", "Loja Virtual", "Portais"]
    : ["Recursos Parceiros", "White Label", "Terceirização", "Sob Demanda"];

  return (
    <section className="py-20 bg-zinc-50/50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-zinc-900">Análise Técnica Comparativa</h2>
          <p className="text-zinc-500 mt-2 italic">Fidelidade total às especificações de engenharia UNTI</p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-zinc-100 bg-white shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-900 text-white">
                <th className="py-6 px-6 font-bold">{headers[0]}</th>
                <th className="py-6 px-6 text-center">{headers[1]}</th>
                <th className="py-6 px-6 text-center text-blue-400">{headers[2]}</th>
                <th className="py-6 px-6 text-center">{headers[3]}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr key={idx} className="border-b border-zinc-50 hover:bg-zinc-50/50 transition-colors">
                  <td className="py-5 px-6 text-zinc-700 font-medium">{item.feature}</td>
                  <td className="py-5 px-6 text-center">
                    {renderCell(item.p1)}
                  </td>
                  <td className="py-5 px-6 text-center bg-blue-50/30">
                    {renderCell(item.p2)}
                  </td>
                  <td className="py-5 px-6 text-center">
                    {renderCell(item.p3)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};

function renderCell(value: boolean | string) {
  if (typeof value === "boolean") {
    return value ? <Check className="w-5 h-5 text-blue-600 mx-auto" /> : <Minus className="w-5 h-5 text-zinc-300 mx-auto" />;
  }
  return <span className="text-sm font-bold text-zinc-600">{value}</span>;
}