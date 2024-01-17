import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'text-slide': 'text-slide 5s  infinite',
        'text-slide2': 'text-slide 5s  infinite',
      },
      keyframes: {
        'text-slide': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '50%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(150%)'
          }
        },
        'text-slide2': {
          '0% 20%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0%)'
          }
        }
      },
    },
  },
  plugins: [],
}
export default config
