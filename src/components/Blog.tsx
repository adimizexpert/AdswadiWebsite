import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, TrendingUp, Target, BarChart3, X } from 'lucide-react';



const blogPosts = [
  {
    id: 1,
    title: "About Adswadi",
    excerpt: "Discover the story behind Adswadi - a leading digital marketing agency dedicated to helping businesses grow through innovative advertising strategies and performance-driven campaigns.",
    category: "Company",
    readTime: "3 min read",
    date: "March 20, 2024",
    color: "bg-purple-500",
    tags: ["Adswadi", "Company", "Story"],
    fullContent: `
      <h2>About Adswadi</h2>
      <p>Adswadi is a premier digital marketing agency founded with a vision to transform businesses through innovative advertising strategies and performance-driven campaigns. Based in Ranchi, India, we have established ourselves as a trusted partner for businesses seeking sustainable growth in the digital landscape.</p>

      <h2>Our Mission</h2>
      <p>At Adswadi, our mission is to empower businesses with data-driven marketing solutions that deliver measurable results. We believe in creating campaigns that not only drive traffic and conversions but also build lasting relationships with customers.</p>

      <h2>What We Do</h2>
      <h3>Performance Marketing</h3>
      <p>We specialize in performance marketing strategies that ensure you only pay for results. Our expertise includes:</p>
      <ul>
        <li>Google Ads optimization for maximum ROI</li>
        <li>Meta Ads campaigns for social media success</li>
        <li>Conversion rate optimization</li>
        <li>Multi-channel attribution modeling</li>
      </ul>

      <h3>Digital Marketing Services</h3>
      <p>Our comprehensive digital marketing services include:</p>
      <ul>
        <li>Search Engine Marketing (SEM)</li>
        <li>Social Media Marketing</li>
        <li>Content Marketing</li>
        <li>Email Marketing</li>
        <li>Analytics and Reporting</li>
      </ul>

      <h2>Our Approach</h2>
      <h3>Data-Driven Strategy</h3>
      <p>Every campaign we create is backed by comprehensive data analysis. We track, measure, and optimize every aspect of your marketing efforts to ensure maximum efficiency and ROI.</p>

      <h3>Client-Centric Focus</h3>
      <p>We believe in building long-term partnerships with our clients. Our team takes the time to understand your business goals, target audience, and unique challenges to create customized solutions.</p>

      <h3>Continuous Innovation</h3>
      <p>The digital marketing landscape is constantly evolving, and we stay ahead of the curve by embracing new technologies, platforms, and strategies that drive results.</p>

      <h2>Why Choose Adswadi?</h2>
      <h3>Proven Track Record</h3>
      <p>We have successfully helped numerous businesses across various industries achieve their marketing goals and drive sustainable growth.</p>

      <h3>Expert Team</h3>
      <p>Our team consists of certified professionals with years of experience in digital marketing, advertising, and analytics.</p>

      <h3>Transparent Communication</h3>
      <p>We believe in complete transparency with our clients. Regular reporting, clear communication, and honest feedback are the cornerstones of our client relationships.</p>

      <h3>Results-Oriented</h3>
      <p>We don't just create campaigns; we create campaigns that work. Our focus is always on delivering measurable results that impact your bottom line.</p>

      <h2>Our Values</h2>
      <ul>
        <li><strong>Excellence:</strong> We strive for excellence in everything we do</li>
        <li><strong>Innovation:</strong> We embrace new ideas and technologies</li>
        <li><strong>Integrity:</strong> We operate with honesty and transparency</li>
        <li><strong>Partnership:</strong> We build lasting relationships with our clients</li>
        <li><strong>Results:</strong> We focus on delivering measurable outcomes</li>
      </ul>

      <h2>Get Started with Adswadi</h2>
      <p>Ready to transform your digital marketing efforts? Contact us today to discuss how we can help your business grow and succeed in the digital landscape.</p>

      <p>Let's build your success story together!</p>
    `
  }
];

const Blog: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = React.useState<any>(null);
  const [showModal, setShowModal] = React.useState(false);

  const handleBlogClick = (blog: any) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };

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
                  About Adswadi
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Discover the story behind Adswadi - a leading digital marketing agency dedicated to helping businesses grow through innovative advertising strategies and performance-driven campaigns.
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
                  onClick={() => handleBlogClick(blogPosts[0])}
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
                    onClick={() => handleBlogClick(post)}
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

        {/* Blog Modal */}
        {showModal && selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-2 inline-block">
                      {selectedBlog.category}
                    </span>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                      {selectedBlog.title}
                    </h2>
                    <div className="flex items-center gap-4 text-slate-500 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="text-sm">{selectedBlog.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span className="text-sm">{selectedBlog.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    onClick={closeModal}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <X size={24} />
                  </motion.button>
                </div>
                
                {selectedBlog.fullContent && (
                  <div 
                    className="prose prose-lg max-w-none text-slate-700"
                    dangerouslySetInnerHTML={{ __html: selectedBlog.fullContent }}
                  />
                )}
                
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <motion.button
                    onClick={closeModal}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Close Article
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog; 