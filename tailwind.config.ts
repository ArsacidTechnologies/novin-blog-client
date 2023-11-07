import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        yekan: ['Yekan', 'sans'],
        Vazir: ["Vazir"],
        "Vazir-Bold": ["Vazir-Bold"],
        "Vazir-Light": ["Vazir-Light"],
        "Vazir-Medium": ["Vazir-Medium"],
        "Vazir-Thin": ["Vazir-Thin"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    }
  },
  darkMode: 'class',
  plugins: [
    require('rippleui'),
    nextui({
      // addCommonColors: true,
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            background: '#ffffff',
            foreground: '#0D001A',

          } // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: '#2B2B29',
            foreground: '#ffffff',
          } // dark theme colors
        },
        modern: {
          extend: 'dark', // <- inherit default values from dark theme
          colors: {
            background: '#0D001A',
            foreground: '#ffffff',
            content1: '#F182F6',
            primary: {
              50: '#3B096C',
              100: '#520F83',
              200: '#7318A2',
              300: '#9823C2',
              400: '#c031e2',
              500: '#DD62ED',
              600: '#F182F6',
              700: '#FCADF9',
              800: '#FDD5F9',
              900: '#FEECFE',
              DEFAULT: '#DD62ED',
              foreground: '#ffffff'
            },
            focus: '#F182F6'
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '1px',
              medium: '2px',
              large: '4px'
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px'
            }
          }
        }
      }
    })
  ]
}
export default config