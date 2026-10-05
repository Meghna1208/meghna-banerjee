# AGENTS.md

## Overview
A single-page personal portfolio for Meghna Banerjee, built with TanStack Start, React 19, Tailwind CSS 4 and deployed on Netlify.

## Key files
- `src/data/profile.ts`: the only source of content (profile, experience, projects, skills, certifications, education, achievements, links). Edit content here, not in the components.
- `src/routes/index.tsx`: the whole page. It's split into section components (Header, Hero, About, Experience, Projects, Skills, Credentials, Contact, Footer).
- `src/routes/__root.tsx`: HTML shell, SEO meta and Google Fonts (Fraunces, IBM Plex Sans, JetBrains Mono).
- `src/styles.css`: Tailwind setup. The custom palette tokens (`paper`, `paper-deep`, `ink`, `ink-soft`, `vermilion`, `moss`) and the `font-display`/`font-mono` fonts are defined in `@theme`. The animations (`wave-bar`, `rise`) respect reduced motion.
- `public/contact-form.html`: hidden static form so Netlify Forms detects the `contact` form at build time. Keep its fields in sync with the React form in `Contact`.
- `public/Meghna_Banerjee_CV.pdf`: the downloadable CV.

## Conventions
- Use Tailwind utility classes with the custom palette tokens and avoid the default gray/blue colors.
- Section headings use `SectionHead` with a two-digit index.
- The contact form posts URL-encoded data with `form-name=contact` to `/contact-form.html` via fetch.
- The template's content-collections setup and blog/resume routes were removed. The page uses the typed data module instead.
