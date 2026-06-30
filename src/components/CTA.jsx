import { COMPANY } from '../lib/data'
import { Icon } from './Icons'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2.25rem] border border-gold/30 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,#241f12_0%,#0d0d0d_70%)]" />
          <div className="glow-radial absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2" />

          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold" /> Let’s Get Started <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-[1.02] tracking-tight sm:text-6xl">
            Need An Electrician You Can <span className="text-gold-gradient">Count On?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-warm/75">
            Honest work, fair pricing, and a local owner who answers the phone. Call now for fast,
            friendly service across Corpus Christi and the Coastal Bend.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={COMPANY.phoneHref} className="btn-gold animate-glow-pulse !px-9 !py-5 !text-lg">
              <Icon name="phone" className="h-6 w-6" /> {COMPANY.phoneDisplay}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="btn-ghost !py-5">
              <Icon name="mail" className="h-5 w-5 text-gold" /> Email Us
            </a>
          </div>

          <p className="mt-8 text-sm uppercase tracking-widest text-warm/50">
            Open {COMPANY.hours}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
