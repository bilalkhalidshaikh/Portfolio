// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";
// import qutLogo from "@/public/qut-Logo.png";
// import Image from "next/image";

// export default function Education() {
//   const { ref } = useSectionInView("Education");

//   return (
//     <motion.section
//       id="education"
//       ref={ref}
//       className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
//       initial={{
//         opacity: 0,
//       }}
//       whileInView={{
//         opacity: 1,
//       }}
//       transition={{
//         duration: 1,
//       }}
//       viewport={{
//         once: true,
//       }}
//     >
//       <SectionHeading>My Education</SectionHeading>

//       <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
//         <div>
//           <Image src={qutLogo} alt="QUT" width="150" />
//         </div>

//         <div>
//           <p className="text-lg font-medium">
//             Bachelor of Information Technology
//           </p>
//           <p>Queensland University of Technology</p>
//           <p className="mt-1">Graduated in 2023</p>
//           <p className="my-1">GPA 6.2/7</p>
//           <ul className="list-disc pl-6">
//             <li>Major in Computer Science</li>
//             <li>Minor in Networks & Security</li>
//             <li>Minor in Mobile Applications</li>
//             <li>Science & Engineering Dean's List - 2019 & 2021</li>
//           </ul>
//         </div>
//       </div>
//     </motion.section>
//   );
// }

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Canvas } from "@react-three/fiber";
// import { Sparkles } from "@react-three/drei";
// import { useTheme } from "@/context/theme-context";
// import { educationData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
// import SectionHeading from "./section-heading";

// export default function Education() {
//   const { ref } = useSectionInView("Education");
//   const { theme } = useTheme();

//   return (
//     <motion.section
//       id="education"
//       ref={ref}
//       className="relative z-10 scroll-mt-28 mb-28 sm:mb-40 px-4 md:px-10"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       viewport={{ once: true }}
//     >
//       {/* 3D Sparkle Background */}
//       <div className="absolute inset-0 z-[-1]">
//         <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
//           <Sparkles
//             count={100}
//             scale={[20, 20, 20]}
//             size={2.5}
//             speed={0.4}
//             color={theme === "light" ? "#3b82f6" : "#0ea5e9"}
//           />
//         </Canvas>
//       </div>

//       <SectionHeading>My Education</SectionHeading>

//       <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-10">
//         {educationData.map((edu, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05, rotate: 1 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="rounded-3xl p-6 shadow-2xl backdrop-blur-xl border border-white/20 transform-gpu bg-white/60 dark:bg-white/5 dark:text-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]"
//             style={{
//               background: theme === "light"
//                 ? "rgba(255, 255, 255, 0.65)"
//                 : "rgba(30, 41, 59, 0.4)",
//             }}
//           >
//             <h3 className="text-xl font-bold mb-1 text-neutral-900 dark:text-white">
//               {edu.degree}
//             </h3>
//             <p className="text-cyan-700 dark:text-cyan-300 text-sm font-semibold mb-1">
//               {edu.institution}
//             </p>
//             <p className="text-xs font-medium text-gray-600 dark:text-white/50 mb-2">
//               {edu.date}
//             </p>
//             <p className="text-[15px] text-gray-800 dark:text-white/80 leading-relaxed tracking-wide">
//               {edu.description}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// }



// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Canvas } from "@react-three/fiber";
// import { Sparkles } from "@react-three/drei";
// import { useTheme } from "@/context/theme-context";
// import { educationData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
// import SectionHeading from "./section-heading";

// const boxLayout = [
//   "col-span-1 row-span-1",
//   "lg:col-span-2 row-span-1",
//   "lg:row-span-2 col-span-1",
//   "lg:col-span-2 lg:row-span-1",
//   "col-span-1 row-span-1",
//   "col-span-1 row-span-1",
//   "col-span-1 row-span-1"
// ];

// export default function Education() {
//   const { ref } = useSectionInView("Education");
//   const { theme } = useTheme();

//   return (
//     <motion.section
//       id="education"
//       ref={ref}
//       className="relative z-10 scroll-mt-28 mb-28 sm:mb-40 px-4 md:px-10"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       viewport={{ once: true }}
//     >
//       {/* 3D Sparkle Background */}
//       <div className="absolute inset-0 z-[-1] pointer-events-none">
//         <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
//           <Sparkles
//             count={140}
//             scale={[20, 20, 20]}
//             size={2.5}
//             speed={0.3}
//             color={theme === "light" ? "#ffffff" : "#ffffff"}
//           />
//         </Canvas>
//       </div>

//       <SectionHeading>My Education</SectionHeading>

//       <div className="mt-10 grid auto-rows-[minmax(120px,_auto)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//         {educationData.map((edu, index) => (
//           <motion.div
//             key={index}
//             className={`group rounded-2xl p-4 shadow-xl backdrop-blur-2xl border border-white/30 transform-gpu transition-all duration-500 ease-in-out hover:scale-[1.05] hover:-rotate-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] ${
//               boxLayout[index % boxLayout.length]
//             }`}
//             style={{
//               background:
//                 theme === "light"
//                   ? "rgba(255, 255, 255, 0.1)"
//                   : "rgba(255, 255, 255, 0.05)",
//               minHeight: "140px",
//               transformStyle: "preserve-3d",
//               backdropFilter: "blur(20px)",
//               WebkitBackdropFilter: "blur(20px)",
//               border: "1px solid rgba(255,255,255,0.2)",
//             }}
//             initial={{ opacity: 0, y: 30, rotateX: 15 }}
//             whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//             whileHover={{ rotateY: 5, rotateX: -2 }}
//             transition={{ duration: 0.8, delay: index * 0.12 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-md md:text-lg font-bold text-neutral-900 dark:text-white">
//               {edu.degree}
//             </h3>
//             <p className="text-base font-semibold  bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent tracking-tight mt-1">
//               {edu.institution}
//             </p>
//             <p className="text-sm mt-1 text-gray-600 dark:text-white/50 p-2">
//               {edu.date}
//             </p>
//             <p className="mt-2 text-[13px] leading-relaxed text-gray-800 dark:text-white/80 tracking-wide">
//               {edu.description}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// }



"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { educationData } from "@/lib/data";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const { ref } = useSectionInView("Education", 0.3);

  return (
    <section
      id="education"
      ref={ref}
      className="relative z-10 w-full max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 mb-28 sm:mb-40 scroll-mt-28"
    >
      {/* Muted Stealth Background Glow */}
      <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-zinc-900/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

      {/* Header - Left Aligned to match the Experience section perfectly */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-8 border-b border-white/5 pb-12">
        <div className="max-w-4xl text-left">
          <div className="flex items-center justify-start gap-3 text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] mb-4">
            <span className="w-2 h-2 rounded-full bg-zinc-500 animate-pulse" /> ACADEMIC FOUNDATION
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans mb-6">
            Education & Credentials
          </h2>
          
          <p className="text-zinc-400 text-lg lg:text-xl font-light leading-relaxed">
            Formal academic training and specialized certifications establishing the theoretical 
            and practical baseline for distributed systems and AI architecture.
          </p>
        </div>
      </div>

      {/* The Academic Ledger */}
      <div className="flex flex-col border-t border-white/5 relative z-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col md:flex-row md:items-start justify-between py-8 sm:py-12 border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-500 px-4 sm:px-8 -mx-4 sm:-mx-8 rounded-[2rem]"
          >
            {/* Left Column: Date & Institution */}
            <div className="flex flex-col w-full md:w-1/3 mb-6 md:mb-0 pr-4">
              <span className="text-xs sm:text-sm font-mono text-zinc-500/80 mb-3 tracking-widest uppercase group-hover:text-zinc-400 transition-colors">
                {edu.date}
              </span>
              <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-zinc-300 transition-colors">
                {edu.institution}
              </h4>
            </div>

            {/* Right Column: Degree & Focus */}
            <div className="flex flex-col w-full md:w-2/3 md:pl-8">
              <div className="flex items-start gap-4 mb-5">
                <FaGraduationCap className="text-zinc-600 group-hover:text-zinc-400 transition-colors text-2xl mt-1 flex-shrink-0 drop-shadow-[0_0_10px_rgba(255,255,255,0.05)] group-hover:drop-shadow-[0_0_15px_rgba(161,161,170,0.4)]" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-200 group-hover:text-white transition-colors tracking-tight">
                  {edu.degree}
                </h3>
              </div>
              
              {/* Terminal-style Focus Box */}
              <div className="bg-black/50 border border-white/5 rounded-2xl p-6 ml-0 sm:ml-10 group-hover:border-white/10 transition-colors duration-300 shadow-inner">
                <p className="text-sm sm:text-base font-light text-gray-400 leading-relaxed">
                  <span className="text-zinc-500 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] mr-4 border-r border-white/10 pr-4">
                    FOCUS
                  </span>
                  {edu.focus}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}