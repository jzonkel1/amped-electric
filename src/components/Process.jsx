import { PROCESS } from '../lib/data'
import Reveal from './Reveal'

export default function Process() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal as="span" className="eyebrow justify-center">
            <span className="h-px w-8 bg-gold" /> Simple From Start To Finish <span className="h-px w-8 bg-gold" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              How It <span className="text-gold-gradient">Works</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1} className="relative text-center">
                <div className="relative mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gold/10 blur-md" />
                  <div className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-gold/30 bg-ink">
                    <span className="font-display text-2xl text-gold-gradient">{step.n}</span>
                  </div>
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-warm">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-relaxed text-warm/65">
                  {step.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
