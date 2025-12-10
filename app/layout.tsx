import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./providers/LanguageProvider";


export const metadata: Metadata = {
  metadataBase: new URL("https://tallerpro.com"),
  title: {
    default: "TallerPro | Chapistería y Pintura Automotriz",
    template: "%s | TallerPro"
  },
  description:
    "TallerPro ofrece servicios profesionales de carrocería, pintura, pulido y restauración completa en Bariloche. Calidad premium garantizada.",
  keywords: [
    "taller automotriz bariloche",
    "chapistería",
    "pintura automotriz",
    "pulido automotriz",
    "restauración de autos",
    "reparación de golpes",
    "detailing"
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png"
  },
  openGraph: {
    title: "TallerPro | Chapistería y Pintura Automotriz",
    description:
      "Reparación de golpes, pintura automotriz y restauración premium en Bariloche.",
    url: "https://tallerpro.com",
    siteName: "TallerPro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630
      }
    ],
    locale: "es_AR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "TallerPro | Estética Automotriz Premium",
    description:
      "Especialistas en carrocería, pintura y pulido profesional.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ],
};


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className="antialiased font-sora bg-background text-foreground transition-colors"
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
          <LanguageProvider>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "AutoRepair",
                  name: "TallerPro",
                  image: "https://tallerpro.com/og-image.jpg",
                  url: "https://tallerpro.com",
                  telephone: "+5491122233344",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Don Bosco 121",
                    addressLocality: "San Carlos de Bariloche",
                    addressRegion: "Río Negro",
                    addressCountry: "AR"
                  },
                  openingHours: "Mo-Fr 09:00-18:00, Sa 09:00-13:00",
                  priceRange: "$$",
                  description:
                    "Especialistas en reparación de golpes, pintura automotriz, pulido y restauración profesional en Bariloche."
                })
              }}
            />
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
