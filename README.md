# Portfolio

Freelance developer portfolio for ASHWINRAM, built with Next.js.

## Structure

```
port/
  src/
    app/                 # Next.js App Router (layout, page, global styles)
    components/
      layout/            # Header, Footer
      sections/          # Page sections + Home composer
      ui/                # Shared UI pieces
    data/site.js         # Copy and content
    lib/                 # Tailwind class tokens + icon exports
  public/
```

## Scripts

```bash
cd port
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

- `npm run dev` — development server
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — ESLint
