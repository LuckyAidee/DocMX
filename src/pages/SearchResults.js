import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ServiceCard from '../components/shared/ServiceCard';
import { servicesConfig } from '../config/services.config';

function normalizeText(str = '') {
  return str
    .toString()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResults() {
  const query = useQuery();
  const q = normalizeText(query.get('q') || '');
  const navigate = useNavigate();

  const allServices = React.useMemo(() => Object.values(servicesConfig), []);

  const results = React.useMemo(() => {
    if (!q) return [];

    // Basic plural handling: try with and without trailing 's'
    const variants = [q];
    if (q.endsWith('s')) variants.push(q.slice(0, -1));

    return allServices.filter((s) => {
      const name = normalizeText(s.nombre || '');
      const desc = normalizeText(s.descripcion || '');
      const cat = normalizeText(s.categoria || '');
      const id = normalizeText(s.id || '');

      return variants.some((v) =>
        name.includes(v) || desc.includes(v) || cat.includes(v) || id.includes(v)
      );
    });
  }, [allServices, q]);

  // Debug info to help during development (will be removed later)
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.debug('[SearchResults] query=', q, 'results=', results.length);
  }, [q, results.length]);

  return (
    <div className="p-8 pt-24">
      <h2 className="text-2xl font-bold mb-4">Resultados de búsqueda</h2>
      { !q ? (
        <p className="text-gray-600">Ingrese un término para buscar servicios.</p>
      ) : results.length === 0 ? (
        <p className="text-gray-600">No se encontraron resultados para "{q}".</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((s) => (
            <ServiceCard
              key={s.id}
              name={s.nombre}
              price={s.precio}
              deliveryTime={s.tiempoEntrega}
              documentType={s.id}
              description={s.descripcion}
              onClick={() => navigate(`/servicio/${s.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
