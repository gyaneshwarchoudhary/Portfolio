"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/constants/data";

// Animation Reuse
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Projects Completed", value: "10+", icon: "🚀" },
    { label: "Technologies", value: "12+", icon: "⚡" },
    { label: "GitHub Commits", value: "50+", icon: "💻" },
    { label: "Coffee Consumed", value: "∞", icon: "☕" },
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-slate-400 text-lg">Get to know me better</p>
        </motion.div>

        {/* LEFT & RIGHT LAYOUT */}
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-stretch">
          {/* LEFT SIDE */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-4 text-center hover:border-cyan-500/50 transition-transform"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-cyan-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Currently Focused On */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ delay: 0.6 }}
              className="bg-linear-to-br from-blue-500/10 to-purple-500/10 backdrop-blur border border-blue-500/30 rounded-2xl p-6"
            >
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-blue-400">🎯</span>
                Currently Focused On
              </h4>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Building AI agents that interact with real services using
                    MCP
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Deploying containerized microservices with health checks and
                    zero-downtime updates
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Implementing DevOps pipelines (Docker, Nginx, CI/CD, AWS)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Studying system design patterns for real-time communication
                    and event-driven architecture
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.8 }}
            className="flex-1 bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-400">👋</span>
              Hello, I&apos;m {portfolioData.personal.name}
            </h3>

            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I build systems that don&apos;t fall apart when the requirements
                get messy. I work across full-stack web and edge-hardware
                solutions, with production experience in React, Next.js,
                Node.js, FastAPI, WebSockets, Docker, and cloud deployment.
              </p>

              <p>
                My work has won multiple national hackathons, including
                OpinHacks 2023 and HackCBS 6.0, where I delivered accessibility
                hardware with 90–98% cost reductions over commercial products.
                I&apos;ve also been a top-5 finalist out of 1000+ teams at Smart
                India Hackathon 2024 for developing a dual-interface
                communication system for deaf individuals.
              </p>

              <p>
                I&apos;ve shipped projects from real-time collaboration tools to
                AI voice tutoring systems, and I focus on performance, clean
                architecture, and maintainable engineering — not quick hacks
                that fall apart in production.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Problem Solver",
                "Team Player",
                "Fast Learner",
                "Detail-Oriented",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
