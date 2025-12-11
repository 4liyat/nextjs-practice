interface ProjectPageProps {
    // En Next.js 15+, params es una Promesa que debe esperarse
    params: Promise<{
        slug: string;
    }>;
}

// El componente debe ser async para poder esperar (await) los params
export default async function ProjectPage({ params }: ProjectPageProps) {
    // Esperamos a que se resuelva la promesa de params
    const resolvedParams = await params;
    const projectSlug = resolvedParams.slug;

    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold text-red-600 mb-4">
                Detalle del Proyecto
            </h1>
            <p className="text-xl">
                Estás viendo la página dinámica para:
                <span className="font-mono bg-gray-200 p-1 rounded ml-2 text-gray-900">
                    {projectSlug}
                </span>
            </p>

            <div className="mt-6 border-l-4 border-red-400 pl-4 py-2 bg-red-50">
                <p>
                    En una aplicación real, usaríamos este **slug** para buscar todos los detalles
                    de este proyecto en la base de datos y mostrarlos aquí.
                </p>
            </div>
        </div>
    );
}