
"use client";

import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Icon } from "@iconify/react";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 40, scale: 0.9 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.04 * index,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <h2
      className={`text-4xl font-bold mb-10 ${
        theme === "dark" ? "text-white" : "text-gray-900"
      }`}
    >
      {children}
    </h2>
  );
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      ref={ref}
      className="relative z-10 mb-28 max-w-7xl px-6 mx-auto text-center sm:mb-40 scroll-mt-28"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-blob absolute top-[-10%] left-[10%] w-[300px] h-[300px] bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="animate-blob animation-delay-2000 absolute top-[40%] right-[0%] w-[300px] h-[300px] bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="animate-blob animation-delay-4000 absolute top-[20%] left-[40%] w-[300px] h-[300px] bg-cyan-500 opacity-20 rounded-full blur-3xl"></div>
      </div>

      <SectionHeading>My Skills</SectionHeading>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="w-full"
          >
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.05}
                transitionSpeed={300}
                glareEnable
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
                className="glass-card"
              >
                <Icon
                  icon={skill.icon}
                  className={`text-4xl md:text-5xl ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  } animate-heartbeat`}
                />
                <span
                  className={`mt-3 text-sm font-medium tracking-wide ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {skill.name}
                </span>
              </Tilt>
            </a>
          </motion.div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .animate-heartbeat {
          animation: heartbeat 1.5s infinite;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        .glass-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(147, 51, 234, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }

        html.dark .glass-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .animate-blob {
          animation: blob 20s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.9);
          }
        }
      `}</style>
    </section>
  );
}
