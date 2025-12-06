import { MessageCircle, Mail, Facebook, Instagram } from "lucide-react";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-20 bg-slate-950 text-slate-100">
            {/* Franja con gradiente superior */}
            <div className="h-1 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600" />

            <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
                {/* Branding */}
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
                        TallerPro
                    </h2>
                    <p className="mt-3 text-slate-300 text-sm">
                        Especialistas en chapistería, pintura y detallado automotriz en San Carlos
                        de Bariloche. Trabajamos con procesos controlados y materiales de primera
                        línea para garantizar resultados impecables.
                    </p>
                </div>

                {/* Enlaces rápidos */}
                <div>
                    <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-slate-300">
                        Navegación
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li><Link href="/" className="hover:text-white">Inicio</Link></li>
                        <li><Link href="/servicios" className="hover:text-white">Servicios</Link></li>
                        <li><Link href="/galeria" className="hover:text-white">Galería</Link></li>
                        <li><Link href="/sobre-nosotros" className="hover:text-white">Sobre nosotros</Link></li>
                        <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
                    </ul>
                </div>

                {/* Contacto y redes */}
                <div>
                    <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-slate-300">
                        Contacto
                    </h3>
                    <div className="space-y-2 text-sm text-slate-300">
                        <p>Don Bosco 121, San Carlos de Bariloche</p>
                        <p>Tel: 11 2233 4455</p>
                        <p className="flex items-center gap-2">
                            <Mail className="w-4 h-4" /> info@tallerpro.com
                        </p>
                    </div>

                    <div className="mt-4 flex gap-4 text-slate-300">
                        <a href="#" className="hover:text-blue-400">
                            <Facebook />
                        </a>
                        <a href="#" className="hover:text-pink-400">
                            <Instagram />
                        </a>
                        <a href="https://wa.me/5491122233344" className="hover:text-green-400">
                            <MessageCircle />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} TallerPro. Todos los derechos reservados.
            </div>
        </footer>
    );
}
