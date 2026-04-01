import { Helmet } from 'react-helmet-async'

const AiSolutionsSriLanka = () => {
  return (
    <>
      <Helmet>
        <title>AI Solutions in Sri Lanka | TIOSS Solutions</title>
        <meta name="description" content="Discover powerful AI solutions in Sri Lanka with TIOSS. We specialize in machine learning, NLP, generative AI, and automation for modern businesses." />
        <link rel="canonical" href="https://www.tiossolution.xyz/ai-solutions-sri-lanka" />
      </Helmet>
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-12 xl:px-20 max-w-7xl mx-auto relative z-10">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
              Innovative <span className="text-slate-300">AI Solutions</span> in Sri Lanka
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Unlock the power of Artificial Intelligence to automate workflows, glean insights, and build truly intelligent applications.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-cyan max-w-none glass-card p-8 md:p-12 rounded-2xl">
            <h2>Pioneering AI Solutions in Sri Lanka</h2>
            <p>
              Artificial Intelligence is no longer a futuristic concept—it is the foundation of competitive advantage today. TIOSS Solutions is at the forefront of delivering cutting-edge <strong>AI solutions in Sri Lanka</strong>. We help forward-thinking organizations integrate intelligent automation, machine learning models, and generative AI into their products and internal core processes.
            </p>

            <h3>Generative AI & Large Language Models (LLMs)</h3>
            <p>
              Harness the capabilities of models like GPT-4 and Claude to generate content, summarize data, and power intelligent chatbots. We build custom LLM wrappers, autonomous AI agents, and RAG (Retrieval-Augmented Generation) applications that have deep knowledge of your specific business data.
            </p>

            <h3>Machine Learning & Predictive Analytics</h3>
            <p>
              Stop guessing and start predicting. Our data scientists and machine learning engineers develop custom predictive models that analyze your historical data to forecast trends, detect anomalies, and optimize decision-making processes. 
            </p>
            
            <h3>Computer Vision & NLP</h3>
            <p>
              From image recognition software that automates quality control on factory floors to Natural Language Processing tools that analyze customer sentiment in real-time, our AI solutions are crafted to solve real-world problems with unparalleled accuracy. We ensure that our clients in Sri Lanka and globally stay ahead of the technology curve.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AiSolutionsSriLanka
