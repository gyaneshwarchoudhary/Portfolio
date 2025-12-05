"use client";
import { portfolioData } from "@/constants/data";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-card">
      <div className="absolute inset-0 bg-grid-small opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground font-medium mb-2 text-sm uppercase tracking-widest">
            What I know
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Skills & Technologies
          </h2>
          <div className="w-20 h-px bg-border mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {portfolioData.skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={item}
                className="group p-4 rounded-xl bg-background border border-border hover:border-foreground/20 transition"
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <Image
                    src={`/icons/${skill.icon}`}
                    width={40}
                    height={40}
                    alt={`${skill.icon}`}
                    className="mx-auto mb-3"
                  />
                  <h3 className="font-medium text-sm text-foreground">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {skill.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m constantly learning and expanding my skill set. Currently
            exploring
            <span className="text-foreground font-medium">
              {" "}
              cloud technologies
            </span>{" "}
            and
            <span className="text-foreground font-medium">
              {" "}
              AI/ML integration
            </span>{" "}
            in web applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
