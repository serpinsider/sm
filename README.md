# Santa Monica Maids - Professional Cleaning Services

A clean, modern website for Santa Monica Maids professional house cleaning services serving Santa Monica, California.

## What This Site Is

A **simple, focused cleaning website** with:
- Professional home page with hero video
- Instant quote form with real-time pricing
- Service information and areas served
- Contact information and FAQ
- Clean, modern design with dark blue theme

## Key Features

### Customer Experience
- **Instant Quotes** - Get pricing in 60 seconds
- **Service Areas** - Santa Monica coverage map
- **Service Details** - Complete cleaning task breakdown
- **Easy Contact** - Phone, email, and form options
- **Mobile Responsive** - Works perfectly on all devices

### Design & Branding
- **Brand**: Santa Monica Maids (Santa Monica focused)
- **Colors**: Dark blue backgrounds with gold accents
- **Typography**: Clean, professional fonts
- **Video Hero** - Engaging background video
- **Modern UI** - Backdrop blur effects and smooth animations

## Technology Stack

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Forms**: Formspree integration for quote submissions
- **Icons**: Custom addon service icons
- **Performance**: Optimized images and fast loading

## Service Information

### Location
- **Primary**: Santa Monica, California
- **Areas**: Santa Monica, Venice, Brentwood, Pacific Palisades
- **Contact**: (310) 555-0123 | hello@santamonicamaids.com
- **Address**: 1234 Ocean Avenue, Santa Monica, CA 90401

### Services Offered
- Standard Cleaning
- Deep Cleaning  
- Move-In/Move-Out Cleaning
- Post-Construction Cleaning
- Various add-on services (organization, appliance cleaning, etc.)

## Major Changes Made

### Complete Rebrand
- Company name updated throughout
- Location focused on Santa Monica, CA market  
- Contact information updated
- Service areas completely revised
- SEO metadata updated for Santa Monica market
- Schema.org structured data updated

### System Simplification
- Removed complex backend systems
- Removed user authentication and roles
- Removed database integrations
- Simplified to basic website functionality
- Clean, lean codebase focused on customer acquisition

### Design Updates
- Color scheme updated to dark blue backgrounds
- Maintained gold accent colors
- Updated logo references to PNG format
- Updated favicon to ICO format
- Hero video updated to local file
- Consistent dark blue theme throughout

### Content Updates
- FAQ updated for Santa Monica area
- Service areas section rebuilt for California market
- Contact information updated for local market
- Announcement bar updated for Santa Monica
- All branding updated to Santa Monica Maids

## Current Site Structure

```
src/
├── app/
│   ├── booking/          # Booking page
│   ├── quote/            # Quote request page  
│   ├── globals.css       # Styling
│   ├── layout.tsx        # Main layout
│   ├── page.tsx          # Home page
│   └── sitemap.ts        # SEO sitemap
├── components/
│   ├── HeroSection.tsx           # Hero with video background
│   ├── ServicesSection.tsx       # Services overview
│   ├── WhatWeCleanSection.tsx    # Detailed service breakdown
│   ├── AreasWeServeSection.tsx   # Santa Monica coverage
│   ├── ReviewsSection.tsx        # Customer reviews
│   ├── FAQSection.tsx           # Frequently asked questions
│   ├── ContactSection.tsx       # Contact form
│   ├── QuoteForm.tsx            # Main quote form
│   ├── StepWizard.tsx           # Quote form wizard
│   ├── Header.tsx               # Site navigation
│   ├── Footer.tsx               # Site footer
│   └── ...
├── lib/
│   ├── constants.ts      # Brand and location constants
│   └── pricing.ts        # Service pricing logic
└── types/
    └── service.ts        # Service type definitions
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Form Integration

Quote forms submit to Formspree for lead collection. No database or backend required.

## SEO Features

- **Meta tags** optimized for Santa Monica market
- **Schema.org markup** for local business
- **Sitemap** generation
- **Open Graph** social sharing
- **Local SEO** optimization for California market

---

## Development Notes

This is a **simplified, clean website** focused purely on customer acquisition and information. All CRM, admin, and backend functionality has been removed to create a lean, fast-loading site perfect for a local cleaning business.

**Contact**: hello@santamonicamaids.com for any questions.