// Tailwind CSS configuration with custom theme extensions
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
          950: "#1E1B4B",
        },
        accent: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DCD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
          950: "#2E1065",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#0F0F1A",
          elevated: {
            light: "#F8FAFC",
            dark: "#1A1A2E",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.4s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "blur-in": "blurIn 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "rotate-in": "rotateIn 0.5s ease-out",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(24px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        blurIn: {
          "0%": { filter: "blur(12px)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(99, 102, 241, 0.4)" },
          "50%": { boxShadow: "0 0 24px 4px rgba(99, 102, 241, 0.3)" },
        },
        rotateIn: {
          "0%": { transform: "rotate(-12deg) scale(0.9)", opacity: "0" },
          "100%": { transform: "rotate(0) scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #A855F7 100%)',
        'gradient-text': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #A855F7 100%)',
        'gradient-mesh-1': 'radial-gradient(ellipse at 20% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
        'gradient-mesh-2': 'radial-gradient(ellipse at 80% 100%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
        'gradient-mesh-3': 'radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
        'gradient-border': 'linear-gradient(135deg, #6366F1, #8B5CF6, #A855F7, #EC4899)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-primary': '0 0 40px -10px rgba(99, 102, 241, 0.4)',
        'glow-accent': '0 0 40px -10px rgba(168, 85, 247, 0.4)',
        'inner-glow': 'inset 0 0 40px rgba(99, 102, 241, 0.1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '400ms',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'ease-out-circ': 'cubic-bezier(0.08, 0.82, 0.17, 1)',
        'ease-out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ease-in-out-sine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
      },
    },
  },
  plugins: [],
};
