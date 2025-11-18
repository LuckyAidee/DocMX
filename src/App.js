import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/layout/Layout';

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
import SearchResults from './pages/SearchResults';
import AllServices from './pages/AllServices';

import queryClient from './services/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Routes>
          {/* Rutas públicas sin Layout */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Rutas protegidas con Layout persistente */}
          <Route element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/orders" element={<OrderHistory />} />
            <Route path="/dashboard/add-balance" element={<AddBalance />} />
            <Route path="/dashboard/support" element={<Support />} />
            <Route path="/actas" element={<ActasPage />} />
            <Route path="/rfc" element={<RFCPage />} />
            <Route path="/curp" element={<CURPPage />} />
            <Route path="/correcciones" element={<CorreccionesPage />} />
            <Route path="/extranjeros" element={<ExtranjerosPage />} />
            <Route path="/servicio/:serviceId" element={<ServiceDetail />} />
            <Route path="/servicio/:serviceId" element={
              <ProtectedRoute>
                <ServiceDetail />
              </ProtectedRoute>
            } />
            <Route path="/servicios" element={<AllServices />} />
            <Route path="/search" element={<SearchResults />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
