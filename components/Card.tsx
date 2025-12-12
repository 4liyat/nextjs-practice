"use client";

import { useState } from "react";
import Link from 'next/link';

interface CardProps {
    title: string;
    description: string;
    tag: string;
    slug: string;
}

export default function Card({ title, description, tag, slug }: CardProps) {
    const [likes, setLikes] = useState(0);

    return (
        <div className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition bg-white flex flex-col h-full">
            <div className="flex-grow">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded inline-block">
                    {tag}
                </span>
                <h3 className="text-xl font-bold mt-2 text-red-900">{title}</h3>
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
    );
}