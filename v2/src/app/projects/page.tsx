import type { Metadata } from "next";
import Link from "next/link";
import { getAll } from "@/lib/content";
import ItemRow from "@/components/ItemRow";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  const projects = getAll("projects");

  return (
    <div className="page">
      <Link className="crumb" href="/">
        &larr; Lucas Zheng
      </Link>
      <section className="block">
        <h2>Projects</h2>
        <div className="body">
          {projects.map((item) => (
            <ItemRow
              key={item.meta.slug}
              meta={item.meta}
              href={`/projects/${item.meta.slug}/`}
            />
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
