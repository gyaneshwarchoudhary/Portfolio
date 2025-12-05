"use client";
import { portfolioData } from "@/constants/data";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Achievements = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateY(((x - centerX) / centerX) * 10);
    setRotateX(((centerY - y) / centerY) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const { featured } = portfolioData.achievements;

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Trophy className="text-yellow-500" size={40} />
            <span className="bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Awards & Achievements
            </span>
          </h2>
        </motion.div>

        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transformStyle: "preserve-3d",
          }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="absolute inset-0 bg-linear-to-r from-yellow-500/20 to-orange-500/20 blur-3xl" />

          <div className="relative bg-slate-900 border-2 border-yellow-500/50 rounded-2xl overflow-hidden">
            <div className="absolute top-4 right-4 bg-yellow-500 text-slate-900 px-4 py-2 rounded-full font-bold text-sm z-10">
              {featured.badge}
            </div>

            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <Image
                  width={60}
                  height={60}
                  src={featured.image}
                  alt={featured.project}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent" />
              </div>

              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-2 text-yellow-400">
                  {featured.title}
                </h3>
                <h4 className="text-xl font-semibold mb-4 text-slate-300">
                  {featured.project}
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  {featured.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
