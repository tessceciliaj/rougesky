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
    colors: {
      light: '#FFFFFF',
      dark: '#0E0E0E',
      blue: '#00D1FF',
      green: '#00D870',
      pink: '#EB0256',
    },
  },
  plugins: [],
}

export default config
