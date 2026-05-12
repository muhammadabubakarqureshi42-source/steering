export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // tailwind.config.js
theme: {
  extend: {
    animation: {
      'float': 'float 4s ease-in-out infinite',
      'spin-slow': 'spin 12s linear infinite',
      'pulse-ring': 'pulse-ring 2.5s ease-out infinite',
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-8px)' },
      },
      'pulse-ring': {
        '0%': { transform: 'scale(0.95)', opacity: '0.6' },
        '100%': { transform: 'scale(1.15)', opacity: '0' },
      },
    },
  },
},
  plugins: [],
}