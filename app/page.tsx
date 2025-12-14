import { Metadata } from "next";
import HomePageClient from "./HomePageClient";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "TallerPro | Chapistería y Pintura Automotriz en Bariloche",
  description:
    "Expertos en reparación de golpes, pintura automotriz, pulido y restauración profesional en Bariloche. Atención personalizada y calidad premium garantizada.",
  keywords: [
    "taller automotriz bariloche",
    "pintura automotriz bariloche",
    "chapistería bariloche",
    "pulido automotriz bariloche",
    "restauración de autos",
    "reparación de golpes",
    "detailing bariloche",
    "tallerpro bariloche"
  ],
  alternates: {
    canonical: `${baseUrl}`,
  },
  openGraph: {
    title: "TallerPro | Reparación y Pintura Automotriz en Bariloche",
    description:
      "Servicio integral de carrocería, pintura, pulido y restauración. Resultados premium con la mejor tecnología.",
    url: `${baseUrl}`,
    siteName: "TallerPro",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TallerPro | Estética Automotriz Premium",
    description:
      "Calidad profesional en reparación, pintura y restauración de autos.",
    images: ["/og-home.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${baseUrl}/#homepage`,
            url: `${baseUrl}`,
            name: "TallerPro | Estética automotriz premium",
            isPartOf: {
              "@type": "WebSite",
              url: baseUrl,
              name: "TallerPro",
            },
            description:
              "Reparación de golpes, pintura automotriz y restauración premium en Bariloche.",
            provider: {
              "@type": "AutoRepair",
              name: "TallerPro",
              url: baseUrl,
            },
          }),
        }}
      />

      <HomePageClient />;
    </>
  )
}
