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
- **Ask your Trace** — ask a natural-language question and get an answer that cites the clips it used
- **Command palette** — `⌘K` for global actions *and* jump-to-any-clip
- **Settings** — `⌘,` to manage your AI key and export / import your data
- **Keyboard-native** — `/` search, `⌘N` new, `P`/`C` shortcuts on the open clip
- **Multi-select** — shift-click + bulk actions
- **Sensitive blur** — hover to reveal private clips
- **Dark / Light / Auto** theme — persists locally
- **Drag & drop** — drop text or images anywhere
- **Paste anywhere** — paste text outside inputs → "Save as clip" prompt; paste an image → opens a new clip

---

## AI Setup (optional)

Trace uses the Anthropic API for AI features (auto-title, tags, summarize, rewrite, describe). To enable:

1. Get an API key from [console.anthropic.com](https://console.anthropic.com)
2. In the app, open **Settings** (`⌘,`) — or the command palette (`⌘K`) → **Settings** — paste your key, and click **Save key**.

The key is stored only in this browser's `localStorage` (`trace_ai_key_v1`) and is sent directly to `api.anthropic.com` — nowhere else.

> **Note:** The current implementation calls the Anthropic API directly from the browser using the `anthropic-dangerous-direct-browser-access` header. This is fine for local/personal use, but exposes the key to anything running in the page. For a hosted deployment, proxy through your own backend to keep the key private.

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
| `⌘K` | Command palette / jump to clip |
| `⌘,` | Settings (AI key, export/import) |
| `/` | Focus search |
| `Esc` | Close / exit mode |
| `P` | Pin / unpin the open clip |
| `C` | Copy the open clip's content |
| `Shift+click` | Multi-select |
| `⌘↵` | Save new clip |

---

## Data

- Stored in `localStorage` under key `trace_clips_v1`
- Preferences under `trace_prefs_v1`; optional AI key under `trace_ai_key_v1`
- **Back up / restore:** Settings (`⌘,`) → **Export backup (.json)** and **Import backup…** (import can replace everything or merge into your current clips)
- No data is sent anywhere (except optional AI API calls you trigger)

---

## Stack

Pure HTML + CSS + vanilla JS. No build step. No dependencies. No framework.

One file. Open it and it works.
