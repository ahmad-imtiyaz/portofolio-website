import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'framer-motion';
import './GradientText.css';

const GradientText = ({
  children,
  className = '',
  colors, // optional override; defaults to theme CSS vars
  animationSpeed = 8,
  showBorder = false,
  direction = 'horizontal',
  pauseOnHover = false,
  yoyo = true
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);

  const animationDuration = animationSpeed * 1000;

  useAnimationFrame((time) => {
    if (isPaused) {
      lastTimeRef.current = null;
      return;
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    if (yoyo) {
      const fullCycle = animationDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;

      if (cycleTime < animationDuration) {
        progress.set((cycleTime / animationDuration) * 100);
      } else {
        progress.set(100 - ((cycleTime - animationDuration) / animationDuration) * 100);
      }
    } else {
      progress.set((elapsedRef.current / animationDuration) * 100);
    }
  });

  useEffect(() => {
    elapsedRef.current = 0;
    progress.set(0);
  }, [animationSpeed, yoyo]);

  const backgroundPosition = useTransform(progress, (p) => {
    if (direction === 'horizontal') return `${p}% 50%`;
    if (direction === 'vertical') return `50% ${p}%`;
    return `${p}% 50%`;
  });

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  const gradientAngle =
    direction === 'horizontal' ? 'to right' : direction === 'vertical' ? 'to bottom' : 'to bottom right';
  // Theme-aware palette: read from CSS vars if no explicit colors passed.
  const defaultColors = ['var(--grad-1)', 'var(--grad-2)', 'var(--grad-3)', 'var(--grad-1)'];
  const gradientColors = [...(colors || defaultColors), (colors ? colors[0] : 'var(--grad-1)')].join(', ');

  const gradientStyle = {
    backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
    backgroundSize: direction === 'horizontal' ? '300% 100%' : direction === 'vertical' ? '100% 300%' : '300% 300%',
    backgroundRepeat: 'repeat',
  };

  return (
    <motion.div
      className={`animated-gradient-text ${showBorder ? 'with-border' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showBorder && <motion.div className="gradient-overlay" style={{ ...gradientStyle, backgroundPosition }} />}
      <motion.div className="text-content" style={{ ...gradientStyle, backgroundPosition }}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default GradientText;
