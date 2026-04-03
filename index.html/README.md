# NEXUS v1.0 — E-Crimes Hunting & Disruption Guide
## Multi-File GitHub Pages Structure

---

## Project Structure

```
NEXUS_E-Crimes/
│
├── index.html              ← Shell: header, hero, sidebar, empty section containers
│
├── css/
│   └── styles.css          ← All styles (edit here to retheme)
│
├── js/
│   └── main.js             ← Navigation, lazy-loading, accordions, glossary, progress
│
└── sections/               ← One file per module — edit these to update content
    ├── s0-introduction.html
    ├── s1-foundations.html
    ├── s2-terminology.html
    ├── s3-tracing.html
    ├── s4-osint.html
    ├── s5-tools.html
    ├── s6-economic-crimes.html
    ├── s6b-electronic-crimes.html
    ├── s6c-blockchain-pcmltf.html
    ├── s7-exchange-hacks.html
    ├── s8-ransomware-apts.html
    ├── s9-legal-process.html
    ├── s10-asset-forfeiture.html
    ├── s11-case-studies.html
    ├── s13-glossary.html
    ├── s14-dfir.html
    └── s15-malware.html
```

---

## How Content Loading Works

Sections are **lazy-loaded on demand** via the Fetch API.

1. The shell `index.html` contains only empty `<div class="section" id="sX"></div>` containers.
2. When a user clicks a nav item, `main.js` fetches `sections/sX-name.html` and injects it.
3. Already-loaded sections are cached in memory — no double-fetching.
4. A subtle loading bar animates while the fetch completes.

This means:
- **Initial page load is fast** (no giant HTML block).
- **Each section file is independently editable** — change one module without touching others.
- **GitHub Pages serves static files** — no build step or server required.

---

## Editing Guide

### Update a single module
Open the relevant file in `sections/` and edit the HTML directly.

```bash
# Example: update the Tools section
nano sections/s5-tools.html
```

Everything inside that file is injected verbatim into the `<div id="s5">` container.
All CSS classes from `styles.css` are available.

### Add a new section

**1. Create the HTML partial:**
```bash
touch sections/s16-new-topic.html
# Write your content using existing CSS classes
```

**2. Register it in `js/main.js`:**
```js
// Add to SECTIONS array:
const SECTIONS = [..., 's16'];

// Add to SECTION_FILES map:
const SECTION_FILES = {
  ...
  's16': 'sections/s16-new-topic.html',
};
```

**3. Add the empty shell container in `index.html`:**
```html
<div class="section" id="s16"></div>
```

**4. Add the nav item in `index.html` sidebar:**
```html
<a class="nav-item" onclick="showSection('s16')">
  <span class="nav-item-num">12</span>
  <span class="nav-item-text">New Topic</span>
  <span class="nav-difficulty diff-advanced">Expert</span>
</a>
```

### Update global styles
Edit `css/styles.css`. CSS variables at the top of the file control all colours:

```css
:root {
  --accent:  #00d4ff;   /* cyan — primary highlights */
  --accent2: #ff6b00;   /* orange — warnings / calls to action */
  --accent3: #00ff9d;   /* green — success / confirmed */
  --danger:  #ff2d2d;   /* red — critical / threat */
  --warn:    #ffb300;   /* amber — caution */
  --purple:  #b44fff;   /* purple — intelligence / nation-state */
}
```

### Update navigation ticker
Edit the `.header-ticker` block in `index.html` — each `<span class="ticker-item">` is one item.

### Update hero stats
Edit the `.hero-stats` block in `index.html`.

---

## Local Development

GitHub Pages serves static files — but browsers block `fetch()` on `file://` URLs.
Use a local static server:

```bash
# Python (built-in)
python3 -m http.server 8080
# Then open http://localhost:8080

# Node.js (npx)
npx serve .

# VS Code
# Install "Live Server" extension → right-click index.html → Open with Live Server
```

---

## GitHub Pages Deployment

1. Push this entire folder to your GitHub repository root (or `/docs` branch).
2. Go to **Settings → Pages → Source** and select the correct branch/folder.
3. GitHub Pages will serve `index.html` automatically.
4. Sections are fetched relative to `index.html` — no path configuration needed.

---

## Available CSS Classes (Quick Reference)

| Class | Use |
|-------|-----|
| `.card.accent` / `.accent2` / `.accent3` | Coloured top-border card |
| `.card.danger` / `.warn` / `.purple` | Alert-coloured card |
| `.alert.info` / `.warn` / `.danger` / `.success` | Left-border alert box |
| `.grid-2` / `.grid-3` / `.grid-4` | Responsive CSS grid |
| `.tool-card` | Tool entry card (with `.tool-name`, `.tool-type`, `.tool-desc`) |
| `.timeline` → `.timeline-item` | Vertical timeline |
| `.steps` → `.step` | Numbered step list |
| `.case-study` | Case study block with header/body/findings |
| `.table-wrap` → `<table>` | Styled responsive table |
| `.drilldown-category` | Accordion with sub-tabs |
| `.tag-blue/orange/green/red/purple/teal` | Inline tag pill |
| `.expert-quote` | Block quote with attribution |
| `.diff-beginner/intermediate/advanced/all` | Nav difficulty badge |
| `.cost-free/paid/freemium` | Tool cost badge |

### Accordion Pattern
```html
<div class="drilldown-category">
  <div class="drilldown-header" onclick="toggleDrilldown(this)">
    <div class="drilldown-icon">🔍</div>
    <div class="drilldown-title-group">
      <div class="drilldown-title">Title Here</div>
      <div class="drilldown-subtitle">subtitle · keywords</div>
    </div>
    <div class="drilldown-tags"><span class="tag tag-blue">Tag</span></div>
    <div class="drilldown-chevron">›</div>
  </div>
  <div class="drilldown-body">
    <div class="subcategory-tabs">
      <div class="sub-tab active" onclick="switchTab(this,'panel-a')">Tab A</div>
      <div class="sub-tab" onclick="switchTab(this,'panel-b')">Tab B</div>
    </div>
    <div class="subcategory-panels">
      <div class="subcategory-panel active" id="panel-a">Content A</div>
      <div class="subcategory-panel" id="panel-b">Content B</div>
    </div>
  </div>
</div>
```

> **Panel ID uniqueness:** Every `id="..."` on a subcategory panel must be globally unique across all section files, since all sections exist in the same DOM simultaneously once loaded.

---

## Version History

| Version | Date | Notes |
|---------|------|-------|
| v1.0 | March 2026 | Initial single-file release |
| v1.1 | April 2026 | Refactored to multi-file GitHub Pages structure |

---

*NEXUS v1.0 — E-Crimes Hunting & Disruption Guide*
