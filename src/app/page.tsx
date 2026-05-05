import Image from "next/image";
import { getAll } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";
import PostCard from "@/components/PostCard";

export default function Home() {
  const projects = getAll("projects");
  const writing = getAll("writing");
  const featured = projects.filter((p) => p.meta.featured);

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      {/* Hero */}
      <section className="flex items-start gap-8">
        <div className="flex-1">
          <h1 className="font-sans text-3xl font-bold tracking-tight text-pink">
            Lucas Zheng
          </h1>
          <p className="mt-4 leading-relaxed text-muted">
            CS + Applied Math at Brown University &apos;27. I do hierarchical
            reinforcement learning research at Prof. Konidaris&apos;{" "}
            <a
              href="http://irl.cs.brown.edu/"
              className="text-pink transition-opacity hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              Intelligent Robot Lab
            </a>
            . Broadly interested in AI/ML and software engineering.
          </p>
          <div className="mt-5 flex gap-5 text-sm">
            <a
              href="https://github.com/lucas-j-zheng"
              className="text-muted transition-colors hover:text-pink"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/lucas-j-zheng"
              className="text-muted transition-colors hover:text-pink"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:lucas_zheng@brown.edu"
              className="text-muted transition-colors hover:text-pink"
            >
              Email
            </a>
            <a
              href="/cv.pdf"
              className="text-muted transition-colors hover:text-pink"
            >
              CV
            </a>
          </div>
        </div>
        <Image
          src="/profile.png"
          alt="Lucas Zheng"
          width={120}
          height={120}
          className="rounded-full ring-1 ring-border"
          priority
        />
      </section>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <section className="mt-20">
          <h2 className="border-b border-border pb-3 font-sans text-sm font-medium uppercase tracking-widest text-muted">
            Featured Projects
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {featured.map((p) => (
              <ProjectCard key={p.meta.slug} meta={p.meta} />
            ))}
          </div>
        </section>
      )}

      {/* Recent Writing */}
      {writing.length > 0 && (
        <section className="mt-20">
          <h2 className="border-b border-border pb-3 font-sans text-sm font-medium uppercase tracking-widest text-muted">
            Recent Writing
          </h2>
          <div className="mt-2 divide-y divide-border">
            {writing.slice(0, 5).map((w) => (
              <PostCard key={w.meta.slug} meta={w.meta} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
