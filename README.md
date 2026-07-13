# NoufEx Monorepo

Unified commerce platform — Expo mobile app + Next.js PWA + shared TypeScript packages, orchestrated by [Turborepo](https://turbo.build/).

```
noufex/
├── apps/
│   ├── mobile-app/      # Expo SDK 57 + expo-router (iOS, Android, Web)
│   └── web-pwa/         # Next.js 16 + Tailwind CSS v4 (Progressive Web App)
├── packages/
│   ├── core-api/        # Typed axios client + API methods
│   ├── types/           # Shared TypeScript domain types
│   └── ui-tokens/       # Design tokens (colors, spacing, themes) + CSS/Tailwind presets
├── .github/workflows/   # CI + EAS Build
├── turbo.json
└── package.json         # npm workspaces
```

## Requirements

- **Node.js** ≥ 22.13.0
- **npm** ≥ 10 (this repo pins `npm@11.6.2` via `packageManager`)
- **Git Bash** (Windows) or WSL — recommended by the Expo docs for Windows development

## Quick start

```bash
# Install all workspace dependencies from the repo root
npm install

# Build shared packages (required once before the apps will resolve them)
npm run build:packages

# Run the web PWA
npm run dev:web
# → http://localhost:3000

# Run the mobile app
npm run dev:mobile
# → scan the QR code with Expo Go, or press i / a / w
```

## Workspace scripts

| Command | What it does |
| --- | --- |
| `npm run build` | Build everything (packages + apps) via Turborepo |
| `npm run build:packages` | Build only `packages/*` |
| `npm run build:web` | Build only `apps/web-pwa` |
| `npm run build:mobile` | Build only `apps/mobile-app` |
| `npm run dev` | Run all dev servers in parallel |
| `npm run dev:web` | Run only the Next.js dev server |
| `npm run dev:mobile` | Run only the Expo dev server |
| `npm run lint` | Lint every workspace |
| `npm run typecheck` | Typecheck every workspace |
| `npm run clean` | Remove all build outputs and `node_modules` |
| `npm run format` | Format the repo with Prettier |

## Internal packages

Workspace packages are referenced as `"workspace:*"` and are auto-linked by npm.

- **`@noufex/types`** — Domain types (`User`, `Product`, `Order`, `Cart`, …). Import with `import type { Product } from '@noufex/types'`.
- **`@noufex/core-api`** — Axios client factory and typed API methods. Import with `import { api, createApiClient } from '@noufex/core-api'`.
- **`@noufex/ui-tokens`** — Design tokens (palette, spacing, radius, themes). Import the tokens with `import { Tokens, lightTheme, darkTheme } from '@noufex/ui-tokens'`. Tailwind v4 users can also import the generated CSS: `import '@noufex/ui-tokens/css'`.

## Monorepo conventions

- **Expo (mobile-app)** uses file-based routing through `expo-router` and auto-detects the npm workspace via the default `expo/metro-config` (no manual `watchFolders` needed as of SDK 52).
- **Next.js (web-pwa)** consumes the workspace packages through `transpilePackages` in `next.config.ts`.
- **Single React / React Native** — versions are pinned in the root `overrides` to avoid duplicate copies in the workspace.
- **Path aliases** — both apps use `@/*` for their internal `src/*` directory.

## CI

See [`.github/workflows/README.md`](.github/workflows/README.md) for the CI matrix and required secrets.

## Tech stack

| Layer | Tooling |
| --- | --- |
| Build orchestration | Turborepo 2 |
| Mobile runtime | Expo SDK 57 (React Native 0.86, React 19.2) |
| Web runtime | Next.js 16 (App Router, Turbopack) |
| Styling | Tailwind CSS v4 (web) + design tokens (both) |
| Data fetching | TanStack Query 5 + axios |
| State | Zustand (web), React state (mobile) |
| Type checking | TypeScript 5.9 with project references |
| Linting | ESLint 9 (flat config) + Prettier |
| CI | GitHub Actions + EAS Build |
