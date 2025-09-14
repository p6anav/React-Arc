import React from 'react';

/**
 * Card Presentation Component
 * Pure UI component for card display
 * Follows SOLID principles - Single Responsibility, Open/Closed
 */
export const CardPresentation = ({
  children,
  variant = 'default',
  padding = 'medium',
  shadow = 'medium',
  selectable = false,
  selected = false,
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses = 'bg-white rounded-lg border transition-all duration-200';
  
  const variantClasses = {
    default: 'border-gray-200',
    elevated: 'border-gray-300',
    outlined: 'border-2 border-gray-300'
  };
  
  const paddingClasses = {
    none: '',
    small: 'p-3',
    medium: 'p-6',
    large: 'p-8'
  };
  
  const shadowClasses = {
    none: '',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg'
  };
  
  const interactiveClasses = selectable 
    ? 'cursor-pointer hover:shadow-lg hover:border-gray-300' 
    : '';
    
  const selectedClasses = selected 
    ? 'ring-2 ring-blue-500 border-blue-500' 
    : '';
  
  const classes = [
    baseClasses,
    variantClasses[variant] || variantClasses.default,
    paddingClasses[padding] || paddingClasses.medium,
    shadowClasses[shadow] || shadowClasses.medium,
    interactiveClasses,
    selectedClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Card Header Component
 */
export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`border-b border-gray-200 pb-4 mb-4 ${className}`} {...props}>
    {children}
  </div>
);

/**
 * Card Body Component
 */
export const CardBody = ({ children, className = '', ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

/**
 * Card Footer Component
 */
export const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`border-t border-gray-200 pt-4 mt-4 ${className}`} {...props}>
    {children}
  </div>
);