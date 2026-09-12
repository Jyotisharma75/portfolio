#!/bin/bash
# Portfolio Setup Script
# This script sets up the complete directory structure and installs dependencies

echo "🚀 Setting up Jyoti Sharma AI Engineer Portfolio..."

# Create directory structure
mkdir -p app/{components,data,lib,types,public}
mkdir -p components/{navbar,hero,about,experience,projects,skills,certifications,education,stats,contact,footer,ui}

# Create app files
cat > app/layout.tsx << 'EOF'
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jyoti Sharma | AI Engineer & Applied AI Solutions",
  description:
    "Senior Software Engineer specializing in Generative AI, LLMs, Agentic AI, and ML solutions. 3+ years of experience building scalable AI systems.",
  keywords: [
    "AI Engineer",
    "Generative AI",
    "LLM",
    "Machine Learning",
    "Python",
    "Azure",
    "RAG",
    "Agentic AI",
  ],
  authors: [{ name: "Jyoti Sharma" }],
  creator: "Jyoti Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jyoti-sharma-portfolio.vercel.app",
    title: "Jyoti Sharma | AI Engineer",
    description: "Senior Software Engineer specializing in Applied AI and LLM solutions",
    siteName: "Jyoti Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jyoti Sharma | AI Engineer",
    description: "Senior Software Engineer specializing in Applied AI and LLM solutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
EOF

echo "✅ Created app/layout.tsx"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "📖 Next steps:"
echo "  1. npm run dev     - Start development server"
echo "  2. Open http://localhost:3000 in your browser"
echo ""
echo "🎨 Customization tips:"
echo "  - Update personal info in data files"
echo "  - Customize colors in tailwind.config.ts"
echo "  - Add your projects in data/projects.ts"
echo "  - Update email to send contact form submissions"
