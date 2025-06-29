// "use client";

// import dynamic from "next/dynamic";
// import { Suspense, useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";
// import type { CanvasProps } from "@react-three/fiber";
// import type { StarsProps } from "@react-three/drei";

// // Dynamic imports with proper types
// const Canvas = dynamic<() => Promise<{ default: React.FC<CanvasProps> }>>(
//   () => import("@react-three/fiber").then((mod) => ({ default: mod.Canvas })),
//   { ssr: false }
// );
// const Stars = dynamic<() => Promise<{ default: React.FC<StarsProps> }>>(
//   () => import("@react-three/drei").then((mod) => ({ default: mod.Stars })),
//   { ssr: false }
// );

// function AICore() {
//   const meshRef = useRef<THREE.Mesh>(null!);

//   useFrame(({ clock }) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.003;
//       meshRef.current.scale.setScalar(0.8 + Math.sin(clock.getElapsedTime()) * 0.1);
//     }
//   });

//   return (
//     <mesh ref={meshRef} position={[1, 0, -2]}>
//       <sphereGeometry args={[0.3, 32, 16]} />
//       <meshStandardMaterial
//         color="#00f0ff"
//         emissive="#ff00ff"
//         emissiveIntensity={0.5}
//         roughness={0.4}
//         metalness={0.6}
//       />
//       <pointLight color="#ffffff" intensity={1} distance={8} />
//     </mesh>
//   );
// }

// function ThreeBackgroundContent() {
//   return (
//     <Canvas
//       className="absolute inset-0 z-0"
//       camera={{ position: [0, 0, 5], fov: 50 }}
//       gl={{ antialias: true }}
//     >
//       <ambientLight intensity={0.3} />
//       <pointLight position={[5, 5, 5]} intensity={0.5} />
//       <Stars radius={50} depth={25} count={500} factor={2} saturation={0} fade speed={0.5} />
//       <AICore />
//     </Canvas>
//   );
// }

// export default function ThreeBackground() {
//   return (
//     <Suspense fallback={<div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1a1a3d] to-[#0a0a1a]" />}>
//       <ThreeBackgroundContent />
//     </Suspense>
//   );
// }