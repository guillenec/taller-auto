"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { Mail, MapPin, Phone, MessageCircle, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/app/providers/LanguageProvider";

export default function ContactoPage() {
    const { t } = useLanguage();

    return (
        <section className="pt-28 pb-20 px-6 max-w-7xl mx-auto bg-background text-foreground">

            {/* TÍTULO */}
            <AnimatedSection className="mb-20" delay={0.05}>
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold">
                        {t?.contact?.title}{" "}
                        <span className="bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))] text-transparent bg-clip-text">
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

                        <form className="grid gap-5">
                            <input
                                className="p-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-(--gradient-start) transition"
                                placeholder={t?.contact?.form_name}
                            />
                            <input
                                className="p-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-(--gradient-start) transition"
                                placeholder={t?.contact?.form_email}
                                type="email"
                            />
                            <textarea
                                rows={5}
                                className="p-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-(--gradient-start) transition"
                                placeholder={t?.contact?.form_message}
                            ></textarea>

                            <button
                                className="px-6 py-3 rounded-xl text-white font-semibold shadow-lg transition
                                bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))]
                                hover:opacity-90"
                            >
                                {t?.contact?.form_button}
                            </button>
                        </form>

                        {/* OTROS CONTACTOS */}
                        <div className="mt-10">
                            <h3 className="font-semibold text-lg mb-4">{t?.contact?.other_contact_title}</h3>

                            <div className="flex flex-col gap-3 text-muted-foreground">
                                <p className="flex items-center gap-2 hover:text-(--gradient-start) transition">
                                    <Phone className="text-(--gradient-start)" /> {t?.contact?.phone}
                                </p>
                                <p className="flex items-center gap-2 hover:text-(--gradient-start) transition">
                                    <Mail className="text-(--gradient-start)" /> {t?.contact?.email}
                                </p>
                            </div>

                            {/* REDES */}
                            <div className="mt-6 flex gap-5 text-2xl text-muted-foreground">
                                <a className="hover:text-(--gradient-start) transition">
                                    <Facebook />
                                </a>
                                <a className="hover:text-(--gradient-end) transition">
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
                            className="w-full h-80 rounded-3xl shadow-xl border border-border dark:invert"
                            loading="lazy"
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

            {/* WHATSAPP FLOTANTE */}
            <a
                href="https://wa.me/5491122233344"
                className="fixed bottom-6 right-6 p-4 rounded-full shadow-xl text-white hover:scale-105 transition transform
                           bg-linear-to-r from-green-500 to-green-500  dark:from-green-400 dark:to-green-300"
            >
                <MessageCircle size={28} />
            </a>

        </section>
    );
}
