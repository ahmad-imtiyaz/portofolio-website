"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, MapPin } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import { education, internships } from "../../data/experience";

const timelineItems = [
  { type: "education", icon: GraduationCap, color: "from-blue-500 to-cyan-500", label: "Education" },
  { type: "internship", icon: Briefcase, color: "from-violet-500 to-pink-500", label: "Experience" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const Experience = () => {
  const allItems = [
    ...education.map((e) => ({ ...e, category: "education" })),
    ...internships.map((i) => ({ ...i, category: "internship" })),
  ].sort((a, b) => {
    const dateA = new Date(a.period.split(" ").pop().replace(")", ""));
    const dateB = new Date(b.period.split(" ").pop().replace(")", ""));
    return dateB - dateA;
  });

  return (
    <section
      id="experience"
      className="relative py-20 lg:py-28 bg-white dark:bg-gray-950 overflow-hidden"
      aria-labelledby="experience-heading"
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
            title="Journey"
            subtitle="Education & professional experience"
            centered={true}
            className="mb-16"
          />

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-violet-500 to-pink-500 -translate-x-1/2" />

            <div className="space-y-12">
              {allItems.map((item, index) => {
                const isEducation = item.category === "education";
                const Icon = isEducation ? GraduationCap : Briefcase;
                const gradient = isEducation ? "from-blue-500 to-cyan-500" : "from-violet-500 to-pink-500";
                const iconBg = isEducation ? "bg-blue-500/10 dark:bg-blue-500/20" : "bg-violet-500/10 dark:bg-violet-500/20";
                const iconText = isEducation ? "text-blue-500" : "text-violet-500";
                const borderColor = isEducation ? "hover:border-blue-500/30" : "hover:border-violet-500/30";
                const darkBorderColor = isEducation ? "dark:hover:border-blue-500/30" : "dark:hover:border-violet-500/30";

                return (
                  <motion.article
                    key={`${item.category}-${item.id}`}
                    variants={itemVariants}
                    className={`relative flex items-start gap-6 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    {/* Left side - Date & Icon */}
                    <div className={`w-1/2 px-6 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
                      <div className="flex items-center justify-end gap-3">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </div>
                        <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center flex-shrink-0 z-10 ${gradient.replace("from-", "border-").replace("to-", " border-")} border-2`}>
                          <Icon className={`w-7 h-7 ${iconText}`} />
                        </div>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="w-8 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full ${gradient} border-4 border-white dark:border-gray-900 z-10 shadow-lg`} />
                    </div>

                    {/* Right side - Content */}
                    <div className="w-1/2 px-6">
                      <Card
                        className={`p-6 w-full border-gray-200/50 dark:border-gray-700/50 ${borderColor} ${darkBorderColor} transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm`}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${iconBg} ${iconText}`}>
                            {isEducation ? "Education" : "Experience"}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{item.period}</span>
                        </div>

                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {isEducation ? item.degree : item.title}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                          {isEducation ? item.institution : item.company}
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {item.description}
                        </p>

                        <ul className="space-y-2">
                          {item.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${gradient}`} />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;