/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                yellowText: '#EAC926',
                orangeText: '#FF8101',
                whiteText: '#FFFAEC'
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif']
            }
        }
    },
    plugins: []
};
