import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Facebook, Instagram } from "lucide-react";

export default function ContactoPage() {
    return (
        <section className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
            {/* TÍTULO */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold">
                    Ponte en{" "}
                    <span className="bg-linear-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text">
                        Contacto
                    </span>
                </h1>

                <p className="text-gray-600 max-w-2xl mx-auto mt-3">
                    Nuestro equipo está listo para ayudarte. Escríbenos, llámanos o visítanos en nuestro taller.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* FORMULARIO */}
                <div className="rounded-3xl shadow-xl p-8 bg-white/90 backdrop-blur">
                    <h2 className="text-2xl font-semibold mb-6 bg-linear-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text">
                        Envíanos un mensaje
                    </h2>

                    <form className="grid gap-5">
                        <input
                            className="p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
                            placeholder="Nombre completo"
                        />
                        <input
                            className="p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
                            placeholder="Correo electrónico"
                        />
                        <textarea
                            rows={5}
                            className="p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
                            placeholder="Mensaje"
                        ></textarea>

                        <button className="px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-pink-600 text-white font-semibold shadow-lg hover:opacity-90 transition">
                            Enviar consulta
                        </button>
                    </form>

                    {/* INFORMACIÓN EXTRA */}
                    <div className="mt-10">
                        <h3 className="font-semibold text-lg mb-4">Otras vías de contacto</h3>

                        <div className="flex flex-col gap-3 text-gray-700">
                            <p className="flex items-center gap-2 hover:text-blue-600 transition">
                                <Phone className="text-blue-600" /> 11 2233 4455
                            </p>
                            <p className="flex items-center gap-2 hover:text-blue-600 transition">
                                <Mail className="text-blue-600" /> info@tallerpro.com
                            </p>
                        </div>

                        <div className="mt-6 flex gap-5 text-2xl text-gray-600">
                            <a className="hover:text-blue-600 transition">
                                <Facebook />
                            </a>
                            <a className="hover:text-pink-600 transition">
                                <Instagram />
                            </a>
                            <a className="hover:text-green-600 transition">
                                <MessageCircle />
                            </a>
                        </div>
                    </div>
                </div>

                {/* MAPA + INFO */}
                <div className="flex flex-col gap-6">
                    <iframe
                        className="w-full h-80 rounded-3xl shadow-xl"
                        loading="lazy"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.1057703439556!2d-71.2894532242077!3d-41.13221693088229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7c9d50817419%3A0xb0d760fdeb4ac0a4!2sDon%20Bosco%20121%2C%20R8400%20San%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses!2sar!4v1764998316470!5m2!1ses!2sar"
                    ></iframe>

                    <div className="rounded-3xl shadow-xl p-6 bg-linear-to-br from-blue-600/10 to-pink-600/10 backdrop-blur">
                        <h3 className="text-xl font-semibold mb-4 bg-linear-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text">
                            Nuestra ubicación
                        </h3>

                        <p className="flex items-center gap-2 text-gray-800 mb-2">
                            <MapPin className="text-blue-600" /> Don Bosco 121, San Carlos de Bariloche, Río Negro
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-2 bg-linear-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text">
                            Horarios de atención
                        </h3>
                        <p className="text-gray-800">Lunes a Viernes: 9:00 – 18:00</p>
                        <p className="text-gray-800">Sábados: 9:00 – 13:00</p>
                    </div>
                </div>
            </div>

            {/* BOTÓN WHATSAPP FLOTANTE */}
            <a
                href="https://wa.me/5491122233344"
                className="fixed bottom-6 right-6 bg-linear-to-br from-green-500 to-green-600 p-4 rounded-full shadow-xl text-white hover:scale-105 transition transform"
            >
                <MessageCircle size={28} />
            </a>
        </section>
    );
}
