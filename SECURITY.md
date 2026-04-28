# Security & Privacy Guidelines

## 🔒 Repository Security

This document outlines the security measures and best practices for the China Dragon Moulton website repository.

## .gitignore Protection

The `.gitignore` file is configured to prevent sensitive information from being committed to the repository. Here's what's protected:

### 🚨 Critical - Never Commit These

#### API Keys & Credentials
```
*api_key*
*apikey*
*secret_key*
*access_token*
*auth_token*
*.key
*.pem
secrets.json
credentials.json
```

**Why:** API keys and credentials can be used to access paid services, databases, or private information. If exposed publicly, they can lead to:
- Unauthorized charges to your accounts
- Data breaches
- Service abuse
- Identity theft

#### Certificates & Security Files
```
*.p12
*.pfx
*.cer
*.crt
.secrets
.credentials
```

**Why:** SSL certificates and security files contain cryptographic keys that protect your website's security.

#### Database Files
```
*.db
*.sqlite
*.sqlite3
*.sql
```

**Why:** Database files may contain customer information, orders, or other sensitive business data.

#### Payment Information
```
*payment*
*stripe*
*paypal*
*credit_card*
```

**Why:** Payment processing credentials and customer payment data must be protected by law (PCI DSS compliance).

#### Personal Identifiable Information (PII)
```
*ssn*
*social_security*
*tax_id*
*ein*
```

**Why:** Personal information is protected by privacy laws (GDPR, CCPA, etc.). Exposure can lead to identity theft and legal liability.

### 📁 System & Development Files

#### Operating System Files
```
.DS_Store          # macOS
Thumbs.db          # Windows
.directory         # Linux
```

**Why:** These files contain local system information and clutter the repository.

#### Editor Configuration
```
.vscode/
.idea/
*.sublime-workspace
```

**Why:** Personal editor settings shouldn't be forced on other developers.

#### Environment Variables
```
.env
.env.local
.env.*.local
```

**Why:** Environment files often contain API keys, database passwords, and other secrets.

#### Node Modules
```
node_modules/
package-lock.json
```

**Why:** Dependencies are large and should be installed via package.json, not committed.

#### Python Virtual Environments
```
venv/
__pycache__/
*.pyc
```

**Why:** Virtual environments are machine-specific and contain large dependency files.

### 🗑️ Temporary & Backup Files

```
*.tmp
*.temp
*.bak
*.backup
*.old
*.orig
*.swp
```

**Why:** These are temporary files that don't belong in version control.

### 📊 Build & Cache Files

```
dist/
build/
.cache/
coverage/
*.min.js
*.min.css
```

**Why:** Generated files should be built from source, not committed.

## 🛡️ What IS Safe to Commit

### ✅ Public Website Files
- HTML files (`*.html`)
- CSS files (`*.css`)
- JavaScript files (`*.js`)
- Images for the website (`*.jpg`, `*.png`, `*.svg`)
- Fonts (`*.woff`, `*.woff2`, `*.ttf`)

### ✅ Documentation
- README.md
- LICENSE
- Documentation files (`*.md`)

### ✅ Configuration (Non-Sensitive)
- `.gitignore`
- `CNAME` (domain configuration)
- Public configuration files

### ✅ Legal Documents
- Privacy Policy
- Terms of Service
- Accessibility statements

## 🔐 Best Practices

### 1. Never Commit Secrets
- Use environment variables for API keys
- Store credentials in secure password managers
- Use `.env` files (which are gitignored)

### 2. Review Before Committing
```bash
# Always review what you're committing
git status
git diff

# Check for sensitive data
git diff | grep -i "password\|key\|secret\|token"
```

### 3. If You Accidentally Commit Secrets

**IMPORTANT:** If you accidentally commit sensitive information:

1. **Immediately rotate/change the exposed credentials**
2. **Remove from Git history:**
   ```bash
   # Use BFG Repo-Cleaner or git-filter-branch
   # Contact your Git administrator for help
   ```
3. **Force push the cleaned history** (if repository is private)
4. **Notify affected parties** if customer data was exposed

### 4. Use GitHub Secrets
For GitHub Actions or deployment:
- Store secrets in GitHub repository settings
- Use GitHub Secrets for CI/CD pipelines
- Never hardcode credentials in workflows

### 5. Regular Security Audits
- Review `.gitignore` regularly
- Check for exposed secrets using tools like:
  - `git-secrets`
  - `truffleHog`
  - GitHub's secret scanning

## 📋 Compliance Requirements

### GDPR/CCPA
- Never commit customer personal data
- Never commit email addresses or phone numbers
- Never commit order history or payment information

### PCI DSS
- Never commit credit card numbers
- Never commit CVV codes
- Never commit payment processor credentials

### ADA/Accessibility
- Public website files are safe to commit
- Accessibility documentation is safe to commit
- No personal user data should be in accessibility features

## 🚨 Emergency Response

If sensitive data is exposed:

1. **Immediate Actions:**
   - Revoke/rotate all exposed credentials
   - Change all passwords
   - Disable compromised API keys

2. **Notification:**
   - Notify affected customers (if PII exposed)
   - Report to relevant authorities (if required by law)
   - Document the incident

3. **Prevention:**
   - Update `.gitignore`
   - Implement pre-commit hooks
   - Train team members

## 📞 Security Contact

For security concerns or to report vulnerabilities:
- **Phone:** (256) 668-7847
- **Email:** Contact through website form
- **Response Time:** Within 24 hours

## 🔄 Regular Updates

This security policy should be reviewed:
- Quarterly (every 3 months)
- After any security incident
- When adding new features that handle data
- When integrating new third-party services

---

**Last Updated:** April 28, 2026  
**Version:** 1.0  
**Maintained By:** China Dragon Moulton Web Team