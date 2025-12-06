"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 border-b border-white/20 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
                <h1 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                    TallerPro
                </h1>

                <ul className="hidden md:flex gap-8 font-inter">
                    <li><Link href="/" className="hover:text-blue-600 transition">Inicio</Link></li>
                    <li><Link href="/servicios" className="hover:text-blue-600 transition">Servicios</Link></li>
                    <li><Link href="/galeria" className="hover:text-blue-600 transition">Galería</Link></li>
                    <li><Link href="/sobre-nosotros" className="hover:text-blue-600 transition">Nosotros</Link></li>
                    <li><Link href="/contacto" className="hover:text-blue-600 transition">Contacto</Link></li>
                </ul>

                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    <Menu />
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-white border-t shadow-md">
                    <ul className="flex flex-col py-3 px-6 gap-4">
                        <Link href="/">Inicio</Link>
                        <Link href="/servicios">Servicios</Link>
                        <Link href="/galeria">Galería</Link>
                        <Link href="/sobre-nosotros">Nosotros</Link>
                        <Link href="/contacto">Contacto</Link>
                    </ul>
                </div>
            )}
        </nav>
    );
}
