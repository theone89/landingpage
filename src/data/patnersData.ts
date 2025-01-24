export interface Partner {
  name: string;
  logo: string; // URL del logotipo
  website: string; // URL del sitio web del partner
  slogan?: string; // Slogan del partner (opcional)
}

export const partners: Partner[] = [
  {
    name: "WonderFullTime",
    logo: "https://wonderfulltime.com/_next/image?url=%2Fassets%2Fwft%2Flogo%20X%20en%20png.webp&w=384&q=75",
    website: "https://wonderfulltime.com", // Sitio web de WonderFullTime
    slogan: "“Viaja con nosotros, crea recuerdos para siempre.”", // Slogan de WonderFullTime
  },
  {
    name: "NP-AREAS",
    logo: "/assets/images/np-arias.jpg",
    website: "https://np-areas.com", // Sitio web de NP-AREAS
    slogan: "“Aesthetic clinic”", // Slogan de NP-AREAS
  },
  {
    name: "La Rosa",
    logo: "/assets/images/larosa.jpg",
    website: "#", // Sitio web de Empresa Asociada 3
    slogan: "E-comerce Food Store", // Slogan de Empresa Asociada 3
  },
];
