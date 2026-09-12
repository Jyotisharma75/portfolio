# 🚀 Quick Start Guide - Jyoti Sharma AI Engineer Portfolio

This guide will get your portfolio running in 5 minutes!

## 📋 Prerequisites

- **Node.js 18+**: [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (for version control)

Verify installation:
```bash
node --version
npm --version
```

## ⚡ Quick Setup (Windows)

### Step 1: Organize Files (1 minute)

Double-click `setup.bat` to automatically create the directory structure and install dependencies!

Or manually:
```cmd
# Create directories
mkdir app components\navbar components\hero components\about components\experience components\projects components\skills components\education components\contact components\footer data lib public

# Install dependencies
npm install
```

### Step 2: Move Files (2 minutes)

Copy the provided component files to their destinations:

**Components:**
- `components-*.tsx` files → `components/*/index.tsx`

**Data:**
- `data-*.ts` files → `data/`

**App:**
- `app-*.tsx` and `app-*.css` files → `app/`

**Utils:**
- `utils.ts` and `types.ts` → `lib/`

### Step 3: Start Development (1 minute)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## 🎯 Common Tasks

### Update Your Information

Edit these files to customize content:

```typescript
// data/projects.ts - Add your projects
export const projects: Project[] = [
  {
    id: "my-project",
    title: "Your Project Title",
    description: "Project description",
    // ... more properties
  }
];

// data/experience.ts - Update work experience
// data/skills.ts - Change skills and proficiency
// data/education.ts - Update education and certifications
```

### Customize Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: "hsl(262 100% 50%)",  // Change purple to your color
  // Other color definitions
}
```

### Add Your Resume

1. Replace `public/resume.pdf` with your own resume
2. The download button will automatically work

### Add Profile Image

1. Add `public/profile.png` (or any image)
2. Reference it in components as needed

## 🔍 Project Structure

```
port/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── navbar/            # Navigation
│   ├── hero/              # Hero section
│   ├── about/             # About me
│   ├── experience/        # Work experience
│   ├── projects/          # Project showcase
│   ├── skills/            # Technical skills
│   ├── education/         # Education & certs
│   ├── contact/           # Contact form
│   └── footer/            # Footer
├── data/                  # Content data
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   └── education.ts
├── lib/                   # Utilities
│   ├── utils.ts           # Helper functions
│   └── types.ts           # TypeScript types
└── public/                # Static files
```

## 🎨 Features Included

✅ **Modern Design**
- Glassmorphism effects
- Smooth animations
- Gradient text and buttons
- Dark/Light theme toggle

✅ **Responsive Layout**
- Mobile-first design
- Tablet optimized
- Desktop enhanced

✅ **SEO Optimized**
- Meta tags
- Open Graph
- Sitemap & robots.txt
- Fast page loads

✅ **Production Ready**
- TypeScript
- Error handling
- Performance optimized
- Vercel deployment ready

## 📱 Browser Support

Works on:
- Chrome/Chromium
- Firefox
- Safari
- Edge
- Mobile browsers

## 🚀 Deployment to Vercel

### Option 1: Automatic (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import GitHub repo
4. Click "Deploy"

### Option 2: Manual

```bash
npm install -g vercel
vercel
# Follow prompts
```

## 🔧 Available Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📧 Contact Form

To enable email submissions:

1. Update the contact form handler in `components/contact/index.tsx`
2. Connect to an email service (Nodemailer, SendGrid, etc.)
3. Set environment variables in `.env.local`

## 🎓 Customization Examples

### Change Primary Color

Edit `tailwind.config.ts`:

```typescript
// Change from purple to blue
primary: "hsl(217 100% 50%)",
```

### Add New Section

1. Create new component in `components/`
2. Add it to `app/page.tsx`
3. Update navigation in `components/navbar/index.tsx`

### Update Skills Display

Edit `data/skills.ts`:

```typescript
{
  name: "Your Skill",
  proficiency: 90  // 0-100
}
```

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Build fails
```bash
rm -rf .next
npm run build
```

### Dependencies issues
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Shadcn/UI](https://ui.shadcn.com/)

## ⚙️ Environment Variables

Create `.env.local` for sensitive data:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
EMAIL_FROM=your-email@example.com
```

## 💡 Pro Tips

1. **Use the dark mode toggle** - Built-in light/dark theme
2. **Fast scroll navigation** - Click navbar items to scroll smoothly
3. **Mobile optimized** - Test on phone for best experience
4. **Animations enabled** - Framer Motion provides smooth effects
5. **Type safe** - Full TypeScript coverage for reliability

## 📞 Support

- 📧 Email: J75sharma@gmail.com
- 🔗 LinkedIn: linkedin.com/in/jyoti-sharma75
- 📝 Documentation: See SETUP.md

## ✨ What's Included

- ✅ 8 major portfolio sections
- ✅ Animated statistics dashboard
- ✅ Experience timeline
- ✅ Project showcase
- ✅ Skills with progress bars
- ✅ Education & certifications
- ✅ Contact form
- ✅ Responsive footer
- ✅ Dark/Light theme
- ✅ SEO optimization
- ✅ Framer Motion animations
- ✅ Tailwind CSS styling

## 🎯 Next Steps

1. ✅ Run `npm install`
2. ✅ Organize files using instructions
3. ✅ Customize your information
4. ✅ Add your projects
5. ✅ Test locally: `npm run dev`
6. ✅ Deploy to Vercel

## 📄 License

MIT License - Free to use and modify

---

**Ready to launch? Start with `npm run dev` 🚀**

Questions? Check SETUP.md or FILE_ORGANIZATION.md
