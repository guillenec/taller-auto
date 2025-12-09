"use client";

import { useMemo, useState } from "react";
import { Camera } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import { GALERIA_IMGS } from "../data/images";

const categorias = [
    { label: "Todos", slug: "todos" },
    { label: "Golpes", slug: "golpes" },
    { label: "Pintura", slug: "pintura" },
    { label: "Pulido", slug: "pulido" },
    { label: "Restauración", slug: "restauración" },
] as const;

export default function GaleriaPage() {
    const [cat, setCat] = useState<(typeof categorias)[number]["slug"]>("todos");

    const filtradas = useMemo(() => {
        if (cat === "todos") return GALERIA_IMGS;
        return GALERIA_IMGS.filter((img) => img.tipo === cat);
    }, [cat]);

    return (
        <section className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
            <AnimatedSection
                delay={0.05}
            >
                <h1 className="text-4xl font-bold text-center">
                    Galería de{" "}
                    <span className="bg-linear-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text">
                        Trabajos Realizados
                    </span>
                </h1>

                <p className="text-gray-600 text-center max-w-2xl mx-auto mt-3 mb-10">
                    Mirá algunos de nuestros resultados en pintura, corrección de golpes,
                    restauración y detallado. La calidad se ve en los detalles.
                </p>
            </AnimatedSection>

            {/* Filtros */}
            <AnimatedSection delay={0.1}>
                <div className="flex justify-center gap-3 mb-10 flex-wrap">
                    {categorias.map((c) => (
                        <button
                            key={c.slug}
                            onClick={() => setCat(c.slug)}
                            className={`px-4 py-2 rounded-full transition border ${cat === c.slug
                                ? "bg-linear-to-r from-blue-600 to-pink-600 text-white border-transparent shadow-lg"
                                : "bg-white border-gray-300 hover:border-blue-500 hover:text-blue-600"
                                }`}
                        >
                            {c.label}
                        </button>
                    ))}
                </div>
            </AnimatedSection>

            {/* Grid */}
            <AnimatedSection>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filtradas.map((img, index) => (
                        <AnimatedSection key={img.srcImg} delay={index * 0.02}>
                            <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer bg-white">
                                <div className="relative w-full h-56 overflow-hidden rounded-2xl">
                                    <Image
                                        src={img.srcImg}
                                        alt={img.alt}
                                        fill
                                        priority={index < 3}
                                        className="object-cover group-hover:scale-110 transition duration-700"
                                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                                    />
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </AnimatedSection>

            {/* Franja motivacional */}
            <AnimatedSection delay={0.2} >
                <div className="mt-20 p-10 rounded-3xl bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-center shadow-2xl">
                    <Camera className="mx-auto mb-4 w-12 h-12 opacity-90" />
                    <h2 className="text-3xl font-semibold">La excelencia queda registrada</h2>
                    <p className="mt-2 text-white/90 max-w-xl mx-auto">
                        Cada trabajo que realizamos está documentado porque creemos en la
                        transparencia y el orgullo por nuestro oficio.
                    </p>
                </div>
            </AnimatedSection >
        </section >
    );
}
