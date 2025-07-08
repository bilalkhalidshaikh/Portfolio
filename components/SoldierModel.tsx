"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Html } from "@react-three/drei";
import * as THREE from "three";

export default function BilalVoiceOrb() {
  const recognitionRef = useRef<any>(null);
  const [listening, setListening] = useState(false);
  const [responseText, setResponseText] = useState("");

  const speak = (text: string) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1.1;
    utterance.rate = 0.95;
    utterance.lang = "en-US";
    synth.cancel();
    synth.speak(utterance);
  };

  const handleUserQuery = async (query: string) => {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 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",
        },
        body: JSON.stringify({
              model: "mistral-7b-instruct", // ✅ Use correct name
          messages: [
            {
              role: "system",
              content: "You are a helpful AI assistant that responds clearly and creatively.",
            },
            { role: "user", content: query },
          ],
        }),
      });

      const data = await response.json();
      const text = data.choices?.[0]?.message?.content || "Something went wrong.";
      setResponseText(text);
      speak(text);
    } catch (err) {
      console.error(err);
      const fallback = "Assistant is offline.";
      setResponseText(fallback);
      speak(fallback);
    }
  };

  useEffect(() => {
    const SpeechRecognitionAPI =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) {
      alert("Your browser doesn't support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognitionAPI();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onresult = async (event: any) => {
      const text = event.results[0][0].transcript.toLowerCase();
      await handleUserQuery(text);
    };

    recognition.onend = () => {
      if (listening) recognition.start();
    };

    recognitionRef.current = recognition;
  }, [listening]);

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (listening) recognitionRef.current.stop();
    else {
      recognitionRef.current.start();
      speak("I'm listening.");
    }
    setListening(!listening);
  };

  return (
    <div className="w-full h-[300px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Suspense fallback={null}>
          <RotatingOrb listening={listening} onClick={toggleListening} />
        </Suspense>
      </Canvas>
    </div>
  );
}

function RotatingOrb({ listening, onClick }: { listening: boolean; onClick: () => void }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    ref.current.rotation.y += 0.005;
    ref.current.rotation.x += 0.002;
  });

  return (
    <mesh ref={ref} onClick={onClick} scale={1.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color={listening ? "#00ffff" : "#4b6cb7"}
        emissive={listening ? "#00ffff" : "#1a1a40"}
        metalness={0.9}
        roughness={0.1}
      />
      <Html center>
        <div className="text-white text-sm font-medium select-none">
          {listening ? "Listening..." : ""}
        </div>
      </Html>
    </mesh>
  );
}
