import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import CategoryHeroExtranjeros from '../components/shared/CategoryHeroExtranjeros';
import ServiceCard from '../components/shared/ServiceCard';

export default function ExtranjerosPage() {
  const navigate = useNavigate();
  
  // 2. DEFINIR LOS SERVICIOS DE EXTRANJEROS
  const extranjerosServices = [
    {
      id: 1,
      name: 'Carta de naturalización',
      price: '1500.00', // Precio de ejemplo
      deliveryTime: 'Trámite Especial',
      documentType: 'carta-naturalizacion', // [cite: ServiceCard.js]
      backgroundColor: '#475569', // Paleta Slate [cite: RFCPage.js]
      path: '/servicio/carta-naturalizacion' // Ruta dinámica
    },
    {
      id: 2,
      name: 'Naturalizaciones mexicanas',
      price: '1200.00', // Precio de ejemplo
      deliveryTime: 'Trámite Especial',
      documentType: 'naturalizaciones-mexicanas', // [cite: ServiceCard.js]
      backgroundColor: '#334155', // Paleta Slate [cite: RFCPage.js]
      path: '/servicio/naturalizaciones-mexicanas'
    },
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
                // 3. ACTUALIZAR BREADCRUMB
                { label: 'Extranjeros', path: '/extranjeros' }
              ]} 
            />
          </div>
          
          {/* 4. USAR EL NUEVO HERO Y DATOS */}
          <div className="px-8 mt-1">
            <CategoryHeroExtranjeros
              title="EXTRA"
              subtitle="Trámites de ciudadanía y naturalización"
            />
          </div>
          
          {/* Fila horizontal de servicios */}
          <div className="px-8 py-10">
            <div className="flex gap-6 justify-center">
              {extranjerosServices.map((service) => (
                <div 
                  key={service.id} 
                  className="flex-1 max-w-sm h-80 cursor-pointer"
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