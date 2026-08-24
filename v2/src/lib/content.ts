import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ContentType = "projects" | "writing" | "research";

export interface ContentMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  links: Record<string, string>;
  featured?: boolean;
}

export interface ContentItem {
  meta: ContentMeta;
  content: string;
}

// Content lives at the repo root, shared with the v1 site.
const contentDir = path.resolve(process.cwd(), "..", "content");

function parseFile(filePath: string): ContentItem {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const slug = path.basename(filePath, ".mdx");

  return {
    meta: {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      description: data.description ?? "",
      tags: data.tags ?? [],
      links: data.links ?? {},
      featured: data.featured ?? false,
    },
    content,
  };
}

export function getAll(type: ContentType): ContentItem[] {
  const dir = path.join(contentDir, type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => parseFile(path.join(dir, f)))
    .sort((a, b) => (b.meta.date > a.meta.date ? 1 : -1));
}

export function getBySlug(type: ContentType, slug: string): ContentItem | null {
  const filePath = path.join(contentDir, type, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return parseFile(filePath);
}

export function getSlugs(type: ContentType): string[] {
  const dir = path.join(contentDir, type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function year(date: string): string {
  return date ? date.slice(0, 4) : "";
}
