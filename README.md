# Arc React - Production-Ready React Architecture

A comprehensive React application architecture following LIFT principles, SOLID design patterns, and modern best practices. Built with Zustand for state management, React-Three-Fiber for 3D capabilities, and a complete component library.

## 🏗️ Architecture Overview

This project implements the **LIFT** (Locate, Identify, Flat, Try DRY) folder structure with:

- **SOLID-compliant components** with container/presentational separation
- **Zustand** for efficient state management with slices
- **React-Three-Fiber** integration for 3D rendering
- **JSDoc** type definitions for JavaScript
- **Production-ready** folder structure and patterns

## 📁 Folder Structure

```
src/
├── app/                     # Application-level configuration
│   ├── index.js            # App exports and setup
│   └── App.js              # Main App component (to be created)
│
├── pages/                   # Route-level page components
│   ├── index.js            # Page exports
│   ├── HomePage.js         # Home page component (to be created)
│   ├── DashboardPage.js    # Dashboard page (to be created)
│   └── NotFoundPage.js     # 404 page (to be created)
│
├── features/               # Feature-based modules
│   ├── auth/               # Authentication feature
│   │   ├── index.js        # Auth feature exports
│   │   ├── containers/     # Auth containers (to be created)
│   │   ├── components/     # Auth UI components (to be created)
│   │   └── types.js        # Auth type definitions (to be created)
│   │
│   └── dashboard/          # Dashboard feature
│       ├── index.js        # Dashboard feature exports
│       ├── containers/     # Dashboard containers (to be created)
│       ├── components/     # Dashboard UI components (to be created)
│       └── types.js        # Dashboard type definitions (to be created)
│
├── shared/                 # Shared resources
│   ├── components/         # Reusable UI components
│   │   ├── index.js        # Component exports
│   │   ├── Button/         # Button component with container/presentation
│   │   │   ├── index.js
│   │   │   ├── ButtonContainer.js
│   │   │   └── ButtonPresentation.js
│   │   ├── Card/           # Card component with compound pattern
│   │   │   ├── index.js
│   │   │   ├── CardContainer.js
│   │   │   └── CardPresentation.js
│   │   ├── Modal/          # Modal component with portal rendering
│   │   │   ├── index.js
│   │   │   ├── ModalContainer.js
│   │   │   └── ModalPresentation.js
│   │   ├── MainLayout/     # Application layout
│   │   │   ├── index.js
│   │   │   ├── MainLayoutContainer.js
│   │   │   └── MainLayoutPresentation.js
│   │   └── threejs/        # Three.js components
│   │       ├── index.js
│   │       ├── MainCanvas.js
│   │       ├── Scene.js
│   │       └── LoadingSpinner.js
│   │
│   ├── utils/              # Utility functions
│   │   ├── index.js        # Utility exports
│   │   ├── classNames.js   # CSS class utilities
│   │   ├── date.js         # Date formatting utilities
│   │   ├── validation.js   # Form validation utilities
│   │   └── api.js          # API client utilities
│   │
│   └── assets/             # Static assets
│       └── .gitkeep        # Keep directory in git
│
├── stores/                 # Zustand state management
│   ├── index.js            # Root store configuration
│   └── slices/             # State slices
│       ├── uiSlice.js      # UI state management
│       └── serviceSlice.js # Service/API state management
│
├── hooks/                  # Custom React hooks
│   ├── index.js            # Hook exports
│   ├── useStore.js         # Typed store selectors
│   ├── useLocalStorage.js  # LocalStorage hook (to be created)
│   └── useDebounce.js      # Debounce hook (to be created)
│
├── lib/                    # Third-party integrations
│   ├── index.js            # Library exports
│   ├── http.js             # HTTP client config (to be created)
│   ├── storage.js          # Storage utilities (to be created)
│   └── logger.js           # Logging utilities (to be created)
│
└── types/                  # Type definitions (JSDoc)
    ├── index.js            # Core type definitions
    ├── api.js              # API type definitions
    └── components.js       # Component type definitions
```

## 🎯 Key Features

### 1. SOLID Component Architecture

All components follow SOLID principles with clear separation of concerns:

- **Single Responsibility**: Each component has one clear purpose
- **Open/Closed**: Components are open for extension, closed for modification
- **Liskov Substitution**: Components can be substituted without breaking functionality
- **Interface Segregation**: Clean, focused component APIs
- **Dependency Inversion**: Components depend on abstractions, not concretions

### 2. Container/Presentational Pattern

```javascript
// Container handles logic and state
export const ButtonContainer = ({ onClick, disabled, loading, children, ...props }) => {
  const handleClick = (event) => {
    if (disabled || loading) return;
    if (onClick) onClick(event);
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

// Presentation handles only UI rendering
export const ButtonPresentation = ({ children, variant, size, loading, disabled, className, onClick, ...props }) => {
  // Pure UI logic here
  return <button className={classes} onClick={onClick} disabled={disabled} {...props}>{children}</button>;
};
```

### 3. Zustand State Management

Modular state management with slices:

```javascript
// UI Slice - handles application UI state
export const createUISlice = (set) => ({
  ui: {
    theme: 'light',
    sidebarOpen: false,
    loading: false,
    modals: {},
  },
  setTheme: (theme) => set((state) => ({ ui: { ...state.ui, theme } })),
  toggleSidebar: () => set((state) => ({ ui: { ...state.ui, sidebarOpen: !state.ui.sidebarOpen } })),
  // ... more actions
});

// Service Slice - handles API and business logic state
export const createServiceSlice = (set, get) => ({
  service: {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  },
  login: async (email, password) => {
    // Async action implementation
  },
  // ... more actions
});
```

### 4. React-Three-Fiber Integration

3D rendering capabilities with proper React integration:

```javascript
export const MainCanvas = ({ children, showGrid = true, enableControls = true, ...props }) => {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 50 }} shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      
      {showEnvironment && <Environment preset="city" />}
      {enableControls && <OrbitControls />}
      {showGrid && <Grid infiniteGrid />}
      
      <Suspense fallback={null}>
        <Scene />
        {children}
      </Suspense>
    </Canvas>
  );
};
```

### 5. Type Safety with JSDoc

Complete type definitions for JavaScript development:

```javascript
/**
 * @typedef {Object} ButtonProps
 * @property {React.ReactNode} children - Button content
 * @property {'primary'|'secondary'|'danger'|'ghost'} [variant='primary'] - Button variant
 * @property {'small'|'medium'|'large'} [size='medium'] - Button size
 * @property {boolean} [loading=false] - Loading state
 * @property {boolean} [disabled=false] - Disabled state
 */
```

## 🚀 Getting Started

### Prerequisites

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "zustand": "^4.4.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.88.0",
    "three": "^0.158.0"
  }
}
```

### Installation

1. Install dependencies:
```bash
npm install zustand @react-three/fiber @react-three/drei three
```

2. Import and use components:
```javascript
import { Button, Card, Modal, MainLayout } from './src/shared/components';
import { MainCanvas } from './src/shared/components/threejs';
import { useStore, useUIActions } from './src/hooks/useStore';

function App() {
  const { theme } = useStore(state => state.ui);
  const { setTheme } = useUIActions();

  return (
    <MainLayout>
      <div className="h-96">
        <MainCanvas />
      </div>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </Button>
    </MainLayout>
  );
}
```

## 🛠️ Development Guidelines

### Component Creation

1. **Follow SOLID principles**: Each component should have a single responsibility
2. **Use container/presentation pattern**: Separate logic from UI
3. **Implement proper TypeScript/JSDoc**: Document all props and return types
4. **Add compound components**: Use the compound pattern for complex components
5. **Include proper error boundaries**: Handle errors gracefully

### State Management

1. **Use Zustand slices**: Organize state by domain
2. **Implement async actions**: Handle loading and error states
3. **Use typed selectors**: Create specific selectors for common use cases
4. **Follow immutability**: Always return new state objects

### File Organization

1. **Group by feature**: Keep related files together
2. **Use index files**: Provide clean exports from each module
3. **Follow naming conventions**: Use PascalCase for components, camelCase for utilities
4. **Maintain flat structure**: Avoid deep nesting within feature folders

## 📚 Component Library

### Core Components

- **Button**: Flexible button component with multiple variants and states
- **Card**: Container component with header, body, and footer sections
- **Modal**: Portal-based modal with accessibility features
- **MainLayout**: Application layout with sidebar and header

### 3D Components

- **MainCanvas**: React-Three-Fiber canvas with controls and helpers
- **Scene**: Default 3D scene with animated objects
- **LoadingSpinner**: Loading indicator for 3D content

### Hooks

- **useStore**: Typed Zustand store access
- **useUIState/useServiceState**: Specific state selectors
- **useUIActions/useServiceActions**: Action selectors

## 🔧 Utilities

### Validation
- Email validation
- Password strength validation
- Required field validation

### Date Formatting
- Flexible date formatting
- Relative time strings

### API Client
- RESTful API client
- Error handling
- Request/response interceptors

### CSS Utilities
- Class name combination
- Responsive helpers
- Theme utilities

## 🧪 Testing Strategy

The architecture supports comprehensive testing:

1. **Component Testing**: Test containers and presentations separately
2. **State Testing**: Test Zustand slices in isolation
3. **Integration Testing**: Test feature modules end-to-end
4. **3D Testing**: Test Three.js components with React Testing Library

## 📖 Best Practices

1. **Always use container/presentation pattern** for complex components
2. **Implement proper error boundaries** for robust applications
3. **Use Zustand slices** to organize state by domain
4. **Document components with JSDoc** for better developer experience
5. **Follow LIFT principles** for maintainable folder structure
6. **Implement proper loading states** for async operations
7. **Use compound components** for flexible APIs
8. **Maintain type safety** with comprehensive JSDoc definitions

## 🤝 Contributing

This architecture is designed to be:
- **Scalable**: Easy to add new features and components
- **Maintainable**: Clear separation of concerns and documentation
- **Testable**: Isolated components and state management
- **Type-safe**: Comprehensive type definitions with JSDoc
- **Performance-focused**: Optimized state management and component patterns

---

**Built with ❤️ using React, Zustand, React-Three-Fiber, and modern JavaScript patterns.**