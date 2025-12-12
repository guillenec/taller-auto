"use client";

import { useMemo, useState } from "react";
import { Camera } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import { GALERIA_IMGS } from "../../data/images";
import ScrollSection from "@/components/ScrollSection";
// import { useLanguage } from "@/hooks/useLanguage";
import { useLanguage } from "@/app/providers/LanguageProvider";

export default function GaleriaPageClient() {
    const { t } = useLanguage();

    const categorias = [
        { label: t?.gallery?.filters?.all, slug: "todos" },
        { label: t?.gallery?.filters?.golpes, slug: "golpes" },
        { label: t?.gallery?.filters?.pintura, slug: "pintura" },
        { label: t?.gallery?.filters?.pulido, slug: "pulido" },
        { label: t?.gallery?.filters?.restauracion, slug: "restauracion" }
    ] as const;

    const [cat, setCat] = useState<(typeof categorias)[number]["slug"]>("todos");
    const [page, setPage] = useState(1);
    const perPage = 9;

    const filtradas = useMemo(() => {
        return cat === "todos"
            ? GALERIA_IMGS
            : GALERIA_IMGS.filter((img) => img.tipo === cat);
    }, [cat]);

    const totalPages = Math.ceil(filtradas.length / perPage);

    const paginated = useMemo(() => {
        const start = (page - 1) * perPage;
        return filtradas.slice(start, start + perPage);
    }, [filtradas, page]);

    const changeCategory = (newCat: (typeof categorias)[number]["slug"]) => {
        setCat(newCat);
        setPage(1);
    };

    return (
        <section className="pt-28 pb-20 px-6 max-w-7xl mx-auto bg-background text-foreground">

            {/* Título */}
            <AnimatedSection delay={0.05}>
                <h1 className="text-4xl font-bold text-center will-change-transform">
                    {t?.gallery?.title}{" "}
                    <span className="bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))] text-transparent bg-clip-text">
                        {t?.gallery?.title_gradient}
                    </span>
                </h1>

                <p className="text-muted-foreground text-center max-w-2xl mx-auto mt-3 mb-10">
                    {t?.gallery?.subtitle}
                </p>
            </AnimatedSection>

            {/* Filtros */}
            <AnimatedSection delay={0.1}>
                <div className="flex justify-center gap-3 mb-10 flex-wrap">
                    {categorias.map((c) => (
                        <button
                            key={c.slug}
                            onClick={() => changeCategory(c.slug)}
                            className={`px-4 py-2 rounded-full border transition
                                ${cat === c.slug
                                    ? "text-white shadow-lg bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))] border-transparent"
                                    : "bg-card border-border text-foreground hover:border-blue-500 dark:hover:border-pink-500"
                                }`}
                        >
                            {c.label}
                        </button>
                    ))}
                </div>
            </AnimatedSection>

            {/* GRID */}
            <AnimatedSection>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {paginated.map((img, index) => (
                        <AnimatedSection key={img.srcImg} delay={index * 0.03}>
                            <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer bg-card border border-border">
                                <div className="relative w-full h-56 overflow-hidden rounded-2xl">
                                    <Image
                                        src={img.srcImg}
                                        alt={img.alt}
                                        fill
                                        // priority={index < 3}
                                        loading="lazy"
                                        decoding="async"
                                        className="object-cover  group-hover:scale-110 transition duration-700"
                                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                                    />
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </AnimatedSection>

            {/* PAGINACIÓN */}
            <div className="flex justify-center mt-12 gap-4">
                <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className={`px-4 py-2 rounded-lg border transition
                        ${page === 1
                            ? "border-border text-muted-foreground opacity-50 cursor-not-allowed"
                            : "border-border hover:bg-muted text-foreground"
                        }`}
                >
                    {t?.gallery?.pagination_prev}
                </button>

                <span className="px-4 py-2 rounded-lg bg-muted font-semibold text-foreground">
                    {t?.gallery?.pagination_page} {page} / {totalPages}
                </span>

                <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className={`px-4 py-2 rounded-lg border transition
                        ${page === totalPages
                            ? "border-border text-muted-foreground opacity-50 cursor-not-allowed"
                            : "border-border hover:bg-muted text-foreground"
                        }`}
                >
                    {t?.gallery?.pagination_next}
                </button>
            </div>

            {/* CTA Final */}
            <ScrollSection delay={0.2}>
                <div className="mt-20 p-10 rounded-3xl text-white text-center shadow-2xl
                bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))]">
                    <Camera className="mx-auto mb-4 w-12 h-12 opacity-90" />
                    <h2 className="text-3xl font-semibold">{t?.gallery?.cta_title}</h2>
                    <p className="mt-2 text-white/90 max-w-xl mx-auto">
                        {t?.gallery?.cta_sub}
                    </p>
                </div>
            </ScrollSection>
        </section>
    );
}
