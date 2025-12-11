// src/data/projects.ts

export interface Project {
    id: number;
    title: string;
    slug: string; // <--- Nuevo campo
    description: string;
    tag: string;
}

// Agregamos los slugs manualmente para que coincidan con tus URLs
const projectsData: Project[] = [
    {
        id: 1,
        title: "Live☆Twin Deck",
        slug: "live-twin-deck", // <--- Slug explícito
        description: "Mi construcción favorita del mazo para torneos locales.",
        tag: "Yu-Gi-Oh!"
    },
    {
        id: 2,
        title: "Recetario Personal",
        slug: "recetario-personal",
        description: "Colección de recetas como el arroz blanco perfecto.",
        tag: "Cocina"
    },
    {
        id: 3,
        title: "Dashboard Next.js",
        slug: "dashboard-next-js",
        description: "El proyecto que estoy aprendiendo a construir ahora mismo.",
        tag: "Programación"
    },
    {
        id: 4,
        title: "Rutina de Gimnasio",
        slug: "rutina-de-gimnasio",
        description: "Seguimiento de mis ejercicios y dieta semanal.",
        tag: "Salud"
    },
];

export async function getProjects() {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simula latencia
    return projectsData;
}

// --- NUEVA FUNCIÓN ---
export async function getProjectBySlug(slug: string) {
    // Simular la latencia también aquí
    await new Promise(resolve => setTimeout(resolve, 500));

    // Buscar en el array el proyecto cuyo slug coincida
    const project = projectsData.find(p => p.slug === slug);

    return project;
}