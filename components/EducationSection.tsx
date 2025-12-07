"use client";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { CardSpotlight } from "@/components/ui/MovingBorder";
import { motion } from "framer-motion";

const education = [
  {
    degree:
      "Bachelor of Technology in Computer Science & Information Technology",
    institution: "Acropolis Institute Of Technology And Research",
    year: "2021 - 2025",
    grade: "CGPA: 7.5/10",
    highlights: [
      "Data Structures & Algorithms",
      "Web Development",
      "Database Management",
      "Software Engineering",
    ],
  },
];

const certifications = [
  { name: "React Developer Certificate", issuer: "DataCode", year: "2023" },
  { name: "PostMan API Fundamental", issuer: "PostMan", year: "2024" },
  { name: "Cerficate Of Participation", issuer: "hackByte", year: "2024" },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
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
            My background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Education
          </h2>
          <div className="w-20 h-px bg-border mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Education Card */}
          {education.map((edu) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CardSpotlight className="p-8 mb-12">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center shrink-0">
                    <GraduationCap className="w-8 h-8 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm mb-4">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {edu.year}
                      </span>
                      <span className="flex items-center gap-2 text-foreground">
                        <Award className="w-4 h-4" />
                        {edu.grade}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
              Certifications
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-card border border-border hover:border-foreground/20  duration-300 group"
                >
                  <Award className="w-8 h-8 text-foreground mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-medium text-sm mb-1 text-foreground">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {cert.issuer} • {cert.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
