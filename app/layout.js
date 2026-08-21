import { Fraunces, Inter } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

/*
  next/font self-hosts Google Fonts at build time. That means no request to
  Google's servers at runtime (faster, better privacy) and zero layout shift,
  because Next generates a matched fallback while the real font loads.
*/
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.studio}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Selah Skye",
    "animated children's series",
    "kids animation",
    "Taylor Imagination Studios",
    "superhero cartoon for kids",
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.studio}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/selah-flight-wide.jpg",
        width: 1200,
        height: 630,
        alt: "Selah Skye rising into a golden sunset sky",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.studio}`,
    description: siteConfig.description,
    images: ["/images/selah-flight-wide.jpg"],
  },
  alternates: { canonical: "/" },
};

export const viewport = {
  themeColor: "#14110F",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
