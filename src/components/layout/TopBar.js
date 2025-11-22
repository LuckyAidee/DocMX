import React, { useState, useEffect } from 'react';
import { Wallet, MessageSquare, ChevronDown, Lightbulb, AlertTriangle, ThumbsUp, MessageCircle, Send, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLocation } from 'react-router-dom';

export default function TopBar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [feedbackType, setFeedbackType] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [email, setEmail] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState('');
  const [messageText, setMessageText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  // Iniciales del usuario
  const getInitials = (name) => {
    // Verificación más robusta
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return 'UD';
    }
    
    const trimmedName = name.trim();
    const parts = trimmedName.split(' ');
    
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return trimmedName.slice(0, 2).toUpperCase();
  };

  const initials = getInitials(user?.fullName);

  // Funciones para el modal de comentarios
  const openModal = () => {
    // Calcular ancho del scrollbar antes de ocultarlo
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    console.log('📏 Ancho del scrollbar:', scrollbarWidth, 'px');

    // Establecer variable CSS para el ancho del scrollbar
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);

    // Agregar clase al body para aplicar estilos
    document.body.classList.add('modal-open');

    // Compensar scrollbar en el body
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    setIsModalOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);

    // Esperar a que termine la animación antes de limpiar
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
      modalContent.addEventListener('animationend', () => {
        setIsModalOpen(false);
        setIsClosing(false);

        // Restaurar estilos
        document.body.classList.remove('modal-open');
        document.body.style.paddingRight = '';
        document.documentElement.style.removeProperty('--scrollbar-width');

        // Reset form
        setFeedbackType('');
        setComment('');
        setRating('');
        setEmail('');
        setCharCount(0);
        setShowMessage(false);
      }, { once: true });
    } else {
      // Fallback si no encuentra el elemento
      setTimeout(() => {
        setIsModalOpen(false);
        setIsClosing(false);
        document.body.classList.remove('modal-open');
        document.body.style.paddingRight = '';
        document.documentElement.style.removeProperty('--scrollbar-width');
        setFeedbackType('');
        setComment('');
        setRating('');
        setEmail('');
        setCharCount(0);
        setShowMessage(false);
      }, 300);
    }
  };

  const handleCommentChange = (e) => {
    const value = e.target.value;
    if (value.length <= 500) {
      setComment(value);
      setCharCount(value.length);
    }
  };

  const showFeedbackMessage = (message, type) => {
    setMessageText(message);
    setMessageType(type);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!feedbackType) {
      showFeedbackMessage('Por favor selecciona un tipo de comentario', 'error');
      return;
    }

    if (comment.length < 10) {
      showFeedbackMessage('El comentario debe tener al menos 10 caracteres', 'error');
      return;
    }

    if (comment.length > 500) {
      showFeedbackMessage('El comentario no puede exceder 500 caracteres', 'error');
      return;
    }

    // Simular envío al backend
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Datos del formulario:', {
        feedbackType,
        comment,
        rating: rating || 'No especificado',
        email: email || 'No proporcionado'
      });

      showFeedbackMessage('¡Gracias por tu comentario! Lo revisaremos pronto.', 'success');
      setIsSubmitting(false);

      // Cerrar modal después de 2 segundos
      setTimeout(() => {
        closeModal();
      }, 2000);
    }, 1500);
  };

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isModalOpen && !isClosing) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isModalOpen, isClosing]);

  // Cerrar modal al cambiar de página
  useEffect(() => {
    if (isModalOpen) {
      // Cerrar inmediatamente sin animación al navegar
      setIsModalOpen(false);
      setIsClosing(false);

      // Restaurar estilos
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '';
      document.documentElement.style.removeProperty('--scrollbar-width');

      // Reset form
      setFeedbackType('');
      setComment('');
      setRating('');
      setEmail('');
      setCharCount(0);
      setShowMessage(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]); // Solo queremos ejecutar cuando cambia la ruta, no cuando cambia isModalOpen

  // Logout helper removed because it was unused; call `logout()` directly where needed.
  return (
    <>
    <header className="bg-white border-b border-gray-100 h-16 flex items-center justify-between px-8 fixed top-0 right-0 left-16 z-40 shadow-sm backdrop-blur-sm bg-white/95">
      
      {/* Lado Izquierdo - Perfil de Usuario */}
      <div className="flex items-center gap-3">
        
        {/* Avatar con diseño refinado */}
        <div className="relative group">
          <div className="w-10 h-10 rounded-full border-2 border-gray-700 bg-white flex items-center justify-center shadow-sm transition-all duration-300 group-hover:border-teal-500 group-hover:shadow-md">
            <span className="text-gray-700 text-sm font-bold select-none">
              {initials}
            </span>
          </div>
          {/* Indicador de estado online */}
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></div>
        </div>

        {/* Nombre y Dropdown */}
        <div className="relative"> 
        <button
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 group cursor-pointer"
        >
          <span className="text-gray-800 text-base font-semibold">
            {user?.fullName || 'Usuario'}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-gray-500 transition-transform duration-300 group-hover:text-gray-700 ${
              isUserMenuOpen ? 'rotate-180' : ''
            }`}
            strokeWidth={2.5}
          />
        </button>
        </div>
      </div>

      {/* Lado Derecho - Acciones y Balance */}
      <div className="flex items-center gap-6">
        
        {/* Separador visual sutil */}
        <div className="h-8 w-px bg-gray-200"></div>

        {/* Botón de Feedback */}
        <button
          onClick={openModal}
          className="relative p-2.5 hover:bg-gray-50 rounded-xl transition-all duration-200 group"
          title="Enviar comentarios"
        >
          <MessageSquare
            className="w-5 h-5 text-gray-500 group-hover:text-teal-600 transition-colors duration-200"
            strokeWidth={2}
          />
        </button>

        {/* Separador visual sutil */}
        <div className="h-8 w-px bg-gray-200"></div>

        {/* Display de Balance compacto */}
        <div className="flex items-center gap-2.5 px-3 py-1.5 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 shadow-sm hover:shadow transition-all duration-300">
          <div className="p-1.5 bg-teal-50 rounded-md">
            <Wallet 
              className="w-5 h-5 text-teal-600" 
              strokeWidth={2}
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs text-gray-500 font-medium">Balance</span>
            <span className="text-base font-semibold text-gray-900">
              ${user?.balance?.toFixed(2) || '0.00'}
            </span>
          </div>
        </div>
      </div>
    </header>

    {/* Modal de Comentarios */}
    {isModalOpen && (
      <div
        className={`fixed inset-0 z-50 overflow-y-auto modal-overlay ${!isClosing ? 'active' : ''}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0"
            aria-hidden="true"
            onClick={closeModal}
          ></div>

          {/* Centrado vertical trick */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>

          {/* Modal Panel */}
          <div
            className={`modal-content inline-block align-bottom bg-white rounded-2xl text-left shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full overflow-hidden ${isClosing ? 'closing' : ''}`}
          >

            {/* Header del Modal */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-5 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-teal-500/20 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-teal-400" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white" id="modal-title">
                      Enviar comentarios
                    </h3>
                    <p className="text-sm text-gray-300 mt-0.5">
                      Tu opinión nos ayuda a mejorar DocMX
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-300 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="px-6 py-6">

              {/* Tipo de comentario */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Tipo de comentario
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {/* Sugerencia */}
                  <label className="relative">
                    <input
                      type="radio"
                      name="feedbackType"
                      value="suggestion"
                      checked={feedbackType === 'suggestion'}
                      onChange={(e) => setFeedbackType(e.target.value)}
                      className="peer sr-only"
                      required
                    />
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-gray-200 cursor-pointer peer-checked:border-blue-500 peer-checked:bg-blue-50 hover:border-blue-300 transition-all">
                      <Lightbulb className="w-5 h-5 text-gray-400 peer-checked:text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">Sugerencia</span>
                    </div>
                  </label>

                  {/* Problema */}
                  <label className="relative">
                    <input
                      type="radio"
                      name="feedbackType"
                      value="issue"
                      checked={feedbackType === 'issue'}
                      onChange={(e) => setFeedbackType(e.target.value)}
                      className="peer sr-only"
                    />
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-gray-200 cursor-pointer peer-checked:border-red-500 peer-checked:bg-red-50 hover:border-red-300 transition-all">
                      <AlertTriangle className="w-5 h-5 text-gray-400 peer-checked:text-red-600" />
                      <span className="text-sm font-medium text-gray-700">Problema</span>
                    </div>
                  </label>

                  {/* Elogio */}
                  <label className="relative">
                    <input
                      type="radio"
                      name="feedbackType"
                      value="compliment"
                      checked={feedbackType === 'compliment'}
                      onChange={(e) => setFeedbackType(e.target.value)}
                      className="peer sr-only"
                    />
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-gray-200 cursor-pointer peer-checked:border-teal-500 peer-checked:bg-teal-50 hover:border-teal-300 transition-all">
                      <ThumbsUp className="w-5 h-5 text-gray-400 peer-checked:text-teal-600" />
                      <span className="text-sm font-medium text-gray-700">Elogio</span>
                    </div>
                  </label>

                  {/* Otro */}
                  <label className="relative">
                    <input
                      type="radio"
                      name="feedbackType"
                      value="other"
                      checked={feedbackType === 'other'}
                      onChange={(e) => setFeedbackType(e.target.value)}
                      className="peer sr-only"
                    />
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-gray-200 cursor-pointer peer-checked:border-amber-500 peer-checked:bg-amber-50 hover:border-amber-300 transition-all">
                      <MessageCircle className="w-5 h-5 text-gray-400 peer-checked:text-amber-600" />
                      <span className="text-sm font-medium text-gray-700">Otro</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Campo de comentario */}
              <div className="mb-6">
                <label htmlFor="comment" className="block text-sm font-semibold text-gray-900 mb-2">
                  Tu comentario <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows="5"
                  required
                  placeholder="Cuéntanos tu experiencia o sugerencia..."
                  value={comment}
                  onChange={handleCommentChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 resize-none text-gray-900 placeholder-gray-400"
                ></textarea>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">Mínimo 10 caracteres</span>
                  <span className={`text-xs ${charCount > 500 ? 'text-red-500' : 'text-gray-400'}`}>
                    {charCount} / 500
                  </span>
                </div>
              </div>

              {/* Rating (opcional) */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  ¿Qué tan satisfecho estás? <span className="text-gray-400 text-xs font-normal">(Opcional)</span>
                </label>
                <div className="flex items-center gap-2">
                  <div className="star-rating flex flex-row-reverse justify-end gap-1">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <React.Fragment key={star}>
                        <input
                          type="radio"
                          id={`star${star}`}
                          name="rating"
                          value={star}
                          checked={rating === String(star)}
                          onChange={(e) => setRating(e.target.value)}
                          className="sr-only"
                        />
                        <label
                          htmlFor={`star${star}`}
                          className="cursor-pointer text-gray-300 hover:text-yellow-400 text-3xl"
                        >
                          ★
                        </label>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email de contacto (opcional) */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email de contacto <span className="text-gray-400 text-xs font-normal">(Opcional, por si necesitamos más información)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 text-gray-900 placeholder-gray-400"
                />
              </div>

              {/* Mensaje de éxito/error */}
              {showMessage && (
                <div className={`mb-4 px-4 py-3 rounded-xl text-sm border-2 ${
                  messageType === 'success'
                    ? 'bg-green-50 border-green-200 text-green-700'
                    : 'bg-red-50 border-red-200 text-red-700'
                }`}>
                  {messageText}
                </div>
              )}

              {/* Botones de acción */}
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-teal-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar comentario
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )}
    </>
  );
}


