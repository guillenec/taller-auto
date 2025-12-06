import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/5491122233344"
            target="_blank"
            className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg text-white hover:bg-green-600 transition"
        >
            <MessageCircle size={28} />
        </a>
    );
}
