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

const IconoCruzDefuncion = ({ color = '#424242' }) => (
  <>
    <circle cx="100" cy="95" r="28" fill={color} opacity="0.15"/>
    <rect x="95" y="75" width="10" height="40" fill={color} opacity="0.5" rx="1"/>
    <rect x="80" y="90" width="40" height="10" fill={color} opacity="0.5" rx="1"/>
  </>
);

const IconoDocumentoNuevo = ({ color = '#2e7d32' }) => (
  <>
    <rect x="75" y="75" width="50" height="40" fill={color} opacity="0.15" rx="3"/>
    <rect x="75" y="75" width="50" height="40" fill="none" stroke={color} strokeWidth="2.5" opacity="0.5" rx="3"/>
    <path d="M 90 90 L 110 90" stroke={color} strokeWidth="2" opacity="0.3"/>
    <circle cx="100" cy="100" r="8" fill={color} opacity="0.4"/>
    <text x="100" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">+</text>
  </>
);

const IconoSelloSAT = ({ color = '#1565c0' }) => (
  <>
    <circle cx="100" cy="95" r="28" fill={color} opacity="0.15"/>
    <circle cx="100" cy="95" r="23" fill="none" stroke={color} strokeWidth="2.5" opacity="0.5"/>
    <text x="100" y="100" textAnchor="middle" fill={color} fontSize="16" fontWeight="bold" opacity="0.6">SAT</text>
  </>
);

const IconoLlaveFirma = ({ color = '#6a1b9a' }) => (
  <>
    <circle cx="95" cy="85" r="12" fill={color} opacity="0.15"/>
    <circle cx="95" cy="85" r="12" fill="none" stroke={color} strokeWidth="2.5" opacity="0.5"/>
    <rect x="93" y="85" width="4" height="20" fill={color} opacity="0.5" rx="1"/>
    <rect x="93" y="100" width="8" height="3" fill={color} opacity="0.5"/>
    <path d="M 90 110 Q 100 105, 110 110" stroke={color} strokeWidth="2" fill="none" opacity="0.4"/>
  </>
);

const IconoEngranaje = ({ color = '#d84315' }) => (
  <>
    <circle cx="100" cy="95" r="28" fill={color} opacity="0.15"/>
    <circle cx="100" cy="95" r="15" fill="none" stroke={color} strokeWidth="2.5" opacity="0.5"/>
    <circle cx="100" cy="95" r="8" fill={color} opacity="0.3"/>
    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 100 + 15 * Math.cos(rad);
      const y1 = 95 + 15 * Math.sin(rad);
      const x2 = 100 + 20 * Math.cos(rad);
      const y2 = 95 + 20 * Math.sin(rad);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3" opacity="0.4"/>;
    })}
  </>
);

const IconoDocumentosFusion = ({ color = '#2e7d32' }) => (
  <>
    <rect x="70" y="80" width="25" height="30" fill={color} opacity="0.2" rx="2"/>
    <rect x="105" y="80" width="25" height="30" fill={color} opacity="0.2" rx="2"/>
    <path d="M 95 95 L 105 95" stroke={color} strokeWidth="3" opacity="0.5"/>
    <polygon points="103,95 108,93 108,97" fill={color} opacity="0.5"/>
  </>
);

const IconoDocumentoTachado = ({ color = '#c62828' }) => (
  <>
    <rect x="75" y="75" width="50" height="40" fill={color} opacity="0.15" rx="3"/>
    <rect x="75" y="75" width="50" height="40" fill="none" stroke={color} strokeWidth="2.5" opacity="0.5" rx="3"/>
    <line x1="80" y1="80" x2="120" y2="110" stroke={color} strokeWidth="4" opacity="0.6"/>
    <line x1="120" y1="80" x2="80" y2="110" stroke={color} strokeWidth="4" opacity="0.6"/>
  </>
);

const IconoDocumentoCheck = ({ color = '#1565c0' }) => (
  <>
    <rect x="75" y="75" width="50" height="40" fill={color} opacity="0.15" rx="3"/>
    <rect x="75" y="75" width="50" height="40" fill="none" stroke={color} strokeWidth="2.5" opacity="0.5" rx="3"/>
    <path d="M 85 95 L 95 105 L 115 85" stroke={color} strokeWidth="4" fill="none" opacity="0.6" strokeLinecap="round"/>
  </>
);

const IconoDescarga = ({ color = '#0097a7' }) => (
  <>
    <circle cx="100" cy="85" r="25" fill={color} opacity="0.15"/>
    <path d="M 100 75 L 100 100" stroke={color} strokeWidth="3" opacity="0.5"/>
    <polygon points="100,100 90,90 110,90" fill={color} opacity="0.5"/>
    <rect x="80" y="105" width="40" height="3" fill={color} opacity="0.4" rx="1"/>
  </>
);

const IconoSelloCertificado = ({ color = '#00897b' }) => (
  <>
    <circle cx="100" cy="95" r="28" fill={color} opacity="0.15"/>
    <circle cx="100" cy="95" r="23" fill="none" stroke={color} strokeWidth="2.5" opacity="0.5"/>
    <circle cx="100" cy="95" r="18" fill="none" stroke={color} strokeWidth="1.5" opacity="0.3"/>
    <path d="M 92 95 L 98 101 L 108 88" stroke={color} strokeWidth="3" fill="none" opacity="0.6" strokeLinecap="round"/>
  </>
);

const IconoLapizCorreccion = ({ color = '#f57c00' }) => (
  <>
    <rect x="80" y="75" width="40" height="35" fill={color} opacity="0.15" rx="2"/>
    <path d="M 105 80 L 115 90 L 95 110 L 85 100 Z" fill={color} opacity="0.3"/>
    <path d="M 115 90 L 105 80" stroke={color} strokeWidth="2" opacity="0.5"/>
    <rect x="85" y="108" width="12" height="5" fill={color} opacity="0.4" rx="1"/>
  </>
);

const IconoPasaporte = ({ color = '#388e3c' }) => (
  <>
    <rect x="75" y="70" width="50" height="50" fill={color} opacity="0.15" rx="3"/>
    <rect x="75" y="70" width="50" height="50" fill="none" stroke={color} strokeWidth="2.5" opacity="0.5" rx="3"/>
    <circle cx="100" cy="90" r="8" fill={color} opacity="0.3"/>
    <rect x="90" y="105" width="20" height="3" fill={color} opacity="0.3" rx="1"/>
    <rect x="85" y="112" width="30" height="2" fill={color} opacity="0.25" rx="1"/>
  </>
);

const IconoBanderaMexico = ({ color = '#2e7d32' }) => (
  <>
    <rect x="70" y="75" width="15" height="35" fill="#006847" opacity="0.4"/>
    <rect x="85" y="75" width="15" height="35" fill="#FFFFFF" opacity="0.4"/>
    <rect x="100" y="75" width="15" height="35" fill="#CE1126" opacity="0.4"/>
    <rect x="68" y="73" width="3" height="40" fill={color} opacity="0.5"/>
    <circle cx="92.5" cy="92.5" r="8" fill={color} opacity="0.3"/>
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
  ),
  actaDefuncion: () => (
    <DocumentoBase 
      colorFondo="#f5f5f5"
      colorHeader="#424242"
      colorHeaderFin="#212121"
      textoHeader={['ESTADOS UNIDOS', 'MEXICANOS']}
      subtituloHeader="REGISTRO CIVIL"
      titulo={['ACTA DE', 'DEFUNCIÓN']}
      iconoCentral={<IconoCruzDefuncion color="#424242" />}
      firmaColor="#424242"
    />
  ),
  rfcPrimeraVez: () => (
    <DocumentoBase 
      colorFondo="#f1f8f4"
      colorHeader="#2e7d32"
      colorHeaderFin="#1b5e20"
      textoHeader={['SERVICIO DE', 'ADMINISTRACIÓN TRIBUTARIA']}
      subtituloHeader="REGISTRO FEDERAL DE CONTRIBUYENTES"
      titulo={['RFC POR', 'PRIMERA VEZ']}
      iconoCentral={<IconoDocumentoNuevo color="#2e7d32" />}
      firmaColor="#2e7d32"
    />
  ),
  constanciaFiscal: () => (
    <DocumentoBase 
      colorFondo="#f0f4f8"
      colorHeader="#1565c0"
      colorHeaderFin="#0d47a1"
      textoHeader={['SERVICIO DE', 'ADMINISTRACIÓN TRIBUTARIA']}
      subtituloHeader="SAT"
      titulo={['CONSTANCIA DE', 'SITUACIÓN FISCAL']}
      iconoCentral={<IconoSelloSAT color="#1565c0" />}
      firmaColor="#1565c0"
    />
  ),
  eFirma: () => (
    <DocumentoBase 
      colorFondo="#f3f0f8"
      colorHeader="#6a1b9a"
      colorHeaderFin="#4a148c"
      textoHeader={['SERVICIO DE', 'ADMINISTRACIÓN TRIBUTARIA']}
      subtituloHeader="FIRMA ELECTRÓNICA AVANZADA"
      titulo={['e.firma', '']}
      iconoCentral={<IconoLlaveFirma color="#6a1b9a" />}
      firmaColor="#6a1b9a"
    />
  ),
  modificacionesCsf: () => (
    <DocumentoBase 
      colorFondo="#fdf4f0"
      colorHeader="#d84315"
      colorHeaderFin="#bf360c"
      textoHeader={['SERVICIO DE', 'ADMINISTRACIÓN TRIBUTARIA']}
      subtituloHeader="MODIFICACIONES"
      titulo={['CONSTANCIA', 'SITUACIÓN FISCAL']}
      iconoCentral={<IconoEngranaje color="#d84315" />}
      firmaColor="#d84315"
    />
  ),
  unificacionCurp: () => (
    <DocumentoBase 
      colorFondo="#f1f8f4"
      colorHeader="#2e7d32"
      colorHeaderFin="#1b5e20"
      textoHeader={['REGISTRO NACIONAL DE', 'POBLACIÓN E IDENTIFICACIÓN']}
      subtituloHeader="RENAPO"
      titulo={['UNIFICACIÓN', 'DE CURP']}
      iconoCentral={<IconoDocumentosFusion color="#2e7d32" />}
      firmaColor="#2e7d32"
    />
  ),
  bajaCurp: () => (
    <DocumentoBase 
      colorFondo="#fef0f0"
      colorHeader="#c62828"
      colorHeaderFin="#b71c1c"
      textoHeader={['REGISTRO NACIONAL DE', 'POBLACIÓN E IDENTIFICACIÓN']}
      subtituloHeader="RENAPO"
      titulo={['DAR DE BAJA', 'CURP']}
      iconoCentral={<IconoDocumentoTachado color="#c62828" />}
      firmaColor="#c62828"
    />
  ),
  altaCurp: () => (
    <DocumentoBase 
      colorFondo="#f0f4f8"
      colorHeader="#1565c0"
      colorHeaderFin="#0d47a1"
      textoHeader={['REGISTRO NACIONAL DE', 'POBLACIÓN E IDENTIFICACIÓN']}
      subtituloHeader="RENAPO"
      titulo={['DAR DE ALTA', 'CURP']}
      iconoCentral={<IconoDocumentoCheck color="#1565c0" />}
      firmaColor="#1565c0"
    />
  ),
  descargarCurp: () => (
    <DocumentoBase 
      colorFondo="#f0f8fa"
      colorHeader="#0097a7"
      colorHeaderFin="#00838f"
      textoHeader={['REGISTRO NACIONAL DE', 'POBLACIÓN E IDENTIFICACIÓN']}
      subtituloHeader="RENAPO"
      titulo={['DESCARGAR', 'CURP']}
      iconoCentral={<IconoDescarga color="#0097a7" />}
      firmaColor="#0097a7"
    />
  ),
  certificacionCurp: () => (
    <DocumentoBase 
      colorFondo="#f0f7f6"
      colorHeader="#00897b"
      colorHeaderFin="#00695c"
      textoHeader={['REGISTRO NACIONAL DE', 'POBLACIÓN E IDENTIFICACIÓN']}
      subtituloHeader="RENAPO"
      titulo={['CERTIFICACIÓN', 'CURP']}
      iconoCentral={<IconoSelloCertificado color="#00897b" />}
      firmaColor="#00897b"
    />
  ),
  correccionCurp: () => (
    <DocumentoBase 
      colorFondo="#fef6f0"
      colorHeader="#f57c00"
      colorHeaderFin="#e65100"
      textoHeader={['REGISTRO NACIONAL DE', 'POBLACIÓN E IDENTIFICACIÓN']}
      subtituloHeader="CORRECCIONES"
      titulo={['CORRECCIÓN', 'DE CURP']}
      iconoCentral={<IconoLapizCorreccion color="#f57c00" />}
      firmaColor="#f57c00"
    />
  ),
  correccionExtemporanea: () => (
    <DocumentoBase 
      colorFondo="#fdf5f0"
      colorHeader="#e65100"
      colorHeaderFin="#bf360c"
      textoHeader={['ESTADOS UNIDOS', 'MEXICANOS']}
      subtituloHeader="CORRECCIONES - REGISTRO CIVIL"
      titulo={['ACTAS', 'EXTEMPORÁNEAS']}
      iconoCentral={<IconoLapizCorreccion color="#e65100" />}
      firmaColor="#e65100"
    />
  ),
  correccionMatrimonio: () => (
    <DocumentoBase 
      colorFondo="#fdf6f2"
      colorHeader="#ef6c00"
      colorHeaderFin="#e65100"
      textoHeader={['ESTADOS UNIDOS', 'MEXICANOS']}
      subtituloHeader="CORRECCIONES - REGISTRO CIVIL"
      titulo={['CORRECCIÓN ACTA', 'DE MATRIMONIO']}
      iconoCentral={<IconoLapizCorreccion color="#ef6c00" />}
      firmaColor="#ef6c00"
    />
  ),
  correccionDefuncion: () => (
    <DocumentoBase 
      colorFondo="#fdf4f0"
      colorHeader="#d84315"
      colorHeaderFin="#bf360c"
      textoHeader={['ESTADOS UNIDOS', 'MEXICANOS']}
      subtituloHeader="CORRECCIONES - REGISTRO CIVIL"
      titulo={['CORRECCIÓN ACTA', 'DE DEFUNCIÓN']}
      iconoCentral={<IconoLapizCorreccion color="#d84315" />}
      firmaColor="#d84315"
    />
  ),
  correccionNacimiento: () => (
    <DocumentoBase 
      colorFondo="#fff6f0"
      colorHeader="#ff6f00"
      colorHeaderFin="#e65100"
      textoHeader={['ESTADOS UNIDOS', 'MEXICANOS']}
      subtituloHeader="CORRECCIONES - REGISTRO CIVIL"
      titulo={['CORRECCIÓN ACTA', 'DE NACIMIENTO']}
      iconoCentral={<IconoLapizCorreccion color="#ff6f00" />}
      firmaColor="#ff6f00"
    />
  ),
  cartaNaturalizacion: () => (
    <DocumentoBase 
      colorFondo="#f1f7f3"
      colorHeader="#388e3c"
      colorHeaderFin="#2e7d32"
      textoHeader={['SECRETARÍA DE', 'RELACIONES EXTERIORES']}
      subtituloHeader="NATURALIZACIÓN"
      titulo={['CARTA DE', 'NATURALIZACIÓN']}
      iconoCentral={<IconoPasaporte color="#388e3c" />}
      firmaColor="#388e3c"
    />
  ),
  naturalizacionesMexicanas: () => (
    <DocumentoBase 
      colorFondo="#f1f8f4"
      colorHeader="#2e7d32"
      colorHeaderFin="#1b5e20"
      textoHeader={['SECRETARÍA DE', 'RELACIONES EXTERIORES']}
      subtituloHeader="NATURALIZACIÓN MEXICANA"
      titulo={['TRÁMITE DE', 'NATURALIZACIÓN']}
      iconoCentral={<IconoBanderaMexico color="#2e7d32" />}
      firmaColor="#2e7d32"
    />
  )
};