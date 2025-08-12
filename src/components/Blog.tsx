import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, TrendingUp, Target, BarChart3, X } from 'lucide-react';
import AvifImage from './AvifImage.tsx';



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
  },
  {
    id: 2,
    title: "Facebook Ads vs Google Ads: Which Platform Should You Choose in 2025?",
    excerpt: "Discover the key differences between Facebook Ads and Google Ads, and learn which platform is best suited for your business goals and target audience in 2025.",
    category: "Advertising",
    readTime: "8 min read",
    date: "January 27, 2025",
    color: "bg-blue-500",
    image: "/blog/facebook-vs-google-ads-2025.jpg",
    tags: ["Facebook Ads", "Google Ads", "PPC", "Digital Advertising", "2025 Trends"],
    fullContent: `
      <div style="text-align: center; margin-bottom: 2rem;">
        <img src="/blog/facebook-vs-google-ads-2025.jpg" alt="Facebook Ads vs Google Ads Comparison 2025" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" />
      </div>
      
      <h2>🚀 Facebook Ads vs Google Ads: The Ultimate 2025 Comparison</h2>
      <p>In the ever-evolving digital advertising landscape, choosing between Facebook Ads and Google Ads can make or break your marketing success. As we enter 2025, both platforms have evolved significantly, making this decision even more critical for Indian businesses.</p>

      <h2>🎯 Understanding the Core Differences</h2>
      <h3>Facebook Ads: Social Discovery Platform</h3>
      <p>Facebook Ads excel at reaching users who aren't actively searching for your product or service. It's perfect for:</p>
      <ul>
        <li>Brand awareness campaigns</li>
        <li>Product discovery</li>
        <li>Audience building</li>
        <li>Retargeting campaigns</li>
        <li>Visual product showcases</li>
      </ul>

      <h3>Google Ads: Search Intent Platform</h3>
      <p>Google Ads targets users with high purchase intent who are actively searching for solutions:</p>
      <ul>
        <li>Search campaigns</li>
        <li>Shopping ads</li>
        <li>Local business promotion</li>
        <li>High-intent keyword targeting</li>
        <li>Performance marketing</li>
      </ul>

      <h2>💰 Cost Comparison: India Market 2025</h2>
      <p>Based on current Indian market data:</p>
      <ul>
        <li><strong>Facebook Ads:</strong> Average CPC ₹15-45, CPM ₹150-400</li>
        <li><strong>Google Ads:</strong> Average CPC ₹25-80, CPM ₹200-600</li>
      </ul>

      <h2>🎯 When to Use Facebook Ads</h2>
      <ul>
        <li>✅ Building brand awareness</li>
        <li>✅ E-commerce product launches</li>
        <li>✅ B2B lead generation</li>
        <li>✅ Local business promotion</li>
        <li>✅ Visual content marketing</li>
      </ul>

      <h2>🎯 When to Use Google Ads</h2>
      <ul>
        <li>✅ High-intent search terms</li>
        <li>✅ Local business searches</li>
        <li>✅ E-commerce shopping</li>
        <li>✅ Service-based businesses</li>
        <li>✅ Performance marketing</li>
      </ul>

      <h2>🏆 Our Recommendation for Indian Businesses</h2>
      <p>For most Indian businesses, we recommend a <strong>hybrid approach</strong>:</p>
      <ul>
        <li>Use Facebook Ads for top-of-funnel awareness</li>
        <li>Use Google Ads for bottom-of-funnel conversions</li>
        <li>Allocate 60% budget to Google Ads, 40% to Facebook Ads</li>
      </ul>

      <h2>🔍 SEO Tags:</h2>
      <p>Facebook Ads vs Google Ads India, PPC platform comparison 2025, Digital advertising strategy India, Facebook Ads agency Mumbai, Google Ads agency Delhi, Performance marketing India</p>
    `
  },
  {
    id: 3,
    title: "10 Proven Facebook Ads Strategies That Increased ROAS by 300% in 2024",
    excerpt: "Learn the exact Facebook Ads strategies that helped our clients achieve 300% ROAS improvement. Discover audience targeting, creative optimization, and bidding strategies that work in 2025.",
    category: "Facebook Ads",
    readTime: "12 min read",
    date: "January 26, 2025",
    color: "bg-green-500",
    image: "/blog/facebook-ads-roas-strategies.jpg",
    tags: ["Facebook Ads", "ROAS", "Performance Marketing", "Audience Targeting", "Ad Optimization"],
    fullContent: `
      <div style="text-align: center; margin-bottom: 2rem;">
        <img src="/blog/facebook-ads-roas-strategies.jpg" alt="Facebook Ads ROAS Strategies 2025" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" />
      </div>
      
      <h2>🚀 10 Facebook Ads Strategies That Delivered 300% ROAS in 2024</h2>
      <p>In the competitive Indian digital marketing landscape, achieving high ROAS (Return on Ad Spend) requires more than just basic Facebook Ads setup. Here are the proven strategies that helped our clients achieve exceptional results.</p>

      <h2>🎯 Strategy 1: Advanced Audience Targeting</h2>
      <h3>Lookalike Audiences (LAL)</h3>
      <p>Create LAL audiences based on your best customers:</p>
      <ul>
        <li>1% LAL for high-value customers</li>
        <li>2-5% LAL for broader reach</li>
        <li>Exclude existing customers</li>
        <li>Use custom audiences for retargeting</li>
      </ul>

      <h2>🎯 Strategy 2: Creative Testing Framework</h2>
      <p>Test multiple ad creatives simultaneously:</p>
      <ul>
        <li>Video vs Image ads</li>
        <li>Different copy variations</li>
        <li>Various call-to-action buttons</li>
        <li>Landing page variations</li>
      </ul>

      <h2>🎯 Strategy 3: Campaign Budget Optimization (CBO)</h2>
      <p>Let Facebook automatically distribute budget:</p>
      <ul>
        <li>Set campaign-level budget</li>
        <li>Facebook optimizes ad set performance</li>
        <li>Better overall ROAS</li>
        <li>Reduced manual optimization</li>
      </ul>

      <h2>🎯 Strategy 4: Retargeting Funnels</h2>
      <p>Create sophisticated retargeting sequences:</p>
      <ul>
        <li>Website visitors (1-7 days)</li>
        <li>Add to cart abandoners</li>
        <li>Purchase abandoners</li>
        <li>Past customers (upselling)</li>
      </ul>

      <h2>🎯 Strategy 5: Dynamic Creative Optimization</h2>
      <p>Use Facebook's DCO for better performance:</p>
      <ul>
        <li>Automatically test creative combinations</li>
        <li>Optimize for best performing elements</li>
        <li>Reduce manual creative work</li>
        <li>Improve overall campaign performance</li>
      </ul>

      <h2>🎯 Strategy 6: Conversion Tracking Setup</h2>
      <p>Proper tracking is crucial for ROAS optimization:</p>
      <ul>
        <li>Facebook Pixel implementation</li>
        <li>Custom conversion events</li>
        <li>Value optimization</li>
        <li>Cross-platform tracking</li>
      </ul>

      <h2>🎯 Strategy 7: Bid Strategy Optimization</h2>
      <p>Choose the right bidding strategy:</p>
      <ul>
        <li>Cost Cap for consistent costs</li>
        <li>Bid Cap for maximum control</li>
        <li>Lowest Cost for maximum reach</li>
        <li>Target Cost for specific CPA goals</li>
      </ul>

      <h2>🎯 Strategy 8: Ad Scheduling Optimization</h2>
      <p>Show ads when your audience is most active:</p>
      <ul>
        <li>Analyze peak activity hours</li>
        <li>Schedule ads during high-conversion times</li>
        <li>Pause ads during low-performance periods</li>
        <li>Use dayparting for better results</li>
      </ul>

      <h2>🎯 Strategy 9: Landing Page Optimization</h2>
      <p>Optimize landing pages for better conversion:</p>
      <ul>
        <li>Fast loading speed</li>
        <li>Mobile-first design</li>
        <li>Clear value proposition</li>
        <li>Simplified conversion process</li>
      </ul>

      <h2>🎯 Strategy 10: Continuous Optimization</h2>
      <p>Regular optimization is key to maintaining high ROAS:</p>
      <ul>
        <li>Daily performance monitoring</li>
        <li>Weekly creative refreshes</li>
        <li>Monthly audience analysis</li>
        <li>Quarterly strategy reviews</li>
      </ul>

      <h2>📊 Results from Our Clients</h2>
      <p>These strategies helped our clients achieve:</p>
      <ul>
        <li>E-commerce: 350% ROAS improvement</li>
        <li>B2B Services: 280% ROAS improvement</li>
        <li>Local Businesses: 320% ROAS improvement</li>
        <li>Coaching Institutes: 400% ROAS improvement</li>
      </ul>

      <h2>🔍 SEO Tags:</h2>
      <p>Facebook Ads strategies India, ROAS optimization Mumbai, Performance marketing Delhi, Facebook Ads agency Bangalore, Digital advertising ROI India</p>
    `
  },
  {
    id: 4,
    title: "Local SEO Secrets: How to Dominate Your City's Search Results in 2025",
    excerpt: "Master local SEO strategies to dominate search results in your city. Learn about Google My Business optimization, local citations, and location-based keyword strategies for Indian businesses.",
    category: "SEO",
    readTime: "10 min read",
    date: "January 25, 2025",
    color: "bg-yellow-500",
    image: "/blog/local-seo-domination-2025.jpg",
    tags: ["Local SEO", "Google My Business", "Local Marketing", "Search Rankings", "City Domination"],
    fullContent: `
      <div style="text-align: center; margin-bottom: 2rem;">
        <img src="/blog/local-seo-domination-2025.jpg" alt="Local SEO Domination Strategies 2025" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" />
      </div>
      
      <h2>🏆 Local SEO Secrets: Dominate Your City's Search Results in 2025</h2>
      <p>For Indian businesses, local SEO is the key to dominating search results in your city. Whether you're in Mumbai, Delhi, Bangalore, or any other Indian city, these strategies will help you rank higher and attract more local customers.</p>

      <h2>🎯 Google My Business (GMB) Optimization</h2>
      <h3>Complete Profile Optimization</h3>
      <p>Ensure your GMB profile is 100% complete:</p>
      <ul>
        <li>Business name, address, phone (NAP)</li>
        <li>Business hours and special hours</li>
        <li>Business category and attributes</li>
        <li>High-quality photos and videos</li>
        <li>Services and products list</li>
      </ul>

      <h2>🎯 Local Keyword Research</h2>
      <p>Target city-specific keywords:</p>
      <ul>
        <li>"[Service] in [City]" - e.g., "Digital Marketing in Mumbai"</li>
        <li>"[Service] near me" - for mobile searches</li>
        <li>"Best [Service] [City]" - for competitive terms</li>
        <li>Long-tail local keywords</li>
      </ul>

      <h2>🎯 Local Citations and Directories</h2>
      <p>Build consistent citations across platforms:</p>
      <ul>
        <li>JustDial, Sulekha, IndiaMART</li>
        <li>Google My Business</li>
        <li>Facebook, LinkedIn, Twitter</li>
        <li>Industry-specific directories</li>
        <li>Local business associations</li>
      </ul>

      <h2>🎯 Local Content Strategy</h2>
      <p>Create city-specific content:</p>
      <ul>
        <li>Local news and events</li>
        <li>City-specific service guides</li>
        <li>Local customer testimonials</li>
        <li>Area-specific landing pages</li>
        <li>Local business partnerships</li>
      </ul>

      <h2>🎯 Mobile Optimization</h2>
      <p>Optimize for mobile local searches:</p>
      <ul>
        <li>Fast loading mobile pages</li>
        <li>Mobile-friendly contact forms</li>
        <li>Click-to-call functionality</li>
        <li>Mobile-optimized images</li>
        <li>Local business schema markup</li>
      </ul>

      <h2>🎯 Local Link Building</h2>
      <p>Build local backlinks:</p>
      <ul>
        <li>Local business partnerships</li>
        <li>Sponsor local events</li>
        <li>Guest post on local blogs</li>
        <li>Local media mentions</li>
        <li>Industry association memberships</li>
      </ul>

      <h2>🎯 Customer Reviews and Ratings</h2>
      <p>Encourage positive reviews:</p>
      <ul>
        <li>Ask satisfied customers for reviews</li>
        <li>Respond to all reviews professionally</li>
        <li>Use review management tools</li>
        <li>Monitor review platforms regularly</li>
        <li>Address negative reviews promptly</li>
      </ul>

      <h2>🎯 Local Schema Markup</h2>
      <p>Implement local business schema:</p>
      <ul>
        <li>LocalBusiness schema type</li>
        <li>Address and contact information</li>
        <li>Business hours and services</li>
        <li>Customer reviews and ratings</li>
        <li>Geographic coordinates</li>
      </ul>

      <h2>📊 Results from Our Local SEO Campaigns</h2>
      <p>Our local SEO strategies have helped clients achieve:</p>
      <ul>
        <li>Mumbai businesses: 250% increase in local traffic</li>
        <li>Delhi services: 180% improvement in local rankings</li>
        <li>Bangalore startups: 300% increase in local leads</li>
        <li>Chennai companies: 220% improvement in local visibility</li>
      </ul>

      <h2>🔍 SEO Tags:</h2>
      <p>Local SEO Mumbai, Google My Business optimization Delhi, Local marketing Bangalore, City SEO domination India, Local business visibility</p>
    `
  },
  {
    id: 5,
    title: "E-commerce Marketing: 7 Strategies That Increased Sales by 500% in 2024",
    excerpt: "Discover the e-commerce marketing strategies that helped our clients achieve 500% sales growth. Learn about conversion optimization, retargeting, and customer lifetime value strategies.",
    category: "E-commerce",
    readTime: "15 min read",
    date: "January 24, 2025",
    color: "bg-red-500",
    image: "/blog/ecommerce-marketing-strategies.jpg",
    tags: ["E-commerce", "Digital Marketing", "Conversion Optimization", "Retargeting", "Customer LTV"],
    fullContent: `
      <div style="text-align: center; margin-bottom: 2rem;">
        <img src="/blog/ecommerce-marketing-strategies.jpg" alt="E-commerce Marketing Strategies 2025" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" />
      </div>
      
      <h2>🛒 E-commerce Marketing: 7 Strategies That Increased Sales by 500% in 2024</h2>
      <p>E-commerce in India is booming, but competition is fierce. These proven strategies helped our clients achieve exceptional sales growth and dominate their markets.</p>

      <h2>🎯 Strategy 1: Conversion Rate Optimization (CRO)</h2>
      <h3>Landing Page Optimization</h3>
      <p>Optimize every element of your landing pages:</p>
      <ul>
        <li>Clear value proposition above the fold</li>
        <li>Social proof and testimonials</li>
        <li>Simplified checkout process</li>
        <li>Mobile-first design</li>
        <li>A/B testing for continuous improvement</li>
      </ul>

      <h2>🎯 Strategy 2: Advanced Retargeting Campaigns</h2>
      <p>Create sophisticated retargeting sequences:</p>
      <ul>
        <li>Website visitors (1-7 days)</li>
        <li>Product page visitors</li>
        <li>Add to cart abandoners</li>
        <li>Checkout abandoners</li>
        <li>Past customers (upselling)</li>
      </ul>

      <h2>🎯 Strategy 3: Customer Lifetime Value (LTV) Optimization</h2>
      <p>Focus on long-term customer value:</p>
      <ul>
        <li>Email marketing automation</li>
        <li>Loyalty programs</li>
        <li>Upselling and cross-selling</li>
        <li>Personalized recommendations</li>
        <li>Customer feedback and reviews</li>
      </ul>

      <h2>🎯 Strategy 4: Social Commerce Integration</h2>
      <p>Leverage social media for sales:</p>
      <ul>
        <li>Instagram Shopping integration</li>
        <li>Facebook Shop setup</li>
        <li>Pinterest Buyable Pins</li>
        <li>Social media advertising</li>
        <li>Influencer partnerships</li>
      </ul>

      <h2>🎯 Strategy 5: Mobile-First Marketing</h2>
      <p>Optimize for mobile shoppers:</p>
      <ul>
        <li>Mobile-optimized website</li>
        <li>Mobile app development</li>
        <li>Mobile-specific advertising</li>
        <li>Push notifications</li>
        <li>Mobile payment optimization</li>
      </ul>

      <h2>🎯 Strategy 6: Data-Driven Personalization</h2>
      <p>Use data to personalize experiences:</p>
      <ul>
        <li>Customer segmentation</li>
        <li>Behavioral targeting</li>
        <li>Dynamic content</li>
        <li>Personalized recommendations</li>
        <li>Customized email campaigns</li>
      </ul>

      <h2>🎯 Strategy 7: Omnichannel Marketing</h2>
      <p>Create seamless customer experiences:</p>
      <ul>
        <li>Consistent messaging across channels</li>
        <li>Unified customer data</li>
        <li>Cross-channel attribution</li>
        <li>Integrated marketing campaigns</li>
        <li>Seamless customer journey</li>
      </ul>

      <h2>📊 Results from Our E-commerce Clients</h2>
      <p>These strategies helped our clients achieve:</p>
      <ul>
        <li>Fashion brand: 600% sales increase</li>
        <li>Electronics store: 450% revenue growth</li>
        <li>Home decor business: 520% sales improvement</li>
        <li>Beauty products: 480% growth in orders</li>
      </ul>

      <h2>🔍 SEO Tags:</h2>
      <p>E-commerce marketing India, Conversion optimization Mumbai, Digital marketing Delhi, E-commerce growth strategies, Online sales optimization</p>
    `
  },
  {
    id: 6,
    title: "Instagram Marketing: How to Build a 100K+ Following and Drive Sales in 2025",
    excerpt: "Master Instagram marketing strategies to build a massive following and drive sales. Learn about content strategy, influencer partnerships, and Instagram Ads optimization for Indian businesses.",
    category: "Social Media",
    readTime: "11 min read",
    date: "January 23, 2025",
    color: "bg-pink-500",
    image: "/blog/instagram-marketing-100k-following.jpg",
    tags: ["Instagram Marketing", "Social Media", "Influencer Marketing", "Content Strategy", "Brand Building"],
    fullContent: `
      <div style="text-align: center; margin-bottom: 2rem;">
        <img src="/blog/instagram-marketing-100k-following.jpg" alt="Instagram Marketing 100K Following Strategy 2025" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" />
      </div>
      
      <h2>📱 Instagram Marketing: Build a 100K+ Following and Drive Sales in 2025</h2>
      <p>Instagram has become the go-to platform for Indian businesses to build brand awareness and drive sales. Here's how to build a massive following and convert it into revenue.</p>

      <h2>🎯 Content Strategy for Growth</h2>
      <h3>Content Pillars</h3>
      <p>Create content around these pillars:</p>
      <ul>
        <li>Educational content (how-to guides, tips)</li>
        <li>Behind-the-scenes content</li>
        <li>User-generated content</li>
        <li>Product showcases</li>
        <li>Industry insights and trends</li>
      </ul>

      <h2>🎯 Hashtag Strategy</h2>
      <p>Use strategic hashtag combinations:</p>
      <ul>
        <li>Popular hashtags (100K+ posts)</li>
        <li>Niche hashtags (10K-100K posts)</li>
        <li>Branded hashtags</li>
        <li>Trending hashtags</li>
        <li>Location-based hashtags</li>
      </ul>

      <h2>🎯 Instagram Reels Strategy</h2>
      <p>Leverage Reels for maximum reach:</p>
      <ul>
        <li>Create trending content</li>
        <li>Use popular audio tracks</li>
        <li>Post at peak engagement times</li>
        <li>Collaborate with creators</li>
        <li>Cross-promote on other platforms</li>
      </ul>

      <h2>🎯 Influencer Partnerships</h2>
      <p>Partner with relevant influencers:</p>
      <ul>
        <li>Micro-influencers (10K-100K followers)</li>
        <li>Macro-influencers (100K-1M followers)</li>
        <li>Celebrity influencers (1M+ followers)</li>
        <li>Industry-specific influencers</li>
        <li>Local market influencers</li>
      </ul>

      <h2>🎯 Instagram Ads Optimization</h2>
      <p>Optimize your Instagram advertising:</p>
      <ul>
        <li>Story ads for brand awareness</li>
        <li>Feed ads for conversions</li>
        <li>Carousel ads for product showcases</li>
        <li>Video ads for engagement</li>
        <li>Retargeting campaigns</li>
      </ul>

      <h2>🎯 Engagement Strategy</h2>
      <p>Build genuine engagement:</p>
      <ul>
        <li>Respond to all comments</li>
        <li>Like and comment on followers' posts</li>
        <li>Host Instagram Lives</li>
        <li>Create interactive Stories</li>
        <li>Run contests and giveaways</li>
      </ul>

      <h2>🎯 Instagram Shopping Integration</h2>
      <p>Turn followers into customers:</p>
      <ul>
        <li>Set up Instagram Shopping</li>
        <li>Tag products in posts</li>
        <li>Create shopping Stories</li>
        <li>Use shopping ads</li>
        <li>Optimize product catalogs</li>
      </ul>

      <h2>📊 Results from Our Instagram Campaigns</h2>
      <p>Our Instagram strategies have helped clients achieve:</p>
      <ul>
        <li>Fashion brand: 150K followers in 6 months</li>
        <li>Beauty business: 200% increase in website traffic</li>
        <li>Food delivery: 300% increase in orders</li>
        <li>Fitness brand: 400% increase in sales</li>
      </ul>

      <h2>🔍 SEO Tags:</h2>
      <p>Instagram marketing India, Social media growth Mumbai, Influencer marketing Delhi, Instagram strategy Bangalore, Brand building on Instagram</p>
    `
  },
  {
    id: 7,
    title: "Performance Marketing: The Complete Guide to Scaling Your Business in 2025",
    excerpt: "Master performance marketing strategies to scale your business profitably. Learn about attribution models, conversion tracking, and ROI optimization for sustainable growth.",
    category: "Performance Marketing",
    readTime: "14 min read",
    date: "January 22, 2025",
    color: "bg-indigo-500",
    image: "/blog/performance-marketing-scaling-guide.jpg",
    tags: ["Performance Marketing", "ROI Optimization", "Conversion Tracking", "Attribution Models", "Business Scaling"],
    fullContent: `
      <div style="text-align: center; margin-bottom: 2rem;">
        <img src="/blog/performance-marketing-scaling-guide.jpg" alt="Performance Marketing Scaling Guide 2025" style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" />
      </div>
      
      <h2>🚀 Performance Marketing: The Complete Guide to Scaling Your Business in 2025</h2>
      <p>Performance marketing is the key to scaling your business profitably in today's competitive landscape. Learn how to implement data-driven strategies that deliver measurable results and sustainable growth.</p>

      <h2>🎯 Understanding Performance Marketing</h2>
      <p>Performance marketing focuses on measurable outcomes:</p>
      <ul>
        <li>Pay-per-click (PPC) advertising</li>
        <li>Affiliate marketing</li>
        <li>Email marketing automation</li>
        <li>Conversion rate optimization</li>
        <li>Data-driven decision making</li>
      </ul>

      <h2>🎯 Attribution Models for Better Insights</h2>
      <p>Choose the right attribution model:</p>
      <ul>
        <li>First-click attribution</li>
        <li>Last-click attribution</li>
        <li>Linear attribution</li>
        <li>Time-decay attribution</li>
        <li>Data-driven attribution</li>
      </ul>

      <h2>🎯 Conversion Tracking Setup</h2>
      <p>Implement comprehensive tracking:</p>
      <ul>
        <li>Google Analytics 4 setup</li>
        <li>Facebook Pixel implementation</li>
        <li>Custom conversion events</li>
        <li>E-commerce tracking</li>
        <li>Cross-platform attribution</li>
      </ul>

      <h2>🎯 ROI Optimization Strategies</h2>
      <p>Maximize your return on investment:</p>
      <ul>
        <li>Bid optimization</li>
        <li>Audience targeting refinement</li>
        <li>Creative optimization</li>
        <li>Landing page optimization</li>
        <li>Campaign structure optimization</li>
      </ul>

      <h2>🎯 Customer Acquisition Cost (CAC) Optimization</h2>
      <p>Reduce your customer acquisition costs:</p>
      <ul>
        <li>Audience segmentation</li>
        <li>Bidding strategy optimization</li>
        <li>Creative testing</li>
        <li>Landing page optimization</li>
        <li>Retargeting optimization</li>
      </ul>

      <h2>🎯 Lifetime Value (LTV) Optimization</h2>
      <p>Increase customer lifetime value:</p>
      <ul>
        <li>Email marketing automation</li>
        <li>Upselling and cross-selling</li>
        <li>Customer loyalty programs</li>
        <li>Personalized experiences</li>
        <li>Customer feedback optimization</li>
      </ul>

      <h2>🎯 Scaling Strategies</h2>
      <p>Scale your campaigns profitably:</p>
      <ul>
        <li>Horizontal scaling (new audiences)</li>
        <li>Vertical scaling (existing audiences)</li>
        <li>Geographic expansion</li>
        <li>Product expansion</li>
        <li>Channel diversification</li>
      </ul>

      <h2>📊 Results from Our Performance Marketing Campaigns</h2>
      <p>Our performance marketing strategies have helped clients achieve:</p>
      <ul>
        <li>E-commerce: 400% ROAS improvement</li>
        <li>B2B Services: 300% lead generation increase</li>
        <li>Local Businesses: 250% revenue growth</li>
        <li>SaaS Companies: 500% customer acquisition improvement</li>
      </ul>

      <h2>🔍 SEO Tags:</h2>
      <p>Performance marketing India, ROI optimization Mumbai, Digital marketing Delhi, Business scaling strategies, Conversion optimization Bangalore</p>
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
                <AvifImage
                  avifSrc="/blog/About_Adswadi_blog.avif"
                  fallbackSrc="/blog/About_Adswadi_blog.jpeg"
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
                <AvifImage
                  avifSrc={post.image}
                  fallbackSrc={post.fallbackImage}
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