import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, TrendingUp, Target, BarChart3 } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "10 Proven Facebook Ad Strategies That Convert in 2024",
    excerpt: "Discover the latest Facebook advertising techniques that are driving real results for businesses this year. Learn how to optimize your campaigns for maximum ROI.",
    category: "Facebook Ads",
    readTime: "5 min read",
    date: "March 15, 2024",

    color: "bg-blue-500",
    tags: ["Facebook Ads", "ROI", "Conversion"]
  },
  {
    id: 2,
    title: "Google Ads vs Facebook Ads: Which Platform Should You Choose?",
    excerpt: "A comprehensive comparison of Google Ads and Facebook Ads to help you decide which platform is best for your business goals and budget.",
    category: "Digital Marketing",
    readTime: "7 min read",
    date: "March 12, 2024",

    color: "bg-purple-500",
    tags: ["Google Ads", "Facebook Ads", "Strategy"]
  },
  {
    id: 3,
    title: "The Complete Guide to Instagram Ads for E-commerce",
    excerpt: "Learn how to create high-converting Instagram ad campaigns that drive sales and grow your e-commerce business effectively.",
    category: "Instagram Ads",
    readTime: "6 min read",
    date: "March 10, 2024",

    color: "bg-pink-500",
    tags: ["Instagram", "E-commerce", "Sales"]
  },
  {
    id: 4,
    title: "How to Scale Your Ad Campaigns Without Increasing Budget",
    excerpt: "Smart strategies to scale your advertising campaigns and reach more customers without significantly increasing your ad spend.",
    category: "Campaign Optimization",
    readTime: "8 min read",
    date: "March 8, 2024",

    color: "bg-green-500",
    tags: ["Scaling", "Budget", "Optimization"]
  },
  {
    id: 5,
    title: "The Future of Digital Advertising: AI and Automation Trends",
    excerpt: "Explore how artificial intelligence and automation are reshaping the digital advertising landscape and what it means for your business.",
    category: "AI & Automation",
    readTime: "9 min read",
    date: "March 5, 2024",

    color: "bg-orange-500",
    tags: ["AI", "Automation", "Future"]
  },
  {
    id: 6,
    title: "Landing Page Optimization: 15 Elements That Drive Conversions",
    excerpt: "Master the art of landing page design with these proven optimization techniques that will significantly improve your conversion rates.",
    category: "Landing Pages",
    readTime: "10 min read",
    date: "March 3, 2024",

    color: "bg-indigo-500",
    tags: ["Landing Pages", "Conversion", "Design"]
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.02, 0.1, 0.02],
            rotate: [0, 45, 90]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.25, 1, 1.25],
            opacity: [0.03, 0.12, 0.03],
            rotate: [90, 45, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
        />

        {/* Reading Lines */}
        <motion.div
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/3 w-0.5 h-24 bg-gradient-to-b from-purple-400/50 to-blue-400/50"
        />
        <motion.div
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/2 right-1/3 w-0.5 h-20 bg-gradient-to-b from-blue-400/50 to-purple-400/50"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              Latest Insights & Strategies
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our expert insights on digital marketing, advertising strategies, and industry trends.
          </p>
        </motion.div>

        {/* Featured Blog Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-slate-500 text-sm">Digital Marketing</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  The Ultimate Guide to Performance Marketing in 2024
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Master the art of performance marketing with our comprehensive guide covering the latest trends, tools, and strategies that are driving results in 2024.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Calendar size={16} />
                    <span className="text-sm">March 18, 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock size={16} />
                    <span className="text-sm">12 min read</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  Read Full Article
                  <ArrowRight size={20} />
                </motion.button>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <h4 className="text-xl font-semibold mb-2">Performance Marketing</h4>
                  <p className="text-purple-100">Expert insights & strategies</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`${post.color} p-6 flex items-center justify-center`}>
                <TrendingUp className="text-white w-8 h-8" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Blog; 