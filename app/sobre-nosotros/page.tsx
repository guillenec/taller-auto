import { Metadata } from "next";
import SobreNosotrosPageClient from "./page copy";

export const metadata: Metadata = {
    title: "Sobre Nosotros | TallerPro | Profesionales en Chapistería y Pintura",
    description:
        "Conocé la historia, valores y equipo detrás de TallerPro: especialistas en carrocería, pintura automotriz y restauración en Bariloche.",
    keywords: [
        "sobre nosotros taller automotriz",
        "taller automotriz bariloche",
        "equipo de carrocería",
        "historia del taller",
        "pintura automotriz bariloche",
        "restauración automotriz"
    ],
    openGraph: {
        title: "Sobre Nosotros | TallerPro",
        description:
            "Nuestra historia, valores y equipo profesional en reparación de golpes, pintura y restauración automotriz.",
        url: "https://tallerpro.com/sobre-nosotros",
        images: [
            {
                url: "/og-sobre-nosotros.jpg",
                width: 1200,
                height: 630
            }
        ],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Sobre Nosotros | TallerPro",
        description:
            "Conocé al equipo y la trayectoria de TallerPro en Bariloche.",
        images: ["/og-sobre-nosotros.jpg"]
    },
    alternates: {
        canonical: "https://tallerpro.com/sobre-nosotros"
    }
};

export default function Page() {
    return <SobreNosotrosPageClient />;
}
