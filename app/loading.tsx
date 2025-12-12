export default function Loading() {
    return (
        <div className="p-10 container mx-auto max-w-4xl">
            {/* Contenedor con animación de pulso para todo */}
            <div className="animate-pulse space-y-8">

                {/* 1. Simulación del Título (Header) */}
                <div className="space-y-3">
                    {/* Una barra gruesa para el título principal */}
                    <div className="h-10 bg-gray-200 rounded w-1/3"></div>
                    {/* Una barra más delgada para subtítulos o breadcrumbs */}
                    <div className="h-4 bg-gray-200 rounded w-1/6"></div>
                </div>

                {/* 2. Simulación de una "Hero Image" o Bloque destacado */}
                {/* Esto funciona bien si hay tarjetas O si hay una imagen de portada */}
                <div className="h-48 bg-gray-200 rounded-lg w-full"></div>

                {/* 3. Simulación de contenido de texto (Párrafos) */}
                <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                </div>

            </div>
        </div>
    );
}