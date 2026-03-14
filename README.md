# date-wiz-docs

Documentation site for [date-wiz](https://www.npmjs.com/package/date-wiz) — built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

**Live site →** https://GourangaDasSamrat.github.io/date-wiz-docs

---

## Stack

- **[Astro](https://astro.build)** — static site generator
- **[Starlight](https://starlight.astro.build)** — docs theme (zero-config search, dark mode, i18n-ready)
- **MDX** — content with embedded components
- **TypeScript** — throughout

## Local development

```bash
npm install
npm run dev       # http://localhost:4321/date-wiz-docs
```

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the built site
```

## Deploy

Pushes to `main` automatically deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

## Contributing

Found a typo or missing example? PRs are welcome. See the [Contributing guide](https://GourangaDasSamrat.github.io/date-wiz-docs/guides/contributing) for details.

## License

MIT © [GourangaDasSamrat](https://github.com/GourangaDasSamrat)
