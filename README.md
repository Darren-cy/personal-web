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

The Worker serves the generated `dist` directory. Both `darrency.com` and `www.darrency.com` are attached as custom domains; the Worker redirects `www` to the canonical apex while preserving the path and query string.

## Content boundaries

The placeholder intentionally excludes private infrastructure details, credentials, customer data, personal phone details, and unfinished portfolio copy.
