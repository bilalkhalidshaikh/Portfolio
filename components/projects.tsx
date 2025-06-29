// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import { projectsData } from "@/lib/data";
// import Project from "./project";
// import { useSectionInView } from "@/lib/hooks";

// export default function Projects() {
//   const { ref } = useSectionInView("Projects", 0.10);

//   return (
//     <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
//       <SectionHeading>My projects</SectionHeading>
//       <div>
//         {projectsData.map((project, index) => (
//           <React.Fragment key={index}>
//             <Project {...project} />
//           </React.Fragment>
//         ))}
//       </div> 
//     </section>
//   );
// }















// "use client";

// import React, { useState } from "react";
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

// type CategoryKey = typeof categories[number]["key"] | "all";

// export default function Projects() {
//   const { ref } = useSectionInView("Projects", 0.10);
//   const [activeCategory, setActiveCategory] = useState<CategoryKey>("ecommerce");
//   const [lastCategory, setLastCategory] = useState<CategoryKey>("ecommerce");
//   const [isAllExpanded, setIsAllExpanded] = useState(false);

//   const handleCategoryChange = (categoryKey: CategoryKey) => {
//     if (categoryKey === "all") {
//       setIsAllExpanded(true);
//     } else {
//       setLastCategory(categoryKey);
//       setIsAllExpanded(false);
//     }
//     setActiveCategory(categoryKey);
//   };

//   const toggleAll = () => {
//     if (isAllExpanded) {
//       setActiveCategory(lastCategory);
//       setIsAllExpanded(false);
//     } else {
//       setActiveCategory("all");
//       setIsAllExpanded(true);
//     }
//   };

//   // Combine all projects for "See All" tab
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
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <SectionHeading>My Projects</SectionHeading>
//         <div className="flex justify-center mb-12">
//           <div className="grid grid-cols-3 gap-4 max-w-3xl">
//             {categories.map((category, index) => (
//               <Tilt
//                 key={category.key}
//                 tiltMaxAngleX={10}
//                 tiltMaxAngleY={10}
//                 glareEnable
//                 glareMaxOpacity={0.3}
//                 glareColor="#ffffff"
//                 className="relative"
//               >
//                 <motion.button
//                   onClick={() => handleCategoryChange(category.key)}
//                   className={`px-6 py-3 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 bg-opacity-70 backdrop-blur-lg shadow-xl transition-all duration-300 ${
//                     activeCategory === category.key
//                       ? "neon-glow scale-105"
//                       : "hover:bg-opacity-90 hover:scale-105"
//                   }`}
//                   initial={{ opacity: 0, y: 50, rotateX: -30 }}
//                   animate={{ opacity: 1, y: 0, rotateX: 0 }}
//                   transition={{
//                     delay: index * 0.1,
//                     type: "spring",
//                     stiffness: 200,
//                     damping: 20,
//                   }}
//                   whileHover={{
//                     scale: 1.1,
//                     rotate: 3,
//                     boxShadow: "0 8px 24px rgba(99, 102, 241, 0.6)",
//                   }}
//                   whileTap={{ scale: 0.95, rotate: -3 }}
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
//             transition={{ duration: 0.5 }}
//             className="grid gap-8"
//           >
//             {displayedProjects.map((project, index) => (
//               <motion.div
//                 key={project.title}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1, duration: 0.4 }}
//               >
//                 <Project {...project} />
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//         <div className="flex justify-center mt-12">
//           <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable glareMaxOpacity={0.4}>
//             <motion.button
//               onClick={toggleAll}
//               className="px-8 py-4 rounded-xl text-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 bg-opacity-70 backdrop-blur-lg shadow-2xl hover:bg-opacity-90 transition-all duration-300 relative overflow-hidden"
//               animate={{ rotateY: isAllExpanded ? 180 : 0 }}
//               transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
//               whileHover={{
//                 scale: 1.15,
//                 boxShadow: "0 10px 30px rgba(99, 102, 241, 0.7)",
//               }}
//               whileTap={{ scale: 0.95 }}
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
//             box-shadow: 0 0 5px #6366f1, 0 0 10px #6366f1, 0 0 15px #9333ea,
//               0 0 20px #9333ea;
//           }
//           50% {
//             box-shadow: 0 0 10px #6366f1, 0 0 20px #6366f1, 0 0 30px #9333ea,
//               0 0 40px #9333ea;
//           }
//           100% {
//             box-shadow: 0 0 5px #6366f1, 0 0 10px #6366f1, 0 0 15px #9333ea,
//               0 0 20px #9333ea;
//           }
//         }

//         @keyframes neonBorder {
//           0% {
//             border-color: #6366f1;
//             box-shadow: 0 0 5px #6366f1;
//           }
//           50% {
//             border-color: #9333ea;
//             box-shadow: 0 0 10px #9333ea;
//           }
//           100% {
//             border-color: #6366f1;
//             box-shadow: 0 0 5px #6366f1;
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
//           animation: neonBorder 2s infinite;
//         }
//       `}</style>
//     </section>
//   );
// }
















"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData, ProjectData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
// import ThreeBackground from "./ThreeBackground";

const categories = [
  { name: "E-commerce", key: "ecommerce" },
  { name: "Landing Pages", key: "landingPages" },
  { name: "Dashboards", key: "dashboards" },
  { name: "Portfolios", key: "portfolios" },
  { name: "Web Apps", key: "webApps" },
  { name: "Blogs", key: "blogs" },
] as const;

type CategoryKey = typeof categories[number]["key"] | "all";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.10);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("ecommerce");
  const [lastCategory, setLastCategory] = useState<CategoryKey>("ecommerce");
  const [isAllExpanded, setIsAllExpanded] = useState(false);

  const handleCategoryChange = (categoryKey: CategoryKey) => {
    if (categoryKey === "all") {
      setIsAllExpanded(true);
    } else {
      setLastCategory(categoryKey);
      setIsAllExpanded(false);
    }
    setActiveCategory(categoryKey);
    try {
      new Audio("/sounds/click.mp3").play();
    } catch (error) {
      console.warn("Audio playback failed:", error);
    }
  };

  const toggleAll = () => {
    if (isAllExpanded) {
      setActiveCategory(lastCategory);
      setIsAllExpanded(false);
    } else {
      setActiveCategory("all");
      setIsAllExpanded(true);
    }
    try {
      new Audio("/sounds/click.mp3").play();
    } catch (error) {
      console.warn("Audio playback failed:", error);
    }
  };

  const allProjects: ProjectData[] = Object.values(projectsData)
    .flat()
    .filter(
      (project, index, self) =>
        index === self.findIndex((p) => p.title === project.title)
    );

  const displayedProjects: ProjectData[] =
    activeCategory === "all"
      ? allProjects
      : projectsData[activeCategory].slice(0, 5) || [];

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* <ThreeBackground /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading>My Projects</SectionHeading>
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-3 gap-4 max-w-3xl">
            {categories.map((category, index) => (
              <Tilt
                key={category.key}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                glareEnable
                glareMaxOpacity={0.6}
                className="relative"
              >
                <motion.button
                  onClick={() => handleCategoryChange(category.key)}
                  className={`px-6 py-3 rounded-xl text-lg font-bold text-gray-900 dark:text-white bg-white bg-opacity-20 dark:bg-gray-950 dark:bg-opacity-20 backdrop-blur-2xl shadow-xl transition-all duration-300 holographic ${
                    activeCategory === category.key
                      ? "scale-105 neon-glow"
                      : "hover:scale-105"
                  }`}
                  initial={{ opacity: 0, y: 50, rotateX: -60 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    boxShadow: "0 8px 24px rgba(255, 255, 255, 0.4)",
                    zIndex: 10,
                  }}
                  whileTap={{ scale: 0.9, rotate: -10 }}
                >
                  {category.name}
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <div
                      className={`neon-border ${
                        activeCategory === category.key ? "neon-active" : ""
                      }`}
                    />
                  </div>
                </motion.button>
              </Tilt>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="grid gap-8"
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8, rotateY: -120 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
              >
                <Project {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center mt-12">
          <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} glareEnable glareMaxOpacity={0.7}>
            <motion.button
              onClick={toggleAll}
              className="px-8 py-4 rounded-xl text-xl font-bold text-gray-900 dark:text-white bg-white bg-opacity-20 dark:bg-gray-950 dark:bg-opacity-20 backdrop-blur-2xl shadow-2xl hover:bg-opacity-30 transition-all duration-300 holographic relative overflow-hidden"
              animate={{ rotateY: isAllExpanded ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              whileHover={{
                scale: 1.25,
                boxShadow: "0 10px 30px rgba(255, 255, 255, 0.5)",
                rotate: 15,
                zIndex: 10,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="flex items-center justify-center gap-2"
                initial={{ opacity: 1 }}
                animate={{ opacity: isAllExpanded ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              >
                See All Projects
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.span>
              <motion.span
                className="absolute inset-0 flex items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: isAllExpanded ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                Collapse
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.span>
              <div className="absolute inset-0 neon-border neon-active" />
            </motion.button>
          </Tilt>
        </div>
      </div>
      <style jsx>{`
        @keyframes neonPulse {
          0% {
            box-shadow: 0 0 5px #00f0ff, 0 0 10px #ff00ff, 0 0 15px #ffffff;
          }
          50% {
            box-shadow: 0 0 10px #00f0ff, 0 0 20px #ff00ff, 0 0 30px #ffffff;
          }
          100% {
            box-shadow: 0 0 5px #00f0ff, 0 0 10px #ff00ff, 0 0 15px #ffffff;
          }
        }

        @keyframes neonBorder {
          0% {
            border-color: #00f0ff;
            box-shadow: 0 0 5px #00f0ff;
          }
          33% {
            border-color: #ff00ff;
            box-shadow: 0 0 10px #ff00ff;
          }
          66% {
            border-color: #ffffff;
            box-shadow: 0 0 10px #ffffff;
          }
          100% {
            border-color: #00f0ff;
            box-shadow: 0 0 5px #00f0ff;
          }
        }

        .neon-glow {
          animation: neonPulse 1.5s infinite;
        }

        .neon-border {
          position: absolute;
          inset: -2px;
          border: 2px solid transparent;
          border-radius: 12px;
          pointer-events: none;
        }

        .neon-active {
          animation: neonBorder 3s infinite;
        }

        .holographic {
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.3)
          );
          position: relative;
        }

        .holographic::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: 0.5s;
        }

        .holographic:hover::before {
          left: 100%;
        }
      `}</style>
    </section>
  );
}