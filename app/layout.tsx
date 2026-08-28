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

export const metadata: Metadata = {
  title: "Yuvasree Prakash — Software Engineer",
  description: site.description,
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
