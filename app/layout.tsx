import "./globals.css";
import { Urbanist } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/16/solid";
import Banner from "@/components/Banner";
import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Estatein",
    template: "%s | Estatein",
  },
  description: "Find great properties with Estatein.",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Estatein",
    description: "Find great properties with Estatein.",
    type: "website",
    url: "https://yourdomain.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} bg-grey-8 text-white`}>
        <Banner
          message="✨ Discover Your Dream Property with Estatein"
          linkText="Learn More"
          linkHref="/properties"
        />
        <Navbar />


        <main className="w-full">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
