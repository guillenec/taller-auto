import { Shield, Award, Users } from "lucide-react";

export default function SobreNosotrosPage() {
    return (
        <section className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
            {/* Intro */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">
                    Conoce a <span className="bg-linear-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text">TallerPro</span>
                </h1>
                <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                    Más de 20 años de experiencia ofreciendo servicios de chapistería,
                    pintura y restauración con estándares de máxima calidad.
                </p>
            </div>

            {/* Historia + Imagen */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
                <img
                    src="https://picsum.photos/600/450?random=500"
                    className="rounded-xl shadow-lg"
                />
                <div>
                    <h2 className="text-3xl font-semibold mb-3">Nuestra Historia</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Fundado en 2004, TallerPro nació como un pequeño taller familiar
                        especializado en reparación de golpes y pintura. Con el tiempo,
                        gracias a la calidad de nuestro trabajo y la confianza de nuestros
                        clientes, evolucionamos hacia un centro integral automotriz
                        reconocido por su excelencia técnica.
                    </p>
                    <p className="text-gray-700 mt-3 leading-relaxed">
                        Hoy contamos con cabina de pintura presurizada, herramientas de
                        medición electrónica y un equipo certificado en técnicas avanzadas
                        de detallado y restauración.
                    </p>
                </div>
            </div>

            {/* Valores */}
            <h2 className="text-3xl font-semibold text-center mb-10">Nuestros Valores</h2>
            <div className="grid md:grid-cols-3 gap-10 mb-20">
                <div className="text-center">
                    <Shield className="w-12 h-12 mx-auto text-blue-600" />
                    <h3 className="mt-4 text-xl font-bold">Confianza</h3>
                    <p className="text-gray-600 mt-2">
                        Transparencia total en procesos, presupuestos y tiempos.
                    </p>
                </div>

                <div className="text-center">
                    <Award className="w-12 h-12 mx-auto text-pink-600" />
                    <h3 className="mt-4 text-xl font-bold">Calidad</h3>
                    <p className="text-gray-600 mt-2">
                        Materiales premium y técnicas certificadas de reparación.
                    </p>
                </div>

                <div className="text-center">
                    <Users className="w-12 h-12 mx-auto text-indigo-600" />
                    <h3 className="mt-4 text-xl font-bold">Atención</h3>
                    <p className="text-gray-600 mt-2">
                        Acompañamos al cliente en cada paso del proceso.
                    </p>
                </div>
            </div>

            {/* Estadísticas */}
            <div className="grid md:grid-cols-4 gap-6 bg-white p-10 rounded-3xl shadow-xl mb-20">
                {[
                    { n: "20+", label: "Años de experiencia" },
                    { n: "3.500+", label: "Vehículos reparados" },
                    { n: "98%", label: "Clientes satisfechos" },
                    { n: "12", label: "Técnicos certificados" },
                ].map((item, i) => (
                    <div key={i} className="text-center">
                        <p className="text-4xl font-bold text-blue-600">{item.n}</p>
                        <p className="text-gray-600 mt-1">{item.label}</p>
                    </div>
                ))}
            </div>

            {/* Equipo */}
            <h2 className="text-3xl font-semibold text-center mb-10">Nuestro Equipo</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                {["Carlos", "Mariana", "Julián", "Rocío", "Esteban", "Luis"].map(
                    (name, i) => (
                        <div key={i} className="text-center">
                            <img
                                src={`https://picsum.photos/300/300?random=${600 + i}`}
                                className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg"
                            />
                            <h3 className="mt-4 text-xl font-bold">{name}</h3>
                            <p className="text-gray-600">Técnico especialista</p>
                        </div>
                    )
                )}
            </div>
        </section>
    );
}
