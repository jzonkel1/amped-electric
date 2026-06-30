import { COMPANY } from '../lib/data'
import { Icon } from './Icons'
import Reveal from './Reveal'

const points = [
  { icon: 'pin', title: 'Locally Owned', desc: 'A Corpus Christi business that answers to its neighbors, not a corporate call center.' },
  { icon: 'shield', title: 'Quality Workmanship', desc: 'Careful, code-conscious work that holds up — done by a licensed electrician.' },
  { icon: 'clock', title: 'Quick Response', desc: 'Prompt scheduling and fast answers when your power can’t wait.' },
  { icon: 'check', title: 'Fair Pricing', desc: 'Honest, up-front estimates with no pressure and no surprises.' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal as="span" className="eyebrow">
            <span className="h-px w-8 bg-gold" /> About AMPED Electric
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Honest Electrical Work <span className="text-gold-gradient">Done Right</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-warm/75">
              AMPED Electric is a locally owned electrical contractor serving Corpus Christi and the
              greater Coastal Bend. We treat every customer like a neighbor — because most of them are.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-lg leading-relaxed text-warm/75">
              We’re proud to have earned the trust of homeowners across the Coastal Bend through honest
              work and dependable service. Fair pricing, professional workmanship, and quick response
              times aren’t extras here — they’re the standard.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 flex items-center gap-4 rounded-2xl border border-gold/15 bg-white/[0.02] p-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
              <Icon name="star" className="h-6 w-6" />
            </span>
            <p className="text-sm leading-relaxed text-warm/80">
              <span className="font-heading font-semibold text-warm">{COMPANY.owner}</span>, {COMPANY.role} —
              proud to serve the place we call home.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.08}
              className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/12 text-gold transition group-hover:bg-gold/20">
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-warm">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-warm/65">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
