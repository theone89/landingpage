export type Article = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  timestamp: string;
  lastUpdated: string;
  thumbnail: string;
  image: string;
  readingTime: string;
  category: string;
  subCategory: string;
  tags: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  author: {
    name: string;
    avatar: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  status: "published" | "draft";
  isFeatured: boolean;
  featuredOrder?: number;
  engagement: {
    views: number;
    likes: number;
    commentsCount: number;
  };
};

export const article: Article[] = [
  {
    id: 1,
    title: "Cómo Usar la IA para Crear un Negocio Digital Rentable en 2025",
    slug: "ia-negocio-digital-rentable",
    excerpt:
      "Descubre cómo la inteligencia artificial puede ayudarte a lanzar y escalar un negocio digital de manera eficiente en 2025.",
    content:
      "## Introducción\nLa IA está revolucionando la forma en que emprendemos...",
    date: "Feb 3, 2025",
    timestamp: "2025-02-03T08:30:00Z",
    lastUpdated: "Feb 3, 2025",
    thumbnail: "/assets/images/ia/ia_negocio.png",
    image: "/assets/images/ia/ia_negocio.png",
    readingTime: "6 min",
    category: "emprendimiento",
    subCategory: "tecnología",
    tags: ["IA", "emprendimiento", "negocios digitales"],
    difficulty: "beginner",
    author: {
      name: "Tu Nombre",
      avatar: "/assets/authors/you.jpg",
    },
    seo: {
      metaTitle:
        "Cómo Usar la IA para Crear un Negocio Digital Rentable en 2025",
      metaDescription:
        "Aprende cómo aprovechar la inteligencia artificial para lanzar y escalar un negocio digital con éxito en 2025.",
    },
    status: "published",
    isFeatured: true,
    featuredOrder: 1,
    engagement: {
      views: 2000,
      likes: 120,
      commentsCount: 25,
    },
  },
  {
    id: 2,
    title: "Estrategia O2O: Cómo Convertir Tráfico Online en Ventas Físicas",
    slug: "estrategia-o2o-trafico-ventas",
    excerpt:
      "Aprende a implementar estrategias O2O para transformar visitas digitales en clientes reales en tu tienda física.",
    content:
      "## Introducción\nEl modelo Online to Offline (O2O) se ha convertido en una clave para las marcas...",
    date: "Feb 3, 2025",
    timestamp: "2025-02-03T09:00:00Z",
    lastUpdated: "Feb 3, 2025",
    thumbnail: "/assets/images/o2o/o2o_strategy.png",
    image: "/assets/images/o2o/o2o_strategy.png",
    readingTime: "7 min",
    category: "marketing",
    subCategory: "O2O",
    tags: ["O2O", "marketing digital", "ventas físicas"],
    difficulty: "intermediate",
    author: {
      name: "Tu Nombre",
      avatar: "/assets/authors/you.jpg",
    },
    seo: {
      metaTitle:
        "Estrategia O2O: Cómo Convertir Tráfico Online en Ventas Físicas",
      metaDescription:
        "Descubre cómo usar estrategias O2O para atraer clientes digitales y convertirlos en compradores en tu tienda física.",
    },
    status: "published",
    isFeatured: true,
    featuredOrder: 2,
    engagement: {
      views: 1800,
      likes: 105,
      commentsCount: 20,
    },
  },
  {
    id: 3,
    title: "Marketing Digital 2025: Tendencias Clave para Crecer Online",
    slug: "marketing-digital-2025-tendencias",
    excerpt:
      "Explora las tendencias de marketing digital que dominarán el 2025 y cómo aplicarlas para hacer crecer tu negocio online.",
    content:
      "## Introducción\nEl marketing digital evoluciona rápidamente y en 2025 veremos cambios clave...",
    date: "Feb 3, 2025",
    timestamp: "2025-02-03T10:00:00Z",
    lastUpdated: "Feb 3, 2025",
    thumbnail: "/assets/images/marketing/tendencias_2025.png",
    image: "/assets/images/marketing/tendencias_2025.png",
    readingTime: "8 min",
    category: "marketing",
    subCategory: "tendencias",
    tags: ["SEO", "redes sociales", "publicidad digital"],
    difficulty: "intermediate",
    author: {
      name: "Tu Nombre",
      avatar: "/assets/authors/you.jpg",
    },
    seo: {
      metaTitle: "Marketing Digital 2025: Tendencias Clave para Crecer Online",
      metaDescription:
        "Descubre las estrategias de marketing digital más relevantes en 2025 y cómo aplicarlas en tu negocio.",
    },
    status: "published",
    isFeatured: true,
    featuredOrder: 3,
    engagement: {
      views: 2500,
      likes: 130,
      commentsCount: 30,
    },
  },
  {
    id: 4,
    title: "Growth Hacking: Secretos para Hacer Crecer tu Startup Rápidamente",
    slug: "growth-hacking-startup",
    excerpt:
      "Descubre las mejores estrategias de Growth Hacking para aumentar la adquisición y retención de clientes en tu startup.",
    content:
      "## Introducción\nEl Growth Hacking ha permitido a muchas startups escalar rápidamente con pocos recursos...",
    date: "Feb 3, 2025",
    timestamp: "2025-02-03T11:00:00Z",
    lastUpdated: "Feb 3, 2025",
    thumbnail: "/assets/images/startups/growth_hacking.png",
    image: "/assets/images/startups/growth_hacking.png",
    readingTime: "6 min",
    category: "emprendimiento",
    subCategory: "growth hacking",
    tags: ["growth hacking", "startups", "retención de clientes"],
    difficulty: "advanced",
    author: {
      name: "Tu Nombre",
      avatar: "/assets/authors/you.jpg",
    },
    seo: {
      metaTitle:
        "Growth Hacking: Secretos para Hacer Crecer tu Startup Rápidamente",
      metaDescription:
        "Conoce las estrategias de Growth Hacking más efectivas para escalar tu startup en poco tiempo.",
    },
    status: "published",
    isFeatured: true,
    featuredOrder: 4,
    engagement: {
      views: 2200,
      likes: 115,
      commentsCount: 27,
    },
  },
  {
    id: 5,
    title:
      "Cómo Monetizar tu Contenido Digital y Crear una Fuente de Ingresos Pasiva",
    slug: "monetizar-contenido-digital",
    excerpt:
      "Descubre las mejores estrategias para generar ingresos pasivos con tu contenido digital.",
    content:
      "## Introducción\nEl contenido digital ofrece múltiples oportunidades de monetización...",
    date: "Feb 3, 2025",
    timestamp: "2025-02-03T12:00:00Z",
    lastUpdated: "Feb 3, 2025",
    thumbnail: "/assets/images/monetizacion/contenido_pasivo.png",
    image: "/assets/images/monetizacion/contenido_pasivo.png",
    readingTime: "7 min",
    category: "marketing",
    subCategory: "monetización",
    tags: ["ingresos pasivos", "creadores de contenido", "monetización"],
    difficulty: "beginner",
    author: {
      name: "Tu Nombre",
      avatar: "/assets/authors/you.jpg",
    },
    seo: {
      metaTitle:
        "Cómo Monetizar tu Contenido Digital y Crear una Fuente de Ingresos Pasiva",
      metaDescription:
        "Aprende las estrategias clave para monetizar tu contenido digital y generar ingresos pasivos de manera efectiva.",
    },
    status: "published",
    isFeatured: true,
    featuredOrder: 5,
    engagement: {
      views: 1900,
      likes: 98,
      commentsCount: 22,
    },
  },
];
