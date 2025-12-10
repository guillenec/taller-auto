"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SkeletonCard from "@/components/SkeletonCard";
import { Paintbrush, Wrench, Car } from "lucide-react";
import { SERVICIOS } from "../../data/images";
import Image from "next/image";
// import { useLanguage } from "@/hooks/useLanguage";

import { useLanguage } from "@/app/providers/LanguageProvider";

export default function ServiciosPage() {
    const { t } = useLanguage();

    const tipos_icons = [
        { icon: <Wrench className="w-8 h-8 text-blue-600 dark:text-blue-400" />, tipo: "golpes" },
        { icon: <Paintbrush className="w-8 h-8 text-pink-600 dark:text-pink-400" />, tipo: "pintura" },
        { icon: <Car className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />, tipo: "pulido" }
    ];

    // Insertamos traducciones
    const servicios = SERVICIOS.map((s) => {
        const tipo = tipos_icons.find((t) => t.tipo === s.tipo);

        return {
            ...s,
            icon: tipo?.icon,
            titulo: t?.services?.[`card_${s.tipo}_title`] ?? s.alt,
            descripcion: t?.services?.[`card_${s.tipo}_desc`] ?? s.descripcion
        };
    });

    const loading = false;

    return (
        <section className="pt-28 pb-20 max-w-7xl mx-auto px-6">

            {/* TÍTULO */}
            <AnimatedSection>
                <h2 className="text-4xl font-bold text-center mb-12">
                    {t?.services?.title}{" "}
                    <span className="text-transparent bg-clip-text 
                        bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))]">
                        {t?.services?.title_gradient}
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
                                <div className="card-premium text-card-foreground rounded-2xl 
                                    overflow-hidden hover:scale-105  
                                    transition transform duration-300 "
                                >
                                    <Image
                                        src={s.srcImg}
                                        alt={s.alt}
                                        width={500}
                                        height={500}
                                        className="w-full h-48 object-cover"
                                    />

                                    <div className="p-6">
                                        {s.icon}
                                        <h3 className="text-2xl font-semibold mt-3">
                                            {s.titulo}
                                        </h3>
                                        <p className="text-muted-foreground mt-2">
                                            {s.descripcion}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                </div>
            </AnimatedSection>
        </section>
    );
}
