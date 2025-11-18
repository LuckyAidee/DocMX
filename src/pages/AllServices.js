import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../components/shared/ServiceCard';
import { servicesConfig } from '../config/services.config';

export default function AllServices() {
  const navigate = useNavigate();
  const all = React.useMemo(() => Object.values(servicesConfig), []);

  return (
    <div className="p-8 pt-24">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Todos los servicios</h1>
        <p className="text-sm text-gray-600">Explora todos los trámites disponibles</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {all.map((s) => (
          <div key={s.id} className="cursor-pointer" onClick={() => navigate(`/servicio/${s.id}`)}>
            <ServiceCard
              name={s.nombre}
              price={s.precio}
              deliveryTime={s.tiempoEntrega}
              documentType={s.id}
              description={s.descripcion}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
