import Link from "next/link";
import { ContentItem } from "@/lib/content";
import MDXContent from "@/components/MDXContent";
import SiteFooter from "@/components/SiteFooter";

function formatDate(date: string): string {
  if (!date) return "";
  const d = new Date(`${date}T00:00:00`);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

export default function DetailPage({ item }: { item: ContentItem }) {
  const { meta, content } = item;
  const linkEntries = Object.entries(meta.links);

  return (
    <div className="page">
      <Link className="crumb" href="/">
        &larr; Lucas Zheng
      </Link>
      <article className="article">
        <h1>{meta.title}</h1>
        <p className="meta">{formatDate(meta.date)}</p>
        {linkEntries.length > 0 && (
          <p className="exts">
            {linkEntries.map(([label, url]) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ))}
          </p>
        )}
        <MDXContent source={content} />
      </article>
      <SiteFooter />
    </div>
  );
}
