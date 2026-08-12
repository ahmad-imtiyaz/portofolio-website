"use client";

import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import { skills } from "../../data/skills";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-20 lg:py-28 bg-white dark:bg-gray-950 overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 dark:bg-primary-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 dark:bg-violet-900/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle
            title="Tech Stack"
            subtitle="Tools & technologies I work with daily"
            centered={true}
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, catIndex) => (
              <motion.article
                key={category.category}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <Card
                  className="p-6 h-full border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {category.category.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: catIndex * 0.05 + skillIndex * 0.03, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        className="group flex items-center gap-2.5 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all duration-200 cursor-default"
                      >
                        <div className="relative w-7 h-7">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;