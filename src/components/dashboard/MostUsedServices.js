import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../shared/ServiceCard';
import { useQuery } from '@tanstack/react-query';
import { apiService } from '../../services/api';
import { servicesConfig } from '../../config/services.config';

const DEFAULT_SERVICES = [
  'acta-nacimiento',
  'curp',
  'acta-matrimonio',
  'constancia-fiscal-rfc',
  'acta-defuncion',
  'correccion-acta-nacimiento',
  'carta-naturalizacion',
];

export default function MostUsedServices() {
  const defaultServices = DEFAULT_SERVICES;

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ['orders', 'mostUsed'],
    queryFn: () => apiService.getUserOrders({ limit: 200 }),
    staleTime: 60_000,
    cacheTime: 5 * 60_000,
  });

  // Compute frequency of documentType
  const freq = React.useMemo(() => {
    const map = new Map();
    (orders || []).forEach((o) => {
      const key = o.documentType || 'unknown';
      map.set(key, (map.get(key) || 0) + 1);
    });
    return map;
  }, [orders]);

  // Sort keys by frequency
  const topServiceIds = React.useMemo(() => {
    // number of items to show
    const limit = 8;
    if (!freq.size) return defaultServices.slice(0, limit);
    const arr = Array.from(freq.entries())
      .sort((a, b) => b[1] - a[1])
      .map((e) => e[0]);
    // Map documentType ids to known service ids when possible (servicesConfig keys)
    const resolved = Array.from(new Set(arr.map((id) => {
      if (servicesConfig[id]) return id;
      // try to find a servicesConfig key that contains this id as substring
      const found = Object.keys(servicesConfig).find((k) => k.includes(id));
      return found || id;
    }))).filter(Boolean);
    // Ensure we have at least `limit` entries by appending defaults if needed
    const result = [...resolved];
    for (const def of defaultServices) {
      if (result.length >= limit) break;
      if (!result.includes(def)) result.push(def);
    }
    return result.slice(0, limit);
  }, [freq]);

  const servicesToShow = topServiceIds.map((sid, idx) => {
    const cfg = servicesConfig[sid] || {};
    return {
      id: sid || `svc-${idx}`,
      name: cfg.nombre || sid,
      price: cfg.precio || '',
      deliveryTime: cfg.tiempoEntrega || '',
      backgroundColor: cfg.colorAccent || '#111827',
      documentType: sid,
    };
  });

  const navigate = useNavigate();

  if (isLoading && (!orders || orders.length === 0)) {
    // Show skeleton grid while loading initial data
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
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-44 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-700 animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {servicesToShow.map((service, index) => (
          <div key={service.id} className="h-full">
            <ServiceCard
              name={service.name}
              price={service.price}
              deliveryTime={service.deliveryTime}
              documentType={service.documentType}
              backgroundColor={service.backgroundColor}
              heightClass="h-72"
              onClick={() => {
                // Navigate to the service detail (menu servicio)
                // service.id is expected to match the route param used by ServiceDetail
                try {
                  navigate(`/servicio/${service.id}`);
                } catch (e) {
                  // fallback: set location.href
                  window.location.href = `/servicio/${service.id}`;
                }
              }}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
          <span className="text-sm text-gray-600">¿No encuentras lo que buscas?</span>
          <button
            onClick={() => navigate('/servicios')}
            className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
          >
            Ver todos los servicios
          </button>
        </div>
      </div>
    </section>
  );
}