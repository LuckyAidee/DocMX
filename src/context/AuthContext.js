import React, { createContext, useState, useContext, useEffect } from 'react';
import { apiService } from '../services/api';
import { normalizeUserInput } from '../utils/sanitize';
import { queryClient } from '../services/queryClient';

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

      // Invalidate orders so components like OrderHistory refetch for the new user
      try {
        queryClient.invalidateQueries({ queryKey: ['orders'], exact: false });
      } catch (e) {
        if (process.env.NODE_ENV === 'development') console.warn('Error invalidating orders query', e);
      }

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
      // Invalidate orders and other user-specific queries so UI clears
      try {
        queryClient.invalidateQueries({ queryKey: ['orders'], exact: false });
        queryClient.clear();
      } catch (e) {
        if (process.env.NODE_ENV === 'development') console.warn('Error invalidating queries on logout', e);
      }
    }
  };

  // On mount, try restoring session/profile (useful when switching users or after refresh)
  useEffect(() => {
    let mounted = true;
    const restore = async () => {
      setLoading(true);
      try {
        const profile = await apiService.getUserProfile();
        // apiService.getUserProfile may return null when there is no valid session (e.g. 401)
        if (profile && mounted) {
          await updateUserState(profile);
        } else if (mounted) {
          // No hay sesión: limpiar estado sin lanzar excepciones
          handleAuthFailure();
        }
      } catch (e) {
        if (process.env.NODE_ENV === 'development') console.log('[AuthContext] No session to restore', e);
        handleAuthFailure();
      } finally {
        if (mounted) setLoading(false);
      }
    };
    restore();
    return () => { mounted = false; };
  }, []);

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