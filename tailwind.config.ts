import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0056B3',
          light: '#ADD8E6',
        },
        accent: '#ADD8E6',
        neutral: {
          50: '#F8F8F8',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        error: '#EF4444',
        warning: '#FBBF24',
        success: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans CJK TC', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
