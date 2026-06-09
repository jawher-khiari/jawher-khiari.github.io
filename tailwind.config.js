/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)', elev: 'var(--bg-elev)', surf: 'var(--surface)', surf2: 'var(--surface-2)',
        card: 'var(--surface-card)', hover: 'var(--surface-hover)',
        line: 'var(--border)', line2: 'var(--border-strong)',
        ink: 'var(--text-strong)', dim: 'var(--text-body)', muted: 'var(--text-muted)', faint: 'var(--text-faint)',
        accent: 'var(--accent)', acc2: 'var(--accent-strong)', onacc: 'var(--on-accent)',
        accsoft: 'var(--accent-soft)', wip: 'var(--wip)', ok: 'var(--success)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'ui-sans-serif', 'sans-serif'],
        sans: ['Hanken Grotesk', 'ui-sans-serif', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: { field: '14px', lg2: '20px', card: '28px', pill: '999px' },
      boxShadow: {
        soft: 'var(--shadow-md)', big: 'var(--shadow-lg)', glow: 'var(--shadow-accent)',
        inset1: 'var(--ring-inset)',
      },
      maxWidth: { container: '1200px', wide: '1360px', prose2: '46rem' },
      letterSpacing: { eyebrow: '0.18em', tighter2: '-0.04em' },
      transitionTimingFunction: { brand: 'cubic-bezier(0.22,1,0.36,1)' },
      keyframes: {
        floa: { '0%,100%': { transform: 'translate(0,0)' }, '50%': { transform: 'translate(4vw,3vw)' } },
        flob: { '0%,100%': { transform: 'translate(0,0)' }, '50%': { transform: 'translate(-3vw,-2vw)' } },
        ping2: { '0%': { boxShadow: '0 0 0 0 color-mix(in srgb, var(--success) 55%, transparent)' }, '70%': { boxShadow: '0 0 0 9px transparent' }, '100%': { boxShadow: '0 0 0 0 transparent' } },
        dotpulse: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.3' } },
      },
      animation: {
        floa: 'floa 16s ease-in-out infinite', flob: 'flob 20s ease-in-out infinite',
        ping2: 'ping2 2s ease-in-out infinite', dotpulse: 'dotpulse 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
