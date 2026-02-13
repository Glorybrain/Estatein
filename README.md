# 🏡 Estatein

A modern, dark-themed real estate web application built with Next.js (App Router) and Tailwind CSS.

Estatein demonstrates scalable frontend architecture, reusable component design, SEO optimization, performance best practices, and accessibility compliance.

## 🖇️ Live Demo

```bash
https://estateiin.netlify.app/
```

## 🚀 Project Overview

Estatein provides a seamless browsing experience for real estate listings. Users can:

- Browse property listings
- View dynamic property detail pages
- Explore image galleries and pricing details
- Submit property inquiries
- Navigate through a fully responsive interface

The application was built with a strong focus on:

- Clean architecture
- Component reusability
- SEO-first implementation
- Core Web Vitals optimization
- Accessibility best practices
- Scalable rendering strategy

## 📁 Features

- Fully Responsive Design (Mobile, Tablet, Desktop)
- Property Listing Grid
- Dynamic Property Details Page (`/properties/[id]`)
- Reusable and modular components
- Modern UI built with Tailwind CSS
- Optimized routing using Next.js App Router
- Production-ready structure

## 🛠 Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Netlify (Deployment)

## 🌐 Routing

The project uses Next.js App Router.

| Route              | Description                   |
| ------------------ | ----------------------------- |
| `/`                | Home page                     |
| `/about`           | About page                    |
| `/services`        | Services page                 |
| `/contact`         | Contact page                  |
| `/properties`      | Property listing page         |
| `/properties/[id]` | Dynamic property details page |

Dynamic routing ensures clean and SEO-friendly URLs:

```bash
/properties/metropolitan-haven
```

## 🧩 Component Architecture

The application follows a modular, section-based component structure.

### Layout Components

- Navbar
- MobileSidebar
- Footer
- Banner

### Hero Components

- HomeHero
- PageHero
- PropertiesHero
- PropertyDetailsHero
- AboutHero

### Property Components

- PropertyGallery
- PropertyDetailsInfoSection
- PropertyPricingDetailsSection
- PropertyInquirySection
- PropertyDetailsInquirySection
- PropertyCategoriesSection
- FeaturedPropertiesSection
- Content Sections
- AchievementsSection
- ExperienceStepsSection
- OurValuesSection
- InvestmentAdvisorySection
- ServiceCategoriesSection
- TeamSection
- OfficeLocationsSection
- ValuedClientsSection
- UI Components
- SectionHeader
- FaqCard
- FaqSection
- TestimonialCard
- TestimonialSection
- FeatureStrip

### This structure improves:

- Maintainability
- Reusability
- Scalability
- Readability

## ⚙ Rendering Strategy

Estatein uses a hybrid rendering approach.

### Static Pages

Pages such as:

- `/`
- `/about`
- `/services`
- `/contact`

are statically generated for optimal performance.

### Dynamic Property Pages ( `/properties/[id]`)

Uses dynamic routing with static or server-side rendering depending on data strategy.

This ensures:

- SEO-friendly pre-rendered HTML
- Fast load times
- Scalable performance

## 🔍 SEO Implementation

The project includes:

- Semantic HTML structure (header, main, section, article)
- Proper heading hierarchy
- Clean URL structure
- Internal linking between pages
- Optimized image alt attributes
- Dynamic metadata per page
- Open Graph support
- Structured data (where applicable)

## ⚡ Performance Optimizations

Core Web Vitals were considered during development.

### LCP (Largest Contentful Paint)

- Optimized hero images
- next/image used throughout
- Priority loading for above-the-fold images

### CLS (Cumulative Layout Shift)

- Explicit image dimensions
- Stable layout structure across breakpoints

### INP (Interaction to Next Paint)

- Minimal client-side JavaScript
- Lightweight components
- Efficient re-renders

### Additional Optimizations

- Lazy-loaded images
- Optimized static assets
- Tailwind utility-first styling for reduced CSS overhead

### ♿ Accessibility

Estatein follows accessibility best practices:

- Keyboard-navigable interface
- Visible focus states
- Proper label associations
- ARIA attributes where necessary
- High-contrast dark theme compliance
- Screen reader-friendly markup

### 📱 Responsive Design

Built with a mobile-first approach using:

- CSS Grid
- Flexbox
- Tailwind responsive breakpoints

Fully optimized for:

- Mobile
- Tablet
- Desktop

## 🧪 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Glorybrain/Estatein.git
```

### 2. Navigate to the Project Directory

```bash
cd estatein
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

Open your browser and visit:

```bash
http://localhost:3000
```

### 🏭 Build Command:

```bash
npm run build
```

### Publish Directory:

```bash
.next
```

## 🏗 Project Structure

```
Estatein/
├─ app/
│  ├─ about/
│  ├─ contact/
│  ├─ properties/
│  │  ├─ [id]/
│  │  │  └─ page.tsx
│  │  └─ page.tsx
│  ├─ services/
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ globals.css
│
├─ components/
│  ├─ Navbar.tsx
│  ├─ Footer.tsx
│  ├─ HomeHero.tsx
│  ├─ FeaturedPropertiesSection.tsx
│  ├─ PropertyDetailsInfoSection.tsx
│  ├─ PropertyGallery.tsx
│  └─ ...
│
├─ public/
│  ├─ properties/
│  ├─ avatars/
│  └─ ...
│
├─ tailwind.config.js
├─ next.config.ts
├─ tsconfig.json
└─ README.md
```

## SEO Checklist

- ✅ Semantic HTML structure (header, main, section, article)
- ✅ Proper heading hierarchy (H1–H3)
- ✅ Clean URLs with internal linking (listing → detail pages
- ✅ Meta tags (title + description) per page
- ✅ Open Graph tags for sharing (where applicable)
- ✅ Image alt attributes for accessibility and SEO
- ✅ JSON-LD structured data

## Performance Checklist

- ✅ Next.js Image Optimization (next/image)
- ✅ Lazy loading for non-critical images
- ✅ Prevent CLS by reserving image dimensions
- ✅ Optimized above-the-fold content for better LCP
- ✅ Reduced client-side JS where possible
- ✅ Mobile-first responsive layouts (improves UX + CWV)

### Core Web Vitals considered:

- LCP (Largest Contentful Paint)
- CLS (Cumulative Layout Shift)
- INP (Interaction to Next Paint)

## 📊 Engineering Highlights

- Next.js App Router architecture
- Dynamic route handling
- Modular component design
- Hybrid rendering strategy
- SEO-first implementation
- Optimized image handling
- Scalable folder structure
- Clean TypeScript configuration
- Production-ready Tailwind setup

## 📜 License

Copyright (c) 2026 Kotin Glory.
All rights reserved.

This code is submitted solely for assessment purposes.
No rights are granted for commercial use, redistribution, or modification without written permission.

## Author

Kotin Glory

Frontend Developer

GitHub: https://github.com/Glorybrain
