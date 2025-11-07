import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import SearchBar from '../components/layout/SearchBar';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import CategoryHeroExtranjeros from '../components/shared/CategoryHeroExtranjeros';
import ServiceCard from '../components/shared/ServiceCard';

export default function ExtranjerosPage() {
  const navigate = useNavigate();
  
  const extranjerosServices = [
    {
      id: 1,
      name: 'Carta de Naturalización',
      price: '850.00',
      deliveryTime: '10-15 días',
      documentType: 'carta-naturalizacion',
      backgroundColor: '#475569',
      path: '/extranjeros/carta-naturalizacion'
    },
    {
      id: 2,
      name: 'Naturalizaciones Mexicanas',
      price: '900.00',
      deliveryTime: '10-15 días',
      documentType: 'naturalizaciones-mexicanas',
      backgroundColor: '#64748b',
      path: '/extranjeros/naturalizaciones-mexicanas'
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
                { label: 'Extranjeros', path: '/extranjeros' }
              ]} 
            />
          </div>
          
          {/* CategoryHeroExtranjeros - con padding horizontal */}
          <div className="px-8 mt-1">
            <CategoryHeroExtranjeros 
              title="EXTRANJEROS"
              subtitle="Trámites de naturalización y ciudadanía mexicana"
            />
          </div>
          
          {/* Fila horizontal de servicios */}
          <div className="px-8 py-10">
            <div className="flex gap-6 justify-center flex-wrap">
              {extranjerosServices.map((service) => (
                <div 
                  key={service.id} 
                  className="flex-1 max-w-sm min-w-[280px] h-80 cursor-pointer"
                  onClick={() => navigate(service.path)}
                >
                  <ServiceCard
                    name={service.name}
                    price={service.price}
                    deliveryTime={service.deliveryTime}
                    documentType={service.documentType}
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