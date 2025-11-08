import React from 'react';

const DocumentoBase = ({ 
  colorFondo = '#fafafa',
  colorHeader = '#14b8a6',
  colorHeaderFin = '#0d9488',
  textoHeader = ['ESTADOS UNIDOS', 'MEXICANOS'],
  subtituloHeader = 'REGISTRO CIVIL',
  titulo = ['ACTA DE', 'NACIMIENTO'],
  iconoCentral,
  colorIcono = '#14b8a6',
  firmaColor = '#14b8a6'
}) => {
  return (
    <svg 
      className="relative w-56 h-72 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
      viewBox="0 0 200 260" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="260" fill={colorFondo} rx="4"/>
      
      <rect width="200" height="260" fill="url(#innerShadow)" rx="4"/>
      
      <defs>
        <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: colorHeader, stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: colorHeaderFin, stopOpacity: 1}} />
        </linearGradient>
        <linearGradient id="innerShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: '#000000', stopOpacity: 0.02}} />
          <stop offset="100%" style={{stopColor: '#000000', stopOpacity: 0}} />
        </linearGradient>
      </defs>
      
      <rect width="200" height="60" fill="url(#headerGradient)" rx="4"/>
      
      {textoHeader.map((texto, index) => (
        <text 
          key={index}
          x="100" 
          y={22 + (index * 15)} 
          textAnchor="middle" 
          fill="white" 
          fontSize="12" 
          fontWeight="bold" 
          letterSpacing="1"
        >
          {texto}
        </text>
      ))}
      
      {subtituloHeader && (
        <text x="100" y="52" textAnchor="middle" fill="white" fontSize="10" fontWeight="normal" letterSpacing="0.5">
          {subtituloHeader}
        </text>
      )}
      
      {iconoCentral || (
        <>
          <circle cx="100" cy="95" r="28" fill={colorIcono} opacity="0.15"/>
          <circle cx="100" cy="95" r="23" fill="none" stroke={colorIcono} strokeWidth="2.5" opacity="0.5"/>
          <circle cx="100" cy="95" r="18" fill="none" stroke={colorIcono} strokeWidth="1.5" opacity="0.3"/>
        </>
      )}
      
      {titulo.map((linea, index) => (
        <text 
          key={index}
          x="100" 
          y={135 + (index * 17)} 
          textAnchor="middle" 
          fill="#2d3748" 
          fontSize="16" 
          fontWeight="bold" 
          opacity="0.8"
        >
          {linea}
        </text>
      ))}
      
      <rect x="25" y="175" width="150" height="5" fill="#2d3748" opacity="0.1" rx="1.5"/>
      <rect x="25" y="186" width="130" height="5" fill="#2d3748" opacity="0.1" rx="1.5"/>
      <rect x="25" y="197" width="140" height="5" fill="#2d3748" opacity="0.1" rx="1.5"/>
      
      <rect x="25" y="215" width="150" height="4" fill="#2d3748" opacity="0.08" rx="1.5"/>
      <rect x="25" y="225" width="120" height="4" fill="#2d3748" opacity="0.08" rx="1.5"/>
      <rect x="25" y="235" width="135" height="4" fill="#2d3748" opacity="0.08" rx="1.5"/>
      
      <path d="M 50 250 Q 70 245, 90 250" stroke={firmaColor} strokeWidth="2" fill="none" opacity="0.3"/>
      <rect x="45" y="253" width="50" height="0.5" fill={firmaColor} opacity="0.4"/>
    </svg>
  );
};

const IconoEscudoMexico = ({ color = '#14b8a6' }) => (
  <>
    <circle cx="100" cy="95" r="28" fill={color} opacity="0.15"/>
    <circle cx="100" cy="95" r="23" fill="none" stroke={color} strokeWidth="2.5" opacity="0.5"/>
    <circle cx="100" cy="95" r="18" fill="none" stroke={color} strokeWidth="1.5" opacity="0.3"/>
  </>
);

const IconoAnillosMatrimonio = ({ color = '#8b4513' }) => (
  <>
    <circle cx="70" cy="95" r="22" fill={color} opacity="0.2"/>
    <circle cx="130" cy="95" r="22" fill={color} opacity="0.2"/>
    <path d="M 90 95 L 110 95" stroke={color} strokeWidth="3" opacity="0.3"/>
  </>
);

export const DocumentSVGs = {
  actaNacimiento: () => (
    <DocumentoBase 
      colorFondo="#fafafa"
      colorHeader="#14b8a6"
      colorHeaderFin="#0d9488"
      textoHeader={['ESTADOS UNIDOS', 'MEXICANOS']}
      subtituloHeader="REGISTRO CIVIL"
      titulo={['ACTA DE', 'NACIMIENTO']}
      iconoCentral={<IconoEscudoMexico color="#14b8a6" />}
      colorIcono="#14b8a6"
      firmaColor="#14b8a6"
    />
  ),
  actaMatrimonio: () => (
    <DocumentoBase 
      colorFondo="#fff8f0"
      colorHeader="#8b4513"
      colorHeaderFin="#6d3610"
      textoHeader={['ESTADOS UNIDOS', 'MEXICANOS']}
      subtituloHeader="REGISTRO CIVIL"
      titulo={['ACTA DE', 'MATRIMONIO']}
      iconoCentral={<IconoAnillosMatrimonio color="#8b4513" />}
      firmaColor="#8b4513"
    />
  )
};