# China Dragon Restaurant Website

Official website for China Dragon Restaurant in Moulton, Alabama.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Accessibility](https://img.shields.io/badge/accessibility-WCAG%202.1%20AA-green.svg)

## 🏮 About

China Dragon Restaurant has been serving authentic Chinese cuisine to Moulton, Alabama since 1999. This website provides information about our menu, location, hours, and services.

**Restaurant Information:**
- **Address:** 15301 Court St, Moulton, AL 35650
- **Phone:** (256) 668-7847
- **Hours:** Monday, Wednesday-Sunday: 11:00 AM - 9:00 PM (Closed Tuesday)
- **Services:** Dine-in and Takeout
- **Rating:** 4.4 stars

## 🌐 Website

- **Production URL:** https://chinadragonmoulton.com
- **Repository:** https://github.com/china-dragon-al/china-dragon-moulton

## ✨ Features

- **Responsive Design:** Mobile-first design that works on all devices
- **Accessibility Compliant:** WCAG 2.1 AA standards
- **SEO Optimized:** Meta tags and semantic HTML
- **Legal Compliance:** Privacy Policy, Terms of Service, MIT License
- **Fast Loading:** Optimized static HTML/CSS
- **No Dependencies:** Pure HTML/CSS, no frameworks required

## 📁 Project Structure

```
china-dragon-moulton/
├── docs/                   # Website files (GitHub Pages serves from here)
│   ├── index.html         # Homepage
│   ├── menu.html          # Menu page
│   ├── contact.html       # Contact page
│   ├── privacy.html       # Privacy Policy
│   ├── terms.html         # Terms of Service
│   ├── css/
│   │   └── main.css       # Main stylesheet
│   ├── images/            # Image assets
│   ├── .htaccess          # Apache security headers
│   ├── robots.txt         # Search engine instructions
│   ├── sitemap.xml        # Site structure for SEO
│   └── .well-known/       # Security and verification files
│       └── security.txt   # Security contact information
├── LICENSE                # MIT License
├── README.md              # This file
├── SECURITY.md            # Security & privacy guidelines
├── ACCESSIBILITY_COMPLIANCE.md  # ADA compliance documentation
├── WEBSITE_PLAN.md        # Detailed planning document
├── RESTAURANT_INFO.md     # Restaurant information reference
└── .gitignore             # Files to exclude from git
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
- **Primary Red:** #C62828 (Traditional Chinese red)
- **Dark Red:** #B71C1C
- **Gold:** #FFD700 (Prosperity and luck)
- **White:** #FFFFFF
- **Dark Gray:** #333333

### Typography
- **Headings:** Georgia, serif
- **Body:** System fonts (Apple/Windows/Android native)

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
- **CSS3:** Modern styling with CSS Grid and Flexbox
- **No JavaScript:** Static site for maximum compatibility
- **Google Maps:** Embedded location map

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
Update hours in:
- `docs/index.html` (homepage)
- `docs/contact.html` (contact page)
- `docs/privacy.html` (footer)
- `docs/terms.html` (footer)
- `docs/menu.html` (footer)

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
- ✅ No user data collection
- ✅ No external scripts (except Google Maps)
- ✅ Content Security Policy ready
- ✅ Regular security audits recommended

For detailed security guidelines, see [SECURITY.md](SECURITY.md).

## 📞 Support

For website issues or questions:
- **Restaurant Phone:** (256) 668-7847
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

- **v1.0.0** (2026-04-28) - Initial release
  - Homepage with hero section
  - Complete menu page
  - Contact page with map
  - Privacy Policy and Terms of Service
  - Full accessibility compliance
  - Mobile responsive design

---

**China Dragon Restaurant** - Authentic Chinese Cuisine Since 1999

*Serving Moulton, Alabama with pride* 🏮