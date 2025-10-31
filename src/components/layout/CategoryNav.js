import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function CategoryNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const categories = [
    { label: 'ACTAS', path: '/actas' },
    { label: 'CSF', path: '/csf' },
    { label: 'CURP', path: '/curp' },
    { label: 'CORRECCIONES', path: '/correcciones' },
    { label: 'EXTRANJEROS', path: '/extranjeros' },
  ];

  // Función para verificar si la categoría está activa basándose en la ruta actual
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="h-14 bg-transparent border-none flex items-center px-10 fixed top-[136px] right-0 left-16 z-20">
      <ul className="flex items-center justify-center gap-12 w-full">
        {categories.map((category, index) => {
          const active = isActive(category.path);
         
          return (
            <li key={index} className="relative">
              <button
                onClick={() => navigate(category.path)}
                className={`
                  relative px-4 py-2 text-sm font-bold uppercase tracking-wider
                  transition-all duration-300 group
                  ${active
                    ? 'text-teal-600'
                    : 'text-gray-600 hover:text-gray-900'
                  }
                `}
              >
                <span className="relative z-10">{category.label}</span>
                {/* Línea animada verde debajo del texto */}
                <div className={`
                  absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 rounded-full
                  transition-all duration-300
                  ${active
                    ? 'w-full bg-teal-600'
                    : 'w-0 bg-gray-400 group-hover:w-3/4'
                  }
                `}></div>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}






