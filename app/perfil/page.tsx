import Card from "@/components/Card";
import { getProjects } from "@/data/projects"; // 1. Importamos la función

// 2. La función de página debe ser ASÍNCRONA
export default async function PerfilPage() {
    const projects = await getProjects();

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold text-purple-600 mb-6">Mis Proyectos (SSR)</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {projects.map((project) => (
                    <Card
                        key={project.id}
                        title={project.title}
                        slug={project.slug} // <--- ¡Aquí enviamos el dato correcto!
                        description={project.description}
                        tag={project.tag}
                        imageUrl={project.imageUrl} // <--- Nuevo prop
                    />
                ))}

            </div>
        </div>
    );
}