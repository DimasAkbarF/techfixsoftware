# OpenCode Configuration

## Project conventions

Stack: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 (theme in `globals.css`). UI is lightweight and dependency-light: `lucide-react` only. **No shadcn/ui, no Radix, no clsx/tailwind-merge** — use `cn()` from `@/lib/utils` (string-join) and the custom `Button`/`ButtonLink` in `src/components/ui/Button.tsx`. Do not add a UI framework or dependency unless a task truly cannot be done with existing tools.

- Design tokens: navy `primary` (#0f172a), blue `accent` (#0877b5), green `whatsapp` (#25d366), blue `telegram` (#0088CC). Shadows/radius defined as `--shadow-*` / `--radius-*` tokens — reuse them, don't hardcode.
- Containers: `.container-page` (75rem max). Section rhythm is `py-16 md:py-24`. Headings use the inline pattern `text-xl font-bold tracking-tight sm:text-2xl`.
- Responsive: mobile-first; avoid hardcoded font-sizes on headings, prefer `clamp()`, `text-balance`, and arbitrary `py-1X` rhythm. FAB uses safe-area spacing via `env(safe-area-inset-bottom)` + `viewport-fit: cover` (layout.tsx).
- Contact URLs: build only through `@/config/site` helpers (`whatsappLink`, `telegramLink`, `hasWhatsapp`, `hasTelegram`) and `@/lib/contact`. Never hardcode destinations.
- Floating contact: `src/components/contact/FloatingContact.tsx` is a client component: one 48px circular FAB (z-40, below menu/modal z-50) toggling a zero-dependency popover (`role="dialog"`, Escape, click-outside, focus return to trigger). Keep it dependency-free.
- Validation: `npm run typecheck`, `npm run lint`, `npm run build`. Build is full SSG — run it before finishing.