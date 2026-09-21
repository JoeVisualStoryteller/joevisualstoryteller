# Joseph H. Dunn II — Portfolio

A visual portfolio for Joseph H. Dunn II, Staff Engineer, Operations. The site turns real resume evidence into a black-and-blue systems narrative: fleet scale, incident recovery, applied AI, and operating-model leadership.

## Run locally

```bash
nvm use
npm install
npm run dev
```

The project pins Node.js in `.nvmrc`. Do not put credentials in `VITE_*` variables: Vite exposes those values to the browser bundle.

## Commands

- `npm run dev` — start the Vite development server
- `npm run build` — type-check and create a production build
- `npm run lint` — run ESLint
- `npm run audit` — fail on high-severity dependency advisories
- `npm run check` — run lint, production build, and dependency audit
- `npm run preview` — preview the production build locally
- `npm run deploy` — build and publish to GitHub Pages

## Security controls

- The page includes a restrictive static-site Content Security Policy and referrer policy in `index.html`.
- GitHub Pages does not provide repository-controlled response headers. `frame-ancestors`, HSTS, `X-Content-Type-Options`, and `Permissions-Policy` must be set as HTTP response headers by the hosting platform or a CDN/proxy.
- If hosting moves behind a configurable edge, preserve the current CSP and add `frame-ancestors 'none'`, HSTS after confirming every subdomain supports HTTPS, `X-Content-Type-Options: nosniff`, and a restrictive `Permissions-Policy`.
- CI installs with lifecycle scripts disabled, audits dependencies, lints, and builds. Dependabot checks npm and GitHub Actions updates weekly.
- Keep secrets out of the repository and built assets. Use `.env.example` only for documented, non-secret variable names.

## Design direction

The site uses the **Quiet Signal** design system: a dark Mac-like instrument for explaining complex systems. It combines native system typography, graphite surfaces, cobalt signal blue, restrained glass, orbital infrastructure diagrams, real scale metrics, and evidence-led motion.

See [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for the visual principles, tokens, component rules, and content rules.

## Contact

- Email: [jdunn0423@gmail.com](mailto:jdunn0423@gmail.com)
- LinkedIn: [linkedin.com/in/josephdunn0423](https://www.linkedin.com/in/josephdunn0423)
- GitHub: [github.com/JoeVisualStoryteller](https://github.com/JoeVisualStoryteller)
