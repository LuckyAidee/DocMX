import React, { createContext, useState, useContext } from 'react';
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
  const [loading, setLoading] = useState(false); // Cambiado a false
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ✅ ELIMINADO: useEffect que llama a checkAuth (no existe)
  // ✅ NO hay auto-check al iniciar

  const updateUserState = async (userData) => {
    try {
      console.log('🔐 [AuthContext] Actualizando estado con userData:', userData);

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
      setLoading(false); // ✅ Asegurar loading en false

      console.log('✅ [AuthContext] Estado actualizado exitosamente');
      return validatedUser;
    } catch (error) {
      console.error('Error actualizando estado:', error);
      setLoading(false); // ✅ Asegurar loading en false incluso en error
      throw error;
    }
  };

  const logout = async () => {
    try {
      // Llamar al backend para limpiar la cookie HttpOnly
      await apiService.logout();
    } catch (error) {
      console.error('Error en logout:', error);
    } finally {
      // Limpiar estado local en cualquier caso
      handleAuthFailure();
    }
  };

  const handleAuthFailure = () => {
    setUser(null);
    setIsAuthenticated(false);
    setLoading(false); // ✅ Asegurar loading en false
  };

  const updateUser = (updatedUserData) => {
    // Normalizar antes de actualizar
    const validatedData = {
      ...updatedUserData,
      fullName: normalizeUserInput.text(updatedUserData.fullName),
      email: normalizeUserInput.email(updatedUserData.email),
      phoneNumber: normalizeUserInput.phone(updatedUserData.phoneNumber),
      address: normalizeUserInput.text(updatedUserData.address, 500),
    };

    setUser(prevUser => ({ 
      ...prevUser, 
      ...validatedData 
    }));
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