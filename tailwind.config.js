/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warme brunch-tinten: crema, karamel, kaneel, espresso + matcha
        crema: {
          DEFAULT: '#FBF7F0',
          warm: '#F4EDE1',
          deep: '#E8DCC8',
        },
        espresso: {
          DEFAULT: '#2B211B',
          soft: '#4F4138',
          mist: '#8A7A6D',
        },
        cinnamon: {
          DEFAULT: '#B5622F',
          deep: '#93481C',
          soft: '#E0A87E',
        },
        butter: {
          DEFAULT: '#E9B84C',
          soft: '#F5DCA4',
        },
        matcha: {
          DEFAULT: '#7A9B5E',
          deep: '#5C7A44',
        },
      },
      fontFamily: {
        display: ['"Young Serif"', 'serif'],
        body: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 34s linear infinite',
      },
    },
  },
  plugins: [],
}
