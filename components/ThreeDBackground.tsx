// components/ThreeDBackground.tsx
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as THREE from 'three';

interface SphereProps {
  position: [number, number, number];
  color: any; // Keep this as a string
}

const RandomSphere: React.FC<SphereProps> = ({ position, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.z = hovered 
        ? THREE.MathUtils.lerp(meshRef.current.position.z, -3, 0.1)
        : THREE.MathUtils.lerp(meshRef.current.position.z, -5, 0.1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial 
        color={new THREE.Color(color) as unknown as THREE.Color} // Create a THREE.Color instance
        emissive={hovered ? new THREE.Color(color) : new THREE.Color(0x000000)} // Create a THREE.Color instance
        emissiveIntensity={hovered ? 1 : 0}
      />
    </mesh>
  );
};

const ThreeDBackground: React.FC = () => {
  const [spheres, setSpheres] = useState<JSX.Element[]>([]);
  const colors = ['#FF3D68', '#00C4FF', '#45FFCA', '#FFC700'];
  const soundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Preload the sound effect
    soundRef.current = new Audio('/sounds/click.mp3');
    
    const handleMouseMove = (event: MouseEvent) => {
      if (Math.random() > 0.3) return; // Only create sometimes
      
      const x = (event.clientX / window.innerWidth) * 10 - 5;
      const y = -(event.clientY / window.innerHeight) * 10 + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const newSphere = (
        <RandomSphere 
          key={Date.now() + Math.random()} 
          position={[x, y, -10]} 
          color={color} 
        />
      );
      
      setSpheres(prev => [...prev.slice(-30), newSphere]); // Limit to 30 spheres
      
      if (soundRef.current) {
        soundRef.current.currentTime = 0;
        soundRef.current.play();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-[-1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <color attach="background" args={['#000714']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Sparkles 
          count={200} 
          scale={[20, 20, 20]} 
          size={2} 
          speed={1} 
          color="#0ea5e9" 
        />
        {spheres}
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;
