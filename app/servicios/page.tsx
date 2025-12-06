import SkeletonCard from "@/components/SkeletonCard";
import { Paintbrush, Wrench, Car } from "lucide-react";

export default function ServiciosPage() {
    const servicios = [
        {
            titulo: "Reparación de golpes",
            descripcion:
                "Corrección de abolladuras, enderezado de paneles y restauración estructural precisa.",
            icon: <Wrench className="w-8 h-8 text-blue-600" />,
            img: "https://picsum.photos/400/300?random=201",
        },
        {
            titulo: "Pintura automotriz premium",
            descripcion:
                "Aplicación de pintura de alta calidad con cabina presurizada y barniz cerámico.",
            icon: <Paintbrush className="w-8 h-8 text-pink-600" />,
            img: "https://picsum.photos/400/300?random=202",
        },
        {
            titulo: "Pulido y detallado",
            descripcion:
                "Corrección de imperfecciones, pulido espejo, encerado y protección UV.",
            icon: <Car className="w-8 h-8 text-indigo-600" />,
            img: "https://picsum.photos/400/300?random=203",
        },
    ];

    const loading = false;

    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>

            <div className="grid md:grid-cols-3 gap-10">
                {loading
                    ? [...Array(3)].map((_, i) => <SkeletonCard key={i} />)
                    : servicios.map((s, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition transform duration-300"
                        >
                            <img src={s.img} className="w-full h-48 object-cover" />

                            <div className="p-6">
                                {s.icon}
                                <h3 className="text-2xl font-semibold mt-3">{s.titulo}</h3>
                                <p className="text-gray-600 mt-2">{s.descripcion}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
}
