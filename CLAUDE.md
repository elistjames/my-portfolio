# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page React portfolio site for Eli St. James, built with Vite and React 19. No backend — content is hardcoded in JS data files, and the contact form posts directly to EmailJS from the browser.

## Commands

```bash
npm run dev            # dev server on http://localhost:3000 (add -- --open to launch a browser)
npm run build          # production bundle into dist/
npm run preview        # serve dist/ locally, with the SPA fallback a static host needs
npm test               # vitest, single run
npm run test:watch     # vitest, watch mode
npm test -- src/components/EmailFormComponent.test.jsx   # one file
npm test -- -t "malformed"                               # one test by name
npm run lint           # eslint flat config
```

Vite does not lint during `dev` or `build` the way `react-scripts` did — `npm run lint` is a separate step, so a lint error will not fail a build.

Files containing JSX must use the `.jsx` extension; Vite's esbuild transform will not parse JSX out of a `.js` file. `ProjectData.js`, `LandingProjects.js`, and `setupTests.js` are plain `.js` because they contain none. `package.json` sets `"type": "module"`.

Tests are Vitest with `globals: true` (configured in `vite.config.js`), so `describe`/`test`/`expect` need no import, but `vi` does. Unlike CRA's Jest preset, there is no automatic mock reset and no automatic RTL cleanup — `src/setupTests.js` registers `cleanup()` in an `afterEach`, and mocks reset explicitly in `beforeEach`.

## Architecture

### Routing is scroll-position navigation, not page navigation

`App.jsx` defines three routes:

- `/` → redirects to `/landing-title`
- `/:section` → always renders `LandingPage`; the `section` param is a **DOM element id inside that page** (`landing-title`, `about-me`, `landing-projects`, `lets-connect` — enumerated in `components/NavData.jsx`)
- `/project/:id` → `ProjectPage`, where `id` indexes directly into the `ProjectData` array

So the landing page is one long scrolling document, and the URL segment selects which `<section>` to `scrollIntoView`. Consequences worth knowing before you touch navigation:

- `LandingPage.jsx` guards `document.getElementById(section)` before scrolling, so an unknown `/:section` path renders the landing page rather than throwing.
- `NavBarComponent` and `ToolBarComponent` scroll when already on the landing page and call `navigate()` when on a project page. `App` passes them a `handleLandingNavigate` that carries an incrementing nonce, so re-selecting the section you are already on still re-triggers the scroll. `LandingPage` skips its nonce-driven effect on first mount, letting the URL own the initial scroll position.

### Content lives in `components/ProjectData.js` and `components/LandingProjects.js`

These are the source of truth for every project:

- `LandingProjects.js` exports `LandingPageProjects` — the summary cards on the landing page
- `ProjectData.js` exports `SectionType` (a string enum: `main`, `basic`, `multiParagraph`, `image`, `video`, `paragraphImage`, `subsections`, `pointGrid`) and `ProjectData` — the full per-project pages

They are deliberately separate modules. `ProjectPage` is lazy-loaded via `React.lazy`, so keeping the heavy per-project content out of `LandingProjects.js` keeps it out of the main chunk — importing `ProjectData` from the landing page would undo the code split.

`ProjectPage.jsx` is a `switch` over `section.sectionType` that renders each variant. Image entries render through `SectionMedia`, which emits a `<video>` when the entry carries a `video` key (an mp4, with `data` serving as its poster) and an `<img>` otherwise — so an animated asset needs no new `SectionType`. Sections don't hold media directly; they hold `imageIndex` / `videoIndex` integers that index into the project's own `images` / `videos` arrays. Adding a section type means adding both the `SectionType` entry and a `case` in that switch.

Adding a project requires appending to **both** arrays with the `id` matching the array position — `ProjectCards.jsx` links to `/project/{project.id}` and `ProjectPage` looks up `ProjectData[id]`. The two arrays are otherwise independent and can drift.

Image objects define `fit` (not `objectFit`) — every consumer reads that key.

### Animation

Everything scroll-driven uses `framer-motion`:

- `AnimateContainer.jsx` wraps most sections — ties opacity to `scrollYProgress` and optionally slides content in on the X axis. It's the default wrapper for any new section.
- `ProjectCardComponent` maps scroll *velocity* to card rotation, so cards tilt as you scroll. Its scroll transform sits on the outer `motion.div` while the hover `scale` is plain CSS on an inner div — keep them on separate elements, or framer-motion's inline `transform` will clobber the hover.
- `LandingPage` uses `useAnimate` with a staggered sequence to type out the intro character by character (the text is `split("")` into per-character `<span>`s).
- `App.jsx` parallaxes the fixed `.background-texture` div against page scroll.

### Styling

All global CSS is in `src/index.css` — CSS custom properties (`--purple`, `--blue`, `--darkerBlue`, `--navHeight`, …), the layout primitives (`.page`, `.span-div`, `.div-inline-center`, `.viewport`), the shared visual treatments (`.card-gradient`, `.blur-container`, `.btn-gradient`), and the nav/toolbar/scroll-to-top chrome. It is imported once, from `src/index.jsx`. Per-component CSS is colocated (`ProjectCard.css`, `PointGrid.css`, `SubSections.css`, `EmailForm.css`) and must **not** `@import '../index.css'` — that would inline Bootstrap into every component stylesheet.

Be careful with `backdrop-filter`: `.blur-container` and `#top-nav` use it, and `.background-texture` parallaxes on every scroll frame beneath them, so each blurred layer re-blurs continuously. Adding more blurred layers is the fastest way to reintroduce scroll jank. For the same reason, animate `transform`/`opacity` rather than `width`/`height`/`font-size`.

Bootstrap is `@import`ed at the top of `index.css`, and `react-bootstrap` components (`Card`, `Carousel`, `Button`, `OverlayTrigger`) are used throughout with `data-bs-theme="dark"` set on the nav.

Responsiveness is split across two mechanisms that must be kept in sync manually: `@media` queries in CSS (breakpoints at 640 / 835 / 583 / 301 px) and `useMediaQuery` from `react-responsive` in JS, which swaps entire JSX branches (`NavBarComponent` at 640px, `SubSectionComponent` at 400px, `EmailFormComponent` on `max-height: 780px`).

### Contact form

`EmailFormComponent.jsx` calls `emailjs.send` with `serviceId`, `templateId`, and `publicKey` written inline as literals rather than read from env. The EmailJS public key is designed to be client-visible, so this is not a leak, but it does mean the form cannot be pointed at a different EmailJS account without a code edit. Validation is client-side only (non-empty name, regex-matched email).

### Loose ends

- Stills are WebP, sized to roughly 2x their rendered dimensions; the two demo recordings are H.264 mp4 played by `SectionMedia`. If you add media, size it to its display box rather than dropping in the original — the repo went from 63 MB to 5.5 MB by doing exactly that. `Pason.png` stays PNG because WebP made that particular palette image six times larger.
- `vite.config.js` sets `assetsInlineLimit: 0`. Do not raise it: the assets are now small enough that base64-inlining them inflated the ProjectPage chunk from 6.4 to 17.3 kB gzipped.
- There is still no `srcset` — each image ships one size for every viewport.
- EmailJS `serviceId` / `templateId` / `publicKey` are inline literals in `EmailFormComponent.jsx` rather than env vars. The public key is meant to be client-visible, but the account cannot be changed without a code edit.
