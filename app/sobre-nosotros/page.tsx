import AnimatedSection from "@/components/AnimatedSection";
import { Shield, Award, Users, Star } from "lucide-react";
import { FONDOS_IMGS, PERSONAS } from "../data/images";
import Image from "next/image";

export default function SobreNosotrosPage() {
    const imagen1 = FONDOS_IMGS[5]
    const personas = PERSONAS

    return (
        <section className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
            {/* Intro */}
            <AnimatedSection>
                <h1 className="text-4xl font-bold text-center">
                    Sobre{" "}
                    <span className="bg-linear-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text">
                        Nosotros
                    </span>
                </h1>

                <p className="text-gray-600 text-center max-w-2xl mx-auto mt-3 mb-16">
                    Sabemos que tu vehículo es más que un medio de transporte. Por eso
                    trabajamos con dedicación, precisión y respeto por cada detalle.
                </p>
            </AnimatedSection>

            {/* Historia + Imagen */}
            <AnimatedSection delay={0.1} className="grid md:grid-cols-2 gap-12 mb-20 items-center">
                <Image
                    src={imagen1?.srcImg}
                    className="rounded-xl shadow-2xl"
                    alt={imagen1?.alt}
                    width={600}
                    height={500}
                    priority
                />
                <div>
                    <h2 className="text-3xl font-semibold mb-3">Nuestra historia</h2>
                    <p className="text-gray-700 leading-relaxed">
                        TallerPro nació en 2004 como un pequeño taller dedicado a brindar un
                        servicio honesto y de calidad. Con el tiempo, la demanda y la pasión
                        por hacerlo bien nos llevó a crecer, invertir en tecnología y formar
                        un equipo altamente capacitado.
                    </p>
                    <p className="text-gray-700 mt-3 leading-relaxed">
                        Hoy somos un centro automotriz integral reconocido en toda la
                        región, con cabinas presurizadas, mezcla de color digital y procesos
                        certificados de detallado.
                    </p>
                </div>
            </AnimatedSection>

            {/* Valores */}
            <AnimatedSection delay={0.15}>
                <h2 className="text-3xl font-semibold text-center mb-12">Nuestros valores</h2>
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="text-center p-6 bg-white rounded-3xl shadow-xl">
                        <Shield className="w-12 h-12 mx-auto text-blue-600" />
                        <h3 className="mt-4 text-xl font-bold">Confianza</h3>
                        <p className="text-gray-600 mt-2">
                            Transparencia total en tiempos, presupuestos y procesos.
                        </p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-3xl shadow-xl">
                        <Award className="w-12 h-12 mx-auto text-pink-600" />
                        <h3 className="mt-4 text-xl font-bold">Calidad superior</h3>
                        <p className="text-gray-600 mt-2">
                            Técnicas avanzadas, equipos profesionales y pintura premium.
                        </p>
                    </div>

                    <div className="text-center p-6 bg-white rounded-3xl shadow-xl">
                        <Users className="w-12 h-12 mx-auto text-indigo-600" />
                        <h3 className="mt-4 text-xl font-bold">Atención humana</h3>
                        <p className="text-gray-600 mt-2">
                            Acompañamos cada proyecto con cercanía y responsabilidad.
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            {/* Equipo */}
            <AnimatedSection delay={0.2} className="mt-20">
                <h2 className="text-3xl font-semibold text-center mb-12">Nuestro equipo</h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {personas.map((persona, index) => (
                        <div key={index} className="text-center">
                            <Image
                                src={persona?.srcImg}
                                className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg"
                                alt={persona?.alt}
                                width={500}
                                height={500}
                            />
                            <h3 className="mt-4 text-xl font-bold">{persona?.name}</h3>
                            <p className="text-gray-600 text-sm">{persona?.alt}</p>
                        </div>
                    )
                    )}
                </div>
            </AnimatedSection>

            {/* Bloque final */}
            <AnimatedSection delay={0.25}>
                <div className="mt-20 p-10 text-center rounded-3xl bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl">
                    <Star className="mx-auto w-12 h-12 mb-3 opacity-90" />
                    <h2 className="text-3xl font-bold">Pasión por lo que hacemos</h2>
                    <p className="mt-2 text-white/90 max-w-xl mx-auto">
                        Nos mueve el orgullo de ver cada vehículo salir mejor que como
                        llegó. Para nosotros, cada trabajo es una oportunidad de superación.
                    </p>
                </div>
            </AnimatedSection>
        </section>
    );
}
