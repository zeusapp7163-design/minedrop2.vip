import type { ReactNode } from "react";
import { DocumentShell } from "@/components/DocumentShell";
import { getLandingConfig } from "@/content";
import { buildMetadata, siteViewport } from "@/content/metadata";
import "../../globals.css";

const config = getLandingConfig("en");

export const metadata = buildMetadata(config);
export const viewport = siteViewport;

export default function EnglishRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <DocumentShell config={config}>{children}</DocumentShell>;
}
