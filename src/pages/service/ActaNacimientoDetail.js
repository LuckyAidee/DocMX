import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/layout/Sidebar';
import TopBar from '../../components/layout/TopBar';
import Breadcrumbs from '../../components/shared/Breadcrumbs';
import { Clock, DollarSign, FileText, ShoppingCart, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { apiService } from '../../services/api';

export default function ActaNacimientoDetail() {


  const navigate = useNavigate();
  const { user, updateUser } = useAuth(); // ✅ Agregamos updateUser para actualizar el balance
  const [curp, setCurp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const serviceData = {
    name: 'Acta de Nacimiento',
    price: 15.00, // ✅ Cambiado a número para cálculos
    deliveryTime: '20 Minutos',
    description: 'Obtén tu acta de nacimiento certificada de manera rápida y segura. Documento oficial expedido por el Registro Civil.',
    documentType: 'acta-nacimiento' // ✅ Agregamos el tipo de documento para el backend
  };

  const handlePurchase = async () => {
    if (!user) {
      setError('Error: No se encontró información del usuario. Inicia sesión nuevamente.');
      return;
    }

    if (user.balance < serviceData.price) {
      setError('Saldo insuficiente para realizar la compra.');
      return;
    }

    try {
      setIsLoading(true);
      setError('');

      // 🧾 Crear la orden
      const orderData = {
        userId: user._id,
        serviceId: serviceData._id,
        amount: serviceData.price,
        serviceName: serviceData.name,
      };

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Error al procesar la orden.');

      // 💰 Calcular nuevo balance
      const newBalance = user.balance - serviceData.price;

      // 🔄 Actualizar en el backend también
      const userResponse = await fetch(`/api/users/${user._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ balance: newBalance }),
      });

      const updatedUser = await userResponse.json();
      if (!userResponse.ok) throw new Error('Error al actualizar el saldo en el servidor');

      // ✅ Actualizar contexto global con los datos actualizados del backend
      updateUser(updatedUser);

      alert('Orden creada correctamente 🎉');
      navigate('/dashboard');
    } catch (error) {
      console.error('❌ Error en handlePurchase:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleContinue = () => {
    setShowSuccessModal(false);
    navigate('/dashboard/orders');
  };

  // ✅ Función para validar formato básico de CURP
  const isValidCURP = (curp) => {
    if (curp.length !== 18) return false;
    
    // Expresión regular básica para CURP mexicano
    const curpRegex = /^[A-Z]{4}\d{6}[A-Z]{6}[A-Z0-9]{2}$/;
    return curpRegex.test(curp);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className="flex-1 ml-[4.5rem]">
        <TopBar />

        {/* Contenedor principal con fondo blanco */}
        <div className="bg-white min-h-screen mt-[60px]">
          {/* Breadcrumbs */}
          <div className="px-8 pt-0 pb-1">
            <Breadcrumbs 
              items={[
                { label: 'Home', path: '/dashboard' },
                { label: 'Actas', path: '/actas' },
                { label: 'Acta de Nacimiento', path: '/actas/acta-nacimiento' }
              ]} 
            />
          </div>

          {/* Contenido Principal - Grid de 2 columnas */}
          <div className="px-8 pt-0 pb-8">
            <div className="grid grid-cols-5 gap-12">
              
              {/* COLUMNA IZQUIERDA - Preview del documento sofisticado */}
              <div className="col-span-2 space-y-6">
                
                {/* Preview del documento con efectos 3D */}
                <div className="group relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shadow-2xl">
                  
                  {/* Glow radial de fondo */}
                  <div className="absolute inset-0 bg-gradient-radial from-teal-500/20 via-teal-600/10 to-transparent blur-2xl scale-90 group-hover:scale-110 transition-all duration-700"></div>
                  
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-slate-900/30"></div>
                  
                  {/* Partículas elegantes */}
                  <div className="absolute top-12 left-8 w-1 h-1 bg-teal-400/40 rounded-full blur-[0.5px] opacity-50 group-hover:opacity-80 transition-opacity duration-1000" style={{animation: 'float 5s ease-in-out infinite'}}></div>
                  <div className="absolute top-20 right-12 w-1.5 h-1.5 bg-cyan-400/30 rounded-full blur-[0.5px] opacity-40 group-hover:opacity-70 transition-opacity duration-1000" style={{animation: 'float 6s ease-in-out infinite', animationDelay: '1s'}}></div>
                  <div className="absolute bottom-16 left-12 w-1 h-1 bg-teal-300/35 rounded-full blur-[0.5px] opacity-45 group-hover:opacity-75 transition-opacity duration-1000" style={{animation: 'float 5.5s ease-in-out infinite', animationDelay: '2s'}}></div>
                  
                  {/* Documento SVG con perspectiva 3D */}
                  <div className="relative transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700" style={{perspective: '1000px'}}>
                    
                    {/* Sombra dramática */}
                    <div className="absolute inset-0 translate-y-8 translate-x-2 blur-2xl bg-slate-900/60 rounded-lg scale-95 group-hover:blur-3xl group-hover:translate-y-12 transition-all duration-700"></div>
                    
                    {/* SVG del documento */}
                    <svg 
                      className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
                      viewBox="0 0 200 260" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Documento base */}
                      <rect width="200" height="260" fill="#fafafa" rx="4"/>
                      
                      {/* Sombra interna */}
                      <rect width="200" height="260" fill="url(#innerShadow)" rx="4"/>
                      
                      {/* Definiciones */}
                      <defs>
                        <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor: '#14b8a6', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#0d9488', stopOpacity: 1}} />
                        </linearGradient>
                        <linearGradient id="innerShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#000000', stopOpacity: 0.02}} />
                          <stop offset="100%" style={{stopColor: '#000000', stopOpacity: 0}} />
                        </linearGradient>
                      </defs>
                      
                      {/* Header */}
                      <rect width="200" height="60" fill="url(#headerGradient)" rx="4"/>
                      <text x="100" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" letterSpacing="1">ESTADOS UNIDOS</text>
                      <text x="100" y="37" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" letterSpacing="1">MEXICANOS</text>
                      <text x="100" y="52" textAnchor="middle" fill="white" fontSize="10" fontWeight="normal" letterSpacing="0.5">REGISTRO CIVIL</text>
                      
                      {/* Escudo */}
                      <circle cx="100" cy="95" r="28" fill="#14b8a6" opacity="0.15"/>
                      <circle cx="100" cy="95" r="23" fill="none" stroke="#14b8a6" strokeWidth="2.5" opacity="0.5"/>
                      <circle cx="100" cy="95" r="18" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.3"/>
                      
                      {/* Título del documento */}
                      <text x="100" y="135" textAnchor="middle" fill="#2d3748" fontSize="16" fontWeight="bold" opacity="0.8">ACTA DE</text>
                      <text x="100" y="152" textAnchor="middle" fill="#2d3748" fontSize="16" fontWeight="bold" opacity="0.8">NACIMIENTO</text>
                      
                      {/* Líneas de contenido */}
                      <rect x="25" y="175" width="150" height="5" fill="#2d3748" opacity="0.1" rx="1.5"/>
                      <rect x="25" y="186" width="130" height="5" fill="#2d3748" opacity="0.1" rx="1.5"/>
                      <rect x="25" y="197" width="140" height="5" fill="#2d3748" opacity="0.1" rx="1.5"/>
                      
                      <rect x="25" y="215" width="150" height="4" fill="#2d3748" opacity="0.08" rx="1.5"/>
                      <rect x="25" y="225" width="120" height="4" fill="#2d3748" opacity="0.08" rx="1.5"/>
                      <rect x="25" y="235" width="135" height="4" fill="#2d3748" opacity="0.08" rx="1.5"/>
                      
                      {/* Firma */}
                      <path d="M 50 250 Q 70 245, 90 250" stroke="#14b8a6" strokeWidth="2" fill="none" opacity="0.3"/>
                      <rect x="45" y="253" width="50" height="0.5" fill="#14b8a6" opacity="0.4"/>
                    </svg>
                    
                    {/* Brillo en bordes */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-teal-400/20 to-transparent rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  </div>
                  
                  {/* Badge flotante */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 bg-slate-800/70 backdrop-blur-md rounded-lg border border-teal-500/30 shadow-lg group-hover:border-teal-500/50 transition-all duration-500">
                    <Shield className="w-4 h-4 text-teal-400" strokeWidth={2.5} />
                    <span className="text-white text-xs font-semibold">Oficial</span>
                  </div>
                  
                  {/* Estilos de animación */}
                  <style jsx>{`
                    @keyframes float {
                      0%, 100% { transform: translateY(0px); }
                      50% { transform: translateY(-8px); }
                    }
                  `}</style>
                </div>

                {/* Tarjeta de información del servicio */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 space-y-5 border border-gray-200 shadow-sm">
                  
                  {/* Título y descripción */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{serviceData.name}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">{serviceData.description}</p>
                  </div>
                  
                  {/* Detalles del servicio */}
                  <div className="space-y-3 pt-4 border-t border-gray-300">
                    
                    {/* Precio */}
                    <div className="group/price flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all duration-300">
                      <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md group-hover/price:shadow-lg group-hover/price:scale-110 transition-all duration-300">
                        <DollarSign className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 font-medium">Precio</p>
                        <p className="text-2xl font-black text-gray-800">${serviceData.price.toFixed(2)}</p>
                      </div>
                      <div className="opacity-0 group-hover/price:opacity-100 transition-opacity duration-300">
                        <CheckCircle className="w-5 h-5 text-teal-500" strokeWidth={2.5} />
                      </div>
                    </div>
                    
                    {/* Tiempo de entrega */}
                    <div className="group/time flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                      <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover/time:shadow-lg group-hover/time:scale-110 transition-all duration-300">
                        <Clock className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 font-medium">Tiempo de entrega</p>
                        <p className="text-lg font-bold text-gray-800">{serviceData.deliveryTime}</p>
                      </div>
                      <div className="opacity-0 group-hover/time:opacity-100 transition-opacity duration-300">
                        <CheckCircle className="w-5 h-5 text-blue-500" strokeWidth={2.5} />
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
              </div>

              {/* COLUMNA DERECHA - Formulario de compra mejorado */}
              <div className="col-span-3">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  
                  {/* Header del formulario */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md">
                        <FileText className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </div>
                      <h1 className="text-3xl font-black text-gray-800">Solicitar Documento</h1>
                    </div>
                    <p className="text-gray-600 text-sm">Completa los datos para procesar tu solicitud de {serviceData.name}</p>
                  </div>

                  <div className="space-y-6">
                    
                    {/* Input CURP mejorado - CON BARRA DEBAJO */}
                    <div>
                      <label htmlFor="curp" className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                        <span>CURP</span>
                        <span className="text-red-500">*</span>
                        <span className="text-xs font-normal text-gray-500">(18 caracteres)</span>
                      </label>
                      
                      <div className="space-y-2">
                        {/* Input del CURP */}
                        <input
                          type="text"
                          id="curp"
                          value={curp}
                          onChange={(e) => {
                            setCurp(e.target.value.toUpperCase());
                            setError('');
                          }}
                          placeholder="ABCD123456HDFMNN09"
                          maxLength={18}
                          className={`w-full px-5 py-4 border-2 rounded-xl text-gray-800 text-lg font-semibold placeholder-gray-400 transition-all duration-300
                            ${error 
                              ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-100' 
                              : 'border-gray-300 bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-100'
                            } focus:outline-none`}
                        />
                        
                        {/* Barra de progreso DEBAJO del input (elemento separado) */}
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full transition-all duration-300 ${
                              curp.length === 18 && isValidCURP(curp) ? 'bg-green-500' : 'bg-teal-500'
                            }`}
                            style={{width: `${(curp.length / 18) * 100}%`}}
                          ></div>
                        </div>
                      </div>

                      {/* Mensajes de error o éxito */}
                      {error && (
                        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
                          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <p className="text-sm text-red-700 font-medium">{error}</p>
                        </div>
                      )}
                      
                      {curp.length === 18 && isValidCURP(curp) && !error && (
                        <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <p className="text-sm text-green-700 font-medium">CURP válido - Listo para continuar</p>
                        </div>
                      )}
                      
                      {curp.length > 0 && curp.length < 18 && !error && (
                        <p className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                          <span className="font-semibold">{curp.length}/18</span> caracteres ingresados
                        </p>
                      )}
                    </div>

                    {/* Resumen de compra mejorado */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-2 border-gray-200 shadow-inner">
                      <div className="flex items-center gap-2 mb-4">
                        <ShoppingCart className="w-5 h-5 text-gray-600" strokeWidth={2.5} />
                        <h3 className="text-sm font-bold text-gray-700">Resumen de compra</h3>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Servicio:</span>
                          <span className="font-semibold text-gray-800">{serviceData.name}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Tiempo de entrega:</span>
                          <span className="font-semibold text-gray-800 flex items-center gap-1">
                            <Clock className="w-4 h-4" strokeWidth={2.5} />
                            {serviceData.deliveryTime}
                          </span>
                        </div>
                        <div className="pt-3 mt-3 border-t-2 border-gray-300 flex justify-between items-center">
                          <span className="font-bold text-gray-800 text-lg">Total a pagar:</span>
                          <span className="text-3xl font-black bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                            ${serviceData.price.toFixed(2)}
                          </span>
                        </div>

                        {/* ✅ Información del saldo actual */}
                        <div className="pt-2 mt-2 border-t border-gray-300 flex justify-between items-center">
                          <span className="text-sm text-gray-600">Tu saldo actual:</span>
                          <span className={`text-sm font-semibold ${user.balance >= serviceData.price ? 'text-green-600' : 'text-red-600'}`}>
                            ${user.balance?.toFixed(2) || '0.00'}
                          </span>
                        </div>

                        {/* ✅ Saldo después de la compra */}
                        {user.balance >= serviceData.price && (
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Saldo después de la compra:</span>
                            <span className="font-semibold text-green-600">
                              ${(user.balance - serviceData.price).toFixed(2)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Botón de compra mejorado */}
                    <button
                      onClick={handlePurchase}
                      disabled={isLoading || curp.length !== 18 || !isValidCURP(curp) || user.balance < serviceData.price}
                      className={`w-full py-5 rounded-xl font-bold text-white text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg relative overflow-hidden
                        ${isLoading || curp.length !== 18 || !isValidCURP(curp) || user.balance < serviceData.price
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]'
                        }`}
                    >
                      {/* Glow effect en hover */}
                      {!isLoading && curp.length === 18 && isValidCURP(curp) && user.balance >= serviceData.price && (
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                      )}
                      
                      <span className="relative z-10 flex items-center gap-3">
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Procesando...
                          </>
                        ) : user.balance < serviceData.price ? (
                          <>
                            <AlertCircle className="w-6 h-6" strokeWidth={2.5} />
                            Saldo Insuficiente
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-6 h-6" strokeWidth={2.5} />
                            Comprar Ahora
                          </>
                        )}
                      </span>
                    </button>

                    {/* Mensaje de seguridad */}
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2">
                      <Shield className="w-4 h-4 text-teal-500" strokeWidth={2.5} />
                      <span>Tu información está protegida y será procesada de forma segura</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Modal de Éxito - Minimalista y Elegante */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fadeIn">
          {/* Backdrop con blur */}
          <div 
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={handleContinue}
          ></div>
          
          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform animate-scaleIn">
            
            {/* Icono de éxito simple */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
            </div>
            
            {/* Contenido del modal */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                ¡Compra Exitosa!
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Tu solicitud de <strong>Acta de Nacimiento</strong> ha sido procesada correctamente.<br/>
                Tu documento estará listo en <span className="font-bold text-teal-600">20 minutos</span>.
              </p>
              <p className="text-sm text-gray-500">
                Se descontaron <strong>${serviceData.price.toFixed(2)}</strong> de tu saldo.
              </p>
            </div>
            
            {/* Botón de continuar */}
            <button
              onClick={handleContinue}
              className="mt-6 w-full py-3.5 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Ver Mis Órdenes
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            
          </div>
          
          {/* Estilos de animación */}
          <style jsx>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            
            @keyframes scaleIn {
              from { 
                opacity: 0;
                transform: scale(0.95);
              }
              to { 
                opacity: 1;
                transform: scale(1);
              }
            }
            
            .animate-fadeIn {
              animation: fadeIn 0.2s ease-out;
            }
            
            .animate-scaleIn {
              animation: scaleIn 0.3s ease-out;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}