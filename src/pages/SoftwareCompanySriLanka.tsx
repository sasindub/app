import { Helmet } from 'react-helmet-async'

const SoftwareCompanySriLanka = () => {
  return (
    <>
      <Helmet>
        <title>Software Company in Sri Lanka | TIOSS Solutions</title>
        <meta name="description" content="TIOSS Solutions is an award-winning Software Company in Sri Lanka, offering enterprise software development, ERP systems, and cloud-native solutions." />
        <link rel="canonical" href="https://www.tiossolution.xyz/software-company-sri-lanka" />
      </Helmet>
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-12 xl:px-20 max-w-7xl mx-auto relative z-10">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
              Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Software Company</span> in Sri Lanka
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Empowering global enterprises with robust, scalable, and innovative software solutions designed by top-tier Sri Lankan engineering talent.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-cyan max-w-none glass-card p-8 md:p-12 rounded-2xl">
            <h2>Why Partner with a Top Software Company in Sri Lanka?</h2>
            <p>
              Sri Lanka has rapidly emerged as a global hub for high-quality software engineering. At TIOSS Solutions, we pride ourselves on being a premier <strong>software company in Sri Lanka</strong>, delivering sophisticated digital products that solve complex business challenges. Our deep expertise in full-stack development, cloud architecture, and DevOps ensures that your software is built for scale, security, and performance.
            </p>

            <h3>Enterprise Software Development</h3>
            <p>
              We design and develop custom enterprise software that streamlines operations, enhances productivity, and drives digital transformation. From scalable ERP systems to complex CRM platforms, our engineers utilize modern agile methodologies to deliver software that perfectly aligns with your organizational objectives.
            </p>

            <h3>Cloud-Native Architecture</h3>
            <p>
              Modern software needs to be agile and resilient. By leveraging cloud platforms like AWS, Google Cloud, and Azure, we build cloud-native applications that offer unparalleled scalability and reliability, minimizing downtime and reducing infrastructure costs.
            </p>
            
            <h3>Dedicated offshore Engineering Teams</h3>
            <p>
              Are you looking to augment your existing tech team? As a trusted software company in Sri Lanka, we provide dedicated offshore developers who seamlessly integrate with your in-house teams, offering world-class talent at competitive rates.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SoftwareCompanySriLanka
