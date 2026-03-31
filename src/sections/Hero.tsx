import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Sparkles, Code2, Brain, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  // Fluid Canvas Animation
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

    // Particle system for fluid effect
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
    }> = []

    const colors = ['#06b6d4', '#3b82f6', '#0891b2']
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 100 + 50,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    let animationId: number
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 15, 28, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        // Mouse influence
        const dx = mousePos.x - particle.x
        const dy = mousePos.y - particle.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < 200) {
          particle.vx += dx * 0.0001
          particle.vy += dy * 0.0001
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw gradient blob
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius
        )
        gradient.addColorStop(0, particle.color + '20')
        gradient.addColorStop(0.5, particle.color + '10')
        gradient.addColorStop(1, 'transparent')
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Connect nearby particles
        particles.slice(i + 1).forEach(other => {
          const dx2 = particle.x - other.x
          const dy2 = particle.y - other.y
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)
          
          if (dist2 < 250) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - dist2 / 250)})`
            ctx.lineWidth = 1
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
  }, [mousePos])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    
    // Trigger load animation
    setTimeout(() => setIsLoaded(true), 100)
    
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fluid Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #0a0f1c 0%, #111827 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">
                Sri Lanka's Premier Software Company
              </span>
            </div>

            {/* Title */}
            <div
              className={`space-y-2 transition-all duration-1000 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none">
                <span className="block">TIOSS</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-gradient">
                  Digital Future
                </span>
              </h1>
              <p className="text-slate-400 text-lg sm:text-xl max-w-lg">
                The Icon of Software Solutions - Crafting intelligent web applications 
                and AI-powered solutions for forward-thinking businesses.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`flex flex-wrap gap-6 transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {[
                { icon: Code2, value: '150+', label: 'Projects' },
                { icon: Brain, value: '50+', label: 'AI Solutions' },
                { icon: Globe, value: '5+', label: 'Years' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 glass-card px-4 py-3 rounded-xl"
                >
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-heading font-bold text-lg">{stat.value}</div>
                    <div className="text-slate-400 text-xs">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-1000 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Button
                onClick={() => scrollToSection('works')}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium px-8 py-6 rounded-full transition-all duration-300 hover:shadow-glow-lg group"
              >
                Explore Our Works
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                variant="outline"
                className="border-cyan-500/30 text-white hover:bg-cyan-500/10 hover:border-cyan-500/50 px-8 py-6 rounded-full transition-all duration-300"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Card */}
          <div
            className={`relative hidden lg:block transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-3xl blur-[60px] animate-pulse-glow" />
              
              {/* Main Image Card */}
              <div className="relative animate-float">
                <div className="relative rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl">
                  <img
                    src="/hero-3d-card.jpg"
                    alt="TIOSS Digital Solutions"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass-card rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm">AI-Powered Solutions</div>
                          <div className="text-cyan-400 text-xs">Next-Gen Technology</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-card rounded-xl p-3 animate-float" style={{ animationDelay: '1s' }}>
                <Code2 className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card rounded-xl p-3 animate-float" style={{ animationDelay: '2s' }}>
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  )
}

export default Hero
