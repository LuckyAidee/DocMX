const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

class ApiService {
  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
    console.log('🔗 API Service configurado con URL:', this.baseURL);
    this.csrfToken = null;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    // Ensure we have a CSRF token when needed
    const csrfHeader = await this.getCsrfHeaders();

    const config = {
      credentials: 'include', // INCLUYE COOKIES AUTOMÁTICAMENTE
      headers: {
        'Content-Type': 'application/json',
        ...csrfHeader,
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        // Manejo específico de errores de autenticación
        if (response.status === 401) {
          this.handleUnauthorized();
          throw new Error('Sesión expirada o inválida');
        }
        const text = await response.text().catch(() => '');
        let errorData = {};
        try { errorData = text ? JSON.parse(text) : {}; } catch { errorData = { message: text }; }
        throw new Error(errorData.message || `Error ${response.status}`);
      }

      const text = await response.text();
      if (!text) return null;
      try { return JSON.parse(text); } catch { return text; }
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  async getCsrfHeaders() {
    if (this.csrfToken) return { 'X-CSRF-Token': this.csrfToken };
    try {
      const res = await fetch(`${this.baseURL}/auth/csrf`, { credentials: 'include' });
      if (!res.ok) return {};
      const data = await res.json().catch(() => ({}));
      if (data && data.token) {
        this.csrfToken = data.token;
        return { 'X-CSRF-Token': this.csrfToken };
      }
      return {};
    } catch (e) {
      return {};
    }
  }

  handleUnauthorized() {
    // Redirigir al login si no estamos ya allí
    if (!window.location.pathname.includes('/login')) {
      window.location.href = '/';
    }
  }

  // Auth endpoints actualizados
  async login(credentials) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  // Prefer backend endpoint to set rememberMe flag in a secure cookie
  async setRememberMe(value = true) {
    return this.request('/auth/remember', {
      method: 'POST',
      body: JSON.stringify({ remember: !!value })
    });
  }

  async logout() {
    return this.request('/auth/logout', {
      method: 'POST',
    });
  }

  async getUserProfile() {
    return this.request('/auth/profile');
  }

  async register(userData) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  // Ejemplos adicionales de endpoints
  async createOrder(orderData) {
    return this.request('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }

  async getUserOrders() {
    return this.request('/orders');
  }
}

export const apiService = new ApiService();