"use client";
import { Achievement, achievementsData } from "@/constants/data";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, X, Code2, Target, Zap } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Achievements = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);
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

  return (
    <section className="min-h-screen w-full bg-linear-to-b from-black via-gray-900 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-10 h-10 text-yellow-400" />
            <h2 className="text-5xl font-bold text-white">
              Awards & Achievements
            </h2>
          </div>
          <p className="text-gray-400 text-lg">
            Competition-proven solutions with measurable impact
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              ref={cardRef}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: "transform 0.1s ease-out",
              }}
              className="group"
            >
              <div className="relative bg-linear-to-br from-gray-800 via-gray-900 to-black rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-300 h-full flex flex-col">
                {/* Gradient overlay effect */}
                <div className="absolute inset-0 bg-linear-to-br from-yellow-400/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={`/Images/${achievement.image}`}
                    fill
                    alt={achievement.project}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-yellow-400/30">
                    {achievement.badge}
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-yellow-400 text-sm font-medium">
                      {achievement.event}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col relative z-10">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-yellow-400 font-medium mb-3">
                    {achievement.project}
                  </p>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {achievement.headline}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {achievement.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-700 group-hover:border-yellow-400/30 transition-colors"
                      >
                        <div className="text-2xl font-bold text-yellow-400">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {achievement.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-xs rounded-full font-medium hover:border-yellow-400/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setSelectedAchievement(achievement)}
                    className="mt-auto w-full bg-linear-to-r from-yellow-400 to-yellow-600 text-black py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg shadow-yellow-400/20"
                  >
                    <Code2 className="w-4 h-4" />
                    View Technical Details
                    <Zap className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-linear-to-br from-gray-900 via-gray-800 to-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-linear-to-r from-yellow-400 to-yellow-600 text-black p-6 rounded-t-2xl z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm font-medium mb-2 opacity-90">
                      {selectedAchievement.event}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {selectedAchievement.title}
                    </h3>
                    <p className="text-black/80 text-lg font-medium">
                      {selectedAchievement.project}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedAchievement(null)}
                    className="p-2 hover:bg-black/10 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-6">
                {/* Context */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-yellow-400" />
                    <h4 className="text-lg font-bold text-white">Context</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedAchievement.technicalBreakdown.context}
                  </p>
                </div>

                {/* Implementation */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 className="w-5 h-5 text-yellow-400" />
                    <h4 className="text-lg font-bold text-white">
                      Technical Implementation
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {selectedAchievement.technicalBreakdown.implementation.map(
                      (item, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-yellow-400 font-bold mt-1">
                            ▸
                          </span>
                          <span className="text-gray-300 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Impact */}
                <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                  <h4 className="font-bold text-white mb-2">Impact</h4>
                  <p className="text-gray-300">
                    {selectedAchievement.technicalBreakdown.impact}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-bold text-white mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAchievement.technicalBreakdown.stack.map(
                      (tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg font-medium text-sm hover:border-yellow-400/50 transition-colors"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
