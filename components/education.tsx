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



"use client";

import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { useTheme } from "@/context/theme-context";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

const boxLayout = [
  "col-span-1 row-span-1",
  "lg:col-span-2 row-span-1",
  "lg:row-span-2 col-span-1",
  "lg:col-span-2 lg:row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1"
];

export default function Education() {
  const { ref } = useSectionInView("Education");
  const { theme } = useTheme();

  return (
    <motion.section
      id="education"
      ref={ref}
      className="relative z-10 scroll-mt-28 mb-28 sm:mb-40 px-4 md:px-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* 3D Sparkle Background */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <Sparkles
            count={140}
            scale={[20, 20, 20]}
            size={2.5}
            speed={0.3}
            color={theme === "light" ? "#ffffff" : "#ffffff"}
          />
        </Canvas>
      </div>

      <SectionHeading>My Education</SectionHeading>

      <div className="mt-10 grid auto-rows-[minmax(120px,_auto)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={`group rounded-2xl p-4 shadow-xl backdrop-blur-2xl border border-white/30 transform-gpu transition-all duration-500 ease-in-out hover:scale-[1.05] hover:-rotate-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] ${
              boxLayout[index % boxLayout.length]
            }`}
            style={{
              background:
                theme === "light"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(255, 255, 255, 0.05)",
              minHeight: "140px",
              transformStyle: "preserve-3d",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
            initial={{ opacity: 0, y: 30, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{ rotateY: 5, rotateX: -2 }}
            transition={{ duration: 0.8, delay: index * 0.12 }}
            viewport={{ once: true }}
          >
            <h3 className="text-md md:text-lg font-bold text-neutral-900 dark:text-white">
              {edu.degree}
            </h3>
            <p className="text-base font-semibold  bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent tracking-tight mt-1">
              {edu.institution}
            </p>
            <p className="text-sm mt-1 text-gray-600 dark:text-white/50 p-2">
              {edu.date}
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-gray-800 dark:text-white/80 tracking-wide">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
