"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Home, Briefcase, BookOpen, Wrench, Mail } from "lucide-react";
import { motion } from "framer-motion";
import DarkModeToggle from "../common/DarkModeToggle";
import GooeyNav from "../nav/GooeyNav";

const MobileNavLink = ({ children, href, isActive, onClick }) => (
  <motion.div
    whileTap={{ scale: 0.98 }}
    className={`flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-primary-500/10 to-violet-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20"
        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    }`}
  >
    <Link to={href} onClick={onClick} className="flex items-center space-x-3 w-full">
      {children}
    </Link>
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/projects", label: "Projects", icon: Briefcase },
    { path: "/blog", label: "Blog", icon: BookOpen },
    { path: "/services", label: "Services", icon: Wrench },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  const items = useMemo(() => navLinks.map(({ path, label }) => ({ label, href: path })), []);

  // Sync active index when route changes (browser back/forward, deep link)
  useEffect(() => {
    const idx = navLinks.findIndex((l) => l.path === location.pathname);
    setActiveIndex(idx >= 0 ? idx : 0);
  }, [location.pathname]);

  const handleNavigate = (index) => {
    const path = items[index].href;
    setActiveIndex(index);
    if (path !== location.pathname) {
      navigate(path);
    }
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 transition-colors duration-300 backdrop-blur-xl bg-white/70 dark:bg-gray-950/70 border-b border-gray-200/30 dark:border-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-primary-600 to-violet-600 bg-clip-text text-transparent">
              YAZNA
            </span>
          </Link>

          {/* Desktop Navigation — Gooey */}
          <div className="hidden md:flex items-center gap-6">
            <GooeyNav
              items={items}
              initialActiveIndex={activeIndex}
              animationTime={500}
              particleCount={12}
              particleDistances={[80, 12]}
              particleR={90}
              timeVariance={250}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              onNavigate={handleNavigate}
            />
            <DarkModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <DarkModeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t dark:border-gray-800"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <MobileNavLink
                key={path}
                href={path}
                isActive={isActive(path)}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} />
                <span className="font-medium">{label}</span>
              </MobileNavLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
