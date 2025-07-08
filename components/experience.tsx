"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
const VerticalTimeline = require("react-vertical-timeline-component")
  .VerticalTimeline as any;
const VerticalTimelineElement = require("react-vertical-timeline-component")
  .VerticalTimelineElement as any;

import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 relative z-10"
    >
      {/* 3D Background Sparkles */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <Sparkles
            count={100}
            scale={[20, 20, 20]}
            size={3}
            speed={0.5}
            color={theme === "light" ? "#0ea5e9" : "#38bdf8"}
          />
        </Canvas>
      </div>

      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline lineColor="transparent">
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background:
                theme === "light"
                  ? "rgba(255, 255, 255, 0.6)"
                  : "rgba(30, 41, 59, 0.4)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "20px",
              padding: "1.75rem 2rem",
              transition: "transform 0.3s ease",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid rgba(0, 0, 0, 0.2)"
                  : "0.4rem solid rgba(255, 255, 255, 0.2)",
            }}
            icon={item.icon}
            iconStyle={{
              background: theme === "light" ? "#f8fafc" : "#0f172a",
              color: theme === "light" ? "#0f172a" : "#f8fafc",
              fontSize: "1.5rem",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              transition: "all 0.3s ease",
              transform: "scale(1.1)",
              boxShadow: "0 0 12px rgba(56, 189, 248, 0.5)",
            }}
            date={
              <span className="text-sm font-bold text-neutral-900 dark:text-white tracking-wide uppercase" style={{fontWeight:"bolder"}}>
                {item.date}
              </span>
            }
          >
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
              {item.title}
            </h3>
            <p className=" text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent tracking-tight mt-1">
              {item.location}
            </p>
            <p className="mt-2 text-gray-700 dark:text-white/80 leading-relaxed">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
