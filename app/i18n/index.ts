import es from "./es.json";
import en from "./en.json";

export const translations = {
    es,
    en,
} as const;

export type Lang = keyof typeof translations;
