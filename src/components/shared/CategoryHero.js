import React from 'react';
import { Clock, Shield } from 'lucide-react';

export default function CategoryHero({ title, subtitle, backgroundImage }) {
  return (
    <div
      className="group relative h-96 w-full overflow-hidden rounded-lg transition-all duration-700"
      style={{
        backgroundImage: backgroundImage ? `url('${backgroundImage}')` : 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-slate-900/30"></div>
      
      {/* Resplandor ambiental sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/3 to-transparent group-hover:via-teal-500/5 transition-all duration-700"></div>
      
      {/* Contenido principal */}
      <div className="relative h-full container mx-auto px-8 lg:px-20 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full items-center">
          
          {/* IZQUIERDA - TARJETA HORIZONTAL CON DOCUMENTOS APILADOS Y PERSPECTIVA 3D */}
          <div className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1">
            
            <div className="relative w-96 h-64 lg:w-[480px] lg:h-[320px]">
              
              {/* Glow radial dinámico desde el centro - efecto spotlight */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-radial from-teal-400/30 via-teal-500/15 to-transparent blur-3xl scale-90 group-hover:scale-110 group-hover:from-teal-400/40 transition-all duration-700"></div>
              
              {/* Glow exterior secundario */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-400/20 to-cyan-500/20 blur-2xl scale-95 group-hover:scale-105 opacity-70 group-hover:opacity-90 transition-all duration-700"></div>
              
              {/* Tarjeta principal horizontal con gradiente */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/25 via-teal-600/20 to-cyan-500/15 border border-teal-400/40 group-hover:border-teal-400/60 backdrop-blur-sm transition-all duration-700 shadow-xl shadow-teal-500/10"></div>
              
              {/* Marcos concéntricos rectangulares para profundidad */}
              <div className="absolute inset-6 rounded-2xl border border-teal-400/15 opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute inset-12 rounded-xl border border-teal-400/10 opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
              <div className="absolute inset-16 rounded-lg border border-teal-400/5 opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
              
              {/* Vignette interno */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-slate-900/20"></div>
              
              {/* PARTÍCULAS ELEGANTES - Polvo de luz flotante */}
              {/* Partícula 1 - Superior izquierda */}
              <div 
                className="absolute top-8 left-12 w-1 h-1 bg-teal-400/40 rounded-full blur-[0.5px] opacity-60 group-hover:opacity-100 transition-all duration-1000"
                style={{
                  animation: 'float 4s ease-in-out infinite',
                  animationDelay: '0s'
                }}
              ></div>
              
              {/* Partícula 2 - Superior derecha */}
              <div 
                className="absolute top-16 right-16 w-1.5 h-1.5 bg-cyan-400/30 rounded-full blur-[0.5px] opacity-50 group-hover:opacity-90 transition-all duration-1000"
                style={{
                  animation: 'float 5s ease-in-out infinite',
                  animationDelay: '0.5s'
                }}
              ></div>
              
              {/* Partícula 3 - Izquierda media */}
              <div 
                className="absolute top-1/2 left-8 w-0.5 h-3 bg-gradient-to-b from-teal-400/40 to-transparent rounded-full blur-[0.5px] opacity-40 group-hover:opacity-80 transition-all duration-1000"
                style={{
                  animation: 'float 6s ease-in-out infinite, rotate 8s linear infinite',
                  animationDelay: '1s'
                }}
              ></div>
              
              {/* Partícula 4 - Derecha superior */}
              <div 
                className="absolute top-20 right-24 w-1 h-1 bg-teal-300/50 rounded-full blur-[0.5px] opacity-50 group-hover:opacity-100 transition-all duration-1000"
                style={{
                  animation: 'float 4.5s ease-in-out infinite',
                  animationDelay: '1.5s'
                }}
              ></div>
              
              {/* Partícula 5 - Inferior izquierda */}
              <div 
                className="absolute bottom-20 left-16 w-0.5 h-2 bg-gradient-to-t from-cyan-400/40 to-transparent rounded-full blur-[0.5px] opacity-40 group-hover:opacity-70 transition-all duration-1000"
                style={{
                  animation: 'float 5.5s ease-in-out infinite, rotate 10s linear infinite reverse',
                  animationDelay: '2s'
                }}
              ></div>
              
              {/* Partícula 6 - Inferior derecha */}
              <div 
                className="absolute bottom-16 right-12 w-1.5 h-1.5 bg-teal-400/35 rounded-full blur-[0.5px] opacity-45 group-hover:opacity-85 transition-all duration-1000"
                style={{
                  animation: 'float 4.8s ease-in-out infinite',
                  animationDelay: '2.5s'
                }}
              ></div>
              
              {/* Partícula 7 - Centro superior */}
              <div 
                className="absolute top-6 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-300/45 rounded-full blur-[0.5px] opacity-50 group-hover:opacity-95 transition-all duration-1000"
                style={{
                  animation: 'float 5.2s ease-in-out infinite',
                  animationDelay: '3s'
                }}
              ></div>
              
              {/* Partícula 8 - Derecha media */}
              <div 
                className="absolute top-1/2 right-6 w-0.5 h-2.5 bg-gradient-to-b from-teal-400/35 to-transparent rounded-full blur-[0.5px] opacity-35 group-hover:opacity-75 transition-all duration-1000"
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
                    <rect width="200" height="60" fill="#6b7280" rx="4"/>
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
                    <rect width="200" height="60" fill="#9ca3af" rx="4"/>
                  </svg>
                </div>
                
                {/* Documento principal - al frente con perspectiva 3D */}
                <div className="relative transform -rotate-3 group-hover:-rotate-1 group-hover:scale-105 group-hover:-translate-y-3 transition-all duration-700" style={{transformStyle: 'preserve-3d'}}>
                  
                  {/* Sombra proyectada DRAMÁTICA */}
                  <div className="absolute inset-0 translate-y-10 translate-x-4 blur-2xl bg-slate-900/60 rounded-lg scale-95 group-hover:blur-3xl group-hover:translate-y-14 transition-all duration-700"></div>
                  
                  {/* SVG del documento principal */}
                  <svg 
                    className="relative w-44 h-56 lg:w-52 lg:h-64 object-contain drop-shadow-2xl filter group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
                    viewBox="0 0 200 260" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Documento base */}
                    <rect width="200" height="260" fill="#fafafa" rx="4"/>
                    
                    {/* Sombra interna sutil para más realismo */}
                    <rect width="200" height="260" fill="url(#innerShadow)" rx="4"/>
                    
                    {/* Header con gradiente sutil */}
                    <defs>
                      <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#14b8a6', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#0d9488', stopOpacity: 1}} />
                      </linearGradient>
                      <linearGradient id="innerShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#000000', stopOpacity: 0.02}} />
                        <stop offset="100%" style={{stopColor: '#000000', stopOpacity: 0}} />
                      </linearGradient>
                    </defs>
                    
                    <rect width="200" height="60" fill="url(#headerGradient)" rx="4"/>
                    <text x="100" y="25" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold" letterSpacing="1.5">ACTA DE</text>
                    <text x="100" y="45" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold" letterSpacing="1.5">REGISTRO</text>
                    
                    {/* Escudo con más detalle */}
                    <circle cx="100" cy="100" r="28" fill="#14b8a6" opacity="0.15"/>
                    <circle cx="100" cy="100" r="23" fill="none" stroke="#14b8a6" strokeWidth="2.5" opacity="0.5"/>
                    <circle cx="100" cy="100" r="18" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.3"/>
                    <text x="100" y="106" textAnchor="middle" fill="#2d3748" fontSize="10" fontWeight="bold" opacity="0.5">OFICIAL</text>
                    
                    {/* Líneas de contenido limpias */}
                    <rect x="25" y="145" width="150" height="7" fill="#2d3748" opacity="0.1" rx="1.5"/>
                    <rect x="25" y="160" width="130" height="7" fill="#2d3748" opacity="0.1" rx="1.5"/>
                    <rect x="25" y="175" width="140" height="7" fill="#2d3748" opacity="0.1" rx="1.5"/>
                    
                    <rect x="25" y="200" width="150" height="6" fill="#2d3748" opacity="0.08" rx="1.5"/>
                    <rect x="25" y="214" width="120" height="6" fill="#2d3748" opacity="0.08" rx="1.5"/>
                    <rect x="25" y="228" width="135" height="6" fill="#2d3748" opacity="0.08" rx="1.5"/>
                    
                    {/* Firma elegante */}
                    <path d="M 50 248 Q 70 243, 90 248" stroke="#14b8a6" strokeWidth="2" fill="none" opacity="0.3"/>
                    <rect x="45" y="251" width="50" height="0.5" fill="#14b8a6" opacity="0.4"/>
                  </svg>
                  
                  {/* Brillo sutil en el borde del documento */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-teal-400/20 to-transparent rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
              </div>
              
              {/* Badge único - bien posicionado */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2.5 bg-slate-800/70 backdrop-blur-md rounded-xl border border-teal-500/20 shadow-lg transform group-hover:border-teal-500/40 group-hover:shadow-teal-500/20 transition-all duration-500">
                <Clock className="w-4 h-4 text-teal-400" strokeWidth={2.5} />
                <span className="text-white text-sm font-medium">24-48 hrs</span>
              </div>
            </div>
          </div>
          
          {/* DERECHA - TEXTO SOFISTICADO */}
          <div className="space-y-7 z-10 order-1 lg:order-2">
            
            {/* Label superior elegante */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-teal-500/8 backdrop-blur-sm rounded-lg border border-teal-500/20">
              <Shield className="w-4 h-4 text-teal-400" strokeWidth={2.5} />
              <span className="text-teal-300 text-sm font-medium">Documentos Certificados</span>
            </div>
            
            {/* Título con gradiente sutil */}
            <h1 className="text-7xl md:text-8xl lg:text-[7rem] font-black tracking-tight leading-none">
              <span className="bg-gradient-to-br from-white via-gray-50 to-teal-100 bg-clip-text text-transparent group-hover:from-teal-100 group-hover:via-white group-hover:to-white transition-all duration-700">
                {title}
              </span>
            </h1>
            
            {/* Línea decorativa con punto elegante */}
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-20 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full group-hover:w-28 transition-all duration-500"></div>
              <div className="w-1.5 h-1.5 bg-teal-400 rounded-full opacity-60"></div>
            </div>
            
            {/* Subtítulo refinado */}
            {subtitle && (
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-lg tracking-wide">
                {subtitle}
              </p>
            )}
            
            {/* Un solo detalle adicional - sin saturar */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-teal-400/80 text-sm">
                <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                <span className="font-medium">Trámite oficial y seguro</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Elemento decorativo único en esquina - rectángulo redondeado */}
      <div className="absolute top-10 right-10 w-24 h-24 rounded-2xl border border-teal-500/10 opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"></div>
      
      {/* Borde inferior elegante */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
      
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