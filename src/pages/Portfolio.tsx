import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ExternalLink } from 'lucide-react'

/* ─────────────────────────────────────────
   Project data
───────────────────────────────────────── */
const projects = [
  {
    id: 1,
    title: 'Mr. Tailor',
    category: 'Fashion & Services',
    url: 'https://mrtailor.vercel.app/',
    tags: ['Services', 'Fashion', 'WhatsApp'],
  },
  {
    id: 2,
    title: 'Iron Edge VIP Gym',
    category: 'Fitness & Gym',
    url: 'https://ironedge-vip-gym-website.vercel.app/',
    tags: ['Landing Page', 'WhatsApp', 'SEO'],
  },
  {
    id: 3,
    title: 'Kids & Junior',
    category: 'Kids E-Commerce',
    url: 'https://frontend-blond-five-96.vercel.app/',
    tags: ['E-Commerce', 'Kids', 'Responsive'],
  },
  {
    id: 4,
    title: 'Extreme Vibe Fitness',
    category: 'Fitness & Gym',
    url: 'https://extreme-vibe-fitness-extreme-gym.vercel.app/',
    tags: ['Business Website', 'Gallery', 'Blog'],
  },
  {
    id: 5,
    title: 'Mini Bazaar',
    category: 'E-Commerce',
    url: 'https://minibazaar-two.vercel.app/',
    tags: ['Marketplace', 'Responsive', 'SEO'],
  },
  {
    id: 6,
    title: 'Luma.lk',
    category: 'Lifestyle & Retail',
    url: 'https://www.luma.lk/',
    tags: ['Retail', 'Branding', 'Responsive'],
  },
  {
    id: 7,
    title: 'SNL.lk',
    category: 'Corporate',
    url: 'https://www.snl.lk/',
    tags: ['Corporate', 'Branding', 'SEO'],
  },
  {
    id: 8,
    title: 'Techfore Store',
    category: 'Technology',
    url: 'https://techfore-store-3pvk8106.devinapps.com/',
    tags: ['E-Commerce', 'Tech Products', 'Performance'],
  },
  {
    id: 9,
    title: 'Sky Gym',
    category: 'Fitness & Gym',
    url: 'https://sky-gym-kappa.vercel.app/',
    tags: ['Premium Design', 'Animations', 'SEO'],
  },
  {
    id: 10,
    title: 'OSRO Hospital',
    category: 'Healthcare',
    url: 'https://osro-osro-hospital.vercel.app/',
    tags: ['Hospital', 'Healthcare', 'SEO'],
  },
  {
    id: 11,
    title: 'Lanka Cyber News',
    category: 'Media & News',
    url: 'http://lankacybernews.lk/',
    tags: ['SEO', 'Security', 'News Portal'],
  },
  {
    id: 12,
    title: 'Newsora',
    category: 'Media & News',
    url: 'https://newsora.lk/',
    tags: ['SEO', 'Security', 'Performance'],
  },
]

/* ─────────────────────────────────────────
   Laptop card component
───────────────────────────────────────── */
function LaptopCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const screenRef = useRef<HTMLDivElement>(null)
  const cardRef   = useRef<HTMLDivElement>(null)
  const [scale, setScale]     = useState(0.28)
  const [visible, setVisible] = useState(false)
  const [loaded, setLoaded]   = useState(false)

  /* Dynamic iframe scale */
  useEffect(() => {
    const el = screenRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / 1280)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  /* Reveal on scroll */
  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect() } },
      { threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  /* Lazy-load iframe when card enters viewport */
  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(() => setLoaded(true), index * 80)
    return () => clearTimeout(timer)
  }, [visible, index])

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      {/* Laptop */}
      <div className="relative transition-transform duration-400 group-hover:-translate-y-2">

        {/* Screen lid */}
        <div className="relative rounded-t-xl border-2 border-slate-600/60 bg-slate-900 overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.5)] group-hover:shadow-[0_24px_64px_rgba(0,0,0,0.6),0_0_32px_rgba(6,182,212,0.12)] group-hover:border-cyan-500/30 transition-all duration-400">
          {/* Camera dot */}
          <div className="flex justify-center py-1.5 bg-slate-900/90">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-600/70" />
          </div>

          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 bg-slate-800/80 border-t border-b border-slate-700/50 px-2.5 py-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400/80 flex-shrink-0" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/80 flex-shrink-0" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-400/80 flex-shrink-0" />
            <div className="flex-1 min-w-0 bg-slate-700/50 rounded px-2 py-0.5 ml-1.5 border border-slate-600/30">
              <span className="text-slate-500 text-[8px] truncate block leading-tight">{project.url}</span>
            </div>
          </div>

          {/* Screen content */}
          <div
            ref={screenRef}
            className="relative bg-slate-800 overflow-hidden"
            style={{ aspectRatio: '16 / 9' }}
          >
            {loaded ? (
              <iframe
                src={project.url}
                title={project.title}
                loading="lazy"
                style={{
                  width: '1280px',
                  height: '720px',
                  transform: `scale(${scale})`,
                  transformOrigin: 'top left',
                  pointerEvents: 'none',
                  border: 'none',
                  display: 'block',
                }}
              />
            ) : (
              /* Skeleton while not yet loaded */
              <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center">
                <div className="space-y-2 w-3/4">
                  <div className="h-2 bg-slate-700/60 rounded animate-pulse" />
                  <div className="h-2 bg-slate-700/40 rounded animate-pulse w-4/5" />
                  <div className="h-2 bg-slate-700/30 rounded animate-pulse w-2/3" />
                </div>
              </div>
            )}

            {/* Hover overlay */}
            <div
              className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/55 transition-all duration-300 flex items-center justify-center cursor-pointer"
              onClick={() => window.open(project.url, '_blank')}
            >
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 flex items-center gap-2 bg-cyan-500 text-navy-950 font-bold px-4 py-2 rounded-xl text-xs shadow-glow">
                <ExternalLink className="w-3.5 h-3.5" />
                Visit Website
              </div>
            </div>
          </div>
        </div>

        {/* Hinge */}
        <div className="h-2 bg-gradient-to-b from-slate-600/70 to-slate-700/70 border-x-2 border-slate-600/40" />

        {/* Base */}
        <div className="h-4 bg-gradient-to-b from-slate-700/80 to-slate-800/80 rounded-b-xl border-x-2 border-b-2 border-slate-600/40 mx-[-2px] flex items-center justify-center">
          <div className="w-12 h-1.5 rounded-sm bg-slate-600/35 border border-slate-500/15" />
        </div>

        {/* Reflection */}
        <div className="h-px mx-8 mt-0.5 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      </div>

      {/* Info below laptop */}
      <div className="mt-5 text-center px-2">
        <h3 className="font-heading font-semibold text-white text-sm truncate group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          {project.category}
        </span>
        <div className="flex flex-wrap justify-center gap-1.5 mt-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-[9px] text-slate-500">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  /* Only show filters that have at least one project */
  const usedFilters = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

  return (
    <>
      <Helmet>
        <title>Portfolio | TIOSS Solutions – Web Development Sri Lanka</title>
        <meta name="description" content="Explore TIOSS Solutions' portfolio of professional websites built for gyms, e-commerce, corporate businesses, hospitals, and media brands across Sri Lanka." />
        <link rel="canonical" href="https://www.tiossolution.xyz/portfolio" />
      </Helmet>

      <div className="relative min-h-screen">
        {/* Background glows */}
        <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        {/* ── Hero ── */}
        <section className="pt-36 pb-12 px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto text-center">
            <span className="inline-block text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">
              Our Work
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Portfolio
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              A showcase of the websites and digital experiences we've built for clients across Sri Lanka and beyond.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-10 mt-10">
              {[
                { value: `${projects.length}+`, label: 'Live Projects' },
                { value: '100%', label: 'Client Satisfaction' },
                { value: '7+', label: 'Industries' },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="font-heading text-3xl font-bold text-cyan-400">{s.value}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Filter tabs ── */}
        <section className="pb-10 px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {usedFilters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-cyan-500 text-navy-950'
                      : 'border border-white/10 text-slate-400 hover:border-cyan-500/40 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Laptop grid ── */}
        <section className="pb-24 px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
              {filtered.map((project, index) => (
                <LaptopCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-24 text-slate-500">
                No projects in this category yet.
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}

export default Portfolio
