/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                base: {
                    DEFAULT: '#08090a',
                    elev: '#0d0e10',
                    surface: '#121316',
                    raised: '#17181c',
                },
                line: {
                    DEFAULT: 'rgba(255,255,255,0.07)',
                    strong: 'rgba(255,255,255,0.13)',
                },
                ink: {
                    DEFAULT: '#ededef',
                    muted: '#8b8d93',
                    faint: '#5c5e65',
                    ghost: '#3a3c42',
                },
                signal: {
                    DEFAULT: '#4ade80',
                    dim: '#2fa863',
                    glow: 'rgba(74,222,128,0.18)',
                },
            },
            fontFamily: {
                sans: ['"Inter Tight"', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
                serif: ['"Instrument Serif"', 'Georgia', 'serif'],
            },
            fontSize: {
                '2xs': ['0.6875rem', { lineHeight: '1rem' }],
            },
            letterSpacing: {
                tightest: '-0.045em',
            },
            maxWidth: {
                shell: '76rem',
            },
            transitionTimingFunction: {
                out: 'cubic-bezier(0.16, 1, 0.3, 1)',
            },
            animation: {
                'pulse-dot': 'pulse-dot 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
                marquee: 'marquee 46s linear infinite',
                shimmer: 'shimmer 2.6s linear infinite',
            },
            keyframes: {
                'pulse-dot': {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(74,222,128,0.45)' },
                    '50%': { opacity: '0.75', boxShadow: '0 0 0 5px rgba(74,222,128,0)' },
                },
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
                shimmer: {
                    from: { backgroundPosition: '200% 0' },
                    to: { backgroundPosition: '-200% 0' },
                },
            },
        },
    },
    plugins: [],
};
