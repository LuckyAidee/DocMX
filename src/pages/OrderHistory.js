import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

export default function OrderHistory() {
  const [activeFilter, setActiveFilter] = useState('Todas');

  // Datos hardcodeados de órdenes
  const allOrders = [
    { id: '#0001', servicio: 'Acta de Nacimiento', fecha: '25/10/2025', estado: 'Completado', precio: '15.00' },
    { id: '#0002', servicio: 'RFC', fecha: '28/10/2025', estado: 'En Proceso', precio: '200.00' },
    { id: '#0003', servicio: 'CURP', fecha: '29/10/2025', estado: 'En Proceso', precio: '100.00' },
    { id: '#0004', servicio: 'Acta de Matrimonio', fecha: '30/10/2025', estado: 'Completado', precio: '15.00' },
    { id: '#0005', servicio: 'e.firma', fecha: '30/10/2025', estado: 'Cancelado', precio: '300.00' },
    { id: '#0006', servicio: 'CSF con RFC', fecha: '30/10/2025', estado: 'Cancelado', precio: '250.00' }
  ];

  // Filtros disponibles (sin "Pendiente")
  const filters = ['Todas', 'En Proceso', 'Completado', 'Cancelado'];

  // Filtrar órdenes según el filtro activo
  const filteredOrders = activeFilter === 'Todas' 
    ? allOrders 
    : allOrders.filter(order => order.estado === activeFilter);

  // Función para obtener el badge completo con ícono según estado
  const getBadge = (estado) => {
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

    const style = badgeStyles[estado] || badgeStyles['Pendiente'];

    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border font-medium text-sm ${style.bg} ${style.text} ${style.border}`}>
        {style.icon}
        {style.label}
      </span>
    );
  };

  const handleVerDetalle = (orderId) => {
    console.log('Ver orden', orderId);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-[4.5rem]">
        {/* TopBar */}
        <TopBar />

        {/* Contenedor principal con fondo blanco - TODO dentro */}
        <div className="bg-white min-h-screen mt-7 p-8">
          {/* Breadcrumbs */}
          <div className="mb-0">
            <Breadcrumbs 
              items={[
                { label: 'Home', path: '/dashboard' },
                { label: 'Historial de Órdenes', path: '/orders' }
              ]} 
            />
          </div>

          {/* Título */}
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Historial de Órdenes
          </h1>

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
                        {order.id}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {order.servicio}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {order.fecha}
                      </td>
                      <td className="py-3 px-4">
                        {getBadge(order.estado)}
                      </td>
                      <td className="py-3 px-4 text-sm font-semibold text-gray-800">
                        ${order.precio}
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => handleVerDetalle(order.id)}
                          className="px-3 py-1.5 text-xs font-medium text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
                        >
                          Descargar
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-8 text-center text-gray-500">
                      No hay órdenes con el estado "{activeFilter}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mensaje informativo si no hay resultados */}
          {filteredOrders.length === 0 && (
            <div className="mt-4 text-sm text-gray-600 text-center">
              Intenta con otro filtro para ver más órdenes
            </div>
          )}
        </div>
      </div>
    </div>
  );
}