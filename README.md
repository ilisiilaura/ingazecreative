# ingaze

Laura Ilisii's creative-practice site — Next.js (App Router).

## Develop

```bash
npm install
npm run dev
```

Opens at http://localhost:3000.

## Environment variables

Copy `.env.example` to `.env` and fill in:

- `KIT_API_KEY` / `KIT_FORM_ID` — Kit (kit.com), for the newsletter signup and inquiry-form subscriber capture
- `RESEND_API_KEY` — Resend (resend.com), for the inquiry-form email notification
- `INQUIRY_TO_EMAIL` — where inquiry notifications are sent (defaults to theingaze@gmail.com)

## Structure

- `app/` — pages (`/`, `/projects/[slug]`), API routes (`/api/inquiry`, `/api/newsletter`), fonts, global styles
- `components/` — UI pieces
- `lib/projects.ts` — all project copy/images/galleries, ported from the original design review file
- `public/images/` — only the optimized `/web` derivatives per project ship here; see `public/images/README.md` for the full asset workflow

## Deploy

Pushes to `main` deploy automatically via the connected Vercel project.
