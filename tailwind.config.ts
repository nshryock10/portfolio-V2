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
        'text-slide': 'text-slide 8s infinite',
        'text-slide2': 'text-slide2 8s  infinite',
        'text-slide3': 'text-slide3 8s  infinite',
      },
      keyframes: {
        'text-slide': {
          '0%': {
            transform: 'translateX(-200%)',
            animationDelay: '0s',
          },
          '16.6%': {
            transform: 'translateX(-199%)',
            animationDelay: '5s',
          },
          '33.3%': {
            transform: 'translateX(-198%)',
            animationDelay: '5s',
          },
          '49.8%': {
            transform: 'translateX(-197%)',
            animationDelay: '0s',
          },
          '66.4%': {
            transform: 'translateX(-196%)',
            animationDelay: '0s',
          },
          '83%': {
            transform: 'translateX(0)',
            animationDelay: '0s',
          },
          '100%': {
            transform: 'translateX(250%)',
            animationDelay: '0s',
          },
        },
        'text-slide2': {
          '0%': {
            transform: 'translateY(700px) rotate(-90deg)',
            animationDelay: '0s',
          },
          '16.6%': {
            transform: 'translateY(650px) rotate(-90deg)',
            animationDelay: '0s',
          },
          '33.3%': {
            transform: 'translateY(649px) rotate(-90deg)',
            animationDelay: '0s',
          },
          '49.8%': {
            transform: 'translateY(0px) rotate(-90deg)',
            animationDelay: '10s',
          },
          '66.4%': {
            transform: 'translateY(-500px) rotate(-90deg)',
            animationDelay: '10s',
          },
          '83%': {
            transform: 'translateY(-505px) rotate(-90deg)',
            animationDelay: '10s',
          },
          '100%': {
            transform: 'translateY(-600px) rotate(-90deg)',
            animationDelay: '0s',
          }
        },
        'text-slide3': {
          '0%': {
            transform: 'translateX(150%) rotate(180deg)',
            animationDelay: '0s',
          },
          '16.6%': {
            transform: 'translateX(0) rotate(180deg)',
            animationDelay: '0s',
          },
          '33.3%': {
            transform: 'translateX(-150%) rotate(180deg)',
            animationDelay: '0s',
          },
          '49.8%': {
            transform: 'translateX(-151%) rotate(180deg)',
            animationDelay: '10s',
          },
          '66.4%': {
            transform: 'translateX(-200%) rotate(180deg)',
            animationDelay: '0s',
          },
          '83%': {
            transform: 'translateX(-220%) rotate(180deg)',
            animationDelay: '0s',
          },
          '100%': {
            transform: 'translateX(-250%) rotate(180deg)',
            animationDelay: '0s',
          }
        },
      },
    },
    
  },
  plugins: [],
}
export default config
