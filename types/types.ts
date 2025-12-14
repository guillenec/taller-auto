export type ProcesoItem = {
    titulo: string;
    desc: string;
};

export type Testimonio = {
    nombre: string;
    texto: string;
};

export type NavKey = "home" | "services" | "gallery" | "about" | "contact";

export type TranslationSchema = {
    nav: Record<NavKey, string>;
    home: {
        hero_title?: string;
        hero_gradiente?: string;
        hero_sub?: string;
        hero_button_contact1?: string;
        hero_button_galery?: string;
        titulo2?: string;
        titulo2_gradiente?: string;
        subtitulo2?: string;
        card1_titulo?: string;
        card1_subtitulo?: string;
        card2_titulo?: string;
        card2_subtitulo?: string;
        card3_titulo?: string;
        card3_subtitulo?: string;
        proceso_titulo?: string;
        proceso_sub?: string;
        proceso_items: ProcesoItem[];
        testimonios_titulo?: string;
        testimonios_sub?: string;
        testimonios: Testimonio[];
        cta_titulo?: string;
        cta_sub?: string;
        cta_btn1?: string;
        cta_btn2?: string;
    };
    services: {
        title: string;
        title_gradient: string;
        card_golpes_title: string;
        card_golpes_desc: string;
        card_pintura_title: string;
        card_pintura_desc: string;
        card_pulido_title: string;
        card_pulido_desc: string;
        cta_title: string
        cta_sub: string
    };
    gallery?: {
        title: string;
        title_gradient: string;
        subtitle: string;
        filters: {
            all: string;
            golpes: string;
            pintura: string;
            pulido: string;
            restauracion: string;
        };
        pagination_prev: string;
        pagination_next: string;
        pagination_page: string;
        cta_title: string;
        cta_sub: string;
    };
    about?: {
        title: string;
        title_gradient: string;
        subtitle: string;
        history_title: string;
        history_p1: string;
        history_p2: string;
        values_title: string;
        value_confianza_title: string;
        value_confianza_desc: string;
        value_calidad_title: string;
        value_calidad_desc: string;
        value_atencion_title: string;
        value_atencion_desc: string;
        team_title: string;
        cta_title: string;
        cta_sub: string;
    };
    contact?: {
        title: string;
        title_gradient: string;
        subtitle: string;
        form_title: string;
        form_name: string;
        form_email: string;
        form_message: string;
        form_button: string;
        other_contact_title: string;
        phone: string;
        email: string;
        location_title: string;
        address: string;
        hours_title: string;
        hours_week: string;
        hours_sat: string;
        cta_title: string;
        cta_sub: string;
        load_msj: string;
        form_success: string;
        form_error: string;
        form_name_error: string;
        form_email_error: string;
        form_message_error: string;
    };
    footer?: {
        brand_text: string;
        nav_title: string;
        nav_home: string;
        nav_services: string;
        nav_gallery: string;
        nav_about: string;
        nav_contact: string;
        contact_title: string;
        contact_address: string;
        contact_phone: string;
        contact_email: string;
        rights: string;
    };
    accessibility: { // <-- ¡CLAVE NUEVA AGREGADA!
        toggleLanguage: string;
        openMenu: string;
        closeMenu: string;
        tema: string;
    }
};