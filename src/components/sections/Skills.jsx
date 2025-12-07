import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Tech Stack"
          subtitle="Skills & Tools I Use Daily"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category) => (
            <Card key={category.category} className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {category.items.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-3">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {skill.name}
                    </span>
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
