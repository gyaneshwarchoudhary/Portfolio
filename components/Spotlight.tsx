"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Spotlight = () => {
  // Spotlight Effect Component
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <motion.div
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        className="absolute w-[500px] h-[500px] rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"
      />
    </div>
  );
};

export default Spotlight;
