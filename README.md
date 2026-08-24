# lucas-j-zheng.github.io

Personal site. The Next.js app lives in `v2/` (TypeScript, plain CSS, MDX);
shared content lives in `content/` at the repo root. Statically exported and
deployed to GitHub Pages. The retired v1 app is on the `v1-archive` branch.

## Adding content

Content lives in `content/{projects,writing,research}/` as `.mdx` files with YAML frontmatter.

### New project

Create `content/projects/my-project.mdx`:

```mdx
---
title: "My Project"
date: "2026-01-01"
description: "Short description shown in lists and meta tags"
tags: ["tag1", "tag2"]
links:
  GitHub: "https://github.com/..."
  Demo: "https://..."
featured: true
---

MDX body goes here. Supports **markdown**, KaTeX math (`$...$` / `$$...$$`), and fenced code blocks with syntax highlighting.
```

### New writing post / research entry

Same format in `content/writing/` or `content/research/`. Sorted by date (newest first).

### Frontmatter fields

| Field         | Required | Description                                    |
|---------------|----------|------------------------------------------------|
| `title`       | yes      | Display title                                  |
| `date`        | yes      | `YYYY-MM-DD` — used for sorting                |
| `description` | yes      | List subtitle and `<meta>` description         |
| `tags`        | no       | Array of strings (stored in frontmatter)       |
| `links`       | no       | `Label: URL` pairs shown on the detail page    |
| `featured`    | no       | `true` to show on the homepage                 |

## Development

```bash
cd v2
pnpm install --frozen-lockfile
pnpm dev      # http://localhost:3001
pnpm build    # static export to v2/out/
```

## Deployment

Pushes to `master` trigger `.github/workflows/deploy.yml`, which builds `v2/` and deploys `v2/out` to GitHub Pages.
