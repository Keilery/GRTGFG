---
name: testing-nexusmarket
description: End-to-end testing for the NexusMarket monorepo (Next.js frontend + Express backend). Use when verifying any UI, mock API, or route-handler change in this repo.
---

# Testing NexusMarket

Monorepo: `frontend/` is Next.js 14 (App Router, 43 routes, iOS 26 design system, mock data only); `backend/` is Express + Zod + JWT mounted at `/api/v1`. Postgres + Redis come from `docker-compose.yml` but are **not required** for local testing because the API is fully in-memory.

## Dev loop

Dependencies are installed by the env config (`maintenance: cd frontend && npm install` and `cd backend && npm install`). If running by hand:

```bash
cd frontend && npm install && PORT=3000 npm run dev   # http://localhost:3000
cd backend  && npm install && PORT=4000 npm run dev   # http://localhost:4000
```

Quality gates (run from each subdir):

```bash
npm run lint        # next lint / eslint
npm run typecheck   # tsc --noEmit
npm run build       # next build / tsc
```

## Canonical mock IDs

Frontend (`frontend/src/lib/mock-data.ts`) and backend in-memory arrays use stable IDs. Use these when constructing URLs or curl bodies:

- Users: `u_1` (ShadowKing, GOLD), `u_2` (FrostMage, SILVER), `u_admin`
- Listings: `l_1` … `l_8`
- Orders: `o_1`, `o_2`, `o_3`
- Rentals (`/rental/[gameId]`): `cyberpunk`, `rdr2`, `elden`
  - Cyberpunk prices: day 89 ₽, week 499 ₽, month 1 490 ₽
  - Elden Ring is intentionally `isAvailable: false` — its CTA reads "Не доступно"

A URL like `/rental/does-not-exist` is the easiest way to hit the not-found branch.

## Bug classes that have actually shipped here

When reviewing or testing changes, watch for these regressions specifically:

1. **Express route order.** Specific routes (`/me`, `/health`, etc.) MUST be registered *before* parameterised ones (`/:id`), otherwise the wildcard captures them and the specific handler is dead code. Smoke test: `curl -s http://localhost:4000/api/v1/users/me` should return user `u_1`, **not** `{"error":"User not found"}`.
2. **`req.body` spread overrides.** In any `router.post(...)`, spread `...req.body` *first* and then layer server-controlled fields (`id`, `status`, `paymentStatus`, `createdAt`) on top. Smoke test: `curl -sX POST -H 'Content-Type: application/json' -d '{"id":"hacked","status":"COMPLETED"}' http://localhost:4000/api/v1/orders` must return a server-generated `id` (`o_xxxxxx`) and `status: "PENDING"`.
3. **Hooks before `notFound()`.** In client components under dynamic segments (`'use client'` + `useState`/`useEffect` + `notFound()`), call `notFound()` **before** any hook. `notFound()` returns `never`, so TypeScript narrows the variable for you — no `!` non-null assertions are needed afterwards.

## Useful curls

```bash
curl -s        http://localhost:4000/api/v1/health
curl -s        http://localhost:4000/api/v1/users
curl -s        http://localhost:4000/api/v1/users/me        # specific route
curl -s        http://localhost:4000/api/v1/users/u_1       # /:id
curl -s        http://localhost:4000/api/v1/listings
curl -sX POST  http://localhost:4000/api/v1/orders \
     -H 'Content-Type: application/json' \
     -d '{"buyerId":"u_2","sellerId":"u_1","total":1000}'
```

## Frontend smoke routes

Most informative pages to click through after a refactor:

- `/` — hero + popular games + hot offers
- `/marketplace` and `/marketplace/item/l_1` — list and detail
- `/rental` and `/rental/cyberpunk` — exercises the dynamic-segment client component
- `/admin` — admin layout with sidebar; pages under `/admin/*` are static dashboards
- `/profile/wallet` — transaction list with formatted amounts

If you only have shell access, `next build` (in `frontend/`) is a strong signal: it does typecheck, lint, and SSG/SSR-prerender all 43 routes. A green build catches the vast majority of regressions in this MVP.

## Devin Secrets Needed

_None._ All endpoints are in-memory mocks; no env vars or third-party credentials are required for testing the MVP. Real testing of OAuth (Google/Discord/Steam/VK), payments (Stripe/СБП/crypto), and bot integrations (FunPay/Steam/Playerok) is **out of scope** until those modules are actually implemented.
