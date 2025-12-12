import { Metadata } from "next";
import ServiciosPageClient from "./ServiciosPageClient";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

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
        url: `${baseUrl}/servicios`,
        images: [{ url: `${baseUrl}/og-servicios.jpg`, width: 1200, height: 630 }],
        type: "website",
        locale: "es_AR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Servicios Automotrices | TallerPro",
        description:
            "Reparación de golpes, pintura profesional y pulido premium en Bariloche.",
        images: [`${baseUrl}/og-servicios.jpg`],
    },
    alternates: {
        canonical: `${baseUrl}/servicios`
    }
};

export default function ServiciosPage() {
    return (
        <>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "@id": `${baseUrl}/servicios#service`,
                        name: "Servicios Automotrices | TallerPro",
                        serviceType: [
                            "Reparación de golpes",
                            "Pintura automotriz",
                            "Pulido automotriz",
                            "Restauración de autos"
                        ],
                        url: `${baseUrl}/servicios`,
                        description:
                            "Reparación de golpes, pintura automotriz, pulido profesional y restauración completa.",
                        provider: {
                            "@type": "AutoRepair",
                            name: "TallerPro",
                            url: baseUrl,
                        },
                        hasOfferCatalog: {
                            "@type": "OfferCatalog",
                            name: "Servicios principales",
                            itemListElement: [
                                {
                                    "@type": "Offer",
                                    name: "Reparación de golpes",
                                    itemOffered: {
                                        "@type": "Service",
                                        serviceType: "BodyWork",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    name: "Pintura automotriz",
                                    itemOffered: {
                                        "@type": "Service",
                                        serviceType: "CarPaint",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    name: "Pulido y detallado profesional",
                                    itemOffered: {
                                        "@type": "Service",
                                        serviceType: "CarDetailing",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Reparación de golpes",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Pintura automotriz profesional",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Pulido y detailing",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Restauración automotriz",
                                    },
                                },
                            ],
                        },
                    }),
                }}
            />
            <ServiciosPageClient />;
        </>
    )
}
