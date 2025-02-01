import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Chatbot from "@/components/Chatbot";
import Background from "@/components/Background";
import ClientLoadingWrapper from "@/components/ClientLoadingWrapper";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  alternates: {
    canonical: "https://strongfreecode.com",
  },
  title: "StrongFreeCode | Desarrollo, Programación, Seo y Asistencia IT",
  icons: {
    icon: "/SFC logo.png",
  },
  publisher: "StronFreeCode",
  authors: [
    {
      name: "Franklin Campos Alvares",
      url: "https://www.linkedin.com/in/franklin-campos-alvarez-14b874140/",
    },
  ],
  description:
    "Innovación y Creatividad en Cada Click En Strong Free Code, nos dedicamos a transformar tus ideas en realidad digital. Asistencia tecnica y assesoria online ,publicidad y marketing digital",
  keywords: [
    "Innovación",
    "Creatividad",
    "Strong Free Code",
    "Transformación de ideas",
    "Realidad digital",
    "Asistencia técnica",
    "Asesoría online",
    "Publicidad",
    "Marketing",
    "Desarrollo web",
    "Soluciones digitales",
    "Estrategias de marketing digital",
    "Servicios de TI",
    "Consultoría tecnológica",
    "Tecnología emergente",
    "Innovación digital",
    "Diseño web",
    "Desarrollo de software",
    "Programación",
    "Codificación",
    "Aplicaciones web",
    "Desarrollo de aplicaciones",
    "Servicios de programación",
    "Tecnología de la información",
    "Servicios de red",
    "Seguridad en línea",
    "Protección",
    "Optimización de motores de búsqueda",
    "Analítica web",
    "Redes sociales",
    "E-commerce",
    "Negocios digitales",
    "Startups",
    "Emprendimiento",
    "Inversión tecnológica",
    "Financiación de startups",
    "Innovación disruptiva",
    "Tecnología blockchain",
    "Inteligencia artificial",
    "Machine learning",
    "Deep learning",
    "Big data",
    "Data science",
    "Internet de las cosas",
    "Robótica",
    "Realidad virtual",
    "Realidad aumentada",
    "Ciberseguridad",
    "Privacidad de datos",
    "GDPR",
    "Cloud computing",
    "SaaS",
    "PaaS",
    "IaaS",
    "Desarrollo de juegos",
    "Animación digital",
    "Diseño UX",
    "Diseño UI",
    "Diseño de interacción",
    "Diseño de experiencia de usuario",
    "Pruebas A/B",
    "Marketing de contenidos",
    "Inbound marketing",
    "SEO local",
    "Marketing de afiliados",
    "Publicidad en línea",
    "SEM",
    "Optimización de la tasa de conversión",
    "Retorno de la inversión",
    "KPIs",
    "Métricas de vanidad",
    "Funnel de ventas",
    "Embudo de conversión",
    "Lead generation",
    "Growth hacking",
    "Viralidad",
    "Redes de afiliados",
    "Monetización",
    "Comercio electrónico",
    "Tienda online",
    "Pagos digitales",
    "Pasarelas de pago",
    "Seguridad de transacciones",
    "Fraude online",
    "Phishing",
    "Malware",
    "Ransomware",
    "Ataque DDoS",
    "Criptografía",
    "Encriptación",
    "Certificados SSL",
    "Accesibilidad web",
    "Diseño inclusivo",
    "Diseño responsivo",
    "Mobile first",
    "Desarrollo de apps",
    "Apps nativas",
    "Apps híbridas",
    "Web progresiva",
    "PWA",
    "AMP",
    "Arquitectura de la información",
    "Wireframing",
    "Prototipado",
  ],
  openGraph: {
    title: "StrongFreeCode | Desarrollo, Programación, Seo y Asistencia IT",
    description:
      "Innovación y Creatividad en Cada Click En Strong Free Code, nos dedicamos a transformar tus ideas en realidad digital. Asistencia tecnica y assesoria online ,publicidad y marketing digital",
    url: "https://www.strongfreecode.com", // Reemplaza con la URL de tu sitio
    siteName: "StrongFreeCode",
    images: [
      {
        url: "/og-sfc-all.png", // Reemplaza con la URL de tu imagen OG
        width: 1200,
        height: 630,
        alt: "StrongFreeCode - Innovación y Creatividad en Cada Click",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StrongFreeCode | Desarrollo, Programación, Seo y Asistencia IT",
    description:
      "Innovación y Creatividad en Cada Click En Strong Free Code, nos dedicamos a transformar tus ideas en realidad digital. Asistencia tecnica y assesoria online ,publicidad y marketing digital",
    images: ["/og-sfc-all.png"], // Reemplaza con la URL de tu imagen OG
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Head>
        <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script>
        <meta
          name="impact-site-verification"
          content="919ac626-e0ee-413f-b846-30aec8496a5f"
        />
      </Head>
      <GoogleTagManager gtmId="GTM-NQPTN3NZ" />
      <body className={`${inter.className} `}>
        <ClientLoadingWrapper>
          <SessionProvider>
            <Background />
            <Navbar />
            <Chatbot />
            {children}
            <ScrollToTop />
            <Footer />
          </SessionProvider>
        </ClientLoadingWrapper>
      </body>
    </html>
  );
}
