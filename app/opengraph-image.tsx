import { ImageResponse } from "next/og";

export const alt =
  "Providex — Provenance. Authorization. Accountability. The accountability platform for AI agents in production.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0E2439 0%, #0A1B2E 60%, #08152A 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#1B6B5A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 800,
              color: "white",
            }}
          >
            P
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
            Providex
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            Provenance. Authorization. Accountability.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.35,
              maxWidth: 920,
            }}
          >
            The accountability platform for AI agents in production.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          <div>SOC 2 · HIPAA · EU AI Act ready</div>
          <div>getprovidex.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
