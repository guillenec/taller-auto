import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "TallerPro | Chapistería y Pintura Automotriz",
  description: "Servicios profesionales de carrocería, pintura y detallado premium.",
  icons: {
    icon: "/car_repair.svg",
  },
  openGraph: {
    title: "TallerPro | Chapistería y Pintura Automotriz",
    description: "Servicios profesionales de carrocería, pintura y detallado premium.",
    url: "XXXXXXXXXXXXXXXXXXXXX",
    siteName: "TallerPro",
    images: [
      {
        url: "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es-AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TallerPro | Chapistería y Pintura Automotriz",
    description: "Servicios profesionales de carrocería, pintura y detallado premium.",
    images: ["XXXXXXXXXXXXXXXXXXXXXXXXXXXX"],
  },
  verification: {
    google: "XXXXXXXXXXXXXXXXXXXXX",
  },
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
  },
  appleWebApp: {
    title: "TallerPro | Chapistería y Pintura Automotriz",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "automotive",

};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${sora.variable} antialiased font-sora bg-gray-50 text-gray-900`}
      >
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
