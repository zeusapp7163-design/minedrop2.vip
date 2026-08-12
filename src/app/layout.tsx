import type { Metadata, Viewport } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { JsonLd, buildPageSchemas } from "@/components/JsonLd";
import { FAQ, SITE } from "@/lib/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s · ${SITE.domain}`,
  },
  description: SITE.description,
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
  authors: [{ name: SITE.domain }],
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.domain,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: "/media/cover.webp",
        width: 600,
        height: 800,
        alt: "Mine Drop 2 — официальная обложка",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/media/cover.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/media/cover.webp", type: "image/webp" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const schemas = buildPageSchemas([...FAQ]);

  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-fg">
        <JsonLd data={schemas} />
        {children}
      </body>
    </html>
  );
}
