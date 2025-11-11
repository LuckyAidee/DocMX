import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
      path: '/servicio/acta-nacimiento'
    },
    {
      id: 2,
      name: 'Acta de Matrimonio',
      price: '15.00',
      deliveryTime: '20 Minutos',
      documentType: 'acta-matrimonio',
      backgroundColor: '#64748b', // <-- CAMBIO (Color de RFCPage)
      path: '/servicio/acta-matrimonio'
    },
    {
      id: 3,
      name: 'Acta de Defunción',
      price: '15.00',
      deliveryTime: '20 Minutos',
      documentType: 'acta-defuncion',
      backgroundColor: '#334155', // <-- CAMBIO (Color de RFCPage)
      path: '/servicio/acta-defuncion'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white min-h-screen mt-[120px]"
    >
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
            <div className="flex gap-6 justify-center flex-wrap">
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
    </motion.div>
  );
}