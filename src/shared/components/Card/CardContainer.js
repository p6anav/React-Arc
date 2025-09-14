import React from 'react';
import { CardPresentation } from './CardPresentation';

/**
 * Card Container Component
 * Handles card interactions and state management
 * Follows SOLID principles - Single Responsibility
 */
export const CardContainer = ({ 
  children, 
  onCardClick,
  selectable = false,
  selected = false,
  ...props 
}) => {
  const handleCardClick = (event) => {
    if (selectable && onCardClick) {
      onCardClick(event);
    }
  };

  return (
    <CardPresentation
      onClick={selectable ? handleCardClick : undefined}
      selectable={selectable}
      selected={selected}
      {...props}
    >
      {children}
    </CardPresentation>
  );
};