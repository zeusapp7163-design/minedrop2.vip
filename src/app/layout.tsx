import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { JsonLd, buildPageSchemas } from "@/components/JsonLd";
import { landingConfig } from "@/content/minedrop2.config";
import "./globals.css";

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

const { site, game, theme } = landingConfig;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: [
    "mine drop 2",
    "minedrop 2",
    "mine drop 2 играть",
    "mine drop 2 играть онлайн",
    "mine drop 2 официальный сайт",
    "mine drop 2 демо",
    "mine drop 2 слот",
    "майне дроп 2",
  ],
  authors: [{ name: site.domain }],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.domain,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: game.cover, type: "image/webp" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
};

export const viewport: Viewport = {
  themeColor: "#08090c",
  width: "device-width",
  initialScale: 1,
};

const themeStyle = {
  "--game-sky": theme.sky,
  "--game-ore": theme.ore,
  "--game-sand": theme.sand,
  "--game-grass": theme.grass,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${unbounded.variable}`}
      style={themeStyle}
    >
      <body>
        <JsonLd data={buildPageSchemas()} />
        {children}
      </body>
    </html>
  );
}
