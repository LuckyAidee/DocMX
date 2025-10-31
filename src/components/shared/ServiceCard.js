import React from 'react';
import { ArrowRight, Clock, DollarSign } from 'lucide-react';
import './ServiceCard.css';

// ========================================
// COMPONENTE DE DOCUMENTOS SVG
// ========================================
const DocumentSVG = ({ type, name }) => {
  const documents = {
    // =====================================
    // ACTAS - Sección de Actas de Registro Civil
    // =====================================
    'acta-nacimiento': (
      <svg className="w-full h-full object-contain drop-shadow-2xl opacity-40 group-hover:opacity-90 transition-all duration-700 rotate-[-8deg] group-hover:rotate-0" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="260" fill="#f0f0f0" rx="4"/>
        <rect width="200" height="50" fill="#2d5016" rx="4"/>
        <text x="100" y="25" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">ACTA DE</text>
        <text x="100" y="42" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">NACIMIENTO</text>
        <circle cx="100" cy="90" r="25" fill="#2d5016" opacity="0.3"/>
        <rect x="20" y="130" width="160" height="8" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="145" width="140" height="8" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="160" width="120" height="8" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="185" width="160" height="8" fill="#333" opacity="0.15" rx="2"/>
        <rect x="20" y="200" width="140" height="8" fill="#333" opacity="0.15" rx="2"/>
        <path d="M 40 230 Q 60 225, 80 230 T 120 230" stroke="#333" strokeWidth="2" fill="none" opacity="0.3"/>
      </svg>
    ),

    'acta-matrimonio': (
      <svg className="w-full h-full object-contain drop-shadow-2xl opacity-40 group-hover:opacity-90 transition-all duration-700 rotate-[-8deg] group-hover:rotate-0" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="260" fill="#fff8f0" rx="4"/>
        <rect width="200" height="55" fill="#8b4513" rx="4"/>
        <text x="100" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">ACTA DE</text>
        <text x="100" y="45" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">MATRIMONIO</text>
        <circle cx="70" cy="95" r="22" fill="#8b4513" opacity="0.2"/>
        <circle cx="130" cy="95" r="22" fill="#8b4513" opacity="0.2"/>
        <path d="M 90 95 L 110 95" stroke="#8b4513" strokeWidth="3" opacity="0.3"/>
        <rect x="20" y="130" width="160" height="8" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="145" width="140" height="8" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="165" width="160" height="8" fill="#333" opacity="0.15" rx="2"/>
        <rect x="20" y="180" width="140" height="8" fill="#333" opacity="0.15" rx="2"/>
        <path d="M 40 220 Q 60 215, 80 220" stroke="#333" strokeWidth="2" fill="none" opacity="0.3"/>
        <path d="M 120 220 Q 140 215, 160 220" stroke="#333" strokeWidth="2" fill="none" opacity="0.3"/>
      </svg>
    ),

    'acta-defuncion': (
      <svg className="w-full h-full object-contain drop-shadow-2xl opacity-40 group-hover:opacity-90 transition-all duration-700 rotate-[-8deg] group-hover:rotate-0" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="260" fill="#f5f5f5" rx="4"/>
        <rect width="200" height="50" fill="#424242" rx="4"/>
        <text x="100" y="25" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">ACTA DE</text>
        <text x="100" y="42" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">DEFUNCIÓN</text>
        <circle cx="100" cy="90" r="25" fill="#424242" opacity="0.2"/>
        <path d="M 100 70 L 100 110" stroke="#424242" strokeWidth="3" opacity="0.3"/>
        <path d="M 80 90 L 120 90" stroke="#424242" strokeWidth="3" opacity="0.3"/>
        <rect x="20" y="130" width="160" height="8" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="145" width="140" height="8" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="160" width="120" height="8" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="185" width="160" height="8" fill="#333" opacity="0.15" rx="2"/>
        <rect x="20" y="200" width="140" height="8" fill="#333" opacity="0.15" rx="2"/>
        <path d="M 40 230 Q 60 225, 80 230 T 120 230" stroke="#333" strokeWidth="2" fill="none" opacity="0.3"/>
      </svg>
    ),

    // =====================================
    // CSF - Sección de Servicios SAT
    // =====================================
    'rfc': (
      <svg className="w-full h-full object-contain drop-shadow-2xl opacity-40 group-hover:opacity-90 transition-all duration-700 rotate-[-8deg] group-hover:rotate-0" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="260" fill="#f5f5f5" rx="4"/>
        <rect width="200" height="60" fill="#8b4513" rx="4"/>
        <text x="100" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">REGISTRO FEDERAL</text>
        <text x="100" y="45" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">RFC</text>
        <circle cx="100" cy="100" r="30" fill="#8b4513" opacity="0.2"/>
        <rect x="20" y="140" width="160" height="10" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="160" width="140" height="10" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="180" width="120" height="10" fill="#333" opacity="0.2" rx="2"/>
        <rect x="30" y="210" width="140" height="30" fill="#8b4513" opacity="0.1" rx="4"/>
        <text x="100" y="230" textAnchor="middle" fill="#333" fontSize="14" fontWeight="bold">ABCD123456XYZ</text>
      </svg>
    ),

    'csf': (
      <svg className="w-full h-full object-contain drop-shadow-2xl opacity-40 group-hover:opacity-90 transition-all duration-700 rotate-[-8deg] group-hover:rotate-0" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="260" fill="#f0f8ff" rx="4"/>
        <rect width="200" height="55" fill="#0d47a1" rx="4"/>
        <text x="100" y="22" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">CONSTANCIA DE</text>
        <text x="100" y="38" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">SITUACIÓN FISCAL</text>
        <circle cx="100" cy="80" r="20" fill="#0d47a1" opacity="0.2"/>
        <text x="100" y="87" textAnchor="middle" fill="#0d47a1" fontSize="16" fontWeight="bold">SAT</text>
        <rect x="20" y="115" width="160" height="8" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="130" width="140" height="8" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="145" width="120" height="8" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="165" width="160" height="8" fill="#333" opacity="0.15" rx="2"/>
        <rect x="20" y="180" width="140" height="8" fill="#333" opacity="0.15" rx="2"/>
        <rect x="20" y="195" width="100" height="8" fill="#333" opacity="0.15" rx="2"/>
        <rect x="30" y="220" width="140" height="25" fill="#0d47a1" opacity="0.1" rx="3"/>
      </svg>
    ),

    'e-firma': (
      <svg className="w-full h-full object-contain drop-shadow-2xl opacity-40 group-hover:opacity-90 transition-all duration-700 rotate-[-8deg] group-hover:rotate-0" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="260" fill="#e3f2fd" rx="4"/>
        <rect width="200" height="60" fill="#1565c0" rx="4"/>
        <text x="100" y="30" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">e.firma</text>
        <text x="100" y="50" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">SAT</text>
        
        {/* Icono de llave */}
        <circle cx="100" cy="95" r="18" fill="#1565c0" opacity="0.2"/>
        <rect x="95" y="85" width="10" height="15" fill="#1565c0" opacity="0.4" rx="5"/>
        <rect x="92" y="100" width="16" height="12" fill="#1565c0" opacity="0.4" rx="2"/>
        <rect x="95" y="105" width="3" height="5" fill="#1565c0" opacity="0.6"/>
        <rect x="102" y="105" width="3" height="5" fill="#1565c0" opacity="0.6"/>
        
        {/* Líneas de texto */}
        <rect x="20" y="130" width="160" height="8" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="145" width="140" height="8" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="160" width="120" height="8" fill="#333" opacity="0.2" rx="2"/>
        
        {/* Certificado digital */}
        <rect x="30" y="185" width="140" height="50" fill="#1565c0" opacity="0.1" rx="4"/>
        <circle cx="50" cy="210" r="8" fill="#1565c0" opacity="0.3"/>
        <path d="M 47 210 L 49 212 L 53 208" stroke="#1565c0" strokeWidth="2" fill="none" opacity="0.5"/>
        <rect x="65" y="202" width="100" height="5" fill="#1565c0" opacity="0.2" rx="1"/>
        <rect x="65" y="212" width="80" height="5" fill="#1565c0" opacity="0.2" rx="1"/>
        <rect x="65" y="222" width="90" height="5" fill="#1565c0" opacity="0.2" rx="1"/>
      </svg>
    ),

    // =====================================
    // CURP - Sección de CURP
    // =====================================
    'curp': (
      <svg className="w-full h-full object-contain drop-shadow-2xl opacity-40 group-hover:opacity-90 transition-all duration-700 rotate-[-8deg] group-hover:rotate-0" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="260" fill="#e8f5e9" rx="4"/>
        <rect width="200" height="50" fill="#1565c0" rx="4"/>
        <text x="100" y="30" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">CURP</text>
        <circle cx="50" cy="90" r="20" fill="#1565c0" opacity="0.2"/>
        <circle cx="150" cy="90" r="20" fill="#1565c0" opacity="0.2"/>
        <rect x="20" y="120" width="160" height="12" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="140" width="140" height="12" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="160" width="120" height="12" fill="#333" opacity="0.2" rx="2"/>
        <rect x="30" y="200" width="140" height="35" fill="#1565c0" opacity="0.15" rx="4"/>
        <text x="100" y="222" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">ABCD123456HDFRNN09</text>
      </svg>
    ),

    // =====================================
    // CORRECCIONES - Sección de Correcciones
    // =====================================
    'correccion': (
      <svg className="w-full h-full object-contain drop-shadow-2xl opacity-40 group-hover:opacity-90 transition-all duration-700 rotate-[-8deg] group-hover:rotate-0" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="260" fill="#fff8e1" rx="4"/>
        <rect width="200" height="55" fill="#f57c00" rx="4"/>
        <text x="100" y="25" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">CORRECCIÓN DE</text>
        <text x="100" y="43" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">ACTA</text>
        <circle cx="100" cy="85" r="20" fill="#f57c00" opacity="0.3"/>
        <path d="M 90 85 L 95 90 L 110 75" stroke="#f57c00" strokeWidth="3" fill="none" opacity="0.5"/>
        <rect x="20" y="120" width="160" height="8" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="135" width="140" height="8" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="155" width="160" height="8" fill="#333" opacity="0.15" rx="2"/>
        <rect x="20" y="170" width="140" height="8" fill="#333" opacity="0.15" rx="2"/>
        <rect x="20" y="185" width="120" height="8" fill="#333" opacity="0.15" rx="2"/>
        <path d="M 40 220 Q 60 215, 80 220 T 120 220" stroke="#333" strokeWidth="2" fill="none" opacity="0.3"/>
      </svg>
    ),

    // =====================================
    // EXTRANJEROS - Sección de Naturalizaciones
    // =====================================
    'naturalizacion': (
      <svg className="w-full h-full object-contain drop-shadow-2xl opacity-40 group-hover:opacity-90 transition-all duration-700 rotate-[-8deg] group-hover:rotate-0" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="260" fill="#e8f5e9" rx="4"/>
        <rect width="200" height="55" fill="#2e7d32" rx="4"/>
        <text x="100" y="28" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">NATURALIZACIÓN</text>
        <circle cx="100" cy="85" r="25" fill="#2e7d32" opacity="0.2"/>
        <path d="M 85 85 L 95 95 L 115 75" stroke="#2e7d32" strokeWidth="3" fill="none"/>
        <rect x="20" y="125" width="160" height="10" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="145" width="140" height="10" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="165" width="120" height="10" fill="#333" opacity="0.2" rx="2"/>
        <rect x="20" y="190" width="160" height="8" fill="#333" opacity="0.15" rx="2"/>
        <rect x="20" y="205" width="140" height="8" fill="#333" opacity="0.15" rx="2"/>
        <path d="M 40 235 Q 60 230, 80 235 T 120 235" stroke="#333" strokeWidth="2" fill="none" opacity="0.3"/>
      </svg>
    )
  };

  return documents[type] || documents['acta-nacimiento'];
};

// ========================================
// COMPONENTE PRINCIPAL: SERVICE CARD
// ========================================
export default function ServiceCard({ 
  name, 
  price, 
  deliveryTime, 
  documentType = 'acta-nacimiento',
  backgroundColor = '#1a1a2e',
  heightClass = "h-72"
}) {
  return (
    <div className={`group relative ${heightClass} overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20`}>
      {/* Background Base */}
      <div className="absolute inset-0" style={{ backgroundColor }} />

      {/* Documento SVG Animado */}
      <div className="absolute inset-0 overflow-visible">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-48 h-64 transition-all duration-700 ease-out group-hover:scale-150 group-hover:blur-none blur-sm animate-float">
            <DocumentSVG type={documentType} name={name} />
            <div className="absolute inset-0 bg-teal-400/20 blur-3xl scale-75 group-hover:scale-100 transition-all duration-700 -z-10 opacity-50 group-hover:opacity-70" />
          </div>
        </div>
      </div>
     
      {/* Overlay Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 group-hover:via-black/30 transition-all duration-500 pointer-events-none" />
      
      {/* Línea Superior Decorativa */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Botón Flecha */}
      <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500 z-10">
        <ArrowRight className="w-5 h-5 text-white" strokeWidth={2.5} />
      </div>
     
      {/* Contenido de Texto */}
      <div className="relative h-full flex flex-col justify-end p-6 z-10">
        {/* Línea Decorativa */}
        <div className="w-12 h-0.5 bg-teal-400 mb-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        
        {/* Título del Servicio */}
        <h3 className="text-white text-2xl font-semibold tracking-wide uppercase mb-3 transform group-hover:translate-x-1 transition-transform duration-300 drop-shadow-lg">
          {name}
        </h3>
       
        {/* Información de Precio y Tiempo */}
        <div className="flex items-center gap-6">
          {price && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 transform group-hover:bg-white/20 transition-all duration-300">
              <DollarSign className="w-4 h-4 text-teal-400" strokeWidth={2.5} />
              <span className="text-white text-sm font-bold">${price}</span>
            </div>
          )}
          {deliveryTime && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 transform group-hover:bg-white/20 transition-all duration-300">
              <Clock className="w-4 h-4 text-teal-400" strokeWidth={2.5} />
              <span className="text-white text-sm font-medium">{deliveryTime}</span>
            </div>
          )}
        </div>
        
        {/* Link "Ver Detalles" */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span className="inline-flex items-center gap-2 text-teal-400 text-sm font-semibold">
            Ver detalles
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </span>
        </div>
      </div>
      
      {/* Esquinas Decorativas */}
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
    </div>
  );
}