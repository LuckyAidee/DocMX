import React from 'react';
import ServiceCard from '../shared/ServiceCard';
import { TrendingUp } from 'lucide-react';

export default function MostUsedServices() {
  const services = [
    {
      id: 1,
      name: 'Acta de Nacimiento',
      price: '120',
      deliveryTime: '24-48 hrs',
      backgroundColor: '#1a1a2e',
      documentType: 'acta-nacimiento'
    },
    {
      id: 2,
      name: 'CURP',
      price: '80',
      deliveryTime: '12-24 hrs',
      backgroundColor: '#16213e',
      documentType: 'curp'
    },
    {
      id: 3,
      name: 'Acta de Matrimonio',
      price: '150',
      deliveryTime: '48 hrs',
      backgroundColor: '#0f3460',
      documentType: 'acta-matrimonio'
    },
    {
      id: 4,
      name: 'CSF con RFC y IDCIF',
      price: '200',
      deliveryTime: '24 hrs',
      backgroundColor: '#1a5f7a',
      documentType: 'csf'
    },
    {
      id: 5,
      name: 'Acta de Defunción',
      price: '130',
      deliveryTime: '24-48 hrs',
      backgroundColor: '#134b5f',
      documentType: 'acta-defuncion'
    },
    {
      id: 6,
      name: 'Corrección de Acta',
      price: '180',
      deliveryTime: '5-7 días',
      backgroundColor: '#1b262c',
      documentType: 'correccion'
    },
    {
      id: 7,
      name: 'Naturalización',
      price: '350',
      deliveryTime: '7-10 días',
      backgroundColor: '#2d1b69',
      documentType: 'naturalizacion'
    },
    {
      id: 8,
      name: 'CSF con RFC',
      price: '150',
      deliveryTime: '24 hrs',
      backgroundColor: '#1e293b',
      documentType: 'csf'
    }
  ];

  return (
    <section className="mb-16">
      <div className="mb-10">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-500"></div>
          <div className="flex items-center gap-2">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight uppercase">
              Tus más usados
            </h2>
          </div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-500"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            name={service.name}
            price={service.price}
            deliveryTime={service.deliveryTime}
            documentType={service.documentType}
            backgroundColor={service.backgroundColor}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
          <span className="text-sm text-gray-600">
            ¿No encuentras lo que buscas?
          </span>
          <button className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
            Ver todos los servicios
          </button>
        </div>
      </div>
    </section>
  );
}