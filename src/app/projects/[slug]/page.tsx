import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBySlug, getSlugs } from "@/lib/content";
import MDXContent from "@/components/MDXContent";
import Tag from "@/components/Tag";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSlugs("projects").map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const item = getBySlug("projects", slug);
    if (!item) return {};
    return { title: item.meta.title, description: item.meta.description };
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getBySlug("projects", slug);
  if (!item) notFound();

  const { meta, content } = item;
  const linkEntries = Object.entries(meta.links);

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-sans text-2xl font-bold tracking-tight text-pink">
        {meta.title}
      </h1>
      <p className="mt-2 text-muted">{meta.description}</p>

      {(linkEntries.length > 0 || meta.tags.length > 0) && (
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {linkEntries.map(([label, url]) => (
            <a
              key={label}
              href={url}
              className="text-sm text-pink transition-opacity hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ))}
          {meta.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      )}

      <div className="mt-10">
        <MDXContent source={content} />
      </div>
    </div>
  );
}
