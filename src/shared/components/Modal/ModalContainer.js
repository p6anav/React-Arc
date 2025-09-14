import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalPresentation } from './ModalPresentation';

/**
 * Modal Container Component
 * Handles modal lifecycle, portal rendering, and business logic
 * Follows SOLID principles - Single Responsibility
 */
export const ModalContainer = ({
  isOpen,
  onClose,
  children,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  ...props
}) => {
  // Handle escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;
    
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOverlayClick = (event) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <ModalPresentation
      onOverlayClick={handleOverlayClick}
      onClose={onClose}
      {...props}
    >
      {children}
    </ModalPresentation>,
    document.body
  );
};