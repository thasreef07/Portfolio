/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050706',
        surface: {
          DEFAULT: '#0B100D',
          light: '#131A16',
          card: 'rgba(18, 28, 21, 0.72)',
          glass: 'rgba(11, 16, 13, 0.8)',
          elevated: 'rgba(24, 38, 29, 0.65)'
        },
        neon: {
          green: '#6DFF9B',
          cyan: '#00D9FF',
          darkgreen: '#1a422b',
        },
        text: {
          main: '#F4F7F4',
          secondary: '#9AA8A2',
          muted: '#627068',
        },
        accent: {
          border: 'rgba(109, 255, 155, 0.18)',
          'border-hover': 'rgba(109, 255, 155, 0.45)',
          'border-cyan': 'rgba(0, 217, 255, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'sans-serif']
      },
      boxShadow: {
        'neon-sm': '0 0 10px rgba(109, 255, 155, 0.15)',
        'neon-md': '0 0 20px rgba(109, 255, 155, 0.22)',
        'neon-lg': '0 0 35px rgba(109, 255, 155, 0.28)',
        'cyan-md': '0 0 20px rgba(0, 217, 255, 0.22)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(109, 255, 155, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
