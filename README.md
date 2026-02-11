# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Como adicionar um projeto novo

1. Abra `nuxt-app/data/projects.ts`.
2. Adicione um novo objeto no array `projects` seguindo o tipo `Project`:
   - `slug` único (usado em `/projetos/<slug>`).
   - `layout` como `"A"` ou `"B"`.
   - `coverImage` aponta para um arquivo em `nuxt-app/public/projects`.
3. Se quiser logo no card da Home, defina `logoKey` com um dos valores existentes.
4. Para imagens novas, coloque os arquivos em `nuxt-app/public/projects/` e referencie com `/projects/...`.
