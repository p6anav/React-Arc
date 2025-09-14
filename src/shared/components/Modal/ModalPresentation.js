import React from 'react';

/**
 * Modal Presentation Component
 * Pure UI component for modal display
 * Follows SOLID principles - Single Responsibility, Open/Closed
 */
export const ModalPresentation = ({
  children,
  size = 'medium',
  className = '',
  onOverlayClick,
  onClose,
  showCloseButton = true,
  ...props
}) => {
  const overlayClasses = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
  
  const sizeClasses = {
    small: 'max-w-md',
    medium: 'max-w-lg',
    large: 'max-w-2xl',
    xlarge: 'max-w-4xl',
    full: 'max-w-full mx-4'
  };
  
  const modalClasses = [
    'bg-white rounded-lg shadow-xl',
    'max-h-[90vh] overflow-y-auto',
    'relative w-full',
    sizeClasses[size] || sizeClasses.medium,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={overlayClasses}
      onClick={onOverlayClick}
      {...props}
    >
      <div className={modalClasses}>
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

/**
 * Modal Header Component
 */
export const ModalHeader = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 border-b border-gray-200 ${className}`} {...props}>
    {children}
  </div>
);

/**
 * Modal Body Component
 */
export const ModalBody = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 ${className}`} {...props}>
    {children}
  </div>
);

/**
 * Modal Footer Component
 */
export const ModalFooter = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 border-t border-gray-200 flex justify-end space-x-3 ${className}`} {...props}>
    {children}
  </div>
);