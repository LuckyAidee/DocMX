import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import CategoryHeroCorrecciones from '../components/shared/CategoryHeroCorrecciones';
import ServiceCard from '../components/shared/ServiceCard';

export default function CorreccionesPage() {
  const navigate = useNavigate();
  
  const correccionesServices = [
    {
      id: 1,
      name: 'Corrección de CURP',
      price: '300.00',
      deliveryTime: '48 hrs',
      documentType: 'correccion-curp',
      backgroundColor: '#475569',
      heightClass: "h-96",
      path: '/servicio/correccion-curp'
    },
    {
      id: 2,
      name: 'Corrección de actas extemporáneas',
      price: '450.00',
      deliveryTime: '3-5 días',
      documentType: 'correccion-extemporaneas',
      backgroundColor: '#64748b',
      path: '/servicio/correccion-actas-extemporaneas'
    },
    {
      id: 3,
      name: 'Corrección de acta de matrimonio',
      price: '400.00',
      deliveryTime: '48-72 hrs',
      documentType: 'correccion-matrimonio',
      backgroundColor: '#334155',
      path: '/servicio/correccion-acta-matrimonio'
    },
    {
      id: 4,
      name: 'Corrección de acta de defunción',
      price: '400.00',
      deliveryTime: '48-72 hrs',
      documentType: 'correccion-defuncion',
      backgroundColor: '#1e293b',
      path: '/servicio/correccion-acta-defuncion'
    },
    {
      id: 5,
      name: 'Correcciones de actas de nacimiento',
      price: '380.00',
      deliveryTime: '48 hrs',
      documentType: 'correccion-nacimiento',
      backgroundColor: '#0f172a',
      path: '/servicio/correccion-acta-nacimiento'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="bg-white min-h-screen mt-[120px]"
    >
          {/* Breadcrumbs */}
          <div className="px-12 pt-4 pb-1">
            <Breadcrumbs 
              items={[
                { label: 'Home', path: '/dashboard' },
                { label: 'Correcciones', path: '/correcciones' }
              ]} 
            />
          </div>
          
          {/* CategoryHeroCorrecciones - con padding horizontal */}
          <div className="px-8 mt-1">
            <CategoryHeroCorrecciones 
              title="CORRE"
              subtitle="Servicios de corrección en documentos"
            />
          </div>
          
          {/* Fila horizontal de servicios */}
          <div className="px-8 py-10">
            <div className="flex gap-6 justify-center flex-wrap">
              {correccionesServices.map((service) => (
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
    </motion.div>
  );
}
