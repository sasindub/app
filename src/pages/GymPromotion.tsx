import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Check, Star, MessageCircle, ChevronRight, Monitor, ExternalLink, LayoutDashboard, UserCheck, Layers, Building2, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const packages = [
  {
    id: 'starter',
    name: 'Starter Landing Page',
    price: 'LKR 65,000',
    tagline: 'Perfect for gyms wanting a professional online presence and direct client inquiries.',
    recommended: false,
    features: [
      'Modern responsive landing page',
      'Mobile-friendly design',
      'WhatsApp integration with custom messages',
      'Professional UI/UX design',
      'SSL Certificate',
      'Basic & AI-Based SEO Optimization',
      '1 Year Hosting included',
      'Social media integration',
      'Fast loading performance optimization',
      'Contact form integration',
      'Google Maps integration',
    ],
    sections: [
      'Hero Section with call-to-action',
      'About the Gym Section',
      'Membership Packages & Pricing',
      'Trainer / Coach Introduction Section',
      'Contact & WhatsApp Inquiry Section',
    ],
    bestFor: ['New gyms', 'Personal trainers', 'Small fitness centers', 'Gyms needing quick online visibility'],
    cta: 'Get Started',
    accent: 'from-cyan-500/20 to-blue-500/10',
    border: 'border-cyan-500/20',
    btnClass: 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10',
  },
  {
    id: 'professional',
    name: 'Professional Business Website',
    price: 'LKR 95,000',
    tagline: 'A fully integrated professional gym website designed to attract more members and improve online branding.',
    recommended: true,
    features: [
      'Multi-section professional website',
      'Fully responsive modern design',
      'WhatsApp integration with automated messages',
      'Gallery page for photos & transformations',
      'Blog page for fitness articles & SEO growth',
      'Professional UI/UX design',
      'SSL Certificate',
      'SEO & AI-Based SEO Optimization',
      '1 Year Hosting + 1 Year Domain',
      'Social media integration',
      'Speed & performance optimization',
      'Google Maps integration',
      'Inquiry & membership forms',
      'Trainer showcase section',
      'Testimonials & reviews section',
      'Research-based UX structure',
    ],
    sections: [
      'Home Page',
      'About Us',
      'Membership Packages',
      'Gallery',
      'Blog / Fitness Articles',
      'Contact Page',
    ],
    bestFor: ['Established gyms', 'Fitness studios', 'CrossFit centers', 'Brands focused on online marketing'],
    cta: 'Get Started',
    accent: 'from-cyan-500/30 to-blue-500/20',
    border: 'border-cyan-400/60',
    btnClass: 'bg-cyan-500 text-navy-950 hover:bg-cyan-400 font-bold',
  },
  {
    id: 'enterprise',
    name: 'Custom Enterprise Website',
    price: 'Negotiable',
    priceNote: 'According to Requirements & Budget',
    tagline: 'A fully customizable premium solution designed according to your business goals, branding, and budget.',
    recommended: false,
    features: [
      'Fully customized website development',
      'Unlimited design possibilities',
      'Multiple custom pages and systems',
      'WhatsApp integration',
      'Professional UI/UX design',
      'SSL Certificate',
      'SEO & AI-Based SEO Optimization',
      '1 Year Hosting + 1 Year Domain',
      'Social media integration',
      'Custom animations & premium layouts',
      'Advanced speed optimization',
      'Booking systems',
      'Online membership systems',
      'Payment gateway integration',
      'Custom dashboards & management systems',
      'Blog, gallery, trainer management & more',
    ],
    sections: [],
    bestFor: ['Large gyms', 'Fitness franchises', 'Premium fitness brands', 'Businesses needing advanced functionality'],
    cta: 'Contact Us',
    accent: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/20',
    btnClass: 'border border-blue-400 text-blue-400 hover:bg-blue-500/10',
  },
]

const gymWorks = [
  {
    title: 'Iron Edge VIP Gym',
    type: 'Gym Landing Page',
    url: 'https://ironedge-vip-gym-website.vercel.app/',
  },
  {
    title: 'Extreme Vibe Fitness',
    type: 'Gym Business Website',
    url: 'https://extreme-vibe-fitness-extreme-gym.vercel.app/',
  },
  {
    title: 'Sky Gym',
    type: 'Gym Website',
    url: 'https://sky-gym-kappa.vercel.app/',
  },
]

const IFRAME_W = 1280
const SCREEN_W = 400
const SCALE = SCREEN_W / IFRAME_W
const SCREEN_H = Math.round(IFRAME_W * 0.625 * SCALE)

function LaptopMockup({ work }: { work: typeof gymWorks[0] }) {
  return (
    <div
      className="flex-shrink-0 group cursor-pointer"
      style={{ width: SCREEN_W }}
      onClick={() => window.open(work.url, '_blank')}
    >
      <div className="relative">
        {/* Lid / screen bezel */}
        <div className="bg-slate-800 rounded-t-2xl border-2 border-slate-600 shadow-2xl overflow-hidden">
          {/* Browser chrome bar */}
          <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-2 border-b border-slate-700">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            <div className="flex-1 bg-slate-700 rounded-md px-3 py-1 ml-2 text-slate-400 text-[10px] truncate leading-none">
              {work.url}
            </div>
          </div>

          {/* iframe viewport */}
          <div
            className="relative overflow-hidden bg-white"
            style={{ width: SCREEN_W, height: SCREEN_H }}
          >
            <iframe
              src={work.url}
              title={work.title}
              loading="lazy"
              style={{
                width: IFRAME_W,
                height: Math.round(IFRAME_W * 0.625),
                transform: `scale(${SCALE})`,
                transformOrigin: 'top left',
                pointerEvents: 'none',
                border: 'none',
                display: 'block',
              }}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/55 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                <div className="flex items-center gap-2 bg-cyan-500 text-navy-950 font-bold px-6 py-3 rounded-xl text-sm shadow-glow">
                  <ExternalLink className="w-4 h-4" />
                  Visit Website
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hinge strip */}
        <div className="h-3 bg-gradient-to-b from-slate-600 to-slate-700 border-x-2 border-b-2 border-slate-600" />
        {/* Base / trackpad area */}
        <div className="h-4 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-2xl mx-4 shadow-lg" />
        {/* Notch */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-slate-900 rounded-full" />
      </div>

      {/* Label */}
      <div className="mt-5 text-center">
        <p className="text-white font-semibold text-sm">{work.title}</p>
        <p className="text-cyan-400/70 text-xs mt-0.5">{work.type}</p>
      </div>
    </div>
  )
}

function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal-section ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

const GymPromotion = () => {
  const navigate = useNavigate()

  const handleCTA = (pkg: typeof packages[0]) => {
    if (pkg.id === 'enterprise') {
      navigate('/#contact')
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const msg = encodeURIComponent(
        `Hi TIOSS! I'm interested in the ${pkg.name} Package (${pkg.price}). Please share more details.`
      )
      window.open(`https://wa.me/94774186332?text=${msg}`, '_blank')
    }
  }

  return (
    <>
      <Helmet>
        <title>Gym Website Development Packages Sri Lanka | TIOSS Solutions</title>
        <meta name="description" content="Professional gym website development packages in Sri Lanka by TIOSS Solutions. Starter, Professional & Enterprise packages starting from LKR 65,000." />
        <link rel="canonical" href="https://www.tiossolution.xyz/promotions/gym-website-packages" />
      </Helmet>

      <div className="relative min-h-screen">
        {/* Hero */}
        <section className="pt-28 pb-4 px-4 sm:px-6 lg:px-12 xl:px-20 relative overflow-hidden">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <RevealSection>
              <div className="text-center space-y-3 max-w-3xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
                  Elevate Your Fitness Brand
                </h1>
                <div className="flex flex-wrap justify-center gap-5">
                  {['Modern UI/UX Design', 'SEO-Optimized', 'Mobile-First', 'Fast & Secure'].map(tag => (
                    <div key={tag} className="flex items-center gap-1.5 text-slate-400 text-xs">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16 px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <RevealSection>
              <div className="text-center mb-14">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
                  Gym Website Development Packages
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto">
                  Choose the package that fits your gym's goals and budget. All packages include professional design and ongoing support.
                </p>
              </div>
            </RevealSection>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {packages.map((pkg, index) => (
                <RevealSection key={pkg.id} className={index === 1 ? 'lg:-mt-4' : ''}>
                  <div
                    className={`relative rounded-2xl border ${pkg.border} bg-gradient-to-b ${pkg.accent} glass-card overflow-hidden card-hover transition-all duration-300 h-full`}
                  >
                    {/* Recommended badge */}
                    {pkg.recommended && (
                      <div className="absolute top-0 left-0 right-0 flex justify-center">
                        <div className="inline-flex items-center gap-1.5 bg-cyan-500 text-navy-950 text-xs font-bold px-5 py-1.5 rounded-b-xl">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          MOST POPULAR
                        </div>
                      </div>
                    )}

                    <div className={`p-7 flex flex-col gap-6 h-full ${pkg.recommended ? 'pt-10' : ''}`}>
                      {/* Header */}
                      <div>
                        <h3 className="text-lg font-heading font-bold text-white mb-1">{pkg.name}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{pkg.tagline}</p>
                      </div>

                      {/* Price */}
                      <div>
                        <div className={`text-3xl font-heading font-extrabold ${pkg.recommended ? 'text-cyan-400' : 'text-white'}`}>
                          {pkg.price}
                        </div>
                        {pkg.priceNote && (
                          <p className="text-slate-500 text-xs mt-1">{pkg.priceNote}</p>
                        )}
                      </div>

                      {/* Features */}
                      <div className="flex-1 space-y-2.5">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Included Features</p>
                        {pkg.features.map((f) => (
                          <div key={f} className="flex items-start gap-2.5">
                            <div className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${pkg.recommended ? 'bg-cyan-500/20' : 'bg-white/10'}`}>
                              <Check className={`w-2.5 h-2.5 ${pkg.recommended ? 'text-cyan-400' : 'text-slate-400'}`} />
                            </div>
                            <span className="text-sm text-slate-300 leading-tight">{f}</span>
                          </div>
                        ))}

                        {pkg.sections.length > 0 && (
                          <>
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider pt-3 pb-1">
                              {pkg.id === 'professional' ? 'Website Pages' : 'Website Sections'}
                            </p>
                            {pkg.sections.map((s, i) => (
                              <div key={s} className="flex items-center gap-2.5">
                                <span className={`flex-shrink-0 text-xs font-bold w-4 h-4 rounded flex items-center justify-center ${pkg.recommended ? 'text-cyan-400' : 'text-slate-500'}`}>
                                  {i + 1}
                                </span>
                                <span className="text-sm text-slate-300">{s}</span>
                              </div>
                            ))}
                          </>
                        )}
                      </div>

                      {/* Best For */}
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Best For</p>
                        <div className="flex flex-wrap gap-1.5">
                          {pkg.bestFor.map(b => (
                            <span key={b} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">{b}</span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Button
                        variant={pkg.recommended ? 'default' : 'ghost'}
                        onClick={() => handleCTA(pkg)}
                        className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${pkg.btnClass}`}
                      >
                        {pkg.id !== 'enterprise' && <MessageCircle className="w-4 h-4" />}
                        {pkg.cta}
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </section>

        {/* Our Works showcase — now below packages */}
        <section className="pt-6 pb-16 px-4 sm:px-6 lg:px-12 xl:px-20 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <RevealSection>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mb-2">
                    <Monitor className="w-4 h-4" />
                    Our Portfolio
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    Gym Websites We've Built
                  </h2>
                  <p className="text-slate-400 text-sm mt-2 max-w-md">
                    A glimpse at the professional gym websites we've crafted — each one designed to convert visitors into members.
                  </p>
                </div>
                <button
                  onClick={() => {
                    navigate('/#works')
                    setTimeout(() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' }), 100)
                  }}
                  className="flex-shrink-0 flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                >
                  View All Works <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </RevealSection>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-navy-950/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-navy-950/80 to-transparent z-10 pointer-events-none" />
              <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide px-2 snap-x snap-mandatory">
                {gymWorks.map((work) => (
                  <div key={work.title} className="snap-start">
                    <LaptopMockup work={work} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <RevealSection>
              <div className="glass-card rounded-2xl border border-cyan-500/15 p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
                      Why Choose{' '}
                      <span className="text-cyan-400">TIOSS</span> for Your Gym Website?
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      We develop professional gym websites focused on attracting more clients, improving online visibility, and building a strong fitness brand presence.
                    </p>
                    <Button
                      onClick={() => {
                        navigate('/#contact')
                        setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)
                      }}
                      className="bg-white text-navy-950 hover:bg-slate-100 font-semibold px-6 py-2.5 rounded-xl"
                    >
                      Start Your Project
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Research-based modern UI/UX',
                      'Mobile-first development',
                      'SEO-friendly architecture',
                      'Fast and secure websites',
                      'Designed to increase inquiries',
                      'Custom branding solutions',
                      'Professional support & guidance',
                      'High-conversion design approach',
                    ].map(point => (
                      <div key={point} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Gym Systems */}
        <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <RevealSection>
              <div className="text-center mb-14">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-cyan-400 text-xs font-medium mb-4">
                  <Activity className="w-3.5 h-3.5" />
                  Software Solutions
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3">
                  Smart Systems for Your Gym
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
                  Beyond a great website, we build the digital infrastructure that runs your fitness business — from billing and member management to trainer tracking and multi-branch control.
                </p>
              </div>
            </RevealSection>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  Icon: LayoutDashboard,
                  title: 'Gym Management System',
                  tagline: 'Run your entire gym from one dashboard.',
                  desc: 'Centralise members, payments, schedules, and staff in a single platform. Cut admin time and keep operations running without friction.',
                  features: ['Member management', 'Automated billing', 'Class scheduling', 'Staff & payroll', 'Analytics reports'],
                  iconColor: 'text-cyan-400',
                  iconBg: 'bg-cyan-500/10',
                  border: 'border-cyan-500/15',
                },
                {
                  Icon: UserCheck,
                  title: 'Personal Training Management',
                  tagline: 'Built for trainers who want to scale.',
                  desc: 'Handle client onboarding, session scheduling, progress tracking, and payments — all from a single PT-focused platform that keeps your clients accountable.',
                  features: ['Client onboarding', 'Session scheduling', 'Workout plans', 'Progress tracking', 'Payment management'],
                  iconColor: 'text-blue-400',
                  iconBg: 'bg-blue-500/10',
                  border: 'border-blue-500/15',
                },
                {
                  Icon: Layers,
                  title: 'All-in-One GMS',
                  tagline: 'The complete gym operating system.',
                  desc: 'Our most powerful solution — member lifecycle management, digital contracts & waivers, automated recurring billing, staff payroll, role-based access control, and multi-location analytics dashboards in one platform.',
                  features: ['Member lifecycle', 'Digital contracts & waivers', 'Recurring billing', 'Role-based access', 'Multi-location analytics', 'Staff payroll'],
                  iconColor: 'text-cyan-400',
                  iconBg: 'bg-cyan-500/10',
                  border: 'border-cyan-400/30',
                  featured: true,
                },
                {
                  Icon: Building2,
                  title: 'Multi-Branch GMS',
                  tagline: 'One system. Multiple locations.',
                  desc: 'Scale your gym brand across cities with centralised control, inter-branch reporting, and location-specific settings — all managed from a single admin panel.',
                  features: ['Centralised control', 'Inter-branch reports', 'Location-specific settings', 'Shared member database', 'Branch dashboards'],
                  iconColor: 'text-blue-400',
                  iconBg: 'bg-blue-500/10',
                  border: 'border-blue-500/15',
                },
                {
                  Icon: Activity,
                  title: 'PT Client Tracking System',
                  tagline: 'Coach better. Track smarter.',
                  desc: 'Purpose-built for personal trainers — log workouts, track body metrics, monitor adherence, and keep clients on target with visual goal timelines and accountability tools.',
                  features: ['Workout & progress logs', 'Body metrics tracking', 'Goal timelines', 'Adherence reports', 'Client accountability'],
                  iconColor: 'text-cyan-400',
                  iconBg: 'bg-cyan-500/10',
                  border: 'border-cyan-500/15',
                },
              ].map((sys) => (
                <RevealSection
                  key={sys.title}
                  className={`w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${sys.featured ? 'lg:ring-1 lg:ring-cyan-500/30' : ''}`}
                >
                  <div className={`h-full glass-card rounded-2xl border ${sys.border} p-6 flex flex-col gap-4 card-hover transition-all duration-300 ${sys.featured ? 'relative overflow-hidden' : ''}`}>
                    {sys.featured && (
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                    )}

                    {/* Icon */}
                    <div className={`w-11 h-11 rounded-xl ${sys.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <sys.Icon className={`w-5 h-5 ${sys.iconColor}`} />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="font-heading font-bold text-white text-base mb-0.5">{sys.title}</h3>
                      <p className={`text-xs font-medium ${sys.iconColor} mb-2`}>{sys.tagline}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{sys.desc}</p>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                      {sys.features.map(f => (
                        <span key={f} className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-slate-400">
                          <Check className="w-2.5 h-2.5 text-cyan-400 flex-shrink-0" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>

            {/* Systems CTA */}
            <RevealSection className="mt-12 text-center">
              <p className="text-slate-400 text-sm mb-4">Interested in a management system for your gym?</p>
              <Button
                onClick={() => window.open('https://wa.me/94774186332?text=' + encodeURIComponent('Hi TIOSS! I\'m interested in a gym management system. Can you share more details?'), '_blank')}
                className="inline-flex items-center gap-2 bg-cyan-500 text-navy-950 hover:bg-cyan-400 font-bold px-7 py-2.5 rounded-xl"
              >
                <MessageCircle className="w-4 h-4" />
                Discuss Your System
              </Button>
            </RevealSection>
          </div>
        </section>

        {/* Bottom CTA strip */}
        <section className="py-16 px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <RevealSection>
              <div className="text-center space-y-4">
                <p className="text-slate-400">
                  Ready to build a world-class website for your gym?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={() => window.open('https://wa.me/94774186332?text=' + encodeURIComponent('Hi TIOSS! I want to discuss a gym website for my fitness business.'), '_blank')}
                    className="bg-cyan-500 text-navy-950 hover:bg-cyan-400 font-bold px-8 py-3 rounded-xl flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </Button>
                  <Button
                    onClick={() => {
                      navigate('/#contact')
                      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)
                    }}
                    className="border border-white/20 text-white hover:bg-white/5 px-8 py-3 rounded-xl"
                  >
                    Send an Inquiry
                  </Button>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>
      </div>
    </>
  )
}

export default GymPromotion
