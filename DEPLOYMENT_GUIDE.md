# Deployment Guide - China Dragon Restaurant Website

This guide will walk you through deploying your website to GitHub Pages and configuring your custom domain.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Domain name (chinadragonmoulton.com) purchased from a domain registrar

## 🚀 Step 1: Push to GitHub

### Initialize Git Repository (if not already done)

```bash
cd /Users/jameshuang/china-dragon-moulton

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: China Dragon Restaurant website"
```

### Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `china-dragon-moulton`
3. Description: "Official website for China Dragon Restaurant in Moulton, Alabama"
4. Choose: **Public** (required for free GitHub Pages)
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

### Push to GitHub

```bash
# Add remote repository (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/china-dragon-moulton.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 🌐 Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/public`
5. Click **Save**

GitHub will now build and deploy your site. This takes 1-2 minutes.

Your site will be available at: `https://yourusername.github.io/china-dragon-moulton/`

## 🔗 Step 3: Configure Custom Domain

### A. Update DNS Records

Log in to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.) and add these DNS records:

#### For Root Domain (chinadragonmoulton.com)

Add **4 A records** pointing to GitHub's IP addresses:

```
Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.108.153
TTL: 3600 (or automatic)

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

#### For WWW Subdomain (www.chinadragonmoulton.com)

Add **1 CNAME record**:

```
Type: CNAME
Name: www
Value: yourusername.github.io
TTL: 3600
```

**Note:** Replace `yourusername` with your actual GitHub username.

### B. Configure GitHub Pages Custom Domain

1. Go to your repository **Settings > Pages**
2. Under "Custom domain", enter: `chinadragonmoulton.com`
3. Click **Save**
4. Wait for DNS check (can take up to 24 hours, usually 10-30 minutes)
5. Once verified, check **Enforce HTTPS**

The CNAME file in your `public/` folder will be automatically updated by GitHub.

## ✅ Step 4: Verify Deployment

### Check Your Website

1. Wait 5-10 minutes after DNS configuration
2. Visit: https://chinadragonmoulton.com
3. Verify all pages load correctly:
   - Homepage: https://chinadragonmoulton.com/
   - Menu: https://chinadragonmoulton.com/menu.html
   - Contact: https://chinadragonmoulton.com/contact.html
   - Privacy: https://chinadragonmoulton.com/privacy.html
   - Terms: https://chinadragonmoulton.com/terms.html

### Test Redirects

- http://chinadragonmoulton.com → should redirect to HTTPS
- www.chinadragonmoulton.com → should redirect to chinadragonmoulton.com

## 🔧 Step 5: Update Repository Links

After deployment, update the GitHub repository links in your HTML files:

1. Open each HTML file (index.html, menu.html, contact.html, privacy.html, terms.html)
2. Find: `https://github.com/yourusername/china-dragon-moulton`
3. Replace with your actual GitHub URL
4. Commit and push changes:

```bash
git add .
git commit -m "Update GitHub repository links"
git push
```

## 📱 Step 6: Test Website

### Browser Testing

Test on multiple browsers:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Device Testing

Test on multiple devices:
- ✅ Desktop (1920x1080, 1366x768)
- ✅ Tablet (iPad, Android tablet)
- ✅ Mobile (iPhone, Android phone)

### Accessibility Testing

Use these tools:
- [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- Chrome Lighthouse (DevTools > Lighthouse)

### HTML/CSS Validation

- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

## 🔄 Making Updates

### Update Website Content

1. Edit files in the `public/` folder
2. Test locally (optional)
3. Commit and push:

```bash
git add .
git commit -m "Update menu prices"
git push
```

GitHub Pages will automatically rebuild (takes 1-2 minutes).

### Update Menu

Edit `public/menu.html`:
- Update prices
- Add/remove items
- Change descriptions

### Update Hours

Update in all files:
- `public/index.html`
- `public/contact.html`
- All footer sections

### Update Contact Info

Update phone/address in:
- All HTML files (footers)
- `RESTAURANT_INFO.md`
- `README.md`

## 🐛 Troubleshooting

### Website Not Loading

1. **Check DNS propagation:** Use https://dnschecker.org/
2. **Wait:** DNS changes can take up to 24 hours
3. **Clear browser cache:** Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
4. **Check GitHub Pages status:** Settings > Pages

### HTTPS Not Working

1. Wait 24 hours after DNS configuration
2. Uncheck and re-check "Enforce HTTPS" in GitHub Pages settings
3. Verify DNS records are correct

### Custom Domain Not Working

1. Verify CNAME file exists in `public/` folder
2. Check DNS records are correct
3. Wait for DNS propagation
4. Try accessing via GitHub Pages URL first

### Changes Not Showing

1. Wait 1-2 minutes for GitHub Pages to rebuild
2. Clear browser cache
3. Check commit was pushed: `git log`
4. Verify files are in `public/` folder

## 📊 Analytics (Optional)

To add Google Analytics:

1. Create Google Analytics account
2. Get tracking code
3. Add to all HTML files before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

4. Update Privacy Policy to mention analytics

## 🔒 Security Best Practices

- ✅ HTTPS enforced
- ✅ No sensitive data in repository
- ✅ Regular updates to content
- ✅ Monitor for security issues
- ✅ Keep dependencies minimal (we have none!)

## 📞 Support

### Website Issues
- Check GitHub repository issues
- Review deployment logs in GitHub Actions

### Domain Issues
- Contact your domain registrar support
- Check DNS configuration

### Restaurant Information Updates
- Edit files and push to GitHub
- Changes appear in 1-2 minutes

## 📝 Maintenance Checklist

### Monthly
- [ ] Verify website is loading correctly
- [ ] Check all links work
- [ ] Update menu if needed
- [ ] Verify hours are correct

### Quarterly
- [ ] Review and update legal pages if needed
- [ ] Check accessibility compliance
- [ ] Test on new browsers/devices
- [ ] Review analytics (if enabled)

### Annually
- [ ] Renew domain name
- [ ] Update copyright year in footer
- [ ] Review and update content
- [ ] Full accessibility audit

## 🎉 Success!

Your website is now live! Share it with customers:

- **Website:** https://chinadragonmoulton.com
- **Phone:** (256) 668-7847
- **Address:** 15301 Court St, Moulton, AL 35650

---

**Need Help?**

- GitHub Pages Documentation: https://docs.github.com/en/pages
- GitHub Support: https://support.github.com/
- Restaurant Phone: (256) 668-7847