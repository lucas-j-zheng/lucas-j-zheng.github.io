import type { Metadata } from "next";
import { getAll } from "@/lib/content";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = { title: "Writing" };

export default function WritingPage() {
  const posts = getAll("writing");

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-sans text-2xl font-bold tracking-tight text-pink">Writing</h1>
      <p className="mt-2 text-muted">
        Notes on things I&apos;m learning and building.
      </p>
      <div className="mt-6 divide-y divide-border">
        {posts.map((p) => (
          <PostCard key={p.meta.slug} meta={p.meta} />
        ))}
      </div>
    </div>
  );
}
