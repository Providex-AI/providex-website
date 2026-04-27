import { Resend } from "resend";

type ApplicationPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  role?: unknown;
  framework?: unknown;
  useCase?: unknown;
  consent?: unknown;
  // Honeypot field — real users never see or fill this.
  website?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TO_EMAIL = process.env.DESIGN_PARTNER_TO_EMAIL ?? "info@getprovidex.com";
const FROM_EMAIL =
  process.env.DESIGN_PARTNER_FROM_EMAIL ?? "Providex <info@getprovidex.com>";

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: ApplicationPayload;
  try {
    body = (await request.json()) as ApplicationPayload;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Silent honeypot: bots that auto-fill every field land here.
  // Pretend success so they don't learn to bypass.
  if (asString(body.website).length > 0) {
    return Response.json({ ok: true });
  }

  const name = asString(body.name);
  const email = asString(body.email);
  const company = asString(body.company);
  const role = asString(body.role);
  const framework = asString(body.framework);
  const useCase = asString(body.useCase);
  const consent = body.consent === true;

  const errors: string[] = [];
  if (!name) errors.push("name is required");
  if (!email) errors.push("email is required");
  else if (!EMAIL_RE.test(email)) errors.push("email is invalid");
  if (!company) errors.push("company is required");
  if (!role) errors.push("role is required");
  if (!framework) errors.push("framework is required");
  if (!useCase) errors.push("useCase is required");
  if (!consent) errors.push("consent is required");

  if (
    name.length > 200 ||
    email.length > 200 ||
    company.length > 200 ||
    role.length > 200 ||
    framework.length > 100
  ) {
    errors.push("one or more fields exceed length limits");
  }
  if (useCase.length > 5000) errors.push("useCase is too long");

  if (errors.length > 0) {
    return Response.json(
      { error: "Invalid payload", details: errors },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return Response.json(
      { error: "Email service is not configured" },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  const subject = `Design Partner application — ${name} (${company})`;
  const text = [
    "New design partner application",
    "",
    `Name:      ${name}`,
    `Email:     ${email}`,
    `Company:   ${company}`,
    `Role:      ${role}`,
    `Framework: ${framework}`,
    "",
    "Use case:",
    useCase,
    "",
    "Consent: yes",
  ].join("\n");

  const html = `<!doctype html>
<html>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; color: #0E2439;">
    <h2 style="color: #0E2439; margin: 0 0 24px;">New design partner application</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 6px 0; font-weight: 600; vertical-align: top; width: 110px;">Name</td><td style="padding: 6px 0;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding: 6px 0; font-weight: 600; vertical-align: top;">Email</td><td style="padding: 6px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #1B6B5A;">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding: 6px 0; font-weight: 600; vertical-align: top;">Company</td><td style="padding: 6px 0;">${escapeHtml(company)}</td></tr>
      <tr><td style="padding: 6px 0; font-weight: 600; vertical-align: top;">Role</td><td style="padding: 6px 0;">${escapeHtml(role)}</td></tr>
      <tr><td style="padding: 6px 0; font-weight: 600; vertical-align: top;">Framework</td><td style="padding: 6px 0;">${escapeHtml(framework)}</td></tr>
    </table>
    <h3 style="margin: 24px 0 8px;">Use case</h3>
    <p style="white-space: pre-wrap; line-height: 1.6; margin: 0;">${escapeHtml(useCase)}</p>
    <p style="margin: 24px 0 0; font-size: 12px; color: #5A7184;">Consent: yes &middot; Submitted via the Providex design partner form. Reply directly to respond to the applicant.</p>
  </body>
</html>`;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });
    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Failed to send application" },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Resend exception:", err);
    return Response.json(
      { error: "Failed to send application" },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
