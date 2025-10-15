import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import type { PluginAPI } from 'tailwindcss/types/config'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  './styles/**/*.css',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: '#0056B3',
          light: '#ADD8E6',
        },
        'primary-foreground': 'rgb(var(--primary-foreground) / <alpha-value>)',
        secondary: '#ADD8E6',
        'secondary-foreground': 'rgb(var(--secondary-foreground) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        'muted-foreground': 'rgb(var(--muted-foreground) / <alpha-value>)',
        accent: '#ADD8E6',
        'accent-foreground': 'rgb(var(--accent-foreground) / <alpha-value>)',
        destructive: '#EF4444',
        'destructive-foreground': 'rgb(var(--destructive-foreground) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        input: 'rgb(var(--input) / <alpha-value>)',
        ring: 'rgb(var(--ring) / <alpha-value>)',
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
  safelist: [
    'border-border',
    'bg-background',
    'text-foreground',
    'ring-ring',
    'ring-offset-background',
    'border-input',
  ],
  plugins: [
    plugin(function ({ addUtilities }: PluginAPI) {
      addUtilities(
        {
          '.border-border': { 'border-color': 'rgb(var(--border))' },
          '.bg-background': { 'background-color': 'rgb(var(--background))' },
          '.text-foreground': { color: 'rgb(var(--foreground))' },
          '.ring-ring': { '--tw-ring-color': 'rgb(var(--ring))' },
          '.ring-offset-background': { '--tw-ring-offset-color': 'rgb(var(--background))' },
          '.border-input': { 'border-color': 'rgb(var(--input))' },
        }
      )
    }),
  ],
}

export default config