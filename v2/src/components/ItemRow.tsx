import Link from "next/link";
import { ContentMeta, year } from "@/lib/content";

// matplotlib tab10 — the default color cycle of every RL paper's figures
const TAB10 = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#7f7f7f",
  "#bcbd22",
  "#17becf",
];

// Older items fade like a discounted return: opacity = GAMMA^(years old),
// floored so nothing becomes unreadable. Computed at build time.
const GAMMA = 0.85;
const FLOOR = 0.5;
function discount(date: string): number {
  if (!date) return 1;
  const years = (Date.now() - new Date(`${date}T00:00:00`).getTime()) / (365.25 * 864e5);
  return Math.max(FLOOR, Math.pow(GAMMA, Math.max(0, years)));
}

export default function ItemRow({
  meta,
  href,
  index = 0,
}: {
  meta: ContentMeta;
  href: string;
  index?: number;
}) {
  return (
    <div
      className="row"
      style={{ "--d": discount(meta.date).toFixed(3) } as React.CSSProperties}
    >
      <div className="line1">
        <h3>
          <span
            className="marker"
            style={{ background: TAB10[index % TAB10.length] }}
            aria-hidden="true"
          />
          <Link href={href}>{meta.title}</Link>
        </h3>
        <span className="year">{year(meta.date)}</span>
      </div>
      {meta.description && <p>{meta.description}</p>}
    </div>
  );
}
