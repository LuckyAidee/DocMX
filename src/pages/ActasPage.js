import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import SearchBar from '../components/layout/SearchBar';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import CategoryHero from '../components/shared/CategoryHero';
import ServiceCard from '../components/shared/ServiceCard';

export default function ActasPage() {
  const navigate = useNavigate();
  
  const actasServices = [
    {
      id: 1,
      name: 'Acta de Nacimiento',
      price: '15.00',
      deliveryTime: '20 Minutos',
      documentType: 'acta-nacimiento',
      backgroundColor: '#475569', // <-- CAMBIO (Color de RFCPage)
      heightClass: "h-96",
      path: '/actas/acta-nacimiento'
    },
    {
      id: 2,
      name: 'Acta de Matrimonio',
      price: '15.00',
      deliveryTime: '20 Minutos',
      documentType: 'acta-matrimonio',
      backgroundColor: '#64748b', // <-- CAMBIO (Color de RFCPage)
      path: '/actas/acta-matrimonio'
    },
    {
      id: 3,
      name: 'Acta de Defunción',
      price: '15.00',
      deliveryTime: '20 Minutos',
      documentType: 'acta-defuncion',
      backgroundColor: '#334155', // <-- CAMBIO (Color de RFCPage)
      path: '/actas/acta-defuncion'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 ml-[4.5rem]">
        {/* TopBar - h-16 (64px) */}
        <TopBar />
        
        {/* SearchBar - h-14 (56px) */}
        <SearchBar />
        
        {/* Contenedor principal con fondo blanco */}
        <div className="bg-white min-h-screen mt-[120px]">
          {/* Breadcrumbs */}
          <div className="px-12 pt-4 pb-1">
            <Breadcrumbs 
              items={[
                { label: 'Home', path: '/dashboard' },
                { label: 'Actas', path: '/actas' }
              ]} 
            />
          </div>
          
          {/* CategoryHero - con padding horizontal */}
          <div className="px-8 mt-1">
            <CategoryHero 
              title="ACTAS"
              subtitle="Documentos oficiales de registro civil"
            />
          </div>
          
          {/* Fila horizontal de servicios */}
          <div className="px-8 py-10">
            <div className="flex gap-6 justify-center">
              {actasServices.map((service) => (
                <div 
                  key={service.id} 
                  className="flex-1 max-w-sm h-80 cursor-pointer"
                  onClick={() => navigate(service.path)}
                >
                  <ServiceCard
                    name={service.name}
                    price={service.price}
                    deliveryTime={service.deliveryTime}
                    documentType={service.documentType} // 👈 PASAR EL PROP
                    backgroundColor={service.backgroundColor}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}