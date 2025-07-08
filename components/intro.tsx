"use client";

import Image from "next/image";
import React, { useEffect, useRef,useState } from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import githubdp from "@/public/githubdp.jpg";
import signature from "@/public/signature.png"; // Adjust if filename differs
import { TypeAnimation } from "react-type-animation";
import SectionHeading from "./section-heading";
import ThreeDBackground from "./ThreeDBackground"; // Import the 3D background component
import { Canvas,useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { useTheme } from "@/context/theme-context";


export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      // style={{ background: "#111827" }}
      id="home"
      className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4 relative overflow-hidden"
    >
      {/* <ThreeDBackground /> */}
        {/* 3D Background Sparkles */}
            <div className="absolute inset-0 z-[-1] pointer-events-none">
              <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                <Sparkles
                  count={100}
                  scale={[20, 20, 20]}
                  size={3}
                  speed={0.5}
                  color={theme === "light" ? "#0ea5e9" : "#38bdf8"}
                />
              </Canvas>
            </div>

      {/* Signature Background */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 0.25, scale: 1.03 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
          initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
          animate={{ clipPath: "inset(0 0% 0 0)", opacity: 0.25 }}
          transition={{ duration: 4, ease: "easeInOut", delay: 1 }}
        >
          <Image
            src={signature}
            alt="Bilal Khalid Signature"
            className="w-[80%] max-w-[700px] object-contain translate-y-24"
            quality={95}
            priority
            style={{ position: "fixed" }}
          />
        </motion.div>
      </motion.div>

      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="group relative"
          >
            <div className="relative">
              {/* Animated Gradient Border */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <div className="h-24 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-[12px] opacity-50" />
              </motion.div>

              {/* Profile Picture */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <Image
                  src={githubdp}
                  alt="Bilal Khalid portrait"
                  width="192"
                  height="192"
                  quality="95"
                  priority={true}
                  className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
              </motion.div>

              {/* Animated Name Tag */}
              <motion.div
                className="absolute -bottom-2 -right-4"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  delay: 0.3,
                }}
              >
                <div className="bg-black/80 backdrop-blur-sm px-2 py-.5 rounded-full border border-white/20 shadow-lg">
                  <span className="text-xs font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    BILAL KHALID
                  </span>
                </div>
              </motion.div>

              {/* Connection Nodes Animation */}
              <div className="absolute -bottom-6 -right-6 flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>

              {/* Hover-activated Particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
                    initial={{
                      scale: 0,
                      x: Math.random() * 100 - 50,
                      y: Math.random() * 100 - 50,
                    }}
                    animate={{
                      scale: [0, 0.8, 0],
                      opacity: [0, 0.4, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-gray-900 dark:text-white max-w-[50rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <span className="font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
          Architecting Autonomous Enterprises
        </span>
        <br />
        <TypeAnimation
          sequence={[
            "AI-Native Full Stack Engineer",
            2000,
            "Agentic Systems Architect",
            2000,
            "LLM-Orchestrated Application Developer",
            2000,
            "Cross-Platform Mobile Engineer",
            2000,
            "Next.js + React Native Expert",
            2000,
            "Generative AI Product Builder",
            2000,
            "Autonomous Systems Developer",
            2000,
            "Agentic Workflow Engineer",
            2000,
            "End-to-End Web App Architect",
            2000,
            "AI-First Innovation Strategist",
            2000,
            "Autonomous App Solutions Architect",
            2000,
            "Cloud-Native SaaS Architect",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="font-bold block mt-4 text-neutral-900 dark:text-neutral-100"
        />

        <span className="text-xl sm:text-2xl mt-6 block text-gray-700 dark:text-gray-200">
          Building at the intersection of{" "}
          <span className="font-semibold text-cyan-600 dark:text-cyan-300">
            React
          </span>
          ,{" "}
          <span className="font-semibold text-orange-400 dark:text-orange-300">
            TensorFlow
          </span>
          ,{" "}
          <span className="font-semibold text-gray-400 dark:text-gray-300">
            Solidity
          </span>
          ,{" "}
          <span className="font-semibold text-blue-500 dark:text-blue-400">
            Kubernetes
          </span>
          ,{" "}
          <span className="font-semibold text-fuchsia-400 dark:text-fuchsia-300">
            Agentic AI
          </span>
          , and{" "}
          <span className="font-semibold text-indigo-400 dark:text-indigo-300">
            Decentralized Systems
          </span>
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* GitHub Button */}
        <motion.a
          whileHover={{
            scale: 1.05,
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
          }}
          whileTap={{ scale: 0.97 }}
          className="group relative bg-white px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer borderBlack text-gray-950 overflow-hidden"
          href="https://github.com/bilalkhalidshaikh"
          target="_blank"
        >
          <div className="absolute inset-0 overflow-hidden">
            {["{", "}", "<", ">"].map((char, i) => (
              <motion.span
                key={i}
                className="absolute text-gray-400/40 font-mono text-sm"
                initial={{
                  y: 0,
                  x: Math.random() * 100 - 50,
                  opacity: 0,
                }}
                animate={{
                  y: -100,
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          <span className="relative z-10 flex items-center gap-2">
            GitHub
            <motion.span
              whileHover={{ rotate: [0, -15, 15, 0] }}
              transition={{ duration: 0.4 }}
            >
              <FaGithub className="opacity-70" />
            </motion.span>
          </span>

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
            initial={{ x: -100 }}
            animate={{ x: 100 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.a>

        {/* LinkedIn Button */}
        <motion.a
          whileHover={{
            scale: 1.05,
            boxShadow: "0 4px 20px rgba(255,255,255,0.08)",
          }}
          whileTap={{ scale: 0.97 }}
          className="group relative bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full border-2 border-white/40 overflow-hidden"
          href="https://www.linkedin.com/in/bilalkhalidshaikh"
          target="_blank"
        >
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-white/20"
                initial={{
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>

          <span className="relative z-10 flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
            LinkedIn
            <motion.span
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BsLinkedin className="opacity-70" />
            </motion.span>
          </span>

          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
            <div className="absolute inset-0 bg-[length:20px_20px] bg-grid-white/10" />
          </div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-30"
            initial={{ x: -100 }}
            animate={{ x: 100 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </motion.a>
      </motion.div>
    </section>
  );
}
