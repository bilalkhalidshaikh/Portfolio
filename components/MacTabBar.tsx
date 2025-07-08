"use client";

import { motion } from "framer-motion";

export default function MacTabBar() {
  return (
    <motion.div
      className="absolute top-0 left-0 right-0 h-8 bg-white bg-opacity-20 dark:bg-gray-950 dark:bg-opacity-20 backdrop-blur-2xl rounded-t-lg flex items-center px-3"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div className="flex gap-2">
        <motion.div
          className="w-3 h-3 rounded-full bg-red-500"
          whileHover={{ scale: 1.3, rotate: 45 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => new Audio("/sounds/click.wav").play()}
        />
        <motion.div
          className="w-3 h-3 rounded-full bg-yellow-500"
          whileHover={{ scale: 1.3, rotate: 45 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => new Audio("/sounds/click.wav").play()}
        />
        <motion.div
          className="w-3 h-3 rounded-full bg-green-500"
          whileHover={{ scale: 1.3, rotate: 45 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => new Audio("/sounds/click.wav").play()}
        />
      </div>
      <style jsx>{`
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
