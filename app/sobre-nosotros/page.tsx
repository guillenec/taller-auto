import { Metadata } from "next";
import SobreNosotrosPageClient from "./SobreNosotrosPageClient.tsx";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

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
        url: `${baseUrl}/sobre-nosotros`,
        images: [
            {
                url: "/og-sobre-nosotros.jpg",
                width: 1200,
                height: 630
            }
        ],
        type: "website",
        locale: "es_AR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sobre Nosotros | TallerPro",
        description:
            "Conocé al equipo y la trayectoria de TallerPro en Bariloche.",
        images: ["/og-sobre-nosotros.jpg"]
    },
    alternates: {
        canonical: `${baseUrl}/sobre-nosotros`
    }
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
                        "@type": "AboutPage",
                        "@id": `${baseUrl}/sobre-nosotros#about`,
                        name: "Sobre Nosotros | TallerPro",
                        url: `${baseUrl}/sobre-nosotros`,
                        description:
                            "Conocé la historia, trayectoria y equipo detrás de TallerPro.",
                        mainEntity: {
                            "@type": "Organization",
                            name: "TallerPro",
                            url: baseUrl,
                            logo: `${baseUrl}/favicon-32x32.png`,
                        },
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Don Bosco 121",
                            addressLocality: "San Carlos de Bariloche",
                            addressRegion: "Río Negro",
                            addressCountry: "AR",
                        },
                        sameAs: [
                            "https://www.facebook.com/",
                            "https://www.instagram.com/",
                        ],
                    }),
                }}
            />

            <SobreNosotrosPageClient />;
        </>
    )
}
