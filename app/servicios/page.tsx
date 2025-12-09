"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SkeletonCard from "@/components/SkeletonCard";
import { Paintbrush, Wrench, Car } from "lucide-react";
import { SERVICIOS } from "../data/images";
import Image from "next/image";

export default function ServiciosPage() {

    const tipos_icons = [
        {
            icon: <Wrench className="w-8 h-8 text-blue-600" />,
            tipo: "golpe"
        },
        {
            icon: <Paintbrush className="w-8 h-8 text-pink-600" />,
            tipo: "pintura"
        },
        {
            icon: <Car className="w-8 h-8 text-indigo-600" />,
            tipo: "pulido"
        }
    ]

    const servicios = SERVICIOS
        .map((s) => {
            const tipo = tipos_icons.find((t) => t.tipo === s.tipo);
            return {
                ...s,
                icon: tipo?.icon
            }
        })
        .sort((a, b) => a.tipo.localeCompare(b.tipo));

    const loading = false;

    return (
        <section className="pt-28 pb-20 max-w-7xl mx-auto px-6">
            {/* TÍTULO */}
            <AnimatedSection>
                <h2 className="text-4xl font-bold text-center mb-12">
                    Nuestros{" "}
                    <span className="bg-linear-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text">
                        Servicios
                    </span>
                </h2>
            </AnimatedSection>

            {/* CARDS */}
            <AnimatedSection delay={0.1}>
                <div className="grid md:grid-cols-3 gap-10">
                    {loading
                        ? [...Array(3)].map((_, i) => <SkeletonCard key={i} />)
                        : servicios.map((s, i) => (
                            <AnimatedSection key={i} delay={0.1 + i * 0.1}>
                                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition transform duration-300">
                                    <Image
                                        src={s?.srcImg}
                                        className="w-full h-48 object-cover"
                                        alt={s?.alt}
                                        width={500}
                                        height={500}
                                    />

                                    <div className="p-6">
                                        {s.icon}
                                        <h3 className="text-2xl font-semibold mt-3">{s?.alt}</h3>
                                        <p className="text-gray-600 mt-2">{s?.descripcion}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                </div>
            </AnimatedSection>
        </section>
    );
}
