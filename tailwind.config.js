/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightOpacity: 'rgba(255, 255, 255, 0.7)',
        darkOpacity: 'rgba(0,0,0,0.5)',
        lightColor: '#FFFFFF',
        darkColor: '#0E0E0E',
        darkGrey: '#292929',
        lightGrey: '#B3D73B',
        accentColor: '#00D1FF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        body: 'var(--font-IMB)',
        title: 'var(--font-vt323)',
      },
    },
  },
  plugins: [],
}
