# Portfolio Setup Instructions

This document provides complete instructions for setting up the Jyoti Sharma AI Engineer Portfolio website.

## Project Overview

A modern, production-ready portfolio website built with:
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with glassmorphism effects
- **Animations**: Framer Motion
- **UI**: Shadcn/UI components + Lucide Icons
- **Deployment**: Vercel-ready configuration

## File Structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── sitemap.ts              # SEO sitemap
│   └── robots.ts               # robots.txt for SEO
│
├── components/
│   ├── navbar/                 # Navigation component
│   ├── hero/                   # Hero section
│   ├── about/                  # About section
│   ├── experience/             # Experience timeline
│   ├── projects/               # Projects showcase
│   ├── skills/                 # Skills section
│   ├── certifications/         # Certifications
│   ├── education/              # Education
│   ├── stats/                  # Statistics
│   ├── contact/                # Contact form
│   ├── footer/                 # Footer
│   ├── theme-provider.tsx      # Dark mode provider
│   └── ui/                     # Reusable UI components
│
├── data/
│   ├── projects.ts             # Projects data
│   ├── experience.ts           # Work experience
│   ├── skills.ts               # Technical skills
│   └── education.ts            # Education & certifications
│
├── lib/
│   ├── types.ts                # TypeScript interfaces
│   └── utils.ts                # Utility functions
│
├── public/
│   ├── favicon.ico             # Site favicon
│   ├── profile.png             # Profile image (optional)
│   └── resume.pdf              # Resume file
│
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind configuration
├── next.config.ts              # Next.js configuration
├── postcss.config.js           # PostCSS config
└── README.md                   # Documentation
```

## Setup Instructions

### Prerequisites
- **Node.js**: 18.17 or later
- **npm** or **yarn** package manager
- **Git** (for version control and Vercel deployment)

### Step 1: Initialize Project

```bash
# Navigate to your project directory
cd c:\Users\sandi\Desktop\port

# Initialize a new Next.js project (if not already done)
npx create-next-app@latest . --typescript --tailwind
```

### Step 2: Install Dependencies

All required dependencies are listed in `package.json`. Install them:

```bash
npm install
```

**Key packages**:
- `next` - React framework
- `framer-motion` - Animations
- `tailwindcss` - Styling
- `lucide-react` - Icons
- `next-themes` - Dark mode support
- `nodemailer` - Email functionality
- `axios` - HTTP client

### Step 3: File Organization

Create the exact directory structure shown above. Files are organized by feature:

```bash
# Create component directories
mkdir -p components/navbar
mkdir -p components/hero
mkdir -p components/about
mkdir -p components/experience
mkdir -p components/projects
mkdir -p components/skills
mkdir -p components/certifications
mkdir -p components/education
mkdir -p components/stats
mkdir -p components/contact
mkdir -p components/footer
mkdir -p components/ui

# Create app directory
mkdir -p app

# Create data directory
mkdir -p data

# Create lib directory
mkdir -p lib

# Create public directory
mkdir -p public
```

### Step 4: Copy Component Files

Copy the provided component files into their respective directories:
- `components-navbar.tsx` → `components/navbar/index.tsx`
- `components-hero.tsx` → `components/hero/index.tsx`
- `components-about.tsx` → `components/about/index.tsx`
- `components-experience.tsx` → `components/experience/index.tsx`
- `components-projects.tsx` → `components/projects/index.tsx`
- `components-skills.tsx` → `components/skills/index.tsx`
- `components-education.tsx` → `components/education/index.tsx`
- `components-stats.tsx` → `components/stats/index.tsx`
- `components-contact.tsx` → `components/contact/index.tsx`
- `components-footer.tsx` → `components/footer/index.tsx`
- `components-theme-provider.tsx` → `components/theme-provider.tsx`

### Step 5: Copy Data Files

Copy the data files:
- `data-projects.ts` → `data/projects.ts`
- `data-experience.ts` → `data/experience.ts`
- `data-skills.ts` → `data/skills.ts`
- `data-education.ts` → `data/education.ts`

### Step 6: Copy App Files

Copy the app-level files:
- `app-layout.tsx` → `app/layout.tsx`
- `app-page.tsx` → `app/page.tsx`
- `app-globals.css` → `app/globals.css`
- `app-sitemap.ts` → `app/sitemap.ts`
- `app-robots.ts` → `app/robots.ts`

### Step 7: Copy Configuration Files

The configuration files are already in place:
- `tailwind.config.ts`
- `next.config.ts`
- `tsconfig.json`
- `postcss.config.js`
- `package.json`

### Step 8: Copy Utilities

- `utils.ts` → `lib/utils.ts`
- `types.ts` → `lib/types.ts`

## Development

### Start Development Server

```bash
npm run dev
```

The portfolio will be available at `http://localhost:3000`

### Features

- **Hot Reload**: Changes are reflected immediately
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling with dark mode
- **Framer Motion**: Smooth animations and transitions
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Metadata, sitemap, robots.txt

## Customization

### Update Personal Information

1. **Name & Title** - Update in `Hero` component
2. **Email** - Change in contact links throughout site
3. **LinkedIn URL** - Update in social links
4. **Resume** - Replace `public/resume.pdf` with your own

### Modify Content

1. **Projects** - Edit `data/projects.ts`
2. **Experience** - Edit `data/experience.ts`
3. **Skills** - Edit `data/skills.ts`
4. **Education** - Edit `data/education.ts`

### Customize Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
// Primary color (currently purple)
--primary: 262 100% 50%;

// Adjust in CSS variables section
```

### Enable Email Submissions

Update `components/contact/index.tsx` to integrate with your email service:

```typescript
// Example with Nodemailer
const response = await fetch('/api/send-email', {
  method: 'POST',
  body: JSON.stringify(formData),
});
```

## Build & Production

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `.next` folder.

### Start Production Server

```bash
npm start
```

### Type Check

Verify TypeScript compilation:

```bash
npm run type-check
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel will automatically detect Next.js and configure it correctly.

### Environment Variables

If you add any sensitive data (emails, API keys), create a `.env.local` file:

```bash
NEXT_PUBLIC_EMAIL_ADDRESS=your-email@example.com
API_KEY=your-secret-key
```

## Performance Optimization

- **Image Optimization**: Use Next.js `Image` component
- **Code Splitting**: Automatic with Next.js
- **CSS Minification**: Automatic with Tailwind
- **Lazy Loading**: Implement with `next/dynamic`
- **Type Safety**: Full TypeScript coverage

## SEO

The portfolio includes:
- ✅ Metadata tags
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Sitemap generation
- ✅ robots.txt
- ✅ Mobile responsive
- ✅ Fast page loads

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Troubleshooting

### Port Already in Use

```bash
# Change port
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Dependencies Issues

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Support & Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Shadcn/UI Docs](https://ui.shadcn.com/)
- [Vercel Docs](https://vercel.com/docs)

## License

This project is open source and available under the MIT License.

## Contact

For questions or issues:
- Email: J75sharma@gmail.com
- LinkedIn: linkedin.com/in/jyoti-sharma75

---

**Happy building! 🚀**
