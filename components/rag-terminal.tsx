"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsTerminalFill, BsX, BsArrowUp, BsCpu } from "react-icons/bs";

type Message = {
  id: string;
  role: "system" | "user" | "ai";
  content: string;
};

export default function RagTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Placeholder conversation state
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "system",
      content: "System initialized. Knowledge graph loaded.",
    },
    {
      id: "2",
      role: "ai",
      content: "I am Bilal's architectural neural twin. I have full context on his deployments, stack, and availability. Query the infrastructure.",
    },
  ]);

  const toggleTerminal = () => setIsOpen(!isOpen);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newMsg: Message = { id: Date.now().toString(), role: "user", content: inputValue };
    setMessages((prev) => [...prev, newMsg]);
    setInputValue("");

    // Simulate AI response (Replace this with your actual RAG backend later)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "ai",
          content: "The RAG pipeline is currently in stealth staging. Live queries will be unlocked in the upcoming deployment. Please utilize the standard transmission protocols in the Engage section.",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      
      {/* The Expanding iOS Glass Terminal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-6 w-[calc(100vw-3rem)] sm:w-[400px] h-[500px] max-h-[75vh] flex flex-col bg-[#050505]/80 backdrop-blur-3xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] rounded-[2rem] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white text-black">
                  <BsCpu className="text-lg" />
                  <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#050505] rounded-full animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-bold tracking-wide">Context Engine</span>
                  <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">v2.4.1_stable</span>
                </div>
              </div>
              <button 
                onClick={toggleTerminal}
                className="text-zinc-500 hover:text-white transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full"
              >
                <BsX className="text-xl" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                >
                  {msg.role === "system" && (
                    <div className="w-full text-center mb-2">
                      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">{msg.content}</span>
                    </div>
                  )}
                  
                  {msg.role === "ai" && (
                    <div className="max-w-[85%] bg-white/5 border border-white/10 text-zinc-300 text-sm leading-relaxed px-5 py-4 rounded-2xl rounded-tl-sm shadow-sm">
                      {msg.content}
                    </div>
                  )}

                  {msg.role === "user" && (
                    <div className="max-w-[85%] bg-white text-black text-sm font-medium leading-relaxed px-5 py-4 rounded-2xl rounded-tr-sm shadow-md">
                      {msg.content}
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/[0.02] border-t border-white/5">
              <form 
                onSubmit={handleSend}
                className="relative flex items-center bg-black border border-white/10 rounded-full overflow-hidden focus-within:border-zinc-500 transition-colors"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Query the architecture..."
                  className="w-full bg-transparent text-white text-sm px-6 py-4 outline-none placeholder:text-zinc-600 font-light"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-2 flex items-center justify-center w-10 h-10 bg-white text-black rounded-full hover:bg-zinc-300 disabled:opacity-50 disabled:hover:bg-white transition-colors"
                >
                  <BsArrowUp className="text-lg font-bold" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Trigger Button */}
      <motion.button
        onClick={toggleTerminal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] border transition-all duration-500 ${
          isOpen 
            ? "bg-white text-black border-transparent" 
            : "bg-[#050505]/80 backdrop-blur-xl border-white/10 text-white hover:border-white/30"
        }`}
      >
        {isOpen ? <BsX className="text-2xl" /> : <BsTerminalFill className="text-xl" />}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 border-2 border-[#050505]"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
}