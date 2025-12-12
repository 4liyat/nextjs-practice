"use client";

import { useState } from "react";
import Link from 'next/link';
import Image from "next/image"; // <--- Importante

interface CardProps {
    title: string;
    description: string;
    tag: string;
    slug: string;
    imageUrl: string; // <--- Agregamos esto
}

export default function Card({ title, description, tag, slug, imageUrl }: CardProps) {
    const [likes, setLikes] = useState(0);

    return (
        <div className="border border-gray-200 rounded-lg shadow hover:shadow-lg transition bg-white flex flex-col h-full overflow-hidden">

            {/* --- ZONA DE IMAGEN --- */}
            <div className="relative w-full h-48">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill // "fill" hace que la imagen llene el contenedor padre (h-48)
                    className="object-cover" // Recorta la imagen para que no se deforme
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimización de carga según pantalla
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded inline-block">
                        {tag}
                    </span>
                    <h3 className="text-xl font-bold mt-2 text-gray-900">{title}</h3>
                    <p className="mt-2 text-gray-600">
                        {description}
                    </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t pt-4 border-gray-100">
                    <Link
                        href={`/proyectos/${slug}`}
                        className="text-blue-600 font-medium text-sm hover:text-blue-800"
                    >
                        Ver más &rarr;
                    </Link>

                    <button
                        onClick={() => setLikes(likes + 1)}
                        className="flex items-center gap-1 text-gray-500 transition hover:text-red-500"
                    >
                        <span>♥</span> {likes}
                    </button>
                </div>
            </div>
        </div>
    );
}