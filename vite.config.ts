// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages build: set GITHUB_PAGES=true and BASE_PATH=/<repo-name>/ (or "/" for a custom domain / user site).
const isPages = process.env['GITHUB_PAGES'] === "true";
const base = isPages ? process.env['BASE_PATH'] || "/" : "/";
const pages = ["/", "/start", "/grow", "/services", "/studio", "/contact"].map((path) => ({ path }));

export default defineConfig({
  vite: { base },
  tanstackStart: {
    server: { entry: "server" },
    router: { basepath: base.replace(/\/$/, "") || "/" },
    ...(isPages
      ? { pages, prerender: { enabled: true, autoStaticPathsDiscovery: false } }
      : {}),
  },
});
