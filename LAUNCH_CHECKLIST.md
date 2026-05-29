# 🚀 Launch Checklist - Do These Before Going Live

## Critical: Must Complete Before Launch

### Step 1: Update Contact Information (15 minutes)
- [ ] **WhatsApp Number**
  - File: `components/whatsapp-button.tsx` (line 17)
  - Change: `href="https://wa.me/97714567890"` → Your number
  
- [ ] **Email Address**
  - File: `components/footer.tsx`
  - Update all email links
  - File: `app/contact/page.tsx`
  - Verify email form handler
  
- [ ] **Phone Number**
  - File: `components/footer.tsx`
  - Update contact phone
  - File: `app/contact/page.tsx`
  - Update in form/contact details
  
- [ ] **Office Address**
  - File: `components/footer.tsx`
  - Update address & location
  - File: `app/about/page.tsx`
  - Update about page address

- [ ] **Social Media Links**
  - File: `components/footer.tsx`
  - Update LinkedIn, Facebook, Instagram
  - Ensure links are correct

---

### Step 2: Update Logo & Images (20 minutes)
- [ ] **Company Logo**
  - Replace: `public/images/logo.png`
  - Dimensions: 200x200px recommended
  - Format: PNG (transparent background preferred)

- [ ] **Destination Images**
  - [ ] UK: `public/images/uk-destination.png`
  - [ ] USA: `public/images/usa-destination.png`
  - [ ] Canada: `public/images/canada-destination.jpeg`
  - [ ] Germany: `public/images/germany-destination.png`
  - [ ] Australia: `public/images/australia-destination.png`
  - Format: High-quality JPG/PNG
  - Size: ~1200x600px minimum

- [ ] **Hero/Feature Images**
  - Replace: `public/images/graduate-freedom.png`
  - Used in: About section
  - Recommended: Graduate/education themed

- [ ] **Favicon Icons**
  - Replace: `public/favicon.ico`
  - Replace: `public/apple-icon.png`
  - Replace: `public/icon-dark-32x32.png`
  - Replace: `public/icon-light-32x32.png`
  - File: Generate from your logo

---

### Step 3: Update SEO & Website Metadata (10 minutes)
- [ ] **Page Title & Description**
  - File: `app/layout.tsx`
  - Update title to your company name
  - Update meta description
  - Update keywords

- [ ] **Open Graph Tags**
  - File: `app/layout.tsx`
  - Update og:title
  - Update og:description
  - Update og:image
  - Update og:url (your domain)

- [ ] **Canonical URL**
  - File: `app/layout.tsx`
  - Set to your main domain

Example:
```tsx
export const metadata: Metadata = {
  title: "Uranus International Education | Study Abroad Consultancy Nepal",
  description: "Expert educational consultancy guiding Nepali students to UK, USA, Canada, Germany, Australia universities.",
  keywords: "study abroad, education consultancy, Nepal, visa support, university application",
  openGraph: {
    title: "Uranus International Education",
    description: "Your pathway to global education",
    url: "https://uranusinternational.com",
    image: "https://uranusinternational.com/og-image.png",
  }
}
```

---

### Step 4: Update Company Information (15 minutes)
- [ ] **About Page Content**
  - File: `app/about/page.tsx`
  - Update company story/mission
  - Update team information
  - Update founding year
  - Update company achievements

- [ ] **Homepage Statistics**
  - File: `app/page.tsx`
  - Update "500+ Students" count
  - Update "95% Success Rate"
  - Update "100+ Partner Universities"
  - Update "5 Study Destinations"

- [ ] **Services Page**
  - File: `app/services/page.tsx`
  - Update service descriptions
  - Add/remove services as needed
  - Update pricing if applicable

- [ ] **Testimonials**
  - File: `components/testimonial-carousel.tsx`
  - Replace with real student testimonials
  - Update student names & universities
  - Update student photos (optional)

---

### Step 5: Update Destination Information (30 minutes)
- [ ] **Destinations Page**
  - File: `app/destinations/page.tsx`
  - Verify UK information is accurate
  - Verify USA information is accurate
  - Verify Canada information is accurate
  - Verify Germany information is accurate
  - Verify Australia information is accurate

- [ ] **Country Feature Sections**
  - File: `components/uk-feature.tsx` - Update UK details
  - File: `components/usa-feature.tsx` - Update USA details
  - File: `components/canada-feature.tsx` - Update Canada details
  - File: `components/germany-feature.tsx` - Update Germany details
  - File: `components/australia-feature.tsx` - Update Australia details

Update for each country:
- [ ] University names & rankings
- [ ] Course focus areas
- [ ] Cost estimates
- [ ] Duration of programs
- [ ] Visa requirements
- [ ] Job opportunities
- [ ] Student testimonials

---

### Step 6: Applied Courses (20 minutes)
- [ ] **Course Listings**
  - File: `app/applied-courses/page.tsx`
  - Update course list
  - Add/remove courses as needed
  - Update course descriptions
  - Update which universities offer them

---

## Important: Domain & Deployment Setup

### Step 7: Domain Configuration
- [ ] **Purchase Domain**
  - Registrar: GoDaddy, Namecheap, Google Domains, etc.
  - Example: `uranusinternational.com`
  - Cost: ~$10-15/year

- [ ] **DNS Configuration**
  - Update nameservers to Vercel's
  - Or configure DNS records:
    - Add CNAME record pointing to Vercel
    - Instructions provided by Vercel

### Step 8: Deploy to Vercel
- [ ] **Push to GitHub**
  ```bash
  git add .
  git commit -m "Launch: Update all company information and content"
  git push origin main
  ```

- [ ] **Import Project**
  - Go to https://vercel.com/new
  - Select your GitHub repository
  - Click "Import"
  - Vercel auto-configures Next.js

- [ ] **Configure Project**
  - Project Name: Choose name
  - Framework Preset: Next.js (auto-selected)
  - Build Command: `bun run build` (auto-filled)
  - Output Directory: `.next` (auto-filled)
  - Click "Deploy"

- [ ] **Wait for Build**
  - First build takes ~1-2 minutes
  - Status page shows deployment progress
  - Shows preview URL when complete

- [ ] **Add Custom Domain**
  - Project Settings → Domains
  - Add your custom domain
  - Follow DNS instructions
  - Wait 10-30 minutes for DNS propagation

---

## Verification: Test Before Announcement

### Step 9: Pre-Launch Testing (30 minutes)
- [ ] **Visit Website**
  - Go to: https://yoursite.com
  - Page loads without errors
  - All content is correct

- [ ] **Test All Pages**
  - [ ] Home page loads
  - [ ] About page loads
  - [ ] Destinations page loads
  - [ ] Services page loads
  - [ ] Applied Courses page loads
  - [ ] Testimonials page loads
  - [ ] Contact page loads

- [ ] **Test Functionality**
  - [ ] Dark/light theme toggle works
  - [ ] Navigation menu works
  - [ ] Mobile menu works
  - [ ] WhatsApp button works
  - [ ] Contact form submits
  - [ ] Scroll animations work
  - [ ] All links work

- [ ] **Mobile Testing**
  - Test on iPhone (Safari)
  - Test on Android (Chrome)
  - Test on tablet
  - Verify responsive design

- [ ] **Performance Check**
  - Use: https://pagespeed.web.dev
  - Check Core Web Vitals
  - Verify images load
  - Check load times

- [ ] **SEO Check**
  - Use: https://seositecheckup.com
  - Verify meta tags
  - Check mobile optimization
  - Verify schema markup

---

## Recommended: Enhance Before Launch

### Step 10: Optional Enhancements
- [ ] **Email Setup**
  - Set up contact form email
  - Enable email notifications
  - Test form submission

- [ ] **Analytics Setup**
  - Create Google Analytics account
  - Add tracking code to site
  - Monitor pageviews

- [ ] **CRM Integration**
  - Connect Zapier (if using CRM)
  - Auto-save form submissions
  - Send follow-up emails

- [ ] **Google My Business**
  - Create business listing
  - Add office location
  - Add business hours
  - Get Google review link

- [ ] **Social Media**
  - Create business profiles
  - Link to website
  - Share launch announcement

---

## Final Checklist (Day of Launch)

### Morning (1 hour before launch)
- [ ] Final review of content
- [ ] Check all links work
- [ ] Test contact form
- [ ] Test WhatsApp button
- [ ] Verify images load
- [ ] Check mobile responsiveness
- [ ] Test on different browsers

### At Launch Time
- [ ] Deploy to Vercel (if not already done)
- [ ] Verify custom domain works
- [ ] Test website one final time
- [ ] Announce on social media
- [ ] Send email to contacts
- [ ] Monitor for errors

### Post-Launch (First 24 hours)
- [ ] Monitor error logs
- [ ] Check analytics
- [ ] Respond to inquiries quickly
- [ ] Track form submissions
- [ ] Watch Vercel dashboard
- [ ] Collect initial feedback

---

## Troubleshooting During Launch

**If Website Doesn't Load**
1. Check Vercel deployment status
2. Verify DNS is propagated: `nslookup yoursite.com`
3. Clear browser cache (Ctrl+Shift+Delete)
4. Wait 15 minutes for DNS to propagate

**If Images Don't Load**
1. Verify image files exist in `/public/images/`
2. Check file paths are correct
3. Rebuild: `bun run build` then redeploy
4. Clear CDN cache

**If Contact Form Doesn't Work**
1. Check browser console for errors
2. Verify form action/API endpoint
3. Check email configuration
4. Test with sample submission

**If Page is Slow**
1. Check Vercel performance dashboard
2. Optimize image sizes
3. Check Core Web Vitals
4. Enable aggressive caching

---

## Quick Reference

### Important Files to Update
| File | Purpose | Update Time |
|------|---------|------------|
| `app/layout.tsx` | SEO & metadata | 5 min |
| `components/footer.tsx` | Contact info | 5 min |
| `app/page.tsx` | Homepage content | 10 min |
| `app/about/page.tsx` | Company info | 10 min |
| `app/destinations/page.tsx` | Destination info | 20 min |
| `components/*-feature.tsx` | Country details | 30 min |
| `public/images/` | Images & logo | 20 min |

### Total Time to Launch
- Content updates: 2 hours
- Deployment: 15 minutes
- Testing: 30 minutes
- **Total: ~2.5-3 hours**

---

## Post-Launch Maintenance

### Day 1-7
- [ ] Monitor error logs daily
- [ ] Respond to inquiries
- [ ] Check Core Web Vitals
- [ ] Collect user feedback
- [ ] Fix any bugs found

### Week 2-4
- [ ] Review analytics
- [ ] Update statistics
- [ ] Add customer testimonials
- [ ] Optimize images if needed
- [ ] Promote on social media

### Month 1+
- [ ] Monthly analytics review
- [ ] Content updates
- [ ] Feature additions
- [ ] Performance optimization
- [ ] SEO improvements

---

## Success Indicators

✅ All pages load without errors  
✅ Contact form works  
✅ Mobile design is responsive  
✅ Images load quickly  
✅ No 404 errors  
✅ Core Web Vitals pass  
✅ Forms submit successfully  
✅ Social sharing works  

---

## Need Help?

- **Deployment Issues**: See `DEPLOYMENT_GUIDE.md`
- **Project Overview**: See `README.md`
- **Production Details**: See `PRODUCTION_READY.md`
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/help

---

**Status**: Ready to Launch 🎉  
**Estimated Time**: 2.5-3 hours to go live  
**Difficulty**: Easy (mostly updates, no coding)  

**You've got this! 💪**

---

*Last Updated: May 10, 2026*  
*Version: 1.0.0*
