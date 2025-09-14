import React from 'react';

/**
 * MainLayout Presentation Component
 * Pure UI component for application layout
 * Follows SOLID principles - Single Responsibility, Open/Closed
 */
export const MainLayoutPresentation = ({
  children,
  sidebarOpen,
  theme,
  onSidebarToggle,
  className = '',
  ...props
}) => {
  const themeClasses = theme === 'dark' 
    ? 'bg-gray-900 text-white' 
    : 'bg-gray-50 text-gray-900';

  return (
    <div className={`min-h-screen flex ${themeClasses} ${className}`} {...props}>
      {/* Sidebar */}
      <aside className={`
        ${sidebarOpen ? 'w-64' : 'w-16'} 
        bg-white dark:bg-gray-800 
        shadow-lg 
        transition-all duration-300 
        flex flex-col
        ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}
        border-r
      `}>
        <SidebarHeader 
          sidebarOpen={sidebarOpen} 
          onToggle={onSidebarToggle}
          theme={theme}
        />
        <SidebarContent sidebarOpen={sidebarOpen} theme={theme} />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <MainHeader theme={theme} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

/**
 * Sidebar Header Component
 */
const SidebarHeader = ({ sidebarOpen, onToggle, theme }) => (
  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
    <div className="flex items-center justify-between">
      {sidebarOpen && (
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Arc React
        </h2>
      )}
      <button
        onClick={onToggle}
        className={`
          p-2 rounded-lg 
          ${theme === 'dark' 
            ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }
          transition-colors
        `}
        aria-label="Toggle sidebar"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
);

/**
 * Sidebar Content Component
 */
const SidebarContent = ({ sidebarOpen, theme }) => (
  <nav className="flex-1 p-4">
    <ul className="space-y-2">
      <SidebarItem 
        icon="🏠" 
        label="Dashboard" 
        active={true}
        sidebarOpen={sidebarOpen}
        theme={theme}
      />
      <SidebarItem 
        icon="👤" 
        label="Profile" 
        sidebarOpen={sidebarOpen}
        theme={theme}
      />
      <SidebarItem 
        icon="⚙️" 
        label="Settings" 
        sidebarOpen={sidebarOpen}
        theme={theme}
      />
    </ul>
  </nav>
);

/**
 * Sidebar Item Component
 */
const SidebarItem = ({ icon, label, active = false, sidebarOpen, theme }) => (
  <li>
    <a
      href="#"
      className={`
        flex items-center p-3 rounded-lg transition-colors
        ${active 
          ? theme === 'dark'
            ? 'bg-blue-600 text-white'
            : 'bg-blue-100 text-blue-700'
          : theme === 'dark'
            ? 'text-gray-400 hover:text-white hover:bg-gray-700'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }
      `}
    >
      <span className="text-xl">{icon}</span>
      {sidebarOpen && (
        <span className="ml-3 font-medium">{label}</span>
      )}
    </a>
  </li>
);

/**
 * Main Header Component
 */
const MainHeader = ({ theme }) => (
  <header className={`
    h-16 
    ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
    border-b 
    flex items-center justify-between px-6
  `}>
    <div className="flex items-center">
      <h1 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        Welcome
      </h1>
    </div>
    <div className="flex items-center space-x-4">
      <button className={`
        p-2 rounded-lg 
        ${theme === 'dark' 
          ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }
        transition-colors
      `}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7H4l5-5v5z" />
        </svg>
      </button>
    </div>
  </header>
);