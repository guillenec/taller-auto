"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Shield, Award, Users, Star } from "lucide-react";
import { FONDOS_IMGS, PERSONAS } from "../../data/images";
import Image from "next/image";
import ScrollSection from "@/components/ScrollSection";
// import { useLanguage } from "@/hooks/useLanguage";

import { useLanguage } from "@/app/providers/LanguageProvider";

export default function SobreNosotrosPage() {
    const imagen1 = FONDOS_IMGS[5];
    const personas = PERSONAS;
    const { t } = useLanguage();

    return (
        <section className="pt-28 pb-20 px-6 max-w-7xl mx-auto bg-background text-foreground">

            {/* TÍTULO */}
            <AnimatedSection>
                <h1 className="text-4xl font-bold text-center">
                    {t?.about?.title}{" "}
                    <span className="bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))] text-transparent bg-clip-text">
                        {t?.about?.title_gradient}
                    </span>
                </h1>

                <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-3 mb-16">
                    {t?.about?.subtitle}
                </p>
            </AnimatedSection>

            {/* HISTORIA + IMAGEN */}
            <ScrollSection
                delay={0.1}
                className="grid md:grid-cols-2 gap-12 mb-20 items-center"
            >
                <Image
                    src={imagen1.srcImg}
                    alt={imagen1.alt}
                    width={600}
                    height={500}
                    priority
                    className="shadow-2xl object-cover rounded-3xl"
                />

                <div>
                    <h2 className="text-3xl font-semibold mb-3">
                        {t?.about?.history_title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed">
                        {t?.about?.history_p1}
                    </p>

                    <p className="text-muted-foreground mt-3 leading-relaxed">
                        {t?.about?.history_p2}
                    </p>
                </div>
            </ScrollSection>

            {/* VALORES */}
            <ScrollSection delay={0.15}>
                <h2 className="text-3xl font-semibold text-center mb-12">
                    {t?.about?.values_title}
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {/* Confianza */}
                    <div className="text-center p-6 bg-card rounded-3xl shadow-xl border border-border">
                        <Shield className="w-12 h-12 mx-auto text-blue-600 dark:text-blue-400" />
                        <h3 className="mt-4 text-xl font-bold">
                            {t?.about?.value_confianza_title}
                        </h3>
                        <p className="text-muted-foreground mt-2">
                            {t?.about?.value_confianza_desc}
                        </p>
                    </div>

                    {/* Calidad */}
                    <div className="text-center p-6 bg-card rounded-3xl shadow-xl border border-border">
                        <Award className="w-12 h-12 mx-auto text-pink-600 dark:text-pink-400" />
                        <h3 className="mt-4 text-xl font-bold">
                            {t?.about?.value_calidad_title}
                        </h3>
                        <p className="text-muted-foreground mt-2">
                            {t?.about?.value_calidad_desc}
                        </p>
                    </div>

                    {/* Atención humana */}
                    <div className="text-center p-6 bg-card rounded-3xl shadow-xl border border-border">
                        <Users className="w-12 h-12 mx-auto text-indigo-600 dark:text-indigo-400" />
                        <h3 className="mt-4 text-xl font-bold">
                            {t?.about?.value_atencion_title}
                        </h3>
                        <p className="text-muted-foreground mt-2">
                            {t?.about?.value_atencion_desc}
                        </p>
                    </div>
                </div>
            </ScrollSection>

            {/* EQUIPO */}
            <ScrollSection delay={0.2} className="mt-20">
                <h2 className="text-3xl font-semibold text-center mb-12">
                    {t?.about?.team_title}
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {personas.map((persona, index) => (
                        <div key={index} className="text-center">
                            <Image
                                src={persona.srcImg}
                                alt={persona.alt}
                                width={500}
                                height={500}
                                className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg"
                            />
                            <h3 className="mt-4 text-xl font-bold">{persona.name}</h3>
                            <p className="text-muted-foreground text-sm">{persona.alt}</p>
                        </div>
                    ))}
                </div>
            </ScrollSection>

            {/* CTA FINAL */}
            <ScrollSection delay={0.25}>
                <div
                    className="mt-20 p-10 text-center rounded-3xl text-white shadow-2xl
                    bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))]"
                >
                    <Star className="mx-auto w-12 h-12 mb-3 opacity-90" />
                    <h2 className="text-3xl font-bold">
                        {t?.about?.cta_title}
                    </h2>
                    <p className="mt-2 text-white/90 max-w-xl mx-auto">
                        {t?.about?.cta_sub}
                    </p>
                </div>
            </ScrollSection>

        </section>
    );
}
