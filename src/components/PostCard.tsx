import Link from "next/link";
import type { ContentMeta } from "@/lib/content";
import Tag from "./Tag";

export default function PostCard({ meta }: { meta: ContentMeta }) {
  const href = meta.external ?? `/writing/${meta.slug}/`;

  return (
    <Link href={href} className="group block">
      <article className="py-4">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-sans text-base font-semibold text-foreground group-hover:text-pink">
            {meta.title}
          </h3>
          {meta.date && (
            <time className="shrink-0 text-sm text-muted">{meta.date}</time>
          )}
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          {meta.description}
        </p>
        {meta.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {meta.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
