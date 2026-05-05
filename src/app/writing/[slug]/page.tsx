import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBySlug, getSlugs } from "@/lib/content";
import MDXContent from "@/components/MDXContent";
import Tag from "@/components/Tag";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSlugs("writing").map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const item = getBySlug("writing", slug);
    if (!item) return {};
    return { title: item.meta.title, description: item.meta.description };
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getBySlug("writing", slug);
  if (!item) notFound();

  const { meta, content } = item;

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <header>
        <h1 className="font-sans text-2xl font-bold tracking-tight text-pink">
          {meta.title}
        </h1>
        {meta.date && (
          <time className="mt-1 block text-sm text-muted">{meta.date}</time>
        )}
        {meta.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {meta.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        )}
      </header>
      <div className="mt-10">
        <MDXContent source={content} />
      </div>
    </div>
  );
}
