"use client";
import { useState } from "react";
import { Images, Camera } from "lucide-react";

export default function GaleriaPage() {
    const categorias = ["Todos", "Pintura", "Golpes", "Pulido", "Restauración"];
    const [cat, setCat] = useState("Todos");

    const imagenes = Array.from({ length: 12 }).map((_, i) => ({
        src: `https://picsum.photos/600/450?random=${300 + i}`,
        categoria: categorias[(i % (categorias.length - 1)) + 1],
    }));

    const filtradas =
        cat === "Todos" ? imagenes : imagenes.filter((f) => f.categoria === cat);

    return (
        <section className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">
                    Galería de <span className="text-transparent bg-linear-to-r from-blue-600 to-pink-600 bg-clip-text">Proyectos</span>
                </h1>
                <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                    Una selección de nuestros trabajos más recientes en pintura, reparación
                    de golpes y restauración automotriz. Calidad profesional garantizada.
                </p>
            </div>

            {/* Filtros */}
            <div className="flex justify-center gap-3 mb-8 flex-wrap">
                {categorias.map((c, i) => (
                    <button
                        key={i}
                        onClick={() => setCat(c)}
                        className={`px-4 py-2 rounded-full border transition ${cat === c
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white border-gray-300 hover:border-blue-400 hover:text-blue-600"
                            }`}
                    >
                        {c}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filtradas.map((img, i) => (
                    <div
                        key={i}
                        className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer group"
                    >
                        <img
                            src={img.src}
                            alt="Trabajo realizado"
                            className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                        />
                    </div>
                ))}
            </div>

            {/* Franja motivacional */}
            <div className="mt-20 p-10 rounded-3xl bg-linear-to-r from-blue-600 to-pink-600 text-white text-center shadow-xl">
                <Camera className="mx-auto mb-4 w-12 h-12 opacity-90" />
                <h2 className="text-3xl font-semibold">Cada detalle cuenta</h2>
                <p className="mt-2 text-white/90 max-w-xl mx-auto">
                    Documentamos cada proyecto porque creemos que la calidad se demuestra
                    en los resultados. Esta galería refleja nuestro compromiso con la
                    excelencia.
                </p>
            </div>
        </section>
    );
}
