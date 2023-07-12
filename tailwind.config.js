/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Rubik', 'sans-serif'],
            },
            colors: {
                theme: {
                    lightBlue: '#5267DF',
                    darkBlue: '#242A45',
                    red: '#FA5959',
                },
            },
        },

        plugins: [],
    },
};
