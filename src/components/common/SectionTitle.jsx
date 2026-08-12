"use client";

import { motion } from "framer-motion";
import GradientText from "../text/GradientText";

const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  className = "",
  gradient = true,
  gradientColors = ["#6366f1", "#8b5cf6", "#ec4899", "#6366f1"],
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`${centered ? "text-center" : ""} ${className}`}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
        {gradient ? (
          <GradientText colors={gradientColors} animationSpeed={6} yoyo>
            {title}
          </GradientText>
        ) : (
          <span className="text-gray-900 dark:text-white">{title}</span>
        )}
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
