import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Sparkles, Code2, Brain, ShieldCheck, HeartHandshake } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Minimal Professional Canvas Animation (Constellation Network)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Slower, fewer, more professional particles
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }> = []

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2, // Very slow movement
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 1.5 + 0.5, // Small crisp dots
      })
    }

    let animationId: number
    const animate = () => {
      // Clear with dark navy
      ctx.fillStyle = '#0a0f1c'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Boundary check wrap-around for smoother flow
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle (crisp white)
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
        ctx.fill()

        // Connect nearby particles
        particles.slice(i + 1).forEach(other => {
          const dx2 = particle.x - other.x
          const dy2 = particle.y - other.y
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)

          if (dist2 < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist2 / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  useEffect(() => {
    // Trigger load animation
    const timer = setTimeout(() => setIsLoaded(true), 150)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Professional subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      {/* Canvas Constellation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Subtle Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-400/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium tracking-wide">
                Enterprise Web Development & Management Systems
              </span>
            </div>

            {/* Title */}
            <div
              className={`space-y-4 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white tracking-tight">
                <span className="block">TIOSS</span>
                <span className="block text-slate-300">
                  Solutions
                </span>
              </h1>
              <p className="text-slate-400 text-lg sm:text-xl max-w-lg font-light leading-relaxed">
                Your trusted software partner in Sri Lanka. We engineer intelligent web applications, management systems, and scalable enterprise platforms for forward-thinking businesses.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`flex flex-row items-stretch justify-between gap-2 lg:gap-4 w-full transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              {[
                { title: 'AI Solutions', desc: 'Smart softwares', icon: Sparkles },
                { title: 'Security', desc: 'Safe & reliable AI', icon: ShieldCheck },
                { title: 'Satisfaction', desc: 'Trust is the key', icon: HeartHandshake },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col xl:flex-row items-center xl:items-start text-center xl:text-left gap-2 xl:gap-3 bg-navy-900/60 border border-white/5 px-2 py-3 lg:px-4 rounded-xl backdrop-blur-sm shadow-sm overflow-hidden"
                >
                  <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-lg bg-navy-800 flex items-center justify-center border border-white/10 shrink-0">
                    <stat.icon className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-white font-heading font-semibold text-[11px] sm:text-xs lg:text-sm leading-tight truncate">{stat.title}</div>
                    <div className="text-slate-300 text-[9px] sm:text-[10px] lg:text-xs font-light mt-0.5 truncate hidden sm:block">{stat.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Professional Solid Colors */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <Button
                onClick={() => scrollToSection('works')}
                size="lg"
                className="bg-white text-navy-950 hover:bg-slate-100 font-semibold px-8 py-6 rounded-lg transition-colors border border-transparent shadow-sm hover:shadow-md group"
              >
                Explore Our Works
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-6 rounded-lg transition-colors backdrop-blur-sm"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Content - Modern Product Showcase */}
          <div
            className={`relative hidden lg:block transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
          >
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">

              {/* Main Floating Dashboard Image */}
              <div className="relative w-full h-full animate-float transition-transform duration-1000">
                <div className="absolute inset-4 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-navy-900/40 backdrop-blur-xl transform-gpu">
                  <img
                    src="/hero-dashboard.png"
                    alt="TIOSS Enterprise Dashboard Layout"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(10,15,28,0.5)] pointer-events-none" />
                </div>
              </div>

              {/* Minimal Floating Accents */}
              <div
                className="absolute top-1/4 -right-4 bg-navy-900/80 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl animate-float pointer-events-none"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white text-navy-950 flex items-center justify-center">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">Clean Architecture</div>
                    <div className="text-slate-400 text-[10px]">Scalable Solutions</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-1/4 -left-8 bg-navy-900/80 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl animate-float pointer-events-none"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/20 flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">Smart Management</div>
                    <div className="text-slate-400 text-[10px]">Automated Workflows</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Minimal Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero
