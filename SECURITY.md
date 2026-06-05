# Security Policy

## Overview

The China Dragon Restaurant website is a **static site** (HTML, CSS, and a small
amount of vanilla JavaScript) hosted on GitHub Pages. It has:

- **No backend server, database, or API**
- **No user accounts or logins**
- **No collection or storage of personal data** (no forms, no analytics, no cookies set by us)
- **No payment processing**

Because the site is fully static, the attack surface is intentionally minimal.

## Reporting a Vulnerability

If you discover a security issue, please report it responsibly:

- **Phone:** (256) 974-3788 (during business hours — Mon, Wed–Sun, 11:00 AM – 8:30 PM Central)
- **GitHub Issues:** https://github.com/china-dragon-al/china-dragon-moulton/issues
  (please do **not** include exploit details in a public issue — ask for a private contact first)

We aim to acknowledge reports within **3 business days**.

## Hardening Measures

The site applies the following defensive measures:

- **Content Security Policy (CSP)** on every page via `<meta http-equiv>`, scoped to:
  - `script-src 'self'` (no inline scripts, no third-party scripts)
  - `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`
  - `frame-src https://www.google.com` only on pages that embed the Google Map
- **`rel="noopener noreferrer"`** on all external links (`target="_blank"`)
- **No third-party trackers, analytics, or cookies** (only local accessibility preferences are stored on the visitor's own device)
- **HTTPS** enforced by GitHub Pages

## Secrets

This repository contains **no secrets**. A comprehensive [`.gitignore`](.gitignore)
excludes credentials, keys, environment files, and other sensitive artifacts as a
safeguard. Never commit:

- API keys, tokens, or credentials
- `.env` files
- Certificates / private keys
- Any customer or payment data

## Scope

In scope: the website code and content in this repository.

Out of scope: third-party services the site links to or embeds (e.g., Google Maps,
Facebook), which are governed by their own security policies.
