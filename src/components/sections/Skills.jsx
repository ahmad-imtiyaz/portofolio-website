// Skills section with progress bars organized by category
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Technologies I work with"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category) => (
            <Card key={category.category} className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 font-medium">
                        <span className="text-2xl">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
