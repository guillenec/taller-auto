import { Metadata } from "next";
import GaleriaPageClient from "./GaleriaPageClient";

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
        url: "https://tallerpro.com/galeria",
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
        canonical: "https://tallerpro.com/galeria"
    }
};

export default function GaleriaPage() {
    return <GaleriaPageClient />;
}
