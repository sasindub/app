import { Helmet } from 'react-helmet-async'

const WebDevelopmentSriLanka = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Company in Sri Lanka | TIOSS Solutions</title>
        <meta name="description" content="Looking for the best web development company in Sri Lanka? TIOSS Solutions builds fast, scalable, and high-performance websites for global businesses." />
        <link rel="canonical" href="https://www.tiossolution.xyz/web-development-sri-lanka" />
      </Helmet>
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-12 xl:px-20 max-w-7xl mx-auto relative z-10">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
              Premier <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Web Development Company</span> in Sri Lanka
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Transforming businesses with cutting-edge web development, intelligent applications, and immersive digital experiences. We are TIOSS Solutions.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-cyan max-w-none glass-card p-8 md:p-12 rounded-2xl">
            <h2>Why Choose TIOSS for Web Development in Sri Lanka?</h2>
            <p>
              In today's digital-first economy, having a fast, secure, and user-friendly website is no longer optional. As a leading <strong>web development company in Sri Lanka</strong>, TIOSS Solutions specializes in engineering digital ecosystems that drive growth and engagement. Whether you need a corporate portal, an e-commerce platform, or a complex web application, our expert developers deliver scaleable solutions tailored to your specific business goals.
            </p>

            <h3>Custom Web Application Development</h3>
            <p>
              Off-the-shelf software doesn't always cut it. Our team builds bespoke web applications using the latest modern stacks (React, Node.js, Next.js). We focus on responsive design, high performance, and seamless integrations. Every web development project in Sri Lanka that we undertake goes through rigorous quality assurance testing to ensure flawless functionality across all devices.
            </p>

            <h3>E-Commerce & Digital Experiences</h3>
            <p>
              We empower Sri Lankan and global businesses to sell online effectively. From secure payment gateway integrations to optimized shopping carts, our web development services ensure your customers enjoy a frictionless purchasing journey.
            </p>
            
            <h3>SEO-Optimized and Fast</h3>
            <p>
              A beautiful website is useless if no one can find it. Because we understand search engine algorithms, every website we build is technically optimized for SEO from the ground up, ensuring you rank higher on Google for your relevant industry keywords.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WebDevelopmentSriLanka
