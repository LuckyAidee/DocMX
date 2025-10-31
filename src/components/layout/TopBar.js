import React, { useState } from 'react';
import { Wallet, MessageSquare, ChevronDown } from 'lucide-react';

export default function TopBar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  // Datos del usuario
  const userName = "Usuario Demo";
  const userBalance = 150;

  // Iniciales del usuario
  const getInitials = (name) => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const initials = getInitials(userName);

  return (
    <header className="bg-white border-b border-gray-100 h-16 flex items-center justify-between px-8 fixed top-0 right-0 left-16 z-40 shadow-sm backdrop-blur-sm bg-white/95">
      
      {/* Lado Izquierdo - Perfil de Usuario */}
      <div className="flex items-center gap-3">
        
        {/* Avatar con diseño refinado */}
        <div className="relative group">
          <div className="w-10 h-10 rounded-full border-2 border-gray-700 bg-white flex items-center justify-center shadow-sm transition-all duration-300 group-hover:border-teal-500 group-hover:shadow-md">
            <span className="text-gray-700 text-sm font-bold select-none">
              {initials}
            </span>
          </div>
          {/* Indicador de estado online */}
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
        </div>

        {/* Nombre y Dropdown */}
        <button
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 group cursor-pointer"
        >
          <span className="text-gray-800 text-base font-semibold">
            {userName}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform duration-300 group-hover:text-gray-700 ${
              isUserMenuOpen ? 'rotate-180' : ''
            }`}
            strokeWidth={2.5}
          />
        </button>
      </div>

      {/* Lado Derecho - Acciones y Balance */}
      <div className="flex items-center gap-6">
        
        {/* Separador visual sutil */}
        <div className="h-8 w-px bg-gray-200"></div>

        {/* Botón de Feedback */}
        <button
          className="relative p-2.5 hover:bg-gray-50 rounded-xl transition-all duration-200 group"
          title="Opiniones y comentarios"
        >
          <MessageSquare 
            className="w-5 h-5 text-gray-500 group-hover:text-teal-600 transition-colors duration-200" 
            strokeWidth={2}
          />
          {/* Badge de notificaciones (opcional) */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Separador visual sutil */}
        <div className="h-8 w-px bg-gray-200"></div>

        {/* Display de Balance mejorado */}
        <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="p-2 bg-teal-50 rounded-lg">
            <Wallet 
              className="w-5 h-5 text-teal-600" 
              strokeWidth={2}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-medium">Balance</span>
            <span className="text-base font-bold text-gray-900">
              ${userBalance.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}


