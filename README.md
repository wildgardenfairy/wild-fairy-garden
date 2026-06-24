# 🌿 Wild Fairy Garden Portfolio — Setup Guide

## Files in this folder

| File | Page | Landmark |
|------|------|----------|
| `index.html` | Map homepage | — |
| `about.html` | Home / About | Pigeon's Peak |
| `videos.html` | Videos | Singing Hollow |
| `blog.html` | Blog | Faraway Tree |
| `community.html` | Community | Frog Pond |
| `reviews.html` | Reviews | Golden Daffodils |
| `podcast.html` | Podcast | Sleepy Pots |
| `contact.html` | Contact | Wishing Well |
| `shared.css` | Shared styles | — |

---

## 🖼️ Image files — drop in the same folder

Name your SVG/PNG landmark images exactly as follows:

| Filename | Used on |
|----------|---------|
| `pigeonspeak.svg` | Pigeon's Peak (mountain) |
| `singinghollow.svg` | Singing Hollow (forest/trees) |
| `farawaytree.svg` | Faraway Tree (tree with door) |
| `frogpond.svg` | Frog Pond |
| `goldenfield.svg` | Field of Golden Daffodils |
| `sleepypots.svg` | Sleepy Pots |
| `wishingwell.svg` | Wishing Well |

If an image is missing, its landmark will simply be hidden — nothing will break.

---

## ✏️ Things to fill in

### index.html (map)
- Landmarks are placed — just drop in your SVG files and they appear

### about.html
- Replace `[your name]` with your name
- Add your photo: `<img src="your-photo.jpg" alt="Your name">`
- Fill in bio text, artistic statement, and tags
- Replace `VIDEO_ID` with your YouTube video ID

### videos.html
- Duplicate the `.video-card` block for each video
- Replace `VIDEO_ID` in each iframe src
- Set `data-category` to match your filter tabs

### blog.html
- Replace `https://your-name.substack.com` with your blog URL
- Add recent post titles, dates, and excerpts

### community.html
- Replace Discord / Telegram / Instagram links

### reviews.html
- Replace placeholder text with real testimonials
- Optionally add client photos inside `.author-avatar`

### podcast.html
- Replace Spotify / YouTube / Apple Podcast URLs
- Add episode titles, descriptions, durations
- Optionally uncomment the embedded Spotify player

### contact.html
- Replace social handles and links
- Replace Calendly link
- For a working form: sign up at formspree.io, get your form ID,
  and set `action="https://formspree.io/f/YOUR_FORM_ID"` on the `<form>` tag,
  then remove the `onsubmit` attribute

---

## 🎨 Customising colours

All colours are in `shared.css` under `:root`. The main ones:

```css
--ink: #2a2118;          /* main dark colour */
--parchment: #f5f0e8;    /* background */
--accent: #c4956a;       /* warm amber accent */
--water: #9ab8c4;        /* river blue */
--moss: #7a8c6e;         /* green */
```

---

## 📱 Mobile

On screens under 768px wide, the map is hidden and replaced with a swipeable carousel automatically. No extra setup needed.

---

## 🚀 Hosting

You can host this for free on:
- **GitHub Pages** — push to a repo, enable Pages in Settings
- **Netlify** — drag and drop the folder at netlify.app
- **Vercel** — same drag-and-drop or connect a GitHub repo
