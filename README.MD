# Blockchain Hunter Guide
### *Forensic Investigator's Field Manual — Version 1.0*

> **The complete, open-source guide to cryptocurrency crime investigation.** From blockchain fundamentals to advanced forensic tradecraft — built around the FACT Attribution Framework with Canadian legal context.

[![Status](https://img.shields.io/badge/status-live-brightgreen?style=flat-square)](https://github.com/IronBranded/Blockchain_Hunter-Guide)
[![Framework](https://img.shields.io/badge/framework-FACT_v1.1-9b59b6?style=flat-square)](https://doi.org/10.5281/zenodo.18005597)
[![Modules](https://img.shields.io/badge/modules-16-00d4ff?style=flat-square)](#modules)
[![Canadian Context](https://img.shields.io/badge/context-🇨🇦_Canada-ff0000?style=flat-square)](#canadian-legal-framework)
[![Last Updated](https://img.shields.io/badge/updated-March_2026-orange?style=flat-square)](#)

---

## What Is This?

**Blockchain Hunter Guide** is a self-contained, single-file HTML field manual for anyone learning or practicing cryptocurrency crime investigation. It bridges the gap between "Crypto 101" and the advanced forensic tradecraft used by investigators like ZachXBT, TRM Labs, Chainalysis, and global law enforcement agencies.

The guide is structured around the **FACT Attribution Framework** (Shavers, 2025) — a jurisprudence-centered methodology that explicitly separates *technical identification* ("what acted?") from *person-level attribution* ("who acted?"). This distinction is the cornerstone of legally defensible blockchain investigation.
---

OPEN THE GUIDE
https://ironbranded.github.io/Blockchain_Hunter-Guide/
---

## Features

- **16 progressive modules** from beginner foundations to expert tradecraft
- **FACT Attribution Framework** — the full F→A→C→T lifecycle applied throughout
- **Interactive knowledge checks** — 6 scenario-based quiz questions with explanations
- **50+ real case studies** including the $1.5B Bybit hack, the $243M BTC theft, and the Khinkis ransomware OTC case
- **Canadian legal context** — FINTRAC, PCMLTFA, PIPEDA, RCMP asset seizure framework
- **25+ tool profiles** — TRM Labs, Arkham, Cielo, Tenderly, Phalcon, OSINT Industries, and more
- **Searchable glossary** with 40+ defined terms
- **Zero dependencies** — one HTML file, no backend, no build step

---

## Modules

| # | Module | Level |
|---|--------|-------|
| 00 | Introduction & Investigator Principles | Beginner |
| 01 | Blockchain Foundations (BTC, ETH, Tron, Solana, Monero) | Beginner |
| 02 | Key Terminology (searchable, with autocomplete) | Beginner |
| FA | **FACT Attribution Framework** — Identification vs Attribution | Intermediate |
| 03 | Blockchain Tracing in Practice | Intermediate |
| 03b | UTXO vs Account-Based Tracing | Intermediate |
| 04 | OSINT Techniques (ZachXBT methodology) | Intermediate |
| 05 | Tools & Arsenal (25+ tools profiled) | Intermediate |
| 05b | Bridge & Cross-Chain Reconciliation | **Expert** |
| 05c | Smart Contract Forensics (Flash Loans, MEV) | **Expert** |
| 05d | Malware Analysis (YARA, FLOSS, C2 extraction) | **Expert** |
| 06 | Scams & Fraud Typologies | Intermediate |
| 07 | Exchange Hacks & DeFi Exploits | **Expert** |
| 08 | Ransomware & Nation-State Threats (Lazarus Group) | **Expert** |
| 09 | Legal Process & VASP Cooperation | **Expert** |
| 09b | Canadian Legal Framework | **Expert** |
| 10 | Asset Seizure & Forfeiture | **Expert** |
| 11 | Case Studies (50+ real investigations) | **Expert** |
| 12 | Knowledge Check (interactive quizzes) | Mixed |
| REF | Glossary & Key Resources | All Levels |

---

## Canadian Legal Framework

Module 09b provides a dedicated deep-dive into the Canadian legal landscape for crypto investigations, covering:

- **FINTRAC** — MSB registration, STR/LCTR/EFTR reporting obligations, law enforcement disclosure provisions
- **PCMLTFA** — Canada's primary AML legislation; Travel Rule threshold ($1,000 CAD), 5-year record retention, VASP obligations
- **PIPEDA** — Privacy constraints for OSINT; publicly available information exemption; law enforcement vs. civilian distinctions
- **RCMP Asset Seizure** — Restraint Orders, Seizure Warrants, Forfeiture Orders, Civil Forfeiture (provincial), and practical notes on private key seizure

> *This section is educational context, not legal advice. Consult qualified legal counsel for specific cases.*

---

## Core Framework: FACT Attribution

This guide is built around the **FACT Attribution Framework** by Brett Shavers (2025):

```
F — Forensic Authority & Compliance    Establish legal/organizational authority before analysis
A — Analyze Evidence                   Structured technical analysis; generate candidate actors
C — Correlate & Sequence               Multi-stream convergence across identity layers
T — Testify & Transfer Findings        Defensible reporting with documented uncertainty
```

**The central principle:** A wallet address is not a person. Identifying that `bc1q…` deposited to Binance is *technical identification* — not *person-level attribution*. The latter requires converging multiple independent evidence streams and explicitly falsifying alternative actors.

Full citation: Shavers, B. (2025). *The FACT Attribution Framework v1.1*. Zenodo. [doi.org/10.5281/zenodo.18005597](https://doi.org/10.5281/zenodo.18005597)

---

## Getting Started

The guide is a single, self-contained HTML file with no external dependencies beyond Google Fonts (loaded via CDN).

```bash
# Clone the repository
git clone https://github.com/IronBranded/Blockchain_Hunter-Guide.git

# Open directly in any browser — no server required
open index.html
```

Or simply [download the latest release](https://github.com/IronBranded/Blockchain_Hunter-Guide/releases) and open `index.html`.

---

## Key Case Studies Covered

| Case | Amount | Lesson |
|------|--------|--------|
| Bybit Exchange Hack (Feb 2025) | $1.5B | Supply chain attack; FACT applied; Lazarus Group attribution |
| $243M Bitcoin Theft (Aug 2024) | $243M | Social media OSINT + on-chain convergence (FACT Stage C) |
| Haby — Coinbase Impersonation (Abbotsford, BC) | $2M+ | Canadian OSINT; Instagram location metadata; timing analysis |
| USMS Government Wallet Theft (Jan 2026) | $46M | Private Telegram bragging as investigative lead |
| Khinkis Ransomware OTC Broker (Mar 2026) | $4.7M+ | Taint analysis; bridge tracking; BTC→Tron chain-hop |

---

## Contributing

Issues and pull requests are welcome. Areas of particular value:

- Additional case studies with FACT analysis annotations
- Updated tool profiles (the toolkit evolves fast)
- New quiz questions for underrepresented modules
- Translations for non-English-speaking investigators

Please open an issue before submitting large changes so we can discuss scope and fit.

---

## Resources & Further Reading

- [FACT Attribution Framework v1.1](https://doi.org/10.5281/zenodo.18005597) — Brett Shavers (2025)
- [TRM Labs Blockchain Investigator's Flip Book](https://www.trmlabs.com) — Law enforcement field guide
- [Chainalysis Crypto Crime Report](https://go.chainalysis.com/crypto-crime-report.html) — Annual statistics
- [FINTRAC](https://fintrac-canafe.canada.ca) — Canadian AML guidance and MSB obligations
- [TRM Academy](https://academy.trmlabs.com) — Free blockchain investigation training for law enforcement
- [@ZachXBT](https://x.com/zachxbt) — Primary source for real-world investigative methodology

---

## License

This guide is provided for **educational purposes**. Content referencing the FACT Attribution Framework is cited under fair use — full rights remain with Brett Shavers © 2025. See `LICENSE` for details.

---

*Built for investigators, journalists, compliance professionals, and anyone who wants to understand how cryptocurrency crime is traced and prosecuted. Feedback via GitHub Issues.*
