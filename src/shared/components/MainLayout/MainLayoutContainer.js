import React from 'react';
import { MainLayoutPresentation } from './MainLayoutPresentation';
import { useUIState, useUIActions } from '../../hooks/useStore';

/**
 * MainLayout Container Component
 * Handles layout state management and business logic
 * Follows SOLID principles - Single Responsibility
 */
export const MainLayoutContainer = ({ children, ...props }) => {
  const { sidebarOpen, theme } = useUIState();
  const { toggleSidebar } = useUIActions();

  const handleSidebarToggle = () => {
    toggleSidebar();
  };

  return (
    <MainLayoutPresentation
      sidebarOpen={sidebarOpen}
      theme={theme}
      onSidebarToggle={handleSidebarToggle}
      {...props}
    >
      {children}
    </MainLayoutPresentation>
  );
};