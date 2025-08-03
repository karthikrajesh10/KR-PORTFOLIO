/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'lux-purple': '#1f0743',       // deep royal purple background base
        'royal-blue': '#4169e1',       // primary accent for text
        'muted-white': '#f5f7fa',      // soft white
        'soft-gray': '#a3a9c0',         // secondary text
        // optional subtle gold accent if you want a touch of luxury:
        'golden': '#d4af37',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
