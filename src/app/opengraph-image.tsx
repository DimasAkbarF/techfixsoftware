import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f172a",
          color: "#ffffff",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 108,
            height: 108,
            borderRadius: 28,
            background: "#ffffff",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 84,
              height: 84,
              borderRadius: 20,
              background: "#0877b5",
              fontSize: 44,
              fontWeight: 800,
              color: "#ffffff",
            }}
          >
            TF
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 800, letterSpacing: -1 }}>
          techfix<span style={{ color: "#38b2e8" }}>software</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            fontWeight: 500,
            color: "#94a3b8",
          }}
        >
          Layanan Teknis Android Profesional
        </div>
      </div>
    ),
    { ...size },
  );
}