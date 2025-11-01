import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, FileText, CreditCard, HelpCircle, LogOut, ChevronDown } from 'lucide-react';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Inicio', path: '/dashboard' },
    { icon: FileText, label: 'Historial de órdenes', path: '/orders' },
    { icon: CreditCard, label: 'Agregar Saldo', path: '/balance' },
    { icon: HelpCircle, label: 'Soporte', path: '/support' },
  ];

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-gray-900 text-white transition-all duration-300 ease-in-out z-50 flex flex-col ${

        isExpanded ? 'w-64' : 'w-[4.5rem]'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => {
        setIsExpanded(false);
        setShowUserMenu(false);
      }}
    >
      {/* Logo Section */}
      <div className="h-16 flex items-center justify-center border-none">
        <div className="flex items-center gap-3">
          {/* Logo geométrico mejorado */}
          <div className="w-9 h-9 bg-gradient-to-br from-gray-700 to-gray-800 relative flex-shrink-0 rounded-md shadow-lg overflow-hidden group-hover:shadow-teal-500/20 transition-shadow duration-300">
            <div className="absolute inset-0 flex">
              <div className="w-1/2 h-full bg-gray-700"></div>
              <div className="w-1/2 h-full bg-gray-600"></div>
            </div>
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[36px] border-t-gray-300/90 border-l-[18px] border-l-transparent"></div>
            {/* Brillo sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          </div>
          
          {isExpanded && (
            <span className="text-lg font-light tracking-wide whitespace-nowrap animate-fadeIn">
              Doc<span className="font-bold text-teal-400">MX</span>
            </span>
          )}
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-6 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <li key={index}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center py-3 rounded-lg transition-all duration-200 group relative
                    ${isExpanded ? 'justify-start px-3 gap-3' : 'justify-center px-0'}
                    ${active 
                      ? 'bg-teal-600/20 text-teal-400 shadow-lg shadow-teal-600/10' 
                      : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                    }
                  `}
                >
                  {/* Indicador de página activa */}
                  {active && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-teal-500 rounded-r-full"></div>
                  )}
                  
                  <Icon 
                    className={`flex-shrink-0 transition-all duration-200 ${
                      active ? 'w-5 h-5' : 'w-5 h-5 group-hover:scale-110'
                    }`}
                    strokeWidth={active ? 2.5 : 2}
                  />
                  
                  {isExpanded && (
                    <span className={`text-sm whitespace-nowrap transition-colors duration-200 ${
                      active ? 'font-semibold' : 'font-medium'
                    }`}>
                      {item.label}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile Section */}
      <div className="relative border-t border-none">
        <button
          onClick={() => setShowUserMenu(!showUserMenu)}
          className={`w-full flex items-center transition-all duration-200 group
            ${isExpanded ? 'gap-3 p-4 justify-start hover:bg-gray-800/50' : 'p-4 justify-center hover:bg-gray-800/50'}
          `}
        >
          {/* Avatar mejorado */}
          <div className="relative flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center shadow-lg border-2 border-gray-600 group-hover:border-teal-500 transition-all duration-300">
              <span className="text-sm font-bold text-gray-200">UD</span>
            </div>
            {/* Indicador online */}
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-gray-900"></div>
          </div>

          {/* User Info */}
          {isExpanded && (
            <div className="flex-1 text-left overflow-hidden">
              <p className="text-sm font-semibold truncate text-white">Usuario Demo</p>
              <p className="text-xs text-gray-400 truncate">usuario@demo.com</p>
            </div>
          )}

          {/* Dropdown Icon */}
          {isExpanded && (
            <ChevronDown
              className={`w-4 h-4 transition-all duration-300 flex-shrink-0 text-gray-400 group-hover:text-white ${
                showUserMenu ? 'rotate-180' : ''
              }`}
              strokeWidth={2.5}
            />
          )}
        </button>

        {/* Dropdown Menu mejorado */}
        {showUserMenu && isExpanded && (
          <div className="absolute bottom-full left-0 w-full bg-gray-800 border border-gray-700 shadow-2xl rounded-t-lg overflow-hidden animate-slideUp">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-600/20 hover:text-red-400 transition-all duration-200 text-left group"
            >
              <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" strokeWidth={2} />
              <span className="text-sm font-medium">Cerrar sesión</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}