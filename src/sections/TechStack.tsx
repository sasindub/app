import { useEffect, useRef, useState } from 'react'

const frontend = [
  { name: 'Next.js',      slug: 'nextdotjs',     color: 'ffffff' },
  { name: 'React.js',     slug: 'react',          color: '61dafb' },
  { name: 'TypeScript',   slug: 'typescript',     color: '3178c6' },
  { name: 'Tailwind CSS', slug: 'tailwindcss',    color: '06b6d4' },
  { name: 'GraphQL',      slug: 'graphql',        color: 'e10098' },
  { name: 'WordPress',    slug: 'wordpress',      color: '21759b' },
]

const backend = [
  { name: 'ASP.NET',      slug: 'dotnet',         color: '512bd4' },
  { name: 'Python',       slug: 'python',         color: 'ffd343' },
  { name: 'FastAPI',      slug: 'fastapi',        color: '009688' },
  { name: 'Flask',        slug: 'flask',          color: 'ffffff' },
  { name: 'Django',       slug: 'django',         color: '44b78b' },
  { name: 'Node.js',      slug: 'nodedotjs',      color: '5fa04e' },
  { name: 'LangChain',    slug: 'langchain',      color: '1C3C3C' },
  { name: 'OpenAI',       slug: 'openai',         color: 'ffffff' },
  { name: 'Redis',        slug: 'redis',          color: 'dc382d' },
  { name: 'Celery',       slug: 'celery',         color: '37814a' },
  { name: 'Swift',        slug: 'swift',          color: 'f05138' },
  { name: 'Java',         slug: 'java',           color: 'f89820' },
  { name: 'React Native', slug: 'react',          color: '61dafb' },
  { name: 'Flutter',      slug: 'flutter',        color: '54c5f8' },
]

const infra = [
  { name: 'AWS',           slug: 'amazonaws',         color: 'ff9900' },
  { name: 'Azure DevOps',  slug: 'azuredevops',       color: '0078d4' },
  { name: 'Docker',        slug: 'docker',            color: '2496ed' },
  { name: 'Kubernetes',    slug: 'kubernetes',        color: '326ce5' },
  { name: 'n8n',           slug: 'n8n',               color: 'ea4b71' },
  { name: 'Railway',       slug: 'railway',           color: 'ffffff' },
  { name: 'Vercel',        slug: 'vercel',            color: 'ffffff' },
  { name: 'Firebase',      slug: 'firebase',          color: 'ffca28' },
  { name: 'MongoDB',       slug: 'mongodb',           color: '47a248' },
  { name: 'PostgreSQL',    slug: 'postgresql',        color: '4169e1' },
  { name: 'MSSQL',         slug: 'microsoftsqlserver',color: 'cc2927' },
  { name: 'MySQL',         slug: 'mysql',             color: '4479a1' },
  { name: 'Cosmos DB',     slug: 'microsoftazure',    color: '0078d4' },
  { name: 'Supabase',      slug: 'supabase',          color: '3ecf8e' },
  { name: 'Prisma',        slug: 'prisma',            color: 'ffffff' },
  { name: 'Power BI',      slug: 'powerbi',           color: 'f2c811' },
  { name: 'Google Looker', slug: 'looker',            color: '4285f4' },
]

function TechChip({ item }: { item: { name: string; slug: string; color: string } }) {
  const [imgOk, setImgOk] = useState(true)

  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/8 hover:border-cyan-500/30 hover:bg-white/8 transition-all duration-300 cursor-default">
      {imgOk ? (
        <img
          src={`https://cdn.simpleicons.org/${item.slug}/${item.color}`}
          alt={item.name}
          className="w-4 h-4 flex-shrink-0"
          loading="lazy"
          onError={() => setImgOk(false)}
        />
      ) : (
        <div className="w-4 h-4 rounded bg-cyan-500/20 flex-shrink-0" />
      )}
      <span className="text-slate-300 text-xs font-medium whitespace-nowrap hover:text-white transition-colors">
        {item.name}
      </span>
    </div>
  )
}

const TechStack = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect() } },
      { threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-cyan-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4">
            Our Expertise
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Technologies We <span className="text-slate-300">Master</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            From frontend to cloud — a modern, battle-tested stack powering every product we build.
          </p>
        </div>

        {/* Chip cloud — 3 loose groups, no labels */}
        <div className="max-w-5xl mx-auto space-y-3">

          {/* Frontend row */}
          <div
            className={`flex flex-wrap justify-center gap-2.5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '100ms' }}
          >
            {frontend.map(item => <TechChip key={item.name} item={item} />)}
          </div>

          {/* Backend + Mobile row */}
          <div
            className={`flex flex-wrap justify-center gap-2.5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '200ms' }}
          >
            {backend.map(item => <TechChip key={item.name} item={item} />)}
          </div>

          {/* Infra + DB + Analytics row */}
          <div
            className={`flex flex-wrap justify-center gap-2.5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '300ms' }}
          >
            {infra.map(item => <TechChip key={item.name} item={item} />)}
          </div>

        </div>

        {/* Stat strip */}
        <div className={`mt-14 flex flex-wrap justify-center gap-12 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {[
            { value: '37+', label: 'Technologies' },
            { value: '5',   label: 'Specialisations' },
            { value: '3+',  label: 'Years of Experience' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-3xl font-bold text-cyan-400">{s.value}</div>
              <div className="text-slate-500 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
