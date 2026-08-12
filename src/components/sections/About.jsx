"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Sparkles, Brain } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

const highlights = [
  {
    icon: Code2,
    title: "Backend Developer",
    description: "Fokus pada Laravel, REST API, dan sistem berbasis server",
  },
  {
    icon: GraduationCap,
    title: "Mahasiswa Semester 5",
    description: "Universitas Ivet Semarang – Progres belajar konsisten",
  },
  {
    icon: Brain,
    title: "Problem Solver",
    description: "Try & error mindset, suka eksplor hal baru sampai berhasil",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 bg-white dark:bg-gray-950 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background subtle gradient */}
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
            title="About Me"
            subtitle="A small story about who I am"
            centered={false}
            className="mb-12 lg:mb-16"
          />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Photo Card */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-violet-500 to-pink-500 p-[1px] -z-10" />
                <img
                  src="/images/about-photo.jpg"
                  alt="Ahmad Imtiyaz – backend developer working on laptop"
                  className="w-full h-full object-cover relative rounded-2xl transition-transform duration-700 hover:scale-105 bg-gray-800"
                />
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-violet-900/30 to-transparent opacity-0 rounded-2xl"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, ease: "backOut" }}
                className="absolute -bottom-6 -right-6 px-5 py-3 bg-gradient-to-r from-primary-600 to-violet-600 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/40"
              >
                <div className="flex items-center gap-2">
                  <span className="relative w-2 h-2 bg-white/50 rounded-full animate-pulse" />
                  Backend Specialist
                </div>
              </motion.div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-300/20 dark:bg-primary-900/10 rounded-full blur-2xl" />
              <div className="absolute bottom-20 left-4 w-16 h-16 bg-violet-300/20 dark:bg-violet-900/10 rounded-full blur-2xl" />
            </motion.div>

            {/* Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 pt-4 lg:pt-0"
            >
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                I&apos;m <strong className="text-gray-900 dark:text-white">Ahmad Imtiyaz Najih</strong>, a backend developer who
                focuses on clean, efficient, and scalable systems — especially
                using <strong className="text-gray-900 dark:text-white">Laravel</strong> &{" "}
                <strong className="text-gray-900 dark:text-white">React</strong>. Saat ini aku masih berkuliah di
                <strong className="text-gray-900 dark:text-white"> Universitas Ivet Semarang semester 5</strong>, dan aktif
                mengembangkan berbagai proyek web sebagai latihan dan pengembangan
                skill profesional.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                Aku suka memecahkan masalah dengan pendekatan
                <strong className="text-gray-900 dark:text-white"> try & error</strong>. Kalau ada hal baru, aku pasti
                pengen nyoba. Mindset ini membuatku cepat beradaptasi dengan
                teknologi baru, entah itu di backend, full-stack, atau
                pengembangan fitur tertentu.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                Saat ini aku sering membangun aplikasi berbasis{" "}
                <strong className="text-gray-900 dark:text-white">Laravel + MySQL</strong>, membuat API, mengatur
                autentikasi, dashboard admin, dan sistem CRUD kompleks. Aku juga
                terus belajar front-end agar bisa menjadi{" "}
                <strong className="text-gray-900 dark:text-white">full-stack yang solid</strong>.
              </motion.p>

              {/* Highlights Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
              >
                {highlights.map(({ icon: Icon, title, description }) => (
                  <motion.article
                    key={title}
                    variants={itemVariants}
                    whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                    className="group"
                  >
                    <Card className="p-6 text-center h-full border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                      <motion.div
                        whileHover={{ scale: 1.1, transition: { duration: 0.3, ease: "backOut" } }}
                        className="mb-4"
                      >
                        <Icon className="w-10 h-10 gradient-text mx-auto" />
                      </motion.div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {description}
                      </p>
                    </Card>
                  </motion.article>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;