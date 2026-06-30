import { REVIEWS, COMPANY } from '../lib/data'
import { Icon } from './Icons'
import Reveal from './Reveal'

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className="h-4 w-4" />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="section">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow-radial absolute right-0 top-1/4 h-[420px] w-[420px] opacity-50" />
      </div>

      <div className="container-x">
        <div className="flex flex-col items-center gap-6 text-center">
          <Reveal as="span" className="eyebrow">
            <span className="h-px w-8 bg-gold" /> What Neighbors Say <span className="h-px w-8 bg-gold" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Trusted Across The <span className="text-gold-gradient">Coastal Bend</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-gold">
            <Icon name="star" className="h-4 w-4" /> {COMPANY.badge}
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal
              key={i}
              delay={i * 0.1}
              className="glass relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40"
            >
              <span className="pointer-events-none absolute right-6 top-4 font-display text-7xl leading-none text-gold/15">
                ”
              </span>
              <Stars />
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-warm/85">“{r.quote}”</p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 font-heading text-lg font-bold text-gold">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="font-heading text-sm font-semibold text-warm">{r.name}</p>
                  <p className="text-xs uppercase tracking-wide text-warm/50">{r.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-gold/20 bg-gradient-to-r from-gold/[0.06] to-transparent p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="font-display text-2xl tracking-tight sm:text-3xl">Become our next happy customer.</h3>
            <p className="mt-1 text-warm/65">Honest work, fair pricing, and a local owner who stands behind it.</p>
          </div>
          <a href={COMPANY.phoneHref} className="btn-gold shrink-0">
            <Icon name="phone" className="h-5 w-5" /> Call {COMPANY.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
