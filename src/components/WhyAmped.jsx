import { WHY_ROWS } from '../lib/data'
import { Icon } from './Icons'
import Reveal from './Reveal'

export default function WhyAmped() {
  return (
    <section id="why" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="span" className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold" /> The Difference <span className="h-px w-8 bg-gold" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Why Homeowners Choose <span className="text-gold-gradient">AMPED Electric</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-warm/70">
              The little things add up to a better experience — and a job you don’t have to think about again.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-gold/20 shadow-card">
          {/* header row */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-white/[0.03]">
            <div className="px-5 py-5 sm:px-8" />
            <div className="border-l border-white/5 px-3 py-5 text-center sm:px-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-warm/50 sm:text-sm">
                Typical Contractors
              </span>
            </div>
            <div className="relative border-l border-gold/20 bg-gold/[0.06] px-3 py-5 text-center sm:px-5">
              <span className="text-xs font-bold uppercase tracking-wider text-gold sm:text-sm">
                AMPED Electric
              </span>
            </div>
          </div>

          {WHY_ROWS.map((row, i) => (
            <div
              key={row}
              className={`grid grid-cols-[1.4fr_1fr_1fr] items-center ${
                i % 2 ? 'bg-white/[0.015]' : 'bg-transparent'
              }`}
            >
              <div className="px-5 py-4 text-sm font-medium text-warm/85 sm:px-8 sm:text-base">{row}</div>
              <div className="flex justify-center border-l border-white/5 px-3 py-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-warm/25">
                  <span className="block h-3 w-3 rounded-full border border-current" />
                </span>
              </div>
              <div className="flex justify-center border-l border-gold/15 bg-gold/[0.05] px-3 py-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <Icon name="check" className="h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
