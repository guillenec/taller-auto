"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, MessageCircle, Facebook, Instagram, MailCheck } from "lucide-react";
import { useLanguage } from "@/app/providers/LanguageProvider";
import ScrollSection from "@/components/ScrollSection";
import Contacts from "./components/Contacts";
import Form_contact from "./components/Form_contact";

export default function ContactoPageClient() {
    const { t } = useLanguage();

    return (
        <section className="pt-28 pb-20 px-6 max-w-7xl mx-auto bg-background text-foreground">

            {/* TÍTULO */}
            <AnimatedSection className="mb-20" delay={0.05}>
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold will-change-transform">
                        {t?.contact?.title}{" "}
                        <span className="bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))] text-transparent bg-clip-text ">
                            {t?.contact?.title_gradient}
                        </span>
                    </h1>

                    <p className="text-muted-foreground max-w-2xl mx-auto mt-3">
                        {t?.contact?.subtitle}
                    </p>
                </div>
            </AnimatedSection>

            {/* GRID */}
            <div className="grid md:grid-cols-2 gap-12">

                {/* FORMULARIO */}
                <AnimatedSection delay={0.15}>
                    <div className="card-premium-soft shadow-xl p-8 bg-card border border-border">

                        <h2 className="text-2xl font-semibold mb-6 bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))] text-transparent bg-clip-text">
                            {t?.contact?.form_title}
                        </h2>
                        <Form_contact />

                        {/* OTROS CONTACTOS */}
                        <div className="mt-10">
                            <h3 className="font-semibold text-lg mb-4">{t?.contact?.other_contact_title}</h3>

                            <Contacts />

                            {/* REDES */}
                            <div className="mt-6 flex gap-5 text-2xl text-muted-foreground">
                                <a
                                    title="enviar mail"
                                    aria-label="mail"
                                    className="hover:text-(--gradient-start) transition">
                                    <Facebook />
                                </a>
                                <a
                                    className="hover:text-(--gradient-end) transition">
                                    <Instagram />
                                </a>
                                <a className="hover:text-green-500 transition">
                                    <MessageCircle />
                                </a>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* MAPA + INFO */}
                <AnimatedSection delay={0.2}>
                    <div className="flex flex-col gap-6 ">

                        <iframe
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            sandbox="allow-scripts allow-same-origin allow-popups"
                            className="w-full h-80 rounded-3xl shadow-xl border border-border dark:invert"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.1057703439556!2d-71.2894532242077!3d-41.13221693088229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7c9d50817419%3A0xb0d760fdeb4ac0a4!2sDon%20Bosco%20121!5e0!3m2!1ses!2sar!4v1764998316470!5m2!1ses!2sar"
                        ></iframe>

                        <div className="card-premium-soft shadow-xl p-6 border border-border bg-card">

                            <h3 className="text-xl font-semibold mb-4 bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))] text-transparent bg-clip-text">
                                {t?.contact?.location_title}
                            </h3>

                            <p className="flex items-center gap-2 text-muted-foreground mb-2">
                                <MapPin className="text-(--gradient-start)" />
                                {t?.contact?.address}
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-2 bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))] text-transparent bg-clip-text">
                                {t?.contact?.hours_title}
                            </h3>

                            <p className="text-muted-foreground">{t?.contact?.hours_week}</p>
                            <p className="text-muted-foreground">{t?.contact?.hours_sat}</p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>

            {/* CTA Final */}
            <ScrollSection delay={0.2}>
                <div className="mt-20 p-10 rounded-3xl text-white text-center shadow-2xl
                bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))]">
                    <MailCheck className="mx-auto mb-4 w-12 h-12 opacity-90" />
                    <h2 className="text-3xl font-semibold">{t?.contact?.cta_title}</h2>
                    <p className="mt-2 text-white/90 max-w-xl mx-auto">
                        {t?.contact?.cta_sub}
                    </p>
                </div>
            </ScrollSection>
            {/* WHATSAPP FLOTANTE */}
            <a
                href="https://wa.me/+5492944396887"
                className="fixed bottom-6 right-6 p-4 rounded-full shadow-xl text-white hover:scale-105 transition transform
                           bg-linear-to-r from-green-500 to-green-500  dark:from-green-400 dark:to-green-300"
            >
                <MessageCircle size={28} />
            </a>

        </section>
    );
}
