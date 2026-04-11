import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "How ML engineers, compliance officers, and CISOs use Providex for AI agent governance, audit readiness, and incident forensics.",
};

export default function UseCasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-20 grid-pattern">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="brand" className="mb-4">Use Cases</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Built for your role
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Whether you build the agents, own the compliance, or manage the
              risk — Providex gives you the visibility you need.
            </p>
          </div>
        </div>
      </section>

      {/* ============ ML ENGINEERS ============ */}
      <SectionWrapper id="engineers">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="brand" className="mb-4">For ML Engineers</Badge>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight mb-4">
              Instrument your pipeline. Catch misbehaviour early.
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              You build the agents. You need to know what they&apos;re doing in
              production — without building observability infrastructure from
              scratch.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Instrument your LangGraph pipeline",
                  desc: "One decorator per tool call. Full provenance captured automatically. No changes to your agent logic.",
                },
                {
                  title: "Debug with session replay",
                  desc: "Step through any agent session action by action. See the exact inputs, outputs, and decisions at each step.",
                },
                {
                  title: "Catch agent misbehaviour",
                  desc: "Anomaly detection flags unusual patterns — unexpected tool calls, authorization bypasses, or output drift.",
                },
                {
                  title: "Zero-friction integration",
                  desc: "pip install providex. Add @trace. Run your agent. First provenance record in under 10 minutes.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-surface">
            <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">Typical workflow</div>
            <div className="space-y-4">
              {[
                { step: "1", label: "Install SDK", detail: "pip install providex" },
                { step: "2", label: "Add decorator", detail: "@trace(action='tool_name')" },
                { step: "3", label: "Run agent", detail: "Provenance records flow automatically" },
                { step: "4", label: "Debug issues", detail: "Session replay shows exact execution path" },
                { step: "5", label: "Hand to compliance", detail: "They pull their own reports" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-sm shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{item.label}</div>
                    <div className="text-xs text-text-muted font-mono">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </SectionWrapper>

      {/* ============ COMPLIANCE ============ */}
      <SectionWrapper dark id="compliance">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Card dark>
              <div className="text-xs font-mono text-white/40 uppercase tracking-wider mb-4">Compliance dashboard</div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm font-medium">EU AI Act Readiness</span>
                  <Badge variant="warning">In Progress</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm font-medium">SOC 2 Type II</span>
                  <Badge variant="success">Compliant</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-sm font-medium">HIPAA §164.312</span>
                  <Badge variant="success">Compliant</Badge>
                </div>
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="text-xs text-white/40">Last audit report generated</div>
                  <div className="text-sm font-medium">March 28, 2026 — SOC 2 Type II</div>
                  <div className="text-xs text-white/30">Exported to PDF (Big 4 format) by J. Chen</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="order-1 lg:order-2">
            <Badge variant="success" className="mb-4">For Compliance Officers</Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              EU AI Act readiness. SOC 2 audit prep. One click.
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              You own audit readiness. You shouldn&apos;t need to file an engineering
              ticket to answer an auditor&apos;s question.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "EU AI Act Article 13/14",
                  desc: "Automatic transparency and human oversight documentation. Map agent actions to specific regulatory requirements.",
                },
                {
                  title: "SOC 2 Type II audit prep",
                  desc: "Continuous compliance monitoring with pre-built control mappings. Evidence collection runs automatically.",
                },
                {
                  title: "One-click report generation",
                  desc: "Export audit-ready reports in PDF, CSV, and Big 4 format. No engineering help needed.",
                },
                {
                  title: "Self-service access",
                  desc: "Query agent activity, filter by risk level, and generate reports without calling anyone.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ============ SECURITY / CISO ============ */}
      <SectionWrapper id="security">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="warning" className="mb-4">For CISOs &amp; Security</Badge>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight mb-4">
              Agent anomaly detection. Authorization audit trail. Incident forensics.
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              You own the risk posture. When an agent does something unexpected,
              you need to know immediately — and have the evidence to investigate.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Anomaly detection",
                  desc: "ML-powered behavioral analysis flags unusual agent actions — unexpected tool calls, permission escalation, or output patterns that deviate from baseline.",
                },
                {
                  title: "Authorization audit trail",
                  desc: "Complete record of every authorization decision: who approved, when, what context, and what happened after. Tamper-evident by design.",
                },
                {
                  title: "Incident forensics",
                  desc: "When something goes wrong, replay the entire agent session. See exactly what the agent decided, what tools it called, and where the chain of accountability broke.",
                },
                {
                  title: "Real-time alerting",
                  desc: "Configure alerts for high-risk actions, authorization failures, and anomalous patterns. Integrate with your existing SIEM.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-warning/10 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-warning" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card>
            <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">Anomaly alert</div>
            <div className="space-y-4">
              <div className="p-4 bg-warning/5 border border-warning/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-warning" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span className="text-sm font-semibold text-warning">Unusual tool access pattern</span>
                </div>
                <p className="text-xs text-text-muted mb-3">
                  Agent &quot;data-pipeline-v3&quot; called <code className="text-xs bg-surface px-1 py-0.5 rounded font-mono">shell_execute</code> 47 times in the last 5 minutes. Baseline: 2-3 calls per session.
                </p>
                <div className="flex gap-2">
                  <Badge variant="warning">High Risk</Badge>
                  <Badge>Session #a8f2c1</Badge>
                </div>
              </div>
              <div className="p-4 bg-surface border border-border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-sm font-semibold text-success">Resolved: Unauthorized API scope</span>
                </div>
                <p className="text-xs text-text-muted">
                  Agent &quot;customer-support-bot&quot; attempted to access admin API scope. Blocked by authorization gate. Escalated to @security.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-navy py-20 grid-pattern">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
            See Providex in action
          </h2>
          <p className="text-white/50 mb-8 max-w-lg mx-auto">
            Join our design partner program and get hands-on with the SDK and
            dashboard.
          </p>
          <Button href="/design-partners" size="lg">
            Apply Now
          </Button>
        </div>
      </section>
    </>
  );
}
