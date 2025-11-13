import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import { CheckCircle, Clock, XCircle, Download, RefreshCw } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { apiService } from '../services/api';

export default function OrderHistory() {
  const [activeFilter, setActiveFilter] = useState('Todas');
  useAuth();

  // Filtros disponibles (mapeados a los estados del backend)
  const filters = ['Todas', 'En Proceso', 'Completado', 'Cancelado'];

  // Mapeo de estados del backend a frontend
  const statusMap = {
    'pending': 'En Proceso',
    'completed': 'Completado',
    'cancelled': 'Cancelado'
  };

  // Mapeo inverso para filtros
  const filterMap = {
    'Todas': null,
    'En Proceso': 'pending',
    'Completado': 'completed',
    'Cancelado': 'cancelled'
  };

  // TanStack Query - mantiene datos anteriores mientras carga nuevos
  const { 
    data: orders = [], 
    isLoading, 
    error,
    refetch, 
    isFetching 
  } = useQuery({
    queryKey: ['orders'],
    queryFn: () => apiService.getUserOrders(),
    staleTime: 30000,
  });

  // Filtrar órdenes según el filtro activo
  const filteredOrders = activeFilter === 'Todas' 
    ? orders 
    : orders.filter(order => order.status === filterMap[activeFilter]);

  // Función para formatear fecha
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  // Función para obtener el nombre del servicio en español
  const getServiceName = (documentType) => {
    const serviceNames = {
      'acta-nacimiento': 'Acta de Nacimiento',
      'acta-matrimonio': 'Acta de Matrimonio',
      'acta-defuncion': 'Acta de Defunción',
      'curp': 'CURP',
      'rfc': 'RFC',
      'e-firma': 'e.Firma',
      'csf': 'CSF con RFC',
      'correccion': 'Corrección de Acta',
      'naturalizacion': 'Naturalización'
    };
    
    return serviceNames[documentType] || documentType;
  };

  // Función para obtener el badge completo con ícono según estado
  const getBadge = (status) => {
    const estado = statusMap[status] || 'En Proceso';
    
    const badgeStyles = {
      'En Proceso': {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        border: 'border-blue-200',
        icon: <Clock className="w-4 h-4" />,
        label: 'En Proceso'
      },
      'Completado': {
        bg: 'bg-green-50',
        text: 'text-green-700',
        border: 'border-green-200',
        icon: <CheckCircle className="w-4 h-4" />,
        label: 'Completado'
      },
      'Cancelado': {
        bg: 'bg-red-50',
        text: 'text-red-700',
        border: 'border-red-200',
        icon: <XCircle className="w-4 h-4" />,
        label: 'Cancelado'
      }
    };

    const style = badgeStyles[estado];

    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border font-medium text-sm ${style.bg} ${style.text} ${style.border}`}>
        {style.icon}
        {style.label}
      </span>
    );
  };

  const handleDescargar = async (orderId) => {
    try {
      // Aquí implementarías la lógica para descargar el documento
      console.log('Descargando orden:', orderId);
      // Ejemplo: await apiService.downloadOrder(orderId);
      alert(`Funcionalidad de descarga para orden ${orderId} será implementada próximamente`);
    } catch (error) {
      console.error('Error descargando:', error);
      alert('Error al intentar descargar el documento');
    }
  };

  const handleVerDetalle = (orderId) => {
    console.log('Ver detalle de orden:', orderId);
    // Aquí podrías navegar a una página de detalle o mostrar un modal
  };

  // Loader inicial - solo primera vez con SKELETON
  if (isLoading && !orders.length) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white min-h-screen mt-7 p-8"
      >
        {/* Breadcrumbs Skeleton */}
        <div className="mb-0">
          <div className="flex items-center gap-2">
            <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Header Skeleton */}
        <div className="flex justify-between items-center mb-6 mt-6">
          <div className="h-9 w-64 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>

        {/* Filtros Skeleton */}
        <div className="flex gap-3 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
          ))}
        </div>

        {/* Tabla Skeleton */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {/* Header de tabla */}
          <div className="bg-gray-50 border-b border-gray-200">
            <div className="flex">
              <div className="flex-1 py-3 px-4">
                <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
              </div>
              <div className="flex-1 py-3 px-4">
                <div className="h-4 w-16 bg-gray-300 rounded animate-pulse"></div>
              </div>
              <div className="flex-1 py-3 px-4">
                <div className="h-4 w-12 bg-gray-300 rounded animate-pulse"></div>
              </div>
              <div className="flex-1 py-3 px-4">
                <div className="h-4 w-16 bg-gray-300 rounded animate-pulse"></div>
              </div>
              <div className="flex-1 py-3 px-4">
                <div className="h-4 w-12 bg-gray-300 rounded animate-pulse"></div>
              </div>
              <div className="flex-1 py-3 px-4">
                <div className="h-4 w-14 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Filas de tabla skeleton */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="border-b border-gray-100">
              <div className="flex">
                <div className="flex-1 py-3 px-4">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="flex-1 py-3 px-4">
                  <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="flex-1 py-3 px-4">
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="flex-1 py-3 px-4">
                  <div className="h-6 w-28 bg-gray-200 rounded-md animate-pulse"></div>
                </div>
                <div className="flex-1 py-3 px-4">
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="flex-1 py-3 px-4">
                  <div className="flex gap-2">
                    <div className="h-7 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
                    <div className="h-7 w-16 bg-gray-200 rounded-lg animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white min-h-screen mt-7 p-8"
    >
          {/* Breadcrumbs */}
          <div className="mb-0">
            <Breadcrumbs 
              items={[
                { label: 'Home', path: '/dashboard' },
                { label: 'Historial de Órdenes', path: '/dashboard/orders' }
              ]} 
            />
          </div>

          {/* Header con título y botón de actualizar */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-gray-800">
                Historial de Ódenes
              </h1>
              {/* Indicador de actualización en background */}
              {isFetching && orders.length > 0 && (
                <span className="text-xs text-teal-600 bg-teal-50 px-3 py-1 rounded-full font-medium animate-pulse">
                  Actualizando...
                </span>
              )}
            </div>
            <button
              onClick={() => refetch()}
              disabled={isFetching}
              className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:opacity-50 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${isFetching ? 'animate-spin' : ''}`} />
              Actualizar
            </button>
          </div>

          {/* Mensaje de error */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <XCircle className="w-5 h-5 text-red-400 mr-2" />
                <span className="text-red-800">{error.message || 'No se pudieron cargar las órdenes. Intenta nuevamente.'}</span>
              </div>
            </div>
          )}

          {/* Filtros rápidos */}
          <div className="flex gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Tabla de órdenes */}
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full">
              {/* Header */}
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-bold text-gray-700">
                    ID Orden
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-bold text-gray-700">
                    Servicio
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-bold text-gray-700">
                    Fecha
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-bold text-gray-700">
                    Estado
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-bold text-gray-700">
                    Precio
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-bold text-gray-700">
                    Acción
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order, index) => (
                    <tr 
                      key={order.id}
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        index === filteredOrders.length - 1 ? 'border-b-0' : ''
                      }`}
                    >
                      <td className="py-3 px-4 text-sm font-medium text-gray-800">
                        #{order.id.slice(-8).toUpperCase()}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {getServiceName(order.documentType)}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {formatDate(order.createdAt)}
                      </td>
                      <td className="py-3 px-4">
                        {getBadge(order.status)}
                      </td>
                      <td className="py-3 px-4 text-sm font-semibold text-gray-800">
                        ${order.pricePaid.toFixed(2)}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleDescargar(order.id)}
                            disabled={order.status !== 'completed'}
                            className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            title={order.status !== 'completed' ? 'Solo disponible para órdenes completadas' : 'Descargar documento'}
                          >
                            <Download className="w-3 h-3" />
                            Descargar
                          </button>
                          <button
                            onClick={() => handleVerDetalle(order.id)}
                            className="px-3 py-1.5 text-xs font-medium text-gray-600 border border-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            Detalle
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-8 text-center text-gray-500">
                      {orders.length === 0 
                        ? 'Aún no has realizado ninguna orden' 
                        : `No hay órdenes con el estado "${activeFilter}"`
                      }
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Información adicional */}
          {filteredOrders.length > 0 && (
            <div className="mt-4 text-sm text-gray-600">
              Mostrando {filteredOrders.length} de {orders.length} órdenes totales
            </div>
          )}
    </motion.div>
  );
}
