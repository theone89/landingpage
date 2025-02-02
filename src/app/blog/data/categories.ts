import { Category } from "../types/category";

export const categories: Category[] = [
  {
    name: "React",
    slug: "react",
    subCategories: [
      { name: "Fundamentos", slug: "fundamentos" },
      { name: "Hooks", slug: "hooks" },
      { name: "Rendimiento", slug: "rendimiento" },
    ],
  },
  {
    name: "Next.js",
    slug: "nextjs",
    subCategories: [
      { name: "Rutas", slug: "rutas" },
      { name: "API", slug: "api" },
      { name: "Optimización", slug: "optimizacion" },
    ],
  },
  {
    name: "Tailwind CSS",
    slug: "tailwind",
    subCategories: [
      { name: "Utilidades", slug: "utilidades" },
      { name: "Personalización", slug: "personalizacion" },
    ],
  },
  {
    name: "TypeScript",
    slug: "typescript",
    subCategories: [
      { name: "Básico", slug: "basico" },
      { name: "Avanzado", slug: "avanzado" },
    ],
  },
  {
    name: "GraphQL",
    slug: "graphql",
    subCategories: [
      { name: "Consultas", slug: "consultas" },
      { name: "Mutaciones", slug: "mutaciones" },
    ],
  },
  {
    name: "Testing",
    slug: "testing",
    subCategories: [
      { name: "Unit Testing", slug: "unit" },
      { name: "Integration Testing", slug: "integration" },
    ],
  },
  {
    name: "Docker",
    slug: "docker",
    subCategories: [
      { name: "Contenedores", slug: "contenedores" },
      { name: "Docker Compose", slug: "compose" },
    ],
  },
  {
    name: "CI/CD",
    slug: "ci-cd",
    subCategories: [
      { name: "GitHub Actions", slug: "github-actions" },
      { name: "Jenkins", slug: "jenkins" },
    ],
  },
  {
    name: "Seguridad",
    slug: "seguridad",
    subCategories: [
      { name: "JWT", slug: "jwt" },
      { name: "OAuth", slug: "oauth" },
    ],
  },
  {
    name: "Bases de Datos",
    slug: "bases-de-datos",
    subCategories: [
      { name: "SQL", slug: "sql" },
      { name: "NoSQL", slug: "nosql" },
    ],
  },
];
