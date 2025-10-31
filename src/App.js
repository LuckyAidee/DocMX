import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoginPage from './components/auth/LoginPage';
import Dashboard from './components/dashboard/Dashboard';
import ActasPage from './pages/ActasPage';
import ActaNacimientoDetail from './pages/service/ActaNacimientoDetail';
import RegisterPage from './pages/RegisterPage';
import OrderHistory from './pages/OrderHistory';
import AddBalance from './pages/AddBalance';
import Support from './pages/Support';

function AnimatedRoutes() {
  const location = useLocation();
 
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/orders" element={<OrderHistory />} />
        <Route path="/dashboard/add-balance" element={<AddBalance />} />
        <Route path="/dashboard/support" element={<Support />} />
        
        {/* Rutas de categorías */}
        <Route path="/actas" element={<ActasPage />} />
        <Route path="/actas/acta-nacimiento" element={<ActaNacimientoDetail />} />
        <Route path="/rfc" element={<Dashboard />} />
        <Route path="/curp" element={<Dashboard />} />
        <Route path="/correcciones" element={<Dashboard />} />
        <Route path="/extranjeros" element={<Dashboard />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;