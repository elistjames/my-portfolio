# my-portfolio

Personal portfolio site for **Eli St. James** — a single-page React app built with
Vite and React 19.

**Live:** https://elistjames.github.io/my-portfolio/

There is no backend. Every project's content is hardcoded in JS/JSX data files, and the
contact form posts directly to [EmailJS](https://www.emailjs.com/) from the browser.

## Tech stack

- **React 19** + **Vite 8** (esbuild dev, Rolldown build)
- **react-router-dom 7** — client-side routing
- **framer-motion** — scroll-driven animation
- **react-bootstrap** / **bootstrap** — UI components and layout
- **react-responsive**, **react-icons**
- **@emailjs/browser** — contact form delivery
- **Vitest** + **Testing Library** — tests · **ESLint** (flat config) — lint

## Getting started

Requires **Node 20.19+** (22 LTS recommended; CI runs on 22).

```bash
npm ci            # install exact dependency versions
npm run dev       # dev server at http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on port 3000 (`-- --open` to launch a browser) |
| `npm run build` | Production bundle into `dist/` |
| `npm run preview` | Serve the built `dist/` locally with the SPA fallback a static host needs |
| `npm test` | Run the Vitest suite once |
| `npm run test:watch` | Vitest in watch mode |
| `npm run lint` | ESLint over the project |

Linting is a **separate step** — Vite does not lint during `dev` or `build`, so run
`npm run lint` before pushing.

## How it works

The site is one long scrolling landing page plus per-project pages, routed by URL:

- `/:section` renders the landing page and scrolls to a DOM section (`landing-title`,
  `about-me`, `landing-projects`, `lets-connect`).
- `/project/:id` renders a project page, where `id` indexes into the `ProjectData` array.

Content is the source of truth and lives in two files:

- `src/components/LandingProjects.js` — the summary cards on the landing page.
- `src/components/ProjectData.jsx` — the full per-project pages, expressed as a list of
  typed **sections** (`SectionType`: `main`, `heroTerminal`, `multiParagraph`, `video`,
  `beforeAfter`, `statBand`, `pointGrid`, `cta`, …). Each type is rendered by a `case`
  in `src/pages/ProjectPage.jsx`. Adding a new kind of section means adding a `SectionType`
  value and a matching render case — the page renders whatever the data holds.

Deeper architecture notes (routing internals, the section-type system, animation, styling,
and asset conventions) live in [`CLAUDE.md`](./CLAUDE.md).

```
src/
  App.jsx              routing shell, nav, parallax background
  pages/               LandingPage, ProjectPage (lazy-loaded)
  components/          section renderers, nav/toolbar, contact form, data files
  hooks/               small browser-state hooks
  resources/           images (WebP), videos (mp4)
  index.css            all global styles and design tokens
```

## Deployment

CI/CD runs on GitHub Actions (`.github/workflows/`):

- **`ci.yml`** — lint, test, and build on every pull request into `master`.
- **`deploy.yml`** — on merge to `master` (or manually via *Actions → Run workflow*),
  builds and publishes `dist/` to **GitHub Pages**.

Because it's served as a Pages **project site** under `/my-portfolio/`, the build sets
Vite's `base` and the router `basename` to that path, and the deploy copies `index.html`
to `404.html` so client-routed deep links survive a hard refresh.
