// Live GitHub activity and stats section
import { Activity, GitCommit, Star, GitFork } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

const LiveActivity = () => {
  const stats = [
    {
      icon: GitCommit,
      label: "Total Commits",
      value: "2,547",
      color: "text-green-600",
    },
    {
      icon: Star,
      label: "Stars Earned",
      value: "342",
      color: "text-yellow-600",
    },
    {
      icon: GitFork,
      label: "Repositories",
      value: "67",
      color: "text-blue-600",
    },
    {
      icon: Activity,
      label: "Contributions",
      value: "1,829",
      color: "text-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Live Activity"
          subtitle="My recent GitHub contributions"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map(({ icon: Icon, label, value, color }) => (
            <Card key={label} className="p-6 text-center">
              <Icon className={`w-10 h-10 ${color} mx-auto mb-3`} />
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {value}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {label}
              </p>
            </Card>
          ))}
        </div>

        <Card className="p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Activity className="w-6 h-6 mr-2 text-primary-600" />
            Contribution Heatmap
          </h3>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
              GitHub Contribution Graph Placeholder
            </p>
            <div className="grid grid-cols-12 gap-2">
              {[...Array(84)].map((_, i) => (
                <div
                  key={i}
                  className={`h-4 rounded ${
                    Math.random() > 0.7
                      ? "bg-green-600"
                      : Math.random() > 0.5
                      ? "bg-green-500"
                      : Math.random() > 0.3
                      ? "bg-green-300"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-4 text-center">
              Connect your GitHub account to display real-time contribution data
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LiveActivity;
