import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Política Empresarial | UNTI Digital",
  description: "Política Empresarial da UNTI Digital. Conheça nossos padrões de atendimento, prazos, pagamentos e diretrizes comerciais.",
  alternates: { canonical: "/politica-empresarial" },
};

const policies = [
  {
    title: "Horário de Funcionamento",
    icon: "🕘",
    items: [
      "Atendimento de segunda a sexta-feira, das 9h às 18h.",
    ],
  },
  {
    title: "Tempo de Resposta",
    icon: "💬",
    items: [
      "Mensagens recebidas via WhatsApp serão respondidas em até 2 horas.",
      "E-mails serão respondidos em um prazo máximo de 8 horas.",
      "O atendimento exclusivo ocorre durante o horário comercial, assegurando uma resposta ágil e especializada.",
    ],
  },
  {
    title: "Prazos para Entregas",
    icon: "📅",
    items: [
      "Ajustes simples em sites: até 5 dias úteis.",
      "Projetos de criação de sites: de 5 a 60 dias úteis, dependendo da complexidade e escopo.",
      "Desenvolvimento de aplicativos: prazo superior a 60 dias úteis, considerando a atenção aos detalhes e a qualidade do produto final.",
    ],
  },
  {
    title: "Pagamentos",
    icon: "💳",
    items: [
      "Multas e juros relativos a pagamentos serão explicitados detalhadamente no contrato, assegurando transparência nas relações comerciais.",
      "Projetos e serviços com mais de 3 meses de atraso no pagamento serão descontinuados, resguardando a saúde financeira da empresa e mantendo a qualidade dos serviços prestados.",
    ],
  },
  {
    title: "Ajuste Anual de Pagamentos",
    icon: "📈",
    items: [
      "O ajuste anual de pagamentos será realizado anualmente no mês de março, contemplando um acréscimo de 10% baseado no valor atual.",
      "Essa prática visa acompanhar as mudanças no mercado e garantir a sustentabilidade financeira da Unti Digital.",
    ],
  },
  {
    title: "Serviços Disponíveis",
    icon: "✅",
    items: [
      "Criação de aplicativos institucionais.",
      "Desenvolvimento de sistemas web.",
      "Gestão de aplicativos e sistemas web.",
      "Integrações para sites.",
      "Integração com ZAPIER.",
      "Hospedagem de sites.",
      "Hospedagem de e-mails.",
    ],
  },
  {
    title: "Serviços Descontinuados",
    icon: "🚫",
    items: [
      "Gestão de hospedagens.",
      "Gestão de e-mails.",
      "Gestão de domínios.",
      "Serviços de assinaturas de e-mails.",
      "Serviços de gestão de planilhas.",
    ],
  },
];

export default function PoliticaEmpresarialPage() {
  return (
    <div className="bg-white text-zinc-900">
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/40 to-white py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">Legal</p>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-zinc-900 md:text-5xl">
              Política Empresarial
            </h1>
            <p className="text-sm text-zinc-500">UNTI Digital · Referência em Inteligência Digital e Web</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-12">
        <Container>
          <div className="max-w-3xl leading-relaxed text-zinc-600">
            <p>
              A <strong className="text-zinc-900">Unti Digital</strong>, referência no cenário de Inteligência Digital e Web, reafirma seu compromisso com a excelência e a satisfação do cliente ao apresentar sua política empresarial. Esta política é delineada para estabelecer padrões claros, promovendo transparência, eficiência e integridade em todas as interações comerciais.
            </p>
            <p className="mt-4">
              Com a visão de atender às crescentes demandas do mercado, a Unti Digital busca, através desta política, criar uma base sólida para relações comerciais éticas e bem-sucedidas.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="max-w-3xl space-y-8">
            {policies.map((policy) => (
              <div
                key={policy.title}
                className="rounded-[24px] border border-zinc-100 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">{policy.icon}</span>
                  <h2 className="text-xl font-bold text-zinc-900">{policy.title}</h2>
                </div>
                <ul className="space-y-3">
                  {policy.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-zinc-600">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-unti-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-zinc-50 py-16 border-t border-zinc-100">
        <Container>
          <div className="max-w-3xl">
            <p className="leading-relaxed text-zinc-600">
              A Unti Digital, por meio desta política, reforça seu comprometimento com a excelência, inovação e atendimento eficaz. Ao adotar práticas éticas, transparentes e centradas no cliente, a Unti Digital busca continuar liderando o setor de Inteligência Digital e Web, proporcionando soluções de qualidade e construindo relações comerciais sólidas e confiáveis.
            </p>
            <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-xs text-zinc-500">
                © {new Date().getFullYear()} UNTI Digital · Todos os direitos reservados.
              </p>
              <a href="mailto:contato@untidigital.com.br" className="text-xs font-semibold text-unti-blue hover:underline">
                contato@untidigital.com.br
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
