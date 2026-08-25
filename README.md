# darrency.com

Placeholder and future personal profile for Darren Cao, built with Astro and deployed as a Cloudflare Worker with Static Assets.

## Stack

- Astro static output
- Cloudflare Workers Static Assets
- TypeScript
- Vitest

## Local development

Use the pinned Node.js version from `.nvmrc`.

```bash
npm install
npm run dev
```

## Validation

```bash
npm run validate
npm run deploy:dry
```

The validation pipeline generates Cloudflare binding types, checks Astro and TypeScript, runs unit tests, generates the social card, and builds the static site.

## Deployment

```bash
npm run deploy
```

The Worker serves the generated `dist` directory. Production custom-domain routes are added to `wrangler.jsonc` only after a successful `workers.dev` staging deployment and live review.

## Content boundaries

The placeholder intentionally excludes private infrastructure details, credentials, customer data, personal phone details, and unfinished portfolio copy.
