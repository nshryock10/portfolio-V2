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
      screens: {
        'lg': '1200px',
      },
      animation: {
        'text-slide': 'text-slide 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide2': 'text-slide2 10s cubic-bezier(0.83, 0, 0.17, 1)  infinite',
        'text-slide3': 'text-slide3 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'expander': 'transition-all 3s'
      },
      keyframes: {
        'text-slide': {
          '0%': {
            transform: 'translateX(-500px)',
            opacity: '0',
            scale: '0.5'

          },
          '16.6%': {
            transform: 'translateX(-490px)',
            opacity: '0',
            scale: '0.5'
          },
          '33.3%': {
            transform: 'translateX(-489px)',
            opacity: '0',
            scale: '0.5'
          },
          '49.8%': {
            transform: 'translateX(-488px)',
            opacity: '0',
            scale: '0.5'
          },
          '66.4%': {
            transform: 'translateX(-487px)',
            opacity: '0',
            scale: '0.5'
          },
          '83%': {
            transform: 'translateX(0)',
            opacity: '1',
            scale: '1'
          },
          '100%': {
            transform: 'translateX(500px)',
            opacity: '0',
            scale: '1'
          },
        },
        'text-slide2': {
          '0%': {
            transform: 'translateX(-700px)',
            opacity: '0',
            scale: '0.5'
          },
          '16.6%': {
            transform: 'translateX(-650px)',
            opacity: '0',
            scale: '0.5'
          },
          '33.3%': {
            transform: 'translateX(-649px) ',
            opacity: '0',
            scale: '0.5'
          },
          '49.8%': {
            transform: 'translateX(0px) ',
            opacity: '1',
            scale: '1'
          },
          '66.4%': {
            transform: 'translateX(500px) ',
            opacity: '0',
            scale: '1'
          },
          '83%': {
            transform: 'translateX(505px) ',
            opacity: '0',
            scale: '1'
          },
          '100%': {
            transform: 'translateX(600px) ',
            opacity: '0',
            scale: '1'
          }
        },
        'text-slide3': {
          '0%': {
            transform: 'translateX(500px) rotate(180deg)',
            opacity: '0',
            scale: '0.5'
          },
          '16.6%': {
            transform: 'translateX(0) rotate(180deg)',
            opacity: '1',
            scale: '1'
          },
          '33.3%': {
            transform: 'translateX(-500px) rotate(180deg)',
            opacity: '0',
            scale: '1'
          },
          '49.8%': {
            transform: 'translateX(-501px) rotate(180deg)',
            opacity: '0',
            scale: '1'
          },
          '66.4%': {
            transform: 'translateX(-505px) rotate(180deg)',
            opacity: '0',
            scale: '1'
          },
          '83%': {
            transform: 'translateX(-510px) rotate(180deg)',
            opacity: '0',
            scale: '1'
          },
          '100%': {
            transform: 'translateX(-250%) rotate(180deg)',
            opacity: '0',
            scale: '1'
          }
        },
      },
    },
    
  },
  plugins: [],
}
export default config
