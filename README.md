# Uranus International Education - Website

Professional educational consultancy website for Nepali students seeking admission to international universities.

## ✨ Features

**Modern Design**
- Responsive layout (mobile, tablet, desktop)
- Smooth scroll animations & interactions
- Dark/Light theme support
- Professional color scheme (Navy & Red)

**🌍 Country Features**
- Dedicated sections for UK, USA, Canada, Germany, Australia
- University highlights & program information
- Study cost & duration details
- Visa success statistics

**📱 Key Pages**
- **Home**: Hero, About preview, Country features, Testimonials
- **About**: Company mission, team details, achievements
- **Destinations**: Detailed country information with comparisons
- **Services**: Consultation, application, visa support, etc.
- **Applied Courses**: Industry-relevant program listings
- **Testimonials**: Student success stories with reviews
- **Contact**: Inquiry form with WhatsApp integration

**🚀 Performance**
- SEO optimized (meta tags, Open Graph, structured data)
- Google Core Web Vitals ready
- Image optimization (WebP, AVIF)
- Production bundle: ~175 KB First Load JS

**🔒 Security**
- HTTPS enforced
- Input validation
- No hardcoded secrets
- CSRF protection

---

## Tech Stack

```
Frontend:  Next.js 15.5.9, React 19.2, TypeScript
Styling:   Tailwind CSS 3.4.17, Framer Motion
UI:        Shadcn UI (80+ components), Radix UI
Forms:     React Hook Form, Zod validation
Charts:    Recharts
Icons:     Lucide React
Hosting:   Vercel (auto-deploy ready)
```

---

## Quick Start

### Prerequisites
- Node.js 18+ or Bun
- Git

### Setup

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Open http://localhost:3000 in browser
```

### Build for Production

```bash
# Create optimized build
bun run build

# Test production build locally
bun run start
```

---

## Project Structure

```
app/                    # Next.js App Router pages
├── page.tsx           # Home page
├── about/             # About page
├── contact/           # Contact form
├── destinations/      # Study destinations
├── services/          # Services page
├── testimonials/      # Reviews & testimonials
├── applied-courses/   # Course listings
├── layout.tsx         # Root layout
└── globals.css        # Global styles

components/           # React components
├── navbar.tsx, footer.tsx
├── whatsapp-button.tsx
├── *-feature.tsx      # Country sections
├── ui/               # Shadcn UI components
└── theme-provider.tsx

public/              # Static assets
├── images/         # Product images
├── favicon.ico
└── icons/

lib/ & utils/       # Utilities & helpers
```

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import at [vercel.com](https://vercel.com)
3. Vercel auto-deploys on push
4. Add custom domain

**See `DEPLOYMENT_GUIDE.md` for detailed instructions.**

### Other Platforms
- AWS Amplify
- Netlify
- Self-hosted (Docker)

---

## Customization

### Update Contact
Edit `components/whatsapp-button.tsx`:
```tsx
href="https://wa.me/97714567890"  // Your number
```

### Change Logo
Replace `public/images/logo.png`

### Update Colors
Edit `tailwind.config.ts` (navy & red colors)

### Modify Content
- Homepage: `app/page.tsx`
- About: `app/about/page.tsx`
- Destinations: `app/destinations/page.tsx`
- Testimonials: `components/testimonial-carousel.tsx`

---

## Performance Metrics

| Metric | Status |
|--------|--------|
| First Load JS | ✅ 175 KB |
| LCP | ✅ < 2.5s |
| CLS | ✅ < 0.1 |
| FID | ✅ < 100ms |

---

## Browser Support

✅ Chrome/Edge, Firefox, Safari, Mobile browsers

---

## Accessibility

✅ WCAG 2.1 AA compliant  
✅ Keyboard navigation  
✅ Screen reader support  
✅ Color contrast standards  

---

## Scripts

```bash
bun run dev       # Development server
bun run build     # Production build
bun run start     # Run production build
bun run lint      # Linting
```

---

## Support

For deployment or technical questions, see `DEPLOYMENT_GUIDE.md`.

---

**Status**: Production Ready ✅  
**Build**: Successful  
**Ready to Deploy**: Yes  
**Estimated Deploy Time**: 5-10 minutes
