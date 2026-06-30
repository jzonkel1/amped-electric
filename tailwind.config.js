/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4A63A',
          light: '#F0C868',
          deep: '#B8862A',
          glow: '#FFD970',
        },
        charcoal: '#151515',
        ink: '#0D0D0D',
        warm: '#F8F8F8',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Oswald', 'Impact', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 10px 40px -10px rgba(212,166,58,0.45)',
        'gold-lg': '0 20px 60px -12px rgba(212,166,58,0.55)',
        card: '0 18px 50px -20px rgba(0,0,0,0.8)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F0C868 0%, #D4A63A 45%, #B8862A 100%)',
        'gold-sheen': 'linear-gradient(180deg, #FFE9A8 0%, #D4A63A 50%, #9C7322 100%)',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,166,58,0.5), 0 8px 30px -8px rgba(212,166,58,0.6)' },
          '50%': { boxShadow: '0 0 0 8px rgba(212,166,58,0), 0 12px 40px -6px rgba(212,166,58,0.8)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 2.8s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
