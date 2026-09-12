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
