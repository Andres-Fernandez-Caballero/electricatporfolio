interface Dictionary {
    [key: string]: {
        [key: string]: string
    }
}

const dictionaries: Dictionary = {
    en: {
        'projects.hidra.title': 'Hidrasport',
        'projects.hidra.description': `HIDRA SPORT is a modern and fast e-commerce platform where users can easily browse and purchase sportswear. I implemented a dynamic shopping cart, product filters for easy navigation, and variant selection (colors and sizes). I also integrated payments with MercadoPago and optimized the mobile experience for smooth navigation.

The goal was to create a visually appealing, intuitive, and efficient store focused on the best shopping experience. 🚀`,
        'projects.cap.title': ' CRM for the Argentine Skating Confederation',
        'projects.cap.description': `This project serves as the central hub for the Argentine Skating Federation, streamlining the management of clubs, skaters, and competitions nationwide. I developed a custom CRM that automates membership fees, registrations, and other key processes, integrating MercadoPago for fast and secure payments.

The platform is designed to be user-friendly, allowing clubs to manage their data, register for events, and handle payments seamlessly. With a modern, responsive design, it ensures a smooth experience for all users.`,

        'projects.turnera.title': 'Reservation App',
        'projects.turnera.description': `I developed a mobile app that allows skaters and clubs to easily book skating rink sessions with the Argentine Skating Confederation. It’s powered by a robust Laravel backend, handling availability, notifications, and automated payments seamlessly.

The system takes care of everything—from booking to confirmation—preventing double reservations and making rink management effortless. With MercadoPago integration, payments are processed efficiently, ensuring a smooth, intuitive, and hassle-free user experience.`,
        'welcome': 'Welcome',
        'download': 'Download',
        'about': 'About',
        'bio': `THERE IS NOTHING I CAN'T DO" is my life philosophy. I am a Systems Analyst, Electronics Technician, and passionate Educator. My experience ranges from custom system development to robotics and home automation. I always seek projects that push me out of my comfort zone. With a strong foundation in teaching and development, my projects stand out for their quality, efficiency, and scalability to meet my clients' needs. I am committed to continuous learning, which allows me to stay up to date in an ever-evolving industry.`,
        'contact': 'Contact',
        'description': 'This is my portfolio website',
    },
    es: {
        'projects.hidra.title': 'Hidrasport',
        'projects.hidra.description': `HIDRA SPORT es un e-commerce moderno y rápido donde los usuarios pueden explorar y comprar ropa deportiva de forma sencilla. Implementé un carrito de compras dinámico, filtros para encontrar productos fácilmente y selección de variantes (colores y tallas). También integré pagos con MercadoPago y optimicé la experiencia en móviles para que la navegación sea fluida.

El objetivo fue crear una tienda visual, intuitiva y eficiente, enfocada en la mejor experiencia de compra.`,
        'projects.cap.title': 'CRM para la Confederacion Argentina de Patin',
        'projects.cap.description': `Este proyecto es el centro de operaciones para la Confederación Argentina de Patinaje, facilitando la gestión de clubes, patinadores y competencias a nivel nacional. Desarrollé un CRM a medida que automatiza pagos de membresías, inscripciones y otras gestiones clave, integrando MercadoPago para procesar todo de forma rápida y segura.

Además, optimicé la plataforma para que sea fácil de usar, permitiendo a los clubes administrar su información, realizar inscripciones y gestionar pagos sin fricción. Todo con un diseño moderno, responsive y enfocado en la mejor experiencia para los usuarios.`,

        'projects.turnera.title': "Aplicacion de turnos",
        'projects.turnera.description': `Desarrollé una app móvil que permite a patinadores y clubes reservar turnos en pistas de la Confederación Argentina de Patinaje de manera rápida y sencilla. Todo está respaldado por un robusto backend en Laravel, que gestiona disponibilidad, notificaciones y pagos de forma automatizada.

El sistema se encarga de todo: desde la reserva hasta la confirmación, evitando dobles turnos y facilitando la organización de las pistas. La integración con MercadoPago permite gestionar pagos de manera eficiente, mientras que la experiencia de usuario es ágil, intuitiva y sin complicaciones.`,


        'welcome': 'Bienvenido',
        'about': 'Sobre mí',
        'download': 'Descargar',
        'bio': `“NO HAY NADA QUE NO PUEDA HACER” es mi filosofia de vida. Soy Analista de Sistemas, Técnico Electrónico y Docente apasionado. Mi experiencia abarca desde el desarrollo de sistemas personalizados hasta robotica y domotica, Siempre busco proyectos en los que pueda salirme de la zona de confort.

Con una sólida base en enseñanza y desarrollo, mis proyectos destacan por su calidad, eficiencia y escalabilidad a las necesidades de mis clientes. Estoy comprometido con el aprendizaje continuo, lo que me permite mantenerme actualizado en un sector en constante evolución.`,
        'contact': 'Contacto',
        'description': 'Este es mi sitio web de portafolio',
    },
}

export const getDictionary = async (locale: string) => {
    return dictionaries[locale]
}

