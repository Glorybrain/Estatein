import "./globals.css";
import { Urbanist } from "next/font/google";
import type { Metadata, Viewport } from "next";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://estateiin.netlify.app/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Estatein",
    template: "%s | Estatein",
  },
  description:
    "Estatein is a modern real estate platform to explore properties, compare listings, and view details with confidence.",

  applicationName: "Estatein",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  keywords: [
    "Estatein",
    "real estate",
    "properties",
    "property listings",
    "rent",
    "buy",
    "apartments",
    "houses",
    "Nigeria real estate",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Estatein",
    title: "Estatein",
    description:
      "Explore property listings, view details, and discover your next home with Estatein.",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Estatein - Real Estate Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Estatein",
    description:
      "Explore property listings, view details, and discover your next home with Estatein.",
    images: ["/hero-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#141414",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} bg-grey-8 text-white`}>
        <Banner
          message="✨ Discover Your Dream Property with Estatein"
          linkText="Browse Properties"
          linkHref="/properties"
        />
        <Navbar />

        <main className="w-full">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
