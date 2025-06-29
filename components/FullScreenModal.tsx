"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type FullScreenModalProps = {
  imageUrl: StaticImageData | string;
  title: string;
  onClose: () => void;
};

export default function FullScreenModal({
  imageUrl,
  title,
  onClose,
}: FullScreenModalProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-4xl w-full h-auto"
        initial={{ scale: 0.7, rotate: -15 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={imageUrl}
          alt={`Full-screen view of ${title}`}
          quality={100}
          className="w-full h-auto rounded-lg shadow-2xl neon-border neon-active"
        />
        <motion.button
          className="absolute top-4 right-4 bg-white bg-opacity-20 dark:bg-gray-950 dark:bg-opacity-20 backdrop-blur-2xl text-gray-900 dark:text-white p-2 rounded-full hover:bg-opacity-30 holographic"
          whileHover={{ scale: 1.2, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            onClose();
            new Audio("/sounds/click.mp3").play();
          }}
        >
          ✕
        </motion.button>
      </motion.div>
      <style jsx>{`
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

        .neon-border {
          border: 2px solid transparent;
          border-radius: 12px;
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
    </motion.div>
  );
}