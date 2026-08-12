"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { certificates } from "../../data/certificates";
import { X, Award } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

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

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="certificates"
      className="relative py-20 lg:py-28 bg-white dark:bg-gray-950 overflow-hidden"
      aria-labelledby="certificates-heading"
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
            title="Certificates"
            subtitle="Achievements & recognitions"
            centered={true}
            className="mb-16"
          />

          {/* Certificates Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((item, index) => (
              <motion.article
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
              >
                <Card
                  className="overflow-hidden cursor-pointer h-full border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                  onClick={() => setSelected(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelected(item)}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/parent opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium bg-primary-600/90 text-white backdrop-blur-sm">
                      <Award className="w-3 h-3 inline mr-1" />
                      Certificate
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 text-sm leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
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
              onClick={() => setSelected(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="p-6 pt-4">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-primary-500" />
                <h2
                  id="cert-modal-title"
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  {selected.title}
                </h2>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {selected.description}
              </p>

              <img
                src={selected.image}
                alt={selected.title}
                className="w-full max-h-[500px] object-contain rounded-xl border border-gray-200/50 dark:border-gray-700/50"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Certificates;