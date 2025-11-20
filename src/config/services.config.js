export const servicesConfig = {
  'acta-nacimiento': {
    id: 'acta-nacimiento',
    nombre: 'Acta de Nacimiento',
    categoria: 'Actas',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Obtén tu acta de nacimiento certificada de manera rápida y segura. Documento oficial expedido por el Registro Civil.',
    svgKey: 'actaNacimiento',
    camposFormulario: ['curp'],
    esEspecializado: false,
    colorAccent: '#2d5016',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'Actas', path: '/actas' },
      { label: 'Acta de Nacimiento', path: '/servicio/acta-nacimiento' }
    ]
  },
  'acta-matrimonio': {
    id: 'acta-matrimonio',
    nombre: 'Acta de Matrimonio',
    categoria: 'Actas',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Obtén tu acta de matrimonio certificada de manera rápida y segura. Documento oficial expedido por el Registro Civil.',
    svgKey: 'actaMatrimonio',
    camposFormulario: ['curp'],
    esEspecializado: false,
    colorAccent: '#8b4513',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'Actas', path: '/actas' },
      { label: 'Acta de Matrimonio', path: '/servicio/acta-matrimonio' }
    ]
  },
  'acta-defuncion': {
    id: 'acta-defuncion',
    nombre: 'Acta de Defunción',
    categoria: 'Actas',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Obtén tu acta de defunción certificada de manera rápida y segura. Documento oficial expedido por el Registro Civil.',
    svgKey: 'actaDefuncion',
    camposFormulario: ['curp'],
    esEspecializado: false,
    colorAccent: '#424242',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'Actas', path: '/actas' },
      { label: 'Acta de Defunción', path: '/servicio/acta-defuncion' }
    ]
  },
  'rfc-primera-vez': {
    id: 'rfc-primera-vez',
    nombre: 'RFC por Primera Vez',
    categoria: 'RFC',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Tramita tu RFC por primera vez. Un agente especializado te guiará en el proceso.',
    svgKey: 'rfcPrimeraVez',
    camposFormulario: null,
    esEspecializado: true,
    colorAccent: '#2e7d32',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'RFC', path: '/rfc' },
      { label: 'RFC por Primera Vez', path: '/servicio/rfc-primera-vez' }
    ]
  },
  'constancia-fiscal-rfc': {
    id: 'constancia-fiscal-rfc',
    nombre: 'Constancia de Situación Fiscal con RFC',
    categoria: 'RFC',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Obtén tu Constancia de Situación Fiscal del SAT de manera inmediata.',
    svgKey: 'constanciaFiscal',
    camposFormulario: ['rfc'],
    esEspecializado: false,
    colorAccent: '#1565c0',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'RFC', path: '/rfc' },
      { label: 'Constancia Fiscal con RFC', path: '/servicio/constancia-fiscal-rfc' }
    ]
  },
  'constancia-fiscal-rfc-idcif': {
    id: 'constancia-fiscal-rfc-idcif',
    nombre: 'Constancia de Situación Fiscal con RFC y IDCIF',
    categoria: 'RFC',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Obtén tu Constancia de Situación Fiscal del SAT proporcionando RFC y IdCIF.',
    svgKey: 'constanciaFiscal',
    camposFormulario: ['rfc', 'idcif'],
    esEspecializado: false,
    colorAccent: '#1565c0',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'RFC', path: '/rfc' },
      { label: 'Constancia Fiscal con RFC y IDCIF', path: '/servicio/constancia-fiscal-rfc-idcif' }
    ]
  },
  'e-firma': {
    id: 'e-firma',
    nombre: 'e.firma',
    categoria: 'RFC',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Obtén tu certificado de e.firma (Firma Electrónica Avanzada). Trámite especializado.',
    svgKey: 'eFirma',
    camposFormulario: null,
    esEspecializado: true,
    colorAccent: '#1565c0',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'RFC', path: '/rfc' },
      { label: 'e.firma', path: '/servicio/e-firma' }
    ]
  },
  'modificaciones-csf': {
    id: 'modificaciones-csf',
    nombre: 'Modificaciones CSF',
    categoria: 'RFC',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Realiza modificaciones a tu Constancia de Situación Fiscal. Trámite especializado.',
    svgKey: 'modificacionesCsf',
    camposFormulario: null,
    esEspecializado: true,
    colorAccent: '#e65100',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'RFC', path: '/rfc' },
      { label: 'Modificaciones CSF', path: '/servicio/modificaciones-csf' }
    ]
  },
  'unificacion-curp': {
    id: 'unificacion-curp',
    nombre: 'Unificación de CURP',
    categoria: 'CURP',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Unifica registros duplicados de CURP. Trámite especializado con RENAPO.',
    svgKey: 'curpUnificacion',
    camposFormulario: null,
    esEspecializado: true,
    colorAccent: '#2e7d32',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'CURP', path: '/curp' },
      { label: 'Unificación de CURP', path: '/servicio/unificacion-curp' }
    ]
  },
  'baja-curp': {
    id: 'baja-curp',
    nombre: 'Dar de Baja CURP',
    categoria: 'CURP',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Tramita la baja de un CURP duplicado o erróneo.',
    svgKey: 'curpBaja',
    camposFormulario: ['curp'],
    esEspecializado: false,
    colorAccent: '#c62828',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'CURP', path: '/curp' },
      { label: 'Dar de Baja CURP', path: '/servicio/baja-curp' }
    ]
  },
  'alta-curp': {
    id: 'alta-curp',
    nombre: 'Dar de Alta CURP',
    categoria: 'CURP',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Tramita el alta de tu CURP por primera vez o reactiva uno existente.',
    svgKey: 'curpAlta',
    camposFormulario: ['curp'],
    esEspecializado: false,
    colorAccent: '#1565c0',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'CURP', path: '/curp' },
      { label: 'Dar de Alta CURP', path: '/servicio/alta-curp' }
    ]
  },
  'descargar-curp': {
    id: 'descargar-curp',
    nombre: 'Descargar CURP',
    categoria: 'CURP',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Descarga tu documento oficial de CURP de manera inmediata.',
    svgKey: 'curpDescargar',
    camposFormulario: ['curp'],
    esEspecializado: false,
    colorAccent: '#1565c0',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'CURP', path: '/curp' },
      { label: 'Descargar CURP', path: '/servicio/descargar-curp' }
    ]
  },
  'certificacion-curp': {
    id: 'certificacion-curp',
    nombre: 'Certificación CURP',
    categoria: 'CURP',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Obtén tu CURP certificado con validez oficial.',
    svgKey: 'curpCertificacion',
    camposFormulario: ['curp'],
    esEspecializado: false,
    colorAccent: '#e65100',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'CURP', path: '/curp' },
      { label: 'Certificación CURP', path: '/servicio/certificacion-curp' }
    ]
  },
  'correccion-curp': {
    id: 'correccion-curp',
    nombre: 'Corrección de CURP',
    categoria: 'Correcciones',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Corrige errores en tu CURP. Trámite especializado con RENAPO.',
    svgKey: 'correccionCurp',
    camposFormulario: null,
    esEspecializado: true,
    colorAccent: '#f57c00',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'Correcciones', path: '/correcciones' },
      { label: 'Corrección de CURP', path: '/servicio/correccion-curp' }
    ]
  },
  'correccion-actas-extemporaneas': {
    id: 'correccion-actas-extemporaneas',
    nombre: 'Corrección de Actas Extemporáneas',
    categoria: 'Correcciones',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Corrige actas de registro extemporáneo. Trámite especializado.',
    svgKey: 'correccionExtemporanea',
    camposFormulario: null,
    esEspecializado: true,
    colorAccent: '#ad1457',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'Correcciones', path: '/correcciones' },
      { label: 'Corrección Extemporáneas', path: '/servicio/correccion-actas-extemporaneas' }
    ]
  },
  'correccion-acta-matrimonio': {
    id: 'correccion-acta-matrimonio',
    nombre: 'Corrección de Acta de Matrimonio',
    categoria: 'Correcciones',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Corrige errores en tu acta de matrimonio. Trámite especializado.',
    svgKey: 'correccionMatrimonio',
    camposFormulario: null,
    esEspecializado: true,
    colorAccent: '#ef6c00',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'Correcciones', path: '/correcciones' },
      { label: 'Corrección Matrimonio', path: '/servicio/correccion-acta-matrimonio' }
    ]
  },
  'correccion-acta-defuncion': {
    id: 'correccion-acta-defuncion',
    nombre: 'Corrección de Acta de Defunción',
    categoria: 'Correcciones',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Corrige errores en acta de defunción. Trámite especializado.',
    svgKey: 'correccionDefuncion',
    camposFormulario: null,
    esEspecializado: true,
    colorAccent: '#f57c00',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'Correcciones', path: '/correcciones' },
      { label: 'Corrección Defunción', path: '/servicio/correccion-acta-defuncion' }
    ]
  },
  'correccion-acta-nacimiento': {
    id: 'correccion-acta-nacimiento',
    nombre: 'Corrección de Acta de Nacimiento',
    categoria: 'Correcciones',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Corrige errores en actas de nacimiento de cualquier estado. Trámite especializado.',
    svgKey: 'correccionNacimiento',
    camposFormulario: null,
    esEspecializado: true,
    colorAccent: '#ff6f00',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'Correcciones', path: '/correcciones' },
      { label: 'Corrección Nacimiento', path: '/servicio/correccion-acta-nacimiento' }
    ]
  },
  'carta-naturalizacion': {
    id: 'carta-naturalizacion',
    nombre: 'Carta de Naturalización',
    categoria: 'Extranjeros',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Obtén tu carta de naturalización mexicana. Trámite especializado.',
    svgKey: 'cartaNaturalizacion',
    camposFormulario: null,
    esEspecializado: true,
    colorAccent: '#388e3c',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'Extranjeros', path: '/extranjeros' },
      { label: 'Carta de Naturalización', path: '/servicio/carta-naturalizacion' }
    ]
  },
  'naturalizaciones-mexicanas': {
    id: 'naturalizaciones-mexicanas',
    nombre: 'Naturalizaciones Mexicanas',
    categoria: 'Extranjeros',
    precio: 15.00,
    tiempoEntrega: '20 Minutos',
    descripcion: 'Tramita tu naturalización como ciudadano mexicano. Trámite especializado.',
    svgKey: 'naturalizacionesMexicanas',
    camposFormulario: null,
    esEspecializado: true,
    colorAccent: '#2e7d32',
    breadcrumbs: [
      { label: 'Home', path: '/dashboard' },
      { label: 'Extranjeros', path: '/extranjeros' },
      { label: 'Naturalizaciones Mexicanas', path: '/servicio/naturalizaciones-mexicanas' }
    ]
  }
};

// Helper para obtener servicios por categoría (mapeado al formato de ServiceCard)
export const getServicesByCategory = (categoria) => {
  // Paleta de grises slate escalados para fondos de tarjetas
  const slateColors = ['#475569', '#64748b', '#334155', '#1e293b', '#0f172a'];

  return Object.values(servicesConfig)
    .filter(service => service.categoria === categoria)
    .map((service, index) => ({
      id: index + 1,
      name: service.nombre,
      price: service.precio.toFixed(2),
      deliveryTime: service.tiempoEntrega,
      documentType: service.svgKey,
      backgroundColor: slateColors[index % slateColors.length],
      heightClass: index === 0 ? 'h-96' : undefined,
      path: `/servicio/${service.id}`
    }));
};