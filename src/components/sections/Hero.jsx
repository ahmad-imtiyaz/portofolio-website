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

// 4-corner text labels
const cornerLabels = {
  topLeft: {
    main: "Ahmad",
    sub: "Full-Stack Dev",
  },
  topRight: {
    main: "Since 2022",
    sub: "Crafting Code",
  },
  bottomLeft: {
    main: "10+ Projects",
    sub: "Shipped & Alive",
  },
  bottomRight: {
    main: "Najih",
    sub: "Backend Engineer",
  },
};

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
      className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] mx-auto"
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
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

// Single corner label — main (big) + sub (small)
const CornerLabel = ({ main, sub, align = "left", dominant = false }) => (
  <div className={`flex flex-col ${align === "right" ? "items-end text-right" : "items-start text-left"}`}>
    {dominant ? (
      <GradientText
        animationSpeed={6}
        yoyo
        className="!inline-block font-extrabold leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
      >
        {main}
      </GradientText>
    ) : (
      <span className="font-extrabold leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white/90">
        {main}
      </span>
    )}
    <span className="mt-1 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-white/50">
      {sub}
    </span>
  </div>
);

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 md:py-20 overflow-hidden"
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
        {/* Badge above everything (mobile + desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6 sm:mb-8 md:mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs sm:text-sm font-medium">
            <span className="relative w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            Backend Developer • Laravel & React
          </span>
        </motion.div>

        {/* Hidden h1 for a11y (reads full name) */}
        <h1 id="hero-heading" className="sr-only">
          Ahmad Imtiyaz Najih — Backend Developer
        </h1>

        {/* 4-corner grid with photo center */}
        <div className="relative">
          {/* Desktop / tablet grid (≥md): 2-col, photo in center-right */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-x-8 lg:gap-x-12 md:items-center">
            {/* Left column: TL dominant + BL sub */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between gap-10 lg:gap-16 py-4"
            >
              <CornerLabel
                main={cornerLabels.topLeft.main}
                sub={cornerLabels.topLeft.sub}
                align="left"
                dominant
              />
              <CornerLabel
                main={cornerLabels.bottomLeft.main}
                sub={cornerLabels.bottomLeft.sub}
                align="left"
                dominant={false}
              />
            </motion.div>

            {/* Right column: photo + TR/BR labels flanking */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              {/* Top-right label absolutely positioned above photo */}
              <div className="absolute -top-4 -right-2 lg:right-0 z-10">
                <CornerLabel
                  main={cornerLabels.topRight.main}
                  sub={cornerLabels.topRight.sub}
                  align="right"
                  dominant={false}
                />
              </div>
              {/* Bottom-right label absolutely positioned below photo */}
              <div className="absolute -bottom-4 -right-2 lg:right-0 z-10">
                <CornerLabel
                  main={cornerLabels.bottomRight.main}
                  sub={cornerLabels.bottomRight.sub}
                  align="right"
                  dominant
                />
              </div>

              <PolaroidStack />
            </motion.div>
          </div>

          {/* Mobile (<md): vertical stack */}
          <div className="md:hidden flex flex-col items-center gap-6">
            {/* TL + TR row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full flex justify-between items-start gap-4"
            >
              <CornerLabel
                main={cornerLabels.topLeft.main}
                sub={cornerLabels.topLeft.sub}
                align="left"
                dominant
              />
              <CornerLabel
                main={cornerLabels.topRight.main}
                sub={cornerLabels.topRight.sub}
                align="right"
                dominant={false}
              />
            </motion.div>

            {/* Photo center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="w-full flex justify-center py-2"
            >
              <PolaroidStack />
            </motion.div>

            {/* BL + BR row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="w-full flex justify-between items-start gap-4"
            >
              <CornerLabel
                main={cornerLabels.bottomLeft.main}
                sub={cornerLabels.bottomLeft.sub}
                align="left"
                dominant={false}
              />
              <CornerLabel
                main={cornerLabels.bottomRight.main}
                sub={cornerLabels.bottomRight.sub}
                align="right"
                dominant
              />
            </motion.div>
          </div>
        </div>

        {/* Bio + CTAs + Socials (below the grid, both breakpoints) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
          }}
          className="mt-10 sm:mt-12 md:mt-16 flex flex-col items-center text-center max-w-3xl mx-auto gap-6"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed font-light px-2"
          >
            Student passionate about full-stack web & mobile development. Building scalable apps
            with{" "}
            <strong className="text-white font-medium">Laravel</strong>,{" "}
            <strong className="text-white font-medium">React</strong> &{" "}
            <strong className="text-white font-medium">Flutter</strong>, while exploring AI-assisted
            coding to ship faster and cleaner.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            <ClickSpark sparkColor="#a78bfa" sparkSize={8} sparkRadius={20} sparkCount={10} duration={450}>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 via-primary-600 to-violet-600 text-white rounded-2xl font-semibold text-sm sm:text-base md:text-lg shadow-xl shadow-primary-500/40 hover:shadow-primary-500/60 transition-all duration-300 border border-white/10"
              >
                View My Work
                <ArrowRight
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                  aria-hidden="true"
                />
              </motion.a>
            </ClickSpark>

            <ClickSpark sparkColor="#ffffff" sparkSize={8} sparkRadius={18} sparkCount={8} duration={400}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 text-white/90 rounded-2xl font-semibold text-sm sm:text-base md:text-lg bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                Get In Touch
              </motion.a>
            </ClickSpark>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="flex items-center gap-3 pt-1"
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
                className="p-2.5 sm:p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white/70 hover:text-white hover:bg-white/15 hover:border-white/30 transition-all duration-300"
              >
                <Icon size={20} className="sm:w-[22px] sm:h-[22px]" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
