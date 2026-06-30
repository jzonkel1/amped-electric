import { COMPANY, TRUST_BADGES } from '../lib/data'
import { Icon } from './Icons'
import Reveal from './Reveal'

export default function TrustBar() {
  return (
    <section className="relative z-20 -mt-2">
      <div className="container-x">
        <Reveal className="glass rounded-3xl px-6 py-6 shadow-card sm:px-10 sm:py-7">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
            {TRUST_BADGES.map((b, i) => (
              <li key={b} className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/12 text-gold">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium leading-tight text-warm/85">{b}</span>
                {i < TRUST_BADGES.length - 1 && (
                  <span className="ml-4 hidden h-4 w-px bg-gold/20 lg:inline-block" />
                )}
              </li>
            ))}
          </ul>

          <div className="divider-gold my-6" />

          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-sm text-warm/65">
            <Icon name="pin" className="h-4 w-4 text-gold" />
            {COMPANY.serviceArea.map((a, i) => (
              <span key={a} className="inline-flex items-center gap-2">
                <span className="font-medium text-warm/85">{a}</span>
                {i < COMPANY.serviceArea.length - 1 && <span className="text-gold/60">•</span>}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
