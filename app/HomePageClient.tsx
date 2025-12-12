"use client"
import AnimatedSection from "@/components/AnimatedSection";
import { ShieldCheck, Sparkles, Clock, Star } from "lucide-react";
import { FONDOS_IMGS } from "../data/images";
import Image from "next/image";
import ScrollSection from "@/components/ScrollSection";
// import { useLanguage } from "@/hooks/useLanguage";
import { ProcesoItem, Testimonio } from "../types/types";
import { useLanguage } from "./providers/LanguageProvider";

export default function HomePageClient() {
  const imagen1 = FONDOS_IMGS[6];
  const { t } = useLanguage();

  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src={imagen1?.srcImg}
          alt={imagen1.alt}
          fill
          priority
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          sizes="100dvh"
        />

        <div className="absolute inset-0 bg-black/50 dark:bg-black/40" />

        <AnimatedSection delay={0.05}>
          <div className="relative text-center px-6 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg will-change-transform">
              {t?.home?.hero_title}
              <span className="block text-transparent bg-clip-text 
                bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))]">
                {t?.home?.hero_gradiente}
              </span>
            </h1>

            <p className="font-inter mt-4 text-white/90 text-lg md:text-xl">
              {t?.home?.hero_sub}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contacto"
                className="px-7 py-3 rounded-xl font-bold shadow-lg transition text-white
                bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))] hover:opacity-90"
              >
                {t?.home?.hero_button_contact1}
              </a>

              <a
                href="/galeria"
                className="px-7 py-3 rounded-xl border font-semibold transition
                bg-white/10 border-white/30 text-white hover:bg-white/20
                dark:bg-black/20 dark:border-white/20 dark:hover:bg-black/30"
              >
                {t?.home?.hero_button_galery}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <ScrollSection delay={0.15} className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-3">
          {t?.home?.titulo2}{" "}
          <span className="text-transparent bg-clip-text 
            bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))]">
            {t?.home?.titulo2_gradiente}
          </span>
        </h2>

        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          {t?.home?.subtitulo2}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-premium p-6 rounded-3xl ">
            <ShieldCheck className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-3" />
            <h3 className="text-xl font-semibold mb-2">{t?.home?.card1_titulo}</h3>
            <p className="text-muted-foreground text-sm">{t?.home?.card1_subtitulo}</p>
          </div>

          <div className="card-premium p-6 rounded-3xl">
            <Sparkles className="w-10 h-10 text-pink-600 dark:text-pink-400 mb-3" />
            <h3 className="text-xl font-semibold mb-2">{t?.home?.card2_titulo}</h3>
            <p className="text-muted-foreground text-sm">{t?.home?.card2_subtitulo}</p>
          </div>

          <div className="card-premium p-6 rounded-3xl ">
            <Clock className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-3" />
            <h3 className="text-xl font-semibold mb-2">{t?.home?.card3_titulo}</h3>
            <p className="text-muted-foreground text-sm">{t?.home?.card3_subtitulo}</p>
          </div>
        </div>
      </ScrollSection>

      {/* PROCESO */}
      <ScrollSection delay={0.15} className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">{t?.home?.proceso_titulo}</h2>

          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            {t?.home?.proceso_sub}
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {t?.home?.proceso_items.map((item: ProcesoItem, i: number) => (
              <div key={i} className="bg-background rounded-3xl shadow-lg p-5 border-2 border-border">
                <span className="w-9 h-9 rounded-full text-white flex items-center justify-center text-sm font-bold mb-3
                    bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))]">
                  {i + 1}
                </span>
                <h3 className="font-semibold mb-1">{item.titulo}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* TESTIMONIOS */}
      <ScrollSection delay={0.15} className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-3">{t?.home?.testimonios_titulo}</h2>

        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
          {t?.home?.testimonios_sub}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {t?.home?.testimonios.map((ts: Testimonio, i: number) => (
            <div key={i} className="bg-card rounded-3xl shadow-lg p-6 border border-border">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm flex-1">“{ts.texto}”</p>
              <p className="mt-4 text-sm font-semibold">{ts.nombre}</p>
            </div>
          ))}
        </div>
      </ScrollSection>

      {/* CTA FINAL */}
      <ScrollSection delay={0.15} className="px-6 pb-16">
        <div className="max-w-5xl mx-auto rounded-3xl text-white p-10 shadow-2xl text-center
            bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))]">

          <h2 className="text-3xl font-bold mb-2">{t?.home?.cta_titulo}</h2>

          <p className="mb-6 text-white/90">{t?.home?.cta_sub}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5491122233344"
              className="px-7 py-3 rounded-xl bg-white text-blue-700 font-semibold shadow-lg hover:bg-slate-100 transition">
              {t.home.cta_btn1}
            </a>

            <a href="/contacto"
              className="px-7 py-3 rounded-xl border border-white/70 font-semibold hover:bg-white/10 transition">
              {t.home.cta_btn2}
            </a>
          </div>
        </div>
      </ScrollSection>
    </>
  );
}
