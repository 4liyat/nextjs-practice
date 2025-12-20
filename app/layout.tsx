// src/app/layout.tsx

import type { Metadata } from "next";
// 1. IMPORTAMOS LA FUENTE DE GOOGLE
import { Montserrat } from "next/font/google";
import "./globals.css";

// 2. LA CONFIGURAMOS
const montserrat = Montserrat({
    subsets: ["latin"],      // Caracteres latinos
    weight: ["400", "600", "700"], // Cargamos: Normal, Seminegrita, Negrita
    variable: "--font-montserrat", // (Opcional) para usarla con Tailwind
});

export const metadata: Metadata = {
    title: {
        template: "%s | Portafolio de Daniel",
        default: "Portafolio de Daniel",
    },
    description: "Explora mis proyectos...",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            {/* 3. APLICAMOS LA CLASE AL BODY */}
            {/* Esto hace que TODA la app use esta fuente automáticamente */}
            <body className={`${montserrat.className} antialiased bg-gray-50 text-gray-900`}>

                {/* Aquí podrías agregar tu Navbar si quisieras que sea fijo */}
                <nav className="p-4 bg-white shadow-sm flex gap-4 justify-center font-bold">
                    {/* Simple navegación temporal */}
                    <a href="/" className="hover:text-blue-600">Home</a>
                    <a href="/perfil" className="hover:text-blue-600">Perfil</a>
                </nav>

                {children}
            </body>
        </html>
    );
}