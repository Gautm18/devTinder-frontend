/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        arrowFly: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(90px)' }
        },
        heartHit: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' }
        }
      },
      animation: {
        arrowFly: 'arrowFly 1.5s ease-in-out forwards',
        heartHit: 'heartHit 1.5s ease-in-out'
      }
    }
  },
  plugins: [daisyui], 
}
