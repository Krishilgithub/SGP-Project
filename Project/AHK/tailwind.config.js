/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'main-image': "url('images/bgImage.png')",
            },
            colors: {
                'dark-color': "#0e1525",
                'main-color': "#212529",
                'text-color': "#c6c6c6",
                'subtitle-color': "#9112c7"
            }
        },
    },
    plugins: [],
}