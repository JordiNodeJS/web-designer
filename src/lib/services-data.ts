import { Service } from '@/types/services';

export const services: Service[] = [
  {
    id: 'landing-page',
    name: 'Landing Page Profesional',
    description:
      'Diseño y desarrollo de una Landing Page optimizada para captar leads, con enfoque en conversión y comunicación clara de la propuesta de valor.',
    price: 450,
    timeframe: '2-3 semanas',
    category: 'web',
    features: [
      'Diseño responsive (móvil, tablet, escritorio)',
      'Hasta 5 secciones con animaciones ligeras',
      'Formulario de contacto anti-spam',
      'Integración con Google Forms/Mailchimp',
      'CMS personalizado (WordPress con Elementor)',
      'SEO básico on-page + Google My Business',
      'Cumplimiento RGPD y accesibilidad básica',
      'Pruebas de performance (PageSpeed >85)',
    ],
    addons: [
      {
        id: 'copywriting',
        name: 'Copywriting',
        description: 'Redacción profesional de contenidos',
        price: 120,
      },
      {
        id: 'bilingual',
        name: 'Versión bilingüe',
        description: 'Traducción y adaptación a segundo idioma',
        price: 15,
        isPercentage: true,
      },
      {
        id: 'crm-integration',
        name: 'Integración CRM',
        description: 'Conexión con CRM personalizado',
        price: 180,
      },
      {
        id: 'ab-testing',
        name: 'A/B Testing',
        description: 'Configuración de tests A/B para optimización',
        price: 150,
      },
      {
        id: 'ai-chatbot',
        name: 'Chatbot IA básico',
        description: 'Chatbot inteligente para atención al cliente',
        price: 200,
      },
    ],
    technologies: ['conversion', 'leads', 'marketing'],
    popular: true,
  },
  {
    id: 'portfolio',
    name: 'Página Personal (Portfolio)',
    description:
      'Web para portfolio, logros y experiencia profesional, potenciando marca personal con elementos interactivos.',
    price: 600,
    timeframe: '3 semanas',
    category: 'web',
    features: [
      'Diseño responsive adaptado a identidad personal',
      'Hasta 4 secciones multimedia',
      'Formulario anti-spam',
      'CMS editable (WordPress)',
      'SEO básico + Analytics',
      'Integración LinkedIn/GitHub',
      'Cumplimiento RGPD',
      'Manual + vídeo formativo',
    ],
    addons: [
      {
        id: 'blog',
        name: 'Blog integrado',
        description: 'Sistema de blog con gestión de contenidos',
        price: 120,
      },
      {
        id: 'additional-language',
        name: 'Idioma adicional',
        description: 'Traducción a idioma adicional',
        price: 15,
        isPercentage: true,
      },
      {
        id: 'interactive-gallery',
        name: 'Galería interactiva',
        description: 'Galería avanzada con efectos y filtros',
        price: 100,
      },
    ],
    technologies: ['portfolio', 'personal', 'profesional'],
  },
  {
    id: 'business',
    name: 'Página de Negocio (PYME/Profesional)',
    description:
      'Web corporativa para PYMES y profesionales, enfocada en conversión y escalabilidad.',
    price: 2000,
    timeframe: '4-5 semanas',
    category: 'web',
    features: [
      'Diseño responsive a medida',
      '5-8 páginas con bloques reutilizables',
      'Formularios de contacto avanzados',
      'CMS (WordPress con bloques Gutenberg/Elementor)',
      'SEO básico + Analytics',
      'Cumplimiento RGPD',
      'Formación 1h + integración Google My Business',
    ],
    addons: [
      {
        id: 'advanced-seo',
        name: 'SEO avanzado',
        description: 'Optimización SEO completa y estrategia de contenidos',
        price: 700,
      },
      {
        id: 'email-marketing',
        name: 'Email marketing integración',
        description: 'Integración con plataformas de email marketing',
        price: 300,
      },
      {
        id: 'multilingual',
        name: 'Multilingüe',
        description: 'Versión en múltiples idiomas',
        price: 18,
        isPercentage: true,
      },
      {
        id: 'annual-maintenance',
        name: 'Mantenimiento anual',
        description: 'Mantenimiento y soporte durante un año',
        price: 500,
      },
    ],
    technologies: ['corporativo', 'pyme', 'negocio'],
    popular: true,
  },
  {
    id: 'ecommerce',
    name: 'Tienda Online / E-commerce',
    description:
      'Plataforma e-commerce para venta de productos físicos/digitales, con optimización para conversiones.',
    price: 2800,
    timeframe: '5-6 semanas',
    category: 'ecommerce',
    features: [
      'Catálogo con categorías, filtros y búsqueda',
      'Carrito y checkout optimizado (Stripe/PayPal)',
      'Gestión de inventario y pedidos',
      'SEO para fichas de producto + Analytics',
      'Cumplimiento legal (ventas online, RGPD)',
      'Integración básica con marketplaces',
    ],
    addons: [
      {
        id: 'advanced-shipping',
        name: 'Módulos de envío avanzado',
        description: 'Integración con múltiples transportistas',
        price: 250,
      },
      {
        id: 'multilingual-ecommerce',
        name: 'Multilingüe',
        description: 'Tienda en múltiples idiomas',
        price: 20,
        isPercentage: true,
      },
      {
        id: 'ai-recommendations',
        name: 'IA para recomendaciones',
        description: 'Sistema de recomendaciones inteligente',
        price: 400,
      },
      {
        id: 'pwa-app',
        name: 'App PWA',
        description: 'Aplicación web progresiva',
        price: 500,
      },
    ],
    technologies: ['ecommerce', 'tienda', 'ventas'],
    popular: true,
  },
  {
    id: 'events',
    name: 'Web para Eventos / Conferencias',
    description:
      'Plataforma para promover eventos, gestionar inscripciones y streaming.',
    price: 1700,
    timeframe: '3-4 semanas',
    category: 'web',
    features: [
      'Programa interactivo con contador regresivo',
      'Registro y pago online (Stripe)',
      'Integración vídeo/streaming (YouTube/Zoom)',
      'Página de ponentes y patrocinadores',
      'Formularios anti-spam',
    ],
    addons: [
      {
        id: 'pwa-events',
        name: 'App asociada PWA',
        description: 'Aplicación web progresiva para el evento',
        price: 600,
      },
      {
        id: 'simultaneous-translation',
        name: 'Traducción simultánea',
        description: 'Sistema de traducción en tiempo real',
        price: 300,
      },
      {
        id: 'crm-events',
        name: 'Integración CRM eventos',
        description: 'CRM especializado en gestión de eventos',
        price: 200,
      },
    ],
    technologies: ['eventos', 'conferencias', 'streaming'],
  },
  {
    id: 'real-estate',
    name: 'Web Inmobiliaria',
    description:
      'Portal de propiedades con herramientas interactivas para búsquedas y visualización.',
    price: 2500,
    timeframe: '5 semanas',
    category: 'web',
    features: [
      'Fichas detalladas con galería',
      'Visitas virtuales básicas',
      'Buscador avanzado + mapa geolocalizado',
      'Integración con portales externos',
      'Área privada para clientes',
      'SEO + Analytics',
    ],
    addons: [
      {
        id: 'real-estate-crm',
        name: 'CRM inmobiliario',
        description: 'Sistema CRM especializado en inmobiliaria',
        price: 400,
      },
      {
        id: 'virtual-tours-360',
        name: 'Visitas 360º avanzadas',
        description: 'Tours virtuales en 360 grados',
        price: 250,
      },
      {
        id: 'ai-matching',
        name: 'IA para matching',
        description: 'Sistema de matching inteligente cliente-propiedad',
        price: 350,
      },
    ],
    technologies: ['inmobiliaria', 'propiedades', 'real-estate'],
  },
  {
    id: 'membership',
    name: 'Web de Membresía / Cursos Online',
    description:
      'Plataforma privada para contenidos premium o formación online, con gestión de usuarios.',
    price: 2500,
    timeframe: '4-6 semanas',
    category: 'app',
    features: [
      'Registro y pagos recurrentes (Stripe)',
      'Módulos de cursos con tests y certificados',
      'Comunidad integrada (foros básicos)',
      'Panel de usuario personalizado',
      'Integración Zoom básica',
    ],
    addons: [
      {
        id: 'gamification',
        name: 'Gamificación',
        description: 'Sistema de puntos, badges y logros',
        price: 300,
      },
      {
        id: 'advanced-zoom',
        name: 'Integración avanzada Zoom/Teams',
        description: 'Integración completa con plataformas de videoconferencia',
        price: 200,
      },
      {
        id: 'mobile-pwa',
        name: 'App móvil PWA',
        description: 'Aplicación web progresiva optimizada para móvil',
        price: 500,
      },
    ],
    technologies: ['membresía', 'cursos', 'educación', 'lms'],
  },
  {
    id: 'microsite',
    name: 'Microsite Promocional',
    description:
      'Mini-web visual para campañas o lanzamientos, optimizada para ads y redes.',
    price: 850,
    timeframe: '1-2 semanas',
    category: 'marketing',
    features: [
      'Diseño impactante con animaciones ligeras',
      '1-3 secciones',
      'CTA único y optimización para Ads',
      'Integración redes sociales básica',
      'Performance alta para carga rápida',
    ],
    addons: [
      {
        id: 'advanced-animations',
        name: 'Animaciones avanzadas',
        description: 'Animaciones complejas y efectos especiales',
        price: 150,
      },
      {
        id: 'background-video',
        name: 'Vídeo de fondo',
        description: 'Vídeo background optimizado',
        price: 100,
      },
      {
        id: 'campaign-ab-testing',
        name: 'A/B testing para campañas',
        description: 'Optimización A/B específica para campañas',
        price: 120,
      },
    ],
    technologies: ['microsite', 'campaña', 'promocional', 'ads'],
  },
  {
    id: 'one-page',
    name: 'Web One Page Interactiva',
    description:
      'Página única con storytelling, efectos de scroll y multimedia para engagement alto.',
    price: 1400,
    timeframe: '2-3 semanas',
    category: 'web',
    features: [
      'Scroll animado y transiciones creativas',
      'Secciones multimedia',
      'CTA estratégicas',
      'Optimización SEO + integración redes',
      'Accesibilidad básica',
    ],
    addons: [
      {
        id: 'advanced-social',
        name: 'Integración redes avanzada',
        description: 'Integración completa con redes sociales',
        price: 150,
      },
      {
        id: 'immersive-audio',
        name: 'Audio inmersivo',
        description: 'Experiencia de audio envolvente',
        price: 100,
      },
      {
        id: 'interactive-ai',
        name: 'Elementos IA interactivos',
        description: 'Componentes interactivos con inteligencia artificial',
        price: 250,
      },
    ],
    technologies: ['one-page', 'interactiva', 'storytelling'],
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServicesByCategory = (
  category: Service['category']
): Service[] => {
  return services.filter(service => service.category === category);
};

export const getPopularServices = (): Service[] => {
  return services.filter(service => service.popular);
};
