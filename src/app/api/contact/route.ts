import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO = process.env.CONTACT_TO || "biblebaptistnb@gmail.com";
const FROM =
  process.env.CONTACT_FROM || "Bible Baptist Church <contact@elijahdesent.com>";

function clean(value: unknown, max = 5000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);
  const message = clean(body.message, 5000);
  const honeypot = clean(body.website, 200); // spam trap — real people leave this empty

  if (honeypot) return Response.json({ ok: true }); // silently drop bots

  if (!name || !message) {
    return Response.json(
      { error: "Please add your name and a message." },
      { status: 400 },
    );
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Email is not set up yet. Please call or text the church instead." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: email,
    subject: `Website message from ${name} — Bible Baptist Church`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "(not given)"}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(
      email,
    )}<br><strong>Phone:</strong> ${escapeHtml(phone || "(not given)")}</p><p style="white-space:pre-wrap">${escapeHtml(
      message,
    )}</p>`,
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json(
      { error: "Sorry, the message could not be sent. Please call or text the church." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
