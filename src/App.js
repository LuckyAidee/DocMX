import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

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
        
        {/* Dashboard y utilidades */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/balance" element={<AddBalance />} />
        <Route path="/support" element={<Support />} />
        
        {/* Páginas de categorías */}
        <Route path="/actas" element={<ActasPage />} />
        <Route path="/rfc" element={<RFCPage />} />
        <Route path="/curp" element={<CURPPage />} />
        <Route path="/correcciones" element={<CorreccionesPage />} />
        <Route path="/extranjeros" element={<ExtranjerosPage />} />
        
        {/* Páginas de servicios detalle */}
        <Route path="/actas/acta-nacimiento" element={<ActaNacimientoDetail />} />
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