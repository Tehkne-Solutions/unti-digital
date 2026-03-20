import nodemailer from "nodemailer";

export type LeadOrigin = "contact-page" | "lead-modal";

export type LeadEmailPayload = {
  nome: string;
  email: string;
  telefone: string;
  assunto?: string;
  empresa?: string;
  projeto?: string;
  mensagem?: string;
  origem: LeadOrigin;
};

type EmailProvider = "smtp" | "resend";

export type EmailDeliveryResult = {
  provider: EmailProvider;
  messageId?: string;
};

const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO?.trim() || "contato@untidigital.com.br";

function getReplyTo(payload: LeadEmailPayload) {
  return `${payload.nome} <${payload.email}>`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isSmtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_PORT?.trim() &&
      process.env.SMTP_FROM_EMAIL?.trim()
  );
}

function isResendConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY?.trim() && process.env.RESEND_FROM_EMAIL?.trim()
  );
}

export function getConfiguredEmailProviders(): EmailProvider[] {
  const providers: EmailProvider[] = [];

  if (isSmtpConfigured()) {
    providers.push("smtp");
  }

  if (isResendConfigured()) {
    providers.push("resend");
  }

  return providers;
}

function buildSubject(payload: LeadEmailPayload) {
  const scope = payload.empresa?.trim() || payload.nome;
  return `[UNTI Digital] Novo contato de ${scope}`;
}

function buildEmailContent(payload: LeadEmailPayload) {
  const originLabel =
    payload.origem === "contact-page" ? "Pagina de contato" : "Lead modal / WhatsApp";

  const fields = [
    ["Origem", originLabel],
    ["Nome", payload.nome],
    ["E-mail", payload.email],
    ["Telefone", payload.telefone],
    ["Assunto", payload.assunto || "-"],
    ["Empresa", payload.empresa || "-"],
    ["Projeto", payload.projeto || "-"],
    ["Mensagem", payload.mensagem || "-"]
  ] as const;

  const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n");

  const htmlRows = fields
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;font-weight:600;color:#121212;background:#f8fafc;">${escapeHtml(
            label
          )}</td>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;color:#27272a;">${escapeHtml(
            value
          ).replaceAll("\n", "<br />")}</td>
        </tr>
      `
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;background:#f8fafc;padding:24px;color:#18181b;">
      <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:18px;overflow:hidden;">
        <div style="padding:24px 28px;background:linear-gradient(135deg,#0f2f73,#2563eb);color:#ffffff;">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;opacity:0.85;">UNTI Digital</p>
          <h1 style="margin:0;font-size:24px;line-height:1.2;">Novo lead recebido</h1>
        </div>
        <div style="padding:28px;">
          <p style="margin:0 0 18px;font-size:15px;line-height:1.6;color:#3f3f46;">
            Um novo contato foi enviado pelo site da UNTI Digital.
          </p>
          <table style="width:100%;border-collapse:collapse;border-spacing:0;">
            ${htmlRows}
          </table>
        </div>
      </div>
    </div>
  `;

  return { text, html };
}

async function sendWithSmtp(payload: LeadEmailPayload): Promise<EmailDeliveryResult> {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT);
  const from = process.env.SMTP_FROM_EMAIL?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();

  if (!host || !port || !from) {
    throw new Error("Configuracao SMTP incompleta.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: user && pass ? { user, pass } : undefined
  });

  const { html, text } = buildEmailContent(payload);
  const info = await transporter.sendMail({
    from,
    to: CONTACT_EMAIL_TO,
    subject: buildSubject(payload),
    html,
    text,
    replyTo: getReplyTo(payload)
  });

  return {
    provider: "smtp",
    messageId: info.messageId
  };
}

async function sendWithResend(payload: LeadEmailPayload): Promise<EmailDeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();

  if (!apiKey || !from) {
    throw new Error("Configuracao Resend incompleta.");
  }

  const { html, text } = buildEmailContent(payload);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [CONTACT_EMAIL_TO],
      subject: buildSubject(payload),
      html,
      text,
      reply_to: getReplyTo(payload)
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend falhou: ${errorText}`);
  }

  const payloadResponse = (await response.json()) as { id?: string };

  return {
    provider: "resend",
    messageId: payloadResponse.id
  };
}

export async function sendLeadEmail(
  payload: LeadEmailPayload
): Promise<EmailDeliveryResult> {
  const providers = getConfiguredEmailProviders();

  if (!providers.length) {
    throw new Error("Nenhum provedor de e-mail configurado.");
  }

  const errors: string[] = [];

  for (const provider of providers) {
    try {
      if (provider === "smtp") {
        return await sendWithSmtp(payload);
      }

      return await sendWithResend(payload);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Erro desconhecido";
      errors.push(`${provider}: ${message}`);
    }
  }

  throw new Error(errors.join(" | "));
}
