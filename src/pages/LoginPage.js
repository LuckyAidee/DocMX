import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Login attempt:', { email, password, rememberMe });
    
    // TODO: Aquí irá la lógica de autenticación con el backend
    // Por ahora, simplemente redirige al dashboard
    navigate('/dashboard');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4"
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

      {/* Formulario de login */}
      <div className="w-full max-w-md">
        <div className="space-y-5">
          {/* Campo Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
            />
          </div>

          {/* Campo Password */}
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleLogin();
                }
              }}
            />
          </div>

          {/* Remember me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
              Recordarme
            </label>
          </div>

          {/* Botón de login */}
          <button
            onClick={handleLogin}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 rounded-lg transition duration-200 flex items-center justify-center gap-2"
          >
            Iniciar sesión
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Enlaces adicionales */}
          <div className="text-center space-y-3 pt-2">
            <div>
              <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="text-sm text-gray-600">
              ¿No tienes cuenta?{' '}
              <Link to="/register" className="text-teal-500 hover:text-teal-600 font-medium transition">
                Crea una
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-xs text-gray-400">
        <p>© 2025 DocMX. Todos los derechos reservados.</p>
      </div>
    </motion.div>
  );
}