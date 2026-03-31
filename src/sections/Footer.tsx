import { 
  Linkedin, 
  Facebook, 
  MessageCircle, 
  Mail, 
  Phone,
  MapPin,
  ArrowUp,
  Heart
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Our Works', id: 'works' },
    { label: 'Contact', id: 'contact' },
  ]

  const services = [
    'Web Development',
    'AI Solutions',
    'Mobile Apps',
    'UI/UX Design',
    'Chatbot Development',
    'LLM Integration',
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/theiconofsoftwaresolutions/?viewAsMember=true',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://web.facebook.com/theiconofsoftwaresolutions/?_rdc=1&_rdr#',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/94771163468',
    },
  ]

  return (
    <footer className="relative bg-navy-950 border-t border-white/5">
      {/* Large Background Text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[20vw] font-heading font-bold text-white/[0.02] whitespace-nowrap select-none">
          TIOSS
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10">
                  <img 
                    src="/logo.png" 
                    alt="TIOSS Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-white font-heading font-bold text-xl">TIOSS</span>
                  <span className="block text-cyan-400 text-[10px] -mt-1 tracking-wider">
                    The Icon of Software Solutions
                  </span>
                </div>
              </button>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Sri Lanka&apos;s premier software development company, specializing in 
                web applications, AI solutions, and digital transformation.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-500/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-heading font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-heading font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-slate-400 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-heading font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+94774186332"
                    className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">+94 774 186 332</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+94771163468"
                    className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">+94 771 163 468</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@tioss.lk"
                    className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">info@tioss.lk</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-slate-400">
                    <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Colombo, Sri Lanka</span>
                  </div>
                </li>
                <li>
                  <a
                    href="https://wa.me/94771163468"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">WhatsApp Us</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm text-center sm:text-left">
                &copy; {new Date().getFullYear()} TIOSS. All rights reserved. Made with{' '}
                <Heart className="w-3 h-3 inline text-red-500" /> in Sri Lanka
              </p>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
