"use client";
import { Globe, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { NavKey } from "@/types/types";
import { useLanguage } from "@/app/providers/LanguageProvider";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const { lang, toggleLang, t } = useLanguage();

    const links: { href: string, key: NavKey }[] = [
        { href: "/", key: "home" },
        { href: "/servicios", key: "services" },
        { href: "/galeria", key: "gallery" },
        { href: "/sobre-nosotros", key: "about" },
        { href: "/contacto", key: "contact" },
    ];

    const isActive = (href: string) =>
        pathname === href
            ? "font-semibold text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))]"
            : "hover:text-blue-600 dark:hover:text-blue-400 transition";

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg 
        bg-background/70 border-b border-border shadow-sm text-foreground h-16" >
            <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
                {/* logo */}
                <Link prefetch={false} href="/" className="text-2xl font-bold text-transparent bg-clip-text 
                    bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))]">
                    TallerPro
                </Link>

                <ul className="hidden md:flex gap-8 font-inter">
                    {
                        links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={isActive(link.href)}
                                    prefetch={false}
                                >
                                    {t?.nav[link.key]}
                                </Link>
                            </li>
                        ))
                    }
                </ul>


                {/* BOTONES */}
                <div className="flex items-center gap-4">

                    {/* SWITCH TEMA */}
                    <ThemeToggle />

                    {/* IDIOMA */}
                    <button onClick={toggleLang}
                        className="p-2 rounded-md bg-card dark:bg-card hover:bg-border dark:hover:bg-border transition flex items-center gap-1 border border-border"
                        aria-label={t?.accessibility?.toggleLanguage || "Cambiar idioma"}
                    >
                        <Globe size={18} />
                        <span className="text-sm font-semibold">{lang.toUpperCase()}</span>
                    </button>

                    <button
                        className="md:hidden"
                        onClick={() => setOpen(!open)}
                        aria-label={open ? t?.accessibility?.closeMenu || "Cerrar menú" : t?.accessibility?.openMenu || "Abrir menú"}
                        aria-expanded={open}
                    >
                        <Menu />
                    </button>
                </div>

            </div>
            {/* mobile menu */}
            {
                open && (
                    <div className="md:hidden bg-background text-foreground border-t border-border shadow-md">
                        <ul className="flex flex-col py-3 px-6 gap-4">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`${isActive(link.href)} py-1`}
                                    onClick={() => setOpen(false)}
                                    prefetch={false}
                                >
                                    {t?.nav[link.key]}
                                </Link>
                            ))}
                        </ul>
                    </div>
                )
            }
        </nav >
    );
}
