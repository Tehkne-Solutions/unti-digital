import { NextResponse } from "next/server";
import { getConfiguredEmailProviders, sendLeadEmail, type LeadOrigin } from "@/lib/email";

const WHATSAPP_NUMBER = "5519982809717";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    nome?: string;
    telefone?: string;
    email?: string;
    assunto?: string;
    empresa?: string;
    projeto?: string;
    mensagem?: string;
    origem?: LeadOrigin;
  };

  const hasValidText = (value?: string, minLength = 3) =>
    Boolean(value && value.trim().length >= minLength);

  const origin: LeadOrigin = body.origem === "lead-modal" ? "lead-modal" : "contact-page";
  const hasValidEmail = Boolean(body.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email));
  const hasStructuredLead = hasValidText(body.empresa) && hasValidText(body.projeto);
  const hasContactMessage = hasValidText(body.mensagem, 10);

  if (
    !hasValidText(body.nome) ||
    !hasValidText(body.telefone) ||
    !hasValidEmail ||
    (!hasStructuredLead && !hasContactMessage)
  ) {
    return NextResponse.json({ error: "Dados invalidos" }, { status: 400 });
  }

  const messageParts = [
    `Ola, sou ${body.nome}.`,
    body.assunto ? `Assunto: ${body.assunto}.` : null,
    body.empresa ? `Empresa: ${body.empresa}.` : null,
    body.projeto ? `Projeto: ${body.projeto}.` : null,
    body.mensagem ? `Mensagem: ${body.mensagem}.` : null,
    `E-mail: ${body.email}.`,
    `Telefone: ${body.telefone}.`
  ].filter(Boolean);

  const message = encodeURIComponent(messageParts.join(" "));
  const configuredProviders = getConfiguredEmailProviders();

  if (origin === "contact-page" && !configuredProviders.length) {
    return NextResponse.json(
      { error: "Nenhum provedor de e-mail configurado para o formulario de contato." },
      { status: 500 }
    );
  }

  let emailDelivery: Awaited<ReturnType<typeof sendLeadEmail>> | null = null;

  if (configuredProviders.length) {
    try {
      emailDelivery = await sendLeadEmail({
        nome: body.nome!.trim(),
        email: body.email!.trim(),
        telefone: body.telefone!.trim(),
        assunto: body.assunto?.trim(),
        empresa: body.empresa?.trim(),
        projeto: body.projeto?.trim(),
        mensagem: body.mensagem?.trim(),
        origem: origin
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Erro ao enviar e-mail.";

      if (origin === "contact-page") {
        return NextResponse.json({ error: message }, { status: 500 });
      }

      console.error("[LEAD-EMAIL-FALLBACK]", message);
    }
  }

  console.info("[LEAD-CAPTURED]", { origem: origin, emailProvider: emailDelivery?.provider ?? null, body });

  return NextResponse.json({
    ok: true,
    emailSent: Boolean(emailDelivery),
    emailProvider: emailDelivery?.provider ?? null,
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
  });
}
