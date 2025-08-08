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
    date: "August 08, 2025",
    color: "bg-purple-500",
    image: "/blog/About_Adswadi_blog.jpeg",
    tags: ["Adswadi", "Company", "Story"],
    fullContent: `
      <div style="text-align: center; margin-bottom: 2rem;">
        <img src="/blog/About_Adswadi_blog.jpeg" alt="About Adswadi - Performance Marketing Agency" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" />
      </div>
      
      <h2>🧠 About Adswadi – India's Performance-Driven Meta & Google Ads Agency</h2>
      <p>Welcome to Adswadi – a modern digital advertising agency born in Ranchi, now empowering brands across India with high-performance Meta Ads, Google Ads, and ROI-first marketing strategies.</p>

      <p>In a saturated market of generic ad vendors, Adswadi stands apart as your growth partner – blending creativity, precision, and analytics to turn every ad rupee into real business results.</p>

      <h2>🚀 Who We Are</h2>
      <p>Adswadi started with a bold vision — to help small and medium Indian businesses leverage performance marketing to scale profitably. Our team, headquartered in Ranchi, works with brands across eCommerce, EdTech, coaching, and local businesses, delivering tailored advertising strategies that maximize ROAS, lower CAC, and turn clicks into conversions.</p>

      <p><strong>We're not just marketers. We're performance partners.</strong></p>

      <h2>✅ What We Do: Core Services at Adswadi</h2>
      <p>At Adswadi, we offer a full-funnel advertising stack, modeled after India's top-performing agencies, with a razor-sharp focus on performance marketing:</p>

      <h3>Meta Ads (Facebook & Instagram Ads)</h3>
      <p>Custom campaigns built to scale awareness, drive engagement, and convert audiences at the lowest cost.</p>

      <h3>Google Ads (Search, Display, YouTube)</h3>
      <p>Targeted PPC strategies that capture high-intent leads and boost visibility on the world's biggest search engine.</p>

      <h3>Landing Page Design & Conversion Rate Optimization</h3>
      <p>Performance-focused landing pages crafted to convert clicks into customers — fast-loading, mobile-first, and tracked to the pixel.</p>

      <h3>SEO & Organic Visibility Boost</h3>
      <p>Complement your paid strategy with technical SEO and content optimization that builds long-term brand equity.</p>

      <h3>Creative Ad Design & Copywriting</h3>
      <p>Scroll-stopping visuals and ad copy that speaks directly to your audience across platforms.</p>

      <h3>Analytics & Real-Time Reporting</h3>
      <p>We give clients full visibility with live dashboards, conversion metrics, CTRs, cost-per-lead breakdowns, and ROAS tracking.</p>

      <p>Whether you're launching a new product or scaling an existing one, Adswadi builds data-driven campaigns that bring measurable returns.</p>

      <h2>🎯 Our Differentiator: Performance-First Advertising</h2>
      <p>What sets Adswadi apart from generic ad service providers?</p>

      <ul>
        <li>🔹 We treat your ad budget like our own.</li>
        <li>🔹 We optimize campaigns daily — not monthly.</li>
        <li>🔹 We chase results — not vanity metrics.</li>
      </ul>

      <p>Following the footsteps of elite Indian ad firms like Adymize, Social Beat, and ROI Minds, we've built our reputation around outcome-based marketing. That means:</p>

      <ul>
        <li>Real-time performance dashboards</li>
        <li>Transparent ROAS reporting</li>
        <li>Weekly optimization cycles</li>
        <li>A/B testing & audience segmentation</li>
        <li>Automated retargeting funnels</li>
      </ul>

      <p><strong>We don't just "run ads." We deliver outcomes.</strong></p>

      <h2>💼 Client Success & Reach</h2>
      <p>Like top agencies across India, Adswadi's success is rooted in real client wins. From helping an EdTech startup reduce CAC by 47%, to scaling an eCommerce brand to ₹15L/month revenue via Meta ads, our results speak louder than pitches.</p>

      <p>While we began in Ranchi, our strategies have helped clients scale across major metros like Delhi, Mumbai, Bengaluru, Kolkata, and Hyderabad — all with ROI-focused digital campaigns.</p>

      <p>Whether it's a coaching institute aiming for local lead generation, or a D2C brand targeting pan-India reach — we've done it, and scaled it.</p>

      <h2>🔒 Why Brands Trust Adswadi</h2>
      <p>Top Indian agencies emphasize trust signals — and so do we:</p>

      <ul>
        <li>✅ Meta Business Partner (pending)</li>
        <li>✅ Certified Google Ads Professionals</li>
        <li>✅ Transparent campaign reporting & access</li>
        <li>✅ Performance case studies (upon request)</li>
        <li>✅ Live support and campaign collaboration</li>
      </ul>

      <p>We're currently expanding partnerships with automation platforms, CRM tools, and analytics suites to ensure clients get full-stack campaign execution + visibility.</p>

      <h2>🧠 Our Promise: Measurable Growth, Not Marketing Hype</h2>
      <p>Adswadi isn't an ad agency. We're a revenue agency.</p>

      <p>We speak the language of:</p>

      <ul>
        <li><strong>ROAS</strong> (Return on Ad Spend)</li>
        <li><strong>CTR</strong> (Click Through Rate)</li>
        <li><strong>CPL</strong> (Cost per Lead)</li>
        <li><strong>AOV</strong> (Average Order Value)</li>
        <li><strong>LTV</strong> (Lifetime Value)</li>
      </ul>

      <p>And we're obsessed with improving every one of them — week by week.</p>

      <h2>🔗 Let's Grow Together</h2>
      <p>Whether you're a local business looking to dominate your city, or a national D2C brand scaling across India — Adswadi is built to help you grow profitably with precision marketing.</p>

      <ul>
        <li>👉 Book a free ad strategy session</li>
        <li>👉 Explore our success stories</li>
        <li>👉 Get a custom ROAS projection</li>
      </ul>

      <h2>🏷 SEO Tags & Search Triggers Embedded:</h2>
      <p>Digital marketing agency in India, Meta Ads expert India, Google Ads agency Ranchi, Performance marketing services India, ROI-focused digital marketing agency, Facebook ads agency for eCommerce, Instagram ads for coaching institutes, Google ads for local businesses India, Full-service advertising agency India, Best digital marketing partner in Ranchi</p>
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
                    <span className="text-sm">August 08, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock size={16} />
                    <span className="text-sm">5 min read</span>
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
              <div className="relative overflow-hidden">
                <img 
                  src="/blog/About_Adswadi_blog.jpeg" 
                  alt="About Adswadi - Performance Marketing Agency" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-semibold mb-2">Performance Marketing</h4>
                  <p className="text-white/90">Expert insights & strategies</p>
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
              <div className="relative overflow-hidden h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
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