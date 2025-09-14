const initialUIState = {
  theme: 'light',
  sidebarOpen: false,
  loading: false,
  modals: {},
};

export const createUISlice = (set) => ({
  ui: initialUIState,
  
  setTheme: (theme) =>
    set((state) => ({
      ui: { ...state.ui, theme },
    })),
    
  toggleSidebar: () =>
    set((state) => ({
      ui: { ...state.ui, sidebarOpen: !state.ui.sidebarOpen },
    })),
    
  setLoading: (loading) =>
    set((state) => ({
      ui: { ...state.ui, loading },
    })),
    
  openModal: (modalId) =>
    set((state) => ({
      ui: {
        ...state.ui,
        modals: { ...state.ui.modals, [modalId]: true },
      },
    })),
    
  closeModal: (modalId) =>
    set((state) => ({
      ui: {
        ...state.ui,
        modals: { ...state.ui.modals, [modalId]: false },
      },
    })),
    
  closeAllModals: () =>
    set((state) => ({
      ui: { ...state.ui, modals: {} },
    })),
});