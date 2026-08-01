# Yuvasree Prakash — Portfolio

A personal, story-driven portfolio built with Next.js, TypeScript, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Editing content

Every word on the page — hero copy, journey chapters, experience details,
capabilities and contact links — lives in one file:

```
content/site.ts
```

To activate the LinkedIn / GitHub / Resume links, replace their `href: null`
with a real URL. For the resume, drop `resume.pdf` into `/public` and set the
href to `/resume.pdf` (both in `nav.resumeHref` and the Resume contact row).

## Structure

- `app/` — layout (fonts + SEO metadata), page, global styles and design tokens
- `components/` — one component per section, plus shared `Reveal` / `Eyebrow` primitives
- `content/site.ts` — all copy and contact data
