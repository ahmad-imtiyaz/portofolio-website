// How I Build Software Section
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import {
  Lightbulb,
  Database,
  Code,
  GitBranch,
  Server,
  ClipboardCheck,
} from "lucide-react";

const HowIBuild = () => {
  const steps = [
    {
      icon: (
        <Lightbulb className="w-8 h-8 text-primary-600 dark:text-primary-400" />
      ),
      title: "1. Understanding the Problem",
      description:
        "I start by defining the core problem, outlining the main features, and ensuring that the goals are crystal clear before writing any code.",
    },
    {
      icon: (
        <Database className="w-8 h-8 text-primary-600 dark:text-primary-400" />
      ),
      title: "2. Designing the Database",
      description:
        "I model the database with relationships, constraints, and normalization to ensure scalability and clean logic across the entire system.",
    },
    {
      icon: <Code className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      title: "3. Building the Core Features",
      description:
        "I develop modules one by one using clean architecture principles, focusing on reusable services, controllers, and consistent API structures.",
    },
    {
      icon: (
        <GitBranch className="w-8 h-8 text-primary-600 dark:text-primary-400" />
      ),
      title: "4. Versioning & Collaboration",
      description:
        "Each feature is developed in a dedicated Git branch, ensuring clean commit history and easier collaboration or future maintenance.",
    },
    {
      icon: (
        <ClipboardCheck className="w-8 h-8 text-primary-600 dark:text-primary-400" />
      ),
      title: "5. Testing & QA Workflow",
      description:
        "I test APIs using Postman, review error handling & validations, and ensure each feature behaves correctly before deployment.",
    },
    {
      icon: (
        <Server className="w-8 h-8 text-primary-600 dark:text-primary-400" />
      ),
      title: "6. Deployment & Optimization",
      description:
        "I deploy to shared hosting or VPS, handle environment configuration, optimize queries, and monitor performance in production.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="How I Build Software"
          subtitle="A clear process for creating reliable, scalable, and maintainable applications"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="mb-4">{step.icon}</div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIBuild;
