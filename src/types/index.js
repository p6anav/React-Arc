/**
 * @fileoverview Core type definitions for the application
 * JSDoc type definitions for JavaScript application
 */

/**
 * @typedef {Object} User
 * @property {string} id - User unique identifier
 * @property {string} email - User email address
 * @property {string} name - User full name
 * @property {'admin'|'user'} role - User role
 */

/**
 * @typedef {Object} UIState
 * @property {'light'|'dark'} theme - Application theme
 * @property {boolean} sidebarOpen - Sidebar visibility state
 * @property {boolean} loading - Global loading state
 * @property {Object.<string, boolean>} modals - Modal visibility states
 */

/**
 * @typedef {Object} ServiceState
 * @property {User|null} user - Current authenticated user
 * @property {boolean} isAuthenticated - Authentication status
 * @property {boolean} isLoading - Service loading state
 * @property {string|null} error - Service error message
 */

/**
 * @typedef {Object} RootState
 * @property {UIState} ui - UI state slice
 * @property {ServiceState} service - Service state slice
 */

/**
 * @typedef {Object} ButtonProps
 * @property {React.ReactNode} children - Button content
 * @property {'primary'|'secondary'|'danger'|'ghost'} [variant='primary'] - Button variant
 * @property {'small'|'medium'|'large'} [size='medium'] - Button size
 * @property {boolean} [loading=false] - Loading state
 * @property {boolean} [disabled=false] - Disabled state
 * @property {string} [className=''] - Additional CSS classes
 * @property {Function} [onClick] - Click handler
 */

/**
 * @typedef {Object} CardProps
 * @property {React.ReactNode} children - Card content
 * @property {'default'|'elevated'|'outlined'} [variant='default'] - Card variant
 * @property {'none'|'small'|'medium'|'large'} [padding='medium'] - Card padding
 * @property {'none'|'small'|'medium'|'large'} [shadow='medium'] - Card shadow
 * @property {boolean} [selectable=false] - Whether card is selectable
 * @property {boolean} [selected=false] - Selection state
 * @property {string} [className=''] - Additional CSS classes
 * @property {Function} [onCardClick] - Card click handler
 */

/**
 * @typedef {Object} ModalProps
 * @property {boolean} isOpen - Modal visibility state
 * @property {Function} onClose - Close handler
 * @property {React.ReactNode} children - Modal content
 * @property {'small'|'medium'|'large'|'xlarge'|'full'} [size='medium'] - Modal size
 * @property {boolean} [closeOnOverlayClick=true] - Close on overlay click
 * @property {boolean} [closeOnEscape=true] - Close on escape key
 * @property {boolean} [showCloseButton=true] - Show close button
 * @property {string} [className=''] - Additional CSS classes
 */

/**
 * @typedef {Object} MainLayoutProps
 * @property {React.ReactNode} children - Layout content
 * @property {string} [className=''] - Additional CSS classes
 */

/**
 * @typedef {Object} MainCanvasProps
 * @property {React.ReactNode} [children] - 3D scene content
 * @property {boolean} [showGrid=true] - Show grid helper
 * @property {boolean} [showEnvironment=true] - Show environment
 * @property {boolean} [enableControls=true] - Enable orbit controls
 * @property {[number, number, number]} [cameraPosition=[5, 5, 5]] - Camera position
 * @property {number} [cameraFov=50] - Camera field of view
 * @property {string} [className=''] - Additional CSS classes
 */

export {};