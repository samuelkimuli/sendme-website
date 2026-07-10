/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          400: '#4ade80',
          500: '#00b14f',
          600: '#009940',
          700: '#007a33',
        },
        navy: {
          800: '#0f1f3d',
          900: '#0a1628',
          950: '#060e1a',
        },
        electric: {
          400: '#60a5fa',
          500: '#1a56db',
          600: '#1447c0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

