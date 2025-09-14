import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';

/**
 * Scene Component
 * Default 3D scene with animated objects
 * Demonstrates basic Three.js concepts
 */
export const Scene = () => {
  return (
    <group>
      <AnimatedCube position={[-2, 0, 0]} />
      <AnimatedSphere position={[0, 0, 0]} />
      <AnimatedTorus position={[2, 0, 0]} />
    </group>
  );
};

/**
 * Animated Cube Component
 */
const AnimatedCube = ({ position = [0, 0, 0], ...props }) => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });
  
  return (
    <Box
      ref={meshRef}
      position={position}
      args={[1, 1, 1]}
      castShadow
      receiveShadow
      {...props}
    >
      <meshStandardMaterial color="#ff6b6b" />
    </Box>
  );
};

/**
 * Animated Sphere Component
 */
const AnimatedSphere = ({ position = [0, 0, 0], ...props }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });
  
  return (
    <Sphere
      ref={meshRef}
      position={position}
      args={[0.7, 32, 32]}
      castShadow
      receiveShadow
      {...props}
    >
      <meshStandardMaterial color="#4ecdc4" />
    </Sphere>
  );
};

/**
 * Animated Torus Component
 */
const AnimatedTorus = ({ position = [0, 0, 0], ...props }) => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.z += delta * 0.4;
    }
  });
  
  return (
    <Torus
      ref={meshRef}
      position={position}
      args={[0.6, 0.2, 16, 32]}
      castShadow
      receiveShadow
      {...props}
    >
      <meshStandardMaterial color="#45b7d1" />
    </Torus>
  );
};