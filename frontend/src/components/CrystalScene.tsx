// src/components/CrystalScene.tsx

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 150 }) {
  const mesh = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.015;
      mesh.current.rotation.x = state.clock.elapsedTime * 0.008;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#6366f1" transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}

function Crystal() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    const pointer = state.pointer;
    mousePos.current.x += (pointer.x * 0.3 - mousePos.current.x) * 0.05;
    mousePos.current.y += (pointer.y * 0.3 - mousePos.current.y) * 0.05;
    meshRef.current.rotation.x = mousePos.current.y * 0.5 + state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.y = mousePos.current.x * 0.5 + state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={3} // Optimized: Performance boost
          thickness={0.4}
          chromaticAberration={0.05} // Optimized: Kam value
          anisotropy={0.1}
          distortion={0.1} // Optimized: Heavy distortion kam kiya
          distortionScale={0.3}
          temporalDistortion={0.05}
          ior={1.4}
          color="#a5b4fc"
          roughness={0.1}
          transmission={1}
          resolution={512} // Additional fix: Texture resolution limit
        />
      </mesh>
    </Float>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} intensity={1.5} color="#6366f1" />
      <pointLight position={[-3, -2, 2]} intensity={1} color="#06b6d4" />
      <pointLight position={[0, -4, 1]} intensity={0.8} color="#8b5cf6" />
    </>
  );
}

function ScrollCamera() {
  useFrame((state) => {
    const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    const target = scrollY * 0.002;
    state.camera.position.z = 5 - target;
    state.camera.position.y = -target * 0.3;
  });
  return null;
}

export default function CrystalScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.2]} // Fix: 1.5 se kam kiya taaki lag na ho
        gl={{ 
          antialias: false, // Performance ke liye false
          powerPreference: "high-performance", // GPU optimize karne ke liye
          alpha: true 
        }}
        style={{ background: 'transparent' }}
      >
        <ScrollCamera />
        <Lights />
        <Crystal />
        <Particles />
        <fog attach="fog" args={['#F6F8FB', 8, 30]} />
      </Canvas>
    </div>
  );
}