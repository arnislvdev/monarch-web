<h1 align="center">Monarch Web</h1>

<p align="center">
Source for <a href="https://arnislvdev.github.io/monarch-web/"><strong>Monarch's website</strong></a> — the download page and marketing site for <a href="https://arnislvdev.github.io/monarch-web/">Monarch</a>, an all-in-one anime, manga, and novel client for Windows.
</p>

> [!NOTE]
> This repo is just the website. Monarch itself (the desktop app) lives in a
> separate, private repository. The built-in provider extensions live in
> [monarch-providers](https://github.com/arnislvdev/monarch-providers).

## What's here

- `src/` — the site itself: React 19 + TypeScript, built with Vite and styled with Tailwind CSS 4 (base-ui/radix-ui components).
- `privacy.html` / `terms.html` — standalone pages for the Privacy Policy and Terms of Use, built as separate Vite entries alongside `index.html`.
- `worker/` — a small Cloudflare Worker (`monarch-releases`) that proxies release metadata and installer downloads out of the private app repo, since GitHub Pages is static and can't hold the repo-read token itself. See `worker/src/index.ts`.
- `public/` — static assets: favicon, screenshots used on the site, `sitemap.xml`, `robots.txt`.

## Local development

This repo uses [pnpm](https://pnpm.io/).

```
pnpm install
pnpm dev        # start the dev server
pnpm build      # typecheck + production build (outputs index.html, privacy.html, terms.html)
pnpm preview    # preview the production build locally
pnpm lint       # eslint
pnpm typecheck  # tsc --noEmit
pnpm format     # prettier --write
```

Copy `.env.example` to `.env.local` and point `VITE_RELEASES_API` at a deployed instance of the Worker in `worker/` (or your own) to get real download links locally; without it the download button just shows an error state.

### The releases Worker

`worker/` is a separate Wrangler project. To run or deploy it:

```
cd worker
cp .dev.vars.example .dev.vars   # fill in a read-only GitHub PAT for local dev
pnpm install
pnpm dev                         # local
pnpm deploy                      # production
```

In production the token is set with `wrangler secret put GITHUB_TOKEN`, never committed.

## Deployment

The site is static and deployed to GitHub Pages, built with `pnpm build` (base path `/monarch-web/`). The Worker deploys separately via Wrangler and is not part of the Pages build.

## License

No license file yet; all rights reserved by the author until one is added.
