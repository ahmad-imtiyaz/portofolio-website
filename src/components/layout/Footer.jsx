"use client";

import { motion } from "framer-motion";
import { motivasiList } from "../../data/motivasi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  Home,
  Briefcase,
  BookOpen,
  Wrench,
  Send,
  ArrowUp,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentMotivasi, setCurrentMotivasi] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMotivasi((prev) =>
        prev === motivasiList.length - 1 ? 0 : prev + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/projects", label: "Projects", icon: Briefcase },
    { path: "/blog", label: "Blog", icon: BookOpen },
    { path: "/services", label: "Services", icon: Wrench },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/ahmad-imtiyaz", label: "GitHub", gradient: "from-gray-700 to-gray-900" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ahmad-imtiyaz-3531532b5/", label: "LinkedIn", gradient: "from-blue-600 to-blue-700" },
    { icon: Twitter, href: "https://twitter.com/ahmadimtiyaz", label: "Twitter", gradient: "from-sky-500 to-blue-600" },
    { icon: Mail, href: "mailto:imtiyaznajih8@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Imtiyaz,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss...", label: "Email", gradient: "from-red-500 to-red-600" },
  ];

  const scrollToSection = (sectionId) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("imtiyaznajih8@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 border-t dark:border-gray-800 transition-colors overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Brand & Description */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-primary-600 to-violet-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
                YAZNA
              </h3>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Backend Developer passionate about building functional web systems with Laravel & React. Available for learning, collaboration, and real-world projects.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map(({ icon: Icon, href, label, gradient }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 rounded-xl flex items-center justify-center bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-transparent bg-gradient-to-br ${gradient}`}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map(({ path, label, icon: Icon }) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={() => isHomePage && scrollToSection(path.replace("/", ""))}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
                  >
                    <Icon size={16} className="group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Motivasi */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 bg-gradient-to-br from-white to-primary-50/50 dark:from-gray-900 dark:to-primary-900/10 transition-all h-full">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Motivasi Hari Ini</h4>
              <motion.p
                key={currentMotivasi}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4"
              >
                “{motivasiList[currentMotivasi].quote}”
              </motion.p>
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                — {motivasiList[currentMotivasi].author}
              </span>
            </div>
          </motion.div>

          {/* Quick Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Get In Touch</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Available for freelance opportunities</p>

            <div className="space-y-3">
              <button
                onClick={copyEmail}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 rounded-xl hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all text-left group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-primary-600 dark:text-primary-400" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{copiedEmail ? "Copied!" : "Click to copy"}</p>
                    </div>
                  </div>
                  {copiedEmail && <span className="text-green-500 text-xs font-medium">✓</span>}
                </div>
              </button>

              <Link to="/contact" className="block w-full px-4 py-3 bg-gradient-to-r from-primary-600 to-violet-600 text-white rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all font-medium text-center text-sm">
                <div className="flex items-center justify-center space-x-2"><span>Send Message</span><Send size={16} /></div>
              </Link>

              <div className="flex items-center space-x-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200/50 dark:border-green-800/50 rounded-xl">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-green-700 dark:text-green-400">Available for work</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              Made with{" "}
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current animate-pulse" />
              by YAZNA © {currentYear}. All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;