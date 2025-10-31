import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Aquí irá la lógica de búsqueda
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-850 to-gray-800 h-[72px] flex items-center justify-between px-8 fixed top-16 right-0 left-16 z-30 border-b border-gray-700/50 shadow-lg">
      
      {/* Lado Izquierdo - Título */}
      <div className="flex items-center gap-3">
        <h2 className="text-white text-[1.6rem] font-semibold tracking-wide ml-6 mb-1">DocMX Marketplace</h2>
      </div>

      {/* Lado Derecho - Barra de búsqueda */}
      <form onSubmit={handleSearch} className="w-[420px]">
        <div className="relative group">
          {/* Icono de búsqueda */}
          <div
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
              isFocused ? 'text-teal-500 scale-110' : 'text-gray-400'
            }`}
          >
            <Search className="w-5 h-5" strokeWidth={2} />
          </div>

          {/* Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Buscar servicios o categorías..."
            className={`w-full bg-white text-gray-800 text-sm pl-12 pr-12 py-3 rounded-xl border-2 transition-all duration-300 placeholder-gray-400
              ${
                isFocused
                  ? 'border-teal-500 shadow-lg shadow-teal-500/20 ring-2 ring-teal-500/20'
                  : 'border-gray-200 shadow-md hover:border-gray-300 hover:shadow-lg'
              }
              focus:outline-none
            `}
          />

          {/* Botón para limpiar búsqueda */}
          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-4 h-4" strokeWidth={2.5} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

