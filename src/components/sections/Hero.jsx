// Hero section with animated photo cycling (blur + fade effect)
import { useState, useEffect } from "react";
import foto1 from "../../assets/images/foto1.png";
import foto2 from "../../assets/images/foto2.png";
// import foto3 from "../../assets/images/foto3.jpg";

import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const Hero = () => {
  const photos = [
    { src: foto1, alt: "Foto 1" },
    { src: foto2, alt: "Foto 2" },
    // { src: foto3, alt: "Foto 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextPhoto();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const nextPhoto = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
      setIsAnimating(false);
    }, 800);
  };

  const prevPhoto = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
      setIsAnimating(false);
    }, 800);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 px-4 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="text-primary-600 dark:text-primary-400">
              Ahmad Imtiyaz Najih
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
            Backend Developer & Laravel Full-Stack Builder
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I focus on backend development and building full-stack applications
            using Laravel. I enjoy turning ideas into functional systems,
            creating clean APIs, and developing reliable web applications that
            are simple, scalable, and easy to maintain.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors font-medium"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 pt-4">
            <a
              href="https://github.com/ahmad-imtiyaz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/ahmad-imtiyaz-3531532b5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:your.imtiyaznajih8@gmail.com"
              aria-label="Email Contact"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Animated Photo Frame */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto md:max-w-2xl">
            {/* CLICK-TO-NEXT Photo Frame */}
            {/* Photo Frame with White Background (Better for Mobile) */}
            <div
              className="
      relative w-full h-full cursor-pointer overflow-hidden
      bg-white dark:bg-gray-800
      rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700
      p-3
      md:bg-transparent md:border-none md:shadow-none md:p-0
  "
              onClick={nextPhoto}
              title="Click photo to switch"
            >
              {photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo.src}
                  alt={photo.alt}
                  className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-800 ${
                    index === currentIndex
                      ? isAnimating
                        ? "hero-image-exit"
                        : "hero-image-enter opacity-100"
                      : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setCurrentIndex(index);
                        setIsAnimating(false);
                      }, 800);
                    }
                  }}
                  aria-label={`Go to photo ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary-600 w-8"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Decorative */}
          <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-primary-200 dark:bg-primary-900/30 rounded-full blur-3xl opacity-50" />
          <div className="absolute -z-10 bottom-10 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
