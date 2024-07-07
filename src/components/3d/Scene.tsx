import React, { useRef } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';
/**
 * A React component that renders a rotating 3D box using React Three Fiber.
 *
 * @param props - The props for the Box component.
 * @returns A React element representing the rotating 3D box.
 */
function RotatingBox(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!);
  /**
   * Rotates the mesh around the X and Y axes by the given delta time.
   * This function is called on each frame by the `useFrame` hook to continuously rotate the mesh.
   *
   * @param state - The current state of the Three.js scene.
   * @param delta - The time since the last frame, in seconds.
   */
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
  });
  return (
    <Box args={[1, 1, 1]} ref={meshRef} {...props}>
      <meshStandardMaterial color="orange" />
    </Box>
  );
}

/**
 * A React component that renders a 3D scene with a rotating box.
 *
 * @returns A React element representing the 3D scene.
 */
export default function Scene() {
  return (
    /**
     * A Three.js canvas element that contains the 3D scene.
     */
    <Canvas>
      /**
       * An ambient light that illuminates all objects in the scene equally.
       * @param intensity - The intensity of the ambient light.
       */
      <ambientLight intensity={0.5} />
      /**
       * A point light that emits light from a specific position in the scene.
       * @param position - The position of the point light.
       */
      <pointLight position={[10, 10, 10]} />
      /**
       * A rotating 3D box that is part of the 3D scene.
       * @param position - The position of the rotating box in the 3D scene.
       */
      <RotatingBox position={[0, 0, 0]} />
    </Canvas>
  );
}
