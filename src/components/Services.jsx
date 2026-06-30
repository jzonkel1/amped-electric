import { motion } from 'framer-motion'
import { SERVICES, COMPANY } from '../lib/data'
import { Icon } from './Icons'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow-radial absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 opacity-50" />
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="span" className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold" /> What We Do <span className="h-px w-8 bg-gold" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Full-Service <span className="text-gold-gradient">Electrical</span> For Your Home & Business
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-warm/70">
              Residential, commercial and emergency electrical service across Corpus Christi and the
              Coastal Bend — handled by a licensed electrician who does it right the first time.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.07}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="glass group relative h-full overflow-hidden rounded-2xl p-7 transition-colors duration-300 hover:border-gold/45"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/25 to-gold/5 text-gold ring-1 ring-gold/20 transition group-hover:from-gold/35">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <h3 className="font-heading text-xl font-semibold text-warm">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-warm/65">{s.desc}</p>

                <a
                  href={COMPANY.phoneHref}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-gold/80 transition-all group-hover:gap-2.5 group-hover:text-gold"
                >
                  Learn More <Icon name="arrow" className="h-4 w-4" />
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <p className="text-warm/70">Don’t see what you need? We probably do it — just ask.</p>
          <a href={COMPANY.phoneHref} className="btn-gold !py-3">
            <Icon name="phone" className="h-5 w-5" /> {COMPANY.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
