/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Light color scheme focusing on blues, pink, tan, and grey
        primary: {
          50: '#f0f9ff',   // very light blue
          100: '#e0f2fe',  // light blue
          200: '#bae6fd',  // soft blue
          300: '#7dd3fc',  // medium blue
          400: '#38bdf8',  // bright blue
          500: '#0ea5e9',  // main blue
          600: '#0284c7',  // darker blue
          700: '#0369a1',  // deep blue
          800: '#075985',  // very dark blue
          900: '#0c4a6e',  // darkest blue
        },
        accent: {
          50: '#fdf2f8',   // very light pink
          100: '#fce7f3',  // light pink
          200: '#fbcfe8',  // soft pink
          300: '#f9a8d4',  // medium pink
          400: '#f472b6',  // bright pink
          500: '#ec4899',  // main pink
          600: '#db2777',  // darker pink
          700: '#be185d',  // deep pink
          800: '#9d174d',  // very dark pink
          900: '#831843',  // darkest pink
        },
        neutral: {
          50: '#fafaf9',   // very light tan/grey
          100: '#f5f5f4',  // light tan/grey
          200: '#e7e5e4',  // soft tan/grey
          300: '#d6d3d1',  // medium tan/grey
          400: '#a8a29e',  // tan/grey
          500: '#78716c',  // main tan/grey
          600: '#57534e',  // darker tan/grey
          700: '#44403c',  // deep tan/grey
          800: '#292524',  // very dark tan/grey
          900: '#1c1917',  // darkest tan/grey
        }
      }
    },
  },
  plugins: [],
}