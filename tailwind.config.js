/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Nord palette */
        nord: {
          /* Polar Night */
          darkest: '#2E3440',
          dark: '#3B4252',
          medium: '#434C5E',
          muted: '#4C566A',
          /* Snow Storm */
          white: '#ECEFF4',
          light: '#E5E9F0',
          lighter: '#D8DEE9',
          /* Frost */
          teal: '#8FBCBB',
          primary: '#88C0D0',
          blue: '#81A1C1',
          deep: '#5E81AC',
          /* Aurora */
          red: '#BF616A',
          orange: '#D08770',
          yellow: '#EBCB8B',
          green: '#A3BE8C',
          purple: '#B48EAD',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        nord: '8px',
        soft: '12px',
        pill: '9999px',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(46, 52, 64, 0.06), 0 4px 12px rgba(46, 52, 64, 0.04)',
        hover: '0 4px 16px rgba(46, 52, 64, 0.08), 0 8px 24px rgba(46, 52, 64, 0.04)',
        'btn-glow': '0 4px 12px rgba(136, 192, 208, 0.3)',
        'btn-glow-dark': '0 4px 12px rgba(94, 129, 172, 0.3)',
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
