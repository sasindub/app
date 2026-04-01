import { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavigationProps {
  scrollY: number
}

const Navigation = ({ scrollY }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const isScrolled = scrollY > 50
  const location = useLocation()
  const navigate = useNavigate()

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'works', label: 'Our Works' },
    { id: 'contact', label: 'Contact' },
    { id: '/blogs', label: 'Blogs', isRoute: true },
  ]

  useEffect(() => {
    if (location.pathname !== '/') return

    // If we have a hash from navigation, scroll to it on mount
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }

    const handleScroll = () => {
      const sections = navLinks.filter(l => !l.isRoute).map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 100

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navLinks.filter(l => !l.isRoute)[index].id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location])

  const scrollToSection = (link: { id: string, isRoute?: boolean }) => {
    setIsMenuOpen(false)
    
    if (link.isRoute) {
      navigate(link.id)
      return
    }

    if (location.pathname !== '/') {
      navigate('/#' + link.id)
    } else {
      const element = document.getElementById(link.id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass py-3 border-b border-cyan-500/20'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => {
                if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden group-hover:shadow-glow transition-shadow duration-300 bg-white/10">
                <img 
                  src="/logo.png" 
                  alt="TIOSS Logo" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-heading font-bold text-lg tracking-tight">
                  TIOSS
                </span>
                <span className="block text-cyan-400 text-[10px] -mt-1 tracking-wider">
                  The Icon of Software Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link)}
                  className={`nav-link text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.id
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+94774186332"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+94 774 186 332</span>
              </a>
              <Button
                onClick={() => scrollToSection({ id: 'contact' })}
                className="bg-white text-navy-950 hover:bg-slate-100 font-semibold px-6 py-2 rounded-lg transition-colors border border-transparent shadow-sm hover:shadow-md"
              >
                Start Project
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-navy-950/95 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)} />
        <div
          className={`absolute top-20 left-4 right-4 bg-navy-900/90 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-6 transition-all duration-500 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link)}
                className={`text-left py-3 px-4 rounded-xl transition-all duration-300 ${
                  activeSection === link.id
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a
                href="tel:+94774186332"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors py-2"
              >
                <Phone className="w-4 h-4" />
                <span>+94 774 186 332</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation
