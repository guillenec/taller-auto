import AnimatedSection from "@/components/AnimatedSection";
import { ShieldCheck, Sparkles, Clock, Star } from "lucide-react";
import { FONDOS_IMGS } from "./data/images";
import Image from "next/image";

export default function HomePage() {
  const imagen1 = FONDOS_IMGS[5]
  return (
    <>
      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src={`${imagen1?.srcImg}`}
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          alt={`${imagen1.alt}`}
          fill
          priority
        />
        <div className="absolute inset-0 bg-linear-to-br from-slate-900/80 via-slate-900/40 to-slate-900/90" />

        <AnimatedSection
          delay={0.05}
        >
          <div className="relative text-center px-6 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              Chapistería y pintura
              <span className="block bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                con estándar de concesionaria
              </span>
            </h1>

            <p className="mt-4 text-white/90 text-lg md:text-xl">
              Reparación de golpes, pintura completa, retoques y detallado premium con
              tecnología de última generación en Bariloche.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contacto"
                className="px-7 py-3 rounded-xl bg-linear-to-r from-blue-600 to-pink-600 text-white font-bold shadow-lg hover:opacity-90 transition"
              >
                Solicitar presupuesto
              </a>
              <a
                href="/galeria"
                className="px-7 py-3 rounded-xl bg-white/10 text-white border border-white/30 font-semibold hover:bg-white/15 transition"
              >
                Ver trabajos realizados
              </a>
            </div>
          </div>
        </AnimatedSection>

      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <AnimatedSection delay={0.15} className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-3">
          ¿Por qué elegir <span className="text-transparent bg-linear-to-r from-blue-600 to-pink-600 bg-clip-text">TallerPro</span>?
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Combinamos experiencia, equipamiento y procesos de calidad para que tu vehículo
          vuelva a lucir como el primer día.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-lg p-6 border border-slate-100">
            <ShieldCheck className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Garantía por escrito</h3>
            <p className="text-gray-600 text-sm">
              Todos nuestros trabajos incluyen garantía escrita sobre pintura y adherencia,
              respaldada por materiales certificados.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 border border-slate-100">
            <Sparkles className="w-10 h-10 text-pink-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Terminación impecable</h3>
            <p className="text-gray-600 text-sm">
              Cabina presurizada, igualación de color computarizada y pulido final espejo
              para un acabado perfecto.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 border border-slate-100">
            <Clock className="w-10 h-10 text-indigo-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Cumplimiento de plazos</h3>
            <p className="text-gray-600 text-sm">
              Planificamos cada reparación para entregarte el vehículo en el tiempo
              acordado, sin sorpresas.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* PROCESO DE TRABAJO */}
      <AnimatedSection delay={0.15} className="bg-linear-to-r from-blue-50 via-white to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-3">Nuestro proceso</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Un flujo claro y transparente, desde la recepción del vehículo hasta la entrega final.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { paso: "1", titulo: "Diagnóstico", desc: "Evaluación del daño, fotos y armado del presupuesto." },
              { paso: "2", titulo: "Desarme y reparación", desc: "Corrección de golpes y sustitución de piezas si es necesario." },
              { paso: "3", titulo: "Pintura & pulido", desc: "Aplicación de pintura en cabina y pulido espejo." },
              { paso: "4", titulo: "Entrega", desc: "Control de calidad, limpieza final y entrega al cliente." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-lg p-5 border border-slate-100 flex flex-col"
              >
                <span className="w-9 h-9 rounded-full bg-linear-to-r from-blue-600 to-pink-600 text-white flex items-center justify-center text-sm font-bold mb-3">
                  {item.paso}
                </span>
                <h3 className="font-semibold mb-1">{item.titulo}</h3>
                <p className="text-gray-600 text-sm flex-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* TESTIMONIOS */}
      <AnimatedSection delay={0.15} className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-3">Lo que dicen nuestros clientes</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          La mejor carta de presentación son los resultados y la experiencia de nuestros clientes.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              nombre: "Marcos G.",
              texto:
                "Tuve un choque leve en la parte trasera. Dejé el auto una semana y lo retiré como nuevo. El color quedó idéntico.",
            },
            {
              nombre: "Lucía P.",
              texto:
                "Pintura completa de mi vehículo. Me explicaron cada etapa del trabajo y cumplieron con el plazo prometido.",
            },
            {
              nombre: "Federico R.",
              texto:
                "Retoques en el paragolpes y pulido general. Súper detallistas, se nota que les importa el resultado.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg p-6 border border-slate-100 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm flex-1">“{t.texto}”</p>
              <p className="mt-4 text-sm font-semibold text-gray-900">{t.nombre}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* CTA FINAL */}
      <AnimatedSection delay={0.15} className="px-6 pb-16">
        <div className="max-w-5xl mx-auto rounded-3xl bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-10 shadow-2xl text-center">
          <h2 className="text-3xl font-bold mb-2">¿Listo para devolverle la estética a tu vehículo?</h2>
          <p className="mb-6 text-white/90">
            Envíanos fotos del daño por WhatsApp o completá el formulario de contacto
            y te cotizamos sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5491122233344"
              className="px-7 py-3 rounded-xl bg-white text-blue-700 font-semibold shadow-lg hover:bg-slate-100 transition"
            >
              Cotizar por WhatsApp
            </a>
            <a
              href="/contacto"
              className="px-7 py-3 rounded-xl border border-white/70 font-semibold hover:bg-white/10 transition"
            >
              Ir a la página de contacto
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
