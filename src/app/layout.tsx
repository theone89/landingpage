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
import { keywords } from "@/data/keyword";

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
  keywords: keywords.join(", "),
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
    images: ["/og-sfc-all.png"],
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
