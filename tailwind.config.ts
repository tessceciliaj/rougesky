import { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      body: 'var(--font-IMB)',
      title: 'var(--font-vt323)',
    },
    extend: {
      colors: {
        lightOpacity: 'rgba(255, 255, 255, 0.7)',
        darkOpacity: 'rgba(0,0,0,0.5)',
        lightColor: '#FFFFFF',
        darkColor: '#0E0E0E',
        darkGrey: '#292929',
        lightGrey: '#B3D73B',
        accentColor: '#00D1FF',
        green: '#00D870',
        pink: '#EB0256',
      },
    },
  },
  plugins: [],
}

export default config
