// Technology stack timeline showing tech evolution
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

const TechTimeline = () => {
  const timeline = [
    {
      year: "2024",
      title: "Modern Stack",
      technologies: [
        "React 18",
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
      ],
      description: "Currently working with cutting-edge technologies",
    },
    {
      year: "2022",
      title: "Full Stack Evolution",
      technologies: ["React", "Redux", "Express.js", "MongoDB", "PostgreSQL"],
      description: "Expanded to full-stack development",
    },
    {
      year: "2020",
      title: "Frontend Specialization",
      technologies: ["JavaScript", "React", "Vue.js", "Sass", "Webpack"],
      description: "Focused on modern frontend frameworks",
    },
    {
      year: "2018",
      title: "Getting Started",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
      description: "Started web development journey",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Tech Stack Timeline"
          subtitle="My technology journey over the years"
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-900/30" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Year Badge */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary-600 text-white rounded-full items-center justify-center font-bold text-lg shadow-lg z-10">
                  {item.year}
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <Card className="p-6">
                    <div className="md:hidden text-primary-600 dark:text-primary-400 font-bold text-xl mb-3">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechTimeline;
