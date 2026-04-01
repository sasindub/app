import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            Frequently Asked <span className="text-slate-300">Questions</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Everything you need to know about our web development, AI, and enterprise software services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="glass-card border-none rounded-xl px-6">
            <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-cyan-400 hover:no-underline">
              What is TIOSS Solutions?
            </AccordionTrigger>
            <AccordionContent className="text-slate-400 text-base leading-relaxed">
              TIOSS (The Icon of Software Solutions) is a premier technology partner that helps businesses navigate digital transformation. We specialize in designing and building custom software, high-performance web applications, and intelligent AI automation tools that drive measurable growth.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="glass-card border-none rounded-xl px-6">
            <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-cyan-400 hover:no-underline">
              Is TIOSS a Sri Lankan company?
            </AccordionTrigger>
            <AccordionContent className="text-slate-400 text-base leading-relaxed">
              Yes, TIOSS Solutions is proudly headquartered as a software company in Sri Lanka. We leverage the country's world-class engineering talent to deliver exceptional onshore and offshore software development services to local boundaries and global enterprises alike.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="glass-card border-none rounded-xl px-6">
            <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-cyan-400 hover:no-underline">
              What services does TIOSS provide?
            </AccordionTrigger>
            <AccordionContent className="text-slate-400 text-base leading-relaxed">
              We offer a comprehensive suite of digital engineering services. This includes custom full-stack software development, responsive corporate web design, e-commerce platform creation, dedicated offshore team augmentation, and advanced data analytics.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="glass-card border-none rounded-xl px-6">
            <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-cyan-400 hover:no-underline">
              Do you offer web development in Sri Lanka?
            </AccordionTrigger>
            <AccordionContent className="text-slate-400 text-base leading-relaxed">
              Absolutely. We are recognized as a top web development company in Sri Lanka. Our team creates highly optimized, SEO-friendly, and mobile-responsive websites utilizing modern frameworks like React, Next.js, and Node.js to ensure flawless digital experiences.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="glass-card border-none rounded-xl px-6">
            <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-cyan-400 hover:no-underline">
              Do you build AI solutions?
            </AccordionTrigger>
            <AccordionContent className="text-slate-400 text-base leading-relaxed">
              Yes, we pioneer AI solutions in Sri Lanka. Our Data Science and Machine Learning engineers can build and integrate custom Generative AI agents, operational predictive analytics, and Natural Language Processing (NLP) tools directly into your existing software ecosystems to streamline your business operations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default FAQ
