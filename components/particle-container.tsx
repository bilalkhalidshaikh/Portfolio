// "use client";

// import React, { useRef, useMemo, useState, useEffect } from "react";
// import { Canvas as FiberCanvas, useFrame } from "@react-three/fiber";
// import * as THREE from "three";
// import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
// import * as tf from "@tensorflow/tfjs";
// import { motion } from "framer-motion";
// import { useTheme } from "@/context/theme-context";

// // Type assertion for Canvas to bypass JSX error
// const Canvas = FiberCanvas as any;

// const ParticleSystem: React.FC = () => {
//   const pointsRef = useRef<THREE.Points>(null!);
//   const { theme } = useTheme();
//   const [particleCount] = useState(1000);
//   const [waveIntensity, setWaveIntensity] = useState(1);
//   const [speed] = useState(0.02);

//   // Initialize particle positions and velocities
//   const particles = useMemo(() => {
//     const positions = new Float32Array(particleCount * 3);
//     const velocities = new Float32Array(particleCount * 3);
//     for (let i = 0; i < particleCount; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 10;
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
//       velocities[i * 3] = (Math.random() - 0.5) * 0.1;
//       velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
//       velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
//     }
//     return { positions, velocities };
//   }, [particleCount]);

//   // TensorFlow.js model for dynamic wave intensity
//   useEffect(() => {
//     const model = tf.sequential();
//     model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
//     model.compile({ optimizer: "sgd", loss: "meanSquaredError" });

//     const xs = tf.tensor1d([0, 1, 2, 3, 4]);
//     const ys = tf.tensor1d([0.5, 1, 1.5, 2, 2.5]);
//     model.fit(xs, ys, { epochs: 10 }).then(() => {
//       const prediction = model.predict(tf.tensor1d([5])) as tf.Tensor;
//       prediction.data().then((data) => setWaveIntensity(data[0]));
//     });
//   }, []);

//   // Animation loop for cosmic waves and galaxy swirls
//   useFrame(({ clock }) => {
//     const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
//     const time = clock.getElapsedTime();
//     for (let i = 0; i < particleCount; i++) {
//       const i3 = i * 3;
//       // Cosmic wave effect
//       positions[i3 + 1] += Math.sin(time + positions[i3]) * waveIntensity * speed;
//       // Galaxy swirl effect
//       const angle = Math.atan2(positions[i3 + 1], positions[i3]);
//       positions[i3] += Math.cos(angle) * speed;
//       positions[i3 + 2] += Math.sin(angle) * speed;
//       // City vibe pulse
//       positions[i3 + 1] += Math.sin(time * 0.5 + positions[i3 + 2]) * 0.01;
//     }
//     pointsRef.current.geometry.attributes.position.needsUpdate = true;
//   });

//   // Dynamic material based on theme
//   const materialProps = useMemo(
//     () => ({
//       color: theme === "dark" ? "#ffffff" : "#000000",
//       size: 0.1,
//       map: new THREE.TextureLoader().load("/particles/glow.png"),
//       transparent: true,
//       opacity: 0.8,
//     }),
//     [theme]
//   );

//   return (
//     <Points ref={pointsRef} positions={particles.positions}>
//       <PointMaterial {...materialProps} />
//     </Points>
//   );
// };

// const ParticleContainer: React.FC = () => {
//   return (
//     <motion.div
//       className="w-full h-screen relative"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <Canvas
//         camera={{ position: [0, 0, 15], fov: 75 }}
//         style={{ height: "100vh", width: "100%" }}
//       >
//         <ambientLight intensity={0.5} />
//         <ParticleSystem />
//         <OrbitControls enableZoom={true} />
//       </Canvas>
//     </motion.div>
//   );
// };

// export default ParticleContainer;




import React from 'react'

export default function ParticleContainer() {
  return (
    <div style={{background:"#333"}}></div>
  )
}
