import Card from "@/components/Card";

export default function PerfilPage() {
    // 1. Aquí simulamos los datos (como si vinieran de una Base de Datos)
    const projects = [
        {
            id: 1,
            title: "Live☆Twin Deck",
            description: "Mi construcción favorita del mazo para torneos locales.",
            tag: "Yu-Gi-Oh!",
        },
        {
            id: 2,
            title: "Recetario Personal",
            description: "Colección de recetas como el arroz blanco perfecto.",
            tag: "Cocina",
        },
        {
            id: 3,
            title: "Dashboard Next.js",
            description: "El proyecto que estoy aprendiendo a construir ahora mismo.",
            tag: "Programación",
        },
        {
            id: 4,
            title: "Rutina de Gimnasio",
            description: "Seguimiento de mis ejercicios y dieta semanal.",
            tag: "Salud",
        },
        {
            id: 5,
            title: "Aprendizaje",
            description: "Codeo y aprendizaje de nuevas tecnologías.",
            tag: "Programación",
        },
    ];

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold text-purple-600 mb-6">Mis Proyectos</h1>

            {/* 2. Aquí usamos .map() para "convertir" datos en componentes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {projects.map((project) => (
                    <Card
                        key={project.id} // IMPORTANTE: Identificador único
                        title={project.title}
                        description={project.description}
                        tag={project.tag}
                    />
                ))}

            </div>
        </div>
    );
}