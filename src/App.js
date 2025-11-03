import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// IMPORTS CORREGIDOS
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import OrderHistory from './pages/OrderHistory';
import AddBalance from './pages/AddBalance';
import Support from './pages/Support';

// Páginas de categorías
import ActasPage from './pages/ActasPage';
import RFCPage from './pages/RFCPage';
import CURPPage from './pages/CURPPage';
import CorreccionesPage from './pages/CorreccionesPage';
import ExtranjerosPage from './pages/ExtranjerosPage';

// Páginas de servicios detalle
import ActaNacimientoDetail from './pages/service/ActaNacimientoDetail';
// TEMPORALMENTE comentados hasta que los creemos:
// import ActaMatrimonioDetail from './pages/service/ActaMatrimonioDetail';
// import ActaDefuncionDetail from './pages/service/ActaDefuncionDetail';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Autenticación */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* Rutas protegidas del dashboard */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/orders" element={
          <ProtectedRoute>
            <OrderHistory />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/add-balance" element={
          <ProtectedRoute>
            <AddBalance />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/support" element={
          <ProtectedRoute>
            <Support />
          </ProtectedRoute>
        } />
        
        {/* Páginas de categorías */}
        <Route path="/actas" element={
          <ProtectedRoute>
            <ActasPage />
          </ProtectedRoute>
        } />
        <Route path="/actas/acta-nacimiento" element={
          <ProtectedRoute>
            <ActaNacimientoDetail />
          </ProtectedRoute>
        } />
        
        {/* Categorias protegidas*/} 
        <Route path="/rfc" element={
          <ProtectedRoute>
            <RFCPage />
          </ProtectedRoute>
        } />
        <Route path="/curp" element={
          <ProtectedRoute>
            <CURPPage />
          </ProtectedRoute>
        } />
        <Route path="/correcciones" element={
          <ProtectedRoute>
            <CorreccionesPage />
          </ProtectedRoute>
        } />
        <Route path="/extranjeros" element={
          <ProtectedRoute>
            <ExtranjerosPage />
          </ProtectedRoute>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;