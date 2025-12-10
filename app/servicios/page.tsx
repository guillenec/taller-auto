import { Metadata } from "next";
import ServiciosPageClient from "./ServiciosPageClient";

export const metadata: Metadata = {
    title: "Servicios Automotrices | Reparación, Pintura y Pulido | TallerPro",
    description:
        "Servicios profesionales de reparación de golpes, pintura automotriz, pulido y restauración en Bariloche. Calidad premium garantizada.",
    keywords: [
        "servicios automotrices bariloche",
        "pintura automotriz",
        "chapistería",
        "pulido automotriz",
        "reparación de golpes",
        "detailing bariloche",
        "restauración de autos"
    ],
    openGraph: {
        title: "Servicios Automotrices en Bariloche | TallerPro",
        description:
            "Conocé nuestros servicios: reparación de golpes, pintura, pulido y restauración premium.",
        url: "https://tallerpro.com/servicios",
        images: [{ url: "/og-servicios.jpg", width: 1200, height: 630 }]
    },
    alternates: {
        canonical: "https://tallerpro.com/servicios"
    }
};

export default function ServiciosPage() {
    return <ServiciosPageClient />;
}
