# ✨ Kiran Beauty Salon - Luxury Website

A world-class, premium luxury beauty salon website built with modern web technologies. This website is designed to showcase Kiran Beauty Salon's services, build trust with potential clients, and drive appointment bookings.

![Kiran Beauty Salon](https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80)

## 🌟 Features

### Frontend
- **Luxury Design** - Premium aesthetics with gold accents, elegant typography, and smooth animations
- **Responsive** - Mobile-first design that looks stunning on all devices
- **8 Pages** - Home, About, Services, Gallery, Testimonials, Contact, Book Appointment, Admin
- **Animations** - Smooth Framer Motion animations throughout
- **SEO Optimized** - Complete metadata, Open Graph, Twitter Cards, sitemap, robots.txt, Local Business Schema

### Backend
- **Supabase Integration** - Database for appointments, customers, and content management
- **Appointment Booking** - Complete form with validation and Supabase storage
- **Admin Dashboard** - Manage appointments, customers, services, and gallery

### Performance
- **Next.js 15 App Router** - Latest React server components
- **Optimized Images** - Next.js Image component with lazy loading
- **Fast Loading** - Code splitting and optimized bundles

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Premium animations |
| **Supabase** | Backend database & auth |
| **React Hook Form** | Form handling |
| **Zod** | Schema validation |
| **Lucide Icons** | Beautiful icon set |

## 📁 Project Structure

```
kiran/
├── public/                  # Static assets
├── src/
│   ├── app/
│   │   ├── about/          # About page
│   │   ├── admin/          # Admin dashboard
│   │   │   ├── appointments/
│   │   │   ├── customers/
│   │   │   ├── gallery/
│   │   │   ├── login/
│   │   │   └── services/
│   │   ├── book/           # Appointment booking
│   │   ├── contact/        # Contact page
│   │   ├── gallery/        # Gallery page
│   │   ├── services/       # Services page
│   │   ├── testimonials/   # Testimonials page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── not-found.tsx   # 404 page
│   │   ├── sitemap.ts      # Dynamic sitemap
│   │   └── robots.ts       # Robots.txt
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── Animations.tsx
│   │       └── SectionHeading.tsx
│   └── lib/
│       ├── data.ts         # Site data & constants
│       ├── supabase.ts     # Supabase client
│       └── utils.ts        # Utility functions
├── supabase-schema.sql     # Database schema
├── .env.local.example      # Environment variables template
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn
- Supabase account (optional, for backend features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kiran
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_SITE_URL=https://kiranbeautysalon.com
   ```

4. **Set up Supabase database** (optional)
   - Go to your Supabase dashboard
   - Navigate to SQL Editor
   - Copy and paste the contents of `supabase-schema.sql`
   - Run the SQL to create all tables

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Black | `#0F0F0F` | Backgrounds, headers |
| Luxury Gold | `#D4AF37` | Accents, CTAs, highlights |
| Soft Beige | `#F5F0E8` | Light backgrounds |
| White | `#FFFFFF` | Text on dark, backgrounds |
| Text | `#1A1A1A` | Body text |
| Muted | `#666666` | Secondary text |

## 📱 Admin Dashboard

Access the admin panel at `/admin/login`

**Default Credentials:**
- Email: `admin@kiranbeautysalon.com`
- Password: `admin123`

> ⚠️ Change these credentials in production!

### Admin Features:
- Dashboard with analytics overview
- Appointment management (view, confirm, cancel)
- Customer database
- Service management
- Gallery management

## 🌐 Deployment (Vercel)

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Option 2: Manual Deploy

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Set Environment Variables**
   In Vercel dashboard, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SITE_URL`

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

### Post-Deployment Checklist
- [ ] Set up custom domain
- [ ] Configure Supabase environment variables
- [ ] Run Supabase schema SQL
- [ ] Update Google Maps embed URL
- [ ] Replace placeholder phone numbers
- [ ] Replace placeholder images with real salon photos
- [ ] Update social media links
- [ ] Change admin credentials
- [ ] Set up Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console

## 🔧 Customization

### Updating Content
All site content is centralized in `src/lib/data.ts`. Edit this file to update:
- Business information (phone, email, address)
- Services list and details
- Team members
- Testimonials
- Gallery images
- Navigation links

### Updating Styles
- Global styles: `src/app/globals.css`
- Theme configuration: `tailwind.config.ts`
- Component styles: Within individual component files

## 📊 SEO Features

- ✅ Dynamic metadata for all pages
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Dynamic sitemap (`/sitemap.xml`)
- ✅ Robots.txt configuration
- ✅ Local Business structured data (JSON-LD)
- ✅ Semantic HTML throughout
- ✅ Proper heading hierarchy
- ✅ Alt text for all images
- ✅ Fast loading times

## 📄 License

This project is proprietary. All rights reserved by Kiran Beauty Salon.

---

Built with ❤️ for Kiran Beauty Salon
