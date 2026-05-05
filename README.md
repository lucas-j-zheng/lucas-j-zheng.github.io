# lucas-j-zheng.github.io

Personal site built with Next.js, TypeScript, Tailwind CSS, and MDX. Statically exported and deployed to GitHub Pages.

## Adding content

Content lives in `content/{projects,writing,research}/` as `.mdx` files with YAML frontmatter.

### New project

Create `content/projects/my-project.mdx`:

```mdx
---
title: "My Project"
date: "2026-01-01"
description: "Short description for cards and meta tags"
tags: ["tag1", "tag2"]
links:
  GitHub: "https://github.com/..."
  Demo: "https://..."
featured: true
---

MDX body goes here. Supports **markdown**, KaTeX math (`$...$` / `$$...$$`), and fenced code blocks with syntax highlighting.
```

### New writing post

Same format in `content/writing/my-post.mdx`. Posts are sorted by date (newest first).

### New research entry

Same format in `content/research/my-research.mdx`.

### Frontmatter fields

| Field         | Required | Description                                    |
|---------------|----------|------------------------------------------------|
| `title`       | yes      | Display title                                  |
| `date`        | yes      | `YYYY-MM-DD` — used for sorting                |
| `description` | yes      | Card subtitle and `<meta>` description          |
| `tags`        | no       | Array of strings shown as pills                |
| `links`       | no       | `Label: URL` pairs shown on the detail page    |
| `featured`    | no       | `true` to show on the homepage                 |
| `external`    | no       | URL — card links externally instead of `/projects/[slug]` |

## Development

```bash
npm install --ignore-scripts
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

## Deployment

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds and deploys `out/` to GitHub Pages.
