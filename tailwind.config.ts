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
      dark: '#000000',
      primary: '#00FFFF',
    },
  },
  plugins: [],
}

export default config
