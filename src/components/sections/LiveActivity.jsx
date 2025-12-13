// Live Activity Section (Real GitHub Integration)
import { useEffect, useState } from "react";
import { Activity, GitCommit, Star, GitFork } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

const GITHUB_USERNAME = "ahmad-imtiyaz";

const LiveActivity = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [contributions, setContributions] = useState([]);

  // Fetch GitHub data
  useEffect(() => {
    // 1. User Profile
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch(() => setProfile(null));

    // 2. Repo list (stars, forks)
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`)
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch(() => setRepos([]));

    // 3. Contribution Heatmap API (SAFE & WORKING)
    fetch(`https://github-contributions.vercel.app/api/v1/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => setContributions(data.contributions || []))
      .catch(() => setContributions([]));
  }, []);

  if (!profile) return null;

  // SUM STARS & FORKS
  const totalStars = repos.reduce(
    (sum, r) => sum + (r.stargazers_count || 0),
    0
  );
  const totalForks = repos.reduce((sum, r) => sum + (r.forks_count || 0), 0);

  const stats = [
    {
      icon: GitCommit,
      label: "Public Repos",
      value: profile.public_repos,
      color: "text-green-600",
    },
    {
      icon: Star,
      label: "Total Stars",
      value: totalStars,
      color: "text-yellow-600",
    },
    {
      icon: GitFork,
      label: "Total Forks",
      value: totalForks,
      color: "text-blue-600",
    },
    {
      icon: Activity,
      label: "Followers",
      value: profile.followers,
      color: "text-purple-600",
    },
  ];

  // Heatmap helper
  const today = new Date();
  const last84 = [...Array(84)].map((_, i) => {
    const d = new Date();
    d.setDate(today.getDate() - (83 - i));
    return d.toISOString().split("T")[0];
  });

  const map = contributions.reduce((acc, c) => {
    acc[c.date] = c.count;
    return acc;
  }, {});

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Live GitHub Activity"
          subtitle="Real-time contributions, stats & repositories"
        />

        {/* Stats Cards */}
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

        {/* GitHub Stats Overview */}
        <Card className="p-8 mb-12">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            GitHub Stats Overview
          </h3>

          <div className="flex flex-col items-center gap-6">
            <img
              src={`https://github-readme-stats-salesp07.vercel.app/api?username=${GITHUB_USERNAME}&theme=radical&hide_border=false&include_all_commits=true&count_private=true`}
              className="rounded-lg"
              alt="GitHub Stats"
            />

            <img
              src={`https://streak-stats.vercel.app/?user=${GITHUB_USERNAME}&theme=radical`}
              className="rounded-lg"
              alt="GitHub Streak Stats"
            />

            <img
              src={`https://github-readme-stats-salesp07.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&theme=radical&layout=compact&hide_border=false`}
              className="rounded-lg"
              alt="Top Languages"
            />
          </div>
        </Card>

        {/* GitHub Contribution (SVG – Real Data) */}
        <Card className="p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Activity className="w-6 h-6 mr-2 text-primary-600" />
            GitHub Contributions (Last Year)
          </h3>

          {/* Wrapper for smooth dark mode */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
            <div className="w-full overflow-x-auto">
              <img
                src="https://ghchart.rshah.org/ahmad-imtiyaz"
                alt="GitHub Contribution Chart"
                className="w-full min-w-[700px] rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Footer + CTA */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Data sourced directly from GitHub • Updated automatically
            </p>

            <a
              href="https://github.com/ahmad-imtiyaz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              View GitHub Profile →
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LiveActivity;
