import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

// Template OG image konsisten untuk seluruh halaman.
export function buatOgImage({
  kicker,
  title,
  subtitle,
  score,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  score?: number;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(150deg, #04060c 55%, #0c1530 100%)",
          color: "#e2e8f0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#04060c",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            W
          </div>
          <div style={{ fontSize: 32, fontWeight: 700 }}>Wawasan AI</div>
          <div
            style={{
              marginLeft: 12,
              fontSize: 20,
              color: "#22d3ee",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {kicker}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div
              style={{
                fontSize: title.length > 60 ? 44 : 56,
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#f8fafc",
              }}
            >
              {title}
            </div>
            {subtitle && (
              <div style={{ marginTop: 20, fontSize: 26, color: "#94a3b8", lineHeight: 1.4 }}>
                {subtitle.length > 110 ? `${subtitle.slice(0, 110)}…` : subtitle}
              </div>
            )}
          </div>
          {score !== undefined && (
            <div
              style={{
                width: 170,
                height: 170,
                borderRadius: 9999,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "8px solid #22d3ee",
                background: "#0a0e1a",
                flexShrink: 0,
              }}
            >
              <div style={{ fontSize: 58, fontWeight: 800, color: "#22d3ee" }}>
                {score.toFixed(1)}
              </div>
              <div style={{ fontSize: 18, color: "#64748b" }}>/ 10</div>
            </div>
          )}
        </div>

        <div style={{ display: "flex", fontSize: 20, color: "#64748b" }}>
          Portal Review AI Indonesia — dari pemakaian nyata, bukan rilis pers
        </div>
      </div>
    ),
    ogSize
  );
}
