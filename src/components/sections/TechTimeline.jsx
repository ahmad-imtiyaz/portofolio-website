"use client";

import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import { Lightbulb, Database, Code, GitBranch, ClipboardCheck, Server, ArrowRight } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Understanding the Problem", description: "Defining the core problem, outlining main features, and ensuring goals are crystal clear before writing any code.", gradient: "from-yellow-500 to-orange-500", number: "01" },
  { icon: Database, title: "Designing the Database", description: "Modeling the database with relationships, constraints, and normalization to ensure scalability and clean logic across the entire system.", gradient: "from-blue-500 to-cyan-500", number: "02" },
  { icon: Code, title: "Building Core Features", description: "Developing modules one by one using clean architecture principles, focusing on reusable services, controllers, and consistent API structures.", gradient: "from-violet-500 to-purple-500", number: "03" },
  { icon: GitBranch, title: "Versioning & Collaboration", description: "Each feature developed in a dedicated Git branch, ensuring clean commit history and easier collaboration or future maintenance.", gradient: "from-pink-500 to-rose-500", number: "04" },
  { icon: ClipboardCheck, title: "Testing & QA Workflow", description: "Testing APIs using Postman, reviewing error handling & validations, ensuring each feature behaves correctly before deployment.", gradient: "from-green-500 to-emerald-500", number: "05" },
  { icon: Server, title: "Deployment & Optimization", description: "Deploying to shared hosting or VPS, handling environment configuration, optimizing queries, and monitoring performance in production.", gradient: "from-indigo-500 to-blue-500", number: "06" },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } };

const TechTimeline = () => {
  return (
    <section
      id="how-i-build"
      className="relative py-20 lg:py-28 bg-white dark:bg-gray-950 overflow-hidden"
      aria-labelledby="tech-timeline-heading"
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
          <SectionTitle title="How I Build" subtitle="A clear process for creating reliable, scalable, and maintainable applications" centered={true} className="mb-16" />

          {/* Timeline */}
          <div className="relative">
            {/* Center connecting line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-violet-500 to-pink-500 -translate-x-1/2" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.article key={index} variants={itemVariants} whileHover={{ y: -4, transition: { duration: 0.3 } }}>
                  <div className={`relative flex items-start gap-6 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    {/* Left side - Number & Icon */}
                    <div className={`w-1/2 px-6 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
                      <div className="flex items-center justify-end gap-3">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 z-10 bg-gradient-to-br ${step.gradient} dark:bg-gradient-to-br ${step.gradient.replace("500", "400").replace("400", "500")}`}>
                          <step.icon className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-3xl font-extrabold bg-gradient-to-r ${step.gradient} dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent whitespace-nowrap">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Center dot (mobile only) */}
                    <div className="lg:hidden w-8 flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${step.gradient} border-4 border-white dark:border-gray-900 z-10 shadow-lg`} />
                    </div>

                    {/* Right side - Content */}
                    <div className="w-1/2 px-6 lg:pl-8 lg:pr-0">
                      <Card className={`w-full border-gray-200/50 dark:border-gray-700/50 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm`}>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                        </div>
                      </Card>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">Want to collaborate on a project? I'm always open to discussing new opportunities and interesting challenges.</p>
            <motion.a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 via-primary-500 to-violet-600 text-white rounded-2xl font-semibold text-lg shadow-xl shadow-primary-500/40 hover:shadow-primary-500/60 transition-all duration-300 border border-white/10" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
              Let's Work Together
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechTimeline;