import React, { createContext, useState, useContext, useEffect } from 'react';
import { apiService } from '../services/api';

const AuthContext = createContext();

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verificar autenticación al cargar la app
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const token = rememberMe 
      ? localStorage.getItem('access_token')  // Persistente
      : sessionStorage.getItem('access_token'); // Sesión

    if (!token) {
      setLoading(false);
      setIsAuthenticated(false);
      return;
    }

    try {
      const userProfile = await apiService.getUserProfile();
      setUser(userProfile);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error verificando autenticación:', error);
      // Limpiar tokens inválidos de ambos almacenamientos
      localStorage.removeItem('access_token');
      sessionStorage.removeItem('access_token');
      localStorage.removeItem('rememberMe');
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const login = async (token, userData, rememberMe = false) => {
    // GUARDAR TOKEN SEGÚN "REMEMBER ME"
    if (rememberMe) {
      localStorage.setItem('access_token', token);
      localStorage.setItem('rememberMe', 'true');
      sessionStorage.removeItem('access_token'); // Limpiar sesión
    } else {
      sessionStorage.setItem('access_token', token);
      localStorage.setItem('rememberMe', 'false');
      localStorage.removeItem('access_token'); // Limpiar persistente
    }
    
    if (userData) {
      setUser(userData);
    } else {
      const userProfile = await apiService.getUserProfile();
      setUser(userProfile);
    }
    
    setIsAuthenticated(true);
  };

  const logout = () => {
    // LIMPIAR AMBOS ALMACENAMIENTOS
    localStorage.removeItem('access_token');
    sessionStorage.removeItem('access_token');
    localStorage.removeItem('rememberMe');
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateUser = (updatedUserData) => {
    setUser(prevUser => ({ ...prevUser, ...updatedUserData }));
  };

  // Valor que estará disponible en todos los componentes
  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated,
    updateUser,
    checkAuth
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};