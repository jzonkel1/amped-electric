import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { COMPANY, NAV_LINKS } from '../lib/data'
import { Icon } from './Icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-gold/15 bg-ink/85 backdrop-blur-xl py-3'
          : 'border-b border-transparent bg-transparent py-5'
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="AMPED Electric home">
          <img
            src="./assets/logo.png"
            alt="AMPED Electric"
            className={`w-auto transition-all duration-500 ${scrolled ? 'h-8' : 'h-9 sm:h-10'}`}
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-medium uppercase tracking-wider text-warm/80 transition-colors hover:text-warm"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={COMPANY.phoneHref} className="btn-gold !px-5 !py-2.5 !text-sm">
            <Icon name="phone" className="h-4 w-4" />
            <span className="hidden sm:inline">{COMPANY.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-warm lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-gold transition-all ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-gold transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-gold transition-all ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium uppercase tracking-wide text-warm/85 transition hover:bg-gold/10 hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
