import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, ExternalLink } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Performance Marketing Trends 2024: What You Need to Know',
      excerpt: 'Discover the latest trends in performance marketing that will shape your digital strategy in 2024 and beyond.',
      category: 'Digital Marketing',
      author: 'Adswadi Team',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: '/blog/performance-marketing-2024.jpg',
      featured: true,
      content: `
        <h2>The Future of Performance Marketing is Here</h2>
        <p>As we navigate through 2024, the digital marketing landscape continues to evolve at an unprecedented pace. Performance marketing, once considered a niche strategy, has now become the cornerstone of successful digital campaigns.</p>
        
        <h3>Key Trends Shaping 2024</h3>
        <ul>
          <li><strong>AI-Powered Optimization:</strong> Machine learning algorithms are now capable of real-time campaign optimization, delivering better results with minimal human intervention.</li>
          <li><strong>Privacy-First Approach:</strong> With increasing privacy regulations, marketers are adopting cookieless tracking solutions and first-party data strategies.</li>
          <li><strong>Cross-Platform Attribution:</strong> Advanced attribution models are helping marketers understand the true customer journey across multiple touchpoints.</li>
          <li><strong>Video-First Content:</strong> Short-form video content is dominating social media platforms, requiring marketers to adapt their strategies accordingly.</li>
        </ul>
        
        <h3>What This Means for Your Business</h3>
        <p>To stay competitive in 2024, businesses need to embrace these trends and adapt their marketing strategies. The key is to focus on data-driven decision making while maintaining creativity in your campaigns.</p>
        
        <h3>Actionable Steps</h3>
        <ol>
          <li>Implement AI-powered tools for campaign optimization</li>
          <li>Develop a privacy-first data strategy</li>
          <li>Invest in video content creation</li>
          <li>Focus on cross-platform attribution</li>
        </ol>
        
        <p>At Adswadi, we're helping businesses navigate these changes and implement cutting-edge performance marketing strategies that drive real results.</p>
      `
    },
    {
      id: 2,
      title: 'Facebook Ads vs Google Ads: Which Platform Delivers Better ROI?',
      excerpt: 'A comprehensive comparison of Facebook Ads and Google Ads to help you choose the right platform for your business.',
      category: 'Paid Advertising',
      author: 'Adswadi Team',
      date: 'March 10, 2024',
      readTime: '7 min read',
      image: '/blog/facebook-vs-google-ads.jpg',
      content: `
        <h2>The Great Advertising Debate: Facebook vs Google</h2>
        <p>One of the most common questions we get from our clients is: "Which advertising platform should I use - Facebook Ads or Google Ads?" The answer isn't always straightforward, as both platforms have their unique strengths and use cases.</p>
        
        <h3>Facebook Ads: The Social Media Powerhouse</h3>
        <p>Facebook Ads excel at brand awareness and reaching new audiences. With its sophisticated targeting options and visual appeal, Facebook is perfect for:</p>
        <ul>
          <li>Building brand awareness</li>
          <li>Targeting specific demographics</li>
          <li>Visual product showcases</li>
          <li>Retargeting website visitors</li>
        </ul>
        
        <h3>Google Ads: The Search Intent Champion</h3>
        <p>Google Ads is the king of capturing high-intent users who are actively searching for your products or services. It's ideal for:</p>
        <ul>
          <li>Capturing search intent</li>
          <li>High-converting campaigns</li>
          <li>Local business advertising</li>
          <li>Product-specific searches</li>
        </ul>
        
        <h3>ROI Comparison</h3>
        <p>Based on our client data, here's what we've observed:</p>
        <ul>
          <li><strong>Facebook Ads:</strong> Average ROAS of 2.5x-4x for brand awareness campaigns</li>
          <li><strong>Google Ads:</strong> Average ROAS of 3x-6x for search campaigns</li>
        </ul>
        
        <h3>Our Recommendation</h3>
        <p>The best approach is often a combination of both platforms. Use Facebook for top-of-funnel awareness and Google for bottom-of-funnel conversions. This multi-channel strategy typically delivers 20-30% better overall ROI.</p>
      `
    },
    {
      id: 3,
      title: 'How to Scale Your E-commerce Business with Digital Marketing',
      excerpt: 'Learn proven strategies to scale your e-commerce business using data-driven digital marketing techniques.',
      category: 'E-commerce',
      author: 'Adswadi Team',
      date: 'March 5, 2024',
      readTime: '6 min read',
      image: '/blog/ecommerce-scaling.jpg',
      content: `
        <h2>Scaling Your E-commerce Empire: A Strategic Guide</h2>
        <p>E-commerce businesses face unique challenges when it comes to scaling. Unlike traditional businesses, you need to master digital marketing, customer acquisition, and retention simultaneously.</p>
        
        <h3>Foundation First: Optimize Your Funnel</h3>
        <p>Before scaling, ensure your conversion funnel is optimized:</p>
        <ul>
          <li>Landing page conversion rate > 2%</li>
          <li>Cart abandonment rate < 70%</li>
          <li>Checkout completion rate > 80%</li>
        </ul>
        
        <h3>Customer Acquisition Strategies</h3>
        <p>Implement these proven strategies:</p>
        <ol>
          <li><strong>Google Shopping Ads:</strong> High-intent product searches</li>
          <li><strong>Facebook Dynamic Ads:</strong> Retargeting and lookalike audiences</li>
          <li><strong>Influencer Partnerships:</strong> Authentic brand promotion</li>
          <li><strong>Content Marketing:</strong> SEO-driven product guides</li>
        </ol>
        
        <h3>Retention is Key</h3>
        <p>Don't just focus on new customers. Implement retention strategies:</p>
        <ul>
          <li>Email marketing automation</li>
          <li>Loyalty programs</li>
          <li>Personalized recommendations</li>
          <li>Exceptional customer service</li>
        </ul>
        
        <h3>Scaling Metrics to Track</h3>
        <p>Monitor these KPIs as you scale:</p>
        <ul>
          <li>Customer Acquisition Cost (CAC)</li>
          <li>Customer Lifetime Value (CLV)</li>
          <li>Return on Ad Spend (ROAS)</li>
          <li>Repeat Purchase Rate</li>
        </ul>
        
        <p>Remember, sustainable scaling requires a balance between growth and profitability. Focus on acquiring high-value customers who will become repeat buyers.</p>
      `
    },
    {
      id: 4,
      title: 'The Complete Guide to Local SEO for Small Businesses',
      excerpt: 'Master local SEO strategies to dominate your local market and attract more customers to your business.',
      category: 'SEO',
      author: 'Adswadi Team',
      date: 'February 28, 2024',
      readTime: '8 min read',
      image: '/blog/local-seo-guide.jpg',
      content: `
        <h2>Local SEO: Your Ticket to Local Market Domination</h2>
        <p>For small businesses, local SEO is often the most effective way to compete with larger corporations. When someone searches for your services in your area, you want to be the first business they see.</p>
        
        <h3>Google My Business Optimization</h3>
        <p>Your Google My Business profile is your digital storefront:</p>
        <ul>
          <li>Complete all profile information</li>
          <li>Add high-quality photos</li>
          <li>Encourage customer reviews</li>
          <li>Post regular updates</li>
        </ul>
        
        <h3>Local Keyword Research</h3>
        <p>Target these types of keywords:</p>
        <ul>
          <li>Service + Location (e.g., "plumber in Ranchi")</li>
          <li>Product + Location (e.g., "coffee shop near me")</li>
          <li>Long-tail variations (e.g., "best Italian restaurant in Ranchi city")</li>
        </ul>
        
        <h3>Local Content Strategy</h3>
        <p>Create content that resonates with your local audience:</p>
        <ol>
          <li>Local event coverage</li>
          <li>Community involvement stories</li>
          <li>Local business partnerships</li>
          <li>Area-specific service guides</li>
        </ol>
        
        <h3>Local Link Building</h3>
        <p>Build local authority through:</p>
        <ul>
          <li>Local business directories</li>
          <li>Chamber of commerce listings</li>
          <li>Local news mentions</li>
          <li>Community event sponsorships</li>
        </ul>
        
        <p>Local SEO takes time, but the results are worth it. Focus on providing value to your local community, and the rankings will follow.</p>
      `
    },
    {
      id: 5,
      title: 'Instagram Marketing Strategies for 2024: From 0 to 100K Followers',
      excerpt: 'Discover proven Instagram marketing strategies to grow your following and increase engagement in 2024.',
      category: 'Social Media',
      author: 'Adswadi Team',
      date: 'February 20, 2024',
      readTime: '9 min read',
      image: '/blog/instagram-marketing-2024.jpg',
      content: `
        <h2>Instagram Growth: The 2024 Playbook</h2>
        <p>Instagram continues to be one of the most powerful platforms for brand building and audience engagement. With over 2 billion monthly active users, the opportunity for growth is massive.</p>
        
        <h3>Content Strategy Fundamentals</h3>
        <p>Your content should follow the 80/20 rule:</p>
        <ul>
          <li>80% valuable, educational, or entertaining content</li>
          <li>20% promotional content</li>
        </ul>
        
        <h3>Reels: The Growth Engine</h3>
        <p>Reels are currently Instagram's top priority:</p>
        <ol>
          <li>Create trending content</li>
          <li>Use popular music</li>
          <li>Keep it under 30 seconds</li>
          <li>Add trending hashtags</li>
        </ol>
        
        <h3>Hashtag Strategy</h3>
        <p>Use a mix of hashtag types:</p>
        <ul>
          <li><strong>Branded:</strong> Your unique hashtags</li>
          <li><strong>Industry:</strong> General industry terms</li>
          <li><strong>Trending:</strong> Current popular hashtags</li>
          <li><strong>Location:</strong> Local area hashtags</li>
        </ul>
        
        <h3>Engagement Tactics</h3>
        <p>Increase engagement through:</p>
        <ul>
          <li>Respond to every comment within 1 hour</li>
          <li>Ask questions in captions</li>
          <li>Use interactive stickers in stories</li>
          <li>Collaborate with micro-influencers</li>
        </ul>
        
        <h3>Growth Timeline</h3>
        <p>Realistic expectations for growth:</p>
        <ul>
          <li>0-1K followers: 2-3 months</li>
          <li>1K-10K followers: 6-12 months</li>
          <li>10K-100K followers: 1-2 years</li>
        </ul>
        
        <p>Consistency is key. Post daily, engage with your audience, and stay authentic to your brand voice.</p>
      `
    },
    {
      id: 6,
      title: 'Automation in Digital Marketing: Tools and Strategies for Success',
      excerpt: 'Explore the best automation tools and strategies to streamline your digital marketing operations.',
      category: 'Automation',
      author: 'Adswadi Team',
      date: 'February 15, 2024',
      readTime: '6 min read',
      image: '/blog/marketing-automation.jpg',
      content: `
        <h2>Marketing Automation: Work Smarter, Not Harder</h2>
        <p>Marketing automation isn't just a buzzword—it's a necessity for businesses looking to scale their marketing efforts efficiently. By automating repetitive tasks, you can focus on strategy and creativity.</p>
        
        <h3>Essential Automation Tools</h3>
        <p>These tools should be in every marketer's toolkit:</p>
        <ul>
          <li><strong>Email Marketing:</strong> Mailchimp, ConvertKit, ActiveCampaign</li>
          <li><strong>Social Media:</strong> Buffer, Hootsuite, Later</li>
          <li><strong>CRM:</strong> HubSpot, Salesforce, Pipedrive</li>
          <li><strong>Analytics:</strong> Google Analytics, Mixpanel, Hotjar</li>
        </ul>
        
        <h3>Automation Workflows</h3>
        <p>Implement these key workflows:</p>
        <ol>
          <li><strong>Lead Nurturing:</strong> Automated email sequences based on behavior</li>
          <li><strong>Social Media:</strong> Scheduled posting and engagement</li>
          <li><strong>Customer Onboarding:</strong> Welcome series and product education</li>
          <li><strong>Retargeting:</strong> Automated ad campaigns for specific audiences</li>
        </ol>
        
        <h3>ROI of Automation</h3>
        <p>Automation delivers measurable results:</p>
        <ul>
          <li>Email automation: 320% increase in revenue</li>
          <li>Social media automation: 50% time savings</li>
          <li>Lead nurturing: 45% increase in qualified leads</li>
          <li>Customer retention: 30% improvement</li>
        </ul>
        
        <h3>Getting Started</h3>
        <p>Start small and scale up:</p>
        <ol>
          <li>Identify repetitive tasks</li>
          <li>Choose one tool to start with</li>
          <li>Create simple workflows</li>
          <li>Measure and optimize</li>
        </ol>
        
        <p>Remember, automation should enhance the human touch, not replace it. Use it to deliver more personalized experiences at scale.</p>
      `
    }
  ];

  const categories = ['All', 'Digital Marketing', 'Paid Advertising', 'E-commerce', 'SEO', 'Social Media', 'Automation'];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.02, 0.08, 0.02]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-green-100/40 to-emerald-100/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.03, 0.1, 0.03]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-gradient-to-r from-emerald-100/40 to-green-100/40 rounded-full blur-3xl"
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
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">
              Latest Insights & Strategies
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our expert insights on digital marketing, 
            performance optimization, and industry trends.
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
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Calendar className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold">Featured Post</h3>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-slate-500 text-sm">{blogPosts[0].readTime}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-slate-500 text-sm">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                    <Clock className="w-4 h-4 ml-3" />
                    {blogPosts[0].date}
                  </div>
                  <a
                    href="/blog"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <div className="text-center text-green-600">
                    <Calendar className="w-12 h-12 mx-auto mb-2 opacity-60" />
                    <p className="text-sm font-medium">Blog Post</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-slate-500 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 text-xs">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <a
                      href="/blog"
                      className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
                    >
                      Read More
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Dive Deeper?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Explore our complete blog library with hundreds of articles on digital marketing, 
              growth strategies, and industry insights.
            </p>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
