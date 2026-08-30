/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#daeeff',
          200: '#b8ddff',
          300: '#84c5ff',
          400: '#4aa5ff',
          500: '#1f87f5',
          600: '#0d6ce0',
          700: '#0a56b4',
          800: '#0c4891',
          900: '#0f3d76',
          950: '#0a2854',
        },
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae2',
          300: '#b0bac9',
          400: '#8595ac',
          500: '#667891',
          600: '#516178',
          700: '#424f60',
          800: '#394350',
          900: '#0f172a',
          950: '#0a0f1c',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd3',
          200: '#ffdba0',
          300: '#ffc066',
          400: '#ff9e32',
          500: '#fb8212',
          600: '#e3660a',
          700: '#bc4a0b',
          800: '#953a11',
          900: '#7a3112',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
