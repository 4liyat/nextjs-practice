import { getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next"; // <--- 1. Importar esto

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// 2. FUNCIÓN PARA GENERAR METADATOS DINÁMICOS
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    // Esperamos los parámetros
    const { slug } = await params;

    // Buscamos el proyecto (igual que hacemos abajo)
    const project = await getProjectBySlug(slug);

    // Si no existe, no ponemos título (o ponemos uno de error)
    if (!project) {
        return {
            title: "Proyecto no encontrado",
        };
    }

    // Retornamos el título y la descripción específicos de ESTE proyecto
    return {
        title: project.title,
        description: project.description,
        // Incluso podemos poner la imagen para cuando se comparta en Twitter/WhatsApp
        openGraph: {
            images: [project.imageUrl],
        },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    // 1. Obtener el slug de la URL
    const { slug } = await params;

    // 2. Buscar el proyecto en la "Base de Datos"
    const project = await getProjectBySlug(slug);

    // 3. Validación: Si no existe, mandamos al usuario a la página 404
    if (!project) {
        notFound();
    }

    // 4. Renderizar los datos REALES del proyecto
    return (
        <div className="p-10 container mx-auto">
            {/* Botón para regresar */}
            <Link href="/perfil" className="text-blue-500 hover:underline mb-4 block">
                &larr; Volver al perfil
            </Link>

            <div className="flex items-center gap-4 mb-6">
                <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">
                    {project.tag}
                </span>
                <span className="text-gray-500 text-sm">ID: {project.id}</span>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {project.title}
            </h1>

            <div className="prose lg:prose-xl bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <p className="text-xl text-gray-700 leading-relaxed">
                    {project.description}
                </p>

                <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800">
                    <p className="font-bold">Nota de desarrollo:</p>
                    <p>
                        Esta información ahora viene directamente de <code>src/data/projects.ts</code>
                        basada en el slug <strong>{slug}</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
}