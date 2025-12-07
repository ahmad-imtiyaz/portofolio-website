// Blog articles and posts
export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications: Best Practices for 2024",
    slug: "scalable-react-applications-2024",
    excerpt:
      "Learn essential patterns and practices for building maintainable React applications that scale. From component architecture to state management, discover the strategies that top companies use.",
    content: `
      In this comprehensive guide, we'll explore the best practices for building scalable React applications in 2024. 
      As applications grow, maintaining code quality and performance becomes crucial...
      
      ## Component Architecture
      - Use composition over inheritance
      - Keep components small and focused
      - Implement proper prop drilling solutions
      
      ## State Management
      - Choose the right tool (Context, Redux, Zustand)
      - Avoid unnecessary global state
      - Optimize re-renders
      
      ## Performance Optimization
      - Code splitting and lazy loading
      - Memoization strategies
      - Virtual scrolling for large lists
    `,
    author: "Your Name",
    publishedDate: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "JavaScript", "Web Development", "Best Practices"],
    image: "src/assets/images/blog-1.jpg",
    imageAlt: "React code on screen with component architecture diagram",
    featured: true,
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS: From Basics to Advanced Techniques",
    slug: "mastering-tailwind-css",
    excerpt:
      "A deep dive into Tailwind CSS, exploring utility-first design principles, custom configurations, and advanced patterns that will transform your styling workflow.",
    content: `
      Tailwind CSS has revolutionized how we approach styling in modern web development.
      In this article, we'll go beyond the basics and explore advanced techniques...
      
      ## Why Tailwind?
      - Utility-first approach
      - Consistency across projects
      - Reduced CSS bundle size
      
      ## Advanced Patterns
      - Custom components with @apply
      - Dynamic class generation
      - Plugin development
      
      ## Performance Tips
      - PurgeCSS configuration
      - JIT mode benefits
      - Production optimization
    `,
    author: "Your Name",
    publishedDate: "2024-01-08",
    readTime: "6 min read",
    category: "CSS",
    tags: ["Tailwind", "CSS", "Design", "Frontend"],
    image: "src/assets/images/blog-2.jpg",
    imageAlt: "Tailwind CSS utility classes and responsive design examples",
    featured: true,
  },
];
