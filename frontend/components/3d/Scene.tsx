import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface RotatingBoxProps {
  position: [number, number, number];
  color: string;
}
/**
 * A React component that renders a rotating 3D box in a 3D scene.
 *
 * @param position - The initial position of the box in the 3D space.
 * @param color - The color of the box.
 * @returns A React component that renders a rotating 3D box.
 */
function RotatingBox({ position, color }: RotatingBoxProps) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    // Update the box's rotation based on the delta time.
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.7;
  });

  return (
    <Box args={[1, 1, 1]} position={position} ref={meshRef}>
      <meshStandardMaterial color={color} />
    </Box>
  );
}

interface SceneProps {
  design?: { color: string; position: [number, number, number] };
}

/**
 * A React component that renders a 3D scene with a rotating box.
 *
 * @param design - Optional design configuration for the box.
 * @returns A React component that renders a 3D scene with a rotating box.
 */
export function Scene({ design }: SceneProps) {
  const boxProps = useMemo(() => ({
    // Use the design configuration if provided, otherwise default to
    // orange color and position at origin.
    color: design?.color || 'orange',
    position: design?.position || [0, 0, 0],
  }), [design]);

  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingBox {...boxProps} />
      <OrbitControls />
    </Canvas>
  );
}