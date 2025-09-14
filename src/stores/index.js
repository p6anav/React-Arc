import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { createUISlice } from './slices/uiSlice';
import { createServiceSlice } from './slices/serviceSlice';

export const useStore = create(
  devtools(
    subscribeWithSelector(
      (...a) => ({
        ...createUISlice(...a),
        ...createServiceSlice(...a),
      })
    ),
    {
      name: 'arc-react-store',
    }
  )
);

// Typed selectors for better integration
export const useUIStore = () => useStore((state) => state.ui);
export const useServiceStore = () => useStore((state) => state.service);

// Action selectors
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
}));