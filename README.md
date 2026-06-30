# AMPED Electric — Website

Premium marketing homepage for **AMPED Electric**, a locally owned, licensed electrical
contractor serving Corpus Christi and the Coastal Bend, TX.

Built with **Vite + React + Tailwind CSS + Framer Motion**.

## Local development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploy to Netlify

This repo is Netlify-ready (`netlify.toml` included):

1. In Netlify, **Add new site → Import an existing project** and pick this repo.
2. Build command and publish directory are detected automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy.

## Editing content

All copy, services, reviews, and contact info live in one file:
[`src/lib/data.js`](src/lib/data.js).

The estimate form posts to **FormSubmit** (`ampedelectric444@gmail.com`). The first
submission triggers a one-time activation email from FormSubmit that must be confirmed
before submissions are delivered.

## Contact

AMPED Electric · Rudee Deleon, Licensed Electrician
Corpus Christi, TX · (361) 739-1451 · ampedelectric444@gmail.com
