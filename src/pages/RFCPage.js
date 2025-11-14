import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import CategoryHeroRFC from '../components/shared/CategoryHeroRFC';
import ServiceCard from '../components/shared/ServiceCard';

export default function RFCPage() {
  const navigate = useNavigate();
  
  const rfcServices = [
    {
      id: 1,
      name: 'RFC por primera vez',
      price: '250.00',
      deliveryTime: '24-48 hrs',
      documentType: 'rfc-primera-vez',
      backgroundColor: '#475569',
      heightClass: "h-96",
      path: '/servicio/rfc-primera-vez'
    },
    {
      id: 2,
      name: 'Constancia de situación fiscal con RFC',
      price: '180.00',
      deliveryTime: '24 hrs',
      documentType: 'csf',
      backgroundColor: '#64748b',
      path: '/servicio/constancia-fiscal-rfc'
    },
    {
      id: 3,
      name: 'Constancia de situación fiscal con RFC y IDCIF',
      price: '200.00',
      deliveryTime: '24-48 hrs',
      documentType: 'csf',
      backgroundColor: '#334155',
      path: '/servicio/constancia-fiscal-rfc-idcif'
    },
    {
      id: 4,
      name: 'E.firma',
      price: '350.00',
      deliveryTime: '48-72 hrs',
      documentType: 'e-firma',
      backgroundColor: '#1e293b',
      path: '/servicio/e-firma'
    },
    {
      id: 5,
      name: 'Modificaciones RFC',
      price: '150.00',
      deliveryTime: '24 hrs',
      documentType: 'rfc-modificaciones',
      backgroundColor: '#0f172a',
      path: '/servicio/modificaciones-csf'
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
                { label: 'RFC', path: '/rfc' }
              ]} 
            />
          </div>
          
          {/* CategoryHeroRFC - con padding horizontal */}
          <div className="px-8 mt-1">
            <CategoryHeroRFC 
              title="RFC"
              subtitle="Documentos oficiales del SAT"
            />
          </div>
          
          {/* Fila horizontal de servicios */}
          <div className="px-8 py-10">
            <div className="flex gap-6 justify-center flex-wrap">
              {rfcServices.map((service) => (
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