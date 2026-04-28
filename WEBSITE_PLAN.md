# China Dragon Restaurant Website - Comprehensive Plan

## Project Overview
Creating a compliant, professional website for China Dragon restaurant in Moulton, Alabama, hosted on GitHub Pages.

## Restaurant Information (from Google Maps)
- **Name**: China Dragon
- **Address**: 15301 Court St, Moulton, AL 35650
- **Rating**: 4.4 stars
- **Type**: Chinese restaurant
- **Status**: Temporarily closed (as of search date)
- **Accessibility**: Wheelchair accessible (entrance, parking, restroom, seating)

## Website Goals
1. Professional online presence for the restaurant
2. Full legal compliance (copyright, privacy, terms)
3. ADA/WCAG 2.1 AA accessibility compliance
4. Mobile-responsive design
5. Easy to maintain and update
6. GitHub Pages hosting with optional custom domain

## Legal Compliance Requirements

### 1. Copyright & Licensing
- **MIT License** for website code (open source)
- Copyright notice in footer: "© 2026 China Dragon Restaurant. All rights reserved."
- Clear attribution for any third-party resources used

### 2. Privacy Policy (REQUIRED)
Must include:
- What data is collected (contact forms, cookies, analytics)
- How data is used and stored
- Third-party services (Google Maps, analytics if used)
- User rights (access, deletion, opt-out)
- Contact information for privacy concerns
- GDPR compliance considerations
- Cookie consent mechanism

### 3. Terms of Service
Must include:
- Website usage terms
- Intellectual property rights
- Disclaimer of warranties
- Limitation of liability
- Governing law (Alabama state law)
- Contact information for legal matters

### 4. Accessibility Compliance (ADA/WCAG 2.1 AA)
- Semantic HTML5 structure
- ARIA labels and landmarks
- Keyboard navigation support
- Sufficient color contrast (4.5:1 minimum)
- Alt text for all images
- Responsive text sizing
- Skip navigation links
- Form labels and error messages
- Focus indicators

## Website Structure

```
china-dragon-moulton/
├── public/
│   ├── index.html              # Homepage
│   ├── menu.html               # Menu page
│   ├── contact.html            # Contact page
│   ├── privacy.html            # Privacy Policy
│   ├── terms.html              # Terms of Service
│   ├── css/
│   │   ├── main.css           # Main stylesheet
│   │   └── responsive.css     # Mobile responsive styles
│   ├── js/
│   │   ├── main.js            # Main JavaScript
│   │   └── accessibility.js   # Accessibility enhancements
│   ├── images/
│   │   ├── logo.png           # Restaurant logo
│   │   ├── hero-bg.jpg        # Hero section background
│   │   └── menu/              # Menu item images
│   └── assets/
│       └── fonts/             # Web fonts (if needed)
├── LICENSE.md                  # MIT License
├── README.md                   # Project documentation
└── WEBSITE_PLAN.md            # This file
```

## Page Designs

### Homepage (index.html)
**Sections:**
1. **Header/Navigation**
   - Logo and restaurant name
   - Navigation menu (Home, Menu, Contact)
   - Mobile hamburger menu

2. **Hero Section**
   - Large background image or color
   - Restaurant name and tagline
   - Call-to-action buttons (View Menu, Order Now)
   - Address and phone number

3. **About Section**
   - Brief restaurant description
   - Cuisine type and specialties
   - Quality/service highlights

4. **Features Section**
   - Dine-in, Takeout, Delivery options
   - Icons with descriptions
   - Operating hours

5. **Location Preview**
   - Embedded Google Maps
   - Address information
   - Link to full contact page

6. **Footer**
   - Copyright notice
   - Links to Privacy Policy and Terms
   - Social media links (if applicable)
   - Contact information

### Menu Page (menu.html)
**Sections:**
1. Navigation (same as homepage)
2. Menu Header
3. Menu Categories:
   - Appetizers
   - Soups
   - Fried Rice
   - Lo Mein
   - Chow Mein
   - Chicken Dishes
   - Beef Dishes
   - Pork Dishes
   - Seafood Dishes
   - Vegetable Dishes
   - Chef's Specialties
   - Combination Plates
   - Lunch Specials
   - Beverages
4. Each item with:
   - Name
   - Description
   - Price
   - Spicy indicator (if applicable)
5. Footer (same as homepage)

### Contact Page (contact.html)
**Sections:**
1. Navigation (same as homepage)
2. Contact Information
   - Address with Google Maps embed
   - Phone number (clickable tel: link)
   - Email (if available)
   - Operating hours
3. Contact Form (optional)
   - Name field
   - Email field
   - Phone field
   - Message field
   - Submit button
   - Privacy notice
4. Directions section
5. Footer (same as homepage)

### Privacy Policy Page (privacy.html)
**Required Sections:**
1. Introduction
2. Information We Collect
3. How We Use Your Information
4. Cookies and Tracking
5. Third-Party Services
6. Data Security
7. Your Rights
8. Children's Privacy
9. Changes to Privacy Policy
10. Contact Information

### Terms of Service Page (terms.html)
**Required Sections:**
1. Acceptance of Terms
2. Use of Website
3. Intellectual Property
4. User Conduct
5. Disclaimers
6. Limitation of Liability
7. Indemnification
8. Governing Law
9. Changes to Terms
10. Contact Information

## Design Specifications

### Color Scheme (Chinese Restaurant Theme)
- **Primary**: Red (#D32F2F or #C62828) - Traditional Chinese color
- **Secondary**: Gold/Yellow (#FFC107 or #FFD700) - Prosperity
- **Accent**: Dark Red (#B71C1C)
- **Background**: White (#FFFFFF)
- **Text**: Dark Gray (#333333)
- **Footer**: Dark Gray/Black (#212121)

### Typography
- **Headings**: Sans-serif (e.g., 'Roboto', 'Open Sans', Arial)
- **Body**: Sans-serif for readability
- **Minimum font size**: 16px for body text
- **Line height**: 1.5 for readability

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Accessibility Features Checklist

- [ ] Semantic HTML5 elements (header, nav, main, section, article, footer)
- [ ] ARIA landmarks and labels
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Skip to main content link
- [ ] Focus visible indicators
- [ ] Color contrast ratio 4.5:1 minimum
- [ ] Alt text for all images
- [ ] Form labels properly associated
- [ ] Error messages clear and accessible
- [ ] Responsive text sizing (rem/em units)
- [ ] No content only in color
- [ ] Captions for videos (if any)
- [ ] Accessible dropdown menus
- [ ] Touch targets minimum 44x44px

## GitHub Pages Setup

### Option 1: Using main branch /public folder
1. Create `public` folder in repository root
2. Place all website files in `public/`
3. Go to repository Settings > Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/public" folder
6. Save settings

### Option 2: Using gh-pages branch
1. Create `gh-pages` branch
2. Push website files to this branch
3. GitHub Pages will automatically deploy

### Custom Domain Setup (Optional)
1. Add CNAME file to public folder with domain name
2. Configure DNS records:
   - A records pointing to GitHub Pages IPs
   - Or CNAME record pointing to username.github.io
3. Enable HTTPS in GitHub Pages settings

## Required Information to Gather

Before implementation, we need:
1. **Phone number** - for contact information
2. **Email address** - for contact and legal notices
3. **Operating hours** - for all days of the week
4. **Menu items** - complete menu with prices
5. **Services offered** - dine-in, takeout, delivery details
6. **Owner/Business name** - for legal documents
7. **Year established** - for copyright notice
8. **Logo** - restaurant logo image (if available)
9. **Photos** - restaurant and food photos (if available)
10. **Domain name** - if using custom domain
11. **Special features** - any unique offerings or specialties

## Implementation Timeline

### Phase 1: Setup & Documentation (Current)
- ✓ Research reference website
- ✓ Gather restaurant information
- ✓ Create project plan
- [ ] Finalize missing information

### Phase 2: Legal Compliance
- [ ] Create LICENSE.md (MIT License)
- [ ] Write Privacy Policy
- [ ] Write Terms of Service
- [ ] Review legal documents

### Phase 3: Core Website Development
- [ ] Set up project structure
- [ ] Create HTML templates
- [ ] Develop CSS stylesheets
- [ ] Implement responsive design
- [ ] Add JavaScript functionality

### Phase 4: Content & Accessibility
- [ ] Add restaurant content
- [ ] Create menu with items and prices
- [ ] Implement accessibility features
- [ ] Add ARIA labels and semantic HTML
- [ ] Test keyboard navigation

### Phase 5: Testing & Deployment
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Validate HTML/CSS
- [ ] Run accessibility audit
- [ ] Set up GitHub Pages
- [ ] Configure domain (if applicable)

### Phase 6: Final Review
- [ ] Review all legal documents
- [ ] Test all links and forms
- [ ] Verify compliance requirements
- [ ] Final accessibility check
- [ ] Launch website

## Compliance Checklist

### Legal Compliance
- [ ] MIT License file created
- [ ] Copyright notice in footer
- [ ] Privacy Policy page complete
- [ ] Terms of Service page complete
- [ ] Cookie consent mechanism (if using cookies)
- [ ] Contact information for legal matters
- [ ] Proper attribution for third-party resources

### ADA/WCAG 2.1 AA Compliance
- [ ] Semantic HTML structure
- [ ] ARIA labels and landmarks
- [ ] Keyboard navigation
- [ ] Color contrast 4.5:1 minimum
- [ ] Alt text for images
- [ ] Form labels and validation
- [ ] Focus indicators
- [ ] Responsive design
- [ ] Skip navigation link
- [ ] Accessible error messages

### Technical Compliance
- [ ] Valid HTML5
- [ ] Valid CSS3
- [ ] Mobile responsive
- [ ] Cross-browser compatible
- [ ] Fast loading times
- [ ] Secure (HTTPS)
- [ ] SEO meta tags
- [ ] Social media meta tags

## Reference Website Analysis (aribbq.com)

**Key Features to Implement:**
1. Clean, professional design
2. Clear navigation structure
3. Hero section with call-to-action
4. Menu organization by category
5. Location information with maps
6. Contact information prominently displayed
7. Mobile-responsive design
8. Simple, easy-to-read layout

**Improvements for China Dragon:**
1. Add comprehensive legal pages
2. Implement full accessibility features
3. Add privacy and terms links in footer
4. Include cookie consent if needed
5. Ensure all compliance requirements met

## Next Steps

1. **Gather Missing Information**: Contact restaurant owner for phone, hours, menu, etc.
2. **Review Plan**: Get approval on website structure and design
3. **Switch to Code Mode**: Begin implementation once plan is approved
4. **Iterative Development**: Build and test each section
5. **Final Review**: Ensure all compliance requirements met before launch

## Notes

- Website will be static HTML/CSS/JS (no backend required)
- GitHub Pages provides free hosting
- All code will be open source (MIT License)
- Restaurant content and branding remain proprietary
- Focus on simplicity and maintainability
- Prioritize compliance and accessibility
- Mobile-first responsive design approach

## Questions for Restaurant Owner

1. What is the restaurant's phone number?
2. What are your operating hours (for each day)?
3. Do you have a complete menu with prices?
4. What services do you offer (dine-in, takeout, delivery)?
5. Do you have a logo we can use?
6. Do you have any photos of the restaurant or food?
7. What is the official business name and owner name?
8. When was the restaurant established?
9. Do you want to use a custom domain name?
10. Are there any special dishes or features to highlight?
11. Do you have any existing social media accounts?
12. What email should be used for contact and legal purposes?