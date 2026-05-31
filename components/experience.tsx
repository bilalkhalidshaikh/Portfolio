// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import { Canvas } from "@react-three/fiber";
// import { Sparkles } from "@react-three/drei";
// const VerticalTimeline = require("react-vertical-timeline-component")
//   .VerticalTimeline as any;
// const VerticalTimelineElement = require("react-vertical-timeline-component")
//   .VerticalTimelineElement as any;

// import "react-vertical-timeline-component/style.min.css";
// import { experiencesData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
// import { useTheme } from "@/context/theme-context";

// export default function Experience() {
//   const { ref } = useSectionInView("Experience");
//   const { theme } = useTheme();

//   return (
//     <section
//       id="experience"
//       ref={ref}
//       className="scroll-mt-28 mb-28 sm:mb-40 relative z-10"
//     >
//       {/* 3D Background Sparkles */}
//       <div className="absolute inset-0 z-[-1] pointer-events-none">
//         <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
//           <Sparkles
//             count={100}
//             scale={[20, 20, 20]}
//             size={3}
//             speed={0.5}
//             color={theme === "light" ? "#0ea5e9" : "#38bdf8"}
//           />
//         </Canvas>
//       </div>

//       <SectionHeading>My Experience</SectionHeading>

//       <VerticalTimeline lineColor="transparent">
//         {experiencesData.map((item, index) => (
//           <VerticalTimelineElement
//             key={index}
//             contentStyle={{
//               background:
//                 theme === "light"
//                   ? "rgba(255, 255, 255, 0.6)"
//                   : "rgba(30, 41, 59, 0.4)",
//               boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
//               backdropFilter: "blur(16px)",
//               WebkitBackdropFilter: "blur(16px)",
//               border: "1px solid rgba(255, 255, 255, 0.2)",
//               borderRadius: "20px",
//               padding: "1.75rem 2rem",
//               transition: "transform 0.3s ease",
//             }}
//             contentArrowStyle={{
//               borderRight:
//                 theme === "light"
//                   ? "0.4rem solid rgba(0, 0, 0, 0.2)"
//                   : "0.4rem solid rgba(255, 255, 255, 0.2)",
//             }}
//             icon={item.icon}
//             iconStyle={{
//               background: theme === "light" ? "#f8fafc" : "#0f172a",
//               color: theme === "light" ? "#0f172a" : "#f8fafc",
//               fontSize: "1.5rem",
//               border: "2px solid rgba(255, 255, 255, 0.2)",
//               transition: "all 0.3s ease",
//               transform: "scale(1.1)",
//               boxShadow: "0 0 12px rgba(56, 189, 248, 0.5)",
//             }}
//             date={
//               <span className="text-sm font-bold text-neutral-900 dark:text-white tracking-wide uppercase" style={{fontWeight:"bolder"}}>
//                 {item.date}
//               </span>
//             }
//           >
//             <h3 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
//               {item.title}
//             </h3>
//             <p className=" text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent tracking-tight mt-1">
//               {item.location}
//             </p>
//             <p className="mt-2 text-gray-700 dark:text-white/80 leading-relaxed">
//               {item.description}
//             </p>
//           </VerticalTimelineElement>
//         ))}
//       </VerticalTimeline>
//     </section>
//   );
// }



"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { experiencesData, ExperienceData } from "@/lib/data";
import { FaChevronDown, FaCodeBranch, FaServer } from "react-icons/fa";

// ==========================================
// ELITE INTERACTIVE ROW COMPONENT (ULTRA-WIDE)
// ==========================================
function ExperienceRow({ 
  item, 
  index, 
  isExpanded, 
  onToggle 
}: { 
  item: ExperienceData; 
  index: number; 
  isExpanded: boolean; 
  onToggle: () => void;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // BUG FIX: Hooks must be called at the top level, never inside a conditional block.
  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      800px circle at ${mouseX}px ${mouseY}px,
      rgba(161, 161, 170, 0.05),
      transparent 80%
    )
  `;

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    if (!isExpanded) return; // Only track mouse if the row is open
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Parse the location string: "Company | City, Country (Remote)"
  const [companyName, locationInfo] = item.location.split(' | ');
  const isRemote = locationInfo?.includes('(Remote)');
  const cleanLocation = locationInfo?.replace(' (Remote)', '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={`relative group transition-all duration-700 ease-out border-b border-white/5 ${
        isExpanded 
          ? "bg-[#070707]/95 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.9)] z-20 my-8 -mx-6 sm:-mx-12 lg:-mx-16 px-6 sm:px-12 lg:px-16" 
          : "bg-transparent z-10" 
      }`}
    >
      {/* Dynamic Mouse Spotlight - ONLY ACTIVE WHEN EXPANDED */}
      {isExpanded && (
        <motion.div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500 rounded-[2.5rem] opacity-100"
          style={{ background: spotlightBackground }} // Applied safely here
        />
      )}

      {/* The Clickable Header Row */}
      <button
        onClick={onToggle}
        className={`w-full relative z-10 flex flex-col lg:flex-row lg:items-start justify-between text-left py-10 lg:py-14 outline-none transition-all duration-300 ${isExpanded ? "pt-12 lg:pt-16" : ""}`}
      >
        <div className="flex flex-col w-full lg:w-2/3 pr-8 lg:pr-16">
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight transition-colors duration-300 ${isExpanded ? "text-zinc-300" : "text-white"}`}>
              {item.title}
            </h3>
            {isExpanded && (
               <motion.span 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="hidden sm:flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-zinc-400 bg-zinc-500/10 border border-zinc-500/20 px-3 py-1.5 rounded-md"
               >
                 ACTIVE DEPLOYMENT
               </motion.span>
            )}
          </div>
          
          {/* iOS Styled Meta-Data Chips */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-sm sm:text-base font-mono text-zinc-500 tracking-widest uppercase flex items-center">
              <span className="mr-3 text-zinc-700">//</span> {companyName || item.location}
            </span>
            
            {cleanLocation && (
              <div className="flex items-center gap-2 ml-2">
                {/* Location Pill */}
                <span className="px-3 py-1.5 text-[10px] sm:text-xs font-mono tracking-widest text-zinc-300 uppercase bg-black/40 border border-white/5 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-colors duration-300 group-hover:border-white/10">
                  {cleanLocation}
                </span>
                
                {/* Active Remote Indicator Pill */}
                {isRemote && (
                  <span className="px-3 py-1.5 text-[10px] sm:text-xs font-mono tracking-widest text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-2 shadow-[0_0_10px_rgba(16,185,129,0.05)] transition-colors duration-300 group-hover:border-emerald-500/30 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Remote
                  </span>
                )}
              </div>
            )}
          </div>

          <p className="text-zinc-400 font-light text-base sm:text-lg lg:text-xl leading-relaxed transition-colors duration-300 max-w-4xl">
            {item.shortDescription}
          </p>
        </div>
        
        <div className="flex items-center justify-between lg:justify-end w-full lg:w-1/3 mt-8 lg:mt-0">
          <span className="text-xl sm:text-2xl lg:text-3xl font-mono text-white/80 font-bold tracking-[0.2em] transition-colors">
            {item.date}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={`ml-8 flex items-center justify-center w-14 h-14 rounded-full border transition-all duration-500 flex-shrink-0 ${
              isExpanded 
                ? "border-zinc-500/50 bg-zinc-500/10 text-zinc-300 shadow-[0_0_30px_rgba(161,161,170,0.1)] scale-110" 
                : "border-white/10 bg-transparent text-zinc-500 group-hover:border-white/30 group-hover:text-white"
            }`}
          >
            <FaChevronDown className="text-xl" />
          </motion.div>
        </div>
      </button>

      {/* The Smooth Expanding Architectural Drawer */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
            className="overflow-hidden relative z-10"
          >
            <div className="pb-14 pt-6 grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12">
              
              {/* Deep Description Box */}
              <div className="xl:col-span-7 bg-[#040404]/60 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-8 sm:p-12 lg:p-14 shadow-inner">
                <h4 className="flex items-center gap-3 text-sm font-mono uppercase tracking-[0.25em] text-zinc-500 mb-8 pb-5 border-b border-white/5">
                  <FaServer className="text-zinc-500/50 text-base" /> Architectural Scope
                </h4>
                <p className="text-zinc-300 font-light leading-loose text-base sm:text-lg lg:text-xl">
                  {item.fullDescription}
                </p>
              </div>

              {/* Deliverables Terminal Box */}
              <div className="xl:col-span-5 bg-black/80 border border-white/5 rounded-[2rem] p-8 sm:p-12 lg:p-14 relative overflow-hidden group/terminal shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-500/5 blur-[80px] pointer-events-none transition-all duration-700 group-hover/terminal:bg-zinc-500/10" />
                
                <h4 className="flex items-center gap-3 text-sm font-mono uppercase tracking-[0.25em] text-zinc-500 mb-8 pb-5 border-b border-white/5">
                  <FaCodeBranch className="text-zinc-600 text-base" /> Core Execution
                </h4>
                <ul className="space-y-8">
                  {item.keyDeliverables.map((deliverable, dIdx) => (
                    <motion.li 
                      key={dIdx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (dIdx * 0.1), duration: 0.5, ease: "easeOut" }}
                      className="flex items-start text-base lg:text-lg text-zinc-300 font-light group/item"
                    >
                      <span className="text-zinc-500 mr-5 mt-1.5 text-[12px] font-mono transition-colors duration-300 group-hover/item:text-zinc-300">
                        &gt;_
                      </span>
                      <span className="group-hover/item:text-white transition-colors duration-300 leading-relaxed">
                        {deliverable}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ==========================================
// MAIN EXPERIENCE SECTION
// ==========================================
export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.1);
  const [expandedId, setExpandedId] = useState<string | null>(experiencesData[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="relative z-10 w-full max-w-[100rem] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 mb-28 sm:mb-40 scroll-mt-28"
    >
      {/* Deep Space Background Glows - Adjusted to dark slate to match */}
      <div className="absolute top-[10%] left-[-5%] w-[1000px] h-[1000px] bg-zinc-900/10 rounded-full blur-[200px] pointer-events-none mix-blend-screen" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-24 gap-8 border-b border-white/5 pb-16">
        <div className="max-w-5xl text-left">
          <div className="flex items-center justify-start gap-3 text-zinc-500 font-mono text-sm uppercase tracking-[0.3em] mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-500 animate-pulse" /> OPERATIONAL TIMELINE
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-sans mb-8">
            Professional Experience
          </h2>
          
          <p className="text-zinc-400 text-xl lg:text-2xl font-light leading-relaxed max-w-4xl">
            A chronological snapshot of my architectural evolution, transitioning from core full-stack 
            infrastructure optimization to orchestrating autonomous AI agent swarms.
          </p>
        </div>
      </div>

      {/* The Interactive List */}
      <div className="flex flex-col relative z-10">
        {experiencesData.map((item, index) => (
          <ExperienceRow 
            key={item.id} 
            item={item} 
            index={index} 
            isExpanded={expandedId === item.id} 
            onToggle={() => toggleExpand(item.id)} 
          />
        ))}
      </div>
    </section>
  );
}