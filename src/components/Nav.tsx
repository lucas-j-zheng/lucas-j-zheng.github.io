import Link from "next/link";

const links = [
  { href: "/projects/", label: "Projects" },
  { href: "/research/", label: "Research" },
  { href: "/writing/", label: "Writing" },
  { href: "/cv.pdf", label: "CV" },
];

export default function Nav() {
  return (
    <nav className="border-b border-border">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-widest text-foreground"
        >
          Lucas Zheng
        </Link>
        <div className="flex gap-6 text-xs uppercase tracking-widest text-muted">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-pink"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
