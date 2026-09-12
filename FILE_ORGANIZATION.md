# File Organization Guide

This document maps all created files to their final locations in the project.

## Configuration Files (Root Level)

These files are ready to use as-is in the root directory:

```
c:\Users\sandi\Desktop\port\
├── package.json                 ✅ READY
├── tsconfig.json               ✅ READY
├── tailwind.config.ts          ✅ READY
├── next.config.ts              ✅ READY
├── postcss.config.js           ✅ READY
├── README.md                   ✅ READY
└── SETUP.md                    ✅ READY
```

## App Files

These files need to be moved/created in the `app/` directory:

| Source File | Destination | Status |
|-------------|-------------|--------|
| `app-layout.tsx` | `app/layout.tsx` | Ready |
| `app-page.tsx` | `app/page.tsx` | Ready |
| `app-globals.css` | `app/globals.css` | Ready |
| `app-sitemap.ts` | `app/sitemap.ts` | Ready |
| `app-robots.ts` | `app/robots.ts` | Ready |

## Component Files

These files need to be moved/created in the `components/` directory:

### Core Layout Components

| Source File | Destination | Status |
|-------------|-------------|--------|
| `components-theme-provider.tsx` | `components/theme-provider.tsx` | Ready |
| `components-navbar.tsx` | `components/navbar/index.tsx` | Ready |
| `components-footer.tsx` | `components/footer/index.tsx` | Ready |

### Section Components

| Source File | Destination | Status |
|-------------|-------------|--------|
| `components-hero.tsx` | `components/hero/index.tsx` | Ready |
| `components-about.tsx` | `components/about/index.tsx` | Ready |
| `components-experience.tsx` | `components/experience/index.tsx` | Ready |
| `components-projects.tsx` | `components/projects/index.tsx` | Ready |
| `components-skills.tsx` | `components/skills/index.tsx` | Ready |
| `components-education.tsx` | `components/education/index.tsx` | Ready |
| `components-stats.tsx` | `components/stats/index.tsx` | Ready |
| `components-contact.tsx` | `components/contact/index.tsx` | Ready |

### UI Components

Create reusable UI components in `components/ui/`:
- `button.tsx` (or use button patterns in components)
- `input.tsx` (or use input patterns in components)
- `textarea.tsx` (or use textarea patterns in components)

These are provided inline in the components above using Tailwind classes.

## Data Files

These files need to be created in the `data/` directory:

| Source File | Destination | Status |
|-------------|-------------|--------|
| `data-projects.ts` | `data/projects.ts` | Ready |
| `data-experience.ts` | `data/experience.ts` | Ready |
| `data-skills.ts` | `data/skills.ts` | Ready |
| `data-education.ts` | `data/education.ts` | Ready |

## Utility Files

These files need to be created in the `lib/` directory:

| Source File | Destination | Status |
|-------------|-------------|--------|
| `utils.ts` | `lib/utils.ts` | Ready |
| `types.ts` | `lib/types.ts` | Ready |

## Public Assets

Create these files in the `public/` directory:

| File | Description | Required | Status |
|------|-------------|----------|--------|
| `favicon.ico` | Site favicon | Optional | To be added |
| `profile.png` | Profile image | Optional | To be added |
| `resume.pdf` | Resume file | Optional | To be added |

**Note**: The portfolio will work without these files, but add them for complete branding.

## File Moving Instructions

### Option 1: Manual Organization

```bash
# Create directories
mkdir -p app
mkdir -p components/navbar
mkdir -p components/hero
mkdir -p components/about
mkdir -p components/experience
mkdir -p components/projects
mkdir -p components/skills
mkdir -p components/education
mkdir -p components/contact
mkdir -p components/footer
mkdir -p data
mkdir -p lib
mkdir -p public

# Move component files
move components-navbar.tsx components\navbar\index.tsx
move components-hero.tsx components\hero\index.tsx
move components-about.tsx components\about\index.tsx
move components-experience.tsx components\experience\index.tsx
move components-projects.tsx components\projects\index.tsx
move components-skills.tsx components\skills\index.tsx
move components-education.tsx components\education\index.tsx
move components-contact.tsx components\contact\index.tsx
move components-footer.tsx components\footer\index.tsx
move components-theme-provider.tsx components\theme-provider.tsx

# Move data files
move data-projects.ts data\projects.ts
move data-experience.ts data\experience.ts
move data-skills.ts data\skills.ts
move data-education.ts data\education.ts

# Move app files
move app-layout.tsx app\layout.tsx
move app-page.tsx app\page.tsx
move app-globals.css app\globals.css
move app-sitemap.ts app\sitemap.ts
move app-robots.ts app\robots.ts

# Move lib files
move utils.ts lib\utils.ts
move types.ts lib\types.ts
```

### Option 2: PowerShell Script

Save this as `organize-files.ps1`:

```powershell
# Create directory structure
$directories = @(
    "app",
    "components/navbar",
    "components/hero",
    "components/about",
    "components/experience",
    "components/projects",
    "components/skills",
    "components/education",
    "components/contact",
    "components/footer",
    "data",
    "lib",
    "public"
)

foreach ($dir in $directories) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
}

# Move component files
Move-Item -Path "components-navbar.tsx" -Destination "components\navbar\index.tsx" -Force
Move-Item -Path "components-hero.tsx" -Destination "components\hero\index.tsx" -Force
Move-Item -Path "components-about.tsx" -Destination "components\about\index.tsx" -Force
Move-Item -Path "components-experience.tsx" -Destination "components\experience\index.tsx" -Force
Move-Item -Path "components-projects.tsx" -Destination "components\projects\index.tsx" -Force
Move-Item -Path "components-skills.tsx" -Destination "components\skills\index.tsx" -Force
Move-Item -Path "components-education.tsx" -Destination "components\education\index.tsx" -Force
Move-Item -Path "components-contact.tsx" -Destination "components\contact\index.tsx" -Force
Move-Item -Path "components-footer.tsx" -Destination "components\footer\index.tsx" -Force
Move-Item -Path "components-theme-provider.tsx" -Destination "components\theme-provider.tsx" -Force

# Move data files
Move-Item -Path "data-projects.ts" -Destination "data\projects.ts" -Force
Move-Item -Path "data-experience.ts" -Destination "data\experience.ts" -Force
Move-Item -Path "data-skills.ts" -Destination "data\skills.ts" -Force
Move-Item -Path "data-education.ts" -Destination "data\education.ts" -Force

# Move app files
Move-Item -Path "app-layout.tsx" -Destination "app\layout.tsx" -Force
Move-Item -Path "app-page.tsx" -Destination "app\page.tsx" -Force
Move-Item -Path "app-globals.css" -Destination "app\globals.css" -Force
Move-Item -Path "app-sitemap.ts" -Destination "app\sitemap.ts" -Force
Move-Item -Path "app-robots.ts" -Destination "app\robots.ts" -Force

# Move lib files
Move-Item -Path "utils.ts" -Destination "lib\utils.ts" -Force
Move-Item -Path "types.ts" -Destination "lib\types.ts" -Force

Write-Host "✅ Files organized successfully!"
```

Run with:
```bash
powershell -ExecutionPolicy Bypass -File organize-files.ps1
```

## Final Structure Check

After organizing files, your directory should look like:

```
port/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── theme-provider.tsx
│   ├── navbar/
│   │   └── index.tsx
│   ├── hero/
│   │   └── index.tsx
│   ├── about/
│   │   └── index.tsx
│   ├── experience/
│   │   └── index.tsx
│   ├── projects/
│   │   └── index.tsx
│   ├── skills/
│   │   └── index.tsx
│   ├── education/
│   │   └── index.tsx
│   ├── stats/
│   │   └── index.tsx
│   ├── contact/
│   │   └── index.tsx
│   └── footer/
│       └── index.tsx
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   └── education.ts
├── lib/
│   ├── utils.ts
│   └── types.ts
├── public/
│   ├── favicon.ico (optional)
│   ├── resume.pdf (optional)
│   └── profile.png (optional)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── postcss.config.js
├── README.md
└── SETUP.md
```

## Verification Commands

After file organization, verify everything is correct:

```bash
# Check TypeScript compilation
npm run type-check

# Check for build errors
npm run build

# Start development server
npm run dev
```

## Next Steps

1. ✅ All files are created and ready
2. 📁 Organize files using the instructions above
3. 📦 Install dependencies: `npm install`
4. ▶️ Start dev server: `npm run dev`
5. 🌐 Open http://localhost:3000
6. 🎨 Customize content as needed
7. 🚀 Deploy to Vercel

---

**All files are production-ready! 🚀**
