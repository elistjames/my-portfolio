# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page React portfolio site for Eli St. James, bootstrapped with Create React App (`react-scripts` 5.0.1). No backend — content is hardcoded in JS data files, and the contact form posts directly to EmailJS from the browser.

## Commands

```bash
npm start              # dev server on http://localhost:3000
npm run build          # production bundle into build/
npm test               # Jest + React Testing Library, interactive watch mode
CI=true npm test -- --watchAll=false          # single non-interactive run
CI=true npm test -- --watchAll=false src/App.test.js   # one file
CI=true npm test -- --watchAll=false -t "renders"      # one test by name
```

There is no separate lint script. ESLint runs through `react-scripts` (config is the `eslintConfig` key in `package.json`), so lint errors surface in the `npm start` console and during `npm run build`.

**The test suite currently does not run.** `src/App.test.js` is the untouched CRA default (it asserts a "learn react" link that no longer exists), and it fails before that assertion: CRA 5's Jest resolver cannot resolve `react-router/dom`, a subpath export that `react-router-dom` v7 requires. Any work on tests needs to address the resolver config first. `package.json` currently has uncommitted major-version bumps (React 19, react-router-dom 7, framer-motion 12) on top of the unmaintained `react-scripts` 5 — that combination is the source of the resolver failure.

## Architecture

### Routing is scroll-position navigation, not page navigation

`App.js` defines three routes:

- `/` → redirects to `/landing-title`
- `/:section` → always renders `LandingPage`; the `section` param is a **DOM element id inside that page** (`landing-title`, `about-me`, `landing-projects`, `lets-connect` — enumerated in `components/NavData.js`)
- `/project/:id` → `ProjectPage`, where `id` indexes directly into the `ProjectData` array

So the landing page is one long scrolling document, and the URL segment selects which `<section>` to `scrollIntoView`. Consequences worth knowing before you touch navigation:

- `LandingPage.js` calls `document.getElementById(section).scrollIntoView()` with no null guard. Any `/:section` path that isn't a real element id throws on mount.
- `App.js` re-triggers a scroll to the *same* section by setting `landingSection` to the sentinel string `"sup"`, which makes a `useEffect` restore the real value and force the dependent effect to re-fire. If you change `handleLandingNavigate`, preserve that two-step or repeat-clicking a nav link stops scrolling.
- `NavBarComponent` and `ToolBarComponent` hardcode the list of landing-page pathnames. When the current path isn't one of them (i.e. you're on a project page), they navigate with `window.location.assign` — a full page reload rather than a router transition. Adding a landing section means updating those literal path checks too.

### Content lives in `components/ProjectData.js`

That one file is the source of truth for every project. It exports:

- `SectionType` — a string enum (`main`, `basic`, `multiParagraph`, `image`, `video`, `paragraphImage`, `subsections`, `pointGrid`)
- `LandingPageProjects` — the summary cards on the landing page
- `ProjectData` — the full per-project pages

`ProjectPage.js` is a `switch` over `section.sectionType` that renders each variant. Sections don't hold media directly; they hold `imageIndex` / `videoIndex` integers that index into the project's own `images` / `videos` arrays. Adding a section type means adding both the `SectionType` entry and a `case` in that switch.

Adding a project requires appending to **both** exported arrays with the `id` matching the array position — `ProjectCards.js` passes the map `index` as the card's link target, and `ProjectPage` looks up `ProjectData[id]`. The two arrays are otherwise independent and can drift.

Note an existing inconsistency: image objects in `ProjectData` define `fit`, and that's what `SubSectionsComponent` and `ProjectCardComponent` read — but `ProjectPage`'s `paragraphImage` case reads `.objectFit`, which is always `undefined`.

### Animation

Everything scroll-driven uses `framer-motion`:

- `AnimateContainer.js` wraps most sections — ties opacity to `scrollYProgress` and optionally slides content in on the X axis. It's the default wrapper for any new section.
- `ProjectCardComponent` maps scroll *velocity* to card rotation, so cards tilt as you scroll.
- `LandingPage` uses `useAnimate` with a staggered sequence to type out the intro character by character (the text is `split("")` into per-character `<span>`s).
- `App.js` parallaxes the fixed `.background-texture` div against page scroll.

### Styling

All global CSS is in `src/index.css` — CSS custom properties (`--purple`, `--blue`, `--darkerBlue`, `--navHeight`, …), the layout primitives (`.page`, `.span-div`, `.div-inline-center`, `.viewport`), the shared visual treatments (`.card-gradient`, `.blur-container`, `.btn-gradient`), and the nav/toolbar/scroll-to-top chrome. `src/App.css` is empty despite being imported. Per-component CSS is colocated (`ProjectCard.css`, `PointGrid.css`, `SubSections.css`, `EmailForm.css`).

Bootstrap is `@import`ed at the top of `index.css`, and `react-bootstrap` components (`Card`, `Carousel`, `Button`, `OverlayTrigger`) are used throughout with `data-bs-theme="dark"` set on the nav.

Responsiveness is split across two mechanisms that must be kept in sync manually: `@media` queries in CSS (breakpoints at 640 / 835 / 583 / 301 px) and `useMediaQuery` from `react-responsive` in JS, which swaps entire JSX branches (`NavBarComponent` at 640px, `SubSectionComponent` at 400px, `EmailFormComponent` on `max-height: 780px`).

### Contact form

`EmailFormComponent.js` calls `emailjs.send` with `serviceId`, `templateId`, and `publicKey` written inline as literals rather than read from env. The EmailJS public key is designed to be client-visible, so this is not a leak, but it does mean the form cannot be pointed at a different EmailJS account without a code edit. Validation is client-side only (non-empty name, regex-matched email).

### Loose ends

- `reportWebVitals.js` exists but `index.js` never calls it.
- `.env` is tracked in git and contains only a commented-out `PUBLIC_URL`. `.gitignore` covers `.env.local` and friends but not `.env` itself.
