import type { CSSProperties, ReactNode } from "react";
import { Manrope, Unbounded } from "next/font/google";
import type { LandingConfig } from "@/content";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export function DocumentShell({
  config,
  children,
}: {
  config: LandingConfig;
  children: ReactNode;
}) {
  const themeStyle = {
    "--game-sky": config.theme.sky,
    "--game-ore": config.theme.ore,
    "--game-sand": config.theme.sand,
    "--game-grass": config.theme.grass,
  } as CSSProperties;

  return (
    <html
      lang={config.locale}
      className={`${manrope.variable} ${unbounded.variable}`}
      style={themeStyle}
    >
      <body>{children}</body>
    </html>
  );
}
