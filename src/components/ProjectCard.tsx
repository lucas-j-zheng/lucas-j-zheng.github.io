import Link from "next/link";
import type { ContentMeta } from "@/lib/content";
import Tag from "./Tag";

export default function ProjectCard({
  meta,
  basePath = "/projects",
}: {
  meta: ContentMeta;
  basePath?: string;
}) {
  const href = meta.external ?? `${basePath}/${meta.slug}/`;

  return (
    <Link href={href} className="group block">
      <article className="rounded-lg border border-border bg-surface p-5 transition-all group-hover:border-pink/40">
        <h3 className="font-sans text-base font-semibold text-foreground group-hover:text-pink">
          {meta.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {meta.description}
        </p>
        {meta.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {meta.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
