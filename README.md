# sol

## Current plan

### Modes

Frontend + MSW only:

- Services: Vite frontend on host; MSW in browser; no backend; DB not required.

Backend + Docker DB (pure HTTP):

- Services: Docker DB, backend on host; no frontend.

Full local dev (host FE/BE, Docker DB, real backend):

- Services: Docker DB, backend on host, frontend on host.
- MSW: off by default; opt-in with VITE_USE_MSW=true.

E2E (Docker app+DB + Playwright):

- Services: app container (frontend+backend), db container, Playwright runner on host/CI.

Production-like:

- Services: app container (frontend+backend), db container.

### ToDos

1. Bootstrap frontend, backend, and shared scripts
2. Docker DB for all modes
3. Backend dev: host process, Docker DB
4. Frontend dev: MSW + real backend toggling
5. Full local dev: host frontend+backend, Docker DB
6. Combined Docker image (app) for e2e/“production-ish”
7. Playwright e2e setup
