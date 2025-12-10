import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./providers/LanguageProvider";


export const metadata: Metadata = {
  title: "TallerPro | Chapistería y Pintura Automotriz",
  description: "Servicios profesionales de carrocería, pintura y detallado premium.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
    <html lang="es" suppressHydrationWarning>
      <body
        className="antialiased font-sora bg-background text-foreground transition-colors"
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
          <LanguageProvider>

            <Navbar />
            <main className="pt-16 min-h-screen">
              {children}
            </main>
            <Footer />
          </LanguageProvider>

        </ThemeProvider>
      </body>
    </html>
  );
}
