import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  ArrowUpRight,
  Award,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Trophy,
} from 'lucide-react'
import {
  achievements,
  certifications,
  education,
  experience,
  profile,
  projects,
  skills,
} from '@/data/profile'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

const nav = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

function Portfolio() {
  return (
    <div className="grain min-h-screen bg-paper text-ink selection:bg-vermilion selection:text-paper">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-xl tracking-tight">
          Meghna<span className="text-vermilion">.</span>
        </a>
        <nav className="hidden gap-7 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-soft md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-vermilion">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={profile.cv}
          download
          className="inline-flex items-center gap-2 rounded-full border border-ink px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors hover:bg-ink hover:text-paper"
        >
          <Download size={13} /> CV
        </a>
      </div>
    </header>
  )
}

function Waveform() {
  const bars = Array.from({ length: 48 }, (_, i) => {
    const h = 20 + Math.abs(Math.sin(i * 0.55) * 60) + Math.abs(Math.cos(i * 1.7) * 20)
    return { h, delay: (i % 12) * 0.11 }
  })
  return (
    <div aria-hidden className="flex h-28 items-center gap-[5px]">
      {bars.map((b, i) => (
        <span
          key={i}
          className={`wave-bar w-[3px] rounded-full ${i % 9 === 4 ? 'bg-vermilion' : 'bg-ink/70'}`}
          style={{ height: `${b.h}%`, animationDelay: `${b.delay}s` }}
        />
      ))}
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <p className="rise mb-8 flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-ink-soft">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-vermilion" />
          AI Intern at Margadeshaka · Open to opportunities
        </p>
        <h1
          className="rise font-display text-[clamp(3.4rem,11vw,9.5rem)] font-light leading-[0.88] tracking-[-0.035em]"
          style={{ animationDelay: '0.08s' }}
        >
          Meghna
          <br />
          <em className="font-normal italic text-vermilion">Banerjee</em>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
          <p
            className="rise max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
            style={{ animationDelay: '0.18s' }}
          >
            {profile.tagline}
          </p>
          <div className="rise" style={{ animationDelay: '0.28s' }}>
            <Waveform />
          </div>
        </div>

        <div
          className="rise mt-12 flex flex-wrap items-center gap-3"
          style={{ animationDelay: '0.36s' }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            View my work <ArrowUpRight size={16} />
          </a>
          <SocialPill href={profile.github} icon={<Github size={16} />} label="GitHub" />
          <SocialPill href={profile.linkedin} icon={<Linkedin size={16} />} label="LinkedIn" />
          <SocialPill href={`mailto:${profile.email}`} icon={<Mail size={16} />} label="Email" />
        </div>
      </div>
      <div className="border-y border-ink/15 bg-ink py-3 text-paper">
        <div className="flex gap-10 overflow-hidden whitespace-nowrap font-mono text-[12px] uppercase tracking-[0.2em]">
          {Array.from({ length: 3 }).map((_, k) => (
            <span key={k} className="flex shrink-0 gap-10">
              <span>Machine Learning</span><span className="text-vermilion">✦</span>
              <span>Voice AI</span><span className="text-vermilion">✦</span>
              <span>Quantum ML</span><span className="text-vermilion">✦</span>
              <span>Healthcare Agents</span><span className="text-vermilion">✦</span>
              <span>Full-stack</span><span className="text-vermilion">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialPill({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-5 py-3 text-sm font-medium transition-colors hover:border-ink hover:bg-paper-deep"
    >
      {icon} {label}
    </a>
  )
}

function SectionHead({ index, title, id }: { index: string; title: string; id: string }) {
  return (
    <div id={id} className="mb-12 flex scroll-mt-24 items-baseline gap-5 border-b border-ink/15 pb-5">
      <span className="font-mono text-sm text-vermilion">{index}</span>
      <h2 className="font-display text-4xl font-light tracking-tight sm:text-5xl">{title}</h2>
    </div>
  )
}

function About() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHead index="01" title="About" id="about" />
      <div className="grid gap-14 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
          {profile.about.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
          <p className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.12em] text-ink">
            <MapPin size={15} className="text-vermilion" /> {profile.location}
          </p>
        </div>
        <dl className="grid grid-cols-3 gap-4 self-start md:grid-cols-1">
          {profile.stats.map((s) => (
            <div key={s.label} className="border-l-2 border-vermilion pl-4">
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                {s.label}
              </dt>
              <dd className="font-display text-5xl font-light">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="bg-paper-deep/60">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHead index="02" title="Experience" id="experience" />
        {experience.map((job) => (
          <article key={job.company} className="grid gap-8 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-vermilion">
                {job.period}
              </p>
              <h3 className="mt-2 font-display text-3xl">{job.company}</h3>
              <p className="mt-1 text-ink-soft">
                {job.role} · {job.location}
              </p>
            </div>
            <ol className="space-y-6">
              {job.points.map((pt, i) => (
                <li key={pt.title} className="flex gap-5 border-t border-ink/15 pt-6">
                  <span className="font-mono text-sm text-ink-soft">0{i + 1}</span>
                  <div>
                    <h4 className="font-medium">{pt.title}</h4>
                    <p className="mt-1 leading-relaxed text-ink-soft">{pt.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHead index="03" title="Selected projects" id="projects" />
      <div className="grid gap-6 lg:grid-cols-5">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-col justify-between rounded-3xl border p-8 transition-all hover:-translate-y-1 sm:p-10 ${
              p.featured
                ? 'border-ink bg-ink text-paper lg:col-span-3'
                : 'border-ink/20 bg-paper lg:col-span-2 hover:border-ink'
            }`}
          >
            <div>
              <div className="flex items-start justify-between gap-4">
                <p
                  className={`font-mono text-[11px] uppercase tracking-[0.16em] ${
                    p.featured ? 'text-vermilion' : 'text-moss'
                  }`}
                >
                  {p.kicker}
                </p>
                <ArrowUpRight
                  size={22}
                  className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
              <h3 className="mt-6 font-display text-5xl font-light tracking-tight">{p.title}</h3>
              <p className={`mt-4 leading-relaxed ${p.featured ? 'text-paper/80' : 'text-ink-soft'}`}>
                {p.description}
              </p>
              <ul className={`mt-6 space-y-3 text-sm leading-relaxed ${p.featured ? 'text-paper/70' : 'text-ink-soft'}`}>
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-2 h-1 w-3 shrink-0 bg-vermilion" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className={`rounded-full border px-3 py-1 font-mono text-[11px] ${
                    p.featured ? 'border-paper/25' : 'border-ink/20'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.12em] underline decoration-vermilion decoration-2 underline-offset-8 hover:text-vermilion"
      >
        More on GitHub @{profile.githubHandle} <ArrowUpRight size={15} />
      </a>
    </section>
  )
}

function Skills() {
  return (
    <section className="bg-paper-deep/60">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHead index="04" title="Toolkit" id="skills" />
        <div className="divide-y divide-ink/15">
          {skills.map((s) => (
            <div key={s.group} className="grid gap-4 py-6 md:grid-cols-[200px_1fr] md:items-center">
              <h3 className="font-mono text-[12px] uppercase tracking-[0.16em] text-ink-soft">
                {s.group}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {s.items.map((it) => (
                  <span key={it} className="font-display text-2xl font-light sm:text-3xl">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Credentials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHead index="05" title="Certifications & education" id="credentials" />
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4">
          {certifications.map((c) => (
            <a
              key={c.title}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-5 rounded-2xl border border-ink/15 p-6 transition-colors hover:border-ink hover:bg-paper-deep/50"
            >
              <Award size={22} className="mt-1 shrink-0 text-vermilion" />
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-medium">{c.title}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
                    {c.date}
                  </span>
                </div>
                <p className="mt-1 text-sm italic text-ink-soft">{c.issuer}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.note}</p>
                <span className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em] group-hover:text-vermilion">
                  View certificate <ArrowUpRight size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="space-y-6">
          {education.map((e) => (
            <div key={e.school} className="rounded-2xl bg-moss p-8 text-paper">
              <GraduationCap size={26} />
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/70">
                {e.period}
              </p>
              <h3 className="mt-2 font-display text-3xl font-light leading-tight">{e.school}</h3>
              <p className="mt-3 text-paper/80">
                {e.degree} · {e.location}
              </p>
              <p className="mt-6 font-display text-5xl font-light">{e.grade.replace('CGPA ', '')}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/70">CGPA</p>
            </div>
          ))}
          {achievements.map((a) => (
            <div key={a.title} className="flex gap-4 rounded-2xl border border-vermilion/40 p-6">
              <Trophy size={22} className="shrink-0 text-vermilion" />
              <div>
                <h3 className="font-medium">{a.title}</h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
                  {a.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function encode(data: Record<string, string>) {
  return new URLSearchParams(data).toString()
}

function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    try {
      const res = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ ...data, 'form-name': 'contact' }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const input =
    'w-full border-b border-paper/30 bg-transparent py-3 text-paper placeholder:text-paper/40 outline-none transition-colors focus:border-vermilion'

  return (
    <section id="contact" className="scroll-mt-16 bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="font-mono text-sm text-vermilion">06</p>
          <h2 className="mt-3 font-display text-5xl font-light leading-[0.95] tracking-tight sm:text-7xl">
            Let’s build something <em className="italic text-vermilion">that listens.</em>
          </h2>
          <p className="mt-6 max-w-md text-lg text-paper/70">
            Internships, research collaborations or a good problem in AI and healthcare — my inbox is open.
          </p>
          <ul className="mt-10 space-y-4">
            <ContactRow href={`mailto:${profile.email}`} icon={<Mail size={18} />} label={profile.email} />
            <ContactRow href={profile.linkedin} icon={<Linkedin size={18} />} label={`linkedin.com/in/${profile.linkedinHandle}`} />
            <ContactRow href={profile.github} icon={<Github size={18} />} label={`github.com/${profile.githubHandle}`} />
          </ul>
        </div>

        {status === 'sent' ? (
          <div className="flex flex-col items-start justify-center rounded-3xl border border-paper/20 p-10">
            <Send className="text-vermilion" size={28} />
            <h3 className="mt-6 font-display text-4xl font-light">Message sent.</h3>
            <p className="mt-3 text-paper/70">Thank you for reaching out — I’ll get back to you soon.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-8 font-mono text-[12px] uppercase tracking-[0.14em] underline decoration-vermilion underline-offset-8"
            >
              Send another
            </button>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-8 rounded-3xl border border-paper/20 p-8 sm:p-10"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/60">Name</span>
              <input name="name" required className={input} placeholder="Your name" />
            </label>
            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/60">Email</span>
              <input type="email" name="email" required className={input} placeholder="you@example.com" />
            </label>
            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/60">Message</span>
              <textarea name="message" required rows={5} className={`${input} resize-none`} placeholder="Tell me about your project…" />
            </label>
            {status === 'error' && (
              <p className="text-sm text-vermilion">
                Something went wrong. Please email me directly at {profile.email}.
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 rounded-full bg-vermilion px-7 py-3 font-medium text-paper transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              <Send size={16} /> {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

function ContactRow({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  const external = href.startsWith('http')
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="group flex items-center gap-4 border-b border-paper/15 pb-4 text-paper/90 transition-colors hover:text-vermilion"
      >
        <span className="text-vermilion">{icon}</span>
        <span className="break-all">{label}</span>
        <ArrowUpRight size={16} className="ml-auto shrink-0 opacity-50 group-hover:opacity-100" />
      </a>
    </li>
  )
}

function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper/50">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 font-mono text-[11px] uppercase tracking-[0.14em] sm:px-8">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Kolkata · India</span>
      </div>
    </footer>
  )
}
