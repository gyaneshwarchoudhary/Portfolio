"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { portfolioData } from "@/constants/data";
import { Mail, Github, Linkedin, Twitter, Link, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitStatus(null), 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Let&apos;s Create Something
            </span>
            <br />
            <span className="bg-linear-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </motion.h2>

          <motion.p
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Have a project in mind? Let&apos;s discuss how we can work together
            to bring your ideas to life.
          </motion.p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Email Card */}
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Mail
                    className="text-cyan-400 hover:text-red-400"
                    size={28}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Link className="text-blue-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Social Links
                  </h3>
                  <div className="flex gap-4 mt-3">
                    <a
                      href={portfolioData.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <Github
                        size={20}
                        className="text-slate-300 hover:text-slate-800"
                      />
                    </a>

                    <a
                      href={portfolioData.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <Linkedin
                        size={20}
                        className="text-slate-300 hover:text-blue-300"
                      />
                    </a>

                    <a
                      href={portfolioData.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <Twitter
                        size={20}
                        className="text-slate-300 hover:text-blue-500"
                      />
                    </a>
                    <a
                      href={portfolioData.personal.phone}
                      target=""
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <Phone
                        size={20}
                        className="text-slate-300 hover:text-green-500"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Reasons Card */}
            <div className="bg-linear-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur border border-cyan-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">
                Why Work With Me?
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  Fast, clean, and scalable code
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  Collaborative and communicative
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">✓</span>
                  Passion for learning and growth
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-blue-500/5" />

            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-300 mb-2 font-semibold text-sm">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2 font-semibold text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-2 font-semibold text-sm">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-xl" />
                  <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative px-8 py-4 font-semibold text-white flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : submitStatus === "success" ? (
                      <>
                        <span className="text-xl">✓</span>
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message <Mail size={18} />
                      </>
                    )}
                  </div>
                </motion.button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-400 text-sm"
                  >
                    Thank you! I&apos;ll get back to you soon.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 pt-12 border-t border-slate-800"
        >
          <div className="text-center space-y-4">
            <motion.div
              className="flex justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 rounded-lg transition-all"
              >
                <Github
                  size={24}
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 rounded-lg transition-all"
              >
                <Linkedin
                  size={24}
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={portfolioData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 hover:border-purple-500/50 rounded-lg transition-all"
              >
                <Twitter
                  size={24}
                  className="text-slate-300 hover:text-purple-400 transition-colors"
                />
              </motion.a>
            </motion.div>

            <div className="text-slate-500 text-sm">
              <p>© 2024 {portfolioData.personal.name}. All rights reserved.</p>
              <p className="mt-2">
                Built with ❤️ using Next.js, Tailwind CSS & Framer Motion
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
