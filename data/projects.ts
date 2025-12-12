export interface Project {
    id: number;
    title: string;
    description: string;
    tag: string;
    slug: string;
    imageUrl: string; // <--- Nuevo campo
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "Live☆Twin Deck",
        slug: "live-twin-deck",
        description: "Mi construcción favorita del mazo para torneos locales.",
        tag: "Yu-Gi-Oh!",
        imageUrl: "https://images.unsplash.com/photo-1620336655174-32ccc95d0e2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        title: "Recetario Personal",
        slug: "recetario-personal",
        description: "Colección de recetas como el arroz blanco perfecto.",
        tag: "Cocina",
        imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        title: "Dashboard Next.js",
        slug: "dashboard-next-js",
        description: "El proyecto que estoy aprendiendo a construir ahora mismo.",
        tag: "Programación",
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        title: "Rutina de Gimnasio",
        slug: "rutina-de-gimnasio",
        description: "Seguimiento de mis ejercicios y dieta semanal.",
        tag: "Salud",
        imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
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