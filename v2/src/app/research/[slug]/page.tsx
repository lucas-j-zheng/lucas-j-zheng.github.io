import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBySlug, getSlugs } from "@/lib/content";
import DetailPage from "@/components/DetailPage";

const TYPE = "research" as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return getSlugs(TYPE).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getBySlug(TYPE, slug);
  if (!item) return {};
  return { title: item.meta.title, description: item.meta.description };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getBySlug(TYPE, slug);
  if (!item) notFound();
  return <DetailPage item={item} />;
}
