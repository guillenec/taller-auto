
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./providers/LanguageProvider";

import { Inter, Sora } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
// aca luego sacar baseUrl, no se permite variabkle de entorno en layout 
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
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
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/favicon.ico"
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "TallerPro | Chapistería y Pintura Automotriz",
    description:
      "Reparación de golpes, pintura automotriz y restauración premium en Bariloche.",
    url: `${baseUrl}`,
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
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  //   { media: "(prefers-color-scheme: dark)", color: "#000000" }
  // ],
  alternates: {
    languages: {
      "es-AR": "/",
      "en-US": "/?lang=en"
    }
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ],

};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* precargamos cosas necesarias */}
        <link rel="preload" as="image" href="/fondo/fondos7.png" />
        <link rel="preconnect" href="https://cdn.whatsapp.net" />
        <link rel="preconnect" href="https://instagram.com" />
        <link rel="preconnect" href="https://facebook.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preload" href="/_next/static/css/app/globals.css" as="style" />
      </head>
      <body
        className={`antialiased font-sora bg-background text-foreground transition-colors  ${inter.variable} ${sora.variable} font-sora`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange>
          <LanguageProvider>
            <script
              type="application/ld+json"
              suppressHydrationWarning
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "AutoRepair",
                  "@id": `${baseUrl}/#tallerpro`,
                  name: "TallerPro",
                  url: baseUrl,
                  image: `${baseUrl}/og-image.jpg`,
                  telephone: "+5491122233344",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Don Bosco 121",
                    addressLocality: "San Carlos de Bariloche",
                    addressRegion: "Río Negro",
                    postalCode: "8400",
                    addressCountry: "AR"
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: -41.1322169,
                    longitude: -71.2894532
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                      ],
                      opens: "09:00",
                      closes: "18:00"
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Saturday"],
                      opens: "09:00",
                      closes: "13:00"
                    }
                  ],
                  priceRange: "$$",
                  description:
                    "Especialistas en reparación de golpes, pintura automotriz, pulido y restauración profesional en Bariloche.",
                  sameAs: [
                    // 🔁 Cambiá estas URLs por las reales si las tenés
                    "https://facebook.com/tallerpro",
                    "https://instagram.com/tallerpro",
                    "https://wa.me/5491122233344"
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Servicios de TallerPro",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        name: "Reparación de golpes",
                        itemOffered: {
                          "@type": "Service",
                          name: "Reparación de golpes",
                          serviceType: "BodyWork"
                        }
                      },
                      {
                        "@type": "Offer",
                        name: "Pintura automotriz",
                        itemOffered: {
                          "@type": "Service",
                          name: "Pintura automotriz",
                          serviceType: "CarPaint"
                        }
                      },
                      {
                        "@type": "Offer",
                        name: "Pulido y detallado",
                        itemOffered: {
                          "@type": "Service",
                          name: "Pulido y detallado",
                          serviceType: "CarDetailing"
                        }
                      }
                    ]
                  }
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
    </html >
  );
}
