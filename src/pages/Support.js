import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import { MessageCircle, Headphones, Clock, HelpCircle, ChevronDown } from 'lucide-react';

export default function Support() {
  const [openFaq, setOpenFaq] = useState(null);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2221325766', '_blank', 'noopener,noreferrer');
  };

  const faqs = [
    {
      pregunta: '¿Cómo agrego saldo?',
      respuesta:
        'Ve a la sección "Agregar Saldo", transfiere a nuestra cuenta y registra tu clave de rastreo.',
    },
    {
      pregunta: '¿Qué hago si mi pedido tiene un error?',
      respuesta:
        'Verifica que los datos estén bien escritos y si están bien escritos y no aparece es que no está en el sistema, si algún otro servicio sí te lo otorga es que el documento es falso.',
    },
  ];

  const toggleFaq = (idx) => {
    setOpenFaq((curr) => (curr === idx ? null : idx));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="bg-white min-h-screen mt-7 px-8 py-8"
    >
            {/* Breadcrumbs */}
            <div className="mb-0">
              <Breadcrumbs
                items={[
                  { label: 'Home', path: '/dashboard' },
                  { label: 'Soporte', path: '/dashboard/support' },
                ]}
              />
            </div>

            {/* Título */}
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
              Soporte al Cliente
            </h1>

            {/* Grid de 2 columnas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* COLUMNA IZQUIERDA - Información */}
              <div className="space-y-6">
                {/* Card Información de Contacto */}
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Headphones className="w-6 h-6 text-teal-600" strokeWidth={2.5} />
                    <h2 className="text-xl font-semibold text-teal-900">
                      Información de Contacto
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-teal-900 mb-2">
                        Chatear en WhatsApp
                      </h3>
                      <p className="text-teal-800 font-medium">+52 22 2132 5766</p>
                    </div>

                    <div className="pt-3 border-t border-teal-200">
                      <h3 className="text-sm font-semibold text-teal-900 mb-2">
                        Horario de Atención
                      </h3>
                      <p className="text-sm text-teal-800">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                      <p className="text-sm text-teal-800">Sábados: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Card Tiempo de Respuesta */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-blue-600" strokeWidth={2.5} />
                    <h2 className="text-lg font-semibold text-blue-900">
                      Tiempo de Respuesta
                    </h2>
                  </div>
                  <p className="text-blue-800">
                    <span className="font-semibold">WhatsApp:</span> ~5-10 minutos
                  </p>
                </div>

                {/* Preguntas Frecuentes (ACORDEÓN) */}
                <div className="mt-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-gray-600" />
                    Preguntas Frecuentes
                  </h2>

                  <div className="space-y-3">
                    {faqs.map((faq, index) => {
                      const isOpen = openFaq === index;
                      return (
                        <div
                          key={index}
                          className="bg-gray-50 border border-gray-200 rounded-lg"
                        >
                          {/* Botón de pregunta */}
                          <button
                            type="button"
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between gap-4 p-4 text-left"
                            aria-expanded={isOpen}
                            aria-controls={`faq-panel-${index}`}
                          >
                            <span className="font-semibold text-gray-800">
                              {faq.pregunta}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {/* Respuesta (panel colapsable) */}
                          <div
                            id={`faq-panel-${index}`}
                            className={`grid transition-all duration-300 ease-in-out px-4 ${
                              isOpen
                                ? 'grid-rows-[1fr] opacity-100 pb-4'
                                : 'grid-rows-[0fr] opacity-0 pb-0'
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {faq.respuesta}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* COLUMNA DERECHA - Acción Principal WhatsApp */}
              <div>
                <div className="border border-gray-200 rounded-lg p-8 sticky top-24">
                  {/* Ícono grande de WhatsApp */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center">
                      <MessageCircle className="w-12 h-12 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Título y subtítulo */}
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      ¿Necesitas ayuda?
                    </h2>
                    <p className="text-gray-600">Chatea con nosotros en WhatsApp</p>
                  </div>

                  {/* Botón grande de WhatsApp */}
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="w-6 h-6" strokeWidth={2.5} />
                    Abrir WhatsApp
                  </button>

                  {/* Mensaje adicional */}
                  <p className="text-xs text-gray-500 text-center mt-4">
                    Te responderemos lo más pronto posible
                  </p>

                  {/* Separador */}
                  <div className="my-8 border-t border-gray-200" />

                  {/* Info adicional */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 text-sm">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 flex-shrink-0" />
                      <p className="text-gray-600">Respuestas rápidas y personalizadas</p>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 flex-shrink-0" />
                      <p className="text-gray-600">Soporte técnico disponible</p>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 flex-shrink-0" />
                      <p className="text-gray-600">Ayuda con pedidos y recargas</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* FIN COLUMNA DERECHA */}
            </div>
    </motion.div>
  );
}
