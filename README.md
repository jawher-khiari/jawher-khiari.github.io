# Jawher Khiari — Portfolio (Angular)

Production Angular rebuild of the approved design system. Single-page, bilingual
(EN / FR), dark + light themes. Deploys free to GitHub Pages at
**https://jawher-khiari.github.io**.

## Run locally
```bash
npm install
npm start          # dev server at http://localhost:4200
npm run check      # resume links, bilingual coverage, component structure
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
    shared/                   shared class tokens
    components/ui/            icon, eyebrow, section-head primitives
    sections/                 one folder per section, with .ts/.html/.scss
    shell/                    root component + scroll-spy
public/
  assets/                     portrait, logo, CV (Jawher-Khiari-CV.pdf)
  projects/                   drop upcoming-project screenshots here
.github/workflows/deploy.yml  CI: build + deploy to GitHub Pages on push to main
```

## Edit content
All text lives in `src/app/data/content.ts` (English and French side by side).
Edit there, commit, push — the site rebuilds automatically.

## Resume and project details
The English and French dictionaries include the Ceel.io and CarSpare experience,
six projects with expandable technical details, skills, education, security
training and languages. Elasticsearch search is explicitly in progress.
The legacy `upcoming` content key now contains qualifications.
Replace `public/assets/Jawher-Khiari-CV.pdf` with the latest resume to update the
download. Keep project links and claims aligned with that resume.

## Deploy
Push to the `main` branch of a repo named **`jawher-khiari.github.io`**. In the
repo: Settings → Pages → Source = **GitHub Actions**. The included workflow builds
and publishes automatically.
