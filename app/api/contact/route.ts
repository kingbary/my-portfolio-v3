import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>";
const TO = process.env.CONTACT_TO ?? "kingsleyakwa@gmail.com";
const OWNER = process.env.CONTACT_OWNER_NAME ?? "Kingsley";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: { name?: string; email?: string; msg?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const msg = (body.msg ?? "").trim();

  if (!name || !email || !msg) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email." },
      { status: 400 },
    );
  }
  if (msg.length > 5000) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 },
    );
  }

  try {
    // Notify the site owner. This is the critical send — its failure fails the request.
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${msg}`,
      html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p style="white-space:pre-wrap">${escapeHtml(msg)}</p>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send message." },
        { status: 502 },
      );
    }

    // Confirmation auto-reply to the sender. Best-effort: a failure here is logged
    // but does not fail the request, since the owner has already been notified.
    const { error: confirmError } = await resend.emails.send({
      from: FROM,
      to: email,
      replyTo: TO,
      subject: `Thanks for reaching out — I'll be in touch`,
      text:
        `Hi ${name},\n\n` +
        `Thanks for your message — it landed safely and I'll get back to you within 24 hours.\n\n` +
        `For your records, here's what you sent:\n\n${msg}\n\n` +
        `— ${OWNER}`,
      html:
        `<p>Hi ${escapeHtml(name)},</p>` +
        `<p>Thanks for your message — it landed safely and I'll get back to you within 24 hours.</p>` +
        `<p>For your records, here's what you sent:</p>` +
        `<blockquote style="white-space:pre-wrap;border-left:3px solid #ccc;margin:0;padding-left:12px;color:#555">${escapeHtml(msg)}</blockquote>` +
        `<p>— ${escapeHtml(OWNER)}</p>`,
    });

    if (confirmError) {
      console.error("Confirmation email error:", confirmError);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Could not send message." },
      { status: 500 },
    );
  }
}
