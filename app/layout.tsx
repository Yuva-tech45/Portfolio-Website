import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const PERSON_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yuvasree Prakash",
  jobTitle: "Software Engineer",
  url: "https://yuvasree-portfolio.vercel.app",
  sameAs: [
    "https://www.linkedin.com/in/yuvasreeprakash",
    "https://github.com/Yuva-tech45",
  ],
});

export const metadata: Metadata = {
  title: "Yuvasree Prakash — Software Engineer",
  description: site.description,
  alternates: {
    canonical: "https://yuvasree-portfolio.vercel.app",
  },
  openGraph: {
    title: "Yuvasree Prakash — Software Engineer",
    description: site.description,
    type: "website",
    siteName: "Yuvasree Prakash",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Yuvasree Prakash — Software Engineer",
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF9F2",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${jakarta.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: PERSON_JSON_LD }}
        />
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-plum px-5 py-2.5 text-sm font-medium text-cream shadow-lg transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
