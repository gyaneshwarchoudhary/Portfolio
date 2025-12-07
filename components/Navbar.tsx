"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { portfolioData } from "@/constants/data";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  // Floating Navbar Componen
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > lastScrollY.current && latest > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = latest;
    });
  }, [scrollY]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-5xl"
    >
      <div className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-2xl px-6 py-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            {"</>"}
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href={`/resume/${portfolioData.personal.resumeUrl}`}
              download
              className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-slate-800"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-slate-300 hover:text-white py-2 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href={`/resume/${portfolioData.personal.resumeUrl}`}
              download
              className="block bg-linear-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg mt-2 text-center"
            >
              Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
