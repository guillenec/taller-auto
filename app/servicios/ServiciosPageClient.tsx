"use client";
import AnimatedSection from "@/components/AnimatedSection";
import SkeletonCard from "@/components/SkeletonCard";
import { Paintbrush, Wrench, Car } from "lucide-react";
import { SERVICIOS } from "../../data/images";
import Image from "next/image";
import { useLanguage } from "@/app/providers/LanguageProvider";


export default function ServiciosPageClient() {
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
                <h1 className="text-4xl font-bold text-center mb-12 will-change-transform">
                    {t?.services?.title}{" "}
                    <span className="text-transparent bg-clip-text 
                        bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))]">
                        {t?.services?.title_gradient}
                    </span>
                </h1>
            </AnimatedSection>

            {/* CARDS */}
            <AnimatedSection delay={0.1}>
                <div className="grid md:grid-cols-3 gap-10">
                    {loading
                        ? [...Array(3)].map((_, i) => <SkeletonCard key={i} />)
                        : servicios.map((s, i) => (
                            <AnimatedSection key={i} delay={0.1 + i * 0.1}>
                                <div
                                    className="card-premium2 group rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                                >
                                    {/* Imagen con overlay degradado suave */}
                                    <div className="relative w-full h-48">
                                        <Image
                                            src={s.srcImg}
                                            alt={s.alt}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                                    </div>

                                    <div className="p-6 relative z-10">
                                        {/* Ícono */}
                                        <div className="mb-3 drop-shadow-md">{s.icon}</div>

                                        <h3 className="text-2xl font-semibold">{s.titulo}</h3>
                                        <p className="text-muted-foreground mt-2">{s.descripcion}</p>
                                    </div>

                                </div>
                            </AnimatedSection>
                        ))}
                </div>
            </AnimatedSection>
        </section>

    );

}
