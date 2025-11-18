import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import { AlertTriangle, Info, AlertCircle, Copy, CheckCircle } from 'lucide-react';

export default function AddBalance() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    monto: '',
    claveRastreo: '',
    banco: ''
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ title: '', message: '' });

  // Datos bancarios
  const datosBancarios = {
    clabe: '722969014488872964',
    banco: 'Mercado Pago W',
    nombreCuenta: 'DocMX'
  };

  // Bancos disponibles
  const bancos = ['BBVA', 'Santander', 'Banorte', 'Citibanamex', 'HSBC', 'Scotiabank'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const copiarClabe = () => {
    navigator.clipboard.writeText(datosBancarios.clabe);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo válido';
    }

    if (!formData.monto) {
      newErrors.monto = 'El monto es obligatorio';
    } else {
      const monto = parseFloat(formData.monto);
      if (monto < 500) {
        newErrors.monto = 'El monto mínimo es $500 MXN';
      } else if (monto > 2500) {
        newErrors.monto = 'El monto máximo es $2,500 MXN';
      }
    }

    if (!formData.claveRastreo.trim()) {
      newErrors.claveRastreo = 'La clave de rastreo es obligatoria';
    }

    if (!formData.banco) {
      newErrors.banco = 'Selecciona tu banco';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // send the transfer to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log('Datos de la transferencia:', formData);

    // Map frontend field names to backend DTO names
    const payload = {
      // optional: name could be populated from user profile elsewhere
      email: formData.email,
      amount: Number(formData.monto),
      bank: formData.banco,
      trackingKey: formData.claveRastreo,
    };

    try {
      // Lazy-import apiService to avoid circular deps
      const { apiService } = await import('../services/api');
      await apiService.request('/transfers', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      setModalData({
        title: 'Solicitud enviada',
        message: 'Tu solicitud de recarga fue recibida. Tu saldo será agregado una vez que se verifique la transferencia. Te enviaremos un correo de confirmación cuando se procese.'
      });
      setShowModal(true);
    } catch (err) {
      console.error('Error creando transferencia:', err);
      setModalData({ title: 'Error', message: 'Error al enviar la solicitud: ' + (err.message || 'intenta de nuevo') });
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    if (modalData.title === 'Solicitud enviada') navigate('/dashboard');
  };

  return (
    <>
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
                  { label: 'Agregar Saldo', path: '/balance' }
                ]} 
              />
            </div>

            {/* Título */}
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
              Agregar Saldo
            </h1>

            {/* Grid de 2 columnas */}
            <div className="grid grid-cols-5 gap-8">
              
              {/* COLUMNA IZQUIERDA - Información (2/5) */}
              <div className="col-span-2 space-y-6">
                
                {/* Card de datos bancarios */}
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 sticky top-24">
                  <h2 className="text-lg font-semibold text-teal-900 mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    Datos para transferencia
                  </h2>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-white rounded-lg p-3 border border-teal-100">
                      <div>
                        <p className="text-xs text-gray-600 mb-1">CLABE</p>
                        <p className="text-lg font-mono font-semibold text-gray-800">{datosBancarios.clabe}</p>
                      </div>
                      <button
                        onClick={copiarClabe}
                        className="p-2 hover:bg-teal-100 rounded-lg transition-colors"
                        title="Copiar CLABE"
                      >
                        {copied ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <Copy className="w-5 h-5 text-teal-600" />
                        )}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <div className="bg-white rounded-lg p-3 border border-teal-100">
                        <p className="text-xs text-gray-600 mb-1">Banco</p>
                        <p className="font-semibold text-gray-800">{datosBancarios.banco}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3 border border-teal-100">
                        <p className="text-xs text-gray-600 mb-1">A nombre de</p>
                        <p className="font-semibold text-gray-800">{datosBancarios.nombreCuenta}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alertas importantes */}
                <div className="space-y-3">
                  {/* Alerta amarilla */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-yellow-800">
                      <span className="font-semibold">Importante:</span> NO transferir desde Mercado Pago W
                    </p>
                  </div>

                  {/* Alerta azul */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-800">
                      El saldo nunca caduca
                    </p>
                  </div>

                  {/* Alerta roja */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-red-800">
                      <p className="font-semibold mb-1">LÍMITES: $500 - $2,500 MXN</p>
                      <p>Fuera de este rango el saldo NO se agregará</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* COLUMNA DERECHA - Formulario (3/5) */}
              <div className="col-span-3">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">
                    Registrar Transferencia
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Tu correo
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="correo@ejemplo.com"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                          errors.email
                            ? 'border-red-300 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    {/* Monto */}
                    <div>
                      <label htmlFor="monto" className="block text-sm font-medium text-gray-700 mb-2">
                        Monto enviado
                      </label>
                      <input
                        type="number"
                        id="monto"
                        name="monto"
                        value={formData.monto}
                        onChange={handleChange}
                        placeholder="$500.00"
                        step="0.01"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                          errors.monto
                            ? 'border-red-300 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'
                        }`}
                      />
                      {errors.monto && (
                        <p className="mt-1 text-sm text-red-600">{errors.monto}</p>
                      )}
                    </div>

                    {/* Clave de rastreo */}
                    <div>
                      <label htmlFor="claveRastreo" className="block text-sm font-medium text-gray-700 mb-2">
                        Clave de rastreo
                      </label>
                      <input
                        type="text"
                        id="claveRastreo"
                        name="claveRastreo"
                        value={formData.claveRastreo}
                        onChange={handleChange}
                        placeholder="Ej: 1234567890"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                          errors.claveRastreo
                            ? 'border-red-300 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'
                        }`}
                      />
                      {errors.claveRastreo && (
                        <p className="mt-1 text-sm text-red-600">{errors.claveRastreo}</p>
                      )}
                    </div>

                    {/* Banco */}
                    <div>
                      <label htmlFor="banco" className="block text-sm font-medium text-gray-700 mb-2">
                        Desde qué banco transferiste
                      </label>
                      <select
                        id="banco"
                        name="banco"
                        value={formData.banco}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition ${
                          errors.banco
                            ? 'border-red-300 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'
                        }`}
                      >
                        <option value="">Selecciona tu banco</option>
                        {bancos.map((banco) => (
                          <option key={banco} value={banco}>{banco}</option>
                        ))}
                      </select>
                      {errors.banco && (
                        <p className="mt-1 text-sm text-red-600">{errors.banco}</p>
                      )}
                    </div>

                    {/* Botón submit */}
                    <button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 rounded-lg transition-colors duration-200 mt-6"
                    >
                      Agregar Saldo
                    </button>

                    {/* Nota de seguridad */}
                    <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1">
                      <Info className="w-3 h-3" />
                      Tu información está protegida y será procesada de forma segura
                    </p>
                  </form>
                </div>
              </div>

            </div>
    </motion.div>
    {showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-black/40" onClick={closeModal} />
        <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 z-20">
          <h3 className="text-xl font-bold mb-3">{modalData.title}</h3>
          <p className="text-gray-700 mb-6 whitespace-pre-line">{modalData.message}</p>
          <div className="flex justify-end">
            <button onClick={closeModal} className="px-4 py-2 bg-teal-600 text-white rounded-lg">Aceptar</button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
