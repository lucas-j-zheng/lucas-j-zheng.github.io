import type { Metadata } from "next";
import { getAll } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = { title: "Research" };

export default function ResearchPage() {
  const items = getAll("research");

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-sans text-2xl font-bold tracking-tight text-pink">Research</h1>
      <p className="mt-2 text-muted">
        Work in hierarchical reinforcement learning and related areas.
      </p>
      <div className="mt-8 grid gap-3">
        {items.map((r) => (
          <ProjectCard key={r.meta.slug} meta={r.meta} basePath="/research" />
        ))}
      </div>
    </div>
  );
}
