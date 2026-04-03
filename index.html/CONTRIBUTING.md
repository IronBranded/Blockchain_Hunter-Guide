# Contributing to NEXUS

## Quick edits (most common)

**Edit existing module content** → open the relevant file in `sections/` and edit the HTML directly.

| Module | File |
|--------|------|
| 00 Introduction | `sections/s0-introduction.html` |
| 01 Blockchain Foundations | `sections/s1-foundations.html` |
| 02 Key Terminology | `sections/s2-terminology.html` |
| 03 Blockchain Tracing | `sections/s3-tracing.html` |
| 04 OSINT Techniques | `sections/s4-osint.html` |
| 05 Tools & Arsenal | `sections/s5-tools.html` |
| 06 Economic Crimes | `sections/s6-economic-crimes.html` |
| 07 Electronic Crimes | `sections/s6b-electronic-crimes.html` |
| 08 Blockchain PCMLTF | `sections/s6c-blockchain-pcmltf.html` |
| 09 Case Studies | `sections/s11-case-studies.html` |
| 10 DFIR / Threat Hunting | `sections/s14-dfir.html` |
| 11 Malware Analysis | `sections/s15-malware.html` |
| R1 Exchange Hacks | `sections/s7-exchange-hacks.html` |
| R2 Ransomware & APTs | `sections/s8-ransomware-apts.html` |
| R3 Legal Process | `sections/s9-legal-process.html` |
| R4 Asset Forfeiture | `sections/s10-asset-forfeiture.html` |
| R5 Glossary & Resources | `sections/s13-glossary.html` |

---

## Common content blocks

### Add a tool card

```html
<div class="tool-card">
  <span class="tool-cost cost-free">Free</span>       <!-- cost-free / cost-paid / cost-freemium -->
  <div class="tool-name">Tool Name</div>
  <div class="tool-type">Category — Platform</div>
  <div class="tool-desc">What it does and why it matters for investigators.</div>
</div>
```

### Add a case study

```html
<div class="case-study">
  <div class="case-header">
    <div class="case-badge tag-red">Category</div>
    <div class="case-title">Case Title</div>
    <div class="case-amount">$X.XM</div>
  </div>
  <div class="case-body">
    <div class="case-meta">
      <div class="case-meta-item">📅 DATE: <span>Month Year</span></div>
      <div class="case-meta-item">🎯 METHOD: <span>Attack vector</span></div>
      <div class="case-meta-item">✅ OUTCOME: <span>Result</span></div>
    </div>
    <div class="case-text">
      Narrative description of the case, methodology, and outcome.
    </div>
    <div class="case-findings">
      <div class="case-findings-label">Key Investigation Techniques</div>
      <div class="case-finding-item">First finding or technique used</div>
      <div class="case-finding-item">Second finding or technique used</div>
    </div>
  </div>
</div>
```

### Add a glossary term

Open `sections/s13-glossary.html` and add inside `<div id="glossaryList">`:

```html
<div class="glossary-item">
  <div class="glossary-term">Your Term</div>
  <div class="glossary-def">Clear, concise definition. Reference sources where applicable.</div>
</div>
```

Terms display in the order written — group alphabetically or by theme.

### Add a drilldown accordion

```html
<div class="drilldown-category">
  <div class="drilldown-header" onclick="toggleDrilldown(this)">
    <div class="drilldown-icon">🔍</div>
    <div class="drilldown-title-group">
      <div class="drilldown-title">Topic Title</div>
      <div class="drilldown-subtitle">keyword · keyword · keyword</div>
    </div>
    <div class="drilldown-tags">
      <span class="tag tag-red">Tag</span>
    </div>
    <div class="drilldown-chevron">›</div>
  </div>
  <div class="drilldown-body">
    <div class="subcategory-tabs">
      <div class="sub-tab active" onclick="switchTab(this,'UNIQUE-panel-a')">Overview</div>
      <div class="sub-tab" onclick="switchTab(this,'UNIQUE-panel-b')">Details</div>
    </div>
    <div class="subcategory-panels">
      <div class="subcategory-panel active" id="UNIQUE-panel-a">
        <!-- Panel A content -->
      </div>
      <div class="subcategory-panel" id="UNIQUE-panel-b">
        <!-- Panel B content -->
      </div>
    </div>
  </div>
</div>
```

> **Important:** Panel `id` values must be **globally unique** across all section files, because all loaded sections share the same DOM. Use a prefix like `mymodule-panel-a` to avoid collisions.

### Add an alert box

```html
<div class="alert info">          <!-- info / warn / danger / success / purple -->
  <div class="alert-label">📌 Label Text</div>
  Alert content goes here. Supports <strong>bold</strong> and <code>code</code>.
</div>
```

### Add a timeline

```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-step">PHASE 1</div>
    <div class="timeline-title">Phase Title</div>
    <div class="timeline-text">Description of this phase.</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-step">PHASE 2</div>
    <div class="timeline-title">Next Phase</div>
    <div class="timeline-text">Description.</div>
  </div>
</div>
```

---

## Adding a brand-new module

### 1. Create the section file

```bash
touch sections/s16-your-topic.html
```

Write your content using any of the blocks above. Start with the standard header:

```html
<div class="breadcrumb">NEXUS v1.0 <span>›</span> YOUR SECTION</div>
<div class="section-header">
  <div class="section-tag">MODULE 16 // ADVANCED</div>
  <div class="section-title">Your Topic Title</div>
  <p class="section-desc">Brief description of what this module covers.</p>
</div>

<!-- your content here -->
```

### 2. Register it in `js/main.js`

```js
// In the SECTIONS array (controls order):
const SECTIONS = [
  's0','s1','s2','s3','s4','s5',
  's6','s6b','s6c',
  's7','s8','s9','s10','s11',
  's14','s15','s13',
  's16'            // ← add here
];

// In the SECTION_FILES map:
const SECTION_FILES = {
  // ... existing entries ...
  's16': 'sections/s16-your-topic.html',   // ← add here
};
```

### 3. Add the empty container in `index.html`

```html
<!-- inside <main class="main-content"> -->
<div class="section" id="s16"></div>
```

### 4. Add the nav item in `index.html`

```html
<!-- inside <nav class="sidebar"> under the appropriate section label -->
<a class="nav-item" onclick="showSection('s16')">
  <span class="nav-item-num">12</span>
  <span class="nav-item-text">Your Topic</span>
  <span class="nav-difficulty diff-advanced">Expert</span>  <!-- diff-beginner / diff-intermediate / diff-advanced / diff-all -->
</a>
```

---

## Updating the header ticker

Edit the `.header-ticker` div in `index.html`. Each `<span class="ticker-item">` is one item:

```html
<div class="header-ticker">
  <span class="ticker-item">🔴 <span class="t-hot">ACTIVE</span> — Your alert here</span>
  <span class="ticker-item">⚠️ <span class="t-warn">ALERT</span> — Another item</span>
  <span class="ticker-item">✅ <span class="t-ok">UPDATE</span> — Positive news</span>
</div>
```

Colour classes: `.t-hot` (red) · `.t-warn` (amber) · `.t-ok` (green)

---

## Updating colours / theme

All colour tokens are CSS variables at the top of `css/styles.css`:

```css
:root {
  --accent:  #00d4ff;   /* cyan    — primary highlights, links */
  --accent2: #ff6b00;   /* orange  — calls to action, warnings */
  --accent3: #00ff9d;   /* green   — success, confirmed */
  --danger:  #ff2d2d;   /* red     — critical, threats */
  --warn:    #ffb300;   /* amber   — caution */
  --purple:  #b44fff;   /* purple  — intelligence, nation-state */
  --teal:    #00e5cc;   /* teal    — secondary accent */
  --bg:      #050a0f;   /* page background */
  --panel:   #0a1628;   /* card/panel background */
  --border:  #1a3a5c;   /* border colour */
  --text:    #b8d4e8;   /* body text */
  --text-dim:#4a6a8a;   /* subdued text, labels */
  --text-bright:#e8f4ff;/* headings, bright text */
}
```

---

## Local development

Browsers block `fetch()` on `file://` URLs (CORS restriction). Use any static server:

```bash
python3 -m http.server 8080    # built-in, no install needed
# open http://localhost:8080
```

---

## Before committing

- [ ] All new panel IDs are globally unique across all `sections/*.html` files
- [ ] New `switchTab()` calls reference panel IDs that exist in the same file
- [ ] Tested in local server (not `file://`)
- [ ] Spelling and accuracy checked on any new case study or tool entry
