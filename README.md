# ClipBoard — Online Clipboard Manager

A lightweight, local-first clipboard manager. No backend, no accounts — all data lives in your browser's `localStorage`.

## Features

- **Create** clips with a title, description, and content
- **Copy** content to clipboard with one click
- **Edit** clips inline
- **Archive** clips (soft-hide, recoverable)
- **Delete** clips (soft-delete, recoverable)
- **Purge** permanently from the Deleted bin
- **Search** across all clips in real-time
- **Keyboard shortcuts**: `Cmd/Ctrl+K` → New Clip, `Esc` → Close, `Enter` → Save

---

## Run Locally

### Option 1 — Open directly (simplest)
Just double-click `index.html` — it works straight from the filesystem.

### Option 2 — Serve with Python
```bash
python3 -m http.server 8080
# open http://localhost:8080
```

### Option 3 — Serve with Node / npx
```bash
npx serve .
# or
npx http-server .
```

---

## Deploy to Vercel

### Via GitHub (recommended)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Framework: **Other** (static)
5. Root directory: the folder containing `index.html`
6. Deploy — done!

### Via Vercel CLI
```bash
npm i -g vercel
cd /path/to/this-folder
vercel
```

---

## Notes
- Data is stored in `localStorage` — it's per-browser, per-domain.
- No data is sent anywhere. Fully offline-capable.
- To back up: open DevTools → Application → Local Storage → copy the `clipboard_manager_v1` key.
