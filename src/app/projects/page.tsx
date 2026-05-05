import type { Metadata } from "next";
import { getAll } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  const projects = getAll("projects");

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-sans text-2xl font-bold tracking-tight text-pink">Projects</h1>
      <p className="mt-2 text-muted">
        A mix of research, hackathon, and personal projects.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.meta.slug} meta={p.meta} />
        ))}
      </div>
    </div>
  );
}
