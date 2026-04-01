import { Helmet } from 'react-helmet-async'

const blogs = [
  {
    title: "Why Every Business in Sri Lanka Needs a Professional Website in 2026",
    category: "Web Development",
    date: "April 1, 2026",
    color: "cyan",
    content: (
      <>
        <p>In today's hyper-connected world, operating a business without a professional web presence is akin to closing your doors to potential customers. For businesses in Sri Lanka—whether you're a retail store in Colombo, a boutique hotel down South, or a B2B service provider—a website is your 24/7 digital storefront.</p>
        
        <h4 className="text-white font-semibold mt-4 mb-2">1. Local Visibility and Global Reach</h4>
        <p>A staggering majority of consumers research online before making a purchase. When someone searches for your services, a professionally built website ensures your brand appears at the top of search results. Unlike a social media page, a website gives you complete control over your narrative and branding.</p>

        <h4 className="text-white font-semibold mt-4 mb-2">2. Building Unshakeable Trust</h4>
        <p>In Sri Lanka, consumer trust is heavily influenced by digital presence. A clunky, outdated site screams unprofessionalism, whereas a fast, beautifully designed web application built by a top <strong>web development company in Sri Lanka</strong> signals authority and reliability.</p>
        
        <h4 className="text-white font-semibold mt-4 mb-2">3. Automating Customer Acquisition</h4>
        <p>A website never sleeps. By utilizing forms, chatbots, and e-commerce functionalities, you can generate leads and process sales around the clock, dramatically decreasing your reliance on manual sales teams.</p>
      </>
    )
  },
  {
    title: "How to Grow Your Sri Lankan Business with Custom Software Solutions",
    category: "Enterprise Software",
    date: "March 28, 2026",
    color: "blue",
    content: (
      <>
        <p>As small and medium enterprises (SMEs) scale across Sri Lanka, off-the-shelf software often becomes a bottleneck rather than a solution. Workarounds via Excel sheets or disjointed SaaS apps lead to fragmented data and operational inefficiencies.</p>
        
        <h4 className="text-white font-semibold mt-4 mb-2">Streamlining Operations</h4>
        <p>Custom software development allows businesses to map technology directly to their unique workflows. From custom ERP systems managing local supply chains to bespoke CRM portals handling Sri Lankan customer nuances, software tailored to your specific operational model massively outpaces generic alternatives.</p>

        <h4 className="text-white font-semibold mt-4 mb-2">Long-term ROI</h4>
        <p>While the initial investment in a custom platform might be higher, it eliminates expensive recurring licensing fees per user. Partnering with a dedicated <strong>software company in Sri Lanka</strong> like TIOSS Solutions ensures you own your code, scaling endlessly without incurring arbitrary usage penalties.</p>
      </>
    )
  },
  {
    title: "The Ultimate Guide to SEO for Sri Lankan Tech Startups",
    category: "SEO & Marketing",
    date: "March 21, 2026",
    color: "indigo",
    content: (
      <>
        <p>Search Engine Optimization (SEO) is the most sustainable marketing channel available today. For tech startups and traditional businesses in Sri Lanka alike, ranking organically on Google translates to free, highly-qualified, intent-driven traffic.</p>
        
        <h4 className="text-white font-semibold mt-4 mb-2">Technical SEO is the Foundation</h4>
        <p>Google's algorithms heavily penalize slow websites. If your site isn't built on a modern framework like React or Next.js, and lacks Semantic HTML, your content won't rank. Ensuring fast load times (Core Web Vitals) and mobile-responsiveness is the absolute baseline for 2026.</p>

        <h4 className="text-white font-semibold mt-4 mb-2">Structured Data (JSON-LD)</h4>
        <p>One of the easiest ways to stand out in local Sri Lankan searches is by implementing LocalBusiness schema. This code explicitly tells search engines your company name, location, and services offered, enabling rich snippets and better map rankings.</p>
      </>
    )
  },
  {
    title: "Why AI Automation is the Future for Sri Lankan Companies",
    category: "Artificial Intelligence",
    date: "March 15, 2026",
    color: "purple",
    content: (
      <>
        <p>Artificial Intelligence is transforming industries globally, and Sri Lanka is no exception. Companies that fail to adopt AI will inevitably lose their competitive edge to those that optimize their operational costs through intelligent automation.</p>
        
        <h4 className="text-white font-semibold mt-4 mb-2">Customer Service AI Agents</h4>
        <p>Instead of relying on large call centers, modern businesses deploy fine-tuned AI chatbots that understand local context and languages. These AI agents handle 80% of tier-1 support queries instantly, routing only complex issues to human agents.</p>

        <h4 className="text-white font-semibold mt-4 mb-2">Predictive Analytics in Logistics</h4>
        <p>For import/export and retail sectors in Sri Lanka, AI models predict supply chain bottlenecks, optimize delivery routes, and forecast inventory demands with pinpoint accuracy. Deploying <strong>AI solutions in Sri Lanka</strong> is an investment into exponential long-term efficiency.</p>
      </>
    )
  },
  {
    title: "Choosing the Right Web Development Partner in Sri Lanka: What to Look For",
    category: "Industry Insights",
    date: "March 5, 2026",
    color: "cyan",
    content: (
      <>
        <p>With hundreds of agencies and freelancers offering digital services, selecting the right web development partner can be daunting. The cheapest option often ends up being the most expensive due to poor architecture and unmaintainable code.</p>
        
        <h4 className="text-white font-semibold mt-4 mb-2">Check Their Tech Stack</h4>
        <p>Ask what technologies they use. A top-tier agency will build using modern tools like React, TypeScript, and robust backend frameworks. Be wary of companies that exclusively rely on heavy, outdated WordPress themes, which are notoriously slow and prone to security vulnerabilities.</p>

        <h4 className="text-white font-semibold mt-4 mb-2">Look for Engineering, Not Just Design</h4>
        <p>A beautiful website is useless if it takes 10 seconds to load or fails under traffic spikes. Choose a company that understands cloud infrastructure, database optimization, and CI/CD pipelines. This ensures your web application will scale effortlessly alongside your business.</p>
      </>
    )
  }
]

const colorClasses = {
  cyan: 'bg-navy-800/40 text-navy-300 group-hover:border-navy-500/50 group-hover:text-white',
  blue: 'bg-navy-800/40 text-navy-300 group-hover:border-navy-500/50 group-hover:text-white',
  indigo: 'from-indigo-900/40 text-indigo-400 group-hover:border-indigo-500/50 group-hover:text-indigo-300',
  purple: 'from-purple-900/40 text-purple-400 group-hover:border-purple-500/50 group-hover:text-purple-300',
}

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Insights & Articles on SEO, Web Dev & AI | TIOSS Solutions</title>
        <meta name="description" content="Explore insightful articles on SEO optimization, React web development, AI automation, and software engineering in Sri Lanka. Read how to grow your business digitally." />
        <link rel="canonical" href="https://www.tiossolution.xyz/blogs" />
      </Helmet>
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-12 xl:px-20 max-w-7xl mx-auto relative z-10">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
              TIOSS <span className="text-slate-300">Insights & Blogs</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Dive deep into the world of web engineering, artificial intelligence, and digital growth with complete, in-depth articles from our senior technical experts.
            </p>
          </div>

          {/* Full Blogs */}
          <div className="space-y-12">
            {blogs.map((blog, idx) => {
              const theme = colorClasses[blog.color as keyof typeof colorClasses]
              return (
                <article key={idx} className={`glass-card p-8 md:p-12 rounded-2xl group transition-colors duration-300 hover:border-white/20`}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`text-xs font-bold uppercase tracking-wider ${theme.split(' ')[1]}`}>
                      {blog.category}
                    </span>
                    <span className="text-xs text-slate-500">{blog.date}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    {blog.title}
                  </h2>
                  
                  <div className="prose prose-invert max-w-none prose-p:text-slate-400 prose-p:leading-relaxed prose-strong:text-white">
                    {blog.content}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs
