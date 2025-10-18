/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#3B82F6',
                    dark: '#60A5FA',
                },
                dark: {
                    bg: '#0a0a0a',
                    card: '#111111',
                    border: '#1e1e1e',
                },
                light: {
                    bg: '#ffffff',
                    card: '#f8fafc',
                    border: '#e2e8f0',
                },
                'light-bg': '#ffffff',
                'dark-bg': '#0a0a0a',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'grid-dark': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                'grid-light': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            },
            animation: {
                'fade-in': 'fade-in 0.5s ease-in-out',
                'slide-up': 'slide-up 0.5s ease-out',
                'slide-down': 'slide-down 0.5s ease-out',
                'slide-left': 'slide-left 0.5s ease-out',
                'slide-right': 'slide-right 0.5s ease-out',
                'scale-in': 'scale-in 0.5s ease-out',
                shimmer: 'shimmer 2s linear infinite',
                float: 'float 3s ease-in-out infinite',
                glow: 'glow 2s ease-in-out infinite',
                wave: 'wave 2s ease-in-out infinite',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'slide-down': {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'slide-left': {
                    '0%': { transform: 'translateX(20px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                'slide-right': {
                    '0%': { transform: 'translateX(-20px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                'scale-in': {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.5' },
                },
                wave: {
                    '0%': { transform: 'rotate(0deg)' },
                    '10%': { transform: 'rotate(14deg)' },
                    '20%': { transform: 'rotate(-8deg)' },
                    '30%': { transform: 'rotate(14deg)' },
                    '40%': { transform: 'rotate(-4deg)' },
                    '50%': { transform: 'rotate(10deg)' },
                    '60%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                },
            },
            boxShadow: {
                glow: '0 0 20px rgba(59, 130, 246, 0.5)',
                'glow-lg': '0 0 40px rgba(59, 130, 246, 0.6)',
                'glow-primary': '0 0 20px rgba(96, 165, 250, 0.5)',
            },
        },
    },
    plugins: [],
};

