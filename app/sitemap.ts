import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const routes = [
        "",
        "/servicios",
        "/galeria",
        "/sobre-nosotros",
        "/contacto",
    ];

    const today = new Date();

    return routes.map((route) => {
        const url = `${siteUrl}${route}`;

        return {
            url,
            lastModified: today,
            changeFrequency: "monthly" as const,
            priority: route === "" ? 1.0 : 0.8,
            alternates: {
                languages: {
                    "es-AR": url,
                    "en-US": `${url}?lang=en`,
                },
            },
        };
    });
}
