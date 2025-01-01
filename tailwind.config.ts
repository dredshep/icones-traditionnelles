import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3': {
              fontFamily: 'var(--font-playfair)',
            },
            h1: {
              fontSize: '3.5rem',
              marginBottom: '3rem',
              textAlign: 'center',
              background: 'linear-gradient(to right, rgb(31, 41, 55), rgb(75, 85, 99))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            },
            h2: {
              fontSize: '2.5rem',
              marginTop: '4rem',
              marginBottom: '2rem',
              borderBottom: '1px solid rgb(229, 231, 235)',
              paddingBottom: '1rem',
            },
            h3: {
              fontSize: '1.875rem',
              marginTop: '3rem',
              marginBottom: '1.5rem',
            },
            p: {
              fontSize: '1.125rem',
              lineHeight: '1.75',
              marginBottom: '1.5rem',
              fontWeight: '300',
            },
            img: {
              borderRadius: '0.5rem',
              boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              margin: '3rem auto',
            },
            em: {
              color: 'rgb(107, 114, 128)',
              fontStyle: 'italic',
              display: 'block',
              textAlign: 'center',
              marginBottom: '2rem',
              fontWeight: '300',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
