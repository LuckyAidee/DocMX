import React from 'react';
import { Clock, Shield } from 'lucide-react';

export default function CategoryHeroCorrecciones({ title, subtitle }) {
  return (
    <div
      className="group relative h-96 w-full overflow-hidden rounded-lg transition-all duration-700"
      style={{
        backgroundImage: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-slate-900/30"></div>
      
      {/* Resplandor ambiental sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-500/3 to-transparent group-hover:via-slate-500/5 transition-all duration-700"></div>
      
      {/* Contenido principal */}
      <div className="relative h-full container mx-auto px-8 lg:px-20 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full items-center">
          
          {/* IZQUIERDA - TARJETA HORIZONTAL CON DOCUMENTOS APILADOS Y PERSPECTIVA 3D */}
          <div className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1">
            
            <div className="relative w-96 h-64 lg:w-[480px] lg:h-[320px]">
              
              {/* Glow radial dinámico desde el centro - efecto spotlight */}
              <div className="absolute inset-0 bg-gradient-radial from-slate-400/20 via-slate-500/10 to-transparent blur-3xl scale-90 group-hover:scale-110 group-hover:from-slate-400/25 transition-all duration-700" style={{clipPath: 'polygon(10% 15%, 65% 0%, 100% 30%, 90% 100%, 0% 100%)'}}></div>
              
              {/* Glow exterior secundario */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-400/15 to-gray-500/15 blur-2xl scale-95 group-hover:scale-105 opacity-70 group-hover:opacity-90 transition-all duration-700" style={{clipPath: 'polygon(10% 15%, 65% 0%, 100% 30%, 90% 100%, 0% 100%)'}}></div>
              
              {/* Tarjeta principal horizontal con gradiente - TRAPEZOIDE ESCALENO */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 via-slate-600/15 to-gray-500/10 border border-slate-400/30 group-hover:border-slate-400/50 backdrop-blur-sm transition-all duration-700 shadow-xl shadow-slate-500/10" style={{clipPath: 'polygon(10% 15%, 65% 0%, 100% 30%, 90% 100%, 0% 100%)'}}></div>
              
              {/* Marcos concéntricos para profundidad - TRAPEZOIDE ESCALENO */}
              <div className="absolute inset-6 border border-slate-400/15 opacity-60 group-hover:opacity-100 transition-opacity duration-700" style={{clipPath: 'polygon(10% 15%, 65% 0%, 100% 30%, 90% 100%, 0% 100%)'}}></div>
              <div className="absolute inset-12 border border-slate-400/10 opacity-40 group-hover:opacity-70 transition-opacity duration-700" style={{clipPath: 'polygon(10% 15%, 65% 0%, 100% 30%, 90% 100%, 0% 100%)'}}></div>
              <div className="absolute inset-16 border border-slate-400/5 opacity-30 group-hover:opacity-50 transition-opacity duration-700" style={{clipPath: 'polygon(10% 15%, 65% 0%, 100% 30%, 90% 100%, 0% 100%)'}}></div>
              
              {/* Vignette interno */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900/20" style={{clipPath: 'polygon(10% 15%, 65% 0%, 100% 30%, 90% 100%, 0% 100%)'}}></div>
              
              {/* PARTÍCULAS ELEGANTES - Polvo de luz flotante */}
              {/* Partícula 1 - Superior izquierda */}
              <div 
                className="absolute top-8 left-12 w-1 h-1 bg-slate-400/40 rounded-full blur-[0.5px] opacity-60 group-hover:opacity-100 transition-all duration-1000"
                style={{
                  animation: 'float 4s ease-in-out infinite',
                  animationDelay: '0s'
                }}
              ></div>
              
              {/* Partícula 2 - Superior derecha */}
              <div 
                className="absolute top-16 right-16 w-1.5 h-1.5 bg-gray-400/30 rounded-full blur-[0.5px] opacity-50 group-hover:opacity-90 transition-all duration-1000"
                style={{
                  animation: 'float 5s ease-in-out infinite',
                  animationDelay: '0.5s'
                }}
              ></div>
              
              {/* Partícula 3 - Izquierda media */}
              <div 
                className="absolute top-1/2 left-8 w-0.5 h-3 bg-gradient-to-b from-slate-400/40 to-transparent rounded-full blur-[0.5px] opacity-40 group-hover:opacity-80 transition-all duration-1000"
                style={{
                  animation: 'float 6s ease-in-out infinite, rotate 8s linear infinite',
                  animationDelay: '1s'
                }}
              ></div>
              
              {/* Partícula 4 - Derecha superior */}
              <div 
                className="absolute top-20 right-24 w-1 h-1 bg-slate-300/50 rounded-full blur-[0.5px] opacity-50 group-hover:opacity-100 transition-all duration-1000"
                style={{
                  animation: 'float 4.5s ease-in-out infinite',
                  animationDelay: '1.5s'
                }}
              ></div>
              
              {/* Partícula 5 - Inferior izquierda */}
              <div 
                className="absolute bottom-20 left-16 w-0.5 h-2 bg-gradient-to-t from-gray-400/40 to-transparent rounded-full blur-[0.5px] opacity-40 group-hover:opacity-70 transition-all duration-1000"
                style={{
                  animation: 'float 5.5s ease-in-out infinite, rotate 10s linear infinite reverse',
                  animationDelay: '2s'
                }}
              ></div>
              
              {/* Partícula 6 - Inferior derecha */}
              <div 
                className="absolute bottom-16 right-12 w-1.5 h-1.5 bg-slate-400/35 rounded-full blur-[0.5px] opacity-45 group-hover:opacity-85 transition-all duration-1000"
                style={{
                  animation: 'float 4.8s ease-in-out infinite',
                  animationDelay: '2.5s'
                }}
              ></div>
              
              {/* Partícula 7 - Centro superior */}
              <div 
                className="absolute top-6 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-300/45 rounded-full blur-[0.5px] opacity-50 group-hover:opacity-95 transition-all duration-1000"
                style={{
                  animation: 'float 5.2s ease-in-out infinite',
                  animationDelay: '3s'
                }}
              ></div>
              
              {/* Partícula 8 - Derecha media */}
              <div 
                className="absolute top-1/2 right-6 w-0.5 h-2.5 bg-gradient-to-b from-slate-400/35 to-transparent rounded-full blur-[0.5px] opacity-35 group-hover:opacity-75 transition-all duration-1000"
                style={{
                  animation: 'float 6.5s ease-in-out infinite, rotate 12s linear infinite',
                  animationDelay: '3.5s'
                }}
              ></div>
              
              {/* Contenedor de documentos apilados con perspectiva 3D */}
              <div className="absolute inset-0 flex items-center justify-center" style={{perspective: '1000px'}}>
                
                {/* Documento 3 - más atrás (más desplazado) */}
                <div className="absolute transform -rotate-6 translate-x-6 translate-y-6 opacity-20 group-hover:opacity-30 group-hover:translate-x-8 group-hover:translate-y-8 transition-all duration-700">
                  <svg 
                    className="w-36 h-48 lg:w-44 lg:h-56 object-contain drop-shadow-xl" 
                    viewBox="0 0 200 260" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="200" height="260" fill="#e5e7eb" rx="4"/>
                    <rect width="200" height="55" fill="#6b7280" rx="4"/>
                  </svg>
                </div>
                
                {/* Documento 2 - medio (menos desplazado) */}
                <div className="absolute transform -rotate-4 translate-x-3 translate-y-3 opacity-40 group-hover:opacity-50 group-hover:translate-x-5 group-hover:translate-y-5 transition-all duration-700">
                  <svg 
                    className="w-40 h-52 lg:w-48 lg:h-60 object-contain drop-shadow-2xl" 
                    viewBox="0 0 200 260" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="200" height="260" fill="#f3f4f6" rx="4"/>
                    <rect width="200" height="55" fill="#9ca3af" rx="4"/>
                  </svg>
                </div>
                
                {/* Documento principal - al frente con perspectiva 3D */}
                <div className="relative transform -rotate-3 group-hover:-rotate-1 group-hover:scale-105 group-hover:-translate-y-3 transition-all duration-700" style={{transformStyle: 'preserve-3d'}}>
                  
                  {/* Sombra proyectada DRAMÁTICA */}
                  <div className="absolute inset-0 translate-y-10 translate-x-4 blur-2xl bg-slate-900/60 rounded-lg scale-95 group-hover:blur-3xl group-hover:translate-y-14 transition-all duration-700"></div>
                  
                  {/* SVG del documento principal - DISEÑO CORRECCIÓN */}
                  <svg 
                    className="relative w-44 h-56 lg:w-52 lg:h-64 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
                    viewBox="0 0 200 260" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Documento base */}
                    <rect width="200" height="260" fill="#fafafa" rx="4"/>
                    
                    {/* Sombra interna sutil para más realismo */}
                    <rect width="200" height="260" fill="url(#innerShadowCorrecciones)" rx="4"/>
                    
                    {/* Header con gradiente */}
                    <defs>
                      <linearGradient id="headerGradientCorrecciones" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#64748b', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#475569', stopOpacity: 1}} />
                      </linearGradient>
                      <linearGradient id="innerShadowCorrecciones" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#000000', stopOpacity: 0.02}} />
                        <stop offset="100%" style={{stopColor: '#000000', stopOpacity: 0}} />
                      </linearGradient>
                    </defs>
                    
                    <rect width="200" height="55" fill="url(#headerGradientCorrecciones)" rx="4"/>
                    <text x="100" y="25" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" letterSpacing="1.5">CORRECCIÓN DE</text>
                    <text x="100" y="43" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" letterSpacing="1.5">ACTA</text>
                    
                    {/* Símbolo de corrección (checkmark) */}
                    <circle cx="100" cy="85" r="20" fill="#64748b" opacity="0.3"/>
                    <path d="M 90 85 L 95 90 L 110 75" stroke="#64748b" strokeWidth="3" fill="none" opacity="0.5"/>
                    
                    {/* Líneas de contenido limpias */}
                    <rect x="20" y="120" width="160" height="8" fill="#2d3748" opacity="0.2" rx="2"/>
                    <rect x="20" y="135" width="140" height="8" fill="#2d3748" opacity="0.2" rx="2"/>
                    
                    <rect x="20" y="155" width="160" height="8" fill="#2d3748" opacity="0.15" rx="2"/>
                    <rect x="20" y="170" width="140" height="8" fill="#2d3748" opacity="0.15" rx="2"/>
                    <rect x="20" y="185" width="120" height="8" fill="#2d3748" opacity="0.15" rx="2"/>
                    
                    {/* Firma elegante */}
                    <path d="M 40 220 Q 60 215, 80 220 T 120 220" stroke="#64748b" strokeWidth="2" fill="none" opacity="0.3"/>
                  </svg>
                  
                  {/* Brillo sutil en el borde del documento */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-slate-400/20 to-transparent rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
              </div>
              
              {/* Badge único - bien posicionado */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2.5 bg-slate-800/70 backdrop-blur-md rounded-xl border border-slate-500/20 shadow-lg transform group-hover:border-slate-500/40 group-hover:shadow-slate-500/20 transition-all duration-500">
                <Clock className="w-4 h-4 text-slate-400" strokeWidth={2.5} />
                <span className="text-white text-sm font-medium">24-48 hrs</span>
              </div>
            </div>
          </div>
          
          {/* DERECHA - TEXTO SOFISTICADO */}
          <div className="space-y-7 z-10 order-1 lg:order-2">
            
            {/* Label superior elegante */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-slate-500/8 backdrop-blur-sm rounded-lg border border-slate-500/20">
              <Shield className="w-4 h-4 text-slate-400" strokeWidth={2.5} />
              <span className="text-slate-300 text-sm font-medium">Servicios de Corrección</span>
            </div>
            
            {/* Título con gradiente sutil */}
            <h1 className="text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tight leading-none">
              <span className="bg-gradient-to-br from-white via-gray-50 to-slate-100 bg-clip-text text-transparent group-hover:from-slate-100 group-hover:via-white group-hover:to-white transition-all duration-700">
                {title}
              </span>
            </h1>
            
            {/* Línea decorativa con punto elegante */}
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-20 bg-gradient-to-r from-slate-500 to-slate-400 rounded-full group-hover:w-28 transition-all duration-500"></div>
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full opacity-60"></div>
            </div>
            
            {/* Subtítulo refinado */}
            {subtitle && (
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-lg tracking-wide">
                {subtitle}
              </p>
            )}
            
            {/* Un solo detalle adicional - sin saturar */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-slate-400/80 text-sm">
                <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                <span className="font-medium">Trámite oficial y verificado</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Elemento decorativo único en esquina - rectángulo redondeado */}
      <div className="absolute top-10 right-10 w-24 h-24 rounded-2xl border border-slate-500/10 opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"></div>
      
      {/* Borde inferior elegante */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500/40 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Estilos para animaciones de partículas */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}