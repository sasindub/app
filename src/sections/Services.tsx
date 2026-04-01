import { useEffect, useRef, useState } from 'react'
import { 
  Code2, 
  Brain, 
  Smartphone, 
  Palette, 
  ArrowRight,
  CheckCircle2,
  Bot,
  MessageSquare,
  Database,
  Cloud
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)

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

  const services = [
    {
      id: 1,
      title: 'Web Development',
      subtitle: 'Modern Web Solutions',
      description: 'We build fast, scalable, and secure web applications using cutting-edge technologies. From corporate websites to complex web platforms, we deliver excellence.',
      icon: Code2,
      features: [
        'React & Next.js Applications',
        'E-Commerce Platforms',
        'Custom Web Applications',
        'API Development & Integration',
        'Progressive Web Apps',
      ],
      color: 'text-navy-300',
      bgColor: 'bg-cyan-500/10',
    },
    {
      id: 2,
      title: 'AI Solutions',
      subtitle: 'Intelligent Automation',
      description: 'Harness the power of artificial intelligence to transform your business. We develop custom AI solutions that automate processes and drive insights.',
      icon: Brain,
      features: [
        'Chatbot Development',
        'LLM Integration (GPT, Claude)',
        'Machine Learning Models',
        'Natural Language Processing',
        'AI-Powered Analytics',
      ],
      color: 'text-navy-300',
      bgColor: 'bg-blue-500/10',
    },
    {
      id: 3,
      title: 'Mobile Apps',
      subtitle: 'Cross-Platform Excellence',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.',
      icon: Smartphone,
      features: [
        'React Native Development',
        'iOS & Android Apps',
        'App UI/UX Design',
        'App Maintenance & Support',
        'Mobile-First Solutions',
      ],
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-500/10',
    },
    {
      id: 4,
      title: 'UI/UX Design',
      subtitle: 'Stunning Interfaces',
      description: 'User-centered design that combines aesthetics with functionality. We create interfaces that users love and remember.',
      icon: Palette,
      features: [
        'User Interface Design',
        'User Experience Research',
        'Prototyping & Wireframing',
        'Design Systems',
        'Brand Identity Design',
      ],
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-500/10',
    },
  ]

  const aiServices = [
    {
      title: 'Chatbot Development',
      description: 'Intelligent conversational agents for customer support and automation',
      icon: Bot,
    },
    {
      title: 'LLM Integration',
      description: 'Seamless integration of GPT, Claude, and other language models',
      icon: MessageSquare,
    },
    {
      title: 'Data Analytics',
      description: 'AI-powered insights and predictive analytics for your business',
      icon: Database,
    },
    {
      title: 'Cloud AI Solutions',
      description: 'Scalable AI infrastructure on AWS, Azure, and Google Cloud',
      icon: Cloud,
    },
  ]

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-slate-300">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We offer comprehensive software development services tailored to your business needs, 
            from web applications to cutting-edge AI solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className={`grid lg:grid-cols-2 gap-6 mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`glass-card rounded-2xl p-6 lg:p-8 card-hover cursor-pointer group ${
                activeService === index ? 'border-cyan-500/40' : ''
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} style={{ color: 'inherit' }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-heading font-semibold text-xl">
                      {service.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-cyan-400 text-sm mb-3">{service.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Services Highlight */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card rounded-3xl p-8 lg:p-12 border border-cyan-500/20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 mb-6">
                  <Brain className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 text-sm font-medium">AI-Powered Solutions</span>
                </div>
                <h3 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">
                  Transform Your Business with <span className="text-cyan-400">AI</span>
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  From intelligent chatbots to advanced LLM integrations, we help businesses 
                  leverage the power of artificial intelligence to automate processes, 
                  enhance customer experiences, and drive growth.
                </p>
                <Button
                  className="bg-white text-navy-950 hover:bg-slate-100 font-semibold px-6 py-3 rounded-lg transition-colors border border-transparent shadow-sm hover:shadow-md"
                >
                  Explore AI Solutions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {aiServices.map((item, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-5 card-hover"
                  >
                    <item.icon className="w-8 h-8 text-cyan-400 mb-3" />
                    <h4 className="text-white font-heading font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
