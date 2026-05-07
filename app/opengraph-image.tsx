import { ImageResponse } from "next/og";

export const alt = "Stakful Systems — Fractional CTO for DFW Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0C2D52 100%)",
          color: "#FFFFFF",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#F97316",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ display: "flex", fontSize: "32px", fontWeight: 700 }}>
            Stakful Systems
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "72px",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: "8px",
          }}
        >
          Fractional CTO
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "72px",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: "32px",
            color: "#FB923C",
          }}
        >
          for DFW Businesses
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "28px",
            color: "#CBD5E1",
            lineHeight: 1.3,
            maxWidth: "1000px",
          }}
        >
          AI strategy, implementation, and oversight — without a $300K+
          executive hire.
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "48px",
            fontSize: "22px",
            color: "#94A3B8",
          }}
        >
          <span>DFW-Based</span>
          <span>•</span>
          <span>Azure Certified</span>
          <span>•</span>
          <span>Microsoft Partner</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
