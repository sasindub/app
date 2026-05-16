import { useEffect, useRef, useState, useCallback } from 'react'
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const Works = () => {
  const sectionRef    = useRef<HTMLDivElement>(null)
  const featuredRef   = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible]     = useState(false)
  const [activeProject, setActiveProject] = useState(0)
  const [isPaused, setIsPaused]       = useState(false)
  const [iframeScale, setIframeScale] = useState(1)
  const navigate = useNavigate()

  /* Observe section entrance */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  /* Dynamic iframe scale — fills featured card width exactly */
  useEffect(() => {
    const el = featuredRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      setIframeScale(entry.contentRect.width / 1280)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const projects = [
    // ── 1 ──
    {
      id: 1,
      title: 'Mr. Tailor',
      category: 'Fashion & Services',
      description: 'A sleek tailoring services website showcasing custom clothing packages, fabric collections, and an easy inquiry flow to connect customers with expert tailors.',
      url: 'https://mrtailor.vercel.app/',
      tags: ['Services', 'Fashion', 'Responsive', 'WhatsApp'],
      stats: { type: 'Service Site', turnaround: '5 Days' },
    },
    // ── 2 ──
    {
      id: 2,
      title: 'Iron Edge VIP Gym',
      category: 'Fitness & Gym',
      description: 'A high-conversion gym landing page featuring a bold hero section, membership packages, trainer showcases, and direct WhatsApp inquiry integration.',
      url: 'https://ironedge-vip-gym-website.vercel.app/',
      tags: ['Landing Page', 'WhatsApp', 'SEO', 'Responsive'],
      stats: { type: 'Landing Page', turnaround: '7 Days' },
    },
    // ── 3 ──
    {
      id: 3,
      title: 'Kids & Junior',
      category: 'Kids E-Commerce',
      description: 'A vibrant and playful e-commerce store for kids and junior clothing, built with a fun design language, easy product browsing, and a smooth checkout experience.',
      url: 'https://frontend-blond-five-96.vercel.app/',
      tags: ['E-Commerce', 'Kids', 'Responsive', 'Modern UI'],
      stats: { type: 'E-Commerce', audience: 'Kids & Juniors' },
    },
    // ── 4 ──
    {
      id: 4,
      title: 'Extreme Vibe Fitness',
      category: 'Fitness & Gym',
      description: 'A professional multi-page gym website with gallery, blog, membership plans, and a research-based UX structure built to increase member sign-ups.',
      url: 'https://extreme-vibe-fitness-extreme-gym.vercel.app/',
      tags: ['Business Website', 'Gallery', 'Blog', 'SEO'],
      stats: { type: 'Business Site', pages: '6 Pages' },
    },
    // ── 5 ──
    {
      id: 5,
      title: 'Mini Bazaar',
      category: 'E-Commerce',
      description: 'A feature-rich online marketplace built for seamless buying and selling, with product listings, search filters, and a clean mobile-first shopping experience.',
      url: 'https://minibazaar-two.vercel.app/',
      tags: ['E-Commerce', 'Marketplace', 'Responsive', 'SEO'],
      stats: { type: 'Marketplace', design: 'Mobile-First' },
    },
    // ── 6 ──
    {
      id: 6,
      title: 'Luma.lk',
      category: 'Lifestyle & Retail',
      description: 'An elegant lifestyle brand website for a Sri Lankan retailer, featuring product showcases, brand storytelling, and a refined visual experience that elevates the brand.',
      url: 'https://www.luma.lk/',
      tags: ['Lifestyle', 'Retail', 'Branding', 'Responsive'],
      stats: { type: 'Brand Website', market: 'Sri Lanka' },
    },
    // ── 7 ──
    {
      id: 7,
      title: 'SNL.lk',
      category: 'Corporate',
      description: 'A professional corporate website for a leading Sri Lankan business, designed with credibility-focused UI, clean content hierarchy, and strong brand identity.',
      url: 'https://www.snl.lk/',
      tags: ['Corporate', 'Branding', 'SEO', 'Responsive'],
      stats: { type: 'Corporate Site', market: 'Sri Lanka' },
    },
    // ── 8 ──
    {
      id: 8,
      title: 'Techfore Store',
      category: 'Technology / E-Commerce',
      description: 'A modern tech product store with a structured product catalogue, category filtering, and a performance-optimised frontend built for high conversion rates.',
      url: 'https://techfore-store-3pvk8106.devinapps.com/',
      tags: ['E-Commerce', 'Tech Products', 'Performance', 'SEO'],
      stats: { type: 'Tech Store', optimised: 'High-Speed' },
    },
    // ── 9 ──
    {
      id: 9,
      title: 'Sky Gym',
      category: 'Fitness & Gym',
      description: 'A sleek and modern gym website designed for premium branding, featuring smooth animations, membership tiers, and a fully responsive mobile layout.',
      url: 'https://sky-gym-kappa.vercel.app/',
      tags: ['Premium Design', 'Animations', 'Mobile-First', 'SEO'],
      stats: { type: 'Gym Website', design: 'Premium' },
    },
    // ── 10 ──
    {
      id: 10,
      title: 'OSRO Hospital',
      category: 'Healthcare',
      description: 'A professional private hospital website built to build patient trust, with department listings, doctor profiles, appointment inquiry forms, and a compassionate design language.',
      url: 'https://osro-osro-hospital.vercel.app/',
      tags: ['Healthcare', 'Hospital', 'Responsive', 'SEO'],
      stats: { type: 'Private Hospital', sector: 'Healthcare' },
    },
    // ── 11 ──
    {
      id: 11,
      title: 'Lanka Cyber News',
      category: 'Media / News',
      description: 'Delivered comprehensive SEO optimisation and security hardening for this leading Sri Lankan tech news portal, significantly improving search visibility and site safety.',
      url: 'http://lankacybernews.lk/',
      tags: ['SEO', 'Security', 'News Portal', 'Sri Lanka'],
      stats: { service: 'SEO + Security', market: 'Sri Lanka' },
    },
    // ── 12 ──
    {
      id: 12,
      title: 'Newsora',
      category: 'Media / News',
      description: 'Performed in-depth SEO strategy and security vulnerability fixes for Newsora, boosting organic rankings and protecting the platform from common web threats.',
      url: 'https://newsora.lk/',
      tags: ['SEO', 'Security', 'News Portal', 'Performance'],
      stats: { service: 'SEO + Security', result: 'Top Rankings' },
    },
    // ── 13–16 ── dummy projects
    {
      id: 13,
      title: 'E-Commerce Revolution',
      category: 'Fashion & Retail',
      description: 'A luxury fashion e-commerce platform with AI-powered recommendations, virtual try-on features, and seamless checkout experience.',
      image: '/work-ecommerce.jpg',
      tags: ['React', 'Next.js', 'AI', 'Stripe'],
      stats: { users: '50K+', revenue: '+150%' },
    },
    {
      id: 14,
      title: 'FinTech Dashboard',
      category: 'Finance',
      description: 'Real-time financial analytics dashboard with predictive modeling, portfolio management, and automated trading insights.',
      image: '/work-fintech.jpg',
      tags: ['Vue.js', 'Python', 'TensorFlow', 'AWS'],
      stats: { users: '10K+', transactions: '$2M+' },
    },
    {
      id: 15,
      title: 'HealthAI App',
      category: 'Healthcare',
      description: 'AI-powered health monitoring application with symptom checker, appointment scheduling, and personalized health insights.',
      image: '/work-healthai.jpg',
      tags: ['React Native', 'Node.js', 'OpenAI', 'MongoDB'],
      stats: { users: '100K+', rating: '4.8★' },
    },
    {
      id: 16,
      title: 'Smart City IoT',
      category: 'Technology',
      description: 'IoT platform for smart city management, integrating traffic monitoring, energy optimization, and public safety systems.',
      image: '/work-smartcity.jpg',
      tags: ['IoT', 'Azure', 'React', 'PostgreSQL'],
      stats: { sensors: '5K+', efficiency: '+40%' },
    },
  ]

  const nextProject = useCallback(() =>
    setActiveProject((prev) => (prev + 1) % projects.length), [projects.length])
  const prevProject = useCallback(() =>
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length), [projects.length])

  /* Auto-swipe every 3 s, pauses on hover */
  useEffect(() => {
    if (isPaused) return
    const id = setInterval(nextProject, 15000)
    return () => clearInterval(id)
  }, [isPaused, nextProject])

  const current = projects[activeProject]

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* Section Header */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <span className="inline-block text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4">Portfolio</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Selected <span className="text-slate-300">Works</span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-md">
            Explore our latest projects that showcase our expertise in building innovative digital solutions.
          </p>
        </div>

        {/* ── Featured card — two-column layout ── */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div
            className="glass-card rounded-3xl overflow-hidden border border-cyan-500/20 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10 z-40">
              {!isPaused && (
                <div key={`pb-${activeProject}`} className="works-progress-bar h-full bg-cyan-400" />
              )}
            </div>

            {/* Counter */}
            <div className="absolute top-3 right-3 z-40 text-xs text-white/50 font-mono bg-navy-950/60 px-2 py-1 rounded">
              {String(activeProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </div>

            <div className="grid lg:grid-cols-2 lg:h-[460px]">

              {/* Left — iframe or image, fills column */}
              <div ref={featuredRef} className="relative h-64 lg:h-full overflow-hidden group">
                {current.url ? (
                  <>
                    <div className="absolute inset-0 bg-navy-950">
                      <iframe
                        key={current.url}
                        src={current.url}
                        title={current.title}
                        loading="lazy"
                        style={{
                          width: '1280px',
                          height: '1024px',
                          transform: `scale(${iframeScale})`,
                          transformOrigin: 'top left',
                          pointerEvents: 'none',
                          border: 'none',
                          display: 'block',
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/40 to-transparent lg:from-transparent lg:via-navy-950/40 lg:to-navy-950/80 z-10 pointer-events-none" />
                    <div
                      className="absolute inset-0 z-20 cursor-pointer flex items-center justify-center"
                      onClick={() => window.open(current.url, '_blank')}
                    >
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 bg-cyan-500 text-navy-950 font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm shadow-glow">
                        <ExternalLink className="w-4 h-4" />
                        Visit Website
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 flex gap-2 z-30">
                      <button
                        onClick={(e) => { e.stopPropagation(); prevProject() }}
                        className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-cyan-500/20 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextProject() }}
                        className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white hover:bg-cyan-500/20 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/40 to-transparent lg:from-transparent lg:via-navy-950/40 lg:to-navy-950/80" />
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
                  </>
                )}
              </div>

              {/* Right — content */}
              <div className="p-6 lg:p-10 flex flex-col justify-center lg:overflow-y-auto">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium">
                    {current.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {current.tags.map((tag, i) => (
                      <span key={i} className="text-slate-500 text-xs">
                        {tag}{i < current.tags.length - 1 && ' •'}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4">
                  {current.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6 text-sm lg:text-base">
                  {current.description}
                </p>

                <div className="flex gap-6 mb-6 flex-wrap">
                  {Object.entries(current.stats).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-white font-heading font-bold text-xl">{value}</div>
                      <div className="text-slate-500 text-xs capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {current.url ? (
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit inline-flex items-center gap-2 bg-white text-navy-950 hover:bg-slate-100 font-semibold px-6 py-3 rounded-lg transition-colors border border-transparent shadow-sm hover:shadow-md group"
                  >
                    View Live Site
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Button className="w-fit bg-white text-navy-950 hover:bg-slate-100 font-semibold px-6 py-3 rounded-lg transition-colors border border-transparent shadow-sm hover:shadow-md group">
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail strip — horizontal scroll */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`relative flex-shrink-0 w-52 aspect-video rounded-xl overflow-hidden snap-start transition-all duration-300 ${
                    activeProject === index
                      ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-navy-950'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  {project.url ? (
                    <div className="absolute inset-0 bg-navy-950 overflow-hidden">
                      <iframe
                        src={project.url}
                        title={project.title}
                        loading="lazy"
                        style={{
                          width: '1280px',
                          height: '720px',
                          transform: 'scale(0.163)',
                          transformOrigin: 'top left',
                          pointerEvents: 'none',
                          border: 'none',
                          display: 'block',
                        }}
                      />
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="text-white font-heading font-semibold text-xs truncate">{project.title}</div>
                    <div className="text-cyan-400 text-[10px]">{project.category}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={() => navigate('/promotions/gym-website-packages')}
              className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
            >
              View all gym works
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-slate-400 mb-4">Have a project in mind? Let&apos;s create something amazing together.</p>
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
