import { useState } from 'react'
import { COMPANY, SERVICES } from '../lib/data'
import { Icon } from './Icons'
import Reveal from './Reveal'

const field =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-warm placeholder-warm/40 outline-none transition focus:border-gold/60 focus:bg-white/[0.05]'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="section">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow-radial absolute left-0 top-1/3 h-[420px] w-[420px] opacity-50" />
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="span" className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold" /> Free Estimate <span className="h-px w-8 bg-gold" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Request Your <span className="text-gold-gradient">Free Estimate</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-warm/70">
              Tell us what you need and we’ll get right back to you. Prefer to talk now? Call or text{' '}
              <a href={COMPANY.phoneHref} className="font-semibold text-gold hover:underline">
                {COMPANY.phoneDisplay}
              </a>
              .
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* form */}
          <Reveal className="glass rounded-3xl p-6 shadow-card sm:p-8">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon name="check" className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-display text-2xl tracking-tight">Thank you!</h3>
                <p className="mt-2 max-w-sm text-warm/65">
                  Your request is on its way. We’ll reach out shortly — for anything urgent, call{' '}
                  <a href={COMPANY.phoneHref} className="text-gold hover:underline">
                    {COMPANY.phoneDisplay}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                action={`https://formsubmit.co/${COMPANY.email}`}
                method="POST"
                onSubmit={() => setSent(true)}
                className="space-y-4"
              >
                {/* FormSubmit config */}
                <input type="hidden" name="_subject" value="New estimate request — AMPED Electric website" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-warm/60">
                      Name
                    </label>
                    <input name="Name" required placeholder="Your name" className={field} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-warm/60">
                      Phone
                    </label>
                    <input name="Phone" type="tel" required placeholder="(361) 000-0000" className={field} />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-warm/60">
                    Email <span className="normal-case text-warm/40">(optional)</span>
                  </label>
                  <input name="Email" type="email" placeholder="you@email.com" className={field} />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-warm/60">
                    How can we help?
                  </label>
                  <select name="Service" className={field} defaultValue="">
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s.title} value={s.title} className="bg-charcoal">
                        {s.title}
                      </option>
                    ))}
                    <option value="Other" className="bg-charcoal">
                      Something else
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-warm/60">
                    Project details
                  </label>
                  <textarea
                    name="Details"
                    rows="4"
                    placeholder="Tell us a little about the job…"
                    className={`${field} resize-none`}
                  />
                </div>

                <button type="submit" className="btn-gold w-full">
                  <Icon name="bolt" className="h-5 w-5" /> Request Free Estimate
                </button>
                <p className="text-center text-xs text-warm/45">
                  No spam, ever. We’ll only use your info to get back to you about your project.
                </p>
              </form>
            )}
          </Reveal>

          {/* map + details */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.05} className="glass overflow-hidden rounded-3xl shadow-card">
              <iframe
                title="AMPED Electric service area — Corpus Christi & the Coastal Bend"
                src="https://www.google.com/maps?q=Corpus%20Christi%2C%20TX&z=9&output=embed"
                className="h-64 w-full grayscale-[0.2] sm:h-72"
                style={{ border: 0, filter: 'invert(0.06)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center gap-2 px-5 py-4 text-sm text-warm/70">
                <Icon name="pin" className="h-4 w-4 shrink-0 text-gold" />
                Proudly serving {COMPANY.serviceArea.join(' • ')}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="glass grid gap-4 rounded-3xl p-6 shadow-card sm:p-7">
              <a href={COMPANY.phoneHref} className="group flex items-center gap-3.5 text-warm/85 transition hover:text-gold">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-warm/50">Call or text</span>
                  <span className="font-heading text-lg font-semibold">{COMPANY.phoneDisplay}</span>
                </span>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="group flex items-center gap-3.5 text-warm/85 transition hover:text-gold">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Icon name="mail" className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-warm/50">Email</span>
                  <span className="block break-all font-medium">{COMPANY.email}</span>
                </span>
              </a>
              <div className="flex items-center gap-3.5 text-warm/85">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Icon name="clock" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-warm/50">Hours</span>
                  <span className="font-medium">{COMPANY.hours}</span>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
