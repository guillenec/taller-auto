"use client";

import { useState } from "react";
import { useLanguage } from "@/app/providers/LanguageProvider";
import { sendContactForm } from "./sendContactForm";

type Errors = {
    nombre?: string;
    email?: string;
    mensaje?: string;
};

export default function Form_contact() {
    const { t } = useLanguage();

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const [errors, setErrors] = useState<Errors>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);

    const destinatario = process.env.NEXT_PUBLIC_CONTACT_EMAIL

    if (!destinatario) {
        throw new Error(
            "NEXT_PUBLIC_CONTACT_EMAIL no está definida en las variables de entorno"
        );
    }

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const validationErrors: Errors = {};

        if (!nombre || nombre.length < 3) {
            validationErrors.nombre = t?.contact?.form_name_error;
        }

        if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            validationErrors.email = t?.contact?.form_email_error;
        }

        if (!mensaje || mensaje.length < 10) {
            validationErrors.mensaje = t?.contact?.form_message_error;
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setLoading(true);

        try {
            await sendContactForm(destinatario, {
                nombre,
                email,
                mensaje,
                fecha: new Date().toISOString(),
            });

            setSuccess(t?.contact?.form_success ?? "Mensaje enviado con éxito");
            setNombre("");
            setEmail("");
            setMensaje("");
        } catch {
            setSuccess(t?.contact?.form_error ?? "Error al enviar el mensaje");
        } finally {
            setLoading(false);
            setTimeout(() => setSuccess(null), 4000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-5">
            {/* NOMBRE */}
            <div>
                <label htmlFor="nombre" className="sr-only">
                    {t?.contact?.form_name}
                </label>
                <input
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder={t?.contact?.form_name}
                    className="p-3 rounded-xl border border-border w-full"
                />
                {errors.nombre && (
                    <p className="text-red-400 text-sm mt-1">{errors.nombre}</p>
                )}
            </div>

            {/* EMAIL */}
            <div>
                <label htmlFor="email" className="sr-only">
                    {t?.contact?.form_email}
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t?.contact?.form_email}
                    className="p-3 rounded-xl border border-border w-full"
                />
                {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
            </div>

            {/* MENSAJE */}
            <div>
                <label htmlFor="mensaje" className="sr-only">
                    {t?.contact?.form_message}
                </label>
                <textarea
                    id="mensaje"
                    rows={5}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder={t?.contact?.form_message}
                    className="p-3 rounded-xl border border-border w-full"
                />
                {errors.mensaje && (
                    <p className="text-red-400 text-sm mt-1">{errors.mensaje}</p>
                )}
            </div>

            {/* BOTÓN */}
            <button
                disabled={loading}
                className="px-6 py-3 rounded-xl text-white font-semibold
          bg-[linear-gradient(to_right,var(--gradient-start),var(--gradient-end))]
          hover:opacity-90 disabled:opacity-60"
            >
                {loading ? "Enviando..." : t?.contact?.form_button}
            </button>

            {success && (
                <p
                    className="text-center text-sm mt-2"
                    aria-live="polite"
                >{success}</p>
            )}
        </form>
    );
}
