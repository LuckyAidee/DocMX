import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messageType, setMessageType] = useState(''); // 'success', 'warning', 'error'
  const [messageText, setMessageText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessageType('');
    setMessageText('');

    // ============================================================================
    // TODO: BACKEND - IMPLEMENTAR LLAMADA AL API
    // ============================================================================
    //
    // Aquí debe ir la llamada al endpoint de recuperación de contraseña:
    //
    // Endpoint esperado: POST /auth/forgot-password
    // Body: { email: string }
    //
    // Respuestas esperadas del backend:
    //
    // 1. Caso ÉXITO (200):
    //    - Usuario existe y email enviado correctamente
    //    - Mostrar mensaje de éxito
    //    - Limpiar formulario
    //    - Redirigir a login después de 3 segundos
    //
    // 2. Caso ADVERTENCIA (429 - Too Many Requests):
    //    - Ya se envió un correo recientemente (rate limiting)
    //    - Mostrar mensaje de advertencia
    //    - No limpiar formulario
    //
    // 3. Caso ERROR (404 - Not Found):
    //    - No existe una cuenta con ese email
    //    - Mostrar mensaje de error
    //    - No limpiar formulario
    //
    // Ejemplo de implementación:
    //
    // try {
    //   const response = await fetch(`${API_URL}/auth/forgot-password`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email })
    //   });
    //
    //   if (response.ok) {
    //     // Caso 1: Éxito
    //     setMessageType('success');
    //     setMessageText('Correo enviado exitosamente. Revisa tu bandeja de entrada.');
    //     setEmail('');
    //     setTimeout(() => { window.location.href = '/'; }, 3000);
    //   } else if (response.status === 429) {
    //     // Caso 2: Rate limit
    //     setMessageType('warning');
    //     setMessageText('Ya se envió un correo de recuperación recientemente. Por favor revisa tu bandeja de entrada.');
    //   } else if (response.status === 404) {
    //     // Caso 3: Usuario no encontrado
    //     setMessageType('error');
    //     setMessageText('No se encontró una cuenta con ese correo electrónico.');
    //   } else {
    //     // Otros errores
    //     setMessageType('error');
    //     setMessageText('Error al procesar la solicitud. Intenta nuevamente.');
    //   }
    // } catch (err) {
    //   setMessageType('error');
    //   setMessageText('Error de conexión. Por favor intenta nuevamente.');
    // } finally {
    //   setIsLoading(false);
    // }
    //
    // ============================================================================
    // FIN TODO: BACKEND
    // ============================================================================

    // SIMULACIÓN TEMPORAL - Eliminar cuando se implemente el backend
    // Simula aleatoriamente los 3 casos para demostración
    setTimeout(() => {
      if (email && email.includes('@')) {
        const random = Math.random();

        if (random < 0.33) {
          // Caso 1: Éxito
          setMessageType('success');
          setMessageText('Correo enviado exitosamente. Revisa tu bandeja de entrada.');
          setEmail('');

          // Redirigir a login después de 2 segundos
          setTimeout(() => {
            window.location.href = '/';
          }, 2000);
        } else if (random < 0.66) {
          // Caso 2: Ya enviado
          setMessageType('warning');
          setMessageText('Ya se envió un correo de recuperación recientemente. Por favor revisa tu bandeja de entrada.');
        } else {
          // Caso 3: No registrado
          setMessageType('error');
          setMessageText('No se encontró una cuenta con ese correo electrónico.');
        }
      } else {
        setMessageType('error');
        setMessageText('Por favor ingresa un correo electrónico válido.');
      }
      setIsLoading(false);
    }, 1500); // Simula delay de red
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 min-h-screen flex flex-col justify-center items-center px-4"
    >
      {/* Logo y título */}
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

      {/* Título de la página */}
      <div className="w-full max-w-md mb-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">¿Olvidaste tu contraseña?</h2>
        <p className="text-sm text-gray-600">
          Ingresa tu dirección de correo electrónico. Te enviaremos un enlace con una contraseña temporal.
        </p>
      </div>

      {/* Formulario de recuperación */}
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="space-y-5">

          {/* Campo Email */}
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
            />
          </div>

          {/* Mensaje de éxito */}
          {messageType === 'success' && (
            <div className="bg-teal-50 border border-teal-200 text-teal-700 px-4 py-3 rounded-lg text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{messageText}</span>
              </div>
            </div>
          )}

          {/* Mensaje de advertencia */}
          {messageType === 'warning' && (
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-lg text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{messageText}</span>
              </div>
            </div>
          )}

          {/* Mensaje de error */}
          {messageType === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{messageText}</span>
              </div>
            </div>
          )}

          {/* Botón de recuperar contraseña */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full font-medium py-3 rounded-lg transition duration-200 flex items-center justify-center gap-2 ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-teal-500 hover:bg-teal-600 text-white'
            }`}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Enviando...
              </>
            ) : (
              <>
                Recuperar contraseña
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>

          {/* Enlaces adicionales */}
          <div className="text-center space-y-3 pt-2">
            <div className="text-sm text-gray-600">
              ¿Recordaste tu contraseña?
              <Link to="/" className="text-teal-500 hover:text-teal-600 font-medium transition ml-1">
                Inicia sesión
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              ¿No tienes cuenta?
              <Link to="/register" className="text-teal-500 hover:text-teal-600 font-medium transition ml-1">
                Crea una
              </Link>
            </div>
          </div>
        </div>
      </form>

      {/* Footer */}
      <div className="mt-12 text-center text-xs text-gray-400">
        <p>&copy; 2025 DocMX. Todos los derechos reservados.</p>
      </div>
    </motion.div>
  );
}
