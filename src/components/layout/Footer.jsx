// Modern Footer with animations and updated navigation
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  Home,
  Briefcase,
  BookOpen,
  Wrench,
  Send,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // Navigation links matching Navbar
  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/projects", label: "Projects", icon: Briefcase },
    { path: "/blog", label: "Blog", icon: BookOpen },
    { path: "/services", label: "Services", icon: Wrench },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ahmad-imtiyaz",
      label: "GitHub",
      color: "hover:bg-gray-800 dark:hover:bg-gray-600",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ahmad-imtiyaz-3531532b5/",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: Mail,
      href: "mailto:imtiyaznajih8@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Imtiyaz,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss...",
      label: "Email",
      color: "hover:bg-red-500",
    },
  ];

  // Home page sections for quick navigation
  const homeSections = [
    { id: "hero", label: "Hero" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "tech-timeline", label: "Tech Timeline" },
    { id: "certificates", label: "Certificates" },
    { id: "live-activity", label: "Live Activity" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId) => {
    if (!isHomePage) {
      // Kalau bukan di home, redirect ke home dulu
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-t dark:border-gray-700 transition-colors overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-3xl font-extrabold tracking-wide text-primary-600 dark:text-primary-400 hover:scale-105 transition-transform">
                YAZNA
              </h3>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              Junior Web Developer passionate about building functional web
              systems Available for learning, collaboration, and real-world
              projects.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-2.5 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md text-gray-700 dark:text-gray-300 hover:text-white transition-all transform hover:scale-110 ${color}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ path, label, icon: Icon }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
                  >
                    <Icon
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    <span className="text-sm">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Home Sections Quick Nav */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
              Home Sections
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Quick navigation to sections
            </p>

            <div className="grid grid-cols-2 gap-2">
              {homeSections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    setActiveSection(id);
                    setTimeout(() => setActiveSection(null), 1000);
                  }}
                  className={`px-3 py-2 text-left rounded-lg border text-sm font-medium transition-all ${
                    activeSection === id
                      ? "bg-primary-100 dark:bg-primary-900/30 border-primary-500 text-primary-700 dark:text-primary-400"
                      : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">
              Get In Touch
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Available for freelance opportunities
            </p>

            <div className="space-y-3">
              {/* Email Copy Button */}
              <button
                onClick={copyEmail}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary-500 dark:hover:border-primary-500 transition-all text-left group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Mail
                      size={18}
                      className="text-primary-600 dark:text-primary-400"
                    />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Email
                      </p>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {copiedEmail ? "Copied!" : "Click to copy"}
                      </p>
                    </div>
                  </div>
                  {copiedEmail && (
                    <span className="text-green-500 text-xs font-medium">
                      ✓
                    </span>
                  )}
                </div>
              </button>

              {/* Direct Contact Button */}
              <Link
                to="/contact"
                className="block w-full px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-center shadow-md hover:shadow-lg"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-sm">Send Message</span>
                  <Send size={16} />
                </div>
              </Link>

              {/* Status Indicator */}
              <div className="flex items-center space-x-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-green-700 dark:text-green-400">
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              Made with{" "}
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current animate-pulse" />
              by YAZNA © {currentYear}. All rights reserved.
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary-500 dark:hover:border-primary-500 transition-all shadow-sm hover:shadow-md"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Back to Top
              </span>
              <ArrowUp
                size={16}
                className="text-primary-600 dark:text-primary-400 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
