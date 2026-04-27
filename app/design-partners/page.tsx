"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export default function DesignPartnersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    framework: "",
    useCase: "",
    consent: false,
    // Honeypot — must stay empty. Hidden from real users via CSS + aria.
    website: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/design-partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(data.error || "Submission failed");
      }
      setSubmitted(true);
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-20 grid-pattern">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="brand" className="mb-4">
              Design Partner Program
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Shape the future of AI agent governance
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              We&apos;re looking for 10 companies to join our design partner
              program. Get early access, direct founder access, and real
              influence over our product roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* Program details */}
      <SectionWrapper>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <div className="text-brand mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-4">What the program is</h3>
            <ul className="space-y-3 text-sm text-text-muted">
              <li>10 companies, carefully selected</li>
              <li>4-week structured feedback cycle</li>
              <li>Free Pro tier for 12 months</li>
              <li>Bi-weekly founder syncs</li>
              <li>Private Slack channel with the team</li>
            </ul>
          </Card>

          <Card>
            <div className="text-success mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-4">What you get</h3>
            <ul className="space-y-3 text-sm text-text-muted">
              <li className="flex items-start gap-2">
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
                Direct access to the founding team
              </li>
              <li className="flex items-start gap-2">
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
                Real influence over the product roadmap
              </li>
              <li className="flex items-start gap-2">
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
                Free Pro tier for 12 months ($3,588 value)
              </li>
              <li className="flex items-start gap-2">
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
                Priority support and dedicated onboarding
              </li>
            </ul>
          </Card>

          <Card>
            <div className="text-warning mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-4">What we need from you</h3>
            <ul className="space-y-3 text-sm text-text-muted">
              <li>At least one real pipeline instrumented with the SDK</li>
              <li>Weekly feedback (async or sync)</li>
              <li>30-minute debrief calls (bi-weekly)</li>
              <li>Willingness to share anonymized learnings</li>
              <li>A real compliance or governance use case</li>
            </ul>
          </Card>
        </div>

        {/* Application form */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary tracking-tight mb-2 text-center">
            Apply to the program
          </h2>
          <p className="text-text-muted text-center mb-8">
            Tell us about your team and how you&apos;re using AI agents today.
          </p>

          {submitted ? (
            <Card className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-success"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Application received
              </h3>
              <p className="text-text-muted">
                Thank you for your interest. We&apos;ll review your application
                and get back to you within 48 hours.
              </p>
            </Card>
          ) : (
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot: hidden from real users, bots auto-fill it. */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    top: "-9999px",
                    height: 0,
                    width: 0,
                    overflow: "hidden",
                  }}
                >
                  <label htmlFor="website">
                    Leave this field empty
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Full name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                      placeholder="Jane Chen"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Work email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      inputMode="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Your role *
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      required
                      autoComplete="organization-title"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                      placeholder="ML Engineer, Compliance Officer, etc."
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="framework"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Agent framework used *
                  </label>
                  <select
                    id="framework"
                    name="framework"
                    required
                    value={formData.framework}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  >
                    <option value="">Select a framework</option>
                    <option value="langgraph">LangGraph</option>
                    <option value="crewai">CrewAI</option>
                    <option value="autogen">AutoGen</option>
                    <option value="langchain">LangChain</option>
                    <option value="llamaindex">LlamaIndex</option>
                    <option value="custom">Custom / Other</option>
                    <option value="evaluating">Still evaluating</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="useCase"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Describe your use case *
                  </label>
                  <textarea
                    id="useCase"
                    name="useCase"
                    required
                    rows={4}
                    value={formData.useCase}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent resize-none"
                    placeholder="Tell us about your AI agent pipeline, what compliance requirements you face, and what problems you're trying to solve..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-border text-brand focus:ring-brand"
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm text-text-muted"
                  >
                    I consent to Providex storing this information and contacting
                    me about the design partner program. *
                  </label>
                </div>

                {errorMessage && (
                  <div
                    role="alert"
                    className="rounded-lg border border-warning/30 bg-warning/5 px-4 py-3 text-sm text-warning"
                  >
                    {errorMessage}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={submitting}
                >
                  {submitting ? "Submitting…" : "Submit Application"}
                </Button>
              </form>
            </Card>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
