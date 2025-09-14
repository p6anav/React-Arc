import React from 'react';
import { ButtonPresentation } from './ButtonPresentation';

/**
 * Button Container Component
 * Handles business logic and state management for buttons
 * Follows SOLID principles - Single Responsibility
 */
export const ButtonContainer = ({ 
  onClick, 
  disabled = false, 
  loading = false,
  children,
  ...props 
}) => {
  const handleClick = (event) => {
    if (disabled || loading) {
      event.preventDefault();
      return;
    }
    
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <ButtonPresentation
      onClick={handleClick}
      disabled={disabled || loading}
      loading={loading}
      {...props}
    >
      {children}
    </ButtonPresentation>
  );
};