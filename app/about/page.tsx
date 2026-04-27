import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "About",
  description:
    "Providex is building the accountability layer for AI agents in production. Meet the team and learn why we started.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-20 grid-pattern">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="brand" className="mb-4">About</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Building the accountability layer for AI agents
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              AI agents are making consequential decisions in production.
              We&apos;re building the infrastructure to make those decisions
              traceable, auditable, and accountable.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary tracking-tight mb-6">
            Our Mission
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-text-muted leading-relaxed text-lg mb-6">
              Every consequential action taken by an AI agent in production
              should have a structured, tamper-evident record — what happened,
              what triggered it, what the outcome was, and whether a human
              authorized it.
            </p>
            <p className="text-text-muted leading-relaxed text-lg mb-6">
              Today, most organizations deploying AI agents have no systematic
              way to answer the question:{" "}
              <strong className="text-text-primary">
                &quot;What did your AI do?&quot;
              </strong>{" "}
              Agent actions are scattered across unstructured logs, authorization
              decisions are undocumented, and compliance teams have no
              self-service way to audit what happened.
            </p>
            <p className="text-text-muted leading-relaxed text-lg">
              Providex exists to close this gap. We provide the provenance
              logging infrastructure and compliance intelligence that
              enterprises need to deploy AI agents responsibly — and to prove
              they did.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Now */}
      <SectionWrapper dark>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Why Now</h2>
          <div className="space-y-8">
            {[
              {
                title: "Agents are moving from demo to production",
                description:
                  "LangGraph, CrewAI, and AutoGen have made it easy to build multi-step agent pipelines. Enterprises are deploying them for customer support, data analysis, code generation, and workflow automation. The gap between 'cool demo' and 'production system making real decisions' is closing fast.",
              },
              {
                title: "Regulators are catching up",
                description:
                  "The EU AI Act is law. SOC 2 auditors are starting to ask about AI systems. HIPAA covered entities are deploying AI agents that touch protected health information. The compliance question isn't 'if' — it's 'when,' and most companies aren't ready.",
              },
              {
                title: "Incidents are already happening",
                description:
                  "AI agents have autonomously opened reverse SSH tunnels, accessed unauthorized APIs, and taken actions their operators never intended. In each case, the lack of structured provenance made forensics harder and accountability impossible.",
              },
              {
                title: "Observability is not governance",
                description:
                  "Existing LLM observability tools track prompts and completions. They don't capture authorization decisions, they don't produce tamper-evident records, and they don't map to compliance frameworks. The governance layer doesn't exist yet. We're building it.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary tracking-tight mb-6">
            Team
          </h2>

          <div className="p-6 rounded-xl border border-border bg-white">
            <div className="flex items-start gap-5 mb-4">
              <div className="w-16 h-16 rounded-full bg-surface border border-border shrink-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1">Olasile Abolade</h3>
                <p className="text-sm text-brand font-medium mb-1">Founder &amp; CEO</p>
                <Link
                  href="https://www.linkedin.com/in/olasile-abolade/"
                  className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-brand transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </Link>
              </div>
            </div>
            <div className="space-y-4 text-sm text-text-muted leading-relaxed">
              <p>
                Olasile is the Founder and CEO of Providex AI. Over a decade of building data-driven and AI-enabled products across SaaS, healthcare, fintech, and platform ecosystems — including roles at AWS and Adobe — gave him an unusually close view of how enterprises actually deploy software at scale: carefully on the engineering side, and often improvised on the governance side.
              </p>
              <p>
                When AI agents began moving from demos into production, he noticed a specific gap opening up. The same organisations investing heavily in agentic automation had no reliable answer to a simple question: if something goes wrong, can you prove what your agent did? Not describe it in a report, not reconstruct it from raw logs after the fact — prove it, in a form a regulator, auditor, or legal counsel can accept. For mid-market teams running LangGraph or CrewAI pipelines without dedicated compliance infrastructure, the honest answer was no.
              </p>
              <p>
                Providex AI exists to change that answer. The platform gives engineering and compliance teams tamper-evident, structured accountability records for every AI agent action in production — purpose-built for the regulated environments where the stakes of getting it wrong are highest.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact */}
      <section className="bg-navy py-20 grid-pattern">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
            Get in touch
          </h2>
          <p className="text-white/50 mb-6 max-w-lg mx-auto">
            Have questions? Want to learn more? We&apos;d love to hear from you.
          </p>
          <p className="text-white/70 font-medium mb-8">
            info@getprovidex.com
          </p>
          <Button href="/design-partners" size="lg">
            Apply to Design Partner Program
          </Button>
        </div>
      </section>
    </>
  );
}
