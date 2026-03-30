# NEXUS v1.0
## E-Crimes Hunting & Disruption Guide

> A comprehensive, visually-driven field manual for blockchain forensics and crypto crime investigation — from foundational concepts to advanced disruption tactics used by real-world investigators.

---

## Overview

**NEXUS v1.0** is a single-file interactive HTML guide designed for anyone who wants to understand and practice cryptocurrency crime investigation. It bridges the gap between "Crypto 101" fundamentals and professional-grade forensic tradecraft.

The guide is structured as a modular learning path with 12 core modules plus a reference section, progressive difficulty levels (Beginner → Expert), an interactive knowledge check quiz, and a searchable glossary.

---

## What's Inside

| Module | Title | Level |
|--------|-------|-------|
| 00 | Introduction — E-Crime Investigation | Beginner |
| 01 | Blockchain Foundations | Beginner |
| 02 | Key Terminology | Beginner |
| 03 | Blockchain Tracing in Practice | Intermediate |
| 04 | OSINT Techniques | Intermediate |
| 05 | The Investigator's Toolkit (25+ tools) | Intermediate |
| 06 | Crypto Scams & Fraud Typologies | Intermediate |
| 07 | Exchange Hacks & DeFi Exploits | Advanced |
| 08 | Ransomware & Nation-State Threats | Advanced |
| 09 | Legal Process & VASP Cooperation | Advanced |
| 10 | Asset Seizure & Forfeiture | Advanced |
| 11 | Real-World Case Studies | Advanced |
| 12 | Knowledge Check (Quiz) | All |
| REF | Glossary & Resources | All |

---

## Key Content Areas

### Phase 1 — Foundations of the Ledger
- **Blockchain mechanics**: How blocks are validated and why the ledger is immutable
- **Wallet anatomy**: Public/private keys, address formats across Bitcoin, Ethereum, Tron, Solana, BNB Chain
- **Why blockchain IS traceable**: The investigator's advantage over traditional financial crime
- **Core terminology**: Sourced from the TRM Labs Blockchain Investigator's Flip Book

### Phase 2 — The E-Crime Landscape & Adversary TTPs
- **Crime typologies**: Pig butchering/romance scams, rug pulls, pump-and-dumps, social engineering
- **Exchange hacks**: The $1.5B Bybit hack dissected step-by-step
- **Ransomware flows**: Payment → mixing → OTC cash-out (Khinkis case, March 2026)
- **Nation-state threats**: Lazarus Group / TraderTraitor attribution methodology
- **Obfuscation mechanics**: Mixers/tumblers, chain-hopping, peeling chains, DeFi layering

### Phase 3 — The Investigator's Toolkit
- **On-chain forensics**: TRM Labs, Arkham Intelligence, Cielo Finance, MetaSleuth, Etherscan, Blockchair, Dune Analytics
- **Bridge & cross-chain tracking**: Pulsy, Socketscan, Range Protocol
- **OSINT & identity**: OSINT Industries, IntelX, Snusbase, LeakPeek, Spur.us, Cavalier
- **Evidence preservation**: Wayback Machine, Archive.today, Obsidian
- **Tracing methodology**: The 3-step framework (Identify → Trace → Disrupt) from TRM Labs

### Phase 4 — Disruption & Legal Action
- **VASP legal process**: KYC requests, omnibus subpoenas, emergency freezes
- **Asset seizure**: Custody options, theories of forfeiture, pre-seizure planning
- **International cooperation**: MLAT treaties, FBI/Europol/INTERPOL channels
- **Attribution techniques**: Pattern matching, behavioral fingerprinting, timing analysis

---

## Landmark Cases Covered

| Case | Amount | Key Lesson |
|------|--------|------------|
| Bybit Hack (Feb 2025) | $1.5B | Supply chain attack + Lazarus attribution methodology |
| $243M BTC Theft (Aug 2024) | $243M | Social media OSINT + spending pattern analysis |
| Haby Coinbase Scammer (2025) | $2M+ | Timing analysis + location OSINT from Instagram stories |
| USMS Asset Theft (Jan 2026) | $46M | Behavioral OSINT from private Telegram recordings |
| Hyperliquid Whale (2025) | $20M | Bridge analysis + funding source tracing |
| Khinkis OTC Broker (Mar 2026) | $4.7M+ | Ransomware payment tracing + exposure analysis |
| Al-Sadaqah Terror Financing | — | Direct VASP exposure → legal process workflow |

---

## Source Materials

NEXUS v1.0 draws on the following primary sources:

- **TRM Labs Blockchain Investigator's Flip Book** (law enforcement edition) — methodology, case examples, and legal process guidance
- **FACT Attribution Framework v1.1** — supplementary attribution and clustering methodology
- **Chainalysis Crypto Crime Report** (annual) — statistics and trend data
- **FBI IC3 PSAs** — official Lazarus Group address lists and warnings
- **ZachXBT's published investigations** — real-world technique examples (Telegram, Substack, X)
- **OSINT Industries' ZachXBT toolkit thread** — curated tool list sourced directly from ZachXBT
- **OFAC sanctions database** — sanctioned addresses, mixers, and entities

---

## Usage

NEXUS v1.0 is a single self-contained HTML file with no external dependencies beyond Google Fonts.

```bash
# Open locally
open index.html

# Or serve via any static HTTP server
python3 -m http.server 8080
```

Navigate using the left sidebar. Progress is tracked as you visit each module. Use the Knowledge Check (Module 12) to test retention.

---

## Intended Audience

- Cybersecurity professionals (DFIR, Threat Hunting, OSINT, CTI, Malware Analysts)
- **Law enforcement** — digital asset investigators, financial crimes units, cyber divisions
- **Private investigators & compliance teams** — VASP compliance, AML analysts
- **Security researchers** — blockchain security, threat intelligence
- **Crypto enthusiasts** — understand how on-chain investigations actually work
- **Students & educators** — structured curriculum for blockchain forensics coursework

---

## Disclaimer

This guide is for educational purposes only. All case studies reference publicly documented investigations. Tool descriptions reflect capabilities as of March 2026. Always consult legal counsel before deploying investigative techniques, particularly regarding breach database access, which may have jurisdiction-specific restrictions.

---

## Version History

| Version | Date | Notes |
|---------|------|-------|
| v1.0 | March 2026 | Initial release under NEXUS branding. 12 modules, 25+ tools, 50+ case references. |

---

*NEXUS v1.0 — E-Crimes Hunting & Disruption Guide*  
