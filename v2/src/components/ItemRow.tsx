import Link from "next/link";
import { ContentMeta, year } from "@/lib/content";

export default function ItemRow({
  meta,
  href,
}: {
  meta: ContentMeta;
  href: string;
}) {
  return (
    <div className="row">
      <div className="line1">
        <h3>
          <Link href={href}>{meta.title}</Link>
        </h3>
        <span className="year">{year(meta.date)}</span>
      </div>
      {meta.description && <p>{meta.description}</p>}
    </div>
  );
}
