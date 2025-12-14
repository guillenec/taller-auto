"use client";
import AnimatedSection from "@/components/AnimatedSection";
import SkeletonCard from "@/components/SkeletonCard";
import { Paintbrush, Wrench, Car, Settings } from "lucide-react";
import { SERVICIOS } from "../../data/images";
import Image from "next/image";
import { useLanguage } from "@/app/providers/LanguageProvider";
import ScrollSection from "@/components/ScrollSection";


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
                                            // priority
                                            // fetchPriority="high"
                                            // sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                            priority={i === 0}
                                            fetchPriority={i === 0 ? "high" : "auto"}
                                            sizes="(min-width:1024px) 33vw, 100vw"
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                                    </div>

                                    <div className="p-6 relative z-10">
                                        {/* Ícono */}
                                        <div className="mb-3 drop-shadow-md">{s.icon}</div>

                                        <h2 className="text-2xl font-semibold">{s.titulo}</h2>
                                        <p className="text-muted-foreground mt-2">{s.descripcion}</p>
                                    </div>

                                </div>
                            </AnimatedSection>
                        ))}
                </div>
            </AnimatedSection>

            {/* CTA Final */}
            <ScrollSection delay={0.2}>
                <div className="mt-20 p-10 rounded-3xl text-white text-center shadow-2xl
                bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))]">
                    <Settings className="mx-auto mb-4 w-12 h-12 opacity-90" />
                    <h2 className="text-3xl font-semibold">{t?.services?.cta_title}</h2>
                    <p className="mt-2 text-white/90 max-w-xl mx-auto">
                        {t?.services?.cta_sub}
                    </p>
                </div>
            </ScrollSection>
        </section>

    );

}
