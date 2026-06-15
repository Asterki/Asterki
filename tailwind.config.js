/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#a71b3e',
          dark: '#7a1230',
          light: '#c9295a',
          soft: '#fce4e9',
        },
        accent: {
          green: '#6dc362',
          blue: '#61b6d3',
          orange: '#e17526',
          'green-soft': '#e8f5e6',
          'blue-soft': '#e4f2f8',
          'orange-soft': '#fdf0e3',
        },
        ink: {
          DEFAULT: '#1a1a1a',
          deep: '#000000',
        },
        surface: {
          canvas: '#ffffff',
          cloud: '#f8fafc',
          fog: '#f1f5f9',
        },
        text: {
          ink: '#1a1a1a',
          charcoal: '#475569',
          graphite: '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        friendly: '12px',
        pill: '9999px',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)',
        hover: '0 4px 16px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)',
        'btn-glow': '0 4px 12px rgba(167, 27, 62, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
