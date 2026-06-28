/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                lav: {
                    DEFAULT: '#8b90d6',
                    deep: '#6f74c2',
                    soft: '#a6aae4',
                },
                cream: {
                    DEFAULT: '#fbf8ef',
                    edge: '#ece4d2',
                },
                ink: {
                    DEFAULT: '#3a3d7a',
                    soft: '#5c5fa0',
                },
                candy: {
                    pink: '#f5a4c2',
                    'pink-deep': '#e87fa6',
                    yellow: '#ffd24d',
                    mint: '#9fe0c0',
                    coral: '#ff9b6a',
                    sky: '#8fc4e8',
                },
            },
            fontFamily: {
                sans: ['Nunito', 'system-ui', 'sans-serif'],
                hand: ['Caveat', 'cursive'],
                marker: ['"Gochi Hand"', 'cursive'],
                script: ['"Dancing Script"', 'cursive'],
            },
        },
    },
    plugins: [],
};
