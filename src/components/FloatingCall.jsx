import { COMPANY } from '../lib/data'
import { Icon } from './Icons'

// Sticky call button for mobile — always one tap from a phone call.
export default function FloatingCall() {
  return (
    <a
      href={COMPANY.phoneHref}
      className="btn-gold fixed bottom-5 right-5 z-50 !px-5 !py-4 shadow-gold-lg animate-glow-pulse lg:hidden"
      aria-label={`Call ${COMPANY.phoneDisplay}`}
    >
      <Icon name="phone" className="h-6 w-6" />
      <span className="text-sm">Call Now</span>
    </a>
  )
}
