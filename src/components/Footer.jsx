import { COMPANY, NAV_LINKS, SERVICES } from '../lib/data'
import { Icon } from './Icons'

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/15 bg-ink pt-16">
      <div className="container-x grid gap-12 pb-12 lg:grid-cols-[1.4fr_1fr_1fr]">
        {/* brand */}
        <div>
          <img src="./assets/logo.png" alt="AMPED Electric" className="h-10 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-warm/60">
            Locally owned, licensed electrical contractor serving Corpus Christi and the Coastal Bend.
            Honest work at a fair price — residential, commercial and emergency service.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {COMPANY.serviceArea.map((a) => (
              <span key={a} className="rounded-full border border-white/10 px-3 py-1 text-xs text-warm/55">
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* nav + services */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-warm/65 transition hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">Top Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.title} className="text-sm text-warm/65">{s.title}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* contact */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-gold">Get In Touch</h4>
          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <a href={COMPANY.phoneHref} className="group flex items-center gap-3 text-warm/80 transition hover:text-gold">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/12 text-gold"><Icon name="phone" className="h-4 w-4" /></span>
                <span className="font-heading text-base font-semibold">{COMPANY.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="group flex items-center gap-3 text-warm/80 transition hover:text-gold">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/12 text-gold"><Icon name="mail" className="h-4 w-4" /></span>
                <span className="break-all">{COMPANY.email}</span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-warm/80">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/12 text-gold"><Icon name="pin" className="h-4 w-4" /></span>
              {COMPANY.city}
            </li>
            <li className="flex items-center gap-3 text-warm/80">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/12 text-gold"><Icon name="clock" className="h-4 w-4" /></span>
              {COMPANY.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="divider-gold" />
      <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-warm/45">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
        <p className="text-xs text-warm/45">
          {COMPANY.owner} · {COMPANY.role} · Corpus Christi, TX
        </p>
      </div>
    </footer>
  )
}
