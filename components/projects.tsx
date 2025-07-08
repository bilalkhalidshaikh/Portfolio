"use client";

import React, { useState, useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData, ProjectData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

const categories = [
  { name: "E-commerce", key: "ecommerce" },
  { name: "Landing Pages", key: "landingPages" },
  { name: "Dashboards", key: "dashboards" },
  { name: "Portfolios", key: "portfolios" },
  { name: "Web Apps", key: "webApps" },
  { name: "Blogs", key: "blogs" },
] as const;

type CategoryKey = (typeof categories)[number]["key"] | "all";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);
  const [activeCategory, setActiveCategory] =
    useState<CategoryKey>("ecommerce");
  const [lastCategory, setLastCategory] = useState<CategoryKey>("ecommerce");
  const [isAllExpanded, setIsAllExpanded] = useState(false);
  const categorySound = useRef<HTMLAudioElement | null>(null);

  const handleCategoryChange = (categoryKey: CategoryKey) => {
    if (categoryKey === "all") {
      setIsAllExpanded(true);
    } else {
      setLastCategory(categoryKey);
      setIsAllExpanded(false);
    }
    setActiveCategory(categoryKey);
    try {
      new Audio("/sounds/click.wav").play();
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
      new Audio("/sounds/click.wav").play();
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
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-blob absolute top-[-10%] left-[10%] w-[300px] h-[300px] bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="animate-blob animation-delay-2000 absolute top-[40%] right-[0%] w-[300px] h-[300px] bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="animate-blob animation-delay-4000 absolute top-[20%] left-[40%] w-[300px] h-[300px] bg-cyan-500 opacity-20 rounded-full blur-3xl"></div>
      </div>
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
                  onMouseEnter={() => {
                    const audio = new Audio("/sounds/click.wav");
                    audio.play();
                    categorySound.current = audio;
                  }}
                  onMouseLeave={() => {
                    if (categorySound.current) {
                      categorySound.current.pause();
                      categorySound.current.currentTime = 0;
                    }
                  }}
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
              // <motion.div
              //   key={project.title}
              //   initial={{ opacity: 0, rotateY: -90 }}
              //   animate={{ opacity: 1, rotateY: 0 }}
              //   whileHover={{
              //     filter: "blur(0px)",
              //     backdropFilter: "blur(18px)",
              //     boxShadow: "0 10px 40px rgba(255,255,255,0.2)",
              //   }}
              //   transition={{
              //     delay: index * 0.1,
              //     duration: 0.6,
              //     type: "spring",
              //   }}
              //   className="transition-all duration-300 hover:bg-white/10 hover:dark:bg-white/5 rounded-2xl hover:shadow-2xl"
              // >
              <motion.div
                key={project.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  type: "spring",
                }}
                className="transition-all duration-300 bg-white/5 dark:bg-white/5 rounded-2xl shadow-md hover:shadow-xl project-hover-glass"
              >
                <Project {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center mt-12">
          <Tilt
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            glareEnable
            glareMaxOpacity={0.7}
          >
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

        // .holographic:hover::before {
        //   left: 100%;
        // }
        .project-hover-glass {
          transition: all 0.3s ease-in-out;
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
}
