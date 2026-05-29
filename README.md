# Trace

**A local-first archive for thinking in fragments.**

Single-file, zero-dependency, fully offline-capable.  
All data lives in your browser's `localStorage` — nothing leaves your machine.

---

## What it is

Trace is a calm, keyboard-native clip manager for capturing and connecting fragments of thought: code, prompts, links, notes, images, and prose.

It is not a dashboard. It is not a chat app. It is not Notion.

---

## Features

- **6 clip types** — text, code, prompt, link, image, note
- **Masonry + list views** — content-driven hierarchy
- **Pinned strip** — persistent working-memory shelf with FLIP animation
- **Workflow chains** — link related clips bidirectionally
- **AI assist** — auto-title, suggest tags, summarize, rewrite, describe (Anthropic API)
- **Command palette** — `⌘K` global actions
- **Keyboard-native** — `/` search, `⌘N` new, `E/F/P/C` card shortcuts
- **Multi-select** — shift-click + bulk actions
- **Sensitive blur** — hover to reveal private clips
- **Dark / Light / Auto** theme — persists locally
- **Drag & drop** — drop text or images anywhere
- **Paste anywhere** — paste text/images outside inputs → auto-opens new clip

---

## AI Setup (optional)

Trace uses the Anthropic API for AI features. To enable:

1. Get an API key from [console.anthropic.com](https://console.anthropic.com)
2. Open the browser console and set:
   ```
   // The API key is sent directly from the browser.
   // For production, proxy through your own backend.
   ```

> **Note:** The current implementation calls the Anthropic API directly from the browser (no backend). This is fine for local/personal use. For a hosted deployment, proxy through a backend to keep your key private.

---

## Run locally

```bash
# Simplest — just open the file
open index.html

# Or serve with Python
python3 -m http.server 8080

# Or with Node
npx serve .
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework: **Other** (static)
4. Deploy — done

---

## Keyboard shortcuts

| Key | Action |
|---|---|
| `⌘N` | New clip |
| `⌘K` | Command palette |
| `/` | Focus search |
| `Esc` | Close / exit mode |
| `E` | Edit focused clip |
| `F` | Toggle favorite |
| `P` | Pin / unpin |
| `C` | Copy content |
| `Shift+click` | Multi-select |
| `⌘↵` | Save new clip |

---

## Data

- Stored in `localStorage` under key `trace_clips_v1`
- Preferences under `trace_prefs_v1`
- To back up: DevTools → Application → Local Storage → copy the value
- No data is sent anywhere (except optional AI API calls)

---

## Stack

Pure HTML + CSS + vanilla JS. No build step. No dependencies. No framework.

One file. Open it and it works.
