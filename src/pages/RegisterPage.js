import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { apiService } from '../services/api';

export default function RegisterPage() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    address: '',
    aceptaTerminos: false
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (errors.submit) {
      setErrors(prev => ({ ...prev, submit: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Debe ingresar su Nombre Completo';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Debe ingresar su correo electrónico';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo válido';
    }

    if (!formData.password) {
      newErrors.password = 'Debe ingresar una contraseña';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Debes confirmar su contraseña';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    if(!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Debe ingresar un número telefónico';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Debe de ingresar una dirección válida';
    }

    if (!formData.aceptaTerminos) {
      newErrors.aceptaTerminos = 'Debe aceptar los términos y condiciones';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const response = await apiService.register({
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        address: formData.address
      });
      
      // Mostrar mensaje de éxito y redirigir al login
      alert(`¡Cuenta creada exitosamente!\n\nBienvenido ${response.user.fullName}.\nAhora puedes iniciar sesión con tus credenciales.`);
      navigate('/');
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error en registro:', error);
      }
      
      let errorMessage = error.message || 'Error al crear la cuenta. Inténtalo de nuevo.';
      const newErrors = {};

      if (error.message.includes('email') && error.message.includes('teléfono')) {
        errorMessage = 'Ya existe una cuenta con este email y número de teléfono';
        newErrors.email = 'Este email ya está registrado';
        newErrors.phoneNumber = 'Este teléfono ya está registrado';
      } else if (error.message.includes('email')) {
        errorMessage = 'Ya existe una cuenta con este email';
        newErrors.email = 'Este email ya está registrado';
      } else if (error.message.includes('teléfono')) {
        errorMessage = 'Ya existe una cuenta con este número de teléfono';
        newErrors.phoneNumber = 'Este teléfono ya está registrado';
      } else if (error.message.includes('obligatorio')) {
        errorMessage = 'Por favor completa todos los campos obligatorios';
      }

      newErrors.submit = errorMessage;
      setErrors(newErrors);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4"
    >
      {/* Logo y título - EXACTO AL LOGIN */}
      <div className="mb-10 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-2">
          {/* Icono geométrico */}
          <div className="w-10 h-10 bg-gray-800 relative">
            <div className="absolute inset-0 flex">
              <div className="w-1/2 h-full bg-gray-800"></div>
              <div className="w-1/2 h-full bg-gray-600"></div>
            </div>
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-gray-200 border-l-[20px] border-l-transparent"></div>
          </div>
          {/* Nombre */}
          <h1 className="text-3xl font-light text-gray-800 tracking-wide">
            Doc<span className="font-semibold">MX</span>
          </h1>
        </div>
        <p className="text-gray-500 text-xs tracking-wide">Plataforma de documentos mexicanos</p>
      </div>

      {/* Formulario de registro - SIN CARD BLANCO */}
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Campo Nombre Completo*/}
          <div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Nombre completo"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition ${
                errors.fullName
                  ? 'border-red-300 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-teal-500'
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
            )}
          </div>

          {/* Campo Email */}
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition ${
                errors.email
                  ? 'border-red-300 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-teal-500'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          {/*Campo Número Telefónico*/}
          <div>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Número de teléfono"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition ${
                errors.phoneNumber
                  ? 'border-red-300 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-teal-500'
              }`}
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-xs text-red-600">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Campo Contraseña */}
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition ${
                errors.password
                  ? 'border-red-300 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-teal-500'
              }`}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">{errors.password}</p>
            )}
          </div>

          {/* Campo Confirmar Contraseña */}
          <div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirmar contraseña"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition ${
                errors.confirmPassword
                  ? 'border-red-300 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-teal-500'
              }`}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Campo Dirección */}
          <div>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange} 
              placeholder="Dirección"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition ${
                errors.address
                  ? 'border-red-300 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-teal-500'
              }`}
            />
            {errors.address && (
              <p className="mt-1 text-xs text-red-600">{errors.address}</p>
            )}
          </div>

          {/* Checkbox Términos */}
          <div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="aceptaTerminos"
                name="aceptaTerminos"
                checked={formData.aceptaTerminos}
                onChange={handleChange}
                className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
              />
              <label htmlFor="aceptaTerminos" className="ml-2 text-sm text-gray-700">
                Acepto los{' '}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    // TODO: Abrir modal o navegar a página de términos y condiciones
                    console.log('Términos y condiciones - Pendiente de implementar');
                  }}
                  className="text-teal-500 hover:text-teal-600 font-medium transition underline"
                >
                  términos y condiciones
                </button>
              </label>
            </div>
            {errors.aceptaTerminos && (
              <p className="mt-1 text-xs text-red-600">{errors.aceptaTerminos}</p>
            )}
          </div>

          {/* MENSAJE DE ERROR GENERAL MEJORADO */}
          {errors.submit && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <strong>Error:</strong>
              </div>
              <p className="mt-1">{errors.submit}</p>
            </div>
          )}

          {/* Botón Crear Cuenta - EXACTO AL LOGIN */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 rounded-lg transition duration-200 flex items-center justify-center gap-2"
          >
            Crear Cuenta
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Enlaces adicionales - IGUAL AL LOGIN */}
          <div className="text-center space-y-3 pt-2">
            <div className="text-sm text-gray-600">
              ¿Ya tienes cuenta?{' '}
              <Link to="/" className="text-teal-500 hover:text-teal-600 font-medium transition">
                Inicia sesión
              </Link>
            </div>
          </div>
        </form>
      </div>

      {/* Footer - EXACTO AL LOGIN */}
      <div className="mt-12 text-center text-xs text-gray-400">
        <p>© 2025 DocMX. Todos los derechos reservados.</p>
      </div>
    </motion.div>
  );
}