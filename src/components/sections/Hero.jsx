"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import foto1 from "../../assets/images/foto1.png";
import foto2 from "../../assets/images/foto2.png";
import GradientWaves from "../backgrounds/GradientWaves";
import GradientText from "../text/GradientText";
import ClickSpark from "../effects/ClickSpark";

// ===== HERO COMPONENT =====
const photos = [
  { src: foto1, alt: "Ahmad Imtiyaz - Backend Developer" },
  { src: foto2, alt: "Ahmad Imtiyaz - Laravel Developer" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/ahmad-imtiyaz", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ahmad-imtiyaz-3531532b5/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:imtiyaznajih8@gmail.com", label: "Email" },
];

// Stacked polaroid photo model
const PolaroidStack = () => {
  const [topIndex, setTopIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (flipping) return;
    const id = setInterval(() => setTopIndex((i) => (i + 1) % photos.length), 5000);
    return () => clearInterval(id);
  }, [flipping]);

  const flip = () => {
    if (flipping) return;
    setFlipping(true);
    setTimeout(() => {
      setTopIndex((i) => (i + 1) % photos.length);
      setFlipping(false);
    }, 700);
  };

  const bottomIndex = (topIndex + 1) % photos.length;

  return (
    <div
      className="relative w-full max-w-[420px] mx-auto"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setFlipping(true)}
      onMouseLeave={() => setFlipping(false)}
    >
      {/* Bottom card — peeks behind, rotated opposite direction */}
      <motion.div
        key={`bottom-${bottomIndex}`}
        className="absolute inset-0"
        initial={{ rotate: 8, scale: 0.92, y: 14 }}
        animate={{ rotate: 8, scale: 0.92, y: 14 }}
        style={{ zIndex: 1 }}
      >
        <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-white p-2 sm:p-3 shadow-2xl ring-1 ring-black/10">
          <div className="w-full h-full rounded-xl overflow-hidden bg-gray-200">
            <img
              src={photos[bottomIndex].src}
              alt={photos[bottomIndex].alt}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        </div>
        {/* Tape */}
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-yellow-200/70 rotate-[-4deg] shadow-sm backdrop-blur-sm"
          aria-hidden="true"
        />
      </motion.div>

      {/* Top card — flippable */}
      <motion.div
        key={`top-${topIndex}`}
        className="relative cursor-pointer"
        onClick={flip}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && flip()}
        aria-label="Flip photo"
        animate={{
          rotate: flipping ? -6 : -3,
          y: flipping ? -6 : 0,
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ zIndex: 2, transformStyle: "preserve-3d" }}
        whileHover={{ rotate: 0, y: -8, transition: { duration: 0.4 } }}
      >
        <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-white p-2 sm:p-3 shadow-2xl ring-1 ring-black/10">
          <div className="w-full h-full rounded-xl overflow-hidden bg-gray-200 relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={topIndex}
                src={photos[topIndex].src}
                alt={photos[topIndex].alt}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                draggable={false}
              />
            </AnimatePresence>
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
        {/* Tape */}
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-yellow-200/70 rotate-[3deg] shadow-sm backdrop-blur-sm"
          aria-hidden="true"
        />
      </motion.div>

      {/* Floating role badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute -bottom-4 -left-3 sm:-left-6 z-10 px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-sm font-medium text-white shadow-lg"
      >
        <div className="flex items-center gap-2">
          <span className="relative w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Available for projects
        </div>
      </motion.div>

      {/* Photo count dots */}
      <div
        className="absolute -bottom-4 right-0 z-10 flex items-center gap-1.5 px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
        aria-hidden="true"
      >
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              if (i !== topIndex) flip();
            }}
            aria-label={`Show photo ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === topIndex ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* WebGL Gradient Waves Background */}
      <GradientWaves
        horizonColor="#1a1530"
        waveColor="#6d4dba"
        crestColor="#c4b5fd"
        speed={0.4}
        amplitude={2.5}
        waveScale={0.7}
        waveRatio={0.85}
        swell={40}
        turbulence={20}
        tilt={1.1}
        zoom={1.0}
        height={5.5}
        fogDepth={14}
        detail="medium"
        brightness={1.0}
        opacity={1.0}
        grain
        grainIntensity={0.04}
        mouseInteraction
        parallaxStrength={0.4}
      />

      <div className="absolute inset-0 -z-10 noise-overlay" aria-hidden="true" />

      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(15, 15, 26, 0.85) 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Mobile: stack photo on top, text below. Desktop: side by side (text-left, photo-right) */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-8 lg:space-y-10 w-full"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
            }}
          >
            {/* Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-sm font-medium">
                <span className="relative w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                Backend Developer • Laravel & React
              </span>
            </motion.div>

            {/* Name — two colors */}
            <motion.h1
              id="hero-heading"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight"
            >
              <span className="block text-white">Hi, I'm</span>
              <span className="block mt-1">
                <GradientText
                  colors={["#6366f1", "#a78bfa", "#ec4899", "#6366f1"]}
                  animationSpeed={5}
                  yoyo
                  className="!inline"
                >
                  Ahmad Imtiyaz Najih
                </GradientText>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-xl font-light"
            >
              I build clean, scalable backend systems with{" "}
              <strong className="text-white font-medium">Laravel</strong> &{" "}
              <strong className="text-white font-medium">React</strong>. Turning complex problems into
              maintainable APIs and reliable web applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="flex flex-wrap gap-4"
            >
              <ClickSpark sparkColor="#a78bfa" sparkSize={8} sparkRadius={20} sparkCount={10} duration={450}>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 via-primary-600 to-violet-600 text-white rounded-2xl font-semibold text-lg shadow-xl shadow-primary-500/40 hover:shadow-primary-500/60 transition-all duration-300 border border-white/10"
                >
                  View My Work
                  <ArrowRight
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </motion.a>
              </ClickSpark>

              <ClickSpark sparkColor="#ffffff" sparkSize={8} sparkRadius={18} sparkCount={8} duration={400}>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white/90 rounded-2xl font-semibold text-lg bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  Get In Touch
                </motion.a>
              </ClickSpark>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "backOut" } },
              }}
              className="flex items-center gap-3 pt-2"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, rotate: 12 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white/70 hover:text-white hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Polaroid Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative w-full flex justify-center lg:justify-end pb-16 lg:pb-0"
          >
            <PolaroidStack />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
