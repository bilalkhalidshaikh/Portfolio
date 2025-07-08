"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Canvas } from "@react-three/fiber";
import { Sparkles, Points, PointMaterial } from "@react-three/drei";
import {
  BsLinkedin,
  BsGithub,
  BsTwitterX,
  BsEnvelopeFill,
  BsTelephoneFill,
} from "react-icons/bs";
import { SiMedium, SiSubstack, SiProducthunt } from "react-icons/si";
import { PiBracketsAngleBold } from "react-icons/pi";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { useRef, useEffect, Suspense } from "react";
import SoldierModel from "./SoldierModel";
import Image from "next/image";
import githubdp from "@/public/githubdp.jpg";
import bilal from "@/public/bilal.jpg";
import Tilt from "react-parallax-tilt";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="relative mb-32 w-full max-w-7xl mx-auto px-6 text-left"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Animated Sparkles Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-blob absolute top-[-10%] left-[10%] w-[300px] h-[300px] bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="animate-blob animation-delay-2000 absolute top-[40%] right-[0%] w-[300px] h-[300px] bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="animate-blob animation-delay-4000 absolute top-[20%] left-[40%] w-[300px] h-[300px] bg-cyan-500 opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Textual Part */}
        <div>
          <SectionHeading>
            <span className="text-3xl font-bold tracking-tight">
              LET’S GET IN TOUCH
            </span>
          </SectionHeading>
  <p className="text-gray-800 dark:text-white font-normal text-lg mt-4 max-w-md leading-relaxed">
            Got a project or wild idea?{" "}
            <strong>Let's create something exceptional</strong> — reach out and{" "}
            <strong>let's collaborate</strong>.
          </p>
          <div className="mt-10 flex gap-4 items-center">
            {/* <div className="w-32 h-32 bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden"> */}
         
              <div className="flex items-center justify-left">
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
                        <div className="h-24 w-24 rounded-full bg-gradient-to-r from-white-400 to-#ff6719-500 blur-[12px] opacity-50" />
                      </motion.div>

                      {/* Profile Picture */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative"
                      >
                        <Image
                          src={bilal}
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
                      {/* <div className="absolute -bottom-6 -right-6 flex gap-1">
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
                      </div> */}

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
                {/* </div> */}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Muhammad Bilal Khalid
                </h3>
                <p className="text-gray-700 font-semibold dark:text-white/70">
                  Full Stack Engineer · AI Architect · Web3 Strategist
                </p>
              </div>
          </div>
        

          {/* 3D Connection Illusion with Three.js Points */}
          <SoldierModel />
        </div>

        {/* Right Social Grid Section */}

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          <a
            href="https://www.linkedin.com/in/bilalkhalidshaikh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="p-6 bg-[#0077B5]/30 dark:bg-[#0077B5]/20 border border-[#0077B5]/50 backdrop-blur-xl rounded-2xl text-[#004471] dark:text-white shadow-xl col-span-1"
              whileHover={{ scale: 1.05 }}
            >
              <BsLinkedin className="text-3xl mb-2 text-[#0077B5]" />
              <h4 className="font-semibold">LinkedIn</h4>
              <p className="text-xs">Executive Profile</p>
            </motion.div>
          </a>
          <a
            href="https://x.com/bilalkhalid29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="p-6 bg-black/30 dark:bg-black/20 border border-black/40 dark:border-white/20 backdrop-blur-xl rounded-2xl text-black dark:text-white shadow-xl col-span-1 row-span-2"
              whileHover={{ scale: 1.05 }}
            >
              <BsTwitterX className="text-3xl mb-2 text-black dark:text-white" />
              <h4 className="font-semibold">X (Twitter)</h4>
              <p className="text-xs">Empire Updates</p>
            </motion.div>
          </a>
          <a
            href="https://medium.com/@bilalkhalid29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="p-6 bg-[#00ab6c]/30 dark:bg-[#00ab6c]/20 border border-[#00ab6c]/50 backdrop-blur-xl rounded-2xl text-[#004c38] dark:text-white shadow-xl col-span-1"
              whileHover={{ scale: 1.05 }}
            >
              <SiMedium className="text-3xl mb-2 text-[#00ab6c]" />
              <h4 className="font-semibold">Medium</h4>
              <p className="text-xs">Tech Essays</p>
            </motion.div>
          </a>
          <a
            href="https://substack.com/@bilalkhalid29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="p-6 bg-[#ff6719]/30 dark:bg-[#ff6719]/20 border border-[#ff6719]/50 backdrop-blur-xl rounded-2xl text-[#5c2d00] dark:text-white shadow-xl col-span-2"
              whileHover={{ scale: 1.05 }}
            >
              <SiSubstack className="text-3xl mb-2 text-[#ff6719]" />
              <h4 className="font-semibold">Substack</h4>
              <p className="text-xs">Empire Dispatches</p>
            </motion.div>
          </a>
          <a
            href="https://github.com/bilalkhalidshaikh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="p-6 bg-[#6e40c9]/30 dark:bg-[#6e40c9]/20 border border-[#6e40c9]/50 backdrop-blur-xl rounded-2xl text-[#2e1c66] dark:text-white shadow-xl col-span-1"
              whileHover={{ scale: 1.05 }}
            >
              <BsGithub className="text-3xl mb-2 text-[#6e40c9]" />
              <h4 className="font-semibold">GitHub</h4>
              <p className="text-xs">Engineering Vault</p>
            </motion.div>
          </a>
          <a
            href="https://www.producthunt.com/@bilalkhalid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="p-6 bg-gradient-to-br from-rose-200 via-peachpuff to-pink-300 dark:from-pink-500/10 dark:via-rose-600/10 dark:to-pink-700/10 border border-pink-500 dark:border-pink-300/20 backdrop-blur-xl rounded-2xl text-[#4e1e1e] dark:text-white shadow-xl col-span-1"
              whileHover={{ scale: 1.05 }}
            >
              <SiProducthunt className="text-3xl mb-2 text-pink-500 dark:text-pink-300" />
              <h4 className="font-semibold">Product Hunt</h4>
              <p className="text-xs">Launches</p>
            </motion.div>
          </a>
          <a
            href="https://bilalkhalidshaikh.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="p-6 bg-gradient-to-br from-blue-100 via-indigo-200 to-indigo-300 dark:from-slate-800/10 dark:via-blue-700/10 dark:to-indigo-800/10 border border-blue-600/30 dark:border-blue-300/10 backdrop-blur-xl rounded-2xl text-[#1e2a5c] dark:text-white shadow-xl col-span-1"
              whileHover={{ scale: 1.05 }}
            >
              <PiBracketsAngleBold className="text-3xl mb-2 text-blue-500 dark:text-blue-300" />
              <h4 className="font-semibold">Portfolio</h4>
              <p className="text-xs">Personal Profile</p>
            </motion.div>
          </a>
        </div>
      </div>

      {/* How to Connect Section */}
      <div className="mt-32 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          How to Connect?
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/bilalkhalidshaikh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div className="p-6 w-full md:w-64 bg-[#0077B5]/10 backdrop-blur-xl border border-[#0077B5]/30 rounded-xl text-gray-900 dark:text-white shadow-lg hover:scale-105 transition-transform">
              <BsLinkedin className="text-2xl mb-2 text-[#0077B5] mx-auto" />
              <h4 className="font-semibold">Connect on LinkedIn</h4>
              <p className="text-xs">Let’s collaborate on future projects!</p>
            </motion.div>
          </a>
          <a href="mailto:bilalkhalid.dev@outlook.com">
            <motion.div className="p-6 w-full md:w-64 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl text-gray-900 dark:text-white shadow-lg hover:scale-105 transition-transform">
              <BsEnvelopeFill className="text-2xl mb-2 text-gray-700 dark:text-white mx-auto" />
              <h4 className="font-semibold">Drop me a Mail</h4>
              <p className="text-xs">bilalkhalid.dev@outlook.com</p>
            </motion.div>
          </a>
          <a
            href="https://wa.me/+923183052976"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div className="p-6 w-full md:w-64 bg-pink-500/10 backdrop-blur-xl border border-pink-500/30 rounded-xl text-gray-900 dark:text-white shadow-lg hover:scale-105 transition-transform">
              <BsTelephoneFill className="text-2xl mb-2 text-pink-500 mx-auto" />
              <h4 className="font-semibold">Let’s Talk</h4>
              <p className="text-xs">Let’s schedule a video call!</p>
            </motion.div>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
