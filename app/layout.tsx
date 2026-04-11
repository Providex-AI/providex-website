import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Providex — Provenance. Authorization. Accountability.",
    template: "%s | Providex",
  },
  description:
    "The accountability platform for AI agents in production. Tamper-evident provenance logging, authorization audit trails, and compliance intelligence. SOC 2, HIPAA, and EU AI Act ready.",
  keywords: [
    "AI agent governance",
    "AI accountability",
    "AI compliance",
    "provenance logging",
    "AI audit trail",
    "SOC 2 AI",
    "EU AI Act",
    "HIPAA AI",
    "AI agent monitoring",
    "policy-as-code",
    "agentic AI governance",
  ],
  authors: [{ name: "Providex" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Providex",
    title: "Providex — Provenance. Authorization. Accountability.",
    description:
      "The accountability platform for AI agents in production. Tamper-evident provenance logging and compliance intelligence.",
    url: "https://getprovidex.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Providex — Provenance. Authorization. Accountability.",
    description:
      "The accountability platform for AI agents in production. Tamper-evident provenance logging and compliance intelligence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Analytics placeholder — uncomment to activate Plausible */}
        {/* <script defer data-domain="getprovidex.com" src="https://plausible.io/js/script.js"></script> */}

        {/* Analytics placeholder — uncomment to activate PostHog */}
        {/*
        <script>
          {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onFeatureFlags onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
          posthog.init('YOUR_PROJECT_API_KEY',{api_host:'https://app.posthog.com'})`}
        </script>
        */}
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
