import { Mail, Phone } from "lucide-react"


const Contacts = () => {
    const mail = 'guillermoneculqueo@gmail.com'
    const watsapp = '2944396887'


    const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const subject = encodeURIComponent('Interesado en una asesoría personalizada')
        const body = encodeURIComponent('Hola,\n\nMe gustaría recibir más información.\n\n¡Gracias!')
        window.open(`mailto:${mail}?subject=${subject}&body=${body}`, '_blank')
    }
    const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const message = encodeURIComponent('Hola, Me gustaría recibir más información. ¡Gracias!')
        window.open(`https://wa.me/${watsapp}?text=${message}`, '_blank')
    }

    return (
        <div className="flex flex-col gap-3 text-muted-foreground" >
            <a
                title="enviar whatsapp"
                aria-label="whatsapp"
                onClick={handleEmailClick}
                className="flex items-center gap-2 hover:text-(--gradient-start) transition cursor-pointer">
                <Phone className="text-(--gradient-start)" /> {mail}
            </a>
            <a
                title="enviar mail"
                aria-label="mail"
                onClick={handlePhoneClick}
                className="flex items-center gap-2 hover:text-(--gradient-start) transition cursor-pointer">
                <Mail className="text-(--gradient-start)" /> {watsapp}
            </a>
        </div >
    )
}

export default Contacts