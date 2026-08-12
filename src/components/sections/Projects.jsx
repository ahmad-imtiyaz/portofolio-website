"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import MagicBento from "../cards/MagicBento";
import { projects } from "../../data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (selectedProject) setShowModal(true);
    else setShowModal(false);
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="relative py-20 lg:py-28 bg-white dark:bg-gray-950 overflow-hidden"
      aria-labelledby="projects-heading"
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
            title="Featured Projects"
            subtitle="A selection of projects I've built and worked on"
            centered={true}
            className="mb-16"
          />

          {/* Projects Grid — MagicBento */}
          <div className="mb-12">
            <MagicBento
              items={featuredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelectedProject(project)}
                  className="cursor-pointer flex flex-col h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {project.category && (
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium bg-primary-600/90 text-white backdrop-blur-sm">
                        {project.category}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2.5 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
              enableSpotlight
              enableBorderGlow
              enableParticles
              spotlightRadius={350}
              particleCount={8}
              glowColor="99, 102, 241"
            />
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center"
          >
            <motion.a
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 via-primary-500 to-violet-600 text-white rounded-2xl font-semibold text-lg shadow-xl shadow-primary-500/40 hover:shadow-primary-500/60 transition-all duration-300 border border-white/10"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-200/50 dark:border-gray-700/50"
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-gray-700/50 transition-colors z-10"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.imageAlt}
              className="w-full h-auto object-cover rounded-t-2xl"
            />

            <div className="p-6 pt-4">
              <h3
                id="modal-title"
                className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              >
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t dark:border-gray-700">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-violet-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;