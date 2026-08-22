# L'ÉTOILE REAL ESTATE & PRIVATE RESIDENCES
### Ultra-Luxury Next.js + Firebase + Vercel Flagship Web Application

An haute-couture, ultra-premium web application engineered for world-class real estate brokerages, sovereign family offices, and architectural trophy estate acquisitions.

---

## ⚡ Tech Stack Architecture

- **Framework**: [Next.js 14+ (App Router)](https://nextjs.org/) with React 18, TypeScript, and Server/Client Component streaming.
- **Backend & Database**: [Firebase](https://firebase.google.com/) Firestore for VIP Consultation Leads, Off-Market Property Submissions, and live inquiries.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with tailored luxury gold metallic design tokens, glassmorphism, and responsive breakpoints.
- **Typography**: Google Fonts via `next/font`:
  - *Hero Display*: `Cinzel Decorative` + `Cormorant Garamond`
  - *Section Titles*: `Playfair Display`
  - *Body & UI*: `Plus Jakarta Sans`
- **Deployment**: [Vercel](https://vercel.com/) with zero-config edge routing, static asset optimization, and caching (`vercel.json`).

---

## 🌟 Key Features

1. **Dual-State Day/Night Architectural Experience**:
   - **Nocturne Luxe (Dark Mode)**: Illuminated twilight penthouse balcony view (`/assets/images/hero-dark.jpg`) with obsidian glassmorphism.
   - **Solarium Elegance (Light Mode)**: Golden hour sunset penthouse balcony view (`/assets/images/hero-light.jpg`) with travertine warmth.
   - Seamless cross-dissolve transitions via `next/image` with zero layout shift.

2. **Reimagined Signature Categories (from Reference Ideas)**:
   - Modernized responsive collection cards (*Sky Penthouses*, *Signature Mansions*, *Coastal Sanctuaries*, *Historic Châteaux*, *Haute Spas*, *Bespoke Commercial*) with hover physics and property count tags.
   - Dual-action CTAs: **"Browse Properties"** and **"Submit Private Property"**.

3. **Interactive Masterpiece Portfolio**:
   - Real-time reactive **Multi-Currency Engine** (`$ USD`, `€ EUR`, `£ GBP`, `AED`, `S$ SGD`, `CHF`).
   - Filter tabs across property classifications.
   - **Estate Inspection Dossier Modal** with high-resolution image galleries and architectural specifications.

4. **Architectural Blueprint & Daylight Simulator**:
   - Interactive SVG floorplan with clickable spatial hotspot pins (*Grand Salon*, *Sunset Horizon Deck*, *Master Sanctuary*, *Gourmet Atelier*).
   - Real-time **Sun Path & Daylight Simulator** (*Dawn*, *Noon*, *Golden Hour*, *Nocturne*).

5. **Private Wealth & Investment Yield Calculator**:
   - Real-time mortgage amortization calculations.
   - Projected gross monthly rental inflow, net holding spread, and 10-year compounded capital appreciation graph.

6. **Firebase Integrated Lead Capture**:
   - Confidential VIP viewing scheduler with reciprocal NDA protection (`/api/leads`).
   - Property submission intake for off-market estate curation (`/api/submit-property`).

---

## 📂 Project Directory Structure

```
d:/AI/Antigravity/Websites/Realestate Project/
├── package.json
├── tsconfig.json
├── next.config.mjs
├── tailwind.config.ts
├── vercel.json
├── .env.example
├── public/
│   └── assets/
│       └── images/
│           ├── hero-dark.jpg
│           └── hero-light.jpg
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   └── api/
    │       ├── leads/route.ts
    │       └── submit-property/route.ts
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx
    │   │   ├── Footer.tsx
    │   │   └── ThemeToggle.tsx
    │   ├── hero/
    │   │   └── HeroSection.tsx
    │   ├── sections/
    │   │   ├── PrestigeTicker.tsx
    │   │   ├── CategoriesSection.tsx
    │   │   ├── PortfolioSection.tsx
    │   │   ├── FloorplanSpotlight.tsx
    │   │   ├── InvestmentMatrix.tsx
    │   │   ├── PrivateOffice.tsx
    │   │   └── TestimonialsAccolades.tsx
    │   └── modals/
    │       ├── PropertyDossierModal.tsx
    │       ├── VipConsultationModal.tsx
    │       └── SubmitPropertyModal.tsx
    ├── context/
    │   ├── ThemeContext.tsx
    │   └── CurrencyContext.tsx
    └── lib/
        ├── types.ts
        ├── propertiesData.ts
        └── firebase.ts
```

---

## 🚀 Running Locally & Deploying to Vercel

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Firebase (Optional)
Copy `.env.example` to `.env.local` and add your Firebase credentials:
```bash
cp .env.example .env.local
```

### 3. Run Dev Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 4. Deploy to Vercel
```bash
vercel deploy
```
