import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import SearchBar from '../components/layout/SearchBar';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import CategoryHeroCURP from '../components/shared/CategoryHeroCURP';
import ServiceCard from '../components/shared/ServiceCard';

export default function CURPPage() {
  const navigate = useNavigate();
  
  const curpServices = [
    {
      id: 1,
      name: 'Unificación de CURP',
      price: '200.00',
      deliveryTime: '24-48 hrs',
      documentType: 'curp-unificacion',
      backgroundColor: '#475569', // <-- CAMBIO (Color de RFCPage)
      heightClass: "h-96",
      path: '/servicio/unificacion-curp'
    },
    {
      id: 2,
      name: 'Dar de baja CURP',
      price: '150.00',
      deliveryTime: '24 hrs',
      documentType: 'curp-baja',
      backgroundColor: '#64748b', // <-- CAMBIO (Color de RFCPage)
      path: '/servicio/baja-curp'
    },
    {
      id: 3,
      name: 'Dar de alta CURP',
      price: '180.00',
      deliveryTime: '24-48 hrs',
      documentType: 'curp-alta',
      backgroundColor: '#334155', // <-- CAMBIO (Color de RFCPage)
      path: '/servicio/alta-curp'
    },
    {
      id: 4,
      name: 'Descargar CURP',
      price: '50.00',
      deliveryTime: '20 min',
      documentType: 'curp-descargar',
      backgroundColor: '#1e293b', // <-- CAMBIO (Color de RFCPage)
      path: '/servicio/descargar-curp'
    },
    {
      id: 5,
      name: 'Certificación CURP',
      price: '250.00',
      deliveryTime: '48-72 hrs',
      documentType: 'curp-certificacion',
      backgroundColor: '#0f172a', // <-- CAMBIO (Color de RFCPage)
      path: '/servicio/certificacion-curp'
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
                { label: 'CURP', path: '/curp' }
              ]} 
            />
          </div>
          
          {/* CategoryHeroCURP - con padding horizontal */}
          <div className="px-8 mt-1">
            <CategoryHeroCURP 
              title="CURP"
              subtitle="Clave Única de Registro de Población"
            />
          </div>
          
          {/* Fila horizontal de servicios */}
          <div className="px-8 py-10">
            <div className="flex gap-6 justify-center flex-wrap">
              {curpServices.map((service) => (
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
