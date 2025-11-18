import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import CategoryHero from '../components/shared/CategoryHero';
import ServiceCard from '../components/shared/ServiceCard';
import { getServicesByCategory } from '../config/services.config';

export default function ActasPage() {
  const navigate = useNavigate();

  const actasServices = getServicesByCategory('Actas');

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