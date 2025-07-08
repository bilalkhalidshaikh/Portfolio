// "use client";

// import { useRef } from "react";
// import Image, { StaticImageData } from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { BiLinkExternal } from "react-icons/bi";
// import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
// import { Icon } from "@iconify/react";

// type ProjectProps = {
//   title: string;
//   description: string;
//   tags: readonly string[];
//   icons: readonly string[];
//   imageUrl: StaticImageData;
//   githubLink?: string;
//   demoLink?: string;
//   urlLink?: string;
// };

// export default function Project({
//   title,
//   description,
//   tags,
//   icons,
//   imageUrl,
//   githubLink,
//   demoLink,
//   urlLink,
// }: ProjectProps) {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["0 1", "1.33 1"],
//   });
//   const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{
//         scale: scaleProgess,
//         opacity: opacityProgess,
//       }}
//       className="group mb-3 sm:mb-8 last:mb-0"
//     >
//       <section className="bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
//         <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col h-full">
//           <h3 className="text-2xl font-semibold mb-4">{title}</h3>
//           <ul className="flex flex-wrap gap-2 mb-3 sm:mt-auto">
//             <p className="font-bold text-gray-500 dark:text-white/70">
//               Made with:{" "}
//             </p>
//             {icons.map((icon, iconIndex) => (
//               <Icon key={iconIndex} icon={icon} className="mr-3 text-2xl" />
//             ))}
//           </ul>
//           <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3">
//             {description}
//           </p>
//           <div className="flex">
//             {urlLink && (
//               <a
//                 href={urlLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-full hover:scale-105"
//               >
//                 <BiLinkExternal className="mr-1" /> Live
//               </a>
//             )}

//             {demoLink && (
//               <a
//                 href={demoLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-full hover:scale-105"
//               >
//                 <AiFillYoutube className="mr-1" /> Demo
//               </a>
//             )}

//             {githubLink && (
//               <a
//                 href={githubLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center border border-[#111827] py-2 px-4 rounded-full mr-2 text-[#111827] hover:scale-105 dark:border-white dark:text-white dark:border-opacity-40"
//               >
//                 <AiFillGithub className="mr-1 opacity-70" />{" "}
//                 <span className="opacity-70">GitHub</span>
//               </a>
//             )}
//           </div>
//         </div>

//         <Image
//           src={imageUrl}
//           alt="Project I worked on"
//           quality={95}
//           className="absolute hidden lg:block top-[60px] -right-10 w-[28.25rem] rounded-t-lg shadow-2xl scale-[1.0]
//           transition
//           lg:scale-[1.1]
//           "
//         />
//       </section>
//     </motion.div>
//   );
// }

// "use client";

// import { useRef } from "react";
// import Image, { StaticImageData } from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { BiLinkExternal } from "react-icons/bi";
// import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
// import { Icon } from "@iconify/react";
// import Tilt from "react-parallax-tilt";

// type ProjectProps = {
//   title: string;
//   description: string;
//   tags: readonly string[];
//   icons: readonly string[];
//   imageUrl: StaticImageData | string;
//   githubLink?: string;
//   demoLink?: string;
//   urlLink?: string;
// };

// export default function Project({
//   title,
//   description,
//   tags,
//   icons,
//   imageUrl,
//   githubLink,
//   demoLink,
//   urlLink,
// }: ProjectProps) {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["0 1", "1.33 1"],
//   });
//   const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

//   return (
//     <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable glareMaxOpacity={0.4}>
//       <motion.div
//         ref={ref}
//         style={{
//           scale: scaleProgress,
//           opacity: opacityProgress,
//         }}
//         className="group mb-3 sm:mb-8 last:mb-0 relative"
//         whileHover={{ scale: 1.03, boxShadow: "0 15px 40px rgba(99, 102, 241, 0.5)" }}
//         transition={{ duration: 0.3 }}
//       >
//         <section className="bg-gray-100 max-w-[58rem] rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 shadow-md hover:shadow-xl transition-all duration-300">
//           <div className="absolute inset-0 neon-border neon-active" />
//           <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col h-full">
//             <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
//               {title}
//             </h3>
//             <div className="mb-3">
//               <p className="font-bold text-gray-500 dark:text-white/70 mb-2">
//                 Made with:
//               </p>
//               <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
//                 {icons.map((icon, index) => (
//                   <motion.li
//                     key={index}
//                     className="flex items-center justify-center p-2 rounded-full bg-white bg-opacity-50 backdrop-blur-lg dark:bg-gray-950 dark:bg-opacity-50 transition-all duration-300"
//                     initial={{ y: 10, opacity: 0, rotate: -10 }}
//                     animate={{ y: 0, opacity: 1, rotate: 0 }}
//                     transition={{
//                       delay: index * 0.1,
//                       type: "spring",
//                       stiffness: 200,
//                       damping: 15,
//                     }}
//                     whileHover={{
//                       scale: 1.2,
//                       boxShadow: "0 4px 12px rgba(99, 102, 241, 0.4)",
//                       rotate: 5,
//                     }}
//                   >
//                     <Icon icon={icon} className="text-2xl" />
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//             <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3">
//               {description}
//             </p>
//             <div className="flex gap-2">
//               {urlLink && (
//                 <motion.a
//                   href={urlLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-full hover:bg-opacity-90 relative overflow-hidden"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <BiLinkExternal className="mr-1" /> Live
//                   <div className="absolute inset-0 spark-effect" />
//                 </motion.a>
//               )}
//               {demoLink && (
//                 <motion.a
//                   href={demoLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-full hover:bg-opacity-90 relative overflow-hidden"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <AiFillYoutube className="mr-1" /> Demo
//                   <div className="absolute inset-0 spark-effect" />
//                 </motion.a>
//               )}
//               {githubLink && (
//                 <motion.a
//                   href={githubLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-full hover:bg-opacity-90 relative overflow-hidden"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <AiFillGithub className="mr-1" /> GitHub
//                   <div className="absolute inset-0 spark-effect" />
//                 </motion.a>
//               )}
//             </div>
//           </div>
//           <Image
//             src={imageUrl}
//             alt={`Screenshot of ${title}`}
//             quality={95}
//             className="absolute hidden lg:block top-[60px] -right-10 w-[28.25rem] rounded-t-lg shadow-2xl scale-[1.0] transition group-hover:scale-[1.1] group-hover:rotate-3"
//           />
//         </section>
//       </motion.div>

// <style jsx>{`
//   @keyframes neonBorder {
//     0% {
//       border-color: #6366f1;
//       box-shadow: 0 0 5px #6366f1, 0 0 10px #6366f1;
//     }
//     50% {
//       border-color: #9333ea;
//       box-shadow: 0 0 10px #9333ea, 0 0 20px #9333ea;
//     }
//     100% {
//       border-color: #6366f1;
//       box-shadow: 0 0 5px #6366f1, 0 0 10px #6366f1;
//     }
//   }

//   @keyframes spark {
//     0% {
//       opacity: 0;
//       transform: scale(0);
//     }
//     50% {
//       opacity: 1;
//       transform: scale(1);
//     }
//     100% {
//       opacity: 0;
//       transform: scale(1.5);
//     }
//   }

//   .neon-border {
//     position: absolute;
//     inset: -2px;
//     border: 2px solid transparent;
//     border-radius: 12px;
//     pointer-events: none;
//   }

//   .neon-active {
//     animation: neonBorder 2s infinite;
//   }

//   .spark-effect {
//     position: absolute;
//     width: 10px;
//     height: 10px;
//     background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%);
//     border-radius: 50%;
//     pointer-events: none;
//     animation: spark 0.5s ease-out;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
// `}</style>
//     </Tilt>
//   );
// }

"use client";

import { useRef, useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { Icon } from "@iconify/react";
import Tilt from "react-parallax-tilt";
import FullScreenModal from "./FullScreenModal";
import MacTabBar from "./MacTabBar";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  icons: readonly string[];
  imageUrl: StaticImageData | string;
  githubLink?: string;
  demoLink?: string;
  urlLink?: string;
};

export default function Project({
  title,
  description,
  tags,
  icons,
  imageUrl,
  githubLink,
  demoLink,
  urlLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(true);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0].name);
      }
    };

    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      speechSynthesis.cancel();
    };
  }, []);

  const handleTextHover = (text: string) => {
    if (isSpeechEnabled && typeof window !== "undefined") {
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = voices.find((v) => v.name === selectedVoice);
      if (voice) {
        utterance.voice = voice;
      }
      utterance.lang = "en-US";
      utterance.volume = 0.8;
      utterance.rate = 1;
      speechSynthesis.speak(utterance);
    }
  };

  const toggleSpeech = () => {
    setIsSpeechEnabled(!isSpeechEnabled);
    speechSynthesis.cancel();
    try {
      new Audio("/sounds/click.wav").play();
    } catch (error) {
      console.warn("Audio playback failed:", error);
    }
  };

  const handleVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVoice(e.target.value);
    try {
      new Audio("/sounds/click.wav").play();
    } catch (error) {
      console.warn("Audio playback failed:", error);
    }
  };

  const handleImageClick = () => {
    if (urlLink) {
      window.open(urlLink, "_blank", "noopener,noreferrer");
      try {
        new Audio("/sounds/click.wav").play();
      } catch (error) {
        console.warn("Audio playback failed:", error);
      }
    }
  };

  return (
    <>
      <Tilt
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        glareEnable
        glareMaxOpacity={0.7}
      >
        <motion.div
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
          className="group mb-3 sm:mb-8 last:mb-0 relative"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 15px 40px rgba(255, 255, 255, 0.4)",
            y: -10,
          }}
          transition={{ duration: 0.4 }}
          onHoverStart={() => {
            try {
              new Audio("/sounds/hover.wav").play();
            } catch (error) {
              console.warn("Audio playback failed:", error);
            }
          }}
        >
          <section className="bg-white bg-opacity-10 dark:bg-gray-950 dark:bg-opacity-10 backdrop-blur-2xl max-w-[58rem] rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-opacity-20 shadow-md hover:shadow-xl transition-all duration-300 holographic">
            <MacTabBar />
            <div className="absolute inset-0 neon-border neon-active" />
            <div className="pt-12 pb-7 px-5 md:pl-10 md:pr-2 md:pt-16 lg:max-w-[50%] flex flex-col h-full">
              <motion.h3
                className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white"
                onMouseEnter={() => handleTextHover(title)}
                whileHover={{ scale: 1.05, color: "#00f0ff" }}
                transition={{ duration: 0.2 }}
              >
                {title}
              </motion.h3>
              <div className="mb-3">
                <p className="font-bold text-gray-500 dark:text-white/70 mb-2">
                  Made with:
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {icons.map((icon, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center justify-center p-2 rounded-full bg-white bg-opacity-20 dark:bg-gray-950 dark:bg-opacity-20 backdrop-blur-2xl transition-all duration-300"
                      initial={{ y: 20, opacity: 0, rotate: -30 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      transition={{
                        delay: index * 0.15,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      whileHover={{
                        scale: 1.4,
                        rotate: 720,
                        boxShadow: "0 4px 12px rgba(255, 255, 255, 0.4)",
                      }}
                    >
                      <Icon icon={icon} className="text-2xl" />
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.p
                className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3"
                onMouseEnter={() => handleTextHover(description)}
                whileHover={{ scale: 1.05, color: "#ff00ff" }}
                transition={{ duration: 0.2 }}
              >
                {description}
              </motion.p>
              <div className="flex gap-2 items-center flex-wrap">
                {urlLink && (
                  <motion.a
                    href={urlLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-white bg-opacity-20 dark:bg-gray-950 dark:bg-opacity-20 backdrop-blur-2xl text-gray-900 dark:text-white py-2 px-4 rounded-full hover:bg-opacity-30 relative overflow-hidden holographic"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      try {
                        new Audio("/sounds/click.wav").play();
                      } catch (error) {
                        console.warn("Audio playback failed:", error);
                      }
                    }}
                  >
                    <BiLinkExternal className="mr-1" /> Live
                    <div className="absolute inset-0 spark-effect" />
                  </motion.a>
                )}
                {demoLink && (
                  <motion.a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-white bg-opacity-20 dark:bg-gray-950 dark:bg-opacity-20 backdrop-blur-2xl text-gray-900 dark:text-white py-2 px-4 rounded-full hover:bg-opacity-30 relative overflow-hidden holographic"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      try {
                        new Audio("/sounds/click.wav").play();
                      } catch (error) {
                        console.warn("Audio playback failed:", error);
                      }
                    }}
                  >
                    <AiFillYoutube className="mr-1" /> Demo
                    <div className="absolute inset-0 spark-effect" />
                  </motion.a>
                )}
                {githubLink && (
                  <motion.a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-white bg-opacity-20 dark:bg-gray-950 dark:bg-opacity-20 backdrop-blur-2xl text-gray-900 dark:text-white py-2 px-4 rounded-full hover:bg-opacity-30 relative overflow-hidden holographic"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      try {
                        new Audio("/sounds/click.wav").play();
                      } catch (error) {
                        console.warn("Audio playback failed:", error);
                      }
                    }}
                  >
                    <AiFillGithub className="mr-1" /> GitHub
                    <div className="absolute inset-0 spark-effect" />
                  </motion.a>
                )}
                <motion.button
                  onClick={toggleSpeech}
                  className="p-2 rounded-full bg-white bg-opacity-20 dark:bg-gray-950 dark:bg-opacity-20 backdrop-blur-2xl text-gray-900 dark:text-white hover:bg-opacity-30"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isSpeechEnabled ? "🔊" : "🔇"}
                </motion.button>
                <motion.select
                  value={selectedVoice}
                  onChange={handleVoiceChange}
                  className="bg-white bg-opacity-20 dark:bg-gray-950 dark:bg-opacity-20 backdrop-blur-2xl text-gray-900 dark:text-white py-1 px-2 rounded-full hover:bg-opacity-30"
                  whileHover={{ scale: 1.1 }}
                >
                  {voices.map((voice) => (
                    <option key={voice.name} value={voice.name}>
                      {voice.name}
                    </option>
                  ))}
                </motion.select>
              </div>
            </div>
            <div className="absolute hidden lg:block top-[60px] -right-10 w-[28.25rem] group">
              <Image
                src={imageUrl}
                alt={`Screenshot of ${title}`}
                quality={95}
                className="rounded-t-lg shadow-2xl scale-[1.0] transition group-hover:scale-[1.15] group-hover:rotate-6 cursor-pointer"
                onClick={handleImageClick}
              />
              <motion.button
                className="absolute top-2 right-2 bg-white bg-opacity-20 dark:bg-gray-950 dark:bg-opacity-20 backdrop-blur-2xl text-gray-900 dark:text-white py-1 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity holographic"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 0 }}
                whileHover={{ scale: 1.15, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setIsModalOpen(true);
                  try {
                    new Audio("/sounds/click.wav").play();
                  } catch (error) {
                    console.warn("Audio playback failed:", error);
                  }
                }}
                onHoverStart={() => {
                  try {
                    new Audio("/sounds/hover.wav").play();
                  } catch (error) {
                    console.warn("Audio playback failed:", error);
                  }
                }}
              >
                Full Screen
              </motion.button>
            </div>
          </section>
        </motion.div>
      </Tilt>
      {isModalOpen && (
        <FullScreenModal
          imageUrl={imageUrl}
          title={title}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <style jsx>{`
        @keyframes neonBorder {
          0% {
            border-color: #00f0ff;
            box-shadow: 0 0 5px #00f0ff, 0 0 10px #00f0ff;
          }
          33% {
            border-color: #ff00ff;
            box-shadow: 0 0 10px #ff00ff, 0 0 15px #ff00ff;
          }
          66% {
            border-color: #ffffff;
            box-shadow: 0 0 10px #ffffff, 0 0 15px #ffffff;
          }
          100% {
            border-color: #00f0ff;
            box-shadow: 0 0 5px #00f0ff, 0 0 10px #00f0ff;
          }
        }

        @keyframes spark {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.5);
          }
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

        .spark-effect {
          position: absolute;
          width: 10px;
          height: 10px;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0) 70%
          );
          border-radius: 50%;
          pointer-events: none;
          animation: spark 0.5s ease-out;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
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
    </>
  );
}
