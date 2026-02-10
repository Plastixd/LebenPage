"use client";

import { useState } from 'react';
import Link from 'next/link';


export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-black">
            Leben
          </div>

          {/* Enlaces versión Escritorio (Ocultos en móvil) */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-600 hover:text-blue-500">Inicio</Link>
            <Link href="/cumpleanos" className="text-gray-600 hover:text-blue-500">Cumpleaños</Link>

          </div>

          {/* Botón Hamburguesa (Solo visible en móvil) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 focus:outline-none"
            >
              {/* Icono dinámico: cambia si está abierto o cerrado */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL (Se muestra solo si isOpen es true) */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white border-t border-gray-100`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">Inicio</Link>
          <Link href="/cumpleanos" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">Cumpleaños</Link>
        </div>
      </div>
    </nav>
  );
}