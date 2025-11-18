import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { servicesConfig } from '../../config/services.config';

function normalizeText(str = '') {
  return str
    .toString()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();
}

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const debounceRef = useRef(0);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = (searchQuery || '').trim();
    if (!q) {
      navigate('/search');
      return;
    }
    navigate(`/search?q=${encodeURIComponent(q)}`);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  // Update suggestions with debounce
  useEffect(() => {
    window.clearTimeout(debounceRef.current);
    if (!searchQuery || searchQuery.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      setHighlightIndex(-1);
      return;
    }

    debounceRef.current = window.setTimeout(() => {
      const q = normalizeText(searchQuery);
      const all = Object.values(servicesConfig || {});
      const filtered = all.filter((s) => {
        const name = normalizeText(s.nombre || '');
        const desc = normalizeText(s.descripcion || '');
        const cat = normalizeText(s.categoria || '');
        const id = normalizeText(s.id || '');
        return (
          name.includes(q) ||
          desc.includes(q) ||
          cat.includes(q) ||
          id.includes(q)
        );
      }).slice(0, 8);

      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
      setHighlightIndex(-1);
    }, 180);

    return () => window.clearTimeout(debounceRef.current);
  }, [searchQuery]);

  // Close suggestions when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        inputRef.current &&
        !inputRef.current.contains(e.target)
      ) {
        setShowSuggestions(false);
        setHighlightIndex(-1);
      }
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const goToService = (id) => {
    navigate(`/servicio/${id}`);
    setShowSuggestions(false);
    setSearchQuery('');
  };

  const onKeyDown = (e) => {
    if (!showSuggestions) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      if (highlightIndex >= 0 && suggestions[highlightIndex]) {
        e.preventDefault();
        goToService(suggestions[highlightIndex].id);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-850 to-gray-800 h-[72px] flex items-center justify-between px-8 fixed top-16 right-0 left-16 z-30 border-b border-gray-700/50 shadow-lg">
      {/* Lado Izquierdo - Título */}
      <div className="flex items-center gap-3">
        <h2 className="text-white text-[1.6rem] font-semibold tracking-wide ml-6 mb-1">DocMX Marketplace</h2>
      </div>

      {/* Lado Derecho - Barra de búsqueda */}
      <form onSubmit={handleSearch} className="w-[420px]" autoComplete="off">
        <div className="relative group" ref={dropdownRef}>
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
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => { setIsFocused(true); }}
            onBlur={() => { setIsFocused(false); }}
            onKeyDown={onKeyDown}
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
        
          {/* Suggestions dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 max-h-72 overflow-auto z-50">
              {suggestions.map((s, idx) => (
                <li
                  key={s.id}
                  onMouseDown={(e) => { e.preventDefault(); goToService(s.id); }}
                  className={`px-4 py-3 cursor-pointer hover:bg-gray-50 flex items-center gap-3 ${idx === highlightIndex ? 'bg-gray-50' : ''}`}
                >
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-800">{s.nombre}</div>
                    <div className="text-xs text-gray-500">{s.categoria} • ${s.precio?.toFixed ? s.precio.toFixed(2) : s.precio}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
    </div>
  );
}

