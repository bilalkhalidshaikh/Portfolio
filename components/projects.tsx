// "use client";

// import React, { useState, useRef } from "react";
// import SectionHeading from "./section-heading";
// import { projectsData, ProjectData } from "@/lib/data";
// import Project from "./project";
// import { useSectionInView } from "@/lib/hooks";
// import { motion, AnimatePresence } from "framer-motion";
// import Tilt from "react-parallax-tilt";

// const categories = [
//   { name: "E-commerce", key: "ecommerce" },
//   { name: "Landing Pages", key: "landingPages" },
//   { name: "Dashboards", key: "dashboards" },
//   { name: "Portfolios", key: "portfolios" },
//   { name: "Web Apps", key: "webApps" },
//   { name: "Blogs", key: "blogs" },
// ] as const;

// type CategoryKey = (typeof categories)[number]["key"] | "all";

// export default function Projects() {
//   const { ref } = useSectionInView("Projects", 0.1);
//   const [activeCategory, setActiveCategory] =
//     useState<CategoryKey>("ecommerce");
//   const [lastCategory, setLastCategory] = useState<CategoryKey>("ecommerce");
//   const [isAllExpanded, setIsAllExpanded] = useState(false);
//   const categorySound = useRef<HTMLAudioElement | null>(null);

//   const handleCategoryChange = (categoryKey: CategoryKey) => {
//     if (categoryKey === "all") {
//       setIsAllExpanded(true);
//     } else {
//       setLastCategory(categoryKey);
//       setIsAllExpanded(false);
//     }
//     setActiveCategory(categoryKey);
//     try {
//       new Audio("/sounds/click.wav").play();
//     } catch (error) {
//       console.warn("Audio playback failed:", error);
//     }
//   };

//   const toggleAll = () => {
//     if (isAllExpanded) {
//       setActiveCategory(lastCategory);
//       setIsAllExpanded(false);
//     } else {
//       setActiveCategory("all");
//       setIsAllExpanded(true);
//     }
//     try {
//       new Audio("/sounds/click.wav").play();
//     } catch (error) {
//       console.warn("Audio playback failed:", error);
//     }
//   };

//   const allProjects: ProjectData[] = Object.values(projectsData)
//     .flat()
//     .filter(
//       (project, index, self) =>
//         index === self.findIndex((p) => p.title === project.title)
//     );

//   const displayedProjects: ProjectData[] =
//     activeCategory === "all"
//       ? allProjects
//       : projectsData[activeCategory].slice(0, 5) || [];

//   return (
//     <section
//       ref={ref}
//       id="projects"
//       className="scroll-mt-28 mb-28 py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
//     >
//       {/* <ThreeBackground /> */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="animate-blob absolute top-[-10%] left-[10%] w-[300px] h-[300px] bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
//         <div className="animate-blob animation-delay-2000 absolute top-[40%] right-[0%] w-[300px] h-[300px] bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
//         <div className="animate-blob animation-delay-4000 absolute top-[20%] left-[40%] w-[300px] h-[300px] bg-cyan-500 opacity-20 rounded-full blur-3xl"></div>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <SectionHeading>My Projects</SectionHeading>
//         <div className="flex justify-center mb-12">
//           <div className="grid grid-cols-3 gap-4 max-w-3xl">
//             {categories.map((category, index) => (
//               <Tilt
//                 key={category.key}
//                 tiltMaxAngleX={20}
//                 tiltMaxAngleY={20}
//                 glareEnable
//                 glareMaxOpacity={0.6}
//                 className="relative"
//               >
//                 <motion.button
//                   onClick={() => handleCategoryChange(category.key)}
//                   className={`px-6 py-3 rounded-xl text-lg font-bold text-gray-900 dark:text-white bg-white bg-opacity-20 dark:bg-gray-950 dark:bg-opacity-20 backdrop-blur-2xl shadow-xl transition-all duration-300 holographic ${
//                     activeCategory === category.key
//                       ? "scale-105 neon-glow"
//                       : "hover:scale-105"
//                   }`}
//                   initial={{ opacity: 0, y: 50, rotateX: -60 }}
//                   animate={{ opacity: 1, y: 0, rotateX: 0 }}
//                   transition={{
//                     delay: index * 0.2,
//                     type: "spring",
//                     stiffness: 200,
//                     damping: 15,
//                   }}
//                   whileHover={{
//                     scale: 1.2,
//                     rotate: 10,
//                     boxShadow: "0 8px 24px rgba(255, 255, 255, 0.4)",
//                     zIndex: 10,
//                   }}
//                   whileTap={{ scale: 0.9, rotate: -10 }}
//                   onMouseEnter={() => {
//                     const audio = new Audio("/sounds/click.wav");
//                     audio.play();
//                     categorySound.current = audio;
//                   }}
//                   onMouseLeave={() => {
//                     if (categorySound.current) {
//                       categorySound.current.pause();
//                       categorySound.current.currentTime = 0;
//                     }
//                   }}
//                 >
//                   {category.name}
//                   <div className="absolute inset-0 rounded-xl overflow-hidden">
//                     <div
//                       className={`neon-border ${
//                         activeCategory === category.key ? "neon-active" : ""
//                       }`}
//                     />
//                   </div>
//                 </motion.button>
//               </Tilt>
//             ))}
//           </div>
//         </div>
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeCategory}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.6 }}
//             className="grid gap-8"
//           >
//             {displayedProjects.map((project, index) => (
//               // <motion.div
//               //   key={project.title}
//               //   initial={{ opacity: 0, rotateY: -90 }}
//               //   animate={{ opacity: 1, rotateY: 0 }}
//               //   whileHover={{
//               //     filter: "blur(0px)",
//               //     backdropFilter: "blur(18px)",
//               //     boxShadow: "0 10px 40px rgba(255,255,255,0.2)",
//               //   }}
//               //   transition={{
//               //     delay: index * 0.1,
//               //     duration: 0.6,
//               //     type: "spring",
//               //   }}
//               //   className="transition-all duration-300 hover:bg-white/10 hover:dark:bg-white/5 rounded-2xl hover:shadow-2xl"
//               // >
//               <motion.div
//                 key={project.title}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{
//                   delay: index * 0.1,
//                   duration: 0.6,
//                   type: "spring",
//                 }}
//                 className="transition-all duration-300 bg-white/5 dark:bg-white/5 rounded-2xl shadow-md hover:shadow-xl project-hover-glass"
//               >
//                 <Project {...project} />
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//         <div className="flex justify-center mt-12">
//           <Tilt
//             tiltMaxAngleX={25}
//             tiltMaxAngleY={25}
//             glareEnable
//             glareMaxOpacity={0.7}
//           >
//             <motion.button
//               onClick={toggleAll}
//               className="px-8 py-4 rounded-xl text-xl font-bold text-gray-900 dark:text-white bg-white bg-opacity-20 dark:bg-gray-950 dark:bg-opacity-20 backdrop-blur-2xl shadow-2xl hover:bg-opacity-30 transition-all duration-300 holographic relative overflow-hidden"
//               animate={{ rotateY: isAllExpanded ? 180 : 0 }}
//               transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
//               whileHover={{
//                 scale: 1.25,
//                 boxShadow: "0 10px 30px rgba(255, 255, 255, 0.5)",
//                 rotate: 15,
//                 zIndex: 10,
//               }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <motion.span
//                 className="flex items-center justify-center gap-2"
//                 initial={{ opacity: 1 }}
//                 animate={{ opacity: isAllExpanded ? 0 : 1 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 See All Projects
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </motion.span>
//               <motion.span
//                 className="absolute inset-0 flex items-center justify-center gap-2"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: isAllExpanded ? 1 : 0 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 Collapse
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15 19l-7-7 7-7"
//                   />
//                 </svg>
//               </motion.span>
//               <div className="absolute inset-0 neon-border neon-active" />
//             </motion.button>
//           </Tilt>
//         </div>
//       </div>
//       <style jsx>{`
//         @keyframes neonPulse {
//           0% {
//             box-shadow: 0 0 5px #00f0ff, 0 0 10px #ff00ff, 0 0 15px #ffffff;
//           }
//           50% {
//             box-shadow: 0 0 10px #00f0ff, 0 0 20px #ff00ff, 0 0 30px #ffffff;
//           }
//           100% {
//             box-shadow: 0 0 5px #00f0ff, 0 0 10px #ff00ff, 0 0 15px #ffffff;
//           }
//         }

//         @keyframes neonBorder {
//           0% {
//             border-color: #00f0ff;
//             box-shadow: 0 0 5px #00f0ff;
//           }
//           33% {
//             border-color: #ff00ff;
//             box-shadow: 0 0 10px #ff00ff;
//           }
//           66% {
//             border-color: #ffffff;
//             box-shadow: 0 0 10px #ffffff;
//           }
//           100% {
//             border-color: #00f0ff;
//             box-shadow: 0 0 5px #00f0ff;
//           }
//         }

//         .neon-glow {
//           animation: neonPulse 1.5s infinite;
//         }

//         .neon-border {
//           position: absolute;
//           inset: -2px;
//           border: 2px solid transparent;
//           border-radius: 12px;
//           pointer-events: none;
//         }

//         .neon-active {
//           animation: neonBorder 3s infinite;
//         }

//         .holographic {
//           background: linear-gradient(
//             45deg,
//             rgba(255, 255, 255, 0.1),
//             rgba(255, 255, 255, 0.3)
//           );
//           position: relative;
//         }

//         .holographic::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             90deg,
//             transparent,
//             rgba(255, 255, 255, 0.4),
//             transparent
//           );
//           transition: 0.5s;
//         }

//         // .holographic:hover::before {
//         //   left: 100%;
//         // }
//         .project-hover-glass {
//           transition: all 0.3s ease-in-out;
//           backdrop-filter: blur(20px);
//           background: rgba(255, 255, 255, 0.06);
//           border-radius: 20px;
//           box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {
  FaArrowLeft,
  FaGlobe,
  FaQuoteLeft,
  FaTerminal,
  FaServer,
  FaLaptop,
  FaDatabase,
  FaChartLine,
} from "react-icons/fa";

// ==========================================
// TYPE DEFINITIONS & $240k RECRUITER DATA
// ==========================================

// Import everything cleanly from your central data file
import { categories, projectsData, CategoryKey, ProjectData } from "@/lib/data";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.05);
  const [activeCategory, setActiveCategory] =
    useState<CategoryKey>("autonomous");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null,
  );

  const displayedProjects = projectsData[activeCategory] || [];

  return (
    <section
      ref={ref}
      id="projects"
      className="w-screen max-w-[100vw] relative left-1/2 -translate-x-1/2 scroll-mt-28 py-24 bg-[#050505] border-y border-white/[0.04] overflow-hidden"
    >
      {/* Hyper-Premium Ambient Spatial Lighting Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-cyan-950/20 rounded-full blur-[180px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-blue-950/20 rounded-full blur-[180px] pointer-events-none mix-blend-screen" />

      {/* Screen Edge to Edge Inner Frame */}
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-none relative z-10">
        <AnimatePresence mode="wait">
          {!selectedProject ? (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, filter: "blur(12px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Header block spanning wide */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-white/5 pb-12">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 text-cyan-500 font-mono text-xs uppercase tracking-[0.3em] mb-4">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />{" "}
                    PRODUCTION READY INFRASTRUCTURE
                  </div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans">
                    Architectural Deployments & Case Studies
                  </h2>
                  <p className="text-gray-400 mt-4 text-lg lg:text-xl font-light leading-relaxed">
                    A curated index of stateful multi-agent coordination
                    frameworks, autonomous orchestration kernels, and
                    high-throughput data layers validated for enterprise
                    operational scale.
                  </p>
                </div>

                {/* Apple-Style Navigation Control Grid */}
                <div className="flex-shrink-0">
                  <nav className="flex p-1.5 bg-white/[0.02] backdrop-blur-3xl rounded-2xl border border-white/10 shadow-[2xl]">
                    {categories.map((category) => (
                      <button
                        key={category.key}
                        onClick={() => setActiveCategory(category.key)}
                        className={`relative px-6 py-3 text-xs lg:text-sm font-semibold tracking-wide rounded-xl transition-all duration-300 ${
                          activeCategory === category.key
                            ? "text-white"
                            : "text-gray-500 hover:text-gray-300"
                        }`}
                      >
                        {activeCategory === category.key && (
                          <motion.div
                            layoutId="ios-active-pill"
                            className="absolute inset-0 bg-white/[0.07] backdrop-blur-md rounded-xl border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 28,
                            }}
                          />
                        )}
                        <span className="relative z-10">{category.name}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Dynamic Ultra-Wide Dashboard Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {displayedProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layoutId={`card-container-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-[2rem] bg-white/[0.01] backdrop-blur-xl border border-white/[0.04] hover:bg-white/[0.03] hover:border-cyan-500/30 hover:shadow-[0_0_50px_rgba(6,182,212,0.08)] transition-all duration-500 ease-out cursor-pointer overflow-hidden min-h-[400px]"
                  >
                    {/* Animated Edge Border Highlight */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-transparent group-hover:from-cyan-500/10 transition-all duration-700 pointer-events-none" />

                    <div>
                      {/* Top Header Row Inside Card */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="text-[10px] font-mono tracking-[0.25em] text-cyan-400 font-semibold uppercase flex items-center gap-2 bg-cyan-950/30 px-3 py-1.5 rounded-lg border border-cyan-500/10">
                          <FaGlobe className="text-cyan-500 text-xs" />{" "}
                          {project.location}
                        </div>
                        <span className="text-[11px] font-mono text-gray-600 group-hover:text-cyan-500 transition-colors">
                          [ DETAILED ACCESS // ]
                        </span>
                      </div>

                      {/* Title & Desc */}
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4 group-hover:text-zinc-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 font-light leading-relaxed mb-8 text-sm sm:text-base">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Quick Metrics Snippet Panel */}
                    <div className="space-y-3 mb-8 bg-black/40 p-4 rounded-xl border border-white/5">
                      {project.metrics.slice(0, 2).map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="flex items-center text-xs font-mono text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3 animate-ping" />
                          {metric}
                        </div>
                      ))}
                    </div>

                    {/* Bottom Tech Layout Tags */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.05]">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[9px] font-mono font-medium text-gray-400 bg-white/[0.03] border border-white/5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* ========================================================= */
            /* STATE 2: INTERACTIVE OPERATING SYSTEM INTERNAL EXPLORER */
            /* ========================================================= */
            <motion.div
              key="detail-view"
              layoutId={`card-container-${selectedProject.id}`}
              className="w-full bg-[#090909]/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-6 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
            >
              {/* Internal Abstract Core Visual Light */}
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

              {/* Breadcrumb Operating Terminal Control */}
              <div className="flex items-center justify-between mb-16 border-b border-white/5 pb-6">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-mono text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <FaArrowLeft className="group-hover:-translate-x-1.5 transition-transform duration-300" />
                  <span>sys // exit_explorer</span>
                </button>
                <div className="text-xs font-mono text-gray-500 hidden sm:block">
                  LOC_ID:{" "}
                  <span className="text-gray-300">
                    {selectedProject.id.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Core Spatial Column Splits */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
                {/* Left Deep Information Container Blocks (8-Columns wide) */}
                <div className="lg:col-span-8 space-y-12">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase mb-4 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-md">
                      <FaServer /> {selectedProject.client} &bull;{" "}
                      {selectedProject.location}
                    </div>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                      {selectedProject.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Structural Challenge and Solution Comparison Matrix */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="bg-[#111]/40 p-8 rounded-2xl border border-white/5 space-y-4">
                      <div className="flex items-center gap-3 text-gray-400 font-mono text-xs uppercase tracking-widest">
                        <FaLaptop className="text-red-500/70" /> Structural
                        Blockers
                      </div>
                      <h4 className="text-white text-lg font-semibold">
                        The Target Challenge
                      </h4>
                      <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div className="bg-cyan-950/10 p-8 rounded-2xl border border-cyan-500/20 space-y-4">
                      <div className="flex items-center gap-3 text-cyan-400 font-mono text-xs uppercase tracking-widest">
                        <FaTerminal className="text-cyan-400" /> Engineering
                        Protocol
                      </div>
                      <h4 className="text-white text-lg font-semibold">
                        The Core Implementation
                      </h4>
                      <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* High Grade Client Testimony Section */}
                  {selectedProject.testimonial && (
                    <div className="relative bg-white/[0.01] p-8 rounded-2xl border border-white/[0.03] mt-8">
                      <FaQuoteLeft className="text-3xl text-cyan-500/10 absolute top-4 left-4" />
                      <p className="text-lg italic text-gray-300 font-light relative z-10 pl-6 mb-4">
                        "{selectedProject.testimonial.quote}"
                      </p>
                      <div className="pl-6 border-l border-cyan-500/30">
                        <span className="block text-white font-mono text-sm font-bold">
                          {selectedProject.testimonial.author}
                        </span>
                        <span className="text-xs text-gray-500">
                          {selectedProject.testimonial.role}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Interactive Telemetry Graph & Analytics Control Blocks (4-Columns wide) */}
                <div className="lg:col-span-4 space-y-10 bg-white/[0.01] p-6 sm:p-8 rounded-3xl border border-white/5">
                  {/* Real Interactive Metrics Data Engine Visualizer */}
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-gray-400 mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
                      <FaChartLine className="text-cyan-500" /> Pipeline
                      Analytics
                    </h4>

                    {/* Live Progress Bar Data Visualisations */}
                    <div className="space-y-5">
                      {selectedProject.vitals.map((vital, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-gray-400">{vital.label}</span>
                            <span className="text-cyan-400 font-bold">
                              {vital.value}
                            </span>
                          </div>
                          {/* Outer Track */}
                          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${vital.percentage}%` }}
                              transition={{
                                duration: 1,
                                delay: idx * 0.15,
                                ease: "easeOut",
                              }}
                              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Production Key Results Checklist */}
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-gray-400 mb-4 border-b border-white/10 pb-3">
                      Validated Benchmarks
                    </h4>
                    <ul className="space-y-3 font-mono text-xs">
                      {selectedProject.metrics.map((metric, i) => (
                        <li
                          key={i}
                          className="flex items-start text-gray-300 bg-black/40 p-3 rounded-lg border border-white/5"
                        >
                          <span className="text-green-400 mr-2 font-bold">
                            [&bull;]
                          </span>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Complete Layer Architecture Blueprints */}
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-gray-400 mb-4 border-b border-white/10 pb-3">
                      Architecture Stack Layers
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.architecture.map((layer, i) => (
                        <li
                          key={i}
                          className="flex items-center text-xs text-gray-300 font-mono bg-white/[0.02] p-2.5 rounded-md border border-white/5"
                        >
                          <FaDatabase className="text-cyan-500/60 mr-3 text-[10px]" />{" "}
                          {layer}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Complete Infrastructure Tags Container */}
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-gray-400 mb-4 border-b border-white/10 pb-3">
                      Deployment Index Tags
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-[9px] font-mono text-white bg-white/10 rounded border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
