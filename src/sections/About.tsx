import { useEffect, useRef, useState } from 'react'
import { Target, Lightbulb, Users, Award, ChevronRight } from 'lucide-react'

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  const stats = [
    { value: '150+', label: 'Projects Delivered', icon: Target },
    { value: '98%', label: 'Client Satisfaction', icon: Award },
    { value: '5+', label: 'Years of Excellence', icon: Users },
    { value: '25+', label: 'Team Members', icon: Lightbulb },
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
      icon: Lightbulb,
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our priority. We build partnerships, not just projects.',
      icon: Users,
    },
    {
      title: 'Quality Driven',
      description: 'Excellence in every line of code. We never compromise on quality.',
      icon: Award,
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4">
            About Us
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Are</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We are a collective of coders, designers, and visionaries based in Sri Lanka. 
            We don&apos;t just write code; we craft digital ecosystems.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-cyan-500/20">
                <img
                  src="/about-team.jpg"
                  alt="TIOSS Team"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-heading font-bold text-2xl">5+</div>
                    <div className="text-slate-400 text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Crafting Digital Excellence from Sri Lanka
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Founded with a vision to bridge the gap between complex technology and human intuition, 
              TIOSS has grown into a leading software development company in Sri Lanka. We specialize 
              in creating web applications, AI-powered solutions, and digital experiences that drive 
              business growth.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Our team of expert developers, designers, and AI specialists work collaboratively to 
              deliver solutions that are not just functional, but transformative. From startups to 
              enterprises, we help businesses harness the power of technology to achieve their goals.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card rounded-xl p-5">
                <Target className="w-8 h-8 text-cyan-400 mb-3" />
                <h4 className="text-white font-heading font-semibold mb-2">Our Mission</h4>
                <p className="text-slate-400 text-sm">
                  To empower businesses with innovative technology solutions that drive growth and success.
                </p>
              </div>
              <div className="glass-card rounded-xl p-5">
                <Lightbulb className="w-8 h-8 text-blue-400 mb-3" />
                <h4 className="text-white font-heading font-semibold mb-2">Our Vision</h4>
                <p className="text-slate-400 text-sm">
                  To be the leading technology partner for businesses seeking digital transformation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center card-hover group"
            >
              <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-white font-heading font-bold text-3xl lg:text-4xl mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Our Core <span className="text-cyan-400">Values</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 card-hover group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-5 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                  <value.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h4 className="text-white font-heading font-semibold text-lg mb-3">
                  {value.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {value.description}
                </p>
                <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
