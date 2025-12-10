import { Metadata } from "next";
import ContactoPageClient from "./ContactoPageClient";

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
        url: "https://tallerpro.com/contacto",
        images: [
            {
                url: "/og-contacto.jpg",
                width: 1200,
                height: 630
            }
        ],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Contacto | TallerPro",
        description:
            "Consultas, turnos y presupuestos para servicios automotrices en Bariloche.",
        images: ["/og-contacto.jpg"]
    },
    alternates: {
        canonical: "https://tallerpro.com/contacto"
    }
};

export default function Page() {
    return <ContactoPageClient />;
}
