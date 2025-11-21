import React, { useState } from 'react';
import { Shield, FileText, CreditCard, PenTool, UserCheck, FileCheck, X, AlertCircle } from 'lucide-react';

export default function AnnouncementBanner() {
  // Estado para controlar qué "cara" mostrar: 'normal' o 'announcement'
  const [currentView, setCurrentView] = useState('announcement');

  // ========================================================================
  // SECCIÓN PARA FUTURA INTEGRACIÓN CON BACKEND
  // ========================================================================
  // TODO: Reemplazar con datos del backend
  // - Conectar API para obtener anuncios dinámicos
  // - Estructura esperada del backend:
  //   {
  //     id: string,
  //     title: string,
  //     message: string,
  //     type: 'info' | 'warning' | 'maintenance' | 'new-feature',
  //     isActive: boolean,
  //     startDate: Date,
  //     endDate: Date
  //   }
  // - Ejemplo de llamada:
  //   const announcement = await apiService.getActiveAnnouncement();
  //   if (announcement && announcement.isActive) {
  //     setCurrentView('announcement'); // Activar vista de anuncios
  //   }
  // - Para testing manual, cambiar el estado inicial a 'announcement'
  // ========================================================================

  const services = [
    { name: 'Actas', icon: FileText, position: 'top-12 left-[15%]', rotation: '-6', delay: '0s', color: 'teal' },
    { name: 'RFC', icon: CreditCard, position: 'top-8 right-[18%]', rotation: '8', delay: '0.5s', color: 'cyan' },
    { name: 'CURP', icon: Shield, position: 'top-1/2 left-[8%]', rotation: '-4', delay: '1s', color: 'teal' },
    { name: 'e-Firma', icon: PenTool, position: 'top-1/2 right-[10%]', rotation: '6', delay: '1.5s', color: 'cyan' },
    { name: 'Correcciones', icon: FileCheck, position: 'bottom-16 left-[20%]', rotation: '4', delay: '2s', color: 'teal' },
    { name: 'Extranjeros', icon: UserCheck, position: 'bottom-14 right-[22%]', rotation: '-5', delay: '2.5s', color: 'cyan' }
  ];

  // CARA 2: Vista de Anuncios
  if (currentView === 'announcement') {
    return (
      <div className="group relative h-80 rounded-lg overflow-hidden shadow-2xl mb-6 bg-gradient-to-br from-orange-900 via-red-900 to-orange-900">

        {/* Botón de cerrar (solo visible en vista de anuncios) */}
        <button
          onClick={() => setCurrentView('normal')}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300 group/close"
          aria-label="Cerrar anuncio"
        >
          <X className="w-5 h-5 text-white/70 group-hover/close:text-white transition-colors duration-300" strokeWidth={2} />
        </button>

        {/* Glow ambiental para anuncios */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent group-hover:via-orange-500/15 transition-all duration-700"></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-transparent to-red-900/40"></div>

        {/* Contenido del anuncio */}
        <div className="relative h-full flex flex-col items-center justify-center z-10 px-8">

          {/* Icono de alerta */}
          <div className="mb-6">
            <AlertCircle className="w-16 h-16 text-orange-400" strokeWidth={2} />
          </div>

          {/* Título del anuncio */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Anuncio Importante
          </h2>

          {/* Mensaje del anuncio */}
          <p className="text-lg md:text-xl text-gray-200 text-center max-w-2xl mb-6">
            {/* TODO: Reemplazar con datos dinámicos del backend */}
            DOCUMENTOS DE EXTRANJEROS PROXIMAMENTE.
          </p>

          {/* Badge del tipo de anuncio */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-md rounded-lg border border-orange-500/30">
            <span className="text-orange-300 text-sm font-medium tracking-wide">Mantenimiento</span>
          </div>
        </div>

        {/* Borde inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>
      </div>
    );
  }

  // CARA 1: Vista Normal (por defecto)
  return (
    <div className="group relative h-80 rounded-lg overflow-hidden shadow-2xl mb-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

      {/* Glow ambiental sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/5 to-transparent group-hover:via-teal-500/8 transition-all duration-700"></div>

      {/* Overlay con textura */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-slate-900/40"></div>
      
      {/* Partículas de fondo elegantes */}
      <div className="absolute top-10 left-[12%] w-1 h-1 bg-teal-400/30 rounded-full blur-[0.5px] opacity-50 group-hover:opacity-80 transition-opacity duration-1000" style={{animation: 'float 5s ease-in-out infinite'}}></div>
      <div className="absolute top-20 right-[15%] w-1.5 h-1.5 bg-cyan-400/25 rounded-full blur-[0.5px] opacity-40 group-hover:opacity-70 transition-opacity duration-1000" style={{animation: 'float 6s ease-in-out infinite', animationDelay: '1s'}}></div>
      <div className="absolute bottom-24 left-[25%] w-1 h-1 bg-teal-300/35 rounded-full blur-[0.5px] opacity-45 group-hover:opacity-75 transition-opacity duration-1000" style={{animation: 'float 5.5s ease-in-out infinite', animationDelay: '2s'}}></div>
      <div className="absolute bottom-28 right-[28%] w-1.5 h-1.5 bg-cyan-300/30 rounded-full blur-[0.5px] opacity-40 group-hover:opacity-70 transition-opacity duration-1000" style={{animation: 'float 4.8s ease-in-out infinite', animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-[30%] w-0.5 h-2 bg-gradient-to-b from-teal-400/30 to-transparent rounded-full blur-[0.5px] opacity-35 group-hover:opacity-65 transition-opacity duration-1000" style={{animation: 'float 6.5s ease-in-out infinite, rotate 10s linear infinite', animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/3 right-[35%] w-0.5 h-2.5 bg-gradient-to-b from-cyan-400/25 to-transparent rounded-full blur-[0.5px] opacity-30 group-hover:opacity-60 transition-opacity duration-1000" style={{animation: 'float 5.8s ease-in-out infinite, rotate 12s linear infinite reverse', animationDelay: '2.5s'}}></div>
      
      {/* Mini-documentos flotantes de servicios */}
      {services.map((service, index) => {
        const IconComponent = service.icon;
        const colorClasses = service.color === 'teal' 
          ? 'from-teal-500/20 to-teal-600/10 border-teal-400/30 group-hover:border-teal-400/50 shadow-teal-500/10'
          : 'from-cyan-500/20 to-cyan-600/10 border-cyan-400/30 group-hover:border-cyan-400/50 shadow-cyan-500/10';
        
        return (
          <div
            key={index}
            className={`absolute ${service.position} transform transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2`}
            style={{
              animation: `float 4s ease-in-out infinite, rotate-subtle 8s ease-in-out infinite`,
              animationDelay: service.delay,
              rotate: `${service.rotation}deg`
            }}
          >
            {/* Sombra del documento */}
            <div className="absolute inset-0 translate-y-3 translate-x-1 blur-lg bg-slate-900/40 rounded-lg scale-95 group-hover:blur-xl group-hover:translate-y-4 transition-all duration-700"></div>
            
            {/* Mini documento SVG */}
            <div className={`relative w-24 h-28 rounded-lg bg-gradient-to-br ${colorClasses} border backdrop-blur-sm transition-all duration-700 shadow-lg flex flex-col items-center justify-center gap-2 p-3`}>
              {/* Icono del servicio */}
              <IconComponent className={`w-8 h-8 ${service.color === 'teal' ? 'text-teal-400' : 'text-cyan-400'} opacity-80`} strokeWidth={2} />
              
              {/* Nombre del servicio */}
              <span className="text-white text-xs font-semibold tracking-wide">{service.name}</span>
              
              {/* Mini líneas decorativas */}
              <div className="w-full space-y-1 mt-1">
                <div className="h-0.5 w-3/4 mx-auto bg-white/10 rounded"></div>
                <div className="h-0.5 w-1/2 mx-auto bg-white/10 rounded"></div>
              </div>
            </div>
          </div>
        );
      })}
      
      {/* Contenido central principal */}
      <div className="relative h-full flex flex-col items-center justify-center z-10 px-8">
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 backdrop-blur-md rounded-lg border border-teal-500/20 mb-6 group-hover:border-teal-500/40 transition-all duration-500">
          <Shield className="w-4 h-4 text-teal-400" strokeWidth={2.5} />
          <span className="text-teal-300 text-sm font-medium tracking-wide">Plataforma para mayoristas</span>
        </div>
        
        {/* Título principal */}
        <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none mb-4">
          <span className="bg-gradient-to-br from-white via-gray-50 to-teal-100 bg-clip-text text-transparent group-hover:from-teal-100 group-hover:via-white group-hover:to-white transition-all duration-700">
            Doc<span className="font-light italic">MX</span>
          </span>
          <span className="ml-4 font-light italic bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">
            Marketplace
          </span>
        </h1>
        
        {/* Línea decorativa */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full opacity-60"></div>
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full"></div>
        </div>
        
        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-6">
          Plataforma de documentos mexicanos
        </p>
      </div>
      
      {/* Logo pequeño en esquina */}
      <div className="absolute bottom-4 right-6 text-white text-xs opacity-60 group-hover:opacity-80 transition-opacity duration-300">
        <span className="font-semibold">DocMX</span> by mamel
      </div>
      
      {/* Borde inferior elegante */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Estilos para animaciones */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes rotate-subtle {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(3deg); }
        }
      `}</style>
    </div>
  );
}