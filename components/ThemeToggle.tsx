"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/app/providers/LanguageProvider";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { t } = useLanguage();


    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    // 🔥 Evita completamente el mismatch
    if (!mounted) {
        return (
            <button
                className="p-2 rounded-xl border border-border"
                aria-label="toggle theme"
            >
                <Sun size={18} className="opacity-0" />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl bg-card dark:bg-card hover:bg-border dark:hover:bg-border transition flex items-center gap-1 border border-border"
            aria-label={t?.accessibility?.tema || "toggle theme"}
        >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}
