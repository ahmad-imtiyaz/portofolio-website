import { useState, useEffect } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import { projects } from "../../data/projects";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  // Handle modal animation
  useEffect(() => {
    if (selectedProject) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="All Projects"
          subtitle="Browse my complete portfolio"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === category
                  ? "bg-primary-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${
              showModal ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Modal Content */}
          <div
            className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-3xl w-full p-6 z-10 overflow-y-auto max-h-[90vh]
              transform transition-all duration-300 ${
                showModal ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } sm:max-w-[90vw]`}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setSelectedProject(null)}
            >
              <X size={24} />
            </button>

            {/* Project Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.imageAlt}
              className="w-full h-auto object-contain rounded-lg mb-6" // <--- ganti sini
            />

            {/* Project Info */}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedProject.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {selectedProject.longDescription}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex space-x-4 mt-4">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline"
                >
                  <ExternalLink size={16} />
                  <span>Live Website</span>
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
