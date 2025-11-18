import React, { createContext, useState, useContext, useEffect } from 'react';
import { apiService } from '../services/api';
import { normalizeUserInput } from '../utils/sanitize';

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
  const [loading, setLoading] = useState(true); // Iniciar en true para verificar sesión
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verificar sesión al montar el componente
  useEffect(() => {
    const checkSession = async () => {
      try {
        if (process.env.NODE_ENV === 'development') {
          console.log('🔍 [AuthContext] Verificando sesión existente...');
        }

        // Intentar obtener el perfil del usuario (verifica cookie de sesión)
        const userData = await apiService.getUserProfile();

        if (userData) {
          // Sesión válida encontrada
          await updateUserState(userData);

          if (process.env.NODE_ENV === 'development') {
            console.log('✅ [AuthContext] Sesión restaurada exitosamente');
          }
        }
      } catch (error) {
        // No hay sesión válida o expiró
        if (process.env.NODE_ENV === 'development') {
          console.log('❌ [AuthContext] No hay sesión válida');
        }
        handleAuthFailure();
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []); // Solo ejecutar al montar


  const updateUserState = async (userData) => {
    try {
      if (process.env.NODE_ENV === 'development') {
        console.log('🔐 [AuthContext] Actualizando estado con userData:', userData);
      }

      // Normalizar datos del usuario
      const validatedUser = {
        ...userData,
        fullName: normalizeUserInput.text(userData.fullName || ''),
        email: normalizeUserInput.email(userData.email || ''),
        phoneNumber: normalizeUserInput.phone(userData.phoneNumber || ''),
        address: normalizeUserInput.text(userData.address || '', 500)
      };

      setUser(validatedUser);
      setIsAuthenticated(true);
      setLoading(false);

      if (process.env.NODE_ENV === 'development') {
        console.log('[AuthContext] Estado actualizado exitosamente');
      }
      return validatedUser;
    } catch (error) {
      console.error('Error actualizando estado:', error);
      setLoading(false);
      throw error;
    }
  };

  const logout = async () => {
    try {
      // Llamar al backend para limpiar la cookie HttpOnly
      await apiService.logout();
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error en logout:', error);
      }
    } finally {
      // Limpiar estado local en cualquier caso
      handleAuthFailure();
    }
  };

  const handleAuthFailure = () => {
    setUser(null);
    setIsAuthenticated(false);
    setLoading(false);
  };

  const updateUser = (updatedUserData) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('🔄 [AuthContext] updateUser llamado con:', updatedUserData);
  }
  
  // Si updatedUserData es el objeto completo del usuario, REEMPLAZAR completamente
  if (updatedUserData && typeof updatedUserData === 'object') {
    // Normalizar los datos recibidos
    const validatedData = {
      ...updatedUserData,
      fullName: normalizeUserInput.text(updatedUserData.fullName || ''),
      email: normalizeUserInput.email(updatedUserData.email || ''),
      phoneNumber: normalizeUserInput.phone(updatedUserData.phoneNumber || ''),
      address: normalizeUserInput.text(updatedUserData.address || '', 500),
    };

    if (process.env.NODE_ENV === 'development') {
      console.log('✅ [AuthContext] Reemplazando usuario completo con:', validatedData);
    }
    setUser(validatedData); // ← REEMPLAZAR completamente, no merge
  } else {
    if (process.env.NODE_ENV === 'development') {
      console.warn('⚠️ [AuthContext] updateUser recibió datos inválidos:', updatedUserData);
    }
  }
};

  const value = {
    user,
    updateUserState,
    logout,
    loading,
    isAuthenticated,
    updateUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};