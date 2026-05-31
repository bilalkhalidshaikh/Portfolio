// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { links } from "@/lib/data";
// import Link from "next/link";
// import clsx from "clsx";
// import { useActiveSectionContext } from "@/context/active-section-context";

// export default function Header() {
//   const { activeSection, setActiveSection, setTimeOfLastClick } =
//     useActiveSectionContext();

//   return (
//     <header className="z-[999] relative">
//       <motion.div
//         className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
//         initial={{ y: -100, x: "-50%", opacity: 0 }}
//         animate={{ y: 0, x: "-50%", opacity: 1 }}
//       ></motion.div>

//       <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
//         <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
//           {links.map((link) => (
//             <motion.li
//               className="h-3/4 flex items-center justify-center relative"
//               key={link.hash}
//               initial={{ y: -100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//             >
//               <Link
//                 className={clsx(
//                   "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-300",
//                   {
//                     "text-gray-950 dark:text-white":
//                       activeSection === link.name,
//                   }
//                 )}
//                 href={link.hash}
//                 onClick={() => {
//                   setActiveSection(link.name);
//                   setTimeOfLastClick(Date.now());
//                 }}
//               >
//                 {link.name}

//                 {link.name === activeSection && (
//                   <motion.span
//                     className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
//                     layoutId="activeSection"
//                     transition={{
//                       type: "spring",
//                       stiffness: 380,
//                       damping: 30,
//                     }}
//                   ></motion.span>
//                 )}
//               </Link>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

// ==========================================
// ELITE VOCABULARY MAPPING
// ==========================================
const navLabels: Record<string, string> = {
  Home: "Core",
  Projects: "Infrastructure",
  Experience: "Operations",
  Skills: "Arsenal",
  Education: "Credentials",
  Contact: "Engage",
};

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative flex justify-center">
      <motion.nav
        // 1. Merged background and nav container for flawless fluid scaling.
        // 2. Mobile gets a floating w-[95%] rounded-3xl pill that scales its height automatically.
        // 3. Stealth V2 aesthetics applied globally.
        className="fixed top-4 sm:top-6 w-[95%] sm:w-[52rem] h-auto rounded-3xl sm:rounded-full border border-white/10 bg-[#050505]/80 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl py-2 px-2 sm:px-6 flex items-center justify-center transition-all duration-300"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* Dynamic wrapping logic: wraps tightly on mobile, flat row on desktop */}
        <ul className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-x-1 gap-y-1 sm:gap-2 text-[11px] sm:text-[13px] font-semibold text-zinc-400 w-full">
          {links.map((link) => (
            <motion.li
              className="relative flex items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  // Scaled hitboxes for mobile (px-3 py-2) vs desktop (px-5 py-2.5)
                  "flex items-center justify-center px-3 py-2 sm:px-5 sm:py-2.5 rounded-full hover:text-white transition-colors duration-300 whitespace-nowrap",
                  {
                    // Active text must turn black to contrast against the white pill
                    "text-black": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {/* z-10 ensures text sits above the animated background pill */}
                <span className="relative z-10 tracking-wide">
                  {navLabels[link.name] || link.name}
                </span>

                {/* The iOS segmented active state pill */}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-white rounded-full absolute inset-0 z-0 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}