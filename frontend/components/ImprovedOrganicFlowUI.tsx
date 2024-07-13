import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import Link from 'next/link';


interface WavyMaterial extends THREE.ShaderMaterial {
    uniforms: {
        uTime: { value: number };
        uColorA: { value: THREE.Color };
        uColorB: { value: THREE.Color };
    };
}

const WavyBackground = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<WavyMaterial>(null);

    useFrame(({ clock }) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
        }
    });

    return (
        <mesh ref={meshRef}>
            <primitive object={new THREE.PlaneGeometry(2, 2, 100, 100)} />
            <shaderMaterial
                ref={materialRef}
                uniforms={{
                    uTime: { value: 0 },
                    uColorA: { value: new THREE.Color('#38bdf8') },
                    uColorB: { value: new THREE.Color('#818cf8') },
                }}
                vertexShader={`
                    varying vec2 vUv;
                    uniform float uTime;
                    void main() {
                        vUv = uv;
                        vec3 pos = position;
                        pos.z += sin(pos.x * 10.0 + uTime) * 0.1;
                        pos.z += sin(pos.y * 10.0 + uTime) * 0.1;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                    }
                `}
                fragmentShader={`
                    varying vec2 vUv;
                    uniform vec3 uColorA;
                    uniform vec3 uColorB;
                    void main() {
                        vec3 color = mix(uColorA, uColorB, vUv.x);
                        gl_FragColor = vec4(color, 1.0);
                    }
                `}
            />
        </mesh>
    );
};

const WireframeSphere = () => {
    return (
        <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial wireframe color="#ffffff" />
        </mesh>
    );
};

const ImprovedOrganicFlowUI: React.FC = () => {
    return (
        <div className="h-screen w-full overflow-hidden bg-black text-white">
            <Canvas className="absolute inset-0">
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <OrbitControls enableZoom={false} enablePan={false} />
                <WavyBackground />
                <WireframeSphere />
            </Canvas>

            <div className="absolute inset-0 flex flex-col p-8">
                <header className="flex justify-between items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold"
                    >
                        W.A — ARCHITECT
                    </motion.h1>
                    <nav>
                        <motion.ul
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, staggerChildren: 0.1 }}
                            className="flex space-x-6"
                        >
                            {['Projects', 'Services', 'The Studio', 'Contact'].map((item) => (
                                <motion.li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`}>
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </nav>
                </header>

                <main className="flex-grow flex items-center justify-end">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-1/3"
                    >
                        <h2 className="text-5xl font-bold mb-4">Garden Villa</h2>
                        <p className="text-xl mb-4">2800 Sq Ft, 3 Bedroom, 3 Units</p>
                        <button className="bg-white text-black px-6 py-2 rounded-full">
                            View Project
                        </button>
                    </motion.div>
                </main>

                <footer className="flex justify-between items-center">
                    <div>01 04</div>
                    <div className="flex space-x-4">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ImprovedOrganicFlowUI;
