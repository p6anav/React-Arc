const initialServiceState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export const createServiceSlice = (set, get) => ({
  service: initialServiceState,
  
  login: async (email, password) => {
    set((state) => ({
      service: { ...state.service, isLoading: true, error: null },
    }));
    
    try {
      // Mock API call - replace with actual authentication
      const mockUser = {
        id: '1',
        email,
        name: 'User Name',
        role: 'user',
      };
      
      set((state) => ({
        service: {
          ...state.service,
          user: mockUser,
          isAuthenticated: true,
          isLoading: false,
        },
      }));
    } catch (error) {
      set((state) => ({
        service: {
          ...state.service,
          error: error instanceof Error ? error.message : 'Login failed',
          isLoading: false,
        },
      }));
    }
  },
  
  logout: () => {
    set((state) => ({
      service: {
        ...state.service,
        user: null,
        isAuthenticated: false,
      },
    }));
  },
  
  fetchUser: async () => {
    set((state) => ({
      service: { ...state.service, isLoading: true },
    }));
    
    try {
      // Mock API call
      const mockUser = {
        id: '1',
        email: 'user@example.com',
        name: 'User Name',
        role: 'user',
      };
      
      set((state) => ({
        service: {
          ...state.service,
          user: mockUser,
          isAuthenticated: true,
          isLoading: false,
        },
      }));
    } catch (error) {
      set((state) => ({
        service: {
          ...state.service,
          error: error instanceof Error ? error.message : 'Failed to fetch user',
          isLoading: false,
        },
      }));
    }
  },
  
  updateUser: async (userData) => {
    const currentUser = get().service.user;
    if (!currentUser) return;
    
    set((state) => ({
      service: { ...state.service, isLoading: true },
    }));
    
    try {
      const updatedUser = { ...currentUser, ...userData };
      
      set((state) => ({
        service: {
          ...state.service,
          user: updatedUser,
          isLoading: false,
        },
      }));
    } catch (error) {
      set((state) => ({
        service: {
          ...state.service,
          error: error instanceof Error ? error.message : 'Failed to update user',
          isLoading: false,
        },
      }));
    }
  },
  
  clearError: () => {
    set((state) => ({
      service: { ...state.service, error: null },
    }));
  },
});