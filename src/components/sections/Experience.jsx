// Experience and Education timeline section
import { Briefcase, GraduationCap } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import { experience, education } from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experience & Education"
          subtitle="My professional journey"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h3>
            </div>
            <div className="space-y-6">
              {experience.map((job) => (
                <Card key={job.id} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {job.title}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {job.company}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {job.location}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap">
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
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {edu.location}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap">
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
        </div>
      </div>
    </section>
  );
};

export default Experience;
