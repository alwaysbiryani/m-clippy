# Trace

**A local-first archive for thinking in fragments.**

This repository currently implements **Sprint 0.5**: a deliberately small validation build for the Current Clip interaction model.

Trace is single-file, zero-dependency, and offline-capable. All Sprint 0.5 clip data lives in the browser's `localStorage`.

---

## Sprint 0.5 scope

Sprint 0.5 validates only:

- Current Clip lifecycle
- New Clip replacement behavior
- Autosave behavior
- Fresh-session behavior
- All Clips retrieval, open, and delete behavior

It intentionally does **not** include search, tags, collections, filters, archive states, AI, rich formatting, command palette, sync, collaboration, or other Sprint 1 concepts.

---

## Current Clip model

There is exactly one active Current Clip.

- The Current Clip lives on Home.
- It is a normal stored clip, not a separate object type.
- It has an optional title and a content field.
- Edits autosave while typing.
- Clicking **New Clip** creates a new stored clip and immediately makes it current.
- Opening an existing clip from **All Clips** makes that existing clip current.

---

## Session behavior

Every app launch starts a fresh Current Clip.

Previous clips remain stored and can be retrieved from **All Clips**, but the app does not resume the previous session or restore the prior Current Clip.

---

## Data model

Stored clips use the minimal Sprint 0.5 shape:

```json
{
  "id": "string",
  "title": "string",
  "content": "string",
  "createdAt": "ISO date string",
  "updatedAt": "ISO date string"
}
```

Application state is limited to:

```json
{
  "currentClipId": "string"
}
```

Clip data is stored under `trace_clips_sprint_0_5`. Current clip state is stored under `trace_state_sprint_0_5`.

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

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo.
3. Framework: **Other** (static).
4. Deploy.
