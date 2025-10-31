import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function RegisterPage() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
    direccion: '',
    aceptaTerminos: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo válido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Debes confirmar tu contraseña';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    if (!formData.direccion.trim()) {
      newErrors.direccion = 'La dirección es obligatoria';
    }

    if (!formData.aceptaTerminos) {
      newErrors.aceptaTerminos = 'Debes aceptar los términos y condiciones';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Datos del registro:', formData);
      alert('¡Cuenta creada exitosamente!\n\nPuedes iniciar sesión ahora.');
      navigate('/');
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
          
          {/* Campo Nombre */}
          <div>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre completo"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition ${
                errors.nombre
                  ? 'border-red-300 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-teal-500'
              }`}
            />
            {errors.nombre && (
              <p className="mt-1 text-xs text-red-600">{errors.nombre}</p>
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
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              placeholder="Dirección"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition ${
                errors.direccion
                  ? 'border-red-300 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-teal-500'
              }`}
            />
            {errors.direccion && (
              <p className="mt-1 text-xs text-red-600">{errors.direccion}</p>
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
                <a href="#" className="text-teal-500 hover:text-teal-600 font-medium transition">
                  términos y condiciones
                </a>
              </label>
            </div>
            {errors.aceptaTerminos && (
              <p className="mt-1 text-xs text-red-600">{errors.aceptaTerminos}</p>
            )}
          </div>

          {/* Botón Crear Cuenta - EXACTO AL LOGIN */}
          <button
            type="submit"
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