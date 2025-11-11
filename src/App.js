import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import OrderHistory from './pages/OrderHistory';
import AddBalance from './pages/AddBalance';
import Support from './pages/Support';

import ActasPage from './pages/ActasPage';
import RFCPage from './pages/RFCPage';
import CURPPage from './pages/CURPPage';
import CorreccionesPage from './pages/CorreccionesPage';
import ExtranjerosPage from './pages/ExtranjerosPage';

import ServiceDetail from './pages/service/ServiceDetail';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
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
        
        <Route path="/actas" element={
          <ProtectedRoute>
            <ActasPage />
          </ProtectedRoute>
        } />
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
        
        <Route path="/servicio/:serviceId" element={
          <ProtectedRoute>
            <ServiceDetail />
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
        <ScrollToTop />
        <AnimatedRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
