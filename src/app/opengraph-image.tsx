import { ImageResponse } from "next/og";
import { landingConfig } from "@/content/minedrop2.config";

export const alt = "Mine Drop 2 — играть онлайн";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const { site, game, theme } = landingConfig;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "64px 76px",
          color: "#fff",
          background:
            "linear-gradient(135deg, #08090c 0%, #17131f 58%, #0b1820 100%)",
        }}
      >
        <div
          style={{
            width: 700,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "10px 18px",
              border: `1px solid ${theme.sky}66`,
              borderRadius: 999,
              color: "#ccefff",
              fontSize: 22,
              letterSpacing: 2,
            }}
          >
            PAPERCLIP GAMING · STAKE ENGINE
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontSize: 82,
              fontWeight: 800,
              letterSpacing: -5,
              lineHeight: 1,
            }}
          >
            {game.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              color: "#bbc1cc",
              fontSize: 30,
              lineHeight: 1.4,
            }}
          >
            Играть онлайн · RTP {game.rtp} · Max {game.maxWin}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 44,
              color: "#f5c518",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            {site.domain}
          </div>
        </div>
        <div
          style={{
            width: 280,
            height: 374,
            display: "flex",
            marginLeft: "auto",
            overflow: "hidden",
            border: "2px solid rgba(255,255,255,.18)",
            borderRadius: 28,
            boxShadow: "0 30px 80px rgba(0,0,0,.5)",
            transform: "rotate(2deg)",
          }}
        >
          {/* ImageResponse renders this into the generated social image. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${site.url}${game.cover}`}
            alt=""
            width={280}
            height={374}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
