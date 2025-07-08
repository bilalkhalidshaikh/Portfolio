"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { links } from "@/lib/data";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { TbCube3dSphere } from "react-icons/tb";
import { MdCopyright } from "react-icons/md";
import { AnimatePresence } from "framer-motion";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const [footerOpen, setFooterOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const socialIcons = [
    {
      href: "https://github.com/bilalkhalidshaikh/",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/bilalkhalidshaikh/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com/bilalkhalid29/",
      icon: <SiX />,
      label: "X",
    },
    {
      href: "mailto:bilalkhalid.dev@outlook.com",
      icon: <FaEnvelope />,
      label: "Email",
    },
    {
      href: "https://bilalkhalidshaikh.vercel.app/",
      icon: <FaGlobe />,
      label: "Website",
    },
  ];

  return (
    <footer ref={ref} className="relative z-[999] mt-32">
      {/* Floating Button Bottom Left */}
      <div className="fixed top-1/2 right-4 -translate-y-1/2 z-[9999] sm:right-6">
        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.2, rotate: 10 }}
          className=" text-black dark:text-white p-4 rounded-full shadow-2xl transition-all hover:bg-neutral-800 dark:hover:bg-neutral-200 dark:hover:text-black hover:text-white"
        >
          <TbCube3dSphere className="text-3xl" />
        </motion.button>

        {/* Expanding Panel */}
        <motion.div
          initial={false}
          animate={{
            opacity: open ? 1 : 0,
            width: open ? "320px" : "0px",
            height: open ? "auto" : "0px",
          }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
          className="overflow-hidden mt-4 rounded-2xl shadow-2xl bg-white/10 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 dark:border-gray-700 p-6 space-y-6 text-white max-w-[90vw]"
        >
          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase font-semibold text-black dark:text-white">
              Navigation
            </p>
            {links.map((link, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="relative z-10"
              >
                <Link
                  href={link.hash}
                  className="text-sm text-black dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 transition relative px-3 py-2 rounded-full backdrop-blur-md bg-white/5 hover:bg-white/10"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg text-black dark:text-white">
            {socialIcons.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="hover:text-neutral-700 dark:hover:text-neutral-300 transition"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* Newsletter Form */}
          {/* <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed!");
            }}
            className="flex flex-col gap-2"
          >
            <input
              type="email"
              placeholder="you@example.com"
              className="bg-transparent border border-white/30 px-3 py-2 rounded-md text-sm text-black dark:text-white placeholder-black/60 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition"
            >
              Subscribe
            </button>
          </form> */}
          {/* Newsletter Form */}
          <form
            onSubmit={(e: any) => {
              e.preventDefault();
              const email = e.target?.email.value;
              if (email) {
                setSubscribed(true);
                setTimeout(() => setSubscribed(false), 6000); // auto close modal after 6s
                // Send email to FormSubmit
                fetch(
                  "https://formsubmit.co/ajax/bilalkhalid.dev@outlook.com",
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                  }
                );
                e.target?.reset();
              }
            }}
            className="flex flex-col gap-2"
          >
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="bg-transparent border border-white/30 px-3 py-2 rounded-md text-sm text-black dark:text-white placeholder-black/60 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
      {/* Footer Bar */}
      <motion.div
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        onHoverStart={() => setFooterOpen(true)}
        onHoverEnd={() => setFooterOpen(false)}
        className={`fixed bottom-4 left-4 z-[999] backdrop-blur-xl border border-white/10 dark:border-black/30 bg-white/10 dark:bg-gray-900/30 shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out rounded-2xl overflow-hidden ${
          footerOpen
            ? "px-4 py-4 w-auto max-w-full"
            : "px-3 py-3 w-[50px] h-[50px]"
        }`}
      >
        {footerOpen ? (
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <p className="text-sm text-black dark:text-white text-center lg:text-left whitespace-nowrap">
              <span className="inline-flex items-center gap-1">
                <MdCopyright className="text-lg" />
                {new Date().getFullYear()} — Built by Bilal. All rights
                reserved.
              </span>
            </p>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-xl">
              {socialIcons.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="transition"
                  style={{
                    color:
                      item.label === "GitHub"
                        ? "#333"
                        : item.label === "LinkedIn"
                        ? "#0077B5"
                        : item.label === "X"
                        ? "#000000"
                        : item.label === "Email"
                        ? "#EA4335"
                        : item.label === "Website"
                        ? "#4CAF50"
                        : "inherit",
                  }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            <MdCopyright className="text-2xl text-black dark:text-white" />
          </motion.div>
        )}
      </motion.div>

      {/* Glowing underline */}
      <motion.div
        className="absolute bottom-0 left-4 w-[60px] h-[4px] rounded-full bg-black dark:bg-white blur-2xl opacity-20"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      {/* Confirmation Modal */}
      {subscribed && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed bottom-6 right-6 z-[99999] w-[320px] max-w-[90vw] backdrop-blur-xl bg-white/10 dark:bg-black/30 border border-white/20 dark:border-white/10 shadow-xl rounded-2xl px-6 py-4 flex items-center gap-4 text-white"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-inner">
              <span className="text-2xl font-bold">✅</span>
            </div>
            <div className="text-sm">
              <p className="font-semibold">You're in!</p>
              <p className="text-white/80">
                Subscribed to <strong>Bilal's AI Dispatches</strong>{" "}
                successfully.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </footer>
  );
}
