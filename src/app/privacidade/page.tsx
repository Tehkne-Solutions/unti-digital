import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Política de Privacidade | UNTI Digital",
  description: "Política de Privacidade da UNTI Digital. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.",
  alternates: { canonical: "/privacidade" },
};

const sections = [
  {
    id: "definicoes",
    title: "Seção 1 – Definições",
    definitions: [
      { label: "Dados Pessoais", text: "Significa qualquer informação que, direta ou indiretamente, identifique ou possa identificar uma pessoa natural, como por exemplo, nome, CPF, data de nascimento, endereço IP, dentre outros." },
      { label: "Dados Pessoais Sensíveis", text: "Significa qualquer informação que revele, em relação a uma pessoa natural, origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico." },
      { label: "Tratamento de Dados Pessoais", text: "Significa qualquer operação efetuada no âmbito dos Dados Pessoais, por meio de meios automáticos ou não, tal como a recolha, gravação, organização, estruturação, armazenamento, adaptação ou alteração, recuperação, consulta, utilização, divulgação por transmissão, disseminação ou disponibilização, harmonização ou associação, restrição, eliminação ou destruição." },
      { label: "Leis de Proteção de Dados", text: "Significa todas as disposições legais que regulam o Tratamento de Dados Pessoais, incluindo, porém sem se limitar, a Lei nº 13.709/18, Lei Geral de Proteção de Dados Pessoais (LGPD)." },
    ],
  },
  {
    id: "uso",
    title: "Seção 2 – Uso de Dados Pessoais",
    text: "Coletamos e usamos Dados Pessoais para gerenciar seu relacionamento conosco e melhor atendê-lo quando você estiver adquirindo produtos e/ou serviços na plataforma/site, personalizando e melhorando sua experiência. Exemplos de como usamos os dados incluem:",
    items: [
      "Viabilizar que você adquira produtos e/ou serviços na plataforma/site;",
      "Para confirmar ou corrigir as informações que temos sobre você;",
      "Para enviar informações que acreditamos ser do seu interesse;",
      "Para personalizar sua experiência de uso da plataforma/site;",
      "Para entrarmos em contato por um número de telefone e/ou endereço de e-mail fornecido.",
    ],
    extra: "Além disso, os Dados Pessoais fornecidos também podem ser utilizados na forma que julgarmos necessária ou adequada: (a) nos termos das Leis de Proteção de Dados; (b) para atender exigências de processo judicial; (c) para cumprir decisão judicial, decisão regulatória ou decisão de autoridades competentes; (d) para aplicar nossos Termos e Condições de Uso; (e) para proteger nossas operações; (f) para proteger direitos, privacidade, segurança nossos, seus ou de terceiros; (g) para detectar e prevenir fraude.",
  },
  {
    id: "nao-fornecimento",
    title: "Seção 3 – Não fornecimento de Dados Pessoais",
    text: "Não há obrigatoriedade em compartilhar os Dados Pessoais que solicitamos. No entanto, se você optar por não os compartilhar, em alguns casos, não poderemos fornecer a você acesso completo à plataforma/site, alguns recursos especializados ou ser capaz de prestar a assistência necessária ou, ainda, viabilizar a entrega do produto ou prestar o serviço contratado por você.",
  },
  {
    id: "dados-coletados",
    title: "Seção 4 – Dados coletados",
    text: "O público em geral poderá navegar na plataforma/site sem necessidade de qualquer cadastro e envio de Dados Pessoais. No entanto, algumas das funcionalidades da plataforma/site poderão depender de cadastro e envio de Dados Pessoais.",
    groups: [
      {
        subtitle: "No contato à plataforma/site, nós podemos coletar:",
        items: [
          "Dados de contato: nome, sobrenome, número de telefone, endereço, cidade, estado e endereço de e-mail;",
          "Informações enviadas: informações que você envia via formulário (dúvidas, reclamações, sugestões, críticas, elogios etc.).",
        ],
      },
      {
        subtitle: "Na navegação geral na plataforma/site, nós poderemos coletar:",
        items: [
          "Dados de localização: dados de geolocalização quando você acessa a plataforma/site;",
          "Preferências: informações sobre suas preferências e interesses em relação aos produtos/serviços;",
          "Dados de navegação: informações sobre suas visitas e atividades, incluindo o conteúdo com os quais você visualiza e interage, informações sobre o navegador e o dispositivo que você está usando, seu endereço IP e sua localização;",
          "Dados anônimos ou agregados: respostas anônimas para pesquisas ou informações anônimas e agregadas sobre como a plataforma/site é usufruída.",
        ],
      },
    ],
    note: "Nós não coletamos Dados Pessoais Sensíveis.",
  },
  {
    id: "compartilhamento",
    title: "Seção 5 – Compartilhamento de Dados Pessoais com terceiros",
    items: [
      "Com a(s) empresa(s) parceira(s) que você selecionar ou optar em enviar os seus dados, bem como com provedores de serviços ou parceiros para gerenciar ou suportar certos aspectos de nossas operações comerciais em nosso nome;",
      "Com terceiros, com o objetivo de nos ajudar a gerenciar a plataforma/site;",
      "Com terceiros, caso ocorra qualquer reorganização, fusão, venda, joint venture, cessão, transmissão ou transferência de toda ou parte da nossa empresa, ativo ou capital.",
    ],
  },
  {
    id: "transferencias",
    title: "Seção 6 – Transferências internacionais de dados",
    text: "Dados Pessoais e informações de outras naturezas coletadas por nós podem ser transferidos ou acessados por entidades pertencentes ao grupo corporativo das empresas parceiras em todo o mundo de acordo com esta Política de Privacidade.",
  },
  {
    id: "coleta-automatica",
    title: "Seção 7 – Coleta automática de Dados Pessoais",
    text: "Quando você visita a plataforma/site, ela pode armazenar ou recuperar informações em seu navegador, principalmente na forma de cookies, que são arquivos de texto contendo pequenas quantidades de informação. Essas informações podem ser sobre você, suas preferências ou seu dispositivo e são usadas principalmente para que a plataforma/site funcione como você espera.",
    groups: [
      {
        subtitle: "Formas de coleta automática:",
        items: [
          "Por meio do navegador ou do dispositivo: algumas informações são coletadas pela maior parte dos navegadores ou automaticamente por meio de dispositivos de acesso à internet, como o tipo de computador, resolução da tela, nome e versão do sistema operacional, modelo e fabricante do dispositivo, idioma e tipo de navegador.",
          "Uso de cookies: informações sobre o seu uso da plataforma/site podem ser coletadas por terceiros a partir de cookies. Cookies são informações armazenadas diretamente no computador que você está utilizando.",
          "Uso de pixel tags e outras tecnologias similares: pixel tags (também conhecidos como Web beacons e GIFs invisíveis) podem ser utilizados para rastrear ações de usuários da plataforma/site, medir o sucesso das nossas campanhas de marketing e coletar dados estatísticos.",
        ],
      },
    ],
  },
  {
    id: "cookies",
    title: "Seção 8 – Categorias de cookies",
    items: [
      "Estritamente necessários: estes cookies permitem que você navegue pelo site e desfrute de recursos essenciais com segurança, como cookies de autenticação e proteção contra logins fraudulentos.",
      "Desempenho: os cookies desta categoria coletam informações de forma codificada e anônima relacionadas à nossa plataforma/site, como o número de visitantes de uma página específica e origem das visitas.",
      "Funcionalidade: estes cookies são utilizados para lembrar definições de preferências do usuário com o objetivo de melhorar a sua visita no nosso site.",
      "Publicidade: utilizamos cookies com o objetivo de criar campanhas segmentadas e entregar anúncios de acordo com o seu perfil de consumo.",
    ],
  },
  {
    id: "direitos",
    title: "Seção 9 – Direitos do Usuário",
    text: "Você pode, a qualquer momento, requerer:",
    items: [
      "Confirmação de que seus Dados Pessoais estão sendo tratados;",
      "Acesso aos seus Dados Pessoais;",
      "Correções a dados incompletos, inexatos ou desatualizados;",
      "Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto em lei;",
      "Portabilidade de Dados Pessoais a outro prestador de serviços, contanto que isso não afete nossos segredos industriais e comerciais;",
      "Eliminação de Dados Pessoais tratados com seu consentimento, na medida do permitido em lei;",
      "Informações sobre as entidades às quais seus Dados Pessoais tenham sido compartilhados;",
      "Revogação do consentimento.",
    ],
  },
  {
    id: "seguranca",
    title: "Seção 10 – Segurança dos Dados Pessoais",
    text: "Buscamos adotar as medidas técnicas e organizacionais previstas pelas Leis de Proteção de Dados adequadas para proteção dos Dados Pessoais na nossa organização. Infelizmente, nenhuma transmissão ou sistema de armazenamento de dados tem a garantia de serem 100% seguros. Caso tenha motivos para acreditar que sua interação conosco tenha deixado de ser segura, favor nos notificar imediatamente.",
  },
  {
    id: "links",
    title: "Seção 11 – Links de hipertexto para outros sites e redes sociais",
    text: "A plataforma/site poderá, de tempos a tempos, conter links de hipertexto que redirecionará você para sites das redes dos nossos parceiros, anunciantes, fornecedores etc. Se você clicar em um desses links, lembre-se que cada site possui as suas próprias práticas de privacidade e que não somos responsáveis por essas políticas. Consulte as referidas políticas antes de enviar quaisquer Dados Pessoais para esses sites.",
  },
  {
    id: "atualizacoes",
    title: "Seção 12 – Atualizações desta Política de Privacidade",
    text: "Se modificarmos nossa Política de Privacidade, publicaremos o novo texto na plataforma/site, com a data de revisão atualizada. Podemos alterar esta Política de Privacidade a qualquer momento. Sua utilização da plataforma/site após as alterações significa que aceitou as Políticas de Privacidade revisadas.",
  },
  {
    id: "encarregado",
    title: "Seção 13 – Encarregado do tratamento dos Dados Pessoais",
    text: "Caso pretenda exercer qualquer um dos direitos previstos nesta Política de Privacidade e/ou nas Leis de Proteção de Dados, ou resolver quaisquer dúvidas relacionadas ao Tratamento de seus Dados Pessoais, favor contatar-nos em contato@untidigital.com.br.",
  },
];

export default function PrivacidadePage() {
  return (
    <div className="bg-white text-zinc-900">
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/40 to-white py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-unti-blue">Legal</p>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-zinc-900 md:text-5xl">
              Política de Privacidade
            </h1>
            <p className="text-sm text-zinc-500">Válida a partir de Abril de 2026 · UNTI Digital</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-zinc-100 py-12">
        <Container>
          <div className="max-w-3xl space-y-4 leading-relaxed text-zinc-600">
            <p>
              A <strong className="text-zinc-900">Unti Digital</strong>, pessoa jurídica de direito privado, leva a sua privacidade a sério e zela pela segurança e proteção de dados de todos os seus clientes, parceiros, fornecedores e usuários do site{" "}
              <strong className="text-zinc-900">untidigital.com.br</strong>.
            </p>
            <p>
              Esta Política de Privacidade destina-se a informá-lo sobre o modo como utilizamos e divulgamos informações coletadas em suas visitas à nossa plataforma e em mensagens que trocamos com você.
            </p>
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm text-zinc-700">
              <strong className="text-xs uppercase tracking-wide text-zinc-900">Aviso importante:</strong>
              <p className="mt-2">
                Ao acessar o site, enviar comunicações ou fornecer qualquer tipo de dado pessoal, você declara estar ciente e de acordo com os termos desta Política de Privacidade.
              </p>
            </div>
            <p>
              Se você tiver alguma dúvida sobre o uso de Dados Pessoais, entre em contato com{" "}
              <a href="mailto:contato@untidigital.com.br" className="font-medium text-unti-blue hover:underline">
                contato@untidigital.com.br
              </a>.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="max-w-3xl space-y-12">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="mb-4 border-b border-zinc-100 pb-3 text-xl font-bold text-zinc-900">
                  {section.title}
                </h2>

                {"text" in section && section.text && (
                  <p className="mb-4 leading-relaxed text-zinc-600">{section.text}</p>
                )}

                {"definitions" in section && section.definitions && (
                  <div className="space-y-4">
                    {section.definitions.map((item) => (
                      <div key={item.label} className="flex gap-3">
                        <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-unti-blue" />
                        <p className="text-sm leading-relaxed text-zinc-600">
                          <strong className="text-zinc-900">{item.label}:</strong> {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {"items" in section && section.items && (
                  <ul className="mt-2 space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-zinc-600">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-unti-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {"extra" in section && section.extra && (
                  <p className="mt-4 text-sm leading-relaxed text-zinc-600">{section.extra}</p>
                )}

                {"groups" in section && section.groups && (
                  <div className="mt-4 space-y-6">
                    {section.groups.map((group) => (
                      <div key={group.subtitle}>
                        <p className="mb-3 text-sm font-semibold text-zinc-800">{group.subtitle}</p>
                        <ul className="space-y-2">
                          {group.items.map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm leading-relaxed text-zinc-600">
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-zinc-300" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {"note" in section && section.note && (
                  <p className="mt-4 text-sm font-semibold text-unti-blue">{section.note}</p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-100 bg-zinc-50 py-10">
        <Container>
          <div className="flex max-w-3xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} UNTI Digital · Todos os direitos reservados.
            </p>
            <a href="mailto:contato@untidigital.com.br" className="text-xs font-semibold text-unti-blue hover:underline">
              contato@untidigital.com.br
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
