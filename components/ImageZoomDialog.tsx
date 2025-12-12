"use client";

import {
    Dialog,
    DialogContent,
    DialogOverlay,
    DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { VisuallyHidden } from "./visually-hidden";

interface Props {
    open: boolean;
    src: string;
    alt: string;
    onOpenChange: (open: boolean) => void;
}

export default function ImageZoomDialog({ open, src, alt, onOpenChange }: Props) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogOverlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40" />

            <DialogContent
                className="
          fixed top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          w-[95vw] max-w-[1400px]
          h-[90vh] max-h-[90vh]
          p-0 border-0 bg-transparent shadow-none 
          flex items-center justify-center 
          z-50
        "
            >
                {/* Requisito de accesibilidad */}
                <VisuallyHidden>
                    <DialogTitle>{alt || "Imagen ampliada"}</DialogTitle>
                </VisuallyHidden>

                <div className="relative w-full h-full">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        priority
                        className="object-contain rounded-xl"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}
