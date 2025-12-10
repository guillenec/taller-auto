
type ImagenBase = {
    srcImg: string;
    alt: string;
    name?: string;
    descripcion?: string;
};

type GaleriaImg = ImagenBase & {
    tipo: "golpes" | "pintura" | "pulido" | "restauracion";
};

/** Rutas para la sección de Fondos */
export const FONDOS_IMGS = [
    { srcImg: "/fondo/fondos1.png", alt: "Fondo 1" },
    { srcImg: "/fondo/fondos2.png", alt: "Fondo 2" },
    { srcImg: "/fondo/fondos3.png", alt: "Fondo 3" },
    { srcImg: "/fondo/fondos4.png", alt: "Fondo 4" },
    { srcImg: "/fondo/fondos5.png", alt: "Fondo 5" },
    { srcImg: "/fondo/fondos6.png", alt: "Fondo 6" },
    { srcImg: "/fondo/fondos7.png", alt: "Fondo 7" },
    { srcImg: "/fondo/fondos8.png", alt: "Fondo 8" }
] as const satisfies ImagenBase[];

/** Rutas para la sección de Galería */
export const GALERIA_IMGS = [
    { srcImg: "/golpes/golpes1.png", alt: "Reparación de golpe lateral", tipo: "golpes" },
    { srcImg: "/golpes/golpes2.png", alt: "Corrección de golpe en paragolpes", tipo: "golpes" },
    { srcImg: "/golpes/golpes3.png", alt: "Enderezado y alineación de chasis", tipo: "golpes" },
    { srcImg: "/golpes/golpes4.png", alt: "Reparación de guardabarros golpeado", tipo: "golpes" },
    { srcImg: "/golpes/golpes5.png", alt: "Ajuste de puertas golpeadas", tipo: "golpes" },
    { srcImg: "/golpes/golpes6.png", alt: "Reparación de golpes en lateral trasero", tipo: "golpes" },
    { srcImg: "/golpes/golpes7.png", alt: "Arreglo de golpes en portón", tipo: "golpes" },
    { srcImg: "/golpes/golpes8.png", alt: "Reparación de golpes en zócalo", tipo: "golpes" },

    { srcImg: "/pintura/pintura1.png", alt: "Pintura general color negro", tipo: "pintura" },
    { srcImg: "/pintura/pintura2.png", alt: "Aplicación de base y barniz", tipo: "pintura" },
    { srcImg: "/pintura/pintura3.png", alt: "Pintura de capot y guardabarros", tipo: "pintura" },
    { srcImg: "/pintura/pintura4.png", alt: "Pintura completa azul eléctrico", tipo: "pintura" },
    { srcImg: "/pintura/pintura5.png", alt: "Pintura de panel trasero rojo", tipo: "pintura" },
    { srcImg: "/pintura/pintura6.png", alt: "Repintado completo gris", tipo: "pintura" },
    { srcImg: "/pintura/pintura7.png", alt: "Reparación y pintura de paragolpes", tipo: "pintura" },
    { srcImg: "/pintura/pintura8.png", alt: "Detalle de pintura perlada", tipo: "pintura" },

    { srcImg: "/pulido/pulido1.png", alt: "Pulido de brillo en capot", tipo: "pulido" },
    { srcImg: "/pulido/pulido2.png", alt: "Detalle de pulido espejo", tipo: "pulido" },
    { srcImg: "/pulido/pulido3.png", alt: "Corrección de rayas y microarañazos", tipo: "pulido" },
    { srcImg: "/pulido/pulido4.png", alt: "Pulido con protección cerámica", tipo: "pulido" },
    { srcImg: "/pulido/pulido5.png", alt: "Pulido y sellado de pintura", tipo: "pulido" },
    { srcImg: "/pulido/pulido6.png", alt: "Abrillantado de laterales", tipo: "pulido" },
    { srcImg: "/pulido/pulido7.png", alt: "Pulido de techos y pilares", tipo: "pulido" },
    { srcImg: "/pulido/pulido8.png", alt: "Pulido espejo de carrocería", tipo: "pulido" },

    { srcImg: "/restauracion/restauraciones_1.png", alt: "Restauración completa fase 1", tipo: "restauracion" },
    { srcImg: "/restauracion/restauraciones_2.png", alt: "Restauración completa fase 2", tipo: "restauracion" },
    { srcImg: "/restauracion/restauraciones_3.png", alt: "Restauración completa fase 3", tipo: "restauracion" },
    { srcImg: "/restauracion/restauraciones_4.png", alt: "Restauración completa fase 4", tipo: "restauracion" },
    { srcImg: "/restauracion/restauraciones_5.png", alt: "Restauración completa fase 5", tipo: "restauracion" },
    { srcImg: "/restauracion/restauraciones_6.png", alt: "Restauración completa fase 6", tipo: "restauracion" },
    { srcImg: "/restauracion/restauraciones_7.png", alt: "Restauración completa fase 7", tipo: "restauracion" },
    { srcImg: "/restauracion/restauraciones_8.png", alt: "Restauración completa fase 8", tipo: "restauracion" },
    { srcImg: "/restauracion/restauraciones_9.png", alt: "Restauración completa fase 9", tipo: "restauracion" },
    { srcImg: "/restauracion/restauraciones_10.png", alt: "Restauración completa fase 10", tipo: "restauracion" },
    { srcImg: "/restauracion/restauraciones_11.png", alt: "Restauración completa fase 11", tipo: "restauracion" }
] as const satisfies GaleriaImg[];

/** Rutas para la sección de Personas */
export const PERSONAS = [
    { srcImg: "/persona/persona1.jpg", name: "Carlos Méndez", alt: "Especialista en pintura automotriz" },
    { srcImg: "/persona/persona2.jpg", name: "Mariana Duarte", alt: "Técnico en reparación de golpes" },
    { srcImg: "/persona/persona3.jpg", name: "Julián Rojas", alt: "Equipo de taller trabajando" },
    { srcImg: "/persona/persona4.jpg", name: "Rocío Pérez", alt: "Profesional aplicando pintura" },
    { srcImg: "/persona/persona5.jpg", name: "Esteban Molina", alt: "Detalle de trabajo de pulido" },
    { srcImg: "/persona/persona6.jpg", name: "Luis Herrera", alt: "Recepción y asesoría al cliente" }
] as const satisfies ImagenBase[];

/** Array de 3 objetos para la parte de servicios con la mejor foto */
export const SERVICIOS = [
    {
        srcImg: "/golpes/golpes3.png",
        alt: "Reparación de golpes",
        descripcion: "Corrección de abolladuras, enderezado de paneles y restauración estructural con la máxima precisión.", tipo: "golpes"
    },
    {
        srcImg: "/pintura/pintura5.png",
        alt: "Pintura automotriz",
        descripcion: "Aplicación de pintura de alta calidad con cabina presurizada y barnices de acabado cerámico duradero.",
        tipo: "pintura"
    },
    {
        srcImg: "/pulido/pulido2.png",
        alt: "Pulido y detallado",
        descripcion: "Corrección de imperfecciones, pulido espejo profesional, encerado y protección contra rayos UV.",
        tipo: "pulido"
    }
] as const satisfies (GaleriaImg)[];
