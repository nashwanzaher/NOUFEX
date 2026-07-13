# GitHub Actions

Two workflows power CI for this monorepo:

- **`.github/workflows/ci.yml`** — Runs on every push and pull request to `main`. It installs dependencies, lints, typechecks, and builds the entire monorepo via `turbo run build`. The `web-build` job additionally uploads the production `.next` directory as a build artifact.

- **`.github/workflows/eas-build.yml`** — Builds the Expo mobile app via EAS Build. Triggers on every push to `main` and on version tags (`v*`). Can also be run manually from the Actions tab with a chosen platform (`all`/`ios`/`android`) and EAS profile (`development`/`preview`/`production`).

## Required secrets

| Secret | Purpose |
| --- | --- |
| `EXPO_TOKEN` | Authenticates EAS Build submissions. Create at https://expo.dev/accounts/[account]/settings/access-tokens. |
