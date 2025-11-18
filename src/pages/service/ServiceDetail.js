import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumbs from '../../components/shared/Breadcrumbs';
import { Clock, DollarSign, FileText, ShoppingCart, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { apiService } from '../../services/api';
import { servicesConfig } from '../../config/services.config';
import { DocumentSVGs } from '../../pages/service/DocumentSVGs';
import ServiceForms from '../../pages/service/ServiceForms';
import { queryClient } from '../../services/queryClient';

export default function ServiceDetail() {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState({ curp: '', rfc: '', idcif: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const servicio = servicesConfig[serviceId];

  if (!servicio) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Servicio no encontrado</h1>
          <button
            onClick={() => navigate('/dashboard')}
            className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            Volver al Dashboard
          </button>
        </div>
      </div>
    );
  }

  const handlePurchase = async () => {
    if (servicio.esEspecializado) {
      if (user.balance < servicio.precio) {
        setError('Saldo insuficiente. Por favor recarga tu cuenta.');
        return;
      }
    } else {
      if (servicio.camposFormulario.includes('curp')) {
        if (!formData.curp.trim()) {
          setError('Por favor ingresa tu CURP');
          return;
        }
        if (formData.curp.length !== 18) {
          setError('El CURP debe tener 18 caracteres');
          return;
        }
      }

      if (servicio.camposFormulario.includes('rfc')) {
        if (!formData.rfc.trim()) {
          setError('Por favor ingresa tu RFC');
          return;
        }
      }

      if (servicio.camposFormulario.includes('idcif')) {
        if (!formData.idcif.trim()) {
          setError('Por favor ingresa tu IdCIF');
          return;
        }
      }

      if (user.balance < servicio.precio) {
        setError('Saldo insuficiente. Por favor recarga tu cuenta.');
        return;
      }
    }

    setError('');
    setIsLoading(true);

    try {
      const orderData = {
        documentType: servicio.id,
        pricePaid: servicio.precio,
        details: {
          ...formData,
          service: servicio.nombre,
          deliveryTime: servicio.tiempoEntrega,
          requestedAt: new Date().toISOString()
        }
      };

      await apiService.createOrder(orderData);

      // Invalidate orders so OrderHistory refetches the latest after purchase
      try {
        queryClient.invalidateQueries({ queryKey: ['orders'], exact: false });
      } catch (e) {
        console.warn('Error invalidating orders after purchase', e);
      }

      try {
        // Use apiService to fetch the current profile from the backend
        // instead of a relative fetch to `/api/...` which hits the dev server
        // (and returns HTML) causing a JSON parse error.
        const updatedUser = await apiService.getUserProfile();
        if (updatedUser) {
          updateUser(updatedUser);
          console.log('✅ Usuario actualizado correctamente:', updatedUser);
        } else {
          throw new Error('Perfil vacío recibido');
        }
      } catch (userError) {
        console.error('❌ Error al actualizar usuario:', userError);
        // Fallback: actualizar solo el balance localmente
        const newBalance = (user && user.balance) ? user.balance - servicio.precio : undefined;
        if (newBalance !== undefined) updateUser({ ...user, balance: newBalance });
      }

      setShowSuccessModal(true);

    } catch (err) {
      console.error('Error creando orden:', err);
      setError(err.message || 'Error al procesar la compra. Intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleContinue = () => {
    setShowSuccessModal(false);
    navigate('/dashboard/orders');
  };

  const isValidCURP = (curp) => {
    if (curp.length !== 18) return false;
    const curpRegex = /^[A-Z]{4}\d{6}[A-Z]{6}[A-Z0-9]{2}$/;
    return curpRegex.test(curp);
  };

  const DocumentSVG = DocumentSVGs[servicio.svgKey];
  const canPurchase = servicio.esEspecializado 
    ? user.balance >= servicio.precio
    : (servicio.camposFormulario.includes('curp') 
        ? formData.curp.length === 18 && isValidCURP(formData.curp) && user.balance >= servicio.precio
        : user.balance >= servicio.precio);

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 20, g: 184, b: 166 };
  };

  const rgb = hexToRgb(servicio.colorAccent);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="bg-white min-h-screen mt-16"
    >
          <div className="px-8 pt-0 pb-1">
            <Breadcrumbs items={servicio.breadcrumbs} />
          </div>

          <div className="px-8 pt-0 pb-8">
            <div className="grid grid-cols-5 gap-12">

              <div className="col-span-2 space-y-6 sticky top-24 self-start">

                <div className="group relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shadow-2xl">
                  
                  <div 
                    className="absolute inset-0 blur-2xl scale-90 group-hover:scale-110 transition-all duration-700"
                    style={{
                      background: `radial-gradient(circle, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2) 0%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1) 50%, transparent 100%)`
                    }}
                  ></div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-slate-900/30"></div>
                  
                  <div 
                    className="absolute top-12 left-8 w-1 h-1 rounded-full blur-[0.5px] opacity-50 group-hover:opacity-80 transition-opacity duration-1000" 
                    style={{
                      backgroundColor: servicio.colorAccent,
                      animation: 'float 5s ease-in-out infinite'
                    }}
                  ></div>
                  <div 
                    className="absolute top-20 right-12 w-1.5 h-1.5 rounded-full blur-[0.5px] opacity-40 group-hover:opacity-70 transition-opacity duration-1000" 
                    style={{
                      backgroundColor: servicio.colorAccent,
                      animation: 'float 6s ease-in-out infinite',
                      animationDelay: '1s'
                    }}
                  ></div>
                  <div 
                    className="absolute bottom-16 left-12 w-1 h-1 rounded-full blur-[0.5px] opacity-45 group-hover:opacity-75 transition-opacity duration-1000" 
                    style={{
                      backgroundColor: servicio.colorAccent,
                      animation: 'float 5.5s ease-in-out infinite',
                      animationDelay: '2s'
                    }}
                  ></div>
                  
                  <div className="relative transform group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700" style={{perspective: '1000px'}}>
                    
                    <div className="absolute inset-0 translate-y-8 translate-x-2 blur-2xl bg-slate-900/60 rounded-lg scale-95 group-hover:blur-3xl group-hover:translate-y-12 transition-all duration-700"></div>
                    
                    <DocumentSVG />
                    
                    <div 
                      className="absolute -inset-2 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background: `linear-gradient(to bottom right, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2), transparent)`
                      }}
                    ></div>
                  </div>
                  
                  <div 
                    className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 bg-slate-800/70 backdrop-blur-md rounded-lg shadow-lg group-hover:border-opacity-50 transition-all duration-500"
                    style={{
                      border: `1px solid rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`
                    }}
                  >
                    <Shield className="w-4 h-4" style={{color: servicio.colorAccent}} strokeWidth={2.5} />
                    <span className="text-white text-xs font-semibold">Oficial</span>
                  </div>
                  
                  <style jsx>{`
                    @keyframes float {
                      0%, 100% { transform: translateY(0px); }
                      50% { transform: translateY(-8px); }
                    }
                  `}</style>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 space-y-5 border border-gray-200 shadow-sm">
                  
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{servicio.nombre}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">{servicio.descripcion}</p>
                  </div>
                  
                  <div className="space-y-3 pt-4 border-t border-gray-300">
                    
                    <div 
                      className="group/price flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300"
                      style={{
                        borderColor: 'rgb(229, 231, 235)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = servicio.colorAccent}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgb(229, 231, 235)'}
                    >
                      <div 
                        className="w-11 h-11 rounded-lg flex items-center justify-center shadow-md group-hover/price:shadow-lg group-hover/price:scale-110 transition-all duration-300"
                        style={{
                          background: `linear-gradient(to bottom right, ${servicio.colorAccent}, ${servicio.colorAccent}dd)`
                        }}
                      >
                        <DollarSign className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 font-medium">Precio</p>
                        <p className="text-2xl font-black text-gray-800">${servicio.precio.toFixed(2)}</p>
                      </div>
                      <div className="opacity-0 group-hover/price:opacity-100 transition-opacity duration-300">
                        <CheckCircle className="w-5 h-5" style={{color: servicio.colorAccent}} strokeWidth={2.5} />
                      </div>
                    </div>
                    
                    <div className="group/time flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                      <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover/time:shadow-lg group-hover/time:scale-110 transition-all duration-300">
                        <Clock className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-500 font-medium">Tiempo de entrega</p>
                        <p className="text-lg font-bold text-gray-800">{servicio.tiempoEntrega}</p>
                      </div>
                      <div className="opacity-0 group-hover/time:opacity-100 transition-opacity duration-300">
                        <CheckCircle className="w-5 h-5 text-blue-500" strokeWidth={2.5} />
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
              </div>

              <div className="col-span-3">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md"
                        style={{
                          background: `linear-gradient(to bottom right, ${servicio.colorAccent}, ${servicio.colorAccent}dd)`
                        }}
                      >
                        <FileText className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </div>
                      <h1 className="text-3xl font-black text-gray-800">Solicitar Documento</h1>
                    </div>
                    <p className="text-gray-600 text-sm">Completa los datos para procesar tu solicitud de {servicio.nombre}</p>
                  </div>

                  <div className="space-y-6">
                    
                    <ServiceForms 
                      camposFormulario={servicio.camposFormulario}
                      formData={formData}
                      setFormData={(data) => {
                        setFormData(data);
                        setError('');
                      }}
                      error={error}
                      esEspecializado={servicio.esEspecializado}
                      mensajeEspecializado={servicio.mensajeEspecializado}
                    />

                    {error && (
                      <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <p className="text-sm text-red-700 font-medium">{error}</p>
                      </div>
                    )}
                    
                    {!servicio.esEspecializado && servicio.camposFormulario.includes('curp') && formData.curp.length === 18 && isValidCURP(formData.curp) && !error && (
                      <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <p className="text-sm text-green-700 font-medium">CURP válido - Listo para continuar</p>
                      </div>
                    )}

                    {!servicio.esEspecializado && servicio.camposFormulario.includes('curp') && formData.curp.length > 0 && formData.curp.length < 18 && !error && (
                      <p className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                        <span className="font-semibold">{formData.curp.length}/18</span> caracteres ingresados
                      </p>
                    )}

                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-2 border-gray-200 shadow-inner">
                      <div className="flex items-center gap-2 mb-4">
                        <ShoppingCart className="w-5 h-5 text-gray-600" strokeWidth={2.5} />
                        <h3 className="text-sm font-bold text-gray-700">Resumen de compra</h3>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Servicio:</span>
                          <span className="font-semibold text-gray-800">{servicio.nombre}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Tiempo de entrega:</span>
                          <span className="font-semibold text-gray-800 flex items-center gap-1">
                            <Clock className="w-4 h-4" strokeWidth={2.5} />
                            {servicio.tiempoEntrega}
                          </span>
                        </div>
                        <div className="pt-3 mt-3 border-t-2 border-gray-300 flex justify-between items-center">
                          <span className="font-bold text-gray-800 text-lg">Total a pagar:</span>
                          <span 
                            className="text-3xl font-black"
                            style={{
                              background: `linear-gradient(to right, ${servicio.colorAccent}, ${servicio.colorAccent}dd)`,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}
                          >
                            ${servicio.precio.toFixed(2)}
                          </span>
                        </div>

                        <div className="pt-2 mt-2 border-t border-gray-300 flex justify-between items-center">
                          <span className="text-sm text-gray-600">Tu saldo actual:</span>
                          <span className={`text-sm font-semibold ${user.balance >= servicio.precio ? 'text-green-600' : 'text-red-600'}`}>
                            ${user.balance?.toFixed(2) || '0.00'}
                          </span>
                        </div>

                        {user.balance >= servicio.precio && (
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Saldo después de la compra:</span>
                            <span className="font-semibold text-green-600">
                              ${(user.balance - servicio.precio).toFixed(2)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={handlePurchase}
                      disabled={isLoading || !canPurchase}
                      className={`w-full py-5 rounded-xl font-bold text-white text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg relative overflow-hidden
                        ${isLoading || !canPurchase
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]'
                        }`}
                      style={{
                        background: isLoading || !canPurchase 
                          ? '#9ca3af' 
                          : `linear-gradient(to right, ${servicio.colorAccent}, ${servicio.colorAccent}dd)`
                      }}
                      onMouseEnter={(e) => {
                        if (!isLoading && canPurchase) {
                          e.currentTarget.style.background = `linear-gradient(to right, ${servicio.colorAccent}dd, ${servicio.colorAccent}cc)`;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isLoading && canPurchase) {
                          e.currentTarget.style.background = `linear-gradient(to right, ${servicio.colorAccent}, ${servicio.colorAccent}dd)`;
                        }
                      }}
                    >
                      {!isLoading && canPurchase && (
                        <div 
                          className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300 blur-xl"
                          style={{
                            background: `linear-gradient(to right, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.4), rgba(${rgb.r + 40}, ${rgb.g + 40}, ${rgb.b + 40}, 0.4))`
                          }}
                        ></div>
                      )}
                      
                      <span className="relative z-10 flex items-center gap-3">
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Procesando...
                          </>
                        ) : user.balance < servicio.precio ? (
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

                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2">
                      <Shield className="w-4 h-4" style={{color: servicio.colorAccent}} strokeWidth={2.5} />
                      <span>Tu información está protegida y será procesada de forma segura</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fadeIn">
          <div 
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={handleContinue}
          ></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform animate-scaleIn">
            
            <div className="flex justify-center mb-6">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  background: `linear-gradient(to bottom right, ${servicio.colorAccent}, ${servicio.colorAccent}dd)`
                }}
              >
                <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                ¡Compra Exitosa!
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Tu solicitud de <strong>{servicio.nombre}</strong> ha sido procesada correctamente.<br/>
                Tu documento estará listo en <span className="font-bold" style={{color: servicio.colorAccent}}>{servicio.tiempoEntrega}</span>.
              </p>
              <p className="text-sm text-gray-500">
                Se descontaron <strong>${servicio.precio.toFixed(2)}</strong> de tu saldo.
              </p>
            </div>
            
            <button
              onClick={handleContinue}
              className="mt-6 w-full py-3.5 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              style={{
                background: `linear-gradient(to right, ${servicio.colorAccent}, ${servicio.colorAccent}dd)`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `linear-gradient(to right, ${servicio.colorAccent}dd, ${servicio.colorAccent}cc)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `linear-gradient(to right, ${servicio.colorAccent}, ${servicio.colorAccent}dd)`;
              }}
            >
              Ver Mis Órdenes
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            
          </div>
          
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
    </motion.div>
  );
}