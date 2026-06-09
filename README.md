# Jawher Khiari — Portfolio (Angular)

Production Angular rebuild of the approved design system. Single-page, bilingual
(EN / FR), dark + light themes. Deploys free to GitHub Pages at
**https://jawher-khiari.github.io**.

## Run locally
```bash
npm install
npm start          # dev server at http://localhost:4200
npm run build      # production build -> dist/portfolio/browser
```

## Tech
- Angular 18 (standalone components, signals)
- Tailwind CSS 3 mapped to the design-system tokens (see `tailwind.config.js`)
- Design tokens (colors, type, spacing, effects) in `src/styles.scss`
- No backend — fully static, hosted on GitHub Pages

## Structure
```
src/
  app/
    core/state.service.ts     theme + language signals (persist to localStorage)
    data/content.ts           all EN/FR copy + contact details
    shared/                   icon component, section-head, shared class tokens
    sections/                 navbar, hero, about, experience, skills,
                              projects, upcoming, contact, footer
    app.component.ts          shell + scroll-spy
public/
  assets/                     portrait, logo, CV (Jawher-Khiari-CV.pdf)
  projects/                   drop upcoming-project screenshots here
.github/workflows/deploy.yml  CI: build + deploy to GitHub Pages on push to main
```

## Edit content
All text lives in `src/app/data/content.ts` (English and French side by side).
Edit there, commit, push — the site rebuilds automatically.

## Add upcoming-project screenshots
1. Put the image in `public/projects/` (e.g. `dashboard.png`).
2. In `content.ts`, add `img: 'projects/dashboard.png'` to the matching item in
   the `upcoming.items` array (in both `en` and `fr`).

## Deploy
Push to the `main` branch of a repo named **`jawher-khiari.github.io`**. In the
repo: Settings → Pages → Source = **GitHub Actions**. The included workflow builds
and publishes automatically.
