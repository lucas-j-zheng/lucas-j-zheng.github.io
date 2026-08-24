<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `v2/node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Repository layout

The site is the Next.js app in `v2/`. Shared MDX content lives in `content/`
at the repo root (read by the app via `../content`). The retired v1 root app
is preserved on the `v1-archive` branch.

## Package manager

This repository uses pnpm (v10+): keep `v2/pnpm-lock.yaml`, run
`pnpm install` / `pnpm install --frozen-lockfile` from `v2/`, and do not
migrate to npm or yarn unless explicitly requested. pnpm blocks dependency
lifecycle scripts by default — allowlist via `onlyBuiltDependencies` only
when a package genuinely needs a build step. A 14-day minimum release age
is enforced (`minimum-release-age` in `.npmrc`); never bypass or lower it —
frozen-lockfile installs are unaffected. CI runs
`pnpm install --frozen-lockfile`. Follow the global prohibition on one-shot
remote package executors and scaffolder shortcuts.
