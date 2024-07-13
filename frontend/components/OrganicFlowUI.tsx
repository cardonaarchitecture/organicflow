import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Navigation } from './layout/Navigation'
import { ProjectExplorer } from './ProjectExplorer';
//import { ProjectSlider } from './ProjectSlider';
import { WavyBackground } from './WavyBackground';
import { useProjectStore } from '@/utils/state/useProjectStore';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';


const Background3D = () => {
  return (
    <mesh>
      <sphereGeometry args={[5, 64, 64]} />
      <meshStandardMaterial color="#1a1a1a" wireframe />
    </mesh>
  );
};

export const OrganicFlowUI: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fetchProjects = useProjectStore(state => state.fetchProjects);
  const loading = useProjectStore(state => state.loading);
  const error = useProjectStore(state => state.error);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    });
  };

  return (
    <div className="h-screen w-full overflow-hidden" onMouseMove={handleMouseMove}>
      <WavyBackground
        colors={['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee']}
        blur={10}
        speed="fast"
        waveOpacity={0.5}
        className="absolute inset-0 z-0"
      >
        <Canvas className="absolute inset-0">
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Background3D />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </WavyBackground>

      <div className="relative z-10 h-full flex flex-col">
        <Navigation />

        <main className="flex-grow overflow-auto">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-white text-2xl">Loading...</p>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-red-500 text-2xl">{error}</p>
            </div>
          ) : (
            <ProjectExplorer />
          )}
        </main>

        <footer className="p-4 flex justify-between items-center text-white bg-gray-800">
          <div>&copy; 2023 W.A — ARCHITECT</div>
          <div>
            <a href="#" className="mx-2">Privacy Policy</a>
            <a href="#" className="mx-2">Terms of Service</a>
          </div>
        </footer>
      </div>
    </div>
  );
};