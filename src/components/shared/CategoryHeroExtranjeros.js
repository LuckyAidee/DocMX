import React from 'react';
import { Clock, Shield, Globe } from 'lucide-react';

export default function CategoryHeroExtranjeros({ title, subtitle }) {
  return (
    <div className="relative h-96 w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      
      {/* Contenedor con forma de Trapezoide Bisósceles */}
      <div 
        className="absolute top-1/2 left-1/2 w-[500px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 opacity-20 blur-3xl"
        style={{
          clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
          animation: 'float 8s ease-in-out infinite'
        }}
      />

      {/* Segundo trapezoide más pequeño */}
      <div 
        className="absolute top-1/2 left-1/2 w-[400px] h-[350px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tl from-slate-600 via-slate-500 to-slate-600 opacity-15 blur-2xl"
        style={{
          clipPath: 'polygon(25% 0%, 75% 0%, 95% 100%, 5% 100%)',
          animation: 'float 10s ease-in-out infinite reverse'
        }}
      />

      {/* Tercer trapezoide aún más pequeño */}
      <div 
        className="absolute top-1/2 left-1/2 w-[300px] h-[280px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-slate-500 via-slate-400 to-slate-500 opacity-25 blur-xl"
        style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 90% 100%, 10% 100%)',
          animation: 'float 12s ease-in-out infinite'
        }}
      />

      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-slate-400 rounded-full opacity-40 animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-slate-300 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-slate-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-60 right-40 w-1.5 h-1.5 bg-slate-500 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Líneas decorativas diagonales */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent transform -rotate-12 origin-left" />
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent transform -rotate-12 origin-left" />
        <div className="absolute top-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent transform -rotate-12 origin-left" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        
        {/* Badge superior */}
        <div className="mb-6 inline-flex items-center gap-2 px-5 py-2 bg-slate-800/60 backdrop-blur-md rounded-full border border-slate-600/50">
          <Globe className="w-4 h-4 text-slate-300" strokeWidth={2.5} />
          <span className="text-slate-200 text-sm font-semibold tracking-wide">
            Servicios de Naturalización
          </span>
        </div>

        {/* Título principal */}
        <h1 className="text-7xl font-black text-white mb-4 tracking-tight">
          {title}
        </h1>

        {/* Subtítulo */}
        {subtitle && (
          <p className="text-slate-300 text-xl font-medium max-w-2xl mb-8">
            {subtitle}
          </p>
        )}

        {/* Decoración inferior */}
        <div className="flex items-center gap-6 text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" strokeWidth={2} />
            <span className="text-sm font-medium">Trámite oficial y verificado</span>
          </div>
          <div className="w-px h-6 bg-slate-600" />
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" strokeWidth={2} />
            <span className="text-sm font-medium">Proceso seguro y confiable</span>
          </div>
        </div>
      </div>

      {/* Gradiente inferior para fusión */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      
      {/* Animación de flotación */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-20px); }
        }
      `}</style>
    </div>
  );
}