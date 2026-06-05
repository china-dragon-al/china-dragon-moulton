# China Dragon Restaurant Website

Official website for China Dragon Restaurant in Moulton, Alabama.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Accessibility](https://img.shields.io/badge/accessibility-WCAG%202.1%20AA-green.svg)

## 🏮 About

China Dragon Restaurant has been serving authentic Chinese cuisine to Moulton, Alabama since 1999. This website provides information about our menu, location, hours, and services.

**Restaurant Information:**
- **Address:** 15301 Court St, Moulton, AL 35650
- **Phone:** (256) 974-3788 or (256) 974-3796
- **Hours:** Monday, Wednesday-Sunday: 11:00 AM - 8:30 PM (Closed Tuesday)
- **Services:** Dine-in and Takeout
- **Rating:** 4.4 stars

## 🌐 Website

- **Production URL:** https://chinadragonmoulton.com
- **Repository:** https://github.com/china-dragon-al/china-dragon-moulton

## ✨ Features

- **Responsive Design:** Mobile-first layout with an accessible hamburger menu; works across phones, tablets, and desktops
- **Accessibility:** Semantic HTML, ARIA landmarks, skip links, keyboard support, `prefers-reduced-motion`/`prefers-contrast` support, plus an on-page accessibility widget (contrast, grayscale, large text, etc.)
- **SEO Optimized:** Per-page meta descriptions, canonical URLs, Open Graph/Twitter tags, and an XML sitemap
- **Installable (PWA-ready):** Web app manifest, favicon, theme color, and apple-touch icon
- **Legal Compliance:** Privacy Policy, Terms of Service, Accessibility statement, MIT License
- **Fast Loading:** Static HTML/CSS, lazy-loaded images, no render-blocking third-party assets
- **Hardened:** Strict per-page Content Security Policy, no third-party trackers, `rel="noopener"` on external links
- **No Build Step / No Frameworks:** Plain HTML, CSS, and a small amount of vanilla JavaScript

## 📁 Project Structure

```
china-dragon-moulton/
├── docs/                       # Website files (GitHub Pages serves from here)
│   ├── index.html              # Homepage
│   ├── menu.html               # Menu page
│   ├── contact.html            # Contact page (with Google Map)
│   ├── accessibility.html      # Accessibility statement
│   ├── privacy.html            # Privacy Policy
│   ├── terms.html              # Terms of Service
│   ├── license.html            # License page
│   ├── 404.html                # Custom "page not found"
│   ├── css/
│   │   └── main.css            # Main stylesheet
│   ├── js/
│   │   └── accessibility.js    # Mobile nav toggle + accessibility widget
│   ├── images/                 # Image assets (incl. china-dragon-menu.pdf)
│   ├── favicon.svg             # Site icon
│   ├── site.webmanifest        # PWA / installable web app manifest
│   └── sitemap.xml             # Site structure for SEO
├── LICENSE                     # MIT License
├── README.md                   # This file
├── SECURITY.md                 # Security policy
└── .gitignore                  # Files to exclude from git
```

## 🚀 Deployment

### GitHub Pages Setup

1. **Enable GitHub Pages:**
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: `main` / Folder: `/docs`
   - Save

2. **Custom Domain:**
   - Add `CNAME` file to `docs/` folder with your domain: `chinadragonmoulton.com`
   - Configure DNS records:
     ```
     Type: A
     Name: @
     Value: 185.199.108.153
            185.199.109.153
            185.199.110.153
            185.199.111.153
     
     Type: CNAME
     Name: www
     Value: china-dragon-al.github.io
     ```

3. **HTTPS:**
   - Enable "Enforce HTTPS" in GitHub Pages settings

### Local Development

To view the website locally:

```bash
# Clone the repository
git clone https://github.com/china-dragon-al/china-dragon-moulton.git
cd china-dragon-moulton

# Serve the docs folder
# Option 1: Using Python
cd docs
python -m http.server 8000

# Option 2: Using Node.js
npx http-server docs -p 8000

# Option 3: Using PHP
cd docs
php -S localhost:8000

# Open browser to http://localhost:8000
```

## 🎨 Design

### Color Scheme
- **Primary Red:** #D32F2F (Traditional Chinese red)
- **Dark Red:** #B71C1C
- **Gold:** #FFC107 (Prosperity and luck)
- **White:** #FFFFFF
- **Dark Text:** #212121
- A high-contrast variant is applied automatically when the OS requests `prefers-contrast: high`.

### Typography
- **All text:** Native system font stack (`-apple-system, Segoe UI, Roboto, …`) for speed and a familiar feel on every platform. No web fonts are loaded.

### Responsive Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## ♿ Accessibility Features

This website is designed to be accessible to all users:

- ✅ WCAG 2.1 AA compliant
- ✅ Semantic HTML5 structure
- ✅ ARIA labels and landmarks
- ✅ Keyboard navigation support
- ✅ Skip to main content link
- ✅ Color contrast ratio 4.5:1 minimum
- ✅ Alt text for all images
- ✅ Focus indicators
- ✅ Responsive text sizing
- ✅ Screen reader compatible
- ✅ Reduced motion support
- ✅ High contrast mode support

## 📄 Legal Compliance

### Licenses
- **Website Code:** MIT License (see [LICENSE](LICENSE))
- **Content:** © 1999-2026 China Dragon Restaurant

### Legal Pages
- [Privacy Policy](docs/privacy.html) - GDPR/CCPA compliant
- [Terms of Service](docs/terms.html) - Website usage terms

### Compliance Features
- Cookie disclosure
- Data collection transparency
- User rights information
- Contact information for legal matters
- Proper copyright notices

## 🛠️ Technologies Used

- **HTML5:** Semantic markup
- **CSS3:** Modern styling with CSS Grid, Flexbox, custom properties, and `dvh` units
- **Vanilla JavaScript:** Progressive enhancement only — the mobile menu toggle and the accessibility widget. The site remains fully readable and navigable with JavaScript disabled.
- **Google Maps:** Embedded location map (iframe, on the Home and Contact pages)

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Maintenance

### Updating Menu
Edit `docs/menu.html` to update menu items and prices.

### Updating Hours
Hours appear in the body and/or footer of several pages. Update all of:
- `docs/index.html` (hours table + footer)
- `docs/contact.html` (hours table + footer)
- `docs/menu.html` (footer + combo note)
- `docs/accessibility.html` (footer)
- `docs/privacy.html` (footer)
- `docs/terms.html` (footer)
- `docs/license.html` (footer)
- `docs/404.html` (footer)

### Updating Contact Information
Update phone/address in all HTML files' footers and contact sections.

## 📊 Performance

- **Load Time:** < 2 seconds
- **Page Size:** < 100KB per page
- **No External Dependencies:** Faster loading
- **Optimized Images:** Compressed for web

## 🔒 Security

### Protected Information

This repository uses a comprehensive `.gitignore` to protect sensitive information. See [SECURITY.md](SECURITY.md) for full details.

**Never commit:**
- API keys and credentials
- Database files
- Payment information
- Personal identifiable information (PII)
- Environment variables (`.env` files)
- SSL certificates and security files

**Safe to commit:**
- Public website files (HTML, CSS, JS)
- Documentation
- Non-sensitive configuration
- Legal documents

### Security Best Practices

- ✅ All secrets excluded via `.gitignore`
- ✅ HTTPS enforced on production
- ✅ No user data collection, cookies, or analytics
- ✅ No third-party scripts (Google Maps is an embedded iframe, sandboxed by the browser)
- ✅ Strict Content Security Policy enforced per page (`script-src 'self'`, `object-src 'none'`, etc.)
- ✅ `rel="noopener"` on all external links
- ✅ Regular security audits recommended

For detailed security guidelines, see [SECURITY.md](SECURITY.md).

## 📞 Support

For website issues or questions:
- **Restaurant Phone:** (256) 974-3788 or (256) 974-3796
- **GitHub Issues:** [Create an issue](https://github.com/china-dragon-al/china-dragon-moulton/issues)

## 🤝 Contributing

This is a private restaurant website. For suggestions or bug reports, please:
1. Open an issue
2. Contact the restaurant directly

## 📝 License

The website code is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Restaurant name, logo, and content are © 1999-2026 China Dragon Restaurant. All rights reserved.

## 🙏 Acknowledgments

- Design inspired by [aribbq.com](https://aribbq.com)
- Built with accessibility and compliance in mind
- Hosted on GitHub Pages

## 📅 Version History

- **v1.1.0** (2026-06-05) - Cross-browser, mobile & hardening update
  - Fixed fixed-header overlap on inner pages and on mobile
  - Added an accessible hamburger menu for small screens
  - Defined missing CSS variables (restored card/button shadows and transitions)
  - Hero now uses `dvh` to avoid the iOS Safari address-bar jump
  - Replaced the broken Google Maps embed (placeholder IDs) with a working address-based embed
  - Added favicon, theme color, apple-touch icon, and a PWA web manifest
  - Added a custom `404.html`
  - Per-page canonical URLs; completed and refreshed the sitemap
  - Hardened the Content Security Policy on every page (removed unused/third-party allowances)
  - `:focus-visible` focus rings; fixed the "Large Text" accessibility option
  - Lazy-loaded images with explicit dimensions

- **v1.0.0** (2026-04-28) - Initial release
  - Homepage with hero section
  - Complete menu page
  - Contact page with map
  - Privacy Policy and Terms of Service
  - Accessibility statement and on-page widget
  - Mobile responsive design

---

**China Dragon Restaurant** - Authentic Chinese Cuisine Since 1999

*Serving Moulton, Alabama with pride* 🏮