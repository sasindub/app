import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Works from '../sections/Works'
import FAQ from '../components/FAQ'
import Contact from '../sections/Contact'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>TIOSS Solutions | Web Development Company in Sri Lanka</title>
        <meta name="description" content="TIOSS Solutions is the premier Web Development Company in Sri Lanka, providing custom web applications, AI solutions, and enterprise software." />
        <link rel="canonical" href="https://www.tiossolution.xyz/" />
        <meta property="og:title" content="TIOSS Solutions | Web Development Company in Sri Lanka" />
        <meta property="og:description" content="TIOSS Solutions is the premier Web Development Company in Sri Lanka, providing custom web applications, AI solutions, and enterprise software." />
        <meta property="og:url" content="https://www.tiossolution.xyz/" />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD Organization Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TIOSS Solutions",
              "url": "https://www.tiossolution.xyz/",
              "logo": "https://www.tiossolution.xyz/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+94-11-000-0000",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/theiconofsoftwaresolutions/",
                "https://www.linkedin.com/company/theiconofsoftwaresolutions/"
              ]
            }
          `}
        </script>
        
        {/* JSON-LD LocalBusiness Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "TIOSS Solutions",
              "image": "https://www.tiossolution.xyz/hero-3d-card.jpg",
              "@id": "https://www.tiossolution.xyz/",
              "url": "https://www.tiossolution.xyz/",
              "telephone": "+94-11-000-0000",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Colombo",
                "addressCountry": "LK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 6.9271,
                "longitude": 79.8612
              }
            }
          `}
        </script>
      </Helmet>

      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Works />
        <FAQ />
        <Contact />
      </main>
    </>
  )
}

export default Home
