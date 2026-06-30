import { COMPANY } from '../lib/data'
import { Icon } from './Icons'
import Reveal from './Reveal'

const items = [
  { icon: 'transfer', title: 'Transfer Switch Installation', desc: 'Switch safely to backup power without dangerous, makeshift connections.' },
  { icon: 'generator', title: 'Generator Connections', desc: 'Properly wired hookups so your generator is ready before the storm hits.' },
  { icon: 'shield', title: 'Emergency Preparedness', desc: 'Get your home’s electrical system storm-ready while there’s still time.' },
]

export default function Hurricane() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-gold/25 p-8 sm:p-12 lg:p-16">
          {/* background */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,#241f12_0%,#0d0d0d_60%)]" />
          <div className="glow-radial absolute -right-20 -top-20 h-[420px] w-[420px]" />
          {/* subtle lightning streak */}
          <svg className="absolute right-8 top-0 h-full w-40 opacity-[0.07]" viewBox="0 0 100 300" fill="none" aria-hidden="true">
            <path d="M60 0 L20 140 L55 140 L30 300 L80 110 L45 110 Z" stroke="#D4A63A" strokeWidth="2" />
          </svg>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="eyebrow">
                <span className="h-px w-8 bg-gold" /> Hurricane Season
              </span>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Don’t Get Caught Without Power This{' '}
                <span className="text-gold-gradient">Hurricane Season</span>
              </h2>
              <p className="mt-5 max-w-lg text-lg text-warm/75">
                On the Coastal Bend, backup power isn’t a luxury — it’s peace of mind. Let’s get your
                home ready with a properly installed transfer switch or generator connection, and a free
                consultation to plan it out.
              </p>
              <a href={COMPANY.phoneHref} className="btn-gold mt-8 animate-glow-pulse">
                <Icon name="generator" className="h-5 w-5" /> Schedule Generator Consultation
              </a>
            </div>

            <div className="space-y-4">
              {items.map((it, i) => (
                <Reveal
                  key={it.title}
                  delay={i * 0.1}
                  className="glass flex items-start gap-4 rounded-2xl p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Icon name={it.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-warm">{it.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-warm/65">{it.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
