import { notFound } from "next/navigation";
import { SeoHubPage } from "@/components/SeoHubPage";
import {
  getLandingConfig,
  getSeoPage,
  isSeoPageSlug,
  SEO_PAGE_SLUGS,
} from "@/content";
import { buildSeoPageMetadata } from "@/content/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

const config = getLandingConfig("en");

export const dynamicParams = false;

export function generateStaticParams() {
  return SEO_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  if (!isSeoPageSlug(slug)) {
    notFound();
  }

  return buildSeoPageMetadata(config, getSeoPage("en", slug));
}

export default async function EnglishSeoPage({ params }: Props) {
  const { slug } = await params;

  if (!isSeoPageSlug(slug)) {
    notFound();
  }

  return <SeoHubPage config={config} page={getSeoPage("en", slug)} />;
}
