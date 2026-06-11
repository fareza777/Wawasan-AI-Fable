import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Wawasan AI — Portal Review AI Indonesia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #04060c 0%, #111729 50%, #0a0e1a 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
              color: "#04060c",
            }}
          >
            W
          </div>
          <span style={{ fontSize: 48, fontWeight: 800, color: "#f1f5f9" }}>Wawasan AI</span>
        </div>
        <p style={{ fontSize: 36, color: "#94a3b8", lineHeight: 1.4, maxWidth: 900 }}>
          Portal review AI Indonesia — repo GitHub, model LLM, tools coding AI, berita & wawasan.
        </p>
      </div>
    ),
    { ...size }
  );
}
