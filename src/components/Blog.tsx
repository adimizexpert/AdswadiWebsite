import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, TrendingUp, Target, BarChart3 } from 'lucide-react';

// Blog content for the performance marketing guide
const performanceMarketingContent = {
  title: "The Ultimate Guide to Performance Marketing in 2024",
  excerpt: "Master the art of performance marketing with our comprehensive guide covering the latest trends, tools, and strategies that are driving results in 2024.",
  content: `
    <h2>Introduction to Performance Marketing</h2>
    <p>Performance marketing has evolved significantly in 2024, becoming the cornerstone of successful digital advertising strategies. Unlike traditional marketing approaches, performance marketing focuses on measurable, trackable results that directly impact your business's bottom line.</p>

    <h2>What is Performance Marketing?</h2>
    <p>Performance marketing is a results-driven approach where advertisers pay only for specific actions or results, such as clicks, conversions, or sales. This model ensures maximum ROI and accountability in your marketing spend.</p>

    <h2>Key Components of Performance Marketing</h2>
    <h3>1. Data-Driven Decision Making</h3>
    <p>In 2024, successful performance marketing relies heavily on data analytics. Marketers must track and analyze:</p>
    <ul>
      <li>Conversion rates across different channels</li>
      <li>Customer acquisition costs (CAC)</li>
      <li>Return on ad spend (ROAS)</li>
      <li>Customer lifetime value (CLV)</li>
    </ul>

    <h3>2. Multi-Channel Attribution</h3>
    <p>Modern performance marketing requires understanding how different touchpoints contribute to conversions. Implement:</p>
    <ul>
      <li>Cross-channel tracking</li>
      <li>Attribution modeling</li>
      <li>Customer journey mapping</li>
    </ul>

    <h2>Top Performance Marketing Channels in 2024</h2>
    <h3>1. Google Ads</h3>
    <p>Google Ads remains the most effective performance marketing channel, offering:</p>
    <ul>
      <li>Search campaigns for high-intent users</li>
      <li>Display campaigns for brand awareness</li>
      <li>YouTube ads for video marketing</li>
      <li>Shopping campaigns for e-commerce</li>
    </ul>

    <h3>2. Meta Ads (Facebook & Instagram)</h3>
    <p>Meta's advertising platform excels in:</p>
    <ul>
      <li>Targeted audience segmentation</li>
      <li>Visual content marketing</li>
      <li>Retargeting campaigns</li>
      <li>Lead generation</li>
    </ul>

    <h3>3. TikTok Ads</h3>
    <p>The fastest-growing platform for:</p>
    <ul>
      <li>Gen Z and Millennial audiences</li>
      <li>Creative video content</li>
      <li>Viral marketing opportunities</li>
    </ul>

    <h2>Performance Marketing Strategies for 2024</h2>
    <h3>1. AI-Powered Optimization</h3>
    <p>Leverage artificial intelligence for:</p>
    <ul>
      <li>Automated bid management</li>
      <li>Dynamic creative optimization</li>
      <li>Predictive analytics</li>
      <li>Real-time campaign adjustments</li>
    </ul>

    <h3>2. Personalization at Scale</h3>
    <p>Use data to create personalized experiences:</p>
    <ul>
      <li>Dynamic content creation</li>
      <li>Behavioral targeting</li>
      <li>Custom audience segments</li>
      <li>Personalized landing pages</li>
    </ul>

    <h3>3. Conversion Rate Optimization (CRO)</h3>
    <p>Focus on improving conversion rates through:</p>
    <ul>
      <li>A/B testing</li>
      <li>User experience optimization</li>
      <li>Landing page design</li>
      <li>Checkout process optimization</li>
    </ul>

    <h2>Measuring Success in Performance Marketing</h2>
    <h3>Key Performance Indicators (KPIs)</h3>
    <ul>
      <li><strong>ROAS (Return on Ad Spend):</strong> Revenue generated per dollar spent on advertising</li>
      <li><strong>CAC (Customer Acquisition Cost):</strong> Total cost to acquire a new customer</li>
      <li><strong>CLV (Customer Lifetime Value):</strong> Total revenue expected from a customer</li>
      <li><strong>Conversion Rate:</strong> Percentage of visitors who complete desired actions</li>
      <li><strong>Click-Through Rate (CTR):</strong> Percentage of impressions that result in clicks</li>
    </ul>

    <h2>Tools and Technologies</h2>
    <h3>Essential Performance Marketing Tools</h3>
    <ul>
      <li><strong>Google Analytics 4:</strong> Comprehensive web analytics</li>
      <li><strong>Google Ads:</strong> Search and display advertising</li>
      <li><strong>Meta Business Manager:</strong> Social media advertising</li>
      <li><strong>Hotjar:</strong> User behavior analysis</li>
      <li><strong>Optimizely:</strong> A/B testing platform</li>
    </ul>

    <h2>Future Trends in Performance Marketing</h2>
    <h3>1. Privacy-First Marketing</h3>
    <p>With increasing privacy regulations, marketers must adapt to:</p>
    <ul>
      <li>First-party data strategies</li>
      <li>Privacy-compliant tracking</li>
      <li>Consent management</li>
    </ul>

    <h3>2. Voice Search Optimization</h3>
    <p>Optimize for voice search with:</p>
    <ul>
      <li>Natural language keywords</li>
      <li>Local SEO strategies</li>
      <li>Featured snippet optimization</li>
    </ul>

    <h3>3. Video Marketing Dominance</h3>
    <p>Video content continues to dominate with:</p>
    <ul>
      <li>Short-form video ads</li>
      <li>Live streaming commerce</li>
      <li>Interactive video experiences</li>
    </ul>

    <h2>Best Practices for 2024</h2>
    <ol>
      <li><strong>Start with Clear Goals:</strong> Define specific, measurable objectives</li>
      <li><strong>Know Your Audience:</strong> Create detailed buyer personas</li>
      <li><strong>Test Continuously:</strong> Implement ongoing A/B testing</li>
      <li><strong>Optimize for Mobile:</strong> Ensure mobile-first experiences</li>
      <li><strong>Focus on Quality Score:</strong> Improve ad relevance and landing page quality</li>
      <li><strong>Monitor and Adjust:</strong> Regular campaign analysis and optimization</li>
    </ol>

    <h2>Conclusion</h2>
    <p>Performance marketing in 2024 requires a data-driven, multi-channel approach that prioritizes measurable results. By implementing the strategies outlined in this guide, businesses can achieve sustainable growth and maximize their marketing ROI.</p>

    <p>At Adswadi, we specialize in performance marketing strategies that drive real results. Our team of experts helps businesses navigate the complex digital advertising landscape to achieve their growth objectives.</p>
  `
};

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Performance Marketing in 2024",
    excerpt: "Master the art of performance marketing with our comprehensive guide covering the latest trends, tools, and strategies that are driving results in 2024.",
    category: "Performance Marketing",
    readTime: "8 min read",
    date: "March 20, 2024",
    color: "bg-purple-500",
    tags: ["Performance Marketing", "2024", "Strategy"],
    fullContent: performanceMarketingContent.content
  },
  {
    id: 2,
    title: "Digital Marketing Trends in 2024",
    excerpt: "Stay ahead of the curve with the latest digital marketing trends that are shaping the industry and driving business growth in 2024.",
    category: "Digital Marketing",
    readTime: "5 min read",
    date: "March 18, 2024",
    color: "bg-blue-500",
    tags: ["Trends", "2024", "Marketing"]
  },
  {
    id: 3,
    title: "How to Choose the Right Marketing Agency",
    excerpt: "Essential tips and insights to help you select the perfect marketing agency that aligns with your business goals and budget requirements.",
    category: "Business",
    readTime: "4 min read",
    date: "March 15, 2024",
    color: "bg-green-500",
    tags: ["Agency", "Selection", "Business"]
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