/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8C84A',
          dark: '#B8941F',
          muted: 'rgba(212,175,55,0.15)',
        },
        dark: {
          DEFAULT: '#000000',
          secondary: '#121212',
          card: '#1A1A1A',
          border: '#2A2A2A',
          hover: '#242424',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #E8C84A 50%, #B8941F 100%)',
        'gold-radial': 'radial-gradient(ellipse at center, rgba(212,175,55,0.15) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'gold': '0 0 40px rgba(212,175,55,0.3)',
        'gold-sm': '0 0 20px rgba(212,175,55,0.2)',
        'card': '0 4px 40px rgba(0,0,0,0.6)',
      }
    },
  },
  plugins: [],
}
