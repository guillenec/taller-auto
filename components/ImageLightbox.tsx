"use client";

import { useEffect } from "react";
import Image from "next/image";

interface Props {
    src: string;
    alt: string;
    onClose: () => void;
}

export default function ImageLightbox({ src, alt, onClose }: Props) {
    // Cerrar con ESC
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [onClose]);

    return (
        <div
            className="
        fixed inset-0 z-50
        bg-black/90 backdrop-blur-sm
        flex items-center justify-center
        animate-in fade-in
      "
            onClick={onClose}
        >
            {/* Imagen */}
            <div
                className="relative w-[95vw] h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority
                    className="object-contain rounded-xl"
                />
            </div>

            {/* Botón cerrar */}
            <button
                onClick={onClose}
                aria-label="Cerrar imagen"
                className="
          absolute top-5 right-5
          text-white text-3xl
          hover:opacity-70 transition
        "
            >
                ✕
            </button>
        </div>
    );
}
