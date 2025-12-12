import { Metadata } from "next";
import ContactoPageClient from "./ContactoPageClient";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
    title: "Contacto | TallerPro | Consultas, Turnos y Presupuestos",
    description:
        "Contactate con TallerPro para consultas, turnos y presupuestos. Estamos ubicados en Bariloche y ofrecemos servicios de reparación, pintura y pulido automotriz.",
    keywords: [
        "contacto taller automotriz",
        "contacto tallerpro",
        "taller automotriz bariloche",
        "presupuesto pintura automotriz",
        "consulta reparación de golpes",
        "turnos taller automotriz"
    ],
    openGraph: {
        title: "Contacto | TallerPro",
        description:
            "Enviá tu consulta o solicitá un turno en TallerPro, especialistas en estética automotriz premium.",
        url: `${baseUrl}/contacto`,
        images: [
            {
                url: "/og-contacto.jpg",
                width: 1200,
                height: 630
            }
        ],
        type: "website",
        locale: "es_AR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contacto | TallerPro",
        description:
            "Consultas, turnos y presupuestos para servicios automotrices en Bariloche.",
        images: ["/og-contacto.jpg"]
    },
    alternates: {
        canonical: `${baseUrl}/contacto`
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
                        "@type": "ContactPage",
                        "@id": `${baseUrl}/contacto#contact`,
                        name: "Contacto | TallerPro",
                        url: `${baseUrl}/contacto`,
                        description:
                            "Consultas, turnos y presupuestos en TallerPro, Bariloche.",
                        mainEntity: {
                            "@type": "ContactPoint",
                            telephone: "+5491122233344",
                            contactType: "customer service",
                            areaServed: "AR",
                            availableLanguage: ["es", "en"],
                        },
                    }),
                }}
            />

            <ContactoPageClient />;
        </>
    )
}
