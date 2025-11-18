import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../shared/ServiceCard';
import { servicesConfig } from '../../config/services.config';

export default function MostUsedServices() {
  const navigate = useNavigate();

  const scrollToCategoryNav = () => {
    const categoryNav = document.getElementById('category-nav');
    if (categoryNav) {
      // Scroll suave hacia CategoryNav
      categoryNav.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Aplicar efecto de escala
      categoryNav.style.transform = 'scale(1.03)';

      // Aplicar efecto hover a todos los botones (texto verde y líneas verdes)
      const buttons = categoryNav.querySelectorAll('button');
      const lines = categoryNav.querySelectorAll('button > div');

      buttons.forEach(button => {
        if (!button.classList.contains('text-teal-600')) {
          button.style.color = '#0d9488'; // teal-600
        }
      });

      lines.forEach(line => {
        if (!line.style.width || line.style.width === '0px') {
          line.style.width = '75%';
        }
      });

      // Quitar el efecto después de 1 segundo
      setTimeout(() => {
        categoryNav.style.transform = 'scale(1)';

        buttons.forEach(button => {
          if (!button.classList.contains('text-teal-600')) {
            button.style.color = '';
          }
        });

        lines.forEach(line => {
          if (line.classList.contains('w-0')) {
            line.style.width = '';
          }
        });
      }, 1000);
    }
  };

  // Paleta de grises slate para fondos de tarjetas
  const slateColors = ['#0f172a', '#1e293b', '#334155', '#475569', '#64748b'];

  // Generar lista de servicios desde servicesConfig
  const allServices = Object.values(servicesConfig).map((service, index) => ({
    id: index + 1,
    name: service.nombre,
    price: service.precio.toFixed(2),
    deliveryTime: service.tiempoEntrega,
    documentType: service.svgKey,
    backgroundColor: slateColors[index % slateColors.length],
    serviceId: service.id
  }));

  // Función para obtener 8 servicios aleatorios
  const getRandomServices = () => {
    const shuffled = [...allServices].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 8);
  };

  // Estado para los servicios mostrados
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Intentar cargar desde sessionStorage
    const storedServices = sessionStorage.getItem('mostUsedServices');

    if (storedServices) {
      setServices(JSON.parse(storedServices));
    } else {
      // Si no existen, generar nuevos aleatorios y guardarlos
      const randomServices = getRandomServices();
      setServices(randomServices);
      sessionStorage.setItem('mostUsedServices', JSON.stringify(randomServices));
    }
  }, []);

  return (
    <section className="mb-16">
      <div className="mt-1 mb-8">
        <div className="flex items-center justify-center">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight uppercase">
            Tus más usados
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => navigate(`/servicio/${service.serviceId}`)}
            className="cursor-pointer"
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

      <div className="mt-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200">
          <span className="text-sm text-gray-600">
            ¿No encuentras lo que buscas?
          </span>
          <button
            onClick={scrollToCategoryNav}
            className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
          >
            Ver todos los servicios
          </button>
        </div>
      </div>
    </section>
  );
}