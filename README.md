# NEXUS v1.0 — E-Crimes Hunting & Disruption Guide

> A comprehensive, visually-driven field manual for blockchain forensics and crypto crime investigation — from foundational concepts to advanced disruption tactics.

**[→ Open the Guide](https://ironbranded.github.io/NEXUS_E-Crimes/)**

---

## Deploying to GitHub Pages

### Option A — New Repository

1. Create a new GitHub repository (e.g. `NEXUS_E-Crimes`)
2. Upload all files from this folder to the repository root
3. Go to **Settings → Pages → Source → Deploy from branch**
4. Select `main` branch, `/ (root)` folder → **Save**
5. Your site will be live at `https://[your-username].github.io/[repo-name]/`

### Option B — GitHub CLI

```bash
git init
git add .
git commit -m "Initial NEXUS v1.0 release"
gh repo create NEXUS_E-Crimes --public --push --source=.
# Then enable Pages in repo Settings → Pages
```

### Option C — Existing Repository

Drop all files into your repo and push. If the repo already has GitHub Pages enabled, the site updates automatically on push.

---

## File Structure

```
nexus-site/
├── index.html                          # Hero landing + Module 00 Introduction
├── foundations.html                    # Modules 01–02: Blockchain Foundations & Terminology
├── tracing.html                        # Module 03: Blockchain Tracing in Practice
├── osint.html                          # Module 04: OSINT Techniques
├── tools.html                          # Module 05: Investigator's Toolkit (25+ tools)
│
├── typologies/
│   ├── economic-crimes.html            # Module 06: Economic Crimes
│   ├── electronic-crimes.html          # Module 07: Electronic Crimes
│   └── blockchain-pcmltf.html          # Module 08: Blockchain PCMLTF
│
├── advanced/
│   ├── dfir.html                       # Module 09: DFIR & Enterprise Threat Hunting
│   └── malware.html                    # Module 10: Malware Analysis & Reverse Engineering
│
├── reference/
│   ├── case-studies.html               # Reference R1: Real-World Case Studies
│   ├── legal-process.html              # Reference R2: Legal Process & VASP Cooperation
│   ├── asset-forfeiture.html           # Reference R3: Asset Seizure & Forfeiture
│   └── glossary.html                   # Reference R4: Glossary & Resources (60+ terms)
│
├── assets/
│   ├── css/style.css                   # Shared stylesheet
│   └── js/main.js                      # Shared JavaScript
│
├── 404.html                            # Custom 404 page
├── _config.yml                         # GitHub Pages configuration
├── .nojekyll                           # Bypass Jekyll processing
└── README.md                           # This file
```

---

## Source Materials

- **TRM Labs Blockchain Investigator's Flip Book** (law enforcement edition)
- **FACT Attribution Framework v1.1**
- **Chainalysis Crypto Crime Report** (annual)
- **FBI IC3 PSAs** — official Lazarus Group address lists and warnings
- **ZachXBT's published investigations**
- **OFAC sanctions database**

---

## Disclaimer

This guide is for educational and professional purposes only. All case studies reference publicly documented investigations. Tool descriptions reflect capabilities as of March 2026. Always consult legal counsel before deploying investigative techniques, particularly regarding breach database access, which may have jurisdiction-specific restrictions.

---

*NEXUS v1.0 — E-Crimes Hunting & Disruption Guide*
