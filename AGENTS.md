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

- Keep Aurora mock data in `src/lib/cinema-data.ts` and reusable cinema UI in `src/components/cinema.tsx` so all routes share one presentation source.
- Use client-only local React state for demo interactions because this project intentionally has no backend.
