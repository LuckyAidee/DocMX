import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="flex items-center py-4 px-1 group" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        
        {/* Icono Home con efecto especial */}
        <li className="flex items-center relative">
          <Link
            to="/dashboard"
            className="relative p-2 text-gray-400 hover:text-teal-600 transition-all duration-300 hover:scale-110 group/home"
            aria-label="Inicio"
          >
            <Home className="w-4 h-4 relative z-10" strokeWidth={2} />
            {/* Círculo de fondo que aparece en hover */}
            <div className="absolute inset-0 bg-teal-50 rounded-full scale-0 group-hover/home:scale-100 transition-transform duration-300 ease-out"></div>
          </Link>
        </li>

        {/* Separador animado después del Home */}
        {items.length > 0 && (
          <li className="px-1">
            <div className="relative">
              <ChevronRight className="w-4 h-4 text-gray-300 transition-all duration-300 group-hover:text-gray-400" strokeWidth={2} />
            </div>
          </li>
        )}

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <React.Fragment key={index}>
              <li className="flex items-center">
                {isLast ? (
                  // Último elemento con diseño especial
                  <div className="relative px-4 py-2 group/last">
                    <span className="text-gray-900 font-semibold text-sm relative z-10">
                      {item.label}
                    </span>
                    {/* Fondo sutil que aparece */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-50/0 via-teal-50/50 to-teal-50/0 rounded-lg opacity-0 group-hover/last:opacity-100 transition-opacity duration-300"></div>
                    {/* Línea inferior decorativa */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent transform scale-x-0 group-hover/last:scale-x-100 transition-transform duration-500 ease-out"></div>
                  </div>
                ) : (
                  // Elementos anteriores con hover efectivo
                  <Link
                    to={item.path}
                    className="relative px-4 py-2 text-gray-500 text-sm font-medium transition-all duration-300 group/link overflow-hidden rounded-lg"
                  >
                    {/* Texto */}
                    <span className="relative z-10 group-hover/link:text-teal-600 transition-colors duration-300">
                      {item.label}
                    </span>
                    
                    {/* Fondo que hace slide desde la izquierda */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-teal-100/50 transform -translate-x-full group-hover/link:translate-x-0 transition-transform duration-300 ease-out rounded-lg"></div>
                    
                    {/* Línea inferior que crece */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Link>
                )}
              </li>

              {/* Separadores entre items */}
              {!isLast && (
                <li className="px-1">
                  <ChevronRight className="w-4 h-4 text-gray-300 transition-all duration-300 hover:text-teal-500" strokeWidth={2} />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}