import DOMPurify from 'dompurify';

/**
 * Sanitiza HTML para prevenir XSS
 * @param {string} html - HTML a sanitizar
 * @param {Object} options - Opciones adicionales para DOMPurify
 * @returns {string} HTML sanitizado
 */
export const sanitizeHtml = (html) => {
  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    FORBID_TAGS: [
      'script',
      'style',
      'iframe',
      'frame',
      'object',
      'embed',
      'form',
      'input',
      'button'
    ],
    FORBID_ATTR: [
      'onerror',
      'onload',
      'onclick',
      'onmouseover',
      'onmouseout',
      'onmouseenter',
      'onmouseleave',
      'onsubmit'
    ],
    ALLOW_DATA_ATTR: false,
    ADD_ATTR: ['target', 'rel'], // Permitir target="_blank" con rel="noopener noreferrer"
  });
};

/**
 * Valida y normaliza datos de usuario sin sanitizar HTML
 * (para campos que no necesitan HTML, como nombres, emails, etc.)
 */
export const normalizeUserInput = {
  text: (input, maxLength = 200) => {
    if (typeof input !== 'string') return '';
    return input.trim().slice(0, maxLength);
  },
  
  email: (input) => {
    if (typeof input !== 'string') return '';
    const email = input.trim().toLowerCase();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : '';
  },
  
  phone: (input) => {
    if (typeof input !== 'string') return '';
    return input.trim().replace(/[^\d+\-() ]/g, '').slice(0, 20);
  },
  
  url: (input) => {
    if (typeof input !== 'string') return '';
    try {
      const url = new URL(input);
      return url.protocol === 'http:' || url.protocol === 'https:' ? url.toString() : '';
    } catch {
      return '';
    }
  }
};