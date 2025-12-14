type ContactFormData = {
    nombre: string;
    email: string;
    mensaje: string;
    fecha: string;
};

export async function sendContactForm(
    destinatarioEmail: string,
    formData: ContactFormData
) {
    const response = await fetch(
        `https://formsubmit.co/ajax/${destinatarioEmail}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                ...formData,
                _template: "table",
                _captcha: false,
            }),
        }
    );

    if (!response.ok) {
        throw new Error("Error al enviar el formulario");
    }

    return response.json();
}
