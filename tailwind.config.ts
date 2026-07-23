import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(18 90% 50%)',
        'primary-foreground': 'hsl(0 0% 100%)',
        secondary: 'hsl(42 95% 55%)',
        accent: 'hsl(30 85% 45%)',
        background: 'hsl(36 30% 97%)',
        foreground: 'hsl(20 30% 15%)',
        muted: 'hsl(30 20% 90%)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, hsl(18 90% 50%), hsl(42 95% 55%))',
        'gradient-warm': 'linear-gradient(180deg, hsl(36 30% 97%) 0%, hsl(30 20% 90%) 100%)',
      },
      boxShadow: {
        warm: '0 10px 40px rgba(230, 126, 34, 0.15)',
        glow: '0 0 30px rgba(230, 126, 34, 0.4)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-warm': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out',
        'pulse-warm': 'pulse-warm 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
