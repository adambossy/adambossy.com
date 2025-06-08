/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            maxWidth: '65ch',
            h1: {
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '1em'
            },
            h2: {
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: '600',
              position: 'relative',
              marginTop: '0.5em',
              marginBottom: '0.75em',
              paddingTop: '1.25em',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: '#e5e7eb'
              }
            },
            p: {
              marginTop: '0',
              marginBottom: '1.65em',
              lineHeight: '1.65'
            },
            'p + p': {
              marginTop: '1.65em'
            },
            img: {
              marginTop: '2.5em',
              marginBottom: '2.5em'
            },
            ul: {
              marginTop: '1.5em',
              marginBottom: '1.5em'
            }
          },
        },
        lg: {
          css: {
            h2: {
              marginTop: '1.1em',
              marginBottom: '0.5em'
            }
          }
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}