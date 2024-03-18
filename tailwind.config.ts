import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1100px',
        xl: '1440px',
      },
      colors: {
        text: '#d4d4d4',
        white: "#fefce8",
        violet: '#5b21b6',
        pink: '#86198f',
        purple: '#581c87',
        blue: '#1e40af',
        bgGrey: '#09090b',
        b: '#1e3a8a',
      },
      backgroundImage: ({theme}) => ({
        'primary': `linear-gradient(to right, ${theme('colors.purple')}, ${theme('colors.blue')})`,
        'primary-hover': `linear-gradient(to right, ${theme('colors.purple')}, ${theme('colors.pink')}, ${theme('colors.pink')})`,

        'secondary': `linear-gradient(to right, ${theme('colors.purple')}, ${theme('colors.b')})`,
        'secondary-hover': `linear-gradient(to right, ${theme('colors.violet')}, ${theme('colors.pink')}, ${theme('colors.pink')})`,
        'radial': `radial-gradient(${theme('colors.purple')}, #4a044e)`,
        'radial-hover': `radial-gradient(#2e1065, #2e1065)`,
      }),
      fontFamily: {
        sans: ['Anta', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
