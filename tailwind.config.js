/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        ink: '#0A0A0A',
        graphite: '#111111',
        coal: '#1A1A1A',
        paper: '#F5F5F2',
        bone: '#E9E8E3',
        accent: '#F2542D',
        'accent-ink': '#B8300F',
        slate: '#4A4A47',
        ash: '#6B6B66',
        mist: '#A8A8A3',
        fog: '#85857F',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(2.4rem, min(8.2vw, 13svh), 9rem)', { lineHeight: '0.94', letterSpacing: '-0.04em' }],
        display: ['clamp(2.75rem, 6vw, 7rem)', { lineHeight: '0.98', letterSpacing: '-0.04em' }],
        headline: ['clamp(2.25rem, 4.2vw, 4.75rem)', { lineHeight: '1', letterSpacing: '-0.035em' }],
        title: ['clamp(1.6rem, 2.6vw, 2.5rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        lead: ['clamp(1.125rem, 1.5vw, 1.5rem)', { lineHeight: '1.45' }],
        body: ['1.0625rem', { lineHeight: '1.6' }],
        meta: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      maxWidth: {
        wrap: '1680px',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-50%,0,0)' },
        },
        flow: {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-18' },
        },
        ring: {
          '0%': { transform: 'scale(1)', opacity: '0.55' },
          '100%': { transform: 'scale(2.6)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 70s linear infinite',
        flow: 'flow 2.6s linear infinite',
        ring: 'ring 3.4s cubic-bezier(0.22, 1, 0.36, 1) infinite',
      },
    },
  },
  plugins: [],
}
