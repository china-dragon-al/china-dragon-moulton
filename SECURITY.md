# Security Policy

## Supported Versions

This is a static website with no backend or database. All versions currently in the `main` branch are considered supported.

| Version | Supported |
|---------|-----------|
| main    | ✅ Yes     |

## Reporting a Vulnerability

If you discover a security vulnerability on this website, please report it responsibly.

**Contact:**
- Phone: (256) 974-3788 (business hours: Monday, Wednesday–Sunday 11:00 AM – 8:30 PM Central Time)
- GitHub: Open a private [security advisory](https://github.com/china-dragon-al/china-dragon-moulton/security/advisories/new)

Please **do not** open a public GitHub Issue for security vulnerabilities.

## Scope

This is a static informational website hosted on GitHub Pages. It has:
- No user accounts or authentication
- No database or backend server
- No form submissions or user-generated content
- No payment processing

Relevant areas for responsible disclosure include:
- Cross-site scripting (XSS) in any inline content
- Outdated or misconfigured Content Security Policy headers
- Sensitive information inadvertently committed to the repository

## Response

We will acknowledge reports within 5 business days and aim to resolve confirmed issues within 30 days.

## Security Measures

- Content Security Policy (CSP) meta tags on all pages
- `X-Frame-Options`, `X-Content-Type-Options`, and `Referrer-Policy` headers via `.htaccess`
- HTTPS enforced via GitHub Pages
- No secrets, API keys, or credentials are stored in this repository
