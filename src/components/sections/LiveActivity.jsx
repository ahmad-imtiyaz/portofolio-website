"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, GitCommit, Star, GitFork, ExternalLink } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

const GITHUB_USERNAME = "ahmad-imtiyaz";
const HEATMAP_DAYS = 84;
const REQUEST_TIMEOUT_MS = 8000;
const MAX_RETRIES = 1;

// Fetch with timeout + 1 retry on network/5xx errors. No retry on 4xx.
async function fetchWithRetry(url, { timeoutMs = REQUEST_TIMEOUT_MS, retries = MAX_RETRIES } = {}) {
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, {
        signal: controller.signal,
        headers: { Accept: "application/vnd.github+json" },
      });
      clearTimeout(timer);
      if (!res.ok) {
        // 4xx = client error, don't retry. 5xx = transient, retry.
        if (res.status >= 400 && res.status < 500) {
          throw new Error(`HTTP ${res.status}`);
        }
        lastErr = new Error(`HTTP ${res.status}`);
      } else {
        return await res.json();
      }
    } catch (err) {
      clearTimeout(timer);
      // AbortError on timeout, or network error → retryable
      lastErr = err;
    }
    if (attempt < retries) await new Promise((r) => setTimeout(r, 400 * (attempt + 1)));
  }
  throw lastErr;
}

const LiveActivity = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [contributions, setContributions] = useState({}); // date -> count
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Profile
        const profileData = await fetchWithRetry(`/gh/users/${GITHUB_USERNAME}`);
        if (cancelled) return;
        setProfile(profileData);

        // Repos (single page, per_page=100 covers most users)
        const reposData = await fetchWithRetry(
          `/gh/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
        );
        if (cancelled) return;
        setRepos(Array.isArray(reposData) ? reposData : []);

        // Contributions: paginate events until we exit the 84-day window or hit empty page
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - HEATMAP_DAYS);
        const counts = {};
        let page = 1;
        const maxPages = 4; // safety cap = 400 events

        while (page <= maxPages) {
          const events = await fetchWithRetry(
            `/gh/users/${GITHUB_USERNAME}/events/public?per_page=100&page=${page}`
          );
          if (!Array.isArray(events) || events.length === 0) break;

          let allOlder = true;
          for (const ev of events) {
            const day = ev.created_at?.split("T")[0];
            if (!day) continue;
            const dayDate = new Date(day);
            if (dayDate >= cutoff) {
              allOlder = false;
              counts[day] = (counts[day] || 0) + 1;
            }
          }
          if (allOlder) break; // all events on this page are older than window
          page++;
        }

        if (!cancelled) setContributions(counts);
      } catch (err) {
        if (!cancelled) setError(err.message || "Failed to load GitHub data");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();
    return () => { cancelled = true; };
  }, []);

  // ----- Loading state -----
  if (loading) {
    return (
      <section className="relative py-20 lg:py-28 bg-white dark:bg-gray-950 overflow-hidden" aria-labelledby="github-heading">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 dark:bg-primary-900/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 dark:bg-violet-900/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 noise-overlay" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="GitHub Activity" subtitle="Real-time contributions, stats & repositories" centered={true} className="mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="p-6 text-center animate-pulse">
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-xl mx-auto mb-3" />
                <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-1" />
                <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded mx-auto" />
              </Card>
            ))}
          </div>
          <Card className="p-8"><div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" /></Card>
        </div>
      </section>
    );
  }

  // ----- Error / no-profile fallback -----
  if (!profile) {
    return (
      <section className="relative py-20 lg:py-28 bg-white dark:bg-gray-950 overflow-hidden" aria-labelledby="github-heading">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 dark:bg-primary-900/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 dark:bg-violet-900/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 noise-overlay" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="GitHub Activity" subtitle="Connect with me on GitHub to see my latest work" centered={true} className="mb-16" />
          <Card className="p-8 md:p-12 text-center border border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <div className="mx-auto mb-6 w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
              <Activity className="w-10 h-10 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Live Data Unavailable</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2 max-w-md mx-auto">
              {error ? `Couldn't fetch GitHub data: ${error}` : "Unable to fetch live GitHub stats right now."}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-6 max-w-md mx-auto">
              Visit my GitHub profile directly for the latest activity.
            </p>
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-violet-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300">
              <GitCommit className="w-5 h-5" /> View GitHub Profile
            </a>
          </Card>
        </div>
      </section>
    );
  }

  // ----- Success state -----
  const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
  const totalForks = repos.reduce((sum, r) => sum + (r.forks_count || 0), 0);
  const hasContributions = Object.keys(contributions).length > 0;

  const stats = [
    { icon: GitCommit, label: "Public Repos", value: profile.public_repos, gradient: "from-green-500 to-emerald-500", darkGradient: "from-green-400 to-emerald-400" },
    { icon: Star, label: "Total Stars", value: totalStars, gradient: "from-yellow-500 to-orange-500", darkGradient: "from-yellow-400 to-orange-400" },
    { icon: GitFork, label: "Total Forks", value: totalForks, gradient: "from-blue-500 to-cyan-500", darkGradient: "from-blue-400 to-cyan-400" },
    { icon: Activity, label: "Followers", value: profile.followers, gradient: "from-purple-500 to-pink-500", darkGradient: "from-purple-400 to-pink-400" },
  ];

  const today = new Date();
  const last84 = [...Array(HEATMAP_DAYS)].map((_, i) => {
    const d = new Date();
    d.setDate(today.getDate() - (HEATMAP_DAYS - 1 - i));
    return d.toISOString().split("T")[0];
  });

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } };

  return (
    <section
      id="github-activity"
      className="relative py-20 lg:py-28 bg-white dark:bg-gray-950 overflow-hidden"
      aria-labelledby="github-heading"
    >
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
          <SectionTitle title="GitHub Activity" subtitle="Real-time contributions, stats & repositories" centered={true} className="mb-16" />

          {/* Stats Cards */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map(({ icon: Icon, label, value, gradient, darkGradient }) => (
              <motion.div key={label} variants={itemVariants} whileHover={{ y: -4, transition: { duration: 0.3 } }}>
                <Card className="p-6 text-center h-full border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <div className={`w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${gradient} dark:bg-gradient-to-br ${darkGradient}`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* GitHub Stats Overview (3rd-party cards, fail silently via onError) */}
          <motion.div variants={itemVariants} className="mb-12">
            <Card className="p-8 border border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">GitHub Stats Overview</h3>
              <div className="flex flex-col items-center gap-6">
                <img
                  src={`https://github-readme-stats-salesp07.vercel.app/api?username=${GITHUB_USERNAME}&theme=radical&hide_border=false&include_all_commits=true&count_private=true&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9&icon_color=58a6ff`}
                  className="rounded-xl max-w-full border border-gray-200/50 dark:border-gray-700/50"
                  alt="GitHub Stats"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <img
                  src={`https://streak-stats.vercel.app/?user=${GITHUB_USERNAME}&theme=radical&background=0d1117&stroke=58a6ff&ring=58a6ff&fire=58a6ff&currStreakLabel=58a6ff`}
                  className="rounded-xl max-w-full border border-gray-200/50 dark:border-gray-700/50"
                  alt="GitHub Streak Stats"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <img
                  src={`https://github-readme-stats-salesp07.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&theme=radical&layout=compact&hide_border=false&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9`}
                  className="rounded-xl max-w-full border border-gray-200/50 dark:border-gray-700/50"
                  alt="Top Languages"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
            </Card>
          </motion.div>

          {/* Contribution Heatmap */}
          {hasContributions && (
            <motion.div variants={itemVariants}>
              <Card className="p-8 border border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Contribution Heatmap (Last 12 Weeks)
                </h3>
                <div className="flex flex-wrap gap-0.5 justify-center">
                  {last84.map((date) => {
                    const count = contributions[date] || 0;
                    let level = 0;
                    if (count > 0) level = 1;
                    if (count >= 3) level = 2;
                    if (count >= 6) level = 3;
                    if (count >= 10) level = 4;
                    return (
                      <motion.div
                        key={date}
                        whileHover={{ scale: 2, zIndex: 10, transition: { duration: 0.15 } }}
                        className={`w-2.5 h-2.5 rounded-sm transition-colors cursor-help ${
                          level === 0 ? "bg-gray-200 dark:bg-gray-700" :
                          level === 1 ? "bg-emerald-300 dark:bg-emerald-800" :
                          level === 2 ? "bg-emerald-400 dark:bg-emerald-700" :
                          level === 3 ? "bg-emerald-500 dark:bg-emerald-600" :
                          "bg-emerald-600 dark:bg-emerald-500"
                        }`}
                        title={`${count} contributions on ${date}`}
                      />
                    );
                  })}
                </div>
                <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-gray-200 dark:bg-gray-700" /> Less</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-emerald-600 dark:bg-emerald-500" /> More</span>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Profile Link */}
          <motion.div variants={itemVariants} className="text-center mt-8">
            <motion.a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-violet-600 text-white rounded-2xl font-semibold text-lg shadow-xl shadow-primary-500/40 hover:shadow-primary-500/60 transition-all duration-300 border border-white/10"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-5 h-5" /> View Full GitHub Profile
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveActivity;
