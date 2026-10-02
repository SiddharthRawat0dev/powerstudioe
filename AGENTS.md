<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use shared site components for Power Studio navigation, footer, calls to action, and service imagery so all pages stay consistent.
- Keep route-specific page content and metadata in TanStack route files to make each page independently discoverable.
- GitHub Pages builds are static prerenders gated by GITHUB_PAGES/BASE_PATH in vite.config.ts; the router derives basepath from BASE_URL and preserves trailing slashes — keeps the default Lovable build unchanged.
