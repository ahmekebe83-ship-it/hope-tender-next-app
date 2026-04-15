# Hope Tender Proposal Generator — Local Production App v1

A free local full-stack tender proposal system for Hope Urban Planning Architectural and Engineering Consultancy PLC.

## What this fixes compared with the HTML versions

- Real Next.js app, not a single HTML patch chain
- Prisma database with SQLite for free local use
- Authentication foundation and roles
- Company Knowledge Vault
- Brand Asset Manager
- Tender upload and analysis
- Requirement extraction and compliance matrix
- Manual action separation from company evidence gaps
- DOCX generation using `docx`
- ZIP package generation using `jszip`
- Local storage folders for documents and generated packages
- Architecture ready for PostgreSQL, PWA, and Tauri desktop packaging

## Install

```bash
cp .env.example .env
npm run setup
npm run dev
```

Open: http://localhost:3000

Default login:

```text
Email: admin@hope.local
Password: admin123
```

## Main workflow

1. Login.
2. Upload company files in Knowledge Vault.
3. Upload logo, stamp, signature and letterhead in Assets.
4. Create a tender and upload tender PDF/DOCX.
5. Open tender and click Analyze Tender.
6. Review requirements, compliance gaps and manual actions.
7. Generate DOCX.
8. Approve.
9. Export ZIP.

## Strict scope rule

The app separates:

- Real company evidence gaps
- Submission/procurement rules
- Manual external actions

Only tender-required outputs should be included in the package. Internal compliance matrix remains inside the app and is not placed in the evaluator-facing proposal.

## Current limitations

This is Phase 1. It is production-structured but still local. For full production, switch SQLite to PostgreSQL and deploy with protected object storage.

## PostgreSQL switch later

Change `.env`:

```env
DATABASE_URL="postgresql://user:password@host:5432/hope_tender"
```

Update `prisma/schema.prisma` datasource provider to `postgresql`, then run:

```bash
npx prisma db push
```

## PWA preparation

Add:

- `public/manifest.webmanifest`
- service worker
- `next-pwa` or native service worker registration
- app icons in `public/icons`

## Desktop preparation

Use Tauri:

```bash
npm create tauri-app
```

Configure Tauri to run the Next.js app locally or package a static/exported frontend with a local API bridge.
