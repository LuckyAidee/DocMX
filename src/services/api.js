class ApiService {
  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL;
    // Solo log en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log('🔗 API Service configurado con URL:', this.baseURL);
    }
    this.csrfToken = null;
    this._lastCsrfAttempt = 0;
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
      // Solo log en desarrollo
      if (process.env.NODE_ENV === 'development') {
        console.error('API Error:', error);
      }
      throw error;
    }
  }

  async getCsrfHeaders() {
    if (this.csrfToken) return { 'X-CSRF-Token': this.csrfToken };

    // Throttle attempts to fetch CSRF token to avoid tight loops
    const now = Date.now();
    if (this._lastCsrfAttempt && now - this._lastCsrfAttempt < 800) {
      // recent attempt — avoid flooding the server
      return {};
    }
    this._lastCsrfAttempt = now;

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
      // Protect against multiple rapid redirects which can cause a reload loop.
      const lastRedirect = sessionStorage.getItem('lastAuthRedirect') || 0;
      const now = Date.now();
      if (now - Number(lastRedirect) < 2000) return; // ignore if redirected very recently
      sessionStorage.setItem('lastAuthRedirect', String(now));
      // App routes expect login at '/', so redirect there.
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

  async getUserOrders(params = {}) {
    // params: { page, limit, status }
    const qs = new URLSearchParams();
    if (params.page) qs.set('page', String(params.page));
    if (params.limit) qs.set('limit', String(params.limit));
    if (params.status) qs.set('status', String(params.status));

    const path = qs.toString() ? `/orders?${qs.toString()}` : '/orders';
    const res = await this.request(path);
    // Backend returns a paginated object { data, page, limit, total, totalPages }
    // Frontend OrderHistory expects an array of orders — unwrap for convenience.
    if (res && typeof res === 'object' && Array.isArray(res.data)) {
      return res.data;
    }
    return res;
  }
}

export const apiService = new ApiService();