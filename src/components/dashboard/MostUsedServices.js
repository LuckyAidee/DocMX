import React, { useEffect, useState, useMemo } from 'react';
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

const gradientColors = [
  'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)',
  'linear-gradient(135deg, #0f172a 0%, #115e59 100%)',
  'linear-gradient(135deg, #334155 0%, #164e63 100%)',
  'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #134e4a 100%)',
  'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
  'linear-gradient(135deg, #164e63 0%, #1e293b 100%)',
  'linear-gradient(135deg, #115e59 0%, #0f172a 100%)'
];

export default function MostUsedServices() {
  const navigate = useNavigate();

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ['orders', 'mostUsed'],
    queryFn: () => apiService.getUserOrders({ limit: 200 }),
    staleTime: 60_000,
    cacheTime: 5 * 60_000,
  });

  const allServices = useMemo(
    () =>
      Object.values(servicesConfig).map((service, index) => ({
        id: service.id || service.svgKey || index,
        name: service.nombre,
        price: typeof service.precio === 'number' ? service.precio.toFixed(2) : service.precio || '',
        deliveryTime: service.tiempoEntrega,
        documentType: service.svgKey || service.id,
        backgroundColor: gradientColors[index % gradientColors.length],
        serviceId: service.id || service.svgKey || index,
      })),
    []
  );

  const freq = useMemo(() => {
    const map = new Map();
    (orders || []).forEach((o) => {
      const key = o.documentType || 'unknown';
      map.set(key, (map.get(key) || 0) + 1);
    });
    return map;
  }, [orders]);

  const topServiceIds = useMemo(() => {
    const limit = 8;
    if (!freq.size) return DEFAULT_SERVICES.slice(0, limit);
    const arr = Array.from(freq.entries()).sort((a, b) => b[1] - a[1]).map((e) => e[0]);
    const resolved = Array.from(
      new Set(
        arr.map((id) => {
          if (servicesConfig[id]) return id;
          const found = Object.keys(servicesConfig).find((k) => k.includes(id));
          return found || id;
        })
      )
    ).filter(Boolean);
    const result = [...resolved];
    for (const def of DEFAULT_SERVICES) {
      if (result.length >= limit) break;
      if (!result.includes(def)) result.push(def);
    }
    return result.slice(0, limit);
  }, [freq]);

  const servicesFromOrders = useMemo(
    () =>
      topServiceIds.map((sid, idx) => {
        const cfg = servicesConfig[sid] || servicesConfig[Object.keys(servicesConfig).find((k) => k.includes(sid))] || {};
        return {
          id: sid || `svc-${idx}`,
          name: cfg.nombre || sid,
          price: cfg.precio || '',
          deliveryTime: cfg.tiempoEntrega || '',
          // Forzar los degradados front-end en "Tus más usados" sin tocar backend
          backgroundColor: gradientColors[idx % gradientColors.length],
          documentType: cfg.svgKey || sid,
          serviceId: cfg.id || sid,
        };
      }),
    [topServiceIds]
  );

  const [services, setServices] = useState([]);
  useEffect(() => {
    const stored = sessionStorage.getItem('mostUsedServices');
    if (stored) {
      try {
        setServices(JSON.parse(stored));
        return;
      } catch (e) {
        // ignore parse error
      }
    }
    const shuffled = [...allServices].sort(() => Math.random() - 0.5).slice(0, 8);
    setServices(shuffled);
    try { sessionStorage.setItem('mostUsedServices', JSON.stringify(shuffled)); } catch (e) {}
  }, [allServices]);

  const servicesToShow = (orders && orders.length > 0) ? servicesFromOrders : services;

  const scrollToCategoryNav = () => {
    const categoryNav = document.getElementById('category-nav');
    if (categoryNav) {
      categoryNav.scrollIntoView({ behavior: 'smooth', block: 'center' });
      categoryNav.style.transform = 'scale(1.03)';
      const buttons = categoryNav.querySelectorAll('button');
      const lines = categoryNav.querySelectorAll('button > div');
      buttons.forEach((button) => { if (!button.classList.contains('text-teal-600')) button.style.color = '#0d9488'; });
      lines.forEach((line) => { if (!line.style.width || line.style.width === '0px') line.style.width = '75%'; });
      setTimeout(() => {
        categoryNav.style.transform = 'scale(1)';
        buttons.forEach((button) => { if (!button.classList.contains('text-teal-600')) button.style.color = ''; });
        lines.forEach((line) => { if (line.classList.contains('w-0')) line.style.width = ''; });
      }, 1000);
    }
  };

  if (isLoading && (!orders || orders.length === 0) && (!services || services.length === 0)) {
    return (
      <section className="mb-16">
        <div className="mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-500"></div>
            <div className="flex items-center gap-2">
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight uppercase">Tus más usados</h2>
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
      <div className="mt-1 mb-8">
        <div className="flex items-center justify-center">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight uppercase">Tus más usados</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesToShow.map((service) => (
          <div
            key={service.id}
            onClick={() => navigate(`/servicio/${service.serviceId}`)}
            className="cursor-pointer h-full"
          >
            <ServiceCard
              name={service.name}
              price={service.price}
              deliveryTime={service.deliveryTime}
              documentType={service.documentType}
              backgroundColor={service.backgroundColor}
              heightClass="h-72"
            />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
          <span className="text-sm text-gray-600">¿No encuentras lo que buscas?</span>
          <button
            onClick={scrollToCategoryNav}
            className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors ml-2"
          >
            Ver todos los servicios
          </button>
        </div>
      </div>
    </section>
  );
}
