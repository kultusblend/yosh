# yosh.my

Personal site of Noor Azree Hanifiah. Astro 6, deployed on Cloudflare Pages.

Design direction: Marketing Lab — operator console aesthetic, light mode, IBM Plex Sans + Mono, signal red accent, hairline rules, no box shadow.

## Stack

- [Astro 6](https://astro.build/) static site
- IBM Plex Sans Variable + IBM Plex Mono via fontsource
- Cloudflare Pages (auto-deploy on `main`)
- No CMS — content edited directly via `src/data/*.ts`

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # outputs to dist/
npm run preview  # preview the build locally
```

## Editing content

- `src/consts.ts` — site metadata, profile facts, social handles, hero stats
- `src/data/experience.ts` — CV chronology, workshops, education, certs, languages
- `src/data/projects.ts` — projects showcase entries

## Deploy

Push to `main`. Cloudflare Pages auto-builds and deploys.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 22 |
| Env var | `SITE_URL=https://yosh.my` |

## Pages

- `/` — overview, stats, services, recent work, side projects
- `/about/` — bio, competencies, languages, quick facts
- `/cv/` — full chronology, workshops, education, certs, publications, speaking
- `/projects/` — side projects with status + stack
- `/contact/` — direct channels + Formspree brief form
