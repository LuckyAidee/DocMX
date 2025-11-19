import React from "react";
import clsx from "clsx";
import { ArrowRight, Clock, DollarSign } from "lucide-react";
import "./ServiceCard.css";

// Catálogo único de SVGs - exportado para reutilización en toda la app
export const DOCUMENTS = {
  // =====================================
  // ACTAS - Sección de Actas de Registro Civil
  // =====================================
  'acta-nacimiento': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
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
    </svg>),
  'acta-matrimonio': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
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
    </svg>),
  'acta-defuncion': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
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
    </svg>),
  // =====================================
  // CURP - Sección de Servicios CURP (5 variantes)
  // =====================================
  'curp-unificacion': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="200" height="260" fill="#e8f5e9" rx="4"/>
      <rect width="200" height="55" fill="#2e7d32" rx="4"/>
      <text x="100" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">UNIFICACIÓN</text>
      <text x="100" y="45" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">CURP</text>

      <circle cx="100" cy="95" r="28" fill="#2e7d32" opacity="0.2"/>
      <path d="M 70 80 L 100 95 L 70 110" stroke="#2e7d32" strokeWidth="3" fill="none" opacity="0.5"/>
      <path d="M 130 80 L 100 95 L 130 110" stroke="#2e7d32" strokeWidth="3" fill="none" opacity="0.5"/>
      <circle cx="100" cy="95" r="6" fill="#2e7d32" opacity="0.6"/>

      <rect x="20" y="135" width="160" height="10" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="155" width="140" height="10" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="175" width="120" height="10" fill="#333" opacity="0.2" rx="2"/>
      <rect x="30" y="205" width="140" height="30" fill="#2e7d32" opacity="0.1" rx="4"/>
      <text x="100" y="225" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">ABCD123456XYZA01</text>
    </svg>),
  'curp-baja': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="200" height="260" fill="#ffebee" rx="4"/>
      <rect width="200" height="55" fill="#c62828" rx="4"/>
      <text x="100" y="28" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">BAJA CURP</text>

      <circle cx="100" cy="95" r="28" fill="#c62828" opacity="0.2"/>
      <path d="M 85 80 L 115 110" stroke="#c62828" strokeWidth="4" opacity="0.5"/>
      <path d="M 115 80 L 85 110" stroke="#c62828" strokeWidth="4" opacity="0.5"/>

      <rect x="20" y="135" width="160" height="10" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="155" width="140" height="10" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="175" width="120" height="10" fill="#333" opacity="0.2" rx="2"/>
      <rect x="30" y="205" width="140" height="30" fill="#c62828" opacity="0.1" rx="4"/>
      <text x="100" y="225" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold" opacity="0.4">CANCELADO</text>
    </svg>),
  'curp-alta': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="200" height="260" fill="#e3f2fd" rx="4"/>
      <rect width="200" height="55" fill="#1565c0" rx="4"/>
      <text x="100" y="28" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">ALTA CURP</text>

      <circle cx="100" cy="95" r="28" fill="#1565c0" opacity="0.2"/>
      <path d="M 85 95 L 95 105 L 115 80" stroke="#1565c0" strokeWidth="4" fill="none" opacity="0.5"/>

      <rect x="20" y="135" width="160" height="10" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="155" width="140" height="10" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="175" width="120" height="10" fill="#333" opacity="0.2" rx="2"/>
      <rect x="30" y="205" width="140" height="30" fill="#1565c0" opacity="0.1" rx="4"/>
      <text x="100" y="225" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">NUEVO REGISTRO</text>
    </svg>),
  'curp-descargar': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
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
    </svg>),
  'curp-certificacion': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="200" height="260" fill="#fff3e0" rx="4"/>
      <rect width="200" height="55" fill="#e65100" rx="4"/>
      <text x="100" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CERTIFICACIÓN</text>
      <text x="100" y="42" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">CURP</text>

      <circle cx="100" cy="95" r="28" fill="#e65100" opacity="0.2"/>
      <circle cx="100" cy="95" r="20" fill="none" stroke="#e65100" strokeWidth="3" opacity="0.4"/>
      <circle cx="100" cy="95" r="12" fill="none" stroke="#e65100" strokeWidth="2" opacity="0.5"/>
      <path d="M 95 95 L 98 98 L 105 88" stroke="#e65100" strokeWidth="3" fill="none" opacity="0.6"/>

      <rect x="20" y="135" width="160" height="10" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="155" width="140" height="10" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="175" width="120" height="10" fill="#333" opacity="0.2" rx="2"/>
      <rect x="30" y="205" width="140" height="30" fill="#e65100" opacity="0.1" rx="4"/>
      <text x="100" y="225" textAnchor="middle" fill="#333" fontSize="11" fontWeight="bold">DOCUMENTO OFICIAL</text>
    </svg>),
  // =====================================
  // SAT - Sección de Servicios SAT (4 diseños)
  // =====================================
  'rfc-primera-vez': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="200" height="260" fill="#e8f5e9" rx="4"/>
      <rect width="200" height="60" fill="#2e7d32" rx="4"/>
      <text x="100" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">RFC POR</text>
      <text x="100" y="40" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">PRIMERA VEZ</text>

      <circle cx="100" cy="100" r="30" fill="#2e7d32" opacity="0.2"/>
      <path d="M 100 75 L 105 90 L 120 92 L 110 103 L 113 118 L 100 110 L 87 118 L 90 103 L 80 92 L 95 90 Z" fill="#2e7d32" opacity="0.4"/>

      <rect x="20" y="140" width="160" height="10" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="160" width="140" height="10" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="180" width="120" height="10" fill="#333" opacity="0.2" rx="2"/>
      <rect x="30" y="210" width="140" height="30" fill="#2e7d32" opacity="0.1" rx="4"/>
      <text x="100" y="230" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">NUEVO REGISTRO</text>
    </svg>),
  'rfc-modificaciones': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="200" height="260" fill="#fff3e0" rx="4"/>
      <rect width="200" height="60" fill="#e65100" rx="4"/>
      <text x="100" y="25" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">MODIFICACIONES</text>
      <text x="100" y="45" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">RFC</text>

      <circle cx="100" cy="100" r="30" fill="#e65100" opacity="0.2"/>
      <path d="M 90 110 L 95 105 L 105 95 L 110 100 Z" fill="#e65100" opacity="0.4"/>
      <rect x="89" y="109" width="8" height="3" fill="#e65100" opacity="0.3" transform="rotate(-45 93 110)"/>
      <path d="M 107 97 L 111 93 L 113 95 L 109 99 Z" fill="#e65100" opacity="0.5"/>

      <rect x="20" y="140" width="160" height="10" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="160" width="140" height="10" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="180" width="120" height="10" fill="#333" opacity="0.2" rx="2"/>
      <rect x="30" y="210" width="140" height="30" fill="#e65100" opacity="0.1" rx="4"/>
      <text x="100" y="230" textAnchor="middle" fill="#333" fontSize="12" fontWeight="bold">ACTUALIZACIÓN</text>
    </svg>),
  'csf': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
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
    </svg>),
  'e-firma': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="200" height="260" fill="#e3f2fd" rx="4"/>
      <rect width="200" height="60" fill="#1565c0" rx="4"/>
      <text x="100" y="30" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">e.firma</text>
      <text x="100" y="50" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">SAT</text>

      <circle cx="100" cy="95" r="18" fill="#1565c0" opacity="0.2"/>
      <rect x="95" y="85" width="10" height="15" fill="#1565c0" opacity="0.4" rx="5"/>
      <rect x="92" y="100" width="16" height="12" fill="#1565c0" opacity="0.4" rx="2"/>
      <rect x="95" y="105" width="3" height="5" fill="#1565c0" opacity="0.6"/>
      <rect x="102" y="105" width="3" height="5" fill="#1565c0" opacity="0.6"/>

      <rect x="20" y="130" width="160" height="8" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="145" width="140" height="8" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="160" width="120" height="8" fill="#333" opacity="0.2" rx="2"/>

      <rect x="30" y="185" width="140" height="50" fill="#1565c0" opacity="0.1" rx="4"/>
      <text x="100" y="205" textAnchor="middle" fill="#1565c0" fontSize="10" fontWeight="bold" opacity="0.6">CERTIFICADO DIGITAL</text>
      <text x="100" y="220" textAnchor="middle" fill="#333" fontSize="9" opacity="0.5">FIEL AUTORIZADA</text>
    </svg>),
  // =====================================
  // CORRECCIONES - Sección de Correcciones (5 tipos)
  // =====================================
  'correccion-curp': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="200" height="260" fill="#fff8e1" rx="4"/>
      <rect width="200" height="55" fill="#f57c00" rx="4"/>
      <text x="100" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CORRECCIÓN</text>
      <text x="100" y="42" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">CURP</text>

      <circle cx="100" cy="90" r="25" fill="#f57c00" opacity="0.2"/>
      <path d="M 90 100 L 95 95 L 105 85 L 110 90 Z" fill="#f57c00" opacity="0.4"/>
      <rect x="89" y="99" width="8" height="3" fill="#f57c00" opacity="0.3" transform="rotate(-45 93 100)"/>

      <rect x="20" y="125" width="160" height="8" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="140" width="140" height="8" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="160" width="160" height="8" fill="#333" opacity="0.15" rx="2"/>
      <rect x="20" y="175" width="140" height="8" fill="#333" opacity="0.15" rx="2"/>
      <rect x="30" y="205" width="140" height="30" fill="#f57c00" opacity="0.1" rx="4"/>
      <text x="100" y="225" textAnchor="middle" fill="#333" fontSize="11" fontWeight="bold">ACTUALIZACIÓN</text>
    </svg>),
  'correccion-extemporaneas': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="200" height="260" fill="#fce4ec" rx="4"/>
      <rect width="200" height="55" fill="#ad1457" rx="4"/>
      <text x="100" y="20" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">CORRECCIÓN</text>
      <text x="100" y="35" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">ACTAS</text>
      <text x="100" y="50" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">EXTEMPORÁNEAS</text>

      <circle cx="100" cy="95" r="25" fill="#ad1457" opacity="0.2"/>
      <circle cx="100" cy="95" r="18" fill="none" stroke="#ad1457" strokeWidth="2" opacity="0.4"/>
      <path d="M 100 80 L 100 95 L 110 100" stroke="#ad1457" strokeWidth="2.5" fill="none" opacity="0.5"/>
      <rect x="88" y="110" width="24" height="3" fill="#ad1457" opacity="0.4" rx="1"/>

      <rect x="20" y="130" width="160" height="8" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="145" width="140" height="8" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="165" width="160" height="8" fill="#333" opacity="0.15" rx="2"/>
      <rect x="20" y="180" width="140" height="8" fill="#333" opacity="0.15" rx="2"/>
      <rect x="30" y="210" width="140" height="25" fill="#ad1457" opacity="0.1" rx="4"/>
      <text x="100" y="228" textAnchor="middle" fill="#333" fontSize="10" fontWeight="bold">REGISTRO TARDÍO</text>
    </svg>),
  'correccion-matrimonio': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="200" height="260" fill="#fff8f0" rx="4"/>
      <rect width="200" height="55" fill="#f57c00" rx="4"/>
      <text x="100" y="20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CORRECCIÓN</text>
      <text x="100" y="36" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">ACTA DE</text>
      <text x="100" y="50" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">MATRIMONIO</text>

      <circle cx="70" cy="95" r="22" fill="#f57c00" opacity="0.2"/>
      <circle cx="130" cy="95" r="22" fill="#f57c00" opacity="0.2"/>
      <path d="M 90 95 L 110 95" stroke="#f57c00" strokeWidth="3" opacity="0.3"/>

      <circle cx="100" cy="75" r="8" fill="#f57c00" opacity="0.4"/>
      <path d="M 97 75 L 99 77 L 103 72" stroke="white" strokeWidth="1.5" fill="none"/>

      <rect x="20" y="130" width="160" height="8" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="145" width="140" height="8" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="165" width="160" height="8" fill="#333" opacity="0.15" rx="2"/>
      <rect x="20" y="180" width="140" height="8" fill="#333" opacity="0.15" rx="2"/>
      <path d="M 40 220 Q 60 215, 80 220" stroke="#333" strokeWidth="2" fill="none" opacity="0.3"/>
      <path d="M 120 220 Q 140 215, 160 220" stroke="#333" strokeWidth="2" fill="none" opacity="0.3"/>
    </svg>),
  'correccion-defuncion': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="200" height="260" fill="#f5f5f5" rx="4"/>
      <rect width="200" height="55" fill="#f57c00" rx="4"/>
      <text x="100" y="20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CORRECCIÓN</text>
      <text x="100" y="36" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">ACTA DE</text>
      <text x="100" y="50" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">DEFUNCIÓN</text>

      <circle cx="100" cy="90" r="25" fill="#f57c00" opacity="0.2"/>
      <path d="M 100 70 L 100 110" stroke="#424242" strokeWidth="3" opacity="0.3"/>
      <path d="M 80 90 L 120 90" stroke="#424242" strokeWidth="3" opacity="0.3"/>

      <circle cx="120" cy="75" r="8" fill="#f57c00" opacity="0.5"/>
      <path d="M 117 75 L 119 77 L 123 72" stroke="white" strokeWidth="1.5" fill="none"/>

      <rect x="20" y="130" width="160" height="8" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="145" width="140" height="8" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="160" width="120" height="8" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="185" width="160" height="8" fill="#333" opacity="0.15" rx="2"/>
      <rect x="20" y="200" width="140" height="8" fill="#333" opacity="0.15" rx="2"/>
      <path d="M 40 230 Q 60 225, 80 230 T 120 230" stroke="#333" strokeWidth="2" fill="none" opacity="0.3"/>
    </svg>),
  'correccion-nacimiento': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="200" height="260" fill="#f0f0f0" rx="4"/>
      <rect width="200" height="55" fill="#f57c00" rx="4"/>
      <text x="100" y="20" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">CORRECCIÓN</text>
      <text x="100" y="36" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">ACTA DE</text>
      <text x="100" y="50" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">NACIMIENTO</text>

      <circle cx="100" cy="90" r="25" fill="#f57c00" opacity="0.3"/>

      <circle cx="115" cy="75" r="8" fill="#f57c00" opacity="0.5"/>
      <path d="M 112 75 L 114 77 L 118 72" stroke="white" strokeWidth="1.5" fill="none"/>

      <rect x="20" y="130" width="160" height="8" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="145" width="140" height="8" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="160" width="120" height="8" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="185" width="160" height="8" fill="#333" opacity="0.15" rx="2"/>
      <rect x="20" y="200" width="140" height="8" fill="#333" opacity="0.15" rx="2"/>
      <path d="M 40 230 Q 60 225, 80 230 T 120 230" stroke="#333" strokeWidth="2" fill="none" opacity="0.3"/>
    </svg>),
  // =====================================
  // EXTRANJEROS - Sección de Naturalizaciones
  // =====================================
  'carta-naturalizacion': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="200" height="260" fill="#e8f5e9" rx="4"/>
      <rect width="200" height="60" fill="#2e7d32" rx="4"/>
      <text x="100" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">CARTA DE</text>
      <text x="100" y="45" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">NATURALIZACIÓN</text>

      <rect x="70" y="80" width="15" height="30" fill="#006847" opacity="0.4"/>
      <rect x="85" y="80" width="15" height="30" fill="white" opacity="0.6"/>
      <rect x="100" y="80" width="15" height="30" fill="#CE1126" opacity="0.4"/>
      <circle cx="92.5" cy="95" r="8" fill="#8b4513" opacity="0.3"/>

      <circle cx="100" cy="135" r="22" fill="none" stroke="#2e7d32" strokeWidth="2" opacity="0.3"/>
      <circle cx="100" cy="135" r="16" fill="none" stroke="#2e7d32" strokeWidth="1.5" opacity="0.4"/>
      <text x="100" y="140" textAnchor="middle" fill="#2e7d32" fontSize="10" fontWeight="bold" opacity="0.5">OFICIAL</text>

      <rect x="20" y="170" width="160" height="8" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="185" width="140" height="8" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="200" width="120" height="8" fill="#333" opacity="0.2" rx="2"/>

      <path d="M 40 235 Q 60 230, 80 235 T 120 235" stroke="#333" strokeWidth="2" fill="none" opacity="0.3"/>
      <rect x="40" y="238" width="70" height="1" fill="#333" opacity="0.2"/>
    </svg>),
  'naturalizaciones-mexicanas': (props) => (<svg className="w-full h-full" viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="200" height="260" fill="#fff3e0" rx="4"/>
      <rect width="200" height="60" fill="#388e3c" rx="4"/>
      <text x="100" y="22" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">NATURALIZACIÓN</text>
      <text x="100" y="42" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">MEXICANA</text>

      <circle cx="100" cy="95" r="28" fill="#388e3c" opacity="0.15"/>
      <path d="M 100 75 Q 90 85, 85 95 Q 90 100, 100 105 Q 110 100, 115 95 Q 110 85, 100 75 Z" fill="#388e3c" opacity="0.4"/>
      <circle cx="95" cy="88" r="2" fill="#388e3c" opacity="0.6"/>
      <circle cx="105" cy="88" r="2" fill="#388e3c" opacity="0.6"/>

      <path d="M 85 110 L 100 120 L 115 110" stroke="#388e3c" strokeWidth="2" fill="none" opacity="0.3"/>
      <circle cx="100" cy="125" r="8" fill="none" stroke="#388e3c" strokeWidth="2" opacity="0.4"/>
      <path d="M 97 125 L 99 127 L 103 122" stroke="#388e3c" strokeWidth="2" fill="none" opacity="0.5"/>

      <rect x="20" y="155" width="160" height="8" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="170" width="140" height="8" fill="#333" opacity="0.2" rx="2"/>
      <rect x="20" y="185" width="120" height="8" fill="#333" opacity="0.2" rx="2"/>

      <rect x="30" y="210" width="140" height="30" fill="#388e3c" opacity="0.1" rx="4"/>
      <text x="100" y="230" textAnchor="middle" fill="#333" fontSize="11" fontWeight="bold">CIUDADANÍA MEXICANA</text>
    </svg>),
};

// Alias camelCase para compatibilidad con servicesConfig.svgKey
DOCUMENTS.actaNacimiento = DOCUMENTS['acta-nacimiento'];
DOCUMENTS.actaMatrimonio = DOCUMENTS['acta-matrimonio'];
DOCUMENTS.actaDefuncion = DOCUMENTS['acta-defuncion'];
DOCUMENTS.curpUnificacion = DOCUMENTS['curp-unificacion'];
DOCUMENTS.curpBaja = DOCUMENTS['curp-baja'];
DOCUMENTS.curpAlta = DOCUMENTS['curp-alta'];
DOCUMENTS.curpDescargar = DOCUMENTS['curp-descargar'];
DOCUMENTS.curpCertificacion = DOCUMENTS['curp-certificacion'];
DOCUMENTS.rfcPrimeraVez = DOCUMENTS['rfc-primera-vez'];
DOCUMENTS.rfcModificaciones = DOCUMENTS['rfc-modificaciones'];
DOCUMENTS.modificacionesCsf = DOCUMENTS['rfc-modificaciones']; // Alias para modificaciones CSF
// csf permanece igual en ambos formatos
DOCUMENTS.constanciaFiscal = DOCUMENTS['csf']; // Alias para constancia fiscal
DOCUMENTS.eFirma = DOCUMENTS['e-firma'];
DOCUMENTS.correccionCurp = DOCUMENTS['correccion-curp'];
DOCUMENTS.correccionExtemporanea = DOCUMENTS['correccion-extemporaneas'];
DOCUMENTS.correccionMatrimonio = DOCUMENTS['correccion-matrimonio'];
DOCUMENTS.correccionDefuncion = DOCUMENTS['correccion-defuncion'];
DOCUMENTS.correccionNacimiento = DOCUMENTS['correccion-nacimiento'];
DOCUMENTS.cartaNaturalizacion = DOCUMENTS['carta-naturalizacion'];
DOCUMENTS.naturalizacionesMexicanas = DOCUMENTS['naturalizaciones-mexicanas'];

// DocumentSVGs: Wrappers para páginas de compra con efectos específicos
// Estos componentes envuelven los SVGs de DOCUMENTS con className apropiado para ServiceDetail
export const DocumentSVGs = {
  actaNacimiento: () => {
    const SvgComponent = DOCUMENTS.actaNacimiento;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  },
  actaMatrimonio: () => {
    const SvgComponent = DOCUMENTS.actaMatrimonio;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  },
  actaDefuncion: () => {
    const SvgComponent = DOCUMENTS.actaDefuncion;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  },
  rfcPrimeraVez: () => {
    const SvgComponent = DOCUMENTS.rfcPrimeraVez;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  },
  constanciaFiscal: () => {
    const SvgComponent = DOCUMENTS.csf;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  },
  eFirma: () => {
    const SvgComponent = DOCUMENTS.eFirma;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  },
  modificacionesCsf: () => {
    const SvgComponent = DOCUMENTS.rfcModificaciones;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  },
  curpUnificacion: () => {
    const SvgComponent = DOCUMENTS.curpUnificacion;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  },
  curpBaja: () => {
    const SvgComponent = DOCUMENTS.curpBaja;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  },
  curpAlta: () => {
    const SvgComponent = DOCUMENTS.curpAlta;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  },
  curpDescargar: () => {
    const SvgComponent = DOCUMENTS.curpDescargar;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  },
  curpCertificacion: () => {
    const SvgComponent = DOCUMENTS.curpCertificacion;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  },
  correccionCurp: () => {
    const SvgComponent = DOCUMENTS.correccionCurp;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  },
  correccionExtemporanea: () => {
    const SvgComponent = DOCUMENTS.correccionExtemporanea;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  },
  correccionMatrimonio: () => {
    const SvgComponent = DOCUMENTS.correccionMatrimonio;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  },
  correccionDefuncion: () => {
    const SvgComponent = DOCUMENTS.correccionDefuncion;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  },
  correccionNacimiento: () => {
    const SvgComponent = DOCUMENTS.correccionNacimiento;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  },
  cartaNaturalizacion: () => {
    const SvgComponent = DOCUMENTS.cartaNaturalizacion;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  },
  naturalizacionesMexicanas: () => {
    const SvgComponent = DOCUMENTS.naturalizacionesMexicanas;
    return <SvgComponent className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />;
  }
};

// Componente interno que aplica efectos visuales solo para tarjetas
const DocumentSVG = React.memo(function DocumentSVG({ type, name }) {
  const Svg = React.useMemo(
    () => DOCUMENTS[type] ?? DOCUMENTS["acta-nacimiento"],
    [type]
  );

  // Los efectos (drop-shadow, opacity, rotate) se aplican aquí, no en el SVG base
  return (
    <div className="w-full h-full object-contain drop-shadow-2xl opacity-40 group-hover:opacity-90 transition-all duration-700 rotate-[-8deg] group-hover:rotate-0">
      <Svg aria-label={name} />
    </div>
  );
});

function useInView(ref, { rootMargin = "0px", threshold = 0.1 } = {}) {
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin, threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, rootMargin, threshold]);
  return inView;
}

function ServiceCard({
  name,
  price,
  deliveryTime,
  documentType = "acta-nacimiento",
  type,
  backgroundColor = "#1a1a2e",
  heightClass = "h-72",
  description,
  onClick,
  className,
}) {
  const resolvedType = type ?? documentType ?? "acta-nacimiento";
  const cardRef = React.useRef(null);
  const inView = useInView(cardRef);

  return (
    <div
      ref={cardRef}
      className={clsx(
        `group relative ${heightClass} overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20`,
        className
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="absolute inset-0" style={{ background: backgroundColor }} />

      <div className="absolute inset-0 overflow-visible">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={clsx(
              "relative w-48 h-64 transition-all duration-700 ease-out group-hover:scale-150 group-hover:blur-none blur-sm",
              inView ? "animate-float" : "",
              "motion-reduce:animate-none"
            )}
          >
            <DocumentSVG type={resolvedType} name={name} />
            <div className="absolute inset-0 bg-teal-400/20 blur-3xl scale-75 group-hover:scale-100 transition-all duration-700 -z-10 opacity-50 group-hover:opacity-70" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 group-hover:via-black/30 transition-all duration-500 pointer-events-none" />

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500 z-10">
        <ArrowRight className="w-5 h-5 text-white" strokeWidth={2.5} />
      </div>

      <div className="relative h-full flex flex-col justify-end p-6 z-10">
        <div className="w-12 h-0.5 bg-teal-400 mb-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

        <h3 className="text-white text-2xl font-semibold tracking-wide uppercase mb-3 transform group-hover:translate-x-1 transition-transform duration-300 drop-shadow-lg">
          {name}
        </h3>

        {description ? (
          <p className="text-white/80 text-sm mb-3 line-clamp-2">{description}</p>
        ) : null}

        <div className="flex items-center gap-6 flex-wrap">
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

        <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span className="inline-flex items-center gap-2 text-teal-400 text-sm font-semibold">
            Ver detalles
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
    </div>
  );
}

export default React.memo(ServiceCard);
