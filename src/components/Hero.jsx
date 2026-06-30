import { motion } from 'framer-motion'
import { COMPANY } from '../lib/data'
import { Icon } from './Icons'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

const chips = ['Residential', 'Commercial', 'Emergency Service']

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1d1a12_0%,#0d0d0d_55%)]" />
        <div className="glow-radial absolute -right-32 top-0 h-[680px] w-[680px]" />
        <div className="glow-radial absolute -left-40 bottom-0 h-[480px] w-[480px] opacity-60" />
        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#D4A63A 1px, transparent 1px), linear-gradient(90deg, #D4A63A 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="container-x grid items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28">
        {/* ---- copy ---- */}
        <div className="relative text-center lg:text-left">
          <motion.div {...fade(0)} className="mb-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
              <Icon name="star" className="h-4 w-4" />
              {COMPANY.badge}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-warm/70">
              <Icon name="pin" className="h-4 w-4 text-gold" />
              {COMPANY.city}
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.1)}
            className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.3rem]"
          >
            Powering Corpus Christi Homes With{' '}
            <span className="text-gold-gradient">Reliable Electrical Work</span>
          </motion.h1>

          <motion.p {...fade(0.2)} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm/75 lg:mx-0">
            From emergency repairs and panel upgrades to lighting, transfer switches, generators and
            complete residential electrical projects — we provide honest work at a fair price.
          </motion.p>

          <motion.div {...fade(0.3)} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a href={COMPANY.phoneHref} className="btn-gold animate-glow-pulse">
              <Icon name="phone" className="h-5 w-5" />
              Call Now
            </a>
            <a href="#contact" className="btn-ghost">
              Request Free Estimate
              <Icon name="arrow" className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div {...fade(0.4)} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
            {chips.map((c) => (
              <span key={c} className="inline-flex items-center gap-2 text-sm font-medium text-warm/80">
                <Icon name="check" className="h-5 w-5 text-gold" />
                {c}
              </span>
            ))}
          </motion.div>

          <motion.a
            {...fade(0.5)}
            href={COMPANY.phoneHref}
            className="mx-auto mt-8 flex w-fit items-center gap-3 text-warm/60 transition hover:text-gold lg:mx-0"
          >
            <span className="text-sm uppercase tracking-widest">Call or text</span>
            <span className="font-heading text-2xl font-semibold text-warm">{COMPANY.phoneDisplay}</span>
          </motion.a>
        </div>

        {/* ---- brand visual ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gold/20 blur-3xl" />
          <div className="animate-float-slow overflow-hidden rounded-[1.75rem] border border-gold/25 shadow-gold-lg">
            <img
              src="./assets/lion-brand.jpg"
              alt="AMPED Electric — Rudee Deleon, Licensed Electrician, Corpus Christi TX"
              className="h-full w-full object-cover"
            />
          </div>

          {/* floating stat card */}
          <div className="glass absolute -bottom-5 -left-4 hidden rounded-2xl px-5 py-4 shadow-card sm:block">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <Icon name="shield" className="h-6 w-6" />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold text-warm">Licensed & Local</p>
                <p className="text-xs text-warm/60">Honest work · fair price</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
