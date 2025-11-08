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
    colorAccent: '#14b8a6',
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
  }
};