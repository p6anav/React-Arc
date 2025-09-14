import React from 'react';

/**
 * LoadingSpinner Component
 * Loading indicator for 3D content
 */
export const LoadingSpinner = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      <p className="text-gray-600 font-medium">Loading 3D Scene...</p>
    </div>
  </div>
);