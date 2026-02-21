import { NextResponse } from "next/server";

const WHATSAPP_NUMBER = "5511999999999";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    nome?: string;
    telefone?: string;
    email?: string;
    empresa?: string;
    projeto?: string;
  };

  const required = [body.nome, body.telefone, body.email, body.empresa, body.projeto];
  if (required.some((value) => !value || value.trim().length < 3)) {
    return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
  }

  const message = encodeURIComponent(
    `Olá, sou ${body.nome} da empresa ${body.empresa}. Projeto: ${body.projeto}. E-mail: ${body.email}. Telefone: ${body.telefone}`
  );

  // Primeira fase: placeholder para integração futura com Google Sheets/CRM.
  console.info("[LEAD-FIRST-PHASE]", body);

  return NextResponse.json({
    ok: true,
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
  });
}
