// Blog page with article listings
import { Calendar, Clock, ArrowRight } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import { blogPosts } from "../../data/blog";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Blog & Articles"
          subtitle="Thoughts on web development and technology"
        />

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1 h-64 md:h-auto">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:col-span-2 p-6">
                  {post.featured && (
                    <span className="inline-block px-3 py-1 bg-primary-600 text-white rounded-full text-sm font-medium mb-3">
                      Featured
                    </span>
                  )}

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {post.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{post.publishedDate}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </span>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline font-medium">
                    <span>Read More</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
