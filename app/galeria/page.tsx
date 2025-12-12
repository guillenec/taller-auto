import { Metadata } from "next";
import GaleriaPageClient from "./GaleriaPageClient";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
    title: "Galería de Trabajos | Antes y Después | TallerPro",
    description:
        "Explorá nuestra galería de trabajos realizados: reparación de golpes, pintura automotriz, pulido y restauraciones completas en Bariloche.",
    keywords: [
        "galería automotriz bariloche",
        "antes y después autos",
        "reparación de chapa",
        "pintura profesional autos",
        "pulido automotriz",
        "restauración automotriz"
    ],
    openGraph: {
        title: "Galería de Trabajos | TallerPro",
        description:
            "Mir&aacute; los resultados reales de nuestros trabajos de chapa, pintura y pulido en Bariloche.",
        url: `${baseUrl}/galeria`,
        images: [
            {
                url: "/og-galeria.jpg",
                width: 1200,
                height: 630
            }
        ],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Galería de Trabajos | TallerPro",
        description:
            "Resultados reales: golpes reparados, autos pintados y pulido profesional.",
        images: ["/og-galeria.jpg"]
    },
    alternates: {
        canonical: `${baseUrl}/galeria`
    }
};

export default function GaleriaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ImageGallery",
                        "@id": `${baseUrl}/galeria#galeria`,
                        name: "Galería de trabajos realizados | TallerPro",
                        description:
                            "Resultados reales de reparación de golpes, pintura automotriz y pulido profesional.",
                        url: `${baseUrl}/galeria`,
                        image: [
                            `${baseUrl}/og-galeria.jpg`,
                        ],
                        mainEntityOfPage: `${baseUrl}/galeria`,
                    }),
                }}
            />
            <GaleriaPageClient />;
        </>
    )
}
