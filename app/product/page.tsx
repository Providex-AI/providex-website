import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Providex SDK and compliance dashboard. Provenance logging for AI agents with < 5ms overhead and one-click audit reports.",
};

const decoratorSnippet = `from providex import trace, authorize
from langchain.tools import tool

@trace(action="query_database", require_auth=True)
@tool
def query_database(query: str) -> dict:
    """Query the customer database."""
    auth = await authorize(
        action="query_database",
        context={"query": query, "risk": "high"}
    )
    if not auth.approved:
        return {"error": "Authorization denied"}

    result = db.execute(query)
    return {"rows": result.rows, "count": len(result)}`;

const configSnippet = `# providex.yaml — zero-code configuration
version: "1.0"
project: "my-agent-pipeline"

capture:
  inputs: true
  outputs: true
  timestamps: true
  session_context: true

authorization:
  default_policy: "require_human"
  escalation_threshold: "high"

export:
  format: ["json", "soc2", "hipaa"]
  destination: "s3://my-audit-bucket"`;

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-20 grid-pattern">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="brand" className="mb-4">Product</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Two paths to{" "}
              <span className="text-brand-light">AI accountability</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Start with the open-source SDK. Graduate to the compliance
              dashboard when regulators come knocking.
            </p>
          </div>
        </div>
      </section>

      {/* ============ PATH A: SDK ============ */}
      <SectionWrapper id="sdk">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Badge variant="brand" className="mb-4">Path A</Badge>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight mb-4">
              Open-Source Python SDK
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              Drop-in provenance logging and human-in-the-loop authorization
              for any AI agent pipeline. Under 10 minutes to first record.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Decorator pattern",
                  desc: "Wrap any function with @trace to capture inputs, outputs, and authorization status automatically.",
                },
                {
                  title: "< 5ms overhead",
                  desc: "Async, batched writes. Your agents won't notice the difference.",
                },
                {
                  title: "Framework support",
                  desc: "Works with LangGraph, CrewAI, AutoGen, and any Python-based agent framework.",
                },
                {
                  title: "Tamper-evident records",
                  desc: "Every provenance record is hash-chained. Modifications are detectable.",
                },
                {
                  title: "Human-in-the-loop",
                  desc: "Built-in authorization checkpoints. Gate high-risk actions with human approval.",
                },
                {
                  title: "< 10 min setup",
                  desc: "pip install providex, add a decorator, run your agent. That's it.",
                },
              ].map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">{feature.title}</h3>
                    <p className="text-sm text-text-muted">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <CodeBlock code={decoratorSnippet} language="python" filename="tools.py" />
            <CodeBlock code={configSnippet} language="yaml" filename="providex.yaml" />
          </div>
        </div>
      </SectionWrapper>

      {/* ============ PATH B: DASHBOARD ============ */}
      <SectionWrapper dark id="dashboard">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Badge variant="success" className="mb-4">Path B</Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Compliance Dashboard
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              Ingest provenance records. Map to compliance frameworks. Export
              audit-ready reports. No engineering ticket required.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Compliance framework mapping",
                  desc: "Automatic mapping to SOC 2 Type II, HIPAA §164.312, and EU AI Act Article 13/14.",
                },
                {
                  title: "One-click audit reports",
                  desc: "Export compliance reports in PDF, CSV, and Big 4 format. Ready for external auditors.",
                },
                {
                  title: "Anomaly detection",
                  desc: "ML-powered detection of unusual agent behavior patterns. Alert before incidents escalate.",
                },
                {
                  title: "Session replay",
                  desc: "Step through any agent session action by action. See exactly what happened and why.",
                },
                {
                  title: "Real-time monitoring",
                  desc: "Live view of all agent actions across your organization. Filter by risk level, framework, or team.",
                },
                {
                  title: "Role-based access",
                  desc: "Compliance officers see reports. Engineers see traces. CISOs see risk posture. Everyone gets what they need.",
                },
              ].map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-white/40">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="rounded-xl border border-white/10 bg-code-bg p-6 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-white/30 ml-2 font-mono">Providex Dashboard</span>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Actions Today", value: "12,847", change: "+23%" },
                { label: "Auth Rate", value: "99.2%", change: "Healthy" },
                { label: "Anomalies", value: "3", change: "2 resolved" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 rounded-lg p-3">
                  <div className="text-xs text-white/40 mb-1">{stat.label}</div>
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-success">{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Compliance bars */}
            <div className="space-y-3">
              <div className="text-xs text-white/50 font-medium">Compliance Coverage</div>
              {[
                { fw: "SOC 2 Type II", pct: 94 },
                { fw: "HIPAA §164.312", pct: 89 },
                { fw: "EU AI Act Art. 13", pct: 78 },
              ].map((item) => (
                <div key={item.fw}>
                  <div className="flex justify-between text-xs text-white/40 mb-1">
                    <span>{item.fw}</span>
                    <span>{item.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-success rounded-full" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Recent actions */}
            <div className="space-y-2">
              <div className="text-xs text-white/50 font-medium">Recent Agent Actions</div>
              {[
                { action: "query_database", status: "authorized", time: "2s ago" },
                { action: "send_email", status: "authorized", time: "14s ago" },
                { action: "write_file", status: "pending", time: "21s ago" },
                { action: "api_call", status: "authorized", time: "34s ago" },
              ].map((a, i) => (
                <div key={i} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                  <span className="text-xs font-mono text-white/70">{a.action}</span>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs ${a.status === "authorized" ? "text-success" : "text-warning"}`}>
                      {a.status}
                    </span>
                    <span className="text-xs text-white/30">{a.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ============ ARCHITECTURE ============ */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-primary tracking-tight mb-4">
            Architecture
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Simple, extensible, and designed to stay out of your critical path.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl border border-border bg-white p-8 md:p-12">
            {/* Architecture diagram as styled divs */}
            <div className="space-y-8">
              {/* Agent layer */}
              <div>
                <div className="text-xs font-mono text-text-muted mb-3 uppercase tracking-wider">Your Agent Pipeline</div>
                <div className="flex gap-4 flex-wrap">
                  {["LangGraph Agent", "CrewAI Agent", "AutoGen Agent", "Custom Agent"].map((agent) => (
                    <div key={agent} className="px-4 py-3 rounded-lg bg-surface border border-border text-sm font-medium flex-1 min-w-[140px] text-center">
                      {agent}
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg width="24" height="32" viewBox="0 0 24 32" fill="none" stroke="#6B7B96" strokeWidth="2" strokeLinecap="round">
                  <line x1="12" y1="0" x2="12" y2="28" />
                  <polyline points="6 22 12 28 18 22" />
                </svg>
              </div>

              {/* Providex SDK layer */}
              <div>
                <div className="text-xs font-mono text-brand mb-3 uppercase tracking-wider">Providex SDK</div>
                <div className="flex gap-4 flex-wrap">
                  {["@trace Decorator", "Authorization Gate", "Provenance Writer", "Hash Chain"].map((mod) => (
                    <div key={mod} className="px-4 py-3 rounded-lg bg-brand/5 border border-brand/20 text-sm font-medium flex-1 min-w-[140px] text-center text-brand">
                      {mod}
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg width="24" height="32" viewBox="0 0 24 32" fill="none" stroke="#6B7B96" strokeWidth="2" strokeLinecap="round">
                  <line x1="12" y1="0" x2="12" y2="28" />
                  <polyline points="6 22 12 28 18 22" />
                </svg>
              </div>

              {/* Dashboard layer */}
              <div>
                <div className="text-xs font-mono text-success mb-3 uppercase tracking-wider">Providex Dashboard</div>
                <div className="flex gap-4 flex-wrap">
                  {["Compliance Mapper", "Anomaly Detector", "Session Replay", "Report Export"].map((mod) => (
                    <div key={mod} className="px-4 py-3 rounded-lg bg-success/5 border border-success/20 text-sm font-medium flex-1 min-w-[140px] text-center text-success">
                      {mod}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ============ PRICING ============ */}
      <SectionWrapper dark id="pricing">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Packaging &amp; Pricing
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Three editions designed to meet you where you are — from early experimentation to full enterprise governance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Developer / Team Edition",
              subtitle: "Land",
              description: "For platform teams and advanced developers piloting agentic workflows.",
              features: [
                "Core SDKs",
                "Agent inventory",
                "Session and decision timelines",
                "Basic policy-as-code checks",
                "Lightweight approval flows",
              ],
              value: "Faster debugging and safer experimentation before enterprise-wide rollout.",
              cta: "Get Started",
              highlighted: false,
            },
            {
              name: "Enterprise Standard",
              subtitle: "Expand",
              description: "For AI governance and risk teams in regulated enterprises.",
              features: [
                "All Developer Edition features",
                "EU AI Act-aligned logging profiles and report templates",
                "Integrations with GRC, AI governance tools, and major SIEMs",
                "Role-based access controls",
                "Data residency options",
                "Advanced retention policies",
              ],
              value: "Enterprise-grade governance with compliance frameworks built in.",
              cta: "Get Early Access",
              highlighted: true,
            },
            {
              name: "Enterprise Custom",
              subtitle: "Security & Compliance Add-On",
              description: "For CISOs and security operations teams with advanced requirements.",
              features: [
                "All Enterprise Standard features",
                "Deeper integrations with AI security platforms",
                "Enhanced incident workflows",
                "Correlation with security events",
                "Custom compliance framework packs (EU AI Act, banking, healthcare)",
                "Advanced analytics modules",
              ],
              value: "Full-spectrum security and compliance tailored to your organization.",
              cta: "Contact Us",
              highlighted: false,
            },
          ].map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl p-6 flex flex-col ${
                tier.highlighted
                  ? "bg-brand border-2 border-brand-light ring-4 ring-brand/20"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {tier.highlighted && (
                <Badge variant="brand" className="self-start mb-3 bg-white/20 text-white border-white/30">
                  Recommended
                </Badge>
              )}
              <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
              <div className="mb-2">
                <span className="text-sm font-medium text-brand-light">{tier.subtitle}</span>
              </div>
              <p className="text-sm text-white/40 mb-6">{tier.description}</p>
              <ul className="space-y-2 mb-4 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-sm text-white/60 flex items-start gap-2">
                    <svg className="w-4 h-4 text-success mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-white/30 italic mb-6">{tier.value}</p>
              <Button
                href="/design-partners"
                variant={tier.highlighted ? "secondary" : "outline"}
                size="sm"
                className={tier.highlighted ? "" : "border-white/20 text-white hover:bg-white/10 hover:text-white"}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Pricing model note */}
        <div className="max-w-3xl mx-auto mt-12 rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-sm font-semibold text-white mb-3">Hybrid Pricing Model</h3>
          <ul className="space-y-2">
            {[
              "Base platform fee per tenant reflecting compliance value and feature tier",
              "Usage-based metering tied to volume of decisions or actions recorded (not prompts alone), aligned with observability pricing practices",
              "Add-on bundles for high-value connectors (e.g., EU AI Act pack, banking/healthcare regulatory packs) and advanced analytics modules",
            ].map((item) => (
              <li key={item} className="text-sm text-white/50 flex items-start gap-2">
                <span className="text-brand-light mt-0.5 shrink-0">&#8226;</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
    </>
  );
}
