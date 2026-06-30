// Lightweight stroke icons (currentColor) for service cards & UI.
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
}

export const Icon = ({ name, className = 'h-7 w-7' }) => {
  const paths = ICONS[name] || ICONS.bolt
  return (
    <svg {...base} className={className} aria-hidden="true">
      {paths}
    </svg>
  )
}

const ICONS = {
  bolt: <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12z" />,
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2.1-.6-.6-2.1z" />
  ),
  panel: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.3 1 2.5h6c0-1.2.2-1.7 1-2.5A6 6 0 0 0 12 3Z" />
    </>
  ),
  fan: (
    <>
      <circle cx="12" cy="12" r="1.8" />
      <path d="M12 10.2c-.6-3.6.4-6 2.4-6.6 1.7-.5 2.7 1.5 1.6 3.2-.9 1.4-2.6 2.6-4 3.4M13.8 12c3.6-.6 6 .4 6.6 2.4.5 1.7-1.5 2.7-3.2 1.6-1.4-.9-2.6-2.6-3.4-4M12 13.8c.6 3.6-.4 6-2.4 6.6-1.7.5-2.7-1.5-1.6-3.2.9-1.4 2.6-2.6 4-3.4M10.2 12c-3.6.6-6-.4-6.6-2.4-.5-1.7 1.5-2.7 3.2-1.6 1.4.9 2.6 2.6 3.4 4" />
    </>
  ),
  circuit: (
    <>
      <circle cx="5" cy="12" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M7 12h6M13 12l4-5M13 12l4 5" />
    </>
  ),
  transfer: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 9l-2 2 2 2M16 11h-6M16 15l2-2-2-2M8 13h6" />
    </>
  ),
  generator: (
    <>
      <rect x="3" y="8" width="18" height="10" rx="2" />
      <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M11 12l-1.5 2h3L11 16" />
    </>
  ),
  ev: (
    <>
      <rect x="4" y="9" width="11" height="10" rx="1.5" />
      <path d="M15 12h2a2 2 0 0 1 2 2v2a1.5 1.5 0 0 0 3 0v-6l-2-2M8 13l-1.5 2.5h2L7.5 18" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />
    </>
  ),
  house: (
    <>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v10h12V10" />
      <path d="M11 14h2v6h-2z" />
    </>
  ),
  phone: (
    <path d="M5 3h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  ),
  check: <path d="m5 12 4.5 4.5L19 6" />,
  star: (
    <path d="m12 3 2.6 5.3 5.9.8-4.3 4.1 1 5.8L12 16.3 6.8 19l1-5.8L3.5 9.1l5.9-.8z" />
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.2 2.8 8 7 10 4.2-2 7-5.8 7-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c4-4 7-7.5 7-11a7 7 0 1 0-14 0c0 3.5 3 7 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
}
