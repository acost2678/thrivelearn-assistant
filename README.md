# Thrive & Learn Assistant (Next.js + Firebase)

## Setup
1) Create a Firebase project → enable **Authentication** (Google/Microsoft) and **Firestore**.
2) Copy `.env.local.example` → `.env.local` and fill in Firebase config values (from Firebase console → Project settings → Web app).
3) Install & run:
```bash
npm i
npm run dev
```
4) Open http://localhost:3000

## Deploy to Vercel
- Push this folder to GitHub.
- In Vercel → **New Project** → import the repo.
- Add the same env vars in **Project Settings → Environment Variables**.
- Deploy. You’ll get a URL like `https://thrivelearn-assistant.vercel.app`.

## Squarespace Embed
Add a Code block:
```html
<div style="background:#fffcf4;padding:12px;border-radius:12px;border:2px solid #ffbd40;">
  <iframe src="https://APP_URL" width="100%" height="900" style="border:0;" loading="lazy" title="Thrive & Learn Assistant" allow="clipboard-write"></iframe>
</div>
```

## FERPA-minded defaults
- Use **local student codes** only; keep notes neutral and short.
- No automation of judgment; drafts are **not** auto-sent.
- Add audit logging if your district requires export of access logs.
