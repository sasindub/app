import { useEffect, useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navigation from './sections/Navigation'
import Footer from './sections/Footer'
import Home from './pages/Home'

// We will create these pages next
import WebDevelopmentSriLanka from './pages/WebDevelopmentSriLanka'
import SoftwareCompanySriLanka from './pages/SoftwareCompanySriLanka'
import AiSolutionsSriLanka from './pages/AiSolutionsSriLanka'
import Blogs from './pages/Blogs'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout() {
  const [scrollY, setScrollY] = useState(0)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={mainRef} className="relative min-h-screen bg-navy-950 overflow-x-hidden">
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
      </div>

      <Navigation scrollY={scrollY} />

      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-development-sri-lanka" element={<WebDevelopmentSriLanka />} />
        <Route path="/software-company-sri-lanka" element={<SoftwareCompanySriLanka />} />
        <Route path="/ai-solutions-sri-lanka" element={<AiSolutionsSriLanka />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
