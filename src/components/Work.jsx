import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECT_PHOTOS, COMPANY } from '../lib/data'
import { Icon } from './Icons'
import Reveal from './Reveal'

const highlights = ['LED lighting', 'Switches', 'Fans', 'Outlets', 'Custom lighting design']

export default function Work() {
  const [active, setActive] = useState(null)

  return (
    <section id="work" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="span" className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold" /> Recent Work <span className="h-px w-8 bg-gold" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              A Look At The <span className="text-gold-gradient">Job Done Right</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-warm/70">
              “Another panel upgrade done. If anyone you know needs electrical work, give us a call.”
              Real work, photographed on the job — not stock photos.
            </p>
          </Reveal>
        </div>

        {/* featured project */}
        <Reveal delay={0.1} className="mt-14 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <button
            onClick={() => setActive(0)}
            className="group relative min-h-[460px] overflow-hidden rounded-3xl border border-gold/20 shadow-card"
          >
            <img
              src={PROJECT_PHOTOS[0].src}
              alt={PROJECT_PHOTOS[0].alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-left sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ink/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur">
                <Icon name="panel" className="h-4 w-4" /> Featured Project
              </span>
              <h3 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
                Residential Panel & Service Upgrade
              </h3>
              <p className="mt-1 max-w-md text-sm text-warm/70">
                New service mast, weatherhead and panel — safer, modern power, installed clean.
              </p>
            </div>
          </button>

          <div className="grid grid-rows-2 gap-6">
            {PROJECT_PHOTOS.slice(1).map((p, i) => (
              <button
                key={p.src}
                onClick={() => setActive(i + 1)}
                className="group relative overflow-hidden rounded-3xl border border-gold/20 shadow-card"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  className="h-full min-h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink/60 text-gold opacity-0 backdrop-blur transition group-hover:opacity-100">
                  <Icon name="search" className="h-4 w-4" />
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* custom lighting capability */}
        <Reveal delay={0.1} className="glass mt-6 flex flex-col items-start gap-6 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <h3 className="font-heading text-xl font-semibold text-warm">Custom & Outdoor Lighting Design</h3>
            <p className="mt-2 text-sm leading-relaxed text-warm/70">
              Beyond panels and repairs, we design and install custom lighting — from pergola and patio
              LED installs to fans, switches and outlets — tailored to how you actually live outdoors.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {highlights.map((h) => (
                <span key={h} className="inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-gold/[0.06] px-3 py-1 text-xs font-medium text-warm/80">
                  <Icon name="check" className="h-3.5 w-3.5 text-gold" /> {h}
                </span>
              ))}
            </div>
          </div>
          <a href={COMPANY.phoneHref} className="btn-ghost shrink-0">
            <Icon name="bulb" className="h-5 w-5 text-gold" /> Plan Your Project
          </a>
        </Reveal>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 backdrop-blur"
          >
            <motion.img
              key={active}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={PROJECT_PHOTOS[active].src}
              alt={PROJECT_PHOTOS[active].alt}
              className="max-h-[88vh] max-w-[92vw] rounded-2xl border border-gold/25 object-contain shadow-gold-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-ink/70 text-warm"
              aria-label="Close"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
