import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Works = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Revolution',
      category: 'Fashion & Retail',
      description: 'A luxury fashion e-commerce platform with AI-powered recommendations, virtual try-on features, and seamless checkout experience.',
      image: '/work-ecommerce.jpg',
      tags: ['React', 'Next.js', 'AI', 'Stripe'],
      stats: { users: '50K+', revenue: '+150%' },
    },
    {
      id: 2,
      title: 'FinTech Dashboard',
      category: 'Finance',
      description: 'Real-time financial analytics dashboard with predictive modeling, portfolio management, and automated trading insights.',
      image: '/work-fintech.jpg',
      tags: ['Vue.js', 'Python', 'TensorFlow', 'AWS'],
      stats: { users: '10K+', transactions: '$2M+' },
    },
    {
      id: 3,
      title: 'HealthAI App',
      category: 'Healthcare',
      description: 'AI-powered health monitoring application with symptom checker, appointment scheduling, and personalized health insights.',
      image: '/work-healthai.jpg',
      tags: ['React Native', 'Node.js', 'OpenAI', 'MongoDB'],
      stats: { users: '100K+', rating: '4.8★' },
    },
    {
      id: 4,
      title: 'Smart City IoT',
      category: 'Technology',
      description: 'IoT platform for smart city management, integrating traffic monitoring, energy optimization, and public safety systems.',
      image: '/work-smartcity.jpg',
      tags: ['IoT', 'Azure', 'React', 'PostgreSQL'],
      stats: { sensors: '5K+', efficiency: '+40%' },
    },
  ]

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <span className="inline-block text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4">
              Portfolio
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Works</span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-md">
            Explore our latest projects that showcase our expertise in building 
            innovative digital solutions.
          </p>
        </div>

        {/* Featured Project */}
        <div
          className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card rounded-3xl overflow-hidden border border-cyan-500/20">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-navy-950/40 lg:to-navy-950/80" />
                
                {/* Navigation Arrows */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <button
                    onClick={prevProject}
                    className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-cyan-500/20 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextProject}
                    className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-cyan-500/20 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium">
                    {projects[activeProject].category}
                  </span>
                  <div className="flex gap-2">
                    {projects[activeProject].tags.map((tag, i) => (
                      <span key={i} className="text-slate-500 text-xs">
                        {tag}{i < projects[activeProject].tags.length - 1 && ' •'}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4">
                  {projects[activeProject].title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6">
                  {projects[activeProject].description}
                </p>

                {/* Stats */}
                <div className="flex gap-6 mb-6">
                  {Object.entries(projects[activeProject].stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-white font-heading font-bold text-xl">{value}</div>
                      <div className="text-slate-500 text-xs capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 hover:shadow-glow group"
                >
                  View Case Study
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Thumbnails */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`relative rounded-xl overflow-hidden aspect-video transition-all duration-300 ${
                activeProject === index
                  ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-navy-950'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-white font-heading font-semibold text-sm truncate">
                  {project.title}
                </div>
                <div className="text-cyan-400 text-xs">{project.category}</div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-slate-400 mb-4">
            Have a project in mind? Let&apos;s create something amazing together.
          </p>
          <Button
            variant="outline"
            className="border-cyan-500/30 text-white hover:bg-cyan-500/10 hover:border-cyan-500/50 px-8 py-3 rounded-full transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Works
