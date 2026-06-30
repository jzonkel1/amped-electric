import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Brief branded intro overlay that fades on load.
export default function Loader() {
  const [done, setDone] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="glow-radial absolute h-[400px] w-[400px]" />
          <motion.img
            src="./assets/logo.png"
            alt="AMPED Electric"
            className="relative h-12 w-auto sm:h-16"
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute bottom-1/3 h-px w-40 overflow-hidden rounded-full bg-white/10"
          >
            <motion.div
              className="h-full bg-gold"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
