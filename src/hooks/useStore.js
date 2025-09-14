import { useStore as useZustandStore } from 'zustand';
import { useStore as useRootStore } from '../stores';

/**
 * Typed useStore hook with selectors
 * Provides access to the Zustand store
 */
export function useStore(selector) {
  return useZustandStore(useRootStore, selector);
}

// Convenience hooks for common use cases
export const useUIState = () => useStore((state) => state.ui);
export const useServiceState = () => useStore((state) => state.service);

export const useTheme = () => useStore((state) => state.ui.theme);
export const useUser = () => useStore((state) => state.service.user);
export const useIsAuthenticated = () => useStore((state) => state.service.isAuthenticated);

export const useUIActions = () => useStore((state) => ({
  setTheme: state.setTheme,
  toggleSidebar: state.toggleSidebar,
  setLoading: state.setLoading,
  openModal: state.openModal,
  closeModal: state.closeModal,
}));

export const useServiceActions = () => useStore((state) => ({
  login: state.login,
  logout: state.logout,
  fetchUser: state.fetchUser,
  updateUser: state.updateUser,
  clearError: state.clearError,
}));