// Experience.jsx
import { GraduationCap, Briefcase } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import { education, internships } from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education & Internships"
          subtitle="Some highlights from my academic and professional journey"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.id} className="p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-4">
                    <div className="flex items-start space-x-3">
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className="w-12 h-12 sm:w-10 sm:h-10 object-contain rounded"
                      />

                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {edu.location}
                        </p>
                      </div>
                    </div>

                    <span className="text-sm text-gray-500 dark:text-gray-500 whitespace-normal text-left sm:text-right">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {edu.description}
                  </p>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-primary-600 dark:text-primary-400 mt-1">
                          •
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Internships / Work Experience */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Internships
              </h3>
            </div>

            <div className="space-y-6">
              {internships.map((job) => (
                <Card key={job.id} className="p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-4">
                    <div className="flex items-start space-x-3">
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="w-12 h-12 sm:w-10 sm:h-10 object-contain rounded"
                      />

                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                          {job.title}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {job.company}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {job.location}
                        </p>
                      </div>
                    </div>

                    <span className="text-sm text-gray-500 dark:text-gray-500 whitespace-normal text-left sm:text-right">
                      {job.period}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {job.description}
                  </p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-primary-600 dark:text-primary-400 mt-1">
                          •
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
