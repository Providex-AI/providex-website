import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const sdkSnippet = `from providex import trace, authorize

@trace(action="send_email", require_auth=True)
async def send_email(to: str, subject: str, body: str):
    """Every call is logged with full provenance:
    who triggered it, what input was used,
    what output was produced, and whether
    a human authorized it."""
    auth = await authorize(
        action="send_email",
        context={"to": to, "subject": subject}
    )
    if auth.approved:
        return await email_client.send(to, subject, body)`;

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative bg-navy min-h-[90vh] flex items-center grid-pattern overflow-hidden">
        {/* Subtle geometric decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 border border-brand/30 rounded-full" />
          <div className="absolute top-40 right-40 w-64 h-64 border border-brand/20 rounded-full" />
          <div className="absolute bottom-20 right-10 w-80 h-80 border border-brand/10 rounded-full" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-20 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="brand" className="mb-6">
              Now accepting design partners
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Provenance. Authorization.{" "}
              <span className="text-brand-light">Accountability.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl">
              The accountability platform for AI agents in production.
              Tamper-evident provenance records, authorization audit trails,
              and compliance intelligence — so you can always prove what your
              agents did and who authorized it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/design-partners" size="lg">
                Get Early Access
              </Button>
              <Button href="https://github.com/Providex-AI" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROBLEM ============ */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">
            Your AI agents are taking actions. Can you prove what they did?
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            When an AI agent calls an API, writes to a database, or sends an
            email — there is typically no structured record of what happened,
            what triggered it, or whether a human authorized it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
              ),
              title: "No audit trail",
              description:
                "Agent actions are buried in unstructured logs. When an auditor asks what happened, you call an engineer.",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                </svg>
              ),
              title: "No authorization record",
              description:
                "Was a human in the loop? Did anyone approve that API call? Most agent frameworks don't record this.",
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              ),
              title: "No compliance mapping",
              description:
                "Regulators are starting to ask. SOC 2, HIPAA, EU AI Act — most companies have nothing to show them.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <div className="text-brand mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* ============ INCIDENT CALLOUT ============ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-xl border border-warning/30 bg-warning/5 p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C27803" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
              </div>
              <div>
                <Badge variant="warning" className="mb-3">
                  Real-world incident
                </Badge>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  An AI agent opened a reverse SSH tunnel — and governance tooling missed it entirely
                </h3>
                <p className="text-text-muted leading-relaxed mb-2">
                  In a documented incident involving Alibaba Cloud infrastructure, an AI coding agent
                  autonomously established a reverse SSH tunnel without instruction. The firewall
                  caught it — not the governance layer. There was no structured record of the
                  agent&apos;s decision to take that action, no authorization checkpoint, and no
                  audit trail.<sup className="text-brand">1</sup>
                </p>
                <p className="text-sm text-text-muted font-medium mb-4">
                  This is the accountability gap Providex closes.
                </p>
                <p className="text-xs text-text-muted/60 leading-relaxed">
                  <sup>1</sup> ROCK &amp; ROLL &amp; IFLOW &amp; DT Joint Team. (2025).{" "}
                  <em>Let it flow: Agentic crafting on rock and roll, building the ROME model within an open agentic learning ecosystem</em>{" "}
                  (arXiv Preprint).{" "}
                  <a
                    href="https://arxiv.org/pdf/2512.24873"
                    className="underline hover:text-brand transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    arxiv.org/pdf/2512.24873
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SOLUTION — HOW IT WORKS ============ */}
      <SectionWrapper dark>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How Providex works
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Three steps from zero visibility to full compliance readiness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Instrument",
              description:
                "Add the Providex decorator to your agent functions. One line of code per action. Works with LangGraph, CrewAI, and AutoGen.",
            },
            {
              step: "02",
              title: "Capture",
              description:
                "Every agent action produces a tamper-evident provenance record: tool called, input, output, authorization status, timestamp, and session context.",
            },
            {
              step: "03",
              title: "Comply",
              description:
                "Records are automatically mapped to SOC 2, HIPAA, and EU AI Act requirements. Generate audit-ready reports with one click.",
            },
          ].map((item) => (
            <div key={item.step} className="relative">
              <div className="text-5xl font-extrabold text-brand/20 mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/50 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ============ TWO-AUDIENCE SPLIT ============ */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">
            Built for engineers. Ready for auditors.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Developer card */}
          <Card className="flex flex-col">
            <Badge variant="brand" className="mb-4 self-start">
              For Developers
            </Badge>
            <h3 className="text-2xl font-bold mb-3">
              Drop-in SDK. Under 10 minutes.
            </h3>
            <p className="text-text-muted mb-6 leading-relaxed">
              Open-source Python SDK. Add provenance logging and human-in-the-loop
              authorization with a single decorator. Less than 5ms overhead per
              call.
            </p>
            <div className="mb-6 flex-1">
              <CodeBlock
                code={sdkSnippet}
                language="python"
                filename="agent.py"
              />
            </div>
            <div className="flex gap-3">
              <Button href="https://github.com/Providex-AI" variant="outline" size="sm">
                View on GitHub
              </Button>
              <Button href="/product#sdk" variant="ghost" size="sm">
                SDK docs &rarr;
              </Button>
            </div>
          </Card>

          {/* Compliance card */}
          <Card className="flex flex-col">
            <Badge variant="success" className="mb-4 self-start">
              For Compliance
            </Badge>
            <h3 className="text-2xl font-bold mb-3">
              Audit-ready. No engineering ticket.
            </h3>
            <p className="text-text-muted mb-6 leading-relaxed">
              Compliance dashboard that maps every agent action to SOC 2 Type II,
              HIPAA &sect;164.312, and EU AI Act Article 13/14. One-click export
              in Big 4 format.
            </p>
            <div className="mb-6 flex-1 rounded-xl border border-border bg-surface p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Compliance Coverage</span>
                  <Badge variant="success">3 frameworks</Badge>
                </div>
                <div className="space-y-3">
                  {[
                    { framework: "SOC 2 Type II", coverage: 94 },
                    { framework: "HIPAA §164.312", coverage: 89 },
                    { framework: "EU AI Act Art. 13/14", coverage: 78 },
                  ].map((item) => (
                    <div key={item.framework}>
                      <div className="flex justify-between text-xs text-text-muted mb-1">
                        <span>{item.framework}</span>
                        <span>{item.coverage}%</span>
                      </div>
                      <div className="h-2 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-success rounded-full"
                          style={{ width: `${item.coverage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-2 flex gap-2">
                  <Badge>Session Replay</Badge>
                  <Badge>Anomaly Detection</Badge>
                  <Badge>Export PDF</Badge>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button href="/product#dashboard" variant="outline" size="sm">
                See Dashboard
              </Button>
              <Button href="/use-cases" variant="ghost" size="sm">
                Use cases &rarr;
              </Button>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      {/* ============ DESIGN PARTNER CTA ============ */}
      <section className="bg-navy py-20 md:py-28 grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy to-navy" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="brand" className="mb-6">
              Limited to 10 companies
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              We&apos;re looking for 10 design partners
            </h2>
            <p className="text-lg text-white/50 mb-10 leading-relaxed">
              Get free Pro access for 12 months, direct founder access, and real
              influence over our roadmap. In return, instrument one pipeline,
              give us weekly feedback, and join 30-minute debrief calls.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10 text-left">
              {[
                {
                  title: "What you get",
                  items: [
                    "Free Pro tier (12 months)",
                    "Direct founder access",
                    "Roadmap influence",
                  ],
                },
                {
                  title: "What we need",
                  items: [
                    "Real pipeline instrumented",
                    "Weekly feedback sessions",
                    "30-min debrief calls",
                  ],
                },
                {
                  title: "Ideal partner",
                  items: [
                    "Running AI agents in prod",
                    "Compliance requirements",
                    "Engineering + compliance team",
                  ],
                },
              ].map((col) => (
                <div key={col.title}>
                  <h3 className="text-sm font-semibold text-white/80 mb-3">
                    {col.title}
                  </h3>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-white/40 flex items-start gap-2"
                      >
                        <svg
                          className="w-4 h-4 text-success mt-0.5 shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Button href="/design-partners" size="lg">
              Apply to the Design Partner Program
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
