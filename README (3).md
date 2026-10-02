# Power Studio website

Marketing website for Power Studio (Cyprus) — branding, websites, digital marketing, social media and content creation.

Built with TanStack Start (React 19), Vite and Tailwind CSS v4. Pages: `/`, `/start`, `/grow`, `/services`, `/studio`, `/contact`.

## Requirements

- [Bun](https://bun.sh) 1.1+ (recommended) or Node.js 20+ with npm

## Run locally

```sh
bun install
bun run dev
```

Open http://localhost:8080.

## Build

```sh
bun run build            # standard build (Lovable / Cloudflare hosting)
bun run build:pages      # static build for GitHub Pages at the domain root
```

For a GitHub Pages project site (`https://<user>.github.io/<repo>/`) set the base path:

```sh
GITHUB_PAGES=true BASE_PATH=/<repo>/ bun run build
```

The static site is written to `dist/client/` — one `index.html` per page plus hashed assets.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository (branch `main`).
2. In the repository go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy-pages.yml`, which builds the static site and publishes it.
4. The site appears at `https://<user>.github.io/<repo>/`.

The workflow uses the repository name as the base path automatically. If you use a custom domain or a `<user>.github.io` repository, add a repository variable `BASE_PATH` with the value `/` (**Settings → Secrets and variables → Actions → Variables**), and add the domain under **Settings → Pages → Custom domain**.

## Project structure

- `src/routes/` — one file per page, including its title and description
- `src/components/site.tsx` — shared header, footer, calls to action and service sections
- `src/assets/` — images
- `src/styles.css` — design tokens, fonts and layout styles
- `public/` — favicon and robots.txt
