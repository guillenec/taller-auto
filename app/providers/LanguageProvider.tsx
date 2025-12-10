"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "@/app/i18n";
import { TranslationSchema } from "@/types/types";

type Lang = "es" | "en";

type LanguageContextType = {
    lang: Lang;
    t: TranslationSchema;
    toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>("es");

    useEffect(() => {
        const load = () => {
            const saved = localStorage.getItem("lang");
            if (saved === "es" || saved === "en") {
                setLang(saved);
            }
        };

        load();
    }, []);

    const toggleLang = () => {
        const newLang = lang === "es" ? "en" : "es";
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };

    return (
        <LanguageContext.Provider
            value={{ lang, t: translations[lang], toggleLang }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
    return ctx;
}
