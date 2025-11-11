import React from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import SearchBar from './SearchBar';

export default function Layout() {
  const location = useLocation();
  
  // Rutas donde NO debe aparecer SearchBar
  const hideSearchBarRoutes = [
    '/servicio/',
    '/dashboard/orders',
    '/dashboard/add-balance',
    '/dashboard/support'
  ];
  
  // Verificar si la ruta actual debe ocultar SearchBar
  const shouldHideSearchBar = hideSearchBarRoutes.some(route => 
    location.pathname.includes(route)
  );
  
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar - PERSISTENTE */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 ml-[4.5rem]">
        {/* TopBar - PERSISTENTE */}
        <TopBar />
        
        {/* SearchBar - CONDICIONAL */}
        {!shouldHideSearchBar && <SearchBar />}
        
        {/* AnimatePresence solo envuelve el contenido que cambia */}
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </div>
    </div>
  );
}
