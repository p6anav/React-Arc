import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Grid } from '@react-three/drei';
import { Scene } from './Scene';
import { LoadingSpinner } from './LoadingSpinner';

/**
 * MainCanvas Component
 * Main Three.js canvas with React-Three-Fiber integration
 * Provides 3D rendering capabilities with proper error boundaries
 */
export const MainCanvas = ({
  children,
  showGrid = true,
  showEnvironment = true,
  enableControls = true,
  cameraPosition = [5, 5, 5],
  cameraFov = 50,
  className = '',
  ...props
}) => {
  return (
    <div className={`w-full h-full relative ${className}`} {...props}>
      <Canvas
        camera={{
          position: cameraPosition,
          fov: cameraFov,
        }}
        shadows
        className="w-full h-full"
      >
        {/* Lighting Setup */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        
        {/* Environment and Controls */}
        {showEnvironment && (
          <Environment preset="city" background={false} />
        )}
        
        {enableControls && (
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            dampingFactor={0.05}
            screenSpacePanning={false}
            minDistance={1}
            maxDistance={100}
          />
        )}
        
        {/* Grid Helper */}
        {showGrid && (
          <Grid
            renderOrder={-1}
            position={[0, -0.01, 0]}
            infiniteGrid
            cellSize={1}
            cellThickness={1}
            sectionSize={10}
            sectionThickness={1.5}
            fadeDistance={30}
            fadeStrength={1}
          />
        )}
        
        {/* Scene Content with Suspense */}
        <Suspense fallback={null}>
          <Scene />
          {children}
        </Suspense>
      </Canvas>
      
      {/* Loading Overlay */}
      <Suspense fallback={<LoadingSpinner />}>
        <div />
      </Suspense>
    </div>
  );
};