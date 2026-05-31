
// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt";
// import { Icon } from "@iconify/react";
// import { useSectionInView } from "@/lib/hooks";
// import { skillsData } from "@/lib/data";
// import { useTheme } from "@/context/theme-context";

// const fadeInAnimationVariants:any = {
//   initial: { opacity: 0, y: 40, scale: 0.9 },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       delay: 0.04 * index,
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   }),
// };

// const SectionHeading = ({ children }: { children: React.ReactNode }) => {
//   const { theme } = useTheme();
//   return (
//     <h2
//       className={`text-4xl font-bold mb-10 ${
//         theme === "dark" ? "text-white" : "text-gray-900"
//       }`}
//     >
//       {children}
//     </h2>
//   );
// };

// export default function Skills() {
//   const { ref } = useSectionInView("Skills");
//   const { theme } = useTheme();

//   return (
//     <section
//       id="skills"
//       ref={ref}
//       className="relative z-10 mb-28 max-w-7xl px-6 mx-auto text-center sm:mb-40 scroll-mt-28"
//     >
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="animate-blob absolute top-[-10%] left-[10%] w-[300px] h-[300px] bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
//         <div className="animate-blob animation-delay-2000 absolute top-[40%] right-[0%] w-[300px] h-[300px] bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
//         <div className="animate-blob animation-delay-4000 absolute top-[20%] left-[40%] w-[300px] h-[300px] bg-cyan-500 opacity-20 rounded-full blur-3xl"></div>
//       </div>

//       <SectionHeading>My Skills</SectionHeading>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">
//         {skillsData.map((skill, index) => (
//           <motion.div
//             key={skill.name}
//             variants={fadeInAnimationVariants}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             custom={index}
//             className="w-full"
//           >
//             <a
//               href={skill.link}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Tilt
//                 tiltMaxAngleX={15}
//                 tiltMaxAngleY={15}
//                 perspective={1000}
//                 scale={1.05}
//                 transitionSpeed={300}
//                 glareEnable
//                 glareMaxOpacity={0.15}
//                 glareColor="#ffffff"
//                 glarePosition="all"
//                 className="glass-card"
//               >
//                 <Icon
//                   icon={skill.icon}
//                   className={`text-4xl md:text-5xl ${
//                     theme === "dark" ? "text-white" : "text-gray-900"
//                   } animate-heartbeat`}
//                 />
//                 <span
//                   className={`mt-3 text-sm font-medium tracking-wide ${
//                     theme === "dark" ? "text-white" : "text-gray-900"
//                   }`}
//                 >
//                   {skill.name}
//                 </span>
//               </Tilt>
//             </a>
//           </motion.div>
//         ))}
//       </div>

//       <style jsx global>{`
//         @keyframes heartbeat {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.1); }
//         }

//         .animate-heartbeat {
//           animation: heartbeat 1.5s infinite;
//         }

//         .glass-card {
//           background: rgba(255, 255, 255, 0.08);
//           backdrop-filter: blur(16px) saturate(180%);
//           -webkit-backdrop-filter: blur(16px) saturate(180%);
//           border-radius: 1rem;
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           padding: 1.5rem;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.3s ease-in-out;
//           box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//         }

//         .glass-card:hover {
//           transform: scale(1.05);
//           box-shadow: 0 0 30px rgba(147, 51, 234, 0.3);
//           border: 1px solid rgba(255, 255, 255, 0.4);
//         }

//         html.dark .glass-card {
//           background: rgba(255, 255, 255, 0.05);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         .animate-blob {
//           animation: blob 20s infinite;
//         }

//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }

//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }

//         @keyframes blob {
//           0%, 100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -20px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 30px) scale(0.9);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }













"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Icon } from "@iconify/react";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";

// ==========================================
// VERCEL-STYLE SPOTLIGHT CARD COMPONENT
// ==========================================
function SkillCard({ skill, index }: { skill: any; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.05,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col items-center justify-center p-6 bg-[#111111]/40 border border-white/5 rounded-2xl cursor-pointer overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-colors duration-500 hover:border-cyan-500/30"
    >
      {/* The Magic Sauce: Dynamic Mouse-Tracking Spotlight 
        This is what $240k frontend architects build.
      */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Icon with 3D Float Effect on Hover */}
      <motion.div 
        className="relative z-10 mb-4 text-gray-400 group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.05)] group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]"
      >
        <Icon icon={skill.icon} className="text-4xl sm:text-5xl" />
      </motion.div>
      
      <span className="relative z-10 text-xs sm:text-sm font-mono tracking-widest text-gray-500 group-hover:text-cyan-300 transition-colors duration-300 text-center uppercase font-bold">
        {skill.name}
      </span>
    </motion.div>
  );
}

// ==========================================
// MAIN SKILLS EXPORT
// ==========================================
export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.1);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative z-10 w-full mb-28 sm:mb-40 scroll-mt-28"
    >
      {/* Premium Ambient Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      {/* Header */}
      <div className="text-center mb-20 relative z-10">
        <div className="flex items-center justify-center gap-3 text-cyan-500 font-mono text-xs uppercase tracking-[0.3em] mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" /> TECHNICAL ARSENAL
        </div>
        <SectionHeading>Engineering Stack</SectionHeading>
        <p className="text-gray-400 mt-4 text-lg font-light max-w-2xl mx-auto">
          The core frameworks, execution languages, and orchestration primitives utilized to engineer 
          high-concurrency distributed systems.
        </p>
      </div>

      {/* Architecture Domain Grouping */}
      <div className="flex flex-col gap-16 max-w-[70rem] mx-auto relative z-10">
        {skillsData.map((categoryGroup, groupIndex) => (
          <motion.div 
            key={categoryGroup.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: groupIndex * 0.1 }}
            className="w-full bg-[#050505]/60 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            {/* Inner Domain Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

            <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-6">
              <span className="text-cyan-500 font-mono text-sm">{`0${groupIndex + 1}`}</span>
              <h3 className="text-sm sm:text-base font-mono tracking-[0.25em] text-gray-300 uppercase font-bold">
                {categoryGroup.category}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
              {categoryGroup.skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}